"""Build Commercial Mini PC image assets and TypeScript catalog data.

Source PDFs remain untouched. Product cutouts are extracted from the embedded
brochure images, placed on square white canvases, and normalized to 84% long-
edge coverage to match the site's existing product-image standard.
"""

from __future__ import annotations

import io
import json
import re
import zlib
from pathlib import Path

from PIL import Image, ImageChops, ImageCms
from pypdf import PdfReader
from pypdf.filters import FlateDecode


ROOT = Path(__file__).resolve().parents[1]
ASSETS_ROOT = ROOT / "public" / "assets"
SOURCE_ROOTS = {
    "DPC": next(path for path in ASSETS_ROOT.iterdir() if path.is_dir() and path.name.lower().endswith("dpc")),
    "NAS": next(path for path in ASSETS_ROOT.iterdir() if path.is_dir() and path.name.lower() == "nas pc"),
}
CMYK_PROFILE = Path(r"C:\Windows\System32\spool\drivers\color\CoatedFOGRA39.icc")
SRGB_PROFILE = Path(r"C:\Windows\System32\spool\drivers\color\sRGB Color Space Profile.icm")
OUTPUT_ROOT = ROOT / "public" / "assets" / "products" / "commercial"
CATALOG_PATH = ROOT / "lib" / "commercial-catalog.ts"
TARGET_SIZE = 1200
TARGET_COVERAGE = 0.84
WHITE_THRESHOLD = 18


