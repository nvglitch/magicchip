"""Reviewed September 11 updates from the external ver2 archive; source PDFs are read-only."""
from pathlib import Path
import importlib.util
import json
import hashlib
import re
import pdfplumber
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('brochures', ROOT / 'scripts/import-september-products.py')
brochures = importlib.util.module_from_spec(spec)
spec.loader.exec_module(brochures)
META = {
    'MCIPCB13A': ('B', 'Configurable Intel Core industrial PC with dual LAN and dual COM', 'MCIPCB13A offers Intel Core i3/i5/i7 processor options across the 4th, 6th, 7th, 8th, 10th, 12th and 13th generations, with DDR3L, DDR4 or DDR5 memory depending on the platform. The 12th/13th Gen configuration supports up to 64GB DDR5. Dual Gigabit Ethernet, two DB9 COM ports, eight USB ports and 12–19V input fit a 193.9 x 127 x 57.2 mm enclosure.', ['Intel Core options', '2 x Gigabit LAN', '2 x DB9 COM', '12–19V DC input']),
    'MCIPCB13B': ('B', 'Intel Core Ultra / Core 3 industrial PC with DDR5 and triple display', 'MCIPCB13B supports Intel Core Ultra Series 1/2 or Core 3 Series processors, up to 64GB DDR5, dual Gigabit LAN, two RS-232 ports, two HDMI outputs and DisplayPort. USB allocation and 2.5-inch storage availability depend on the selected processor platform.', ['Core Ultra / Core 3', 'Up to 64GB DDR5', '2 x HDMI + DisplayPort', '12–19V DC input']),
    'MCIPCE1': ('E', 'Intel Core i7-1360P industrial PC with four LAN ports and 9–36V input', 'MCIPCE1 combines an Intel Core i7-1360P, up to 32GB DDR4, two Gigabit and two 2.5GbE ports, six serial ports, and 14 GPIO signals. Four serial ports support RS-485/RS-422. A 9–36V Phoenix terminal input, multiple storage interfaces, and desktop or wall mounting support custom industrial deployments.', ['Intel Core i7-1360P', '2 x GbE + 2 x 2.5GbE', '6 x COM + 14 GPIO', '9–36V DC input']),
    'MC15UH': ('DPC', 'Intel Core Ultra desktop PC with USB4, OCuLink and dual 2.5GbE', 'MC15UH combines Intel Core Ultra 7 255H or Core Ultra 9 285H, Intel Arc 140T graphics, up to 128GB DDR5, dual NVMe storage, USB4 and OCuLink. HDMI, DisplayPort and USB4 provide display connectivity in a 132 x 132 x 50.5 mm desktop enclosure.', ['Core Ultra 7 / 9', 'Up to 128GB DDR5', 'Dual 2.5GbE', 'USB4 + OCuLink']),
    'MCAR9': ('DPC', 'AMD Ryzen AI 300 desktop PC with USB4 and OCuLink', 'MCAR9 provides AMD Ryzen AI 7 PRO 360, Ryzen AI 9 365 or Ryzen AI 9 HX 370 processor options, Radeon 880M/890M graphics, up to 128GB DDR5, dual 2.5GbE and dual NVMe storage. USB4 and OCuLink support high-speed peripherals and compatible external graphics docks.', ['Ryzen AI 300', 'Up to 128GB DDR5', 'Dual 2.5GbE', 'USB4 + OCuLink']),
    'MCN7A': ('DPC', 'Intel Core desktop PC with USB4 and triple-display connectivity', 'MCN7A offers Intel Core i3-1215U, i5-1235U or i7-12650H processor options, HDMI, DisplayPort and USB4, one 2.5GbE network port, dual NVMe slots and SATA storage. The compact enclosure measures 136 x 123 x 51 mm.', ['Intel Core options', 'USB4 + HDMI + DP', '1 x 2.5GbE', 'Dual NVMe + SATA']),
    'MCN7P': ('DPC', 'AMD Ryzen HS desktop PC with USB4 and dual 2.5GbE', 'MCN7P combines AMD Ryzen 7 7735HS, Ryzen 7 7840HS or Ryzen 9 7940HS processor options, up to 64GB DDR5, dual 2.5GbE, USB4, dual PCIe 4.0 NVMe slots and SATA storage in a 136 x 123 x 51 mm enclosure.', ['AMD Ryzen HS', 'Up to 64GB DDR5', 'Dual 2.5GbE', 'Dual PCIe 4.0 NVMe']),
    'MCTAR7': ('DPC', 'Compact AMD Ryzen desktop PC with dual HDMI and full-featured Type-C', 'MCTAR7 offers configurable AMD Ryzen processors, Radeon graphics, DDR4 memory, dual HDMI and full-featured Type-C connectivity. NVMe and SATA M.2 storage, Gigabit Ethernet, Wi-Fi 6 and Bluetooth 5.2 support everyday desktop deployments.', ['AMD Ryzen options', 'Up to 32GB DDR4', 'Dual HDMI + Type-C', 'NVMe + SATA M.2']),
}

