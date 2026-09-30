"""Render the two panel views from current merged B-series brochures.

The PDF page is rendered before cropping so masks and vector artwork remain intact.
Source brochures are read-only; output lives in public/assets.
"""
from pathlib import Path

import fitz
from PIL import Image
from pypdf import PdfReader
from importlib.machinery import SourceFileLoader

SOURCE = Path(r"D:\本地资源库\电脑相关\电脑册子归档\ver2\工控机IPC\B系列")
OUTPUT = Path(__file__).resolve().parents[1] / "public/assets/products/industrial/merged"
BROCHURES = {
    "mcipcb1": "MCIPCB1 brochure.pdf",
    "mcipcb2": "MCIPCB2 brochure.pdf",
    "mcipcb6": "MCIPCB6 Brochure.pdf",
    "mcipcb13": "MCIPCB13 brochure.pdf",
    "mcipcb14": "MCIPCB14 Brochure.pdf",
    "mcipcb15": "MCIPCB15 brochure.pdf",
    "mcipcb16": "MCIPCB16 brochure.pdf",
}


def render_view(page: fitz.Page, side: str) -> Image.Image:
    # All seven merged brochures use the same A4 two-view layout.
    clip = fitz.Rect(50 if side == "front" else 305, 153, 288 if side == "front" else 550, 285)
    pix = page.get_pixmap(matrix=fitz.Matrix(4, 4), clip=clip, alpha=False)
    image = Image.frombytes("RGB", (pix.width, pix.height), pix.samples)
    # Replace the brochure's pale panel background with white; preserve dark product details.
    pixels = image.load()
    for y in range(image.height):
        for x in range(image.width):
            r, g, b = pixels[x, y]
            if min(r, g, b) > 232 and max(r, g, b) - min(r, g, b) < 19:
                pixels[x, y] = (255, 255, 255)
    return image


for model, filename in BROCHURES.items():
    document = fitz.open(SOURCE / filename)
    destination = OUTPUT / model
    destination.mkdir(parents=True, exist_ok=True)
    for page_index, page in enumerate(document):
        suffix = "-fan" if page_index else ""
        for side in ("front", "rear"):
            image = render_view(page, side)
            image.save(destination / f"{side}{suffix}.webp", "WEBP", quality=92, method=6)
    print(model, len(document), "page(s)")

# J5005 has a separate source PDF and a different embedded image layout.
extractor = SourceFileLoader("pdf_product_images", str(Path(__file__).with_name("pdf-product-images.py"))).load_module()
j5005 = extractor.rendered_images(PdfReader(str(SOURCE / "MCIPCB2-J5005 brochure.pdf")).pages[0])
j5005_output = OUTPUT / "mcipcb2-j5005"
j5005_output.mkdir(parents=True, exist_ok=True)
for side, image in (("front", j5005[0]), ("rear", j5005[2])):
    canvas = Image.new("RGB", image.size, "white")
    canvas.paste(image, mask=image.getchannel("A"))
    canvas.save(j5005_output / f"{side}.webp", "WEBP", quality=92, method=6)
print("mcipcb2-j5005", "1 page")