PRODUCTS = [
    dict(id="mc12", name="MC12", series="DPC", tagline="12th and 13th Gen Intel Core compact desktop PC", description="MC12 combines 12th and 13th Gen Intel Core U/P-series processor options, dual Gigabit LAN, triple-display connectivity, DDR5 memory, and dual M.2 storage in a compact aluminum enclosure.", cpu="Intel Core i3-1215U / i5-1245U / i7-1255U / i5-1340P / i7-1360P", graphics="Intel UHD Graphics or Iris Xe Graphics", chipset="Intel 12th / 13th Gen Alder Lake U/P", video="DisplayPort 1.4a, HDMI 2.1, and USB Type-C", memory="2 x DDR5 SO-DIMM, up to 64GB at 4800MHz", usb="3 x USB 3.2, 2 x USB 2.0, and 1 x USB Type-C", material="Aluminum alloy", power="DC 12V", network="2 x Realtek RTL8111H Gigabit Ethernet", storage="2 x M.2 NVMe 2280; one slot also supports SATA", expansion="M.2 E-Key 2230 for Wi-Fi / CNVi", dimensions="135 x 125 x 49 mm", bios="AMI EFI BIOS", tdp="13W base, up to 35W turbo", system="Windows 10 / Windows 11 / Linux", environment="0°C to 60°C; 0% to 95% relative humidity, non-condensing", source="mc12"),
    dict(id="mcar9", name="MCAR9", series="DPC", tagline="Ryzen AI 300 compact desktop PC with USB4 and OCuLink", description="MCAR9 brings AMD Ryzen AI 300 processor options, Radeon graphics, up to 128GB DDR5, dual 2.5GbE, USB4, OCuLink, and dual NVMe storage to a compact high-performance desktop platform.", cpu="AMD Ryzen AI 7 PRO 360 / Ryzen AI 9 365 / Ryzen AI 9 HX 370", graphics="AMD Radeon 880M or Radeon 890M", chipset="AMD Ryzen AI 300 platform", video="HDMI 2.1, DisplayPort 2.1, and USB4 display output", memory="2 x DDR5 SO-DIMM, up to 128GB at 5600MHz", usb="3 x USB 3.0, 1 x USB 2.0, and 1 x USB4 40Gb/s", power="19V / 6.32A, 120W", network="2 x Intel i226-V 2.5GbE", storage="2 x M.2 NVMe 2280", expansion="OCuLink for a compatible external graphics dock; Wi-Fi 6E and Bluetooth 5.3", dimensions="132 x 132 x 50.5 mm", bios="AMI BIOS, Legacy or UEFI", tdp="Depends on selected processor", system="Windows 10 / Windows 11", environment="0°C to 50°C; 5% to 90% relative humidity, non-condensing", source="mcar9"),
    dict(id="mccn51", name="MCCN51", series="DPC", tagline="Compact Intel N5100 mini PC with dual 4K display", description="MCCN51 is a practical commercial mini PC with Intel Celeron N5100, dual 4K HDMI output, up to 32GB DDR4, Wi-Fi 6, and NVMe storage for everyday office and display deployments.", cpu="Intel Celeron N5100", graphics="Intel UHD Graphics", chipset="Intel Celeron N-series", video="2 x HDMI 2.0, supporting dual 4K at 60Hz", memory="2 x DDR4 SO-DIMM, up to 32GB", usb="3 x USB 3.0, 2 x USB 2.0, and 1 x Type-C", power="12V / 3A, 36W adapter", network="1 x Gigabit Ethernet", storage="1 x M.2 NVMe 2280 PCIe 3.0 x4, up to 2TB", expansion="Wi-Fi 6 and Bluetooth 5.2", dimensions="123 x 115 x 47 mm", tdp="6W", system="Windows 7 / 10 / 11 64-bit; Linux 64-bit", environment="0°C to 50°C; 5% to 90% relative humidity, non-condensing", weight="Approx. 410 g", source="mccn51"),
    dict(id="mcgm13", name="MCGM13", series="DPC", tagline="13th Gen Intel Core mini PC with quad-display support", description="MCGM13 combines 13th Gen Intel Core U-series performance, dual 2.5GbE, Thunderbolt 4, four-display connectivity, dual NVMe storage, and optional 2.5-inch storage for professional desktop workloads.", cpu="13th Gen Intel Core U-series, including Core i7-13350 / i7-1355U", graphics="Intel Iris Xe Graphics, supporting up to four displays", chipset="Intel 13th Gen Raptor Lake", video="2 x HDMI 2.0, DisplayPort 1.4, and Thunderbolt 4 Type-C", memory="2 x DDR5 SO-DIMM, up to 64GB at 4800 / 5200MHz", usb="4 x USB 3.2 Gen 1, 2 x USB 2.0, and Thunderbolt 4 Type-C", power="12V to 19V, 90W; Type-C PD supported with a compatible 96W+ supply", network="2 x 2.5GbE RJ45", storage="M.2 2280 SATA / NVMe Gen3 x4; M.2 2280 NVMe PCIe Gen4 x4; optional 2.5-inch SATA drive", expansion="M.2 2230 for Wi-Fi / Bluetooth", dimensions="175 x 128 x 46 mm", bios="AMI UEFI BIOS with PXE and Wake-on-LAN", tdp="15W", environment="0°C to 70°C; 5% to 90% relative humidity", source="mcgm13"),
    dict(id="mcmq12-13", name="MCMQ12/13", series="DPC", tagline="12th and 13th Gen Intel Core compact desktop series", description="MCMQ12/13 is a compact Intel Core platform covering 12th and 13th Gen U, P, H, and HK processor options with USB4, dual HDMI, DDR4 memory, and dual M.2 storage.", cpu="12th / 13th Gen Intel Core U, P, H, and HK options", graphics="Intel Iris Xe Graphics eligible", chipset="Intel Alder Lake platform", video="2 x HDMI 2.1 and USB4 Type-C, supporting 4K at 60Hz", memory="2 x DDR4 SO-DIMM at 3200MHz, up to 64GB or 96GB by configuration", usb="5 x USB 3.2 and 1 x USB4 Type-C", power="19V / 3.78A adapter, 100-240V AC input", network="1 x 2.5GbE RJ45", storage="M.2 NVMe 2280 and M.2 NVMe 2242, up to 2TB", expansion="M.2 E-Key Wi-Fi and Bluetooth 5.2; TPM 2.0 integrated in CPU", dimensions="113 x 113 mm", bios="Resume by alarm, UEFI diskless boot, automatic power-on", system="Windows 11 / Linux", environment="0°C to 45°C operating; -20°C to 70°C storage; 5% to 95% RH", source="mcmq12-13"),
    dict(id="mcmqr-series", name="MCMQR5/R6/R7/R8", series="DPC", tagline="AMD Ryzen 5000 to 8000 compact desktop series", description="MCMQR Series covers AMD Ryzen 5000, 6000, 7000, and 8000 processor families with model-specific DDR4 or DDR5 memory, USB4, dual HDMI, 2.5GbE, and dual M.2 storage.", cpu="AMD Ryzen 5000 / 6000 / 7000 / 8000 series options", graphics="AMD Radeon Graphics", video="2 x HDMI 2.1 and USB4 Type-C, supporting 4K at 60Hz", memory="2 x DDR4 or DDR5 SO-DIMM, up to 64GB or 96GB by model", usb="5 x USB 3.2 and 1 x USB4 Type-C", power="19V / 3.78A adapter, 100-240V AC input", network="1 x 2.5GbE RJ45", storage="M.2 NVMe 2280 and M.2 NVMe 2242, up to 2TB", expansion="M.2 E-Key Wi-Fi and Bluetooth 5.2; TPM 2.0 integrated in CPU", dimensions="113 x 113 mm", bios="Resume by alarm, UEFI diskless boot, automatic power-on", system="Windows 11 / Linux", environment="0°C to 45°C operating; -20°C to 70°C storage; 5% to 95% RH", source="mcmqrseries"),
    dict(id="mcn1", name="MCN1", series="DPC", tagline="Alder Lake-N compact mini PC with expandable storage", description="MCN1 is a compact Alder Lake-N commercial mini PC with dual 4K HDMI, replaceable DDR4 memory, four USB 3.2 ports, and both M.2 and 2.5-inch storage support.", cpu="Intel N95 / N100 / N150", graphics="Intel UHD Graphics", video="2 x HDMI, up to 4K at 60Hz", memory="DDR4 SO-DIMM at 3200MHz, 8GB to 16GB", usb="4 x USB 3.2 at 10Gb/s", material="Plastic", power="DC 12V", network="1 x Realtek RTL8111 Gigabit Ethernet", storage="M.2 SATA 2280 and 2.5-inch HDD / SSD, 7 mm height", expansion="Wi-Fi 5 / Wi-Fi 6 and Bluetooth 4.2 / 5.2", dimensions="127 x 145 x 38 mm", bios="RTC scheduled boot, automatic power-on, Wake-on-LAN", tdp="Depends on selected processor", system="Windows 7 / 8 / 10; Linux", environment="0°C to 40°C operating; -20°C to 60°C storage; up to 90% RH at 40°C, non-condensing", weight="315 g", source="mcn1"),
    dict(id="mcn2", name="MCN2", series="DPC", tagline="Compact Alder Lake-N mini PC with dual HDMI", description="MCN2 delivers Alder Lake-N processing, dual 4K HDMI output, replaceable DDR4 memory, four USB 3.2 ports, and flexible M.2 plus 2.5-inch storage in a compact enclosure.", cpu="Intel N95 / N100 / N150", graphics="Intel UHD Graphics", video="2 x HDMI, up to 4K at 60Hz", memory="DDR4 SO-DIMM at 3200MHz, 8GB to 16GB", usb="4 x USB 3.2 at 10Gb/s", material="Plastic", power="DC 12V", network="1 x Realtek RTL8111 Gigabit Ethernet", storage="M.2 SATA 2280 and 2.5-inch HDD / SSD, 7 mm height", expansion="Wi-Fi 5 and Bluetooth 4.2", dimensions="115 x 113 x 40 mm", bios="RTC scheduled boot, automatic power-on, Wake-on-LAN", tdp="Depends on selected processor", system="Windows 7 / 8 / 10; Linux", environment="0°C to 40°C operating; -20°C to 60°C storage; up to 90% RH at 40°C, non-condensing", weight="305 g", source="mcn2"),
    dict(id="mcn5", name="MCN5", series="DPC", tagline="90 mm Alder Lake-N mini PC with LPDDR5", description="MCN5 condenses Alder Lake-N processor options, LPDDR5 memory, three display outputs, dual Gigabit LAN, and M.2 storage into a 90 mm square commercial mini PC.", cpu="Intel N95 / N100 / N97 / N150 / N200 / N305", graphics="Intel UHD Graphics", video="2 x HDMI 2.0 and DisplayPort 1.4", memory="LPDDR5 4800MHz, 8GB / 12GB / 16GB", usb="3 x USB 3.2 at 10Gb/s and 2 x Type-C", material="Plastic", power="DC 12V", network="2 x Realtek RTL8111 Gigabit Ethernet", storage="M.2 2242 SATA / NVMe PCIe 3.0, up to 2TB", expansion="Wi-Fi 5 / Wi-Fi 6 and Bluetooth 4.2 / 5.2", dimensions="90 x 90 x 38.5 mm", bios="RTC scheduled boot, automatic power-on, Wake-on-LAN", tdp="Depends on selected processor", system="Windows 7 / 8 / 10; Linux", environment="0°C to 40°C operating; -20°C to 60°C storage; up to 90% RH at 40°C, non-condensing", weight="190 g", source="mcn5"),
    dict(id="mcn6", name="MCN6", series="DPC", tagline="Slim Alder Lake-N mini PC with dual 4K HDMI", description="MCN6 is a slim commercial mini PC with a broad Alder Lake-N processor range, replaceable DDR4 memory, dual 4K HDMI, four USB 3.2 ports, and M.2 storage.", cpu="Intel N95 / N100 / N97 / N150 / N200 / N300", graphics="Intel UHD Graphics", video="2 x HDMI 2.0, up to 4K at 60Hz", memory="DDR4 SO-DIMM at 3200MHz, 8GB to 16GB", usb="4 x USB 3.2 at 10Gb/s", material="Plastic", power="DC 12V", network="1 x Realtek RTL8111 Gigabit Ethernet", storage="M.2 2242 SATA / NVMe PCIe 3.0, up to 2TB", expansion="Wi-Fi 5 / Wi-Fi 6 and Bluetooth 4.2 / 5.2", dimensions="124.5 x 111 x 33 mm", bios="RTC scheduled boot, automatic power-on, Wake-on-LAN", tdp="Depends on selected processor", system="Windows 7 / 8 / 10; Linux", environment="0°C to 40°C operating; -20°C to 60°C storage; up to 90% RH at 40°C, non-condensing", weight="215 g", source="mcn6"),
    dict(id="mcn7a", name="MCN7A", series="DPC", tagline="Intel Core performance mini PC with USB4", description="MCN7A combines Intel Alder Lake Core processor options, DDR5 memory, USB4, triple-display connectivity, dual NVMe, and optional SATA storage for performance-oriented commercial deployments.", cpu="Intel Core i3-1215U / i5-1235U / i5-12650H", graphics="Intel Iris Xe Graphics", chipset="Intel Alder Lake / Raptor Lake U, P, and H platforms", video="HDMI, DisplayPort, and USB4 Type-C, supporting 4K at 60Hz", memory="2 x DDR5 SO-DIMM at 4800MHz, up to 64GB", usb="2 x USB 2.0, 2 x USB 3.0, 1 x USB4, and 1 x Type-C data port", material="Plastic and metal", power="DC 19V, 5.26A to 6.32A", network="1 x Intel 2.5GbE", storage="2 x M.2 NVMe 2280 and 1 x SATA 3.0 for HDD / SSD", expansion="Mini PCIe for Wi-Fi / Bluetooth", dimensions="136 x 123 x 51 mm", bios="AMI EFI BIOS", tdp="Depends on selected processor", system="Windows 11 64-bit / Ubuntu / CentOS", environment="0°C to 60°C; 10% to 90% relative humidity, non-condensing", source="mcn7a"),
    dict(id="mcn7p", name="MCN7P", series="DPC", tagline="AMD Ryzen performance mini PC with USB4 and dual 2.5GbE", description="MCN7P pairs AMD Ryzen HS processor options with Radeon graphics, DDR5, USB4, dual 2.5GbE, dual NVMe, and optional SATA storage for demanding commercial desktops.", cpu="AMD Ryzen 7 7735HS / 7840HS / 7940HS", graphics="AMD Radeon 680M Graphics", chipset="AMD Rembrandt / Phoenix U, H, and HS platforms", video="HDMI, DisplayPort, and USB4 Type-C, supporting 4K at 60Hz", memory="2 x DDR5 SO-DIMM at 4800 / 5600MHz, up to 64GB", usb="2 x USB 2.0, 2 x USB 3.0, 1 x USB4, and 1 x Type-C data port", material="Plastic and metal", power="DC 19V, 5.26A to 6.32A", network="2 x Intel 2.5GbE", storage="2 x M.2 NVMe 2280 PCIe 4.0 x4 and 1 x SATA 3.0 for HDD / SSD", expansion="Mini PCIe for Wi-Fi / Bluetooth", dimensions="136 x 123 x 51 mm", bios="AMI EFI BIOS", tdp="Depends on selected processor", system="Windows 11 64-bit / Ubuntu / CentOS", environment="0°C to 60°C; 10% to 90% relative humidity, non-condensing", source="mcn7p"),
    dict(id="mcnuc-1", name="MCNUC-1", series="DPC", tagline="Legacy Intel Core compact desktop PC", description="MCNUC-1 provides Intel Haswell and Broadwell Core options, VGA and HDMI output, eight USB ports, Gigabit LAN, and mSATA plus 2.5-inch storage in an aluminum enclosure.", cpu="Intel Core i5-4005U / 4200U / 5005U / 5200U", graphics="Intel HD 4400 / 5500 Graphics", chipset="Intel Haswell / Broadwell", video="VGA and HDMI", memory="DDR3L SO-DIMM at 1333 / 1600MHz", usb="4 x USB 2.0 and 4 x USB 3.0", material="Aluminum alloy", power="DC 12V", network="1 x Realtek RTL8111G/H Gigabit Ethernet", storage="1 x mSATA and 1 x 2.5-inch SATA 3.0", dimensions="126 x 126 x 52 mm", bios="Diskless boot, Wake-on-LAN, automatic and scheduled power-on", tdp="Depends on selected processor", system="Windows 7 / Windows 10 / Linux", environment="-20°C to 55°C; 5% to 95% relative humidity, non-condensing", source="mcnuc-1"),
    dict(id="mcnuc-2", name="MCNUC-2", series="DPC", tagline="Dual-2.5GbE Intel Core compact desktop PC", description="MCNUC-2 combines Intel Whiskey Lake-U or Comet Lake-U processing, triple-display output, dual 2.5GbE, DDR4 memory, and M.2 plus 2.5-inch storage.", cpu="Intel Core i5-8265U / i5-10210U", graphics="Intel UHD Graphics 620", chipset="Intel Whiskey Lake-U / Comet Lake-U", video="USB Type-C, HDMI, and DisplayPort", memory="DDR4 SO-DIMM, up to 32GB", usb="6 x USB 2.0 and 2 x USB 3.0", material="Aluminum alloy", power="DC 12V", network="2 x Intel i226-V 2.5GbE", storage="M.2 2280 NVMe / NGFF and 2.5-inch SATA 3.0", dimensions="138 x 138 x 51.6 mm", bios="Diskless boot, Wake-on-LAN, automatic and scheduled power-on", tdp="Depends on selected processor", system="Windows 7 / Windows 10 / Linux", environment="-20°C to 55°C; 5% to 95% relative humidity, non-condensing", source="mcnuc-2"),
    dict(id="mcnuc-3", name="MCNUC-3", series="DPC", tagline="12th Gen Intel Core compact PC with 2.5GbE and 4G/5G expansion", description="MCNUC-3 brings 12th Gen Intel Core options, four-display connectivity, dual 2.5GbE, NVMe plus SATA storage, Wi-Fi, and 4G/5G expansion to a compact aluminum system.", cpu="Intel Core i3-1215U / i5-1245U / i7-1255U", graphics="Intel HD Graphics", chipset="12th Gen Intel Core mobile platform", video="2 x HDMI, DisplayPort, and USB Type-C display output", memory="DDR4 SO-DIMM at 2666 / 3200MHz, up to 32GB", usb="6 x USB 2.0, 2 x USB 3.0, and 1 x Type-C", material="Aluminum alloy", power="DC 12V", network="2 x Intel i226-V 2.5GbE", storage="M.2 2280 NVMe / NGFF and 2.5-inch SATA 3.0", expansion="M.2 E-Key Wi-Fi; M.2 B-Key 4G/5G; SIM slot", dimensions="126 x 126 x 47 mm", bios="Diskless boot, Wake-on-LAN, automatic and scheduled power-on", tdp="Depends on selected processor", system="Windows 7 / Windows 10 / Linux", environment="-20°C to 55°C; 5% to 95% relative humidity, non-condensing", source="mcnuc-3"),
    dict(id="mcvx4", name="MCVX4", series="DPC", tagline="Desktop-class Intel Pentium compact PC", description="MCVX4 uses an Intel H610 platform with a desktop-class Pentium Gold processor, dual-display output, up to 64GB DDR4, NVMe, dual SATA, and Wi-Fi expansion.", cpu="Intel Pentium Gold G7400, 2 cores / 4 threads, up to 3.7GHz", graphics="Intel UHD Graphics 710", chipset="Intel H610", video="HDMI and DisplayPort", memory="2 x DDR4 SO-DIMM at 2666 / 3200MHz, up to 64GB", usb="4 x USB 2.0 and 4 x USB 3.0", material="Aluminum alloy", power="DC 12V / 19V", network="1 x Gigabit Ethernet", storage="M.2 2280 NVMe / NGFF and 2 x SATA 3.0", expansion="M.2 E-Key 2230 for Wi-Fi", dimensions="200 x 190 x 40 mm", bios="UEFI, Wake-on-LAN, automatic and scheduled power-on", tdp="46W CPU; approximately 40W to 60W system", system="Windows 10 / Windows 11 / Ubuntu", environment="-20°C to 55°C; 5% to 95% relative humidity, non-condensing", source="mcvx4"),
    dict(id="mcnas100", name="MCNAS100", series="NAS", tagline="Compact NAS platform with dual 10GbE SFP+ and four 2.5GbE ports", description="MCNAS100 combines Alder Lake-N processing, DDR5 memory, dual 10GbE SFP+, four 2.5GbE ports, NVMe and SATA storage, and PCIe expansion for compact storage and high-speed network deployments.", cpu="Intel N100 / N200 / Core i3-N305", graphics="Intel UHD Graphics", chipset="Intel Alder Lake-N", video="HDMI 2.0, DisplayPort 1.2, and USB Type-C", memory="DDR5 SO-DIMM, up to 32GB at 4800 / 5200 / 5600MHz", usb="1 x USB 3.0 and 5 x USB 2.0", material="Aluminum alloy", power="DC 12V", network="2 x Intel 82599ES 10GbE SFP+ and 4 x Intel i226-V 2.5GbE", storage="M.2 NVMe PCIe 3.0 x1, SATA 3.0, and TF card", expansion="PCIe x8 slot with PCIe 3.0 x4 signal; Mini PCIe; GPIO; COM; TPM; SIM", dimensions="131.7 x 155 x 60 mm", bios="AMI EFI BIOS with automatic power-on, Wake-on-LAN, GPIO, and PXE", tdp="6W base, up to 15W turbo", system="Windows 10 / Windows 11 / Linux", environment="0°C to 70°C; 5% to 85% relative humidity, non-condensing", source="mcnas100"),
    dict(id="mcnas12", name="MCNAS12", series="NAS", tagline="Intel Core NAS platform with four 2.5GbE and dual 10GbE SFP+", description="MCNAS12 combines 12th and 13th Gen Intel processor options, DDR5 memory, four 2.5GbE ports, dual 10GbE SFP+, NVMe, dual SATA, and triple-display output for compact storage and network services.", cpu="Intel Core i5-1240P / Pentium Gold 8505 / Intel U300E", graphics="Intel Iris Xe Graphics", chipset="Intel Alder Lake platform", video="DisplayPort, 2 x HDMI, and Type-C 3.1", memory="2 x DDR5 SO-DIMM, up to 64GB at 5600MHz", usb="USB 3.2 Gen 1, Type-C 3.1, and 2 x USB 2.0", material="Aluminum alloy", power="DC 12V to 19V", network="4 x Intel i226 2.5GbE and 2 x Intel 82599ES 10GbE SFP+", storage="M.2 NVMe PCIe 3.0 x4 and 2 x external SATA 3.0", expansion="TF card and F_PANEL header", dimensions="145.4 x 131.7 x 60 mm", bios="AMI EFI BIOS", tdp="15W to 28W", system="Windows 10 / Windows 11 / Linux", environment="0°C to 60°C; 0% to 95% relative humidity, non-condensing", source="mcnas12"),
    dict(id="mcnash10", name="MCNASH10", series="NAS", tagline="Expandable Intel N100 NAS platform with optional high-speed SFP+", description="MCNASH10 combines Intel N100, DDR5, dual 2.5GbE, NVMe storage, and a PCIe-based expansion interface supporting compatible 20Gb or 40Gb SFP+ configurations.", cpu="Intel N100 quad-core processor", graphics="Intel UHD Graphics", chipset="Intel N100 platform", video="HDMI 2.0, DisplayPort 1.2, and expandable Type-C display", memory="DDR5 SO-DIMM, up to 16GB", usb="2 x USB 3.2 and 1 x USB 2.0", power="DC 12V / 7A", network="2 x Intel i226 2.5GbE; optional 2 or 4 SFP+ 10GbE ports", storage="M.2 NVMe / NGFF", expansion="PCIe x6 I/O interface for compatible 20Gb / 40Gb SFP+ expansion; M.2 CNVi; GPIO; COM", dimensions="128 x 156 x 59 mm", bios="AMI UEFI BIOS with watchdog, Wake-on-LAN, and PXE", tdp="6W", system="Windows 10 / Windows 11 / Linux", environment="0°C to 50°C; 5% to 90% relative humidity, non-condensing", weight="1.1 kg", source="mcnash10"),
    dict(id="mcnash14", name="MCNASH14", series="NAS", tagline="Expandable Intel NAS platform with four 2.5GbE ports", description="MCNASH14 provides Pentium 8505 or optional Core i7 performance, up to 64GB DDR5, four 2.5GbE ports, NVMe plus SATA storage, PCIe expansion, and optional high-speed network modules.", cpu="Intel Pentium Gold 8505; optional Core i7-13620H", graphics="Intel UHD Graphics for 12th Gen processors", chipset="Intel 8505 platform", video="DisplayPort and HDMI", memory="2 x DDR5 SO-DIMM, up to 64GB", usb="2 x USB 3.0 and 2 x USB 2.0", power="DC 12V", network="4 x Intel i226 2.5GbE; expandable to compatible 20Gb / 40Gb SFP+ or four-LAN modules", storage="M.2 NVMe 2280 PCIe 4.0 x4 and SATA 3.0", expansion="PCIe x8 slot with PCIe 3.0 x4 signal; M.2 3052; M.2 2230; SIM; GPIO; TPM", dimensions="150 x 143 x 84 mm", bios="AMI UEFI BIOS with Wake-on-LAN and PXE", tdp="Depends on selected processor", system="Windows 10 / Windows 11 / Linux", environment="0°C to 50°C; 5% to 90% relative humidity, non-condensing", weight="1.5 kg net", source="mcnash14"),
    dict(id="mcnash9", name="MCNASH9", series="NAS", tagline="Compact Intel N100 NAS and edge storage platform", description="MCNASH9 is a compact Intel N100 platform with DDR5, dual 2.5GbE, HDMI and DisplayPort, NVMe plus SATA storage, and Wi-Fi expansion for small storage and edge-service projects.", cpu="Intel N100 quad-core processor", graphics="Intel UHD Graphics", chipset="Intel N100 platform", video="HDMI up to 4K at 60Hz and DisplayPort; expandable Type-C display", memory="DDR5 SO-DIMM at 4800MHz, up to 16GB", usb="1 x USB 2.0 and 1 x USB 3.2 Gen 2", power="DC 12V", network="2 x Intel i226 2.5GbE; expandable to four LAN ports", storage="M.2 Key-M 2280 PCIe / SATA and SATA 3.0", expansion="M.2 E-Key 2230 for Wi-Fi / Bluetooth; GPIO; COM; fan headers", dimensions="100 x 100 x 45 mm", bios="AMI UEFI BIOS with watchdog, Wake-on-LAN, and PXE", tdp="6W", system="Windows 10 / Windows 11 / Linux", environment="0°C to 50°C; 5% to 90% relative humidity, non-condensing", weight="1 kg", source="mcnash9"),
]


