"""Import the reviewed September 14 NAS changes from read-only ver2 PDFs."""
from pathlib import Path
import importlib.util,json,hashlib
import pdfplumber
from pypdf import PdfReader
ROOT=Path(__file__).resolve().parents[1]
s=importlib.util.spec_from_file_location('b',ROOT/'scripts/import-september-products.py');b=importlib.util.module_from_spec(s);s.loader.exec_module(b)
meta={
'MCNASH14':dict(tagline='Intel Core i5-12500H / i7-13620H NAS PC with four 2.5GbE ports',description='MCNASH14 combines Intel Core i5-12500H or i7-13620H processors, up to 64GB DDR5, four Intel i226 2.5GbE ports, M.2 NVMe and SATA storage, and PCIe expansion in a 150 x 143 x 84 mm enclosure. It uses 12V DC input and supports optional network expansion.',highlights=['Intel Core i5-12500H / i7-13620H','Up to 64GB DDR5','4 x Intel i226 2.5GbE','12V DC input'],operatingRange='0°C to 50°C'),
'MCNASH15':dict(tagline='Intel Core Ultra NAS PC with six 2.5GbE ports and optional 10G SFP+',description='MCNASH15 offers Intel Core Ultra 155H / 165H / 185H processor options, up to 96GB DDR5, six Intel i226 2.5GbE ports, dual M.2 PCIe storage and SATA. The standard H15-155H-6L configuration can be ordered with two or four additional 10G SFP+ ports. The 165 x 154 x 78 mm enclosure uses 19V DC input.',highlights=['Intel Core Ultra options','Up to 96GB DDR5','6 x Intel i226 2.5GbE','Optional 2 / 4 x 10G SFP+'],operatingRange='0°C to 50°C with commercial HDD; -20°C to 50°C with industrial SSD')}
records=[]
for model,copy in meta.items():
 source=b.source_file(model)
 with pdfplumber.open(source) as pdf:rows=b.specifications(pdf.pages[0],model,740)
 for row in rows:
  row['label']={'DC input':'Power','Front I/O - Ports':'Network panel I/O','Rear I/O - Ports':'USB and control panel I/O'}.get(row['label'],row['label'])
  if row['label']=='CPU' and model=='MCNASH15':row['value']='Intel Core Ultra 155H / 165H / 185H (Meteor Lake)'
 views=b.images(PdfReader(source).pages[0],None);mid=model.lower();base=f'/assets/products/commercial/ver2/{mid}';out=ROOT/'public'/base.lstrip('/')
 # Use the network panel so the LAN configuration is visible immediately.
 b.square(views[1],out/'main.webp')
 cards=[]
 for i,view in enumerate(views):
  b.square(view,out/f'view-{i+1}.webp');cards.append(dict(image=f'{base}/view-{i+1}.webp',title=f'{model} '+['USB and control panel','network panel'][i],description='Standard H15-155H-6L shown; optional configurations add SFP+ ports.' if model=='MCNASH15' else ''))
 item=dict(id=mid,name=model,series='NAS',**copy,image=f'{base}/main.webp',galleryImages=[c['image'] for c in cards],galleryCards=cards,specs=rows,sourceBrochure=source.relative_to(b.SOURCE_ROOT).as_posix(),sourceSha256=hashlib.sha256(source.read_bytes()).hexdigest())
 records.append(item)
 cms=dict(item,category='commercial-mini-pc',images=[item['image']],specifications=rows);(ROOT/f'content/products/items/{mid}.json').write_text(json.dumps(cms,ensure_ascii=False,indent=2)+'\n',encoding='utf-8')
(ROOT/'lib/nas-september-updates.ts').write_text('// Reviewed source changes from September 14, 2026.\nexport const nasSeptemberUpdates = '+json.dumps(records,ensure_ascii=False,indent=2)+';\n',encoding='utf-8')
print([(x['name'],len(x['specs'])) for x in records])
