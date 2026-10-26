"""Render MCSRP1-HDMI reference views from the read-only, reviewed brochure.

The source explicitly shares its product pictures with MCSRP2-HDMI.
Requires pypdf, PyMuPDF and Pillow; website builds use only committed assets.
"""
import hashlib
import importlib.util
import sys
from pathlib import Path

from PIL import Image
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path(r'D:\本地资源库\电脑相关\电脑册子归档\ver2\软路由SR\MCSRP1-HDMI Brochure.pdf')
sys.dont_write_bytecode = True
module_spec = importlib.util.spec_from_file_location('pdf_images', ROOT / 'scripts/pdf-product-images.py')
helper = importlib.util.module_from_spec(module_spec)
module_spec.loader.exec_module(helper)
reader = PdfReader(SOURCE)
assert len(reader.pages) == 1 and 'MCSRP1-HDMI' in reader.pages[0].extract_text()
views = helper.rendered_images(reader.pages[0], scale=6)
assert len(views) == 2, 'Expected two brochure reference views; inspect changed layouts.'
output = ROOT / 'public/assets/products/firewall/dual-port-series/mcsrp1-hdmi'
output.mkdir(parents=True, exist_ok=True)
for name, view in zip(['front', 'product'], views):
    view.thumbnail((1008, 1008), Image.Resampling.LANCZOS)
    canvas = Image.new('RGBA', (1200, 1200), 'white')
    canvas.alpha_composite(view, ((1200 - view.width) // 2, (1200 - view.height) // 2))
    canvas.convert('RGB').save(output / f'{name}.webp', 'WEBP', quality=92, method=4)
print('Rendered two reference views; source SHA-256:', hashlib.sha256(SOURCE.read_bytes()).hexdigest())
