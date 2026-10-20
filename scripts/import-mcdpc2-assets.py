"""Render MCDPC2 brochure views without modifying the source PDF.

Use Python with pypdf, PyMuPDF and Pillow. The default source is the approved
ver2 archive; --source can select an explicitly supplied copy of the brochure.
"""
import argparse
import hashlib
import importlib.util
import sys
from pathlib import Path

from PIL import Image
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--source', type=Path, default=Path(
    r'D:\本地资源库\电脑相关\电脑册子归档\ver2\桌面端DPC\MCDPC2 Brochure.pdf'))
args = parser.parse_args()
sys.dont_write_bytecode = True

module_spec = importlib.util.spec_from_file_location('pdf_images', ROOT / 'scripts/pdf-product-images.py')
helper = importlib.util.module_from_spec(module_spec)
module_spec.loader.exec_module(helper)
reader = PdfReader(args.source)
assert len(reader.pages) == 1, 'Review the brochure again if its page structure changes.'
assert 'MCDPC2' in reader.pages[0].extract_text(), 'Unexpected brochure model.'
views = helper.rendered_images(reader.pages[0], scale=8)
assert len(views) == 3, 'Expected front, product and rear views.'
output = ROOT / 'public/assets/products/commercial/dpc/mcdpc2'
output.mkdir(parents=True, exist_ok=True)
for name, view in zip(['front', 'main', 'rear'], views):
    view.thumbnail((1008, 1008), Image.Resampling.LANCZOS)
    canvas = Image.new('RGBA', (1200, 1200), 'white')
    canvas.alpha_composite(view, ((1200 - view.width) // 2, (1200 - view.height) // 2))
    canvas.convert('RGB').save(output / f'{name}.webp', 'WEBP', quality=92, method=4)
print('Rendered three local views; source SHA-256:', hashlib.sha256(args.source.read_bytes()).hexdigest())
