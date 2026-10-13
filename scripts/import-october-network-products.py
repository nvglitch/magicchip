"""Import the reviewed SR / NAS-board scope from read-only ver2 brochures.

MCSR6N4 and NASJ4125 are explicitly deferred by the user. No source PDFs are
modified, copied into downloads, or consulted by the website build.
"""
from pathlib import Path
import hashlib
import importlib.util
import json
import re
import sys

import pdfplumber
from pypdf import PdfReader

sys.stdout.reconfigure(encoding="utf-8")
ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path(r"D:\本地资源库\电脑相关\电脑册子归档\ver2")
helper_spec = importlib.util.spec_from_file_location("brochures", ROOT / "scripts/import-september-products.py")
helper = importlib.util.module_from_spec(helper_spec)
helper_spec.loader.exec_module(helper)

SR = {
    "MC30S": ("4L", "Four-port 2.5GbE appliance with DDR4 and DDR5 configurations", "Compare DDR4 and DDR5 CPU platforms in the MC30S enclosure. Both configurations provide four Intel i226 2.5GbE ports, HDMI and DisplayPort, RJ45 COM, NVMe and SATA storage. CPU, memory and TDP follow the selected configuration.", ["DDR4 / DDR5 configurations", "4 x Intel i226 2.5GbE", "NVMe + SATA", "146 x 133 x 57 mm"], "0°C to 50°C"),
    "MC30W": ("4L", "Slim N100 network appliance with four 2.5GbE ports", "MC30W combines Intel N100 processing, up to 16GB DDR5 and four Intel i226 2.5GbE ports in a 136 x 126 x 40 mm enclosure. NVMe, SATA and module slots support configurable storage and connectivity.", ["Intel N100", "DDR5 up to 16GB", "4 x Intel 2.5GbE", "136 x 126 x 40 mm"], "0°C to 50°C"),
    "MCSR6N1": ("6L", "12th Gen Intel Core six-port appliance with DDR4", "MCSR6N1 offers Intel Core i3-1215U / i5-1235U / i7-1265U, up to 64GB DDR4, six Intel i226-V 2.5GbE ports, NVMe and dual SATA. Its 145.6 x 145.4 x 53.6 mm enclosure uses DC 12–19V input.", ["12th Gen Intel Core", "DDR4 up to 64GB", "6 x Intel 2.5GbE", "DC 12–19V"], "-10°C to 70°C"),
    "MCSR6N2": ("6L", "13th Gen Intel U-series six-port appliance with DDR4", "MCSR6N2 offers Intel U300 / Core i3-1315U / i5-1335U / i7-1355U, up to 64GB DDR4, six Intel i226-V 2.5GbE ports and DC 12–19V input. HDMI, DisplayPort and Type-C provide display connectivity; exact display versions and resolutions require confirmation.", ["Intel U300 / 13th Gen Core", "DDR4 up to 64GB", "6 x Intel 2.5GbE", "NVMe + dual SATA"], "0°C to 70°C"),
    "MCSR6N3": ("6L", "12th / 13th Gen Intel six-port appliance with DDR5", "MCSR6N3 combines Intel 12th / 13th Gen platform options, up to 64GB DDR5, six Intel i226-V 2.5GbE ports, dual M.2 NVMe and dual SATA. DC 12–19V and Type-C PD 19V / 65W input support different power arrangements.", ["12th / 13th Gen Intel options", "DDR5 up to 64GB", "6 x Intel 2.5GbE", "Dual NVMe + dual SATA"], "0°C to 70°C"),
    "MCSRP7": ("4L", "Compact Braswell four-port 2.5GbE fanless appliance", "MCSRP7 uses Intel Pentium J3700 / J3710 processors, up to 8GB DDR3L and four Intel i225-V B3 2.5GbE ports. The 120 x 107.5 x 36.5 mm fanless aluminum chassis includes mSATA, SATA, COM, HDMI and DisplayPort.", ["Pentium J3700 / J3710", "DDR3L up to 8GB", "4 x Intel i225-V B3", "Fanless aluminum chassis"], "0°C to 65°C"),
    "MGSRN100": ("4L", "DDR5 four-port 2.5GbE Alder Lake-N appliance", "MGSRN100 offers Intel N100 / N200 / i3-N305, up to 32GB DDR5, four Intel i226-V 2.5GbE ports, NVMe and M.2 E-key wireless expansion. The 145.6 x 145.4 x 53.6 mm enclosure uses 12V DC input.", ["Intel N100 / N200 / i3-N305", "DDR5 up to 32GB", "4 x Intel 2.5GbE", "12V DC input"], "0°C to 70°C"),
}
BOARDS = {
    "NASD2700": ("Xeon D-2700 NAS motherboard with 10GbE and IPMI", "NASD2700 is a 244 x 258 mm extended micro-ATX motherboard, shown with Xeon D-2712T. Eight DDR4 ECC UDIMM slots, two 10GbE RJ45 and four 10GbE SFP+ ports, dedicated IPMI LAN, eight NVMe slots and up to twelve SATA connections support storage-system integration. ATX power, a compatible enclosure, cooling, memory and drives must be selected separately.", ["Xeon D-2712T standard", "8 DDR4 ECC slots / 4 channels", "2 RJ45 + 4 SFP+ at 10GbE", "IPMI / 8 NVMe / up to 12 SATA"], "0°C to 65°C"),
    "NASN100": ("Mini-ITX Alder Lake-N NAS motherboard with four 2.5GbE ports", "NASN100 is a 170 x 170 mm Mini-ITX motherboard with Intel N95 / N100 / N200 / i3-N305 options, up to 32GB DDR5, four Intel i226-V 2.5GbE ports, two M.2 NVMe x1 slots and six SATA connections. Its PCIe x1 slot shares resources with the second M.2 slot. This is a motherboard for integration, rather than an enclosed NAS PC.", ["Intel Alder Lake-N options", "DDR5 up to 32GB", "4 x Intel i226-V 2.5GbE", "2 NVMe + 6 SATA"], None),
    "NASN150": ("Mini-ITX Alder / Twin Lake-N NAS motherboard with dual 2.5GbE", "NASN150 is a 170 x 170 mm Mini-ITX motherboard with Intel N100 / i3-N305 / N150 / i3-N355 options, up to 48GB DDR5, dual Intel i226-V 2.5GbE, two M.2 NVMe PCIe 3.0 x1 slots and six SATA ports via ASM1166. A PCIe 3.0 x4 slot and ATX power connectors support system integration. Reserved eMMC solder pads are not populated by default.", ["N100 / i3-N305 / N150 / i3-N355", "DDR5 up to 48GB", "2 x Intel 2.5GbE", "6 SATA / PCIe 3.0 x4"], None),
}


