"""Import Type A/B rear panels without replacing the approved hero or thumbnails.

Read the current two-page source brochure only. Render image occurrences through
the shared helper so PDF clipping paths and soft masks are preserved.
"""
from importlib.machinery import SourceFileLoader
from pathlib import Path
import sys

from PIL import Image, ImageOps
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
sys.dont_write_bytecode = True
SOURCE = Path("D:/本地资源库/电脑相关/电脑册子归档/ver2/工控机IPC/B系列/MCIPCB13 brochure.pdf")
OUTPUT = ROOT / "public/assets/products/industrial/merged/mcipcb13"
extractor = SourceFileLoader("pdf_product_images", str(Path(__file__).with_name("pdf-product-images.py"))).load_module()

reader = PdfReader(str(SOURCE))
if len(reader.pages) != 2:
    raise ValueError("Expected separate Type A and Type B brochure pages")
OUTPUT.mkdir(parents=True, exist_ok=True)
for page, kind in zip(reader.pages, ("a", "b")):
    if f"TYPE {kind.upper()}" not in page.extract_text():
        raise ValueError(f"Unexpected Type {kind.upper()} page")
    rear = extractor.rendered_images(page, scale=6)[1]
    rear = ImageOps.contain(rear, (1080, 1080), Image.Resampling.LANCZOS)
    canvas = Image.new("RGB", (1200, 1200), "white")
    canvas.paste(rear, ((1200 - rear.width) // 2, (1200 - rear.height) // 2), rear.getchannel("A"))
    path = OUTPUT / f"rear-type-{kind}.webp"
    canvas.save(path, "WEBP", quality=92, method=6)
    print(path.relative_to(ROOT))
