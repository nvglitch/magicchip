"""Import the September 2026 brochures without changing the original PDFs.

Uses PDF table coordinates (including merged group cells) and embedded product
images. Only writes the dedicated brochure catalog and its brochure image folders.
Run with Python containing pypdf, pdfplumber and Pillow.
"""
from pathlib import Path
import json
import re
import hashlib

import pdfplumber
from pypdf import PdfReader
from PIL import Image, ImageChops

ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "public/assets"
SOURCE_ROOT = Path(r"D:\本地资源库\电脑相关\电脑册子归档\ver2")

# Explicit selection prevents NAS motherboards and revision-only files being added.
PRODUCTS = {
    "MCIPCB1A": ("B", "Intel N100 / N150", "32GB DDR4", "Dual Intel I226-V LAN"),
    "MCIPCB1B": ("B", "6th / 7th Gen Intel Core", "16GB DDR3L", "Dual Gigabit LAN"),
    "MCIPCB1F": ("B", "Intel Core i3-N305", "32GB DDR4", "Dual Intel I226-V LAN"),
    "MCIPCB6": ("B", "4th / 5th Gen Intel Core", "16GB DDR3L", "Dual Gigabit LAN"),
    "MCIPCB6-DDR3L": ("B", "6th-8th Gen Intel Core", "16GB DDR3L", "Dual Gigabit LAN"),
    "MCIPCB6-DDR4": ("B", "6th-8th Gen Intel Core", "32GB DDR4", "Dual Gigabit LAN"),
    "MCIPCB14": ("B", "Intel N100 / i3-N305", "32GB DDR5", "Dual LAN"),
    "MCIPCB14F": ("B", "Intel N100 / i3-N305", "32GB DDR5", "Dual LAN"),
    "MCIPCB15A": ("B", "Intel Celeron N5095", "32GB DDR4", "Dual Gigabit LAN"),
    "MCIPCB15B": ("B", "Intel Celeron J6412", "32GB DDR4", "Dual Gigabit LAN"),
    "MCIPCB15C": ("B", "4th / 5th Gen Intel Core", "8GB DDR3L", "Dual Gigabit LAN"),
    "MCIPCB15D": ("B", "6th-8th Gen Intel Core", "32GB DDR4", "Dual Gigabit LAN"),
    "MCIPCB15E": ("B", "12th Gen Intel Core", "32GB DDR4", "Dual Gigabit LAN"),
    "MCIPCB16A": ("B", "Intel J1900 / N2840", "8GB DDR3L", "Dual Gigabit LAN"),
    "MCIPCB16B": ("B", "Intel Celeron J4125", "16GB DDR4", "Dual LAN"),
    "MCIPCD4": ("D", "Intel J4125", "16GB DDR4", "4 x Intel I226-V LAN"),
    "MCIPCD5": ("D", "Intel N100 / i3-N305", "32GB DDR5", "4 x Intel I226-V LAN"),
    "MCIPCD5F": ("D", "Intel N100 / i3-N305", "32GB DDR5", "4 x Intel I226-V LAN"),
    "MCIPCD6": ("D", "Intel Celeron J6412", "64GB DDR4", "4 x 2.5GbE LAN"),
    "MCNAS11": ("NAS", "Intel Core i3-1115G4", "64GB DDR4", "4 x RJ45 + 2 x SFP+"),
    "MCNAS14A": ("NAS", "Intel Core Ultra 125H / 155H / 185H", "96GB DDR5", "4 x 2.5GbE + 2 x 10GbE SFP+"),
    "MCNAS14B": ("NAS", "Intel Core Ultra 125H / 155H / 185H", "96GB DDR5", "4 x 2.5GbE + 4 x 10GbE SFP+"),
    "MCDPC1": ("DPC", "Intel N100 / N150", "16GB DDR4", "Dual Gigabit LAN"),
    "MCAIPC3A": ("AI", "AMD Ryzen / Ryzen AI options", "64GB onboard LPDDR5", "MCIO expansion"),
    "MCAIPC3B": ("AI", "AMD Ryzen AI options", "64GB DDR5 SO-DIMM", "OCuLink expansion"),
    "MCAIPC3C": ("AI", "Intel Core Ultra options", "64GB DDR5 SO-DIMM", "OCuLink expansion"),
    "MCAIPC3D": ("AI", "Intel Core Ultra 235H / 255H / 285H", "64GB onboard LPDDR5", "OCuLink expansion"),
    "MCAIPC2": ("AI", "3 mainboard series", "Up to 128GB, series-dependent", "Up to dual 10GbE"),
}