SPEC_COMPLEMENTS = {
    "mc12": dict(front_io="3 x USB 3.0; 1 x USB Type-C; 1 x audio output; 1 x microphone input; 1 x power button", rear_io="1 x 12V DC input; 2 x Realtek RTL8111H Gigabit Ethernet; 1 x DisplayPort 1.4a; 1 x HDMI 2.1; 1 x power button", internal_io="1 x M.2 E-Key 2230 for Wi-Fi 6; 1 x M.2 storage slot with SATA support; 2 x DDR5 SO-DIMM slots"),
    "mcar9": dict(expansion="OCuLink for a compatible external graphics dock", wireless="Wi-Fi 6E and Bluetooth 5.3", front_io="1 x power button; 1 x reset pinhole; 2 x USB 3.0; 1 x 3.5 mm combo audio jack; 1 x USB4 40Gbps; 1 x OCuLink", rear_io="1 x 19V DC input; 2 x Intel i226-V 2.5GbE; 1 x HDMI 2.1; 1 x DisplayPort 2.1; 1 x USB 3.0; 1 x USB 2.0"),
    "mccn51": dict(expansion=None, wireless="Wi-Fi 6 and Bluetooth 5.2", front_io="3 x USB 3.0; 1 x Type-C; 1 x 3.5 mm audio jack; 1 x power button", rear_io="2 x HDMI 2.0; 2 x USB 2.0; 1 x Gigabit Ethernet; 1 x DC input"),
    "mcgm13": dict(expansion=None, wireless="1 x M.2 2230 slot for Wi-Fi / Bluetooth", front_io="1 x power button; 1 x Thunderbolt 4 Type-C with compatible PD input; 4 x USB 3.2 Gen 1; 1 x 3.5 mm headphone jack; 1 x 3.5 mm microphone input", rear_io="1 x 12V-19V DC input; 2 x 2.5GbE RJ45; 2 x HDMI 2.0; 1 x DisplayPort 1.4; 2 x USB 2.0; 2 x Wi-Fi antenna connectors"),
    "mcmq12-13": dict(front_io="1 x power button; 1 x 3.5 mm audio jack; 1 x USB4 Type-C; 1 x USB 3.2", rear_io="1 x DC input; 2 x HDMI 2.1; 4 x USB 3.2; 1 x 2.5GbE RJ45"),
    "mcmqr-series": dict(front_io="1 x power button; 1 x 3.5 mm audio jack; 1 x USB4 Type-C; 1 x USB 3.2", rear_io="1 x DC input; 2 x HDMI 2.1; 4 x USB 3.2; 1 x 2.5GbE RJ45"),
    "mcn1": dict(front_io="1 x power button; 1 x 3.5 mm combo audio jack with Realtek ALC897; 2 x USB 3.2; 1 x Clear CMOS button", rear_io="1 x 12V DC input; 1 x Realtek RTL8111 Gigabit Ethernet; 2 x HDMI; 2 x USB 3.2"),
    "mcn2": dict(front_io="1 x power button; 1 x 3.5 mm combo audio jack with Realtek ALC897; 2 x USB 3.2; 1 x Clear CMOS button", rear_io="1 x 12V DC input; 1 x Realtek RTL8111 Gigabit Ethernet; 2 x HDMI; 2 x USB 3.2"),
    "mcn7a": dict(front_io="1 x 3.5 mm audio jack; 2 x USB 3.2; 1 x Type-C data port", rear_io="2 x USB 2.0; 1 x HDMI; 1 x DisplayPort; 1 x USB4; 1 x 2.5GbE RJ45; 1 x DC input", internal_io="1 x system-fan connector; 1 x Mini PCIe half-size slot for Wi-Fi / Bluetooth; 2 x M.2 2280 NVMe slots; 1 x SATA 3.0 connector; 2 x DDR5 SO-DIMM slots"),
    "mcn7p": dict(front_io="1 x 3.5 mm audio jack; 2 x USB 3.2; 1 x Type-C data port", rear_io="2 x USB 2.0; 1 x HDMI; 1 x DisplayPort; 1 x USB4; 2 x 2.5GbE RJ45; 1 x DC input", internal_io="1 x system-fan connector; 1 x Mini PCIe half-size slot for Wi-Fi / Bluetooth; 2 x M.2 2280 NVMe slots; 1 x SATA 3.0 connector; 2 x DDR5 SO-DIMM slots"),
    "mcnuc-1": dict(front_io="2 x USB 2.0; 4 x USB 3.0; 1 x power button", rear_io="1 x 12V DC input; 2 x USB 2.0; 1 x Realtek RTL8111G/H Gigabit Ethernet; 1 x HDMI; 1 x VGA; 1 x audio port", internal_io="1 x DDR3 SO-DIMM slot; 1 x mSATA slot; 1 x 2.5-inch SATA 3.0 connector"),
    "mcnuc-2": dict(front_io="1 x dual-function audio jack; 6 x USB 2.0; 1 x power button", rear_io="1 x 12V DC input; 2 x USB 2.0; 2 x Intel i226-V 2.5GbE; 1 x Type-C; 1 x HDMI; 1 x DisplayPort", internal_io="1 x DDR4 SO-DIMM slot; 1 x M.2 2280 M-Key slot; 1 x 2.5-inch SATA 3.0 connector"),
    "mcnuc-3": dict(front_io="1 x combo audio jack; 6 x USB 2.0; 2 x USB 3.0; 1 x HDMI; 1 x power button", rear_io="1 x 12V DC input; 1 x full-featured Type-C; 2 x USB 3.0; 2 x Intel i226-V 2.5GbE; 1 x HDMI; 1 x DisplayPort", internal_io="1 x DDR4 SO-DIMM slot; 1 x M.2 2280 M-Key slot; 1 x 2.5-inch SATA 3.0 connector; 1 x M.2 E-Key 2230 slot for Wi-Fi; 1 x M.2 B-Key slot for 4G/5G; 1 x SIM slot"),
    "mcvx4": dict(front_io="1 x audio / microphone combo jack; 4 x USB 2.0; 1 x power button", rear_io="1 x 12V / 19V DC input; 1 x HDMI; 1 x DisplayPort; 4 x USB 3.0; 1 x Gigabit Ethernet", internal_io="2 x DDR4 SO-DIMM slots; 1 x M.2 2280 M-Key slot; 2 x SATA 3.0 connectors; 1 x M.2 E-Key 2230 slot for Wi-Fi"),
    "mcnas100": dict(front_io="1 x power button; 1 x Type-C; 1 x audio port; 1 x HDMI 2.0; 1 x USB 3.0; 1 x DisplayPort 1.2; 3 x USB 2.0; 1 x restart button; 1 x SIM slot; 1 x TF card slot", rear_io="2 x USB 2.0; 1 x 12V DC input; 4 x 2.5GbE RJ45; 2 x 10GbE SFP+", internal_io="1 x buzzer; 1 x TPM header; 1 x debug header; 2 x DDR5 memory slots; 1 x Mini PCIe slot with USB 2.0 signal; 1 x Phoenix terminal power connector; 1 x front-panel header; 1 x motherboard battery connector; 1 x jumper header; 1 x PCIe x8 slot with PCIe 3.0 x4 signal; 2 x USB 2.0 headers; 1 x M.2 NVMe slot with PCIe 3.0 x1 signal; 1 x SATA 3.0 connector; 1 x GPIO header; 1 x SATA power connector; 1 x COM header"),
    "mcnas12": dict(front_io="1 x power input; 4 x 2.5GbE RJ45; 2 x 10GbE SFP+; 1 x RJ45 COM", rear_io="1 x Type-C 3.1; 2 x USB 2.0; 1 x USB 3.2; 2 x HDMI with audio; 1 x DisplayPort; 1 x power button; 1 x TF card slot; 1 x antenna connector; 1 x audio jack", internal_io="2 x SATA 3.0 connectors; 1 x M.2 connector; 1 x front-panel header"),
    "mcnash10": dict(front_io="2 x USB 3.2; 2 x 2.5GbE RJ45; 1 x HDMI 2.0; 1 x DisplayPort 1.2; 1 x DC input; 1 x USB 2.0; 1 x power button", rear_io="2 or 4 x expandable 10GbE SFP+", internal_io="2 x front USB headers; 1 x COM header; 1 x front-panel header; 2 x CPU / system fan connectors; 1 x GPIO header"),
    "mcnash14": dict(front_io="2 x USB 2.0; 4 x 2.5GbE RJ45; 1 x DC input; 1 x DisplayPort; 1 x HDMI", rear_io="2 x USB 3.0; 1 x power button; 1 x Type-C; 1 x SIM slot; 1 x console port", internal_io="1 x SATA connector; 1 x SATA power connector; 2 x DDR5 SO-DIMM slots; 1 x PCIe x8 slot; M.2 slots for Wi-Fi, 3052 expansion, and 2280 storage; 1 x Clear CMOS header; 1 x GPIO header; 1 x front USB header; 1 x TPM header; 1 x CPU fan connector"),
    "mcnash9": dict(front_io="2 x Intel i226 2.5GbE RJ45; 1 x USB 2.0; 1 x USB 3.2 Gen 2; 1 x HDMI supporting 4K at 60Hz; 1 x DisplayPort; 1 x power button; 1 x 12V DC input", rear_io="1 x 4-pin CPU fan connector", internal_io="2 x front USB headers; 1 x COM header; 1 x front-panel header; 2 x CPU / system fan connectors; 1 x GPIO header"),
}