def build():
    records = []
    for model, (series, tagline, description, highlights) in META.items():
        source = brochures.source_file(model)
        with pdfplumber.open(source) as pdf:
            rows = brochures.specifications(pdf.pages[0], model, 815 if model == 'MCIPCE1' else 740)
            views = brochures.images(PdfReader(source).pages[0], pdf.pages[0])
        if '(cid:' in json.dumps(rows):
            # Some revised PDFs lack Unicode mappings. Reuse visually reviewed
            # parameters only for the exact source fingerprint; never publish CID text.
            reviewed = json.loads((ROOT / 'content/products/items' / f'{model.lower()}.json').read_text(encoding='utf-8'))
            if reviewed.get('sourceSha256') != hashlib.sha256(source.read_bytes()).hexdigest():
                raise ValueError(f'{model}: PDF text encoding requires a fresh visual parameter review')
            rows = reviewed['specifications']
            if '(cid:' in json.dumps(rows):
                raise ValueError(f'{model}: reviewed parameters contain invalid PDF text')
        for row in rows:
            row['label'] = {'DC input': 'Power', 'Input': 'Power', 'Outputs': 'Display', 'Slots': 'Expansion', 'Features': 'Firmware'}.get(row['label'], row['label'])
            row['value'] = row['value'].replace('Intel Core Ultra 7255H/UItra 9285H Processor', 'Intel Core Ultra 7 255H / Core Ultra 9 285H')
            row['value'] = row['value'].replace('AMD Ryzen AI7 Pro360/Al9 365/Al9 HX370 Processor', 'AMD Ryzen AI 7 PRO 360 / Ryzen AI 9 365 / Ryzen AI 9 HX 370')
            row['value'] = row['value'].replace('Ubuntun', 'Ubuntu').replace('Phooenix', 'Phoenix')
            if model == 'MCN7A' and row['label'] == 'CPU': row['value'] = 'Intel Core i3-1215U / i5-1235U / i7-12650H'
            if model == 'MCN7P' and row['label'] == 'CPU': row['value'] = 'AMD Ryzen 7 7735HS / Ryzen 7 7840HS / Ryzen 9 7940HS'
        # Preserve established facts while conflicting brochure fields await confirmation.
        if model == 'MC15UH':
            for row in rows:
                if row['label'] == 'Rear I/O - Ports': row['value'] = re.sub(r'; 2 x USB3.0$', '', row['value'])
        if model == 'MCN7A':
            for row in rows:
                if row['label'] == 'Internal I/O - Headers': row['value'] = row['value'].replace('; 2 x DDR4 SO-DIMM slots', '')
        if model == 'MCTAR7': rows = [row for row in rows if row['label'] != 'Chipset']
        # MCIPCB13A: September 16 source now confirms 12th/13th Gen and DDR5.
        category = 'industrial' if series in ['B', 'E'] else 'commercial'
        base = f'/assets/products/{category}/ver2/{model.lower()}'
        main_index = 2 if len(views) == 3 else 0
        brochures.square(views[main_index], ROOT / 'public' / base.lstrip('/') / 'main.webp')
        gallery = []
        for i, view in enumerate(views):
            filename = f'{base}/view-{i+1}.webp'
            brochures.square(view, ROOT / 'public' / filename.lstrip('/'))
            gallery.append({'image': filename, 'title': f'{model} ' + ['front panel', 'rear panel', 'enclosure view'][i]})
        record = dict(id=model.lower(), name=model, series=series, tagline=tagline, description=description, highlights=highlights, specs=rows, image=f'{base}/main.webp', galleryImages=[g['image'] for g in gallery], galleryCards=gallery, sourceBrochure=source.relative_to(brochures.SOURCE_ROOT).as_posix(), sourceSha256=hashlib.sha256(source.read_bytes()).hexdigest())
        record['operatingRange'] = '-20°C to 60°C' if series in ['B', 'E'] else '0°C to 60°C' if model in ['MCN7A', 'MCN7P'] else '0°C to 50°C'
        records.append(record)
    (ROOT/'lib/brochure-updates.ts').write_text('// Reviewed ver2 changes. Generated by scripts/import-ver2-updates.py.\nexport const brochureUpdates = '+json.dumps(records, ensure_ascii=False, indent=2)+';\n', encoding='utf-8')

if __name__ == '__main__': build()