def source_file(model):
    found = [p for folder in ["工控机IPC", "AIPC", "NAS PC", "桌面端DPC"]
             for p in (SOURCE_ROOT / folder).rglob("*.pdf")
             if re.sub(r"\s+brochure$", "", p.stem, flags=re.I).strip() == model]
    if len(found) != 1:
        raise ValueError(f"Expected one source for {model}: {found}")
    return found[0]


def cell_text(page, left, right, top, bottom):
    region = page.filter(lambda c: c.get("object_type") == "char"
                         and left <= c["x0"] < right
                         and top <= (c["top"] + c["bottom"]) / 2 < bottom)
    return " ".join((region.extract_text(x_tolerance=1, y_tolerance=2) or "").split())


def specifications(page, model, table_bottom=740):
    bounds = sorted({round(l["top"], 3) for l in page.lines
                     if l["x1"] > 560 and l["x0"] < 199
                     and abs(l["top"] - l["bottom"]) < .1 and 370 < l["top"] < table_bottom})
    specs = [{"label": "Model", "value": model}]
    for top, bottom in zip(bounds[1:], bounds[2:]):
        groups = [r for r in page.rects if abs(r["x0"] - 34) < 1
                  and 110 < r["x1"] < 111 and r["top"] <= (top + bottom) / 2 <= r["bottom"]]
        group = cell_text(page, 34, 110.5, groups[0]["top"], groups[0]["bottom"]) if groups else ""
        item = cell_text(page, 110.5, 198.5, top, bottom)
        value = cell_text(page, 198.5, 562, top, bottom)
        if not item or not value:
            raise ValueError(f"Incomplete table row: {model} {top}: {item} / {value}")
        label = {"RAM": "Memory", "GPU": "Graphics", "Ethernet": "Network",
                 "Serial ports": "Serial", "Product Size": "Dimensions"}.get(item, item)
        if group in ["Front I/O", "Rear I/O", "Internal I/O", "Indicators"]:
            label = f"{group} - {item}"
        elif group == "Environment":
            label = f"Environment - {item}"
        elif item in ["Options", "Output", "Drives"]:
            label = group or item
        elif group == "Storage" and item not in ["SATA", "mSATA"]:
            label = f"Storage - {item}"
        # Formatting / obvious transcription corrections; no inferred capabilities.
        value = value.replace("*", " x ").replace("inter I226", "Intel I226")
        # The brochure's connector dimensions are ambiguous; retain only the stated input voltage.
        value = re.sub(r",?\s*DC(?: jack)?\s+55\s*x\s*25\s*mm", "", value)
        value = value.replace("Transposon PCIE agreement", "socket, PCIe").replace("PCIE agreement", "PCIe interface").replace("USB/PCIE agreement", "USB/PCIe interface")
        value = value.replace("PCIE Auto", "PCIe auto-switching").replace("HAD Encoder", "HD audio codec").replace("7.1 Passageway", "7.1-channel")
        value = re.sub(r"\s+", " ", value).strip()
        specs.append({"label": label, "value": value})
    if len(specs) < 12:
        raise ValueError(f"Unexpected table length for {model}")
    return specs