EXISTING = {"mc15uh", "mctar7"}
MAIN_CHOICES = {
    "mc12": 3, "mcar9": 4, "mccn51": 4, "mcgm13": 2, "mcmq12-13": 4,
    "mcmqr-series": 4, "mcn1": 1, "mcn2": 1, "mcn5": 1, "mcn6": 3,
    "mcn7a": 2, "mcn7p": 2, "mcnuc-1": 3, "mcnuc-2": 1, "mcnuc-3": 1,
    "mcvx4": 1, "mcnas100": 3, "mcnas12": 2, "mcnash10": 3, "mcnash14": 1,
    "mcnash9": 3,
}


def foreground_bbox(image: Image.Image):
    rgba = image.convert("RGBA")
    alpha = rgba.getchannel("A")
    if alpha.getextrema()[0] < 250:
        return alpha.getbbox()
    flattened = Image.new("RGB", rgba.size, "white")
    flattened.paste(rgba, mask=alpha)
    difference = ImageChops.difference(flattened, Image.new("RGB", rgba.size, "white")).convert("L")
    return difference.point(lambda value: 255 if value > WHITE_THRESHOLD else 0).getbbox()


def square_product(source: Path | Image.Image, destination: Path) -> None:
    if isinstance(source, Image.Image):
        image = source.convert("RGBA").copy()
    else:
        with Image.open(source) as opened:
            image = opened.convert("RGBA").copy()
    bbox = foreground_bbox(image)
    crop = image.crop(bbox) if bbox else image
    max_edge = max(crop.width, crop.height)
    target_edge = round(TARGET_SIZE * TARGET_COVERAGE)
    scale = target_edge / max_edge
    resized = crop.resize((max(1, round(crop.width * scale)), max(1, round(crop.height * scale))), Image.Resampling.LANCZOS)
    canvas = Image.new("RGBA", (TARGET_SIZE, TARGET_SIZE), "white")
    canvas.alpha_composite(resized, ((TARGET_SIZE - resized.width) // 2, (TARGET_SIZE - resized.height) // 2))
    destination.parent.mkdir(parents=True, exist_ok=True)
    canvas.convert("RGB").save(destination, "PNG", optimize=True)


def source_pdf(product: dict) -> Path:
    candidates = [
        path for path in SOURCE_ROOTS[product["series"]].glob("*.pdf")
        if product["source"].replace("-", "").lower()
        in re.sub(r"[^a-z0-9]", "", path.stem.lower())
    ]
    if not candidates:
        raise FileNotFoundError(f"No brochure found for {product['id']}")
    return min(candidates, key=lambda path: len(path.stem))


def decode_pdf_image(image_object) -> Image.Image:
    width, height = int(image_object["/Width"]), int(image_object["/Height"])
    color_space = str(image_object.get("/ColorSpace"))
    raw = zlib.decompress(image_object._data)
    if color_space == "/DeviceCMYK":
        cmyk = Image.frombytes("CMYK", (width, height), raw)
        rgb = ImageCms.profileToProfile(
            cmyk,
            ImageCms.getOpenProfile(str(CMYK_PROFILE)),
            ImageCms.getOpenProfile(str(SRGB_PROFILE)),
            outputMode="RGB",
            renderingIntent=0,
        )
    elif color_space == "/DeviceRGB":
        rgb = Image.frombytes("RGB", (width, height), raw)
    else:
        rgb = Image.open(io.BytesIO(image_object.get_data())).convert("RGB")

    alpha = Image.new("L", (width, height), 255)
    soft_mask = image_object.get("/SMask")
    if soft_mask:
        mask_object = soft_mask.get_object()
        mask_raw = mask_object.get_data()
        alpha = Image.frombytes("L", (width, height), mask_raw)
    rgba = rgb.convert("RGBA")
    rgba.putalpha(alpha)
    return rgba


def brochure_images(product: dict) -> list[Image.Image]:
    page = PdfReader(str(source_pdf(product))).pages[0]
    objects = page["/Resources"]["/XObject"]
    return [
        decode_pdf_image(reference.get_object())
        for reference in objects.values()
        if reference.get_object().get("/Subtype") == "/Image"
    ]


def clean_specs(product: dict) -> list[dict[str, str]]:
    product = {**product, **SPEC_COMPLEMENTS.get(product["id"], {})}
    labels = [
        ("Model", "name"), ("CPU", "cpu"), ("Chipset", "chipset"), ("Graphics", "graphics"),
        ("Video", "video"), ("Memory", "memory"), ("USB", "usb"), ("Material", "material"),
        ("Power", "power"), ("Network", "network"), ("Storage", "storage"),
        ("Expansion", "expansion"), ("Wireless", "wireless"),
        ("Front I/O", "front_io"), ("Rear I/O", "rear_io"),
        ("Internal I/O", "internal_io"),
        ("Dimensions", "dimensions"), ("Weight", "weight"),
        ("BIOS", "bios"), ("TDP", "tdp"), ("System", "system"),
        ("Working Environment", "environment"),
    ]
    return [{"label": label, "value": product[key]} for label, key in labels if product.get(key)]


def compact_highlights(product: dict) -> list[str]:
    return [product["cpu"], product["memory"], product["network"], product["storage"]]


def ts_value(value) -> str:
    return json.dumps(value, ensure_ascii=False, indent=2)


def build_assets() -> None:
    for product in PRODUCTS:
        if product["id"] in EXISTING:
            continue
        output = OUTPUT_ROOT / product["series"].lower() / product["id"] / "images"
        output.mkdir(parents=True, exist_ok=True)
        for stale_gallery in output.glob("view-*.png"):
            stale_gallery.unlink()
        candidates = brochure_images(product)
        main_index = MAIN_CHOICES[product["id"]] - 1
        main_source = candidates[main_index]
        square_product(main_source, output / "main-square.png")
        gallery_sources = [
            candidate for index, candidate in enumerate(candidates)
            if index != main_index and not (candidate.width <= 250 and candidate.height <= 250)
        ]
        if not gallery_sources:
            gallery_sources = [main_source]
        for gallery_index, gallery_source in enumerate(gallery_sources[:3], start=1):
            square_product(gallery_source, output / f"view-{gallery_index}.png")


def build_catalog() -> None:
    items = []
    for product in PRODUCTS:
        if product["id"] in EXISTING:
            continue
        base = f"/assets/products/commercial/{product['series'].lower()}/{product['id']}/images"
        gallery_count = len(list((OUTPUT_ROOT / product["series"].lower() / product["id"] / "images").glob("view-*.png")))
        items.append({
            "id": product["id"], "name": product["name"], "series": product["series"],
            "tagline": product["tagline"], "description": product["description"],
            "image": f"{base}/main-square.png",
            "galleryImages": [f"{base}/view-{index}.png" for index in range(1, gallery_count + 1)],
            "highlights": compact_highlights(product), "specs": clean_specs(product),
            "operatingRange": product.get("environment"),
        })

    output = """export type CommercialSeriesCode = 'DPC' | 'NAS';

export type CommercialCatalogSpec = { label: string; value: string };

export type CommercialCatalogItem = {
  id: string;
  name: string;
  series: CommercialSeriesCode;
  tagline: string;
  description: string;
  image: string;
  galleryImages: string[];
  highlights: string[];
  specs: CommercialCatalogSpec[];
  operatingRange?: string;
};

// Product facts and images are extracted from the supplied product brochures.
export const commercialCatalog: CommercialCatalogItem[] = """ + ts_value(items) + ";\n"
    CATALOG_PATH.write_text(output, encoding="utf-8")


if __name__ == "__main__":
    build_assets()
    build_catalog()
    print(f"products={len(PRODUCTS)} catalog={CATALOG_PATH}")