def normalized(value):
    return re.sub(r"\s+", " ", (value or "").replace("\u00ad", "-").replace("\u00a0", " ").replace("\u037e", ";")).strip()


def rows(source, model):
    with pdfplumber.open(source) as pdf:
        page = pdf.pages[0]
        table = max(page.find_tables(), key=lambda table: len(table.rows))
        heads = {word["text"]: word["x0"] for word in page.extract_words() if word["text"] in ["GROUP", "ITEM", "DETAILS"]}
        extracted = []
        for row in table.rows[1:]:
            _, top, _, bottom = row.bbox
            extracted.append([
                helper.cell_text(page, heads["GROUP"] - 3, heads["ITEM"] - 3, top, bottom),
                helper.cell_text(page, heads["ITEM"] - 3, heads["DETAILS"] - 3, top, bottom),
                helper.cell_text(page, heads["DETAILS"] - 3, 563, top, bottom),
            ])
    result = [{"label": "Model", "value": model}]
    storage = []
    previous_group = ""
    for group, item, value in extracted:
        group, item, value = map(normalized, (group, item, value))
        group = group or previous_group
        previous_group = group
        if not item or not value:
            raise ValueError(f"Incomplete row for {model}: {group}/{item}/{value}")
        if group == "Storage":
            storage.append(value)
            continue
        if group == "Processor":
            label = "CPU" if item in ["CPU", "Standard"] else "CPU options"
        elif group == "Memory":
            label = "Memory"
        elif group == "Network":
            label = "Management LAN" if item == "IPMI LAN" else "Network"
        elif group == "Display":
            label = "Display"
        elif group == "Expansion":
            label = "Expansion" if item == "Options" else f"Expansion - {item}"
        elif group == "Power":
            label = "Power" if item in ["DC input", "Input"] else "TDP"
        elif group == "Environment":
            label = "Operating Environment"
        elif group in ["Front I/O", "Rear I/O", "External I/O", "Internal I/O"]:
            label = group
        elif item == "GPU":
            label = "Graphics"
        elif item == "OS":
            label = "System"
        elif item == "Form factor":
            label = "Dimensions"
        elif item == "Serial ports":
            label = "Serial"
        else:
            label = item
        result.append({"label": label, "value": value})
    result.append({"label": "Storage", "value": "; ".join(storage)})
    assert len({row["label"] for row in result}) == len(result), model
    return result


def replace(specs, label, value):
    next(row for row in specs if row["label"] == label)["value"] = value