def square(image, destination):
    rgba = image.convert("RGBA")
    if rgba.getchannel("A").getextrema()[0] < 250:
        box = rgba.getchannel("A").getbbox()
    else:
        difference = ImageChops.difference(rgba.convert("RGB"), Image.new("RGB", rgba.size, "white")).convert("L")
        box = difference.point(lambda v: 255 if v > 18 else 0).getbbox()
    crop = rgba.crop(box) if box else rgba
    crop.thumbnail((1008, 1008), Image.Resampling.LANCZOS)
    # Keep source resolution; enlarge only where necessary to keep framing consistent.
    scale = 1008 / max(crop.size)
    crop = crop.resize((round(crop.width * scale), round(crop.height * scale)), Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", (1200, 1200), "white")
    canvas.alpha_composite(crop, ((1200 - crop.width) // 2, (1200 - crop.height) // 2))
    destination.parent.mkdir(parents=True, exist_ok=True)
    canvas.convert("RGB").save(destination, "WEBP", quality=92, method=4)


def images(reader_page, layout_page):
    # Render the placed occurrence rather than extracting the uncropped XObject.
    import importlib.util
    spec = importlib.util.spec_from_file_location('pdf_product_images', ROOT / 'scripts/pdf-product-images.py')
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    return module.rendered_images(reader_page)


def chassis_images():
    source = source_file("MCAIPC2")
    page = PdfReader(source).pages[1]
    extracted = {Path(i.name).stem: i.image for i in page.images}
    names = ['h02', 'h01', 'h03', 'h04-bq', 'h05', 'h06', 'h07', 'h11', 'h13', 'h09', 'h04-bq-b', 'h04-bq-c', 'h08', 'h10']
    with pdfplumber.open(source) as pdf:
        for index, name in enumerate(names):
            row, col = divmod(index, 3)
            candidates = [i for i in pdf.pages[1].images if 136 + row * 126.8 <= i['top'] < 220 + row * 126.8
                          and 34 + col * 178.6 <= (i['x0'] + i['x1']) / 2 < 34 + (col + 1) * 178.6]
            if not candidates:
                raise ValueError(f'Missing chassis image: {name}')
            chosen = max(candidates, key=lambda i: i['x0'])
            square(extracted[chosen['name']], ASSETS / f'products/ai/brochure/mcaipc2/chassis/{name}.webp')


def build():
    industrial, commercial, ai = [], [], []
    for model, (series, cpu, memory, connectivity) in PRODUCTS.items():
        source = source_file(model)
        reader = PdfReader(source)
        product_id = "mcai2" if model == "MCAIPC2" else model.lower()
        category = "industrial" if series in ["B", "D"] else "ai" if series == "AI" else "commercial"
        base = f"/assets/products/{category}/brochure/{model.lower()}"
        output = ROOT / "public" / base.lstrip("/")
        with pdfplumber.open(source) as pdf:
            specs = specifications(pdf.pages[0], model)
            product_images = images(reader.pages[0], pdf.pages[0])
        titles = ["Front panel", "Rear panel", "Enclosure view"]
        if model == "MCAIPC2":
            titles = ["H04-BQ front view", "H04-BQ enclosure view"]
        main = 1 if model in ["MCNAS14A", "MCNAS14B"] else len(product_images) - 1 if series == "AI" or model == "MCDPC1" else 0
        square(product_images[main], output / "main.webp")
        cards = []
        for i, image in enumerate(product_images):
            square(image, output / f"view-{i + 1}.webp")
            cards.append({"image": f"{base}/view-{i + 1}.webp", "title": f"{model} {titles[i].lower()}"})
        tagline = f"{cpu} compact {'industrial PC' if category == 'industrial' else 'NAS PC' if series == 'NAS' else 'AI PC' if series == 'AI' else 'desktop PC'}"
        if series in ["B", "D"]:
            description = f"{model} combines {cpu} processing, up to {memory}, and {connectivity.lower()} for industrial computing and connected equipment. Model-specific serial, display, storage, and expansion options are detailed below; optional interfaces depend on the selected configuration."
        elif series == "NAS":
            description = f"{model} combines {cpu} processor options, up to {memory}, and {connectivity} for compact storage and network-service deployments. NVMe, SATA, and PCIe expansion support project-specific storage and connectivity requirements."
        elif series == "AI":
            description = f"{model} combines {cpu}, up to {memory}, dual 2.5GbE networking, and {connectivity} in a 132 x 132 x 50.5 mm enclosure. Dual PCIe 4.0 M.2 storage, HDMI, DisplayPort, and USB4 support local computing and professional desktop workloads."
        else:
            description = "MCDPC1 is an Intel N100 / N150 desktop mini PC with replaceable DDR4 memory, dual Gigabit LAN, two M.2 2280 storage slots, and DisplayPort, HDMI, and USB-C display connections. A built-in 36 W power supply simplifies desk installation."
        highlights = [cpu, f"Up to {memory}", connectivity, "Dual serial interfaces" if series in ["B", "D"] else "Dual M.2 PCIe 4.0 SSD" if series == "AI" else "NVMe + SATA storage"]
        record = {"id": product_id, "name": model, "tagline": tagline, "description": description,
                  "image": f"{base}/main.webp", "galleryImages": [c["image"] for c in cards],
                  "galleryCards": cards, "highlights": highlights, "specs": specs}
        if series != "AI":
            record["series"] = series
        environment = next((s["value"] for s in specs if s["label"] in ["Environment - Operating", "Environment - Operating temperature", "Environment - Temperature / humidity"]), "")
        match = re.search(r"(?:Operating:\s*)?(-?\d+)\s*(?:~|to)\s*\+?(\d+)\s*°?C", environment)
        if match:
            record["operatingRange"] = f"{match[1]}°C to {match[2]}°C"
        if model == 'MCAIPC2':
            record['tagline'] = 'Three mainboard series with configurable memory, networking, and chassis'
            record['description'] = 'MCAIPC2 spans AXB35-02, AXB35-03, and AEB35-04 mainboards with series-specific AMD processors, LPDDR5 memory, networking, and expansion. Select a compatible chassis and power configuration.'
            record['highlights'] = ['AXB35-02 / AXB35-03 / AEB35-04', 'Up to 128GB, series-dependent', '2.5GbE or dual 10GbE', 'Compatible chassis and power options']
            for spec in record['specs']:
                if spec['label'] == 'Dimensions':
                    spec['value'] = 'Chassis-dependent; see the chassis compatibility guide below for dimensions and power options.'
        record["sourceBrochure"] = source.relative_to(SOURCE_ROOT).as_posix()
        record["sourceSha256"] = hashlib.sha256(source.read_bytes()).hexdigest()
        (industrial if category == "industrial" else ai if category == "ai" else commercial).append(record)
    chassis_images()
    header = "// Product facts and images from the supplied September 2026 brochures.\n// Regenerate with scripts/import-september-products.py; review source ambiguities before publishing.\nimport type { IndustrialCatalogItem } from './industrial-catalog';\nimport type { CommercialCatalogItem } from './commercial-catalog';\n\ntype Provenance = { sourceBrochure: string; sourceSha256: string };\n\n"
    text = header + "export const industrialBrochureProducts: (IndustrialCatalogItem & Provenance)[] = " + json.dumps(industrial, indent=2, ensure_ascii=False) + ";\n\n"
    text += "export const commercialBrochureProducts: (CommercialCatalogItem & Provenance)[] = " + json.dumps(commercial, indent=2, ensure_ascii=False) + ";\n\n"
    text += "export const aiBrochureProducts = " + json.dumps(ai, indent=2, ensure_ascii=False) + ";\n"
    (ROOT / "lib/brochure-products.ts").write_text(text, encoding="utf-8")
    print(f"Imported {len(industrial)} industrial, {len(commercial)} commercial, {len(ai)} AI records (includes updated MCAIPC2).")


if __name__ == "__main__":
    build()
