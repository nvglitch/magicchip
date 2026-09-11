"""Repair cropped PDF views without changing source brochures or product parameters."""
import importlib.util,json,re
from pathlib import Path
from pypdf import PdfReader
ROOT=Path(__file__).resolve().parents[1]
def module(name,file):
 s=importlib.util.spec_from_file_location(name,ROOT/'scripts'/file);m=importlib.util.module_from_spec(s);s.loader.exec_module(m);return m
renderer=module('renderer','pdf-product-images.py'); importer=module('brochures','import-september-products.py')
root=importer.SOURCE_ROOT
models=['mcaipc3a','mcaipc3b','mcaipc3c','mcaipc3d','mcipc1','mcn7a','mcn7p']
for mid in models:
 source=next(p for p in root.rglob('*.pdf') if p.stem.lower().startswith(mid+' '))
 views=renderer.rendered_images(PdfReader(source).pages[0])
 base=f'/assets/products/ai/brochure/{mid}' if mid.startswith('mcai') else f'/assets/products/commercial/ver2/{mid}' if mid.startswith('mcn') else f'/assets/products/industrial/c-series/{mid}/images'
 out=ROOT/'public'/base.lstrip('/')
 for i,im in enumerate(views): importer.square(im,out/f'view-{i+1}.webp')
 importer.square(views[-1] if mid!='mcipc1' else views[0],out/'main.webp')
 if mid=='mcipc1':
  from PIL import Image
  Image.open(out/'main.webp').save(out/'main-square-srgb.jpg',quality=95)
  p=ROOT/'lib/industrial-catalog.ts';s=p.read_text(encoding='utf-8');needle='"id": "mcipc1",';cards=[dict(image=f'{base}/view-{i+1}.webp',title=f'MCIPC1 {title}') for i,title in enumerate(['front panel','rear panel'])];s=re.sub(r'("id": "mcipc1",)\n    "galleryImages": [^\n]+\n    "galleryCards": [^\n]+', r'\1', s);s=s.replace(needle,needle+'\n    "galleryImages": '+json.dumps([c['image'] for c in cards])+',\n    "galleryCards": '+json.dumps(cards)+',');p.write_text(s,encoding='utf-8')
 print(mid,len(views),flush=True)