def build(model, motherboard=False):
    folder = "NAS主板" if motherboard else "软路由SR"
    matches = [p for p in (SOURCE / folder).glob("*.pdf") if re.sub(r"\s+brochure$", "", p.stem, flags=re.I).strip() == model]
    assert len(matches) == 1, (model, matches)
    source = matches[0]
    specs = rows(source, model)
    mid = model.lower()
    if motherboard:
        tagline, description, highlights, temperature = BOARDS[model]
        series = "NAS-MB"
        base = f"/assets/products/commercial/nas-motherboards/{mid}"
    else:
        series, tagline, description, highlights, temperature = SR[model]
        base = f"/assets/products/firewall/ver2/{mid}"
    output = ROOT / "public" / base.lstrip("/")
    views = helper.images(PdfReader(source).pages[0], None)
    assert len(views) == 2, model
    gallery = []
    for i, view in enumerate(views):
        name = ["top", "bottom"][i] if motherboard else ["front", "rear"][i]
        helper.square(view, output / f"{name}.webp")
        gallery.append({"image": f"{base}/{name}.webp", "title": f"{model} {name} {'view' if motherboard else 'panel'}"})
    if model in ["MC30S", "MC30W"]:
        replace(specs, "Graphics", "Integrated Intel graphics; exact GPU depends on the selected CPU")
    if model == "MCSR6N2":
        specs = [row for row in specs if row["label"] != "Chipset"]
        replace(specs, "Display", "HDMI + DisplayPort + Type-C (data and display); connector revisions and resolutions require confirmation")
        front = next(row for row in specs if row["label"] == "Front I/O")
        front["value"] = front["value"].replace("HDMI 1.4", "HDMI").replace("DP 1.4a", "DP")
    if model == "NASN150":
        replace(specs, "CPU", "Intel Alder Lake-N N100 / i3-N305; Intel Twin Lake N150 / i3-N355")
        next(row for row in specs if row["label"] == "TDP")["label"] = "Base power consumption"
    if model == "NASN100":
        replace(specs, "Memory", "1 x DDR5 SO-DIMM; 4800/5200/5600 MHz modules, up to 32GB; operating speed follows the selected CPU/platform")
    record = dict(id=mid, name=model, series=series, tagline=tagline, description=description, highlights=highlights, specs=specs,
                  image=gallery[0]["image"], galleryImages=[view["image"] for view in gallery], galleryCards=gallery,
                  sourceBrochure=source.relative_to(SOURCE).as_posix(), sourceSha256=hashlib.sha256(source.read_bytes()).hexdigest())
    if temperature:
        record["operatingRange"] = temperature
    if model == "MC30S":
        record["specs"] = [row for row in specs if row["label"] not in ["CPU", "Memory", "TDP"]]
        record["skus"] = [
            dict(key="ddr4", label="DDR4 · N6415 / J5005 / J6413 / N5105", legacyNames=["MC30S DDR4"], image=record["image"], galleryCards=gallery, specs=[
                dict(label="CPU", value="Intel N6415 / J5005 / J6413 / N5105"), dict(label="Memory", value="1 x DDR4 SO-DIMM, up to 16GB"), dict(label="TDP", value="Depends on the selected CPU")]),
            dict(key="ddr5", label="DDR5 · N95 / N100 / N200 / i3-N305", legacyNames=["MC30S DDR5", "MC30S N100"], image=record["image"], galleryCards=gallery, specs=[
                dict(label="CPU", value="Intel N95 / N100 / N200 / i3-N305; N100: 4 cores, up to 3.4 GHz"), dict(label="Memory", value="1 x DDR5-4800 SO-DIMM, up to 16GB"), dict(label="TDP", value="N100 configuration: 10–15W; other CPUs depend on configuration")]),
        ]
    cms = dict(record, category="commercial-mini-pc" if motherboard else "firewall-mini-pc", images=[record["image"]], specifications=record["specs"])
    (ROOT / f"content/products/items/{mid}.json").write_text(json.dumps(cms, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    return record


if __name__ == "__main__":
    firewall = [build(model) for model in SR]
    boards = [build(model, True) for model in BOARDS]
    (ROOT / "lib/october-network-products.ts").write_text(
        "// Reviewed read-only ver2 SR brochures, October 13, 2026.\nimport type { FirewallCatalogItem } from '@/lib/firewall-catalog';\nexport const octoberFirewallProducts: FirewallCatalogItem[] = " + json.dumps(firewall, ensure_ascii=False, indent=2) + ";\n", encoding="utf-8")
    (ROOT / "lib/nas-motherboards.ts").write_text(
        "// NAS boards are separate from enclosed NAS PCs. NASJ4125 is deferred by the user.\nimport type { CommercialCatalogItem } from '@/lib/commercial-catalog';\nexport const nasMotherboards: CommercialCatalogItem[] = " + json.dumps(boards, ensure_ascii=False, indent=2) + ";\n", encoding="utf-8")
    print("Imported", [item["name"] for item in firewall + boards])
