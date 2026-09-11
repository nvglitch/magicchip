"""Read-only source audit. Accept a JSON search-index snapshot and an output JSON path."""
from pathlib import Path
import json, re, sys, importlib.util, hashlib
import pdfplumber

sys.stdout.reconfigure(encoding='utf-8')
snapshot = json.loads(Path(sys.argv[1]).read_text(encoding='utf-8'))
normalize = lambda value: re.sub('[^a-z0-9]', '', value.lower())
lookup = {normalize(item['title']): item for item in snapshot if item['type'] == 'product'}
spec = importlib.util.spec_from_file_location('brochures', Path(__file__).with_name('import-september-products.py'))
brochures = importlib.util.module_from_spec(spec)
spec.loader.exec_module(brochures)
audit = []
for source in brochures.SOURCE_ROOT.rglob('*.pdf'):
    if 'NAS主板' in source.parts: continue
    model = re.sub(r'\s*brochure$', '', source.stem, flags=re.I)
    key = normalize(model)
    key = {'mcmqrseries': 'mcmqr5r6r7r8', 'newmcsr613u': 'mcsr613u'}.get(key, key)
    entry = lookup.get(key)
    with pdfplumber.open(source) as pdf:
        text = '\n'.join(page.extract_text() or '' for page in pdf.pages)
        try: rows = brochures.specifications(pdf.pages[0], model, 815 if model == 'MCIPCE1' else 740)
        except Exception: rows = []
    differences = []
    if entry:
        for row in rows:
            if row['label'] not in ['CPU', 'Memory', 'Network', 'DC input', 'Power', 'Input']: continue
            field = {'DC input': 'Power', 'Input': 'Power'}.get(row['label'], row['label'])
            current = ' '.join(s['value'] for s in entry['specs'] if field.lower() in s['label'].lower() or (field == 'CPU' and s['label'] in ['Processor', 'Mainboard series']))
            missing = set(re.findall(r'\d+(?:\.\d+)?', row['value'])) - set(re.findall(r'\d+(?:\.\d+)?', current))
            if missing: differences.append(dict(label=field, source=row['value'], site=current, missing=sorted(missing)))
    audit.append(dict(relativePath=source.relative_to(brochures.SOURCE_ROOT).as_posix(), model=model, href=entry['href'] if entry else None, sha256=hashlib.sha256(source.read_bytes()).hexdigest(), rows=rows, text=text, coreDifferences=differences))
    if not entry or differences or not rows: print(model, 'NO MAPPING' if not entry else differences or 'SPECIAL TABLE')
Path(sys.argv[2]).write_text(json.dumps(audit, ensure_ascii=False, indent=2), encoding='utf-8')
print('Audited', len(audit), 'source PDFs. Numeric comparisons are review aids, not automatic approval.')
