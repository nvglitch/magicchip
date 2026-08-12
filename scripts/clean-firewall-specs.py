"""Clean brochure extraction artifacts in Firewall / Server specifications."""

from __future__ import annotations

import json
import re
from pathlib import Path


SPEC_PATH = Path("lib/firewall-brochure-specs.ts")


OVERRIDES: dict[str, dict[str, str]] = {
    "mcsrh15": {
        "Weight": "Equipment: 2.50 kg; package: 3.00 kg (including accessories)",
        "Storage": "1 x M.2 NVMe 2280 (PCIe Gen3 x4); 1 x SATA 6 Gb/s (supports 2.5-inch HDD/SSD)",
        "Front I/O": "4 x SFP+; 4 x RJ45 Ethernet; 2 x USB 3.0; 1 x VGA; 1 x DC input",
        "Rear I/O": "1 x power button; 2 x USB 2.0; 1 x GPIO; 1 x RS-485 Phoenix terminal; 2 x RS-232 COM; 1 x SIM card slot",
    },
    "mcsrh30x": {
        "CPU": "Intel N95 / N100 / N200 / Core i3-N305 (Alder Lake-N)",
    },
    "mcsr613u": {
        "Video": "HDMI 2.0 (4K at 60 Hz); DisplayPort 1.4 (4K at 60 Hz); USB4 Type-C display output",
    },
    "mc12n-1u4l": {
        "USB": "1 x USB 2.0 and 1 x USB 3.0 external port; 2 x vertical USB 2.0 ports; 6 x USB 2.0 array-pin headers",
        "Expansion": "1 x PCIe x8 slot (PCIe Gen3 x4 signal); 4 x GPIO; 1 x RJ45 console; 2 x COM array-pin headers; 1 x Mini PCIe; Wake-on-LAN; PXE",
        "Internal I/O": "1 x DDR5 SO-DIMM slot; 1 x mSATA / SATA 3.0 / CF storage option; 1 x PCIe x8 slot (PCIe Gen3 x4 signal); 4 x GPIO pins; 1 x COM header; JHDMI, VGA and eDP headers; 6 x USB 2.0 array-pin headers; 2 x vertical USB 2.0 ports; SATA power; F_PANEL; TPM; SIM and Mini PCIe",
        "Dimensions": "1U: 440 x 320 x 45 mm; 2U: 435 x 439 x 90 mm",
    },
    "mc12n-1u6l": {
        "USB": "2 x USB 3.0 (5 Gb/s); 4 x USB 2.0",
        "Expansion": "1 x PCIe slot (PCIe Gen3 x1 signal, shared with M.2 E-Key); 8 x programmable GPIO; RJ45 console / JCOM; M.2 E-Key Wi-Fi; M.2 B-Key 4G/5G; Wake-on-LAN; PXE",
        "Internal I/O": "1 x DDR5 SO-DIMM slot; mSATA and SATA 3.0; 1 x PCIe slot; 8 x GPIO; RJ45 console / JCOM; M.2 E-Key Wi-Fi; M.2 B-Key 4G/5G; Wake-on-LAN; PXE",
        "Dimensions": "Desktop: 210 x 201 x 45 mm; 1U: 440 x 225 x 45 mm; 2U: 435 x 405 x 90 mm",
        "PCB Dimensions": "200 x 180 mm (W x L)",
    },
    "mc14n-1u6l": {
        "Power": "100-240V AC, 50/60 Hz; mainboard input: 4-pin 19-24V or DC 19-24V (5.5 x 2.5 mm)",
        "Expansion": "2 x Intel i226/i211/i210AT LAN; 4 x Intel i226/i211/i210AT LAN; optional 2 x Intel 82599 SFP+ or 4 x Intel X710 SFP+; RJ45 console; 2 x COM array-pin headers; M.2 B-Key; 8 x GPIO; Wake-on-LAN; PXE",
        "Internal I/O": "2 x DDR4 SO-DIMM slots; mSATA; 4 x SATA 3.0; 1 x M.2 NVMe 2280 PCIe 4.0 x4; 1 x M.2 NVMe 2280 PCIe 3.0 x4; 8 x GPIO pins; 2 x COM headers; JHDMI and JVGA headers; 6 x USB 2.0 array-pin headers; 2 x vertical USB 2.0 ports; SATA power; F_PANEL",
        "Dimensions": "1U: 440 x 320 x 45 mm; 2U: 435 x 440 x 90 mm",
    },
    "mc23-1u6l": {
        "Expansion": "8 x programmable GPIO; RJ45 console / JCOM; Mini PCIe Wi-Fi; optional 4G/5G; Wake-on-LAN; PXE",
        "Internal I/O": "mSATA and SATA 3.0 storage; GPIO; RJ45 console / JCOM; Mini PCIe Wi-Fi; optional 4G/5G connectivity; Wake-on-LAN; PXE",
        "Dimensions": "1U: 440 x 225 x 45 mm; 2U: 435 x 405 x 90 mm",
        "PCB Dimensions": "200 x 180 mm (W x L)",
    },
    "mce5-1u6l": {
        "USB": "2 x external USB 2.0 ports; 1 x USB 3.0 array-pin header; 2 x vertical USB 2.0 ports; 4 x USB 2.0 array-pin headers",
        "Network": "1 x Realtek RTL8211E IPMI port; 2 x Intel Gigabit Ethernet RJ45 ports",
        "Storage": "2 x M.2 NVMe 2280 (PCIe 3.0 x4); 8 x SATA 3.0 6 Gb/s; 1 x mSATA; 1 x CF",
        "Expansion": "3 x PCIe x8; 1 x PCIe x16; 8 x GPIO; RJ45 console; 2 x COM array-pin headers; 1 x Mini PCIe; IPMI; Wake-on-LAN; PXE",
        "Internal I/O": "mSATA; 4 x SATA 3.0; 1 x PCIe x16; 3 x PCIe x8; 8 x GPIO pins; 2 x COM headers; JVGA header and CF slot; 1 x USB 3.0 array-pin header; 4 x USB 2.0 array-pin headers; 2 x vertical USB 2.0 ports; SATA power; F_PANEL",
        "Dimensions": "1U: 440 x 600 x 45 mm; 2U: 440 x 600 x 90 mm",
    },
    "mcj6-1u6l": {
        "USB": "2 x external USB 3.0 ports; 6 x USB 2.0 array-pin headers; 2 x vertical USB 2.0 ports",
        "Storage": "1 x SATA / 1 x mSATA / 1 x CF (select one of three)",
        "Expansion": "1 x PCIe x4 integrated-LAN slot; 8 x programmable GPIO; RJ45 console; 1 x COM array-pin header; Mini PCIe; SIM; Wake-on-LAN; PXE",
        "Internal I/O": "2 x DDR4 SO-DIMM slots; mSATA and SATA 3.0; 1 x PCIe x4 integrated-LAN slot; 8 x GPIO pins; 1 x COM header; HDMI, VGA and eDP headers; 6 x USB 2.0 array-pin headers; 2 x vertical USB 2.0 ports; SATA power; F_PANEL; CF slot",
        "Dimensions": "1U: 440 x 319 x 45 mm",
        "PCB Dimensions": "223 x 180 mm (W x L)",
        "BIOS": "AMI 128M BIOS with ACPI support and automatic power-on",
    },
}


