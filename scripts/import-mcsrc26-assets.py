"""Render the reviewed MCSRC26 brochure's front and rear image occurrences.

Requires pypdf, PyMuPDF and Pillow. Source PDFs are read-only; website assets
are written into the repository and do not depend on the external source path.
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
    r'D:\本地资源库\电脑相关\电脑册子归档\ver2\软路由SR\MCSRC26 brochure.pdf'))
args = parser.parse_args()
sys.dont_write_bytecode = True
module_spec = importlib.util.spec_from_file_location('pdf_images', ROOT / 'scripts/pdf-product-images.py')
helper = importlib.util.module_from_spec(module_spec)
module_spec.loader.exec_module(helper)
reader = PdfReader(args.source)
assert len(reader.pages) == 1 and 'MCSRC26' in reader.pages[0].extract_text()
views = helper.rendered_images(reader.pages[0], scale=6)
assert len(views) == 2, 'Expected front and rear views; review changed brochure layouts.'
output = ROOT / 'public/assets/products/firewall/high-speed-series/mcsrc26'
output.mkdir(parents=True, exist_ok=True)
for name, view in zip(['front', 'rear'], views):
    view.thumbnail((1008, 1008), Image.Resampling.LANCZOS)
    canvas = Image.new('RGBA', (1200, 1200), 'white')
    canvas.alpha_composite(view, ((1200 - view.width) // 2, (1200 - view.height) // 2))
    canvas.convert('RGB').save(output / f'{name}.webp', 'WEBP', quality=92, method=4)
print('Rendered front and rear; source SHA-256:', hashlib.sha256(args.source.read_bytes()).hexdigest())
