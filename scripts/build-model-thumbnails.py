"""Build consistently framed thumbnails from the actual product detail hero images.
Run against a local preview: python scripts/build-model-thumbnails.py http://localhost:3104
Exports the current product search index before generating images.
"""
import json,re,sys,html,subprocess
from pathlib import Path
from urllib.request import urlopen
from concurrent.futures import ThreadPoolExecutor
from PIL import Image,ImageChops
ROOT=Path(__file__).resolve().parents[1]
subprocess.run(['node', '-e', """
const fs=require('fs');fs.mkdirSync('node_modules/.cache',{recursive:true});
const source=fs.readFileSync('scripts/test-site-search.cjs','utf8').split('const { searchSite')[0].replaceAll('__dirname',JSON.stringify(process.cwd()+'/scripts'));
eval(source+";fs.writeFileSync('node_modules/.cache/preview-products.json',JSON.stringify(load('lib/site-search.ts').siteSearchIndex.filter(x=>x.type==='product')));");
"""],cwd=ROOT,check=True)
items=json.loads((ROOT/'node_modules/.cache/preview-products.json').read_text(encoding='utf-8'))
base=sys.argv[1]
def build(item):
    page=urlopen(base+item['href'],timeout=30).read().decode()
    match=re.search(r'<main\b.*?<img\b[^>]*\bsrc="([^"]+)"',page,re.S)
    if not match: raise ValueError('No detail hero: '+item['href'])
    source=html.unescape(match[1]); assert source.startswith('/assets/'),source
    im=Image.open(ROOT/'public'/source.lstrip('/')).convert('RGBA')
    bg=Image.new('RGBA',im.size,'white');bg.alpha_composite(im);im=bg.convert('RGB')
    diff=ImageChops.difference(im,Image.new('RGB',im.size,'white'))
    mask=diff.convert('L').point(lambda v:255 if v>24 else 0)
    box=mask.getbbox(); assert box,source
    im=im.crop(box);scale=min(576/im.width,320/im.height)
    im=im.resize((round(im.width*scale),round(im.height*scale)),Image.Resampling.LANCZOS)
    canvas=Image.new('RGB',(640,400),'white');canvas.paste(im,((640-im.width)//2,(400-im.height)//2))
    mid=item['href'].split('/')[-1];target=f'/assets/products/thumbnails/{mid}.webp'
    dest=ROOT/'public'/target.lstrip('/');dest.parent.mkdir(parents=True,exist_ok=True);canvas.save(dest,'WEBP',quality=90)
    return mid,dict(image=target,source=source)
with ThreadPoolExecutor(max_workers=6) as pool: records=dict(pool.map(build,items))
(ROOT/'lib/model-thumbnails.ts').write_text('// Generated from detail hero images by scripts/build-model-thumbnails.py.\nexport const modelThumbnails: Record<string, { image: string; source: string }> = '+json.dumps(records,indent=2)+';\n',encoding='utf-8')
print('Generated',len(records),'thumbnails')