def clean_value(value: str) -> str:
    value = value.replace("?C", "°C").replace("庐", "®")
    value = value.replace("锛?", "").replace("锛", "")
    replacements = {
        "Suitching Hat": "switching header",
        "sele-test": "self-test",
        "Graghics": "Graphics",
        "mutiple": "multiple",
        "Interace": "Interface",
        "breaing fan": "bearing fans",
        "WindowsServer": "Windows Server",
        "Windows10": "Windows 10",
        "Windows11": "Windows 11",
        "Max48GB": "maximum 48 GB",
        "Max 64GB": "maximum 64 GB",
        "Max 32Gb": "maximum 32 GB",
        "Mhz": "MHz",
    }
    for old, new in replacements.items():
        value = value.replace(old, new)
    value = re.sub(r";\s*;+", ";", value)
    value = re.sub(r"\s+([;,])", r"\1", value)
    value = re.sub(r"([;,])(?=\S)", r"\1 ", value)
    value = re.sub(r"\s{2,}", " ", value)
    return value.strip(" ;")


def main() -> None:
    source = SPEC_PATH.read_text(encoding="utf-8")
    object_start = source.index("{", source.index("firewallBrochureSpecs"))
    object_end = source.rindex("};") + 1
    data = json.loads(source[object_start:object_end])

    for product_id, specs in data.items():
        overrides = OVERRIDES.get(product_id, {})
        for spec in specs:
            spec["value"] = clean_value(overrides.get(spec["label"], spec["value"]))

    formatted = json.dumps(data, ensure_ascii=False, indent=2)
    header = source[:object_start]
    SPEC_PATH.write_text(f"{header}{formatted};\n", encoding="utf-8")


if __name__ == "__main__":
    main()
