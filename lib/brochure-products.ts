// Product facts and images from the supplied September 2026 brochures.
// Regenerate with scripts/import-september-products.py; review source ambiguities before publishing.
import type { IndustrialCatalogItem } from './industrial-catalog';
import type { CommercialCatalogItem } from './commercial-catalog';

type Provenance = { sourceBrochure: string; sourceSha256: string };

export const industrialBrochureProducts: (IndustrialCatalogItem & Provenance)[] = [
  {
    "id": "mcipcb1a",
    "name": "MCIPCB1A",
    "tagline": "Intel N100 / N150 compact industrial PC",
    "description": "MCIPCB1A combines Intel N100 / N150 processing, up to 32GB DDR4, and dual intel i226-v lan for industrial computing and connected equipment. Model-specific serial, display, storage, and expansion options are detailed below; optional interfaces depend on the selected configuration.",
    "image": "/assets/products/industrial/brochure/mcipcb1a/main.webp",
    "galleryImages": [
      "/assets/products/industrial/brochure/mcipcb1a/view-1.webp",
      "/assets/products/industrial/brochure/mcipcb1a/view-2.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/industrial/brochure/mcipcb1a/view-1.webp",
        "title": "MCIPCB1A front panel"
      },
      {
        "image": "/assets/products/industrial/brochure/mcipcb1a/view-2.webp",
        "title": "MCIPCB1A rear panel"
      }
    ],
    "highlights": [
      "Intel N100 / N150",
      "Up to 32GB DDR4",
      "Dual Intel I226-V LAN",
      "Dual serial interfaces"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCB1A"
      },
      {
        "label": "CPU",
        "value": "Intel Alder Lake-N N100/N150"
      },
      {
        "label": "BIOS",
        "value": "AMI 128M BIOS (Winbond 25Q128JVSQ); Auto Power On, PXE, WOL"
      },
      {
        "label": "Memory",
        "value": "1 x SODIMM DDR4 3200 MHz, max 32 GB"
      },
      {
        "label": "Graphics",
        "value": "Intel UHD Graphics"
      },
      {
        "label": "HDMI",
        "value": "2 x HDMI1.4, max 4K 60 Hz"
      },
      {
        "label": "DP",
        "value": "1 x DP1.4, max 4K 60 Hz"
      },
      {
        "label": "SATA",
        "value": "1 x SATA3.0 6 Gb/s"
      },
      {
        "label": "Storage - M.2 SSD",
        "value": "1 x M.2 SSD 2280 (NGFF/PCIe x2 auto-switching)"
      },
      {
        "label": "Network",
        "value": "2 x Intel I226-V (LAN1 can be changed to 2 x USB)"
      },
      {
        "label": "USB",
        "value": "2 x USB2.0; 2 x USB3.0; 1 x USB3.2 Gen1 next to the heatsink fins; 1 x USB Type-C 3.0 (no touch function)"
      },
      {
        "label": "Serial",
        "value": "2 x COM RS232 (both support RS485 via jumper settings)"
      },
      {
        "label": "Audio",
        "value": "Realtek ALC897 7.1-channel HDA codec"
      },
      {
        "label": "M.2 Key-E",
        "value": "M.2 Wi-Fi Key-E 2230 socket, PCIe protocol, supports CNVi"
      },
      {
        "label": "Mini PCIe",
        "value": "Supports USB Wi-Fi/4G via USB protocol; optional PCIe protocol shared with M.2 Wi-Fi"
      },
      {
        "label": "SIM",
        "value": "1 x Mini SIM, compatible with Nano SIM"
      },
      {
        "label": "Watchdog",
        "value": "Watchdog timer"
      },
      {
        "label": "Fan",
        "value": "4-pin 5 V CPU fan monitoring and intelligent control"
      },
      {
        "label": "AT-ATX",
        "value": "AT_ATX(1-2) AUTO POWER ON; AT_ATX(2-3) NORMAL"
      },
      {
        "label": "DC input",
        "value": "DC 12 V, 5.5 x 2.5 mm DC jack"
      },
      {
        "label": "Environment - Operating",
        "value": "0~60 C / 5~95% RH, non-condensing"
      },
      {
        "label": "Environment - Storage",
        "value": "-40~80 C / 5~95% RH, non-condensing"
      },
      {
        "label": "Dimensions",
        "value": "PCB Size: 120 x 120 mm; Product Size: 148 x 125 x 56 mm"
      }
    ],
    "series": "B",
    "operatingRange": "0°C to 60°C",
    "sourceBrochure": "public/assets/工控机IPC/B系列/MCIPCB1A Brochure.pdf",
    "sourceSha256": "4788ff3579eb5a0f6a4df1c96996b5be4f0ee66d872452c696224ec86e682019"
  },
  {
    "id": "mcipcb1b",
    "name": "MCIPCB1B",
    "tagline": "6th / 7th Gen Intel Core compact industrial PC",
    "description": "MCIPCB1B combines 6th / 7th Gen Intel Core processing, up to 16GB DDR3L, and dual gigabit lan for industrial computing and connected equipment. Model-specific serial, display, storage, and expansion options are detailed below; optional interfaces depend on the selected configuration.",
    "image": "/assets/products/industrial/brochure/mcipcb1b/main.webp",
    "galleryImages": [
      "/assets/products/industrial/brochure/mcipcb1b/view-1.webp",
      "/assets/products/industrial/brochure/mcipcb1b/view-2.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/industrial/brochure/mcipcb1b/view-1.webp",
        "title": "MCIPCB1B front panel"
      },
      {
        "image": "/assets/products/industrial/brochure/mcipcb1b/view-2.webp",
        "title": "MCIPCB1B rear panel"
      }
    ],
    "highlights": [
      "6th / 7th Gen Intel Core",
      "Up to 16GB DDR3L",
      "Dual Gigabit LAN",
      "Dual serial interfaces"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCB1B"
      },
      {
        "label": "CPU",
        "value": "Intel Skylake-U / Kaby Lake-U Core i3/i5/i7"
      },
      {
        "label": "BIOS",
        "value": "AMI 128M BIOS (Winbond 25Q64JVSIQ); Auto Power On, PXE, WOL"
      },
      {
        "label": "Memory",
        "value": "1 x SODIMM DDR3L 1600 MHz, max 16 GB"
      },
      {
        "label": "Graphics",
        "value": "Intel HD Graphics 520 / Intel HD Graphics 620"
      },
      {
        "label": "HDMI",
        "value": "1 x HDMI1.4, max 4K 30 Hz"
      },
      {
        "label": "eDP",
        "value": "1 x eDP pin header (2 x 15-pin, 2.0 mm), max 1080P 60 Hz"
      },
      {
        "label": "VGA",
        "value": "1 x VGA, max 1080P 60 Hz (optional HDMI, CS5212 solution)"
      },
      {
        "label": "SATA",
        "value": "1 x SATA3.0 6 Gb/s"
      },
      {
        "label": "Storage - M.2 SSD",
        "value": "1 x M.2 SSD 2280 (NGFF/PCIe x2 auto-switching)"
      },
      {
        "label": "Network",
        "value": "2 x RTL8111H Gigabit LAN (optional RTL8106E; LAN1 can be changed to 2 x USB)"
      },
      {
        "label": "USB",
        "value": "External: 4 x USB3.0; 2 x USB2.0. Internal: 2 x USB2.0 pin header (2.0 mm)"
      },
      {
        "label": "Serial",
        "value": "2 x COM RS232 (both support RS485)"
      },
      {
        "label": "Audio",
        "value": "Realtek ALC897 7.1-channel HDA codec"
      },
      {
        "label": "Mini PCIe",
        "value": "Supports Wi-Fi/4G, PCIe protocol"
      },
      {
        "label": "SIM",
        "value": "1 x Mini SIM, compatible with Nano SIM"
      },
      {
        "label": "GPIO",
        "value": "Supports 4 GPIO channels"
      },
      {
        "label": "Watchdog",
        "value": "Watchdog timer"
      },
      {
        "label": "Fan",
        "value": "Optional 3-pin 12 V system fan monitoring"
      },
      {
        "label": "AT-ATX",
        "value": "AT_ATX(1-2) AUTO POWER ON; AT_ATX(2-3) NORMAL"
      },
      {
        "label": "DC input",
        "value": "DC 12 V"
      },
      {
        "label": "Environment - Operating",
        "value": "0~60 C / 5~95% RH, non-condensing"
      },
      {
        "label": "Environment - Storage",
        "value": "-40~80 C / 5~95% RH, non-condensing"
      },
      {
        "label": "Dimensions",
        "value": "PCB Size: 120 x 120 mm; Product Size: 148 x 125 x 56 mm"
      }
    ],
    "series": "B",
    "operatingRange": "0°C to 60°C",
    "sourceBrochure": "public/assets/工控机IPC/B系列/MCIPCB1B Brochure.pdf",
    "sourceSha256": "77d0ef99657e352e783d8120afc33c595ffab155c3eb0e8ece56ee30d1f6ff4d"
  },
  {
    "id": "mcipcb1f",
    "name": "MCIPCB1F",
    "tagline": "Intel Core i3-N305 compact industrial PC",
    "description": "MCIPCB1F combines Intel Core i3-N305 processing, up to 32GB DDR4, and dual intel i226-v lan for industrial computing and connected equipment. Model-specific serial, display, storage, and expansion options are detailed below; optional interfaces depend on the selected configuration.",
    "image": "/assets/products/industrial/brochure/mcipcb1f/main.webp",
    "galleryImages": [
      "/assets/products/industrial/brochure/mcipcb1f/view-1.webp",
      "/assets/products/industrial/brochure/mcipcb1f/view-2.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/industrial/brochure/mcipcb1f/view-1.webp",
        "title": "MCIPCB1F front panel"
      },
      {
        "image": "/assets/products/industrial/brochure/mcipcb1f/view-2.webp",
        "title": "MCIPCB1F rear panel"
      }
    ],
    "highlights": [
      "Intel Core i3-N305",
      "Up to 32GB DDR4",
      "Dual Intel I226-V LAN",
      "Dual serial interfaces"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCB1F"
      },
      {
        "label": "CPU",
        "value": "Intel i3-N305"
      },
      {
        "label": "BIOS",
        "value": "AMI 128M BIOS (Winbond 25Q128JVSQ); Auto Power On, PXE, WOL"
      },
      {
        "label": "Memory",
        "value": "1 x SODIMM DDR4 3200 MHz, max 32 GB"
      },
      {
        "label": "Graphics",
        "value": "Intel UHD Graphics"
      },
      {
        "label": "HDMI",
        "value": "2 x HDMI1.4, max 4K 60 Hz"
      },
      {
        "label": "DP",
        "value": "1 x DP1.4, max 4K 60 Hz"
      },
      {
        "label": "SATA",
        "value": "1 x SATA3.0 6 Gb/s"
      },
      {
        "label": "Storage - M.2 SSD",
        "value": "1 x M.2 SSD 2280 (NGFF/PCIe x2 auto-switching)"
      },
      {
        "label": "Network",
        "value": "2 x Intel I226-V (LAN1 can be changed to 2 x USB)"
      },
      {
        "label": "USB",
        "value": "2 x USB2.0; 2 x USB3.0; 1 x USB3.2 Gen1 next to the heatsink fins; 1 x USB Type-C 3.0 (no touch function)"
      },
      {
        "label": "Serial",
        "value": "2 x COM RS232 (both support RS485 via jumper settings)"
      },
      {
        "label": "Audio",
        "value": "Realtek ALC897 7.1-channel HDA codec"
      },
      {
        "label": "M.2 Key-E",
        "value": "M.2 Wi-Fi Key-E 2230 socket, PCIe protocol, supports CNVi"
      },
      {
        "label": "Mini PCIe",
        "value": "Supports USB Wi-Fi/4G via USB protocol; optional PCIe protocol shared with M.2 Wi-Fi"
      },
      {
        "label": "SIM",
        "value": "1 x Mini SIM, compatible with Nano SIM"
      },
      {
        "label": "Watchdog",
        "value": "Watchdog timer"
      },
      {
        "label": "Fan",
        "value": "4-pin 5 V CPU fan monitoring and intelligent control"
      },
      {
        "label": "AT-ATX",
        "value": "AT_ATX(1-2) AUTO POWER ON; AT_ATX(2-3) NORMAL"
      },
      {
        "label": "DC input",
        "value": "DC 12 V, 5.5 x 2.5 mm DC jack"
      },
      {
        "label": "Environment - Operating",
        "value": "0~60 C / 5~95% RH, non-condensing"
      },
      {
        "label": "Environment - Storage",
        "value": "-40~80 C / 5~95% RH, non-condensing"
      },
      {
        "label": "Dimensions",
        "value": "PCB Size: 120 x 120 mm; Product Size: 148 x 125 x 56 mm"
      }
    ],
    "series": "B",
    "operatingRange": "0°C to 60°C",
    "sourceBrochure": "public/assets/工控机IPC/B系列/MCIPCB1F Brochure.pdf",
    "sourceSha256": "0edeeaa666b449784764bebccbf7aaca39434b98e8d3e393d747265ddba6610e"
  },
  {
    "id": "mcipcb6",
    "name": "MCIPCB6",
    "tagline": "4th / 5th Gen Intel Core compact industrial PC",
    "description": "MCIPCB6 combines 4th / 5th Gen Intel Core processing, up to 16GB DDR3L, and dual gigabit lan for industrial computing and connected equipment. Model-specific serial, display, storage, and expansion options are detailed below; optional interfaces depend on the selected configuration.",
    "image": "/assets/products/industrial/brochure/mcipcb6/main.webp",
    "galleryImages": [
      "/assets/products/industrial/brochure/mcipcb6/view-1.webp",
      "/assets/products/industrial/brochure/mcipcb6/view-2.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/industrial/brochure/mcipcb6/view-1.webp",
        "title": "MCIPCB6 front panel"
      },
      {
        "image": "/assets/products/industrial/brochure/mcipcb6/view-2.webp",
        "title": "MCIPCB6 rear panel"
      }
    ],
    "highlights": [
      "4th / 5th Gen Intel Core",
      "Up to 16GB DDR3L",
      "Dual Gigabit LAN",
      "Dual serial interfaces"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCB6"
      },
      {
        "label": "CPU",
        "value": "Intel Haswell Core 4th/5th Generation CPU options"
      },
      {
        "label": "BIOS",
        "value": "AMI EFI BIOS; Auto Power On, PXE, WOL"
      },
      {
        "label": "Memory",
        "value": "1 x SODIMM DDR3L 1333/1600 MHz, max 16 GB"
      },
      {
        "label": "Graphics",
        "value": "Intel HD Graphics 5000"
      },
      {
        "label": "HDMI",
        "value": "1 x HDMI1.4, 4K 30 Hz"
      },
      {
        "label": "DP",
        "value": "1 x DP1.1, 4K 30 Hz"
      },
      {
        "label": "SATA",
        "value": "1 x SATA3.0 6 Gb/s"
      },
      {
        "label": "Storage - M.2 SSD",
        "value": "1 x M.2 Key-M; supports 2280 PCIe/SATA auto-switching SSD"
      },
      {
        "label": "Network",
        "value": "2 x Realtek RTL8111H Gigabit LAN (LAN2 and 2 x USB2.0 are mutually exclusive; LAN enabled by default)"
      },
      {
        "label": "USB",
        "value": "4 x USB3.0; 2 x USB2.0"
      },
      {
        "label": "Serial",
        "value": "2 x COM RS232 (jumper supports RS485); expandable COM3-COM4 via internal pin headers"
      },
      {
        "label": "Audio",
        "value": "Onboard ALC897 + NS4251 (SPK1 supports 3 W @ 4 ohm; 1.7 W @ 8 ohm max)"
      },
      {
        "label": "M.2 Key-E",
        "value": "Supports Wi-Fi + Bluetooth, 2230 mm"
      },
      {
        "label": "M.2 Key-B",
        "value": "Supports 4G/5G modules, 3042/3052 mm"
      },
      {
        "label": "SIM",
        "value": "1 x Micro SIM"
      },
      {
        "label": "GPIO",
        "value": "4 inputs and 4 outputs, HGPIO"
      },
      {
        "label": "VGA",
        "value": "1 x VGA pin header, 1080P 60 Hz"
      },
      {
        "label": "CLR-CMOS",
        "value": "1 x CLR-CMOS button"
      },
      {
        "label": "Fan",
        "value": "4-pin 5 V fan"
      },
      {
        "label": "Auto power on",
        "value": "1 x SWCH_ON OFF auto power-on switch"
      },
      {
        "label": "DC input",
        "value": "DC 12-19 V, 5.5 x 2.5 mm; onboard 1 x 2-pin Phoenix terminal"
      },
      {
        "label": "Environment - Operating",
        "value": "0~60 C / 5~95% RH, non-condensing"
      },
      {
        "label": "Environment - Storage",
        "value": "-15~75 C / 5~95% RH, non-condensing"
      },
      {
        "label": "Dimensions",
        "value": "PCB Size: 120 x 120 mm; Product Size: 148 x 126 x 56 mm"
      }
    ],
    "series": "B",
    "operatingRange": "0°C to 60°C",
    "sourceBrochure": "public/assets/工控机IPC/B系列/MCIPCB6 Brochure.pdf",
    "sourceSha256": "8edefbd8135b1e2156f419781672a48819e5cb43ebba463af034ae6e9b79a08e"
  },
  {
    "id": "mcipcb6-ddr3l",
    "name": "MCIPCB6-DDR3L",
    "tagline": "6th-8th Gen Intel Core compact industrial PC",
    "description": "MCIPCB6-DDR3L combines 6th-8th Gen Intel Core processing, up to 16GB DDR3L, and dual gigabit lan for industrial computing and connected equipment. Model-specific serial, display, storage, and expansion options are detailed below; optional interfaces depend on the selected configuration.",
    "image": "/assets/products/industrial/brochure/mcipcb6-ddr3l/main.webp",
    "galleryImages": [
      "/assets/products/industrial/brochure/mcipcb6-ddr3l/view-1.webp",
      "/assets/products/industrial/brochure/mcipcb6-ddr3l/view-2.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/industrial/brochure/mcipcb6-ddr3l/view-1.webp",
        "title": "MCIPCB6-DDR3L front panel"
      },
      {
        "image": "/assets/products/industrial/brochure/mcipcb6-ddr3l/view-2.webp",
        "title": "MCIPCB6-DDR3L rear panel"
      }
    ],
    "highlights": [
      "6th-8th Gen Intel Core",
      "Up to 16GB DDR3L",
      "Dual Gigabit LAN",
      "Dual serial interfaces"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCB6-DDR3L"
      },
      {
        "label": "CPU",
        "value": "Intel Skylake Core 6th/7th/8th Generation CPU options"
      },
      {
        "label": "BIOS",
        "value": "AMI EFI BIOS; Auto Power On, PXE, WOL"
      },
      {
        "label": "Memory",
        "value": "1 x SODIMM DDR3L 1600 MHz, max 16 GB"
      },
      {
        "label": "Graphics",
        "value": "Intel HD Graphics 520"
      },
      {
        "label": "HDMI",
        "value": "1 x HDMI1.4, 4K 30 Hz"
      },
      {
        "label": "DP",
        "value": "1 x DP1.2, 4K 60 Hz"
      },
      {
        "label": "SATA",
        "value": "1 x SATA3.0 6 Gb/s"
      },
      {
        "label": "Storage - M.2 SSD",
        "value": "1 x M.2 Key-M; supports 2280 PCIe/SATA auto-switching SSD"
      },
      {
        "label": "Network",
        "value": "2 x Realtek RTL8111H Gigabit LAN (LAN2 and 2 x USB2.0 are mutually exclusive; LAN enabled by default)"
      },
      {
        "label": "USB",
        "value": "4 x USB3.0; 2 x USB2.0"
      },
      {
        "label": "Serial",
        "value": "2 x COM RS232 (jumper supports RS485); expandable COM3-COM4 via internal pin headers"
      },
      {
        "label": "Audio",
        "value": "Onboard ALC897 + NS4251 (SPK1 supports 3 W @ 4 ohm; 1.7 W @ 8 ohm max)"
      },
      {
        "label": "M.2 Key-E",
        "value": "Supports Wi-Fi + Bluetooth, 2230 mm"
      },
      {
        "label": "M.2 Key-B",
        "value": "Supports 4G/5G modules, 3042/3052 mm"
      },
      {
        "label": "SIM",
        "value": "1 x Micro SIM"
      },
      {
        "label": "GPIO",
        "value": "4 inputs and 4 outputs, HGPIO"
      },
      {
        "label": "VGA",
        "value": "1 x VGA pin header, 1080P 60 Hz"
      },
      {
        "label": "CLR-CMOS",
        "value": "1 x CLR-CMOS button"
      },
      {
        "label": "Fan",
        "value": "4-pin 5 V fan"
      },
      {
        "label": "Auto power on",
        "value": "1 x SWCH_ON OFF auto power-on switch"
      },
      {
        "label": "DC input",
        "value": "DC 12-19 V, 5.5 x 2.5 mm; onboard 1 x 2-pin power connector"
      },
      {
        "label": "Environment - Operating",
        "value": "0~60 C / 5~95% RH, non-condensing"
      },
      {
        "label": "Environment - Storage",
        "value": "-15~75 C / 5~95% RH, non-condensing"
      },
      {
        "label": "Dimensions",
        "value": "PCB Size: 120 x 120 mm; Product Size: 148 x 126 x 56 mm"
      }
    ],
    "series": "B",
    "operatingRange": "0°C to 60°C",
    "sourceBrochure": "public/assets/工控机IPC/B系列/MCIPCB6-DDR3L Brochure.pdf",
    "sourceSha256": "e82078eba54256057d7c987f024f39ffb12b57760967a09bb33a5cf3cf41093d"
  },
  {
    "id": "mcipcb6-ddr4",
    "name": "MCIPCB6-DDR4",
    "tagline": "6th-8th Gen Intel Core compact industrial PC",
    "description": "MCIPCB6-DDR4 combines 6th-8th Gen Intel Core processing, up to 32GB DDR4, and dual gigabit lan for industrial computing and connected equipment. Model-specific serial, display, storage, and expansion options are detailed below; optional interfaces depend on the selected configuration.",
    "image": "/assets/products/industrial/brochure/mcipcb6-ddr4/main.webp",
    "galleryImages": [
      "/assets/products/industrial/brochure/mcipcb6-ddr4/view-1.webp",
      "/assets/products/industrial/brochure/mcipcb6-ddr4/view-2.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/industrial/brochure/mcipcb6-ddr4/view-1.webp",
        "title": "MCIPCB6-DDR4 front panel"
      },
      {
        "image": "/assets/products/industrial/brochure/mcipcb6-ddr4/view-2.webp",
        "title": "MCIPCB6-DDR4 rear panel"
      }
    ],
    "highlights": [
      "6th-8th Gen Intel Core",
      "Up to 32GB DDR4",
      "Dual Gigabit LAN",
      "Dual serial interfaces"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCB6-DDR4"
      },
      {
        "label": "CPU",
        "value": "Intel Skylake Core 6th/7th/8th Generation CPU options"
      },
      {
        "label": "BIOS",
        "value": "AMI EFI BIOS; Auto Power On, PXE, WOL"
      },
      {
        "label": "Memory",
        "value": "1 x SODIMM DDR4, max 32 GB"
      },
      {
        "label": "Graphics",
        "value": "Intel HD Graphics 520"
      },
      {
        "label": "HDMI",
        "value": "1 x HDMI1.4, 4K 30 Hz"
      },
      {
        "label": "DP",
        "value": "1 x DP1.2, 4K 60 Hz"
      },
      {
        "label": "SATA",
        "value": "1 x SATA3.0 6 Gb/s"
      },
      {
        "label": "Storage - M.2 SSD",
        "value": "1 x M.2 Key-M; supports 2280 PCIe/SATA auto-switching SSD"
      },
      {
        "label": "Network",
        "value": "2 x Realtek RTL8111H Gigabit LAN (LAN2 and 2 x USB2.0 are mutually exclusive; LAN enabled by default)"
      },
      {
        "label": "USB",
        "value": "4 x USB3.0; 2 x USB2.0"
      },
      {
        "label": "Serial",
        "value": "2 x COM RS232 (jumper supports RS485); expandable COM3-COM4 via internal pin headers"
      },
      {
        "label": "Audio",
        "value": "Onboard ALC897 + NS4251 (SPK1 supports 3 W @ 4 ohm; 1.7 W @ 8 ohm max)"
      },
      {
        "label": "M.2 Key-E",
        "value": "Supports Wi-Fi + Bluetooth, 2230 mm"
      },
      {
        "label": "M.2 Key-B",
        "value": "Supports 4G/5G modules, 3042/3052 mm"
      },
      {
        "label": "SIM",
        "value": "1 x Micro SIM"
      },
      {
        "label": "GPIO",
        "value": "4 inputs and 4 outputs, HGPIO"
      },
      {
        "label": "VGA",
        "value": "1 x VGA pin header, 1080P 60 Hz"
      },
      {
        "label": "CLR-CMOS",
        "value": "1 x CLR-CMOS button"
      },
      {
        "label": "Fan",
        "value": "4-pin 5 V fan"
      },
      {
        "label": "Auto power on",
        "value": "1 x SWCH_ON OFF auto power-on switch"
      },
      {
        "label": "DC input",
        "value": "DC 12-19 V, 5.5 x 2.5 mm; onboard 1 x 2-pin power connector"
      },
      {
        "label": "Environment - Operating",
        "value": "0~60 C / 5~95% RH, non-condensing"
      },
      {
        "label": "Environment - Storage",
        "value": "-15~75 C / 5~95% RH, non-condensing"
      },
      {
        "label": "Dimensions",
        "value": "PCB Size: 120 x 120 mm; Product Size: 148 x 126 x 56 mm"
      }
    ],
    "series": "B",
    "operatingRange": "0°C to 60°C",
    "sourceBrochure": "public/assets/工控机IPC/B系列/MCIPCB6-DDR4 Brochure.pdf",
    "sourceSha256": "cd8519bf5704acecfac4b6db73df105feb4d4a3fba254039bed21f885c6bac18"
  },
  {
    "id": "mcipcb14",
    "name": "MCIPCB14",
    "tagline": "Intel N100 / i3-N305 compact industrial PC",
    "description": "MCIPCB14 combines Intel N100 / i3-N305 processing, up to 32GB DDR5, and dual lan for industrial computing and connected equipment. Model-specific serial, display, storage, and expansion options are detailed below; optional interfaces depend on the selected configuration.",
    "image": "/assets/products/industrial/brochure/mcipcb14/main.webp",
    "galleryImages": [
      "/assets/products/industrial/brochure/mcipcb14/view-1.webp",
      "/assets/products/industrial/brochure/mcipcb14/view-2.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/industrial/brochure/mcipcb14/view-1.webp",
        "title": "MCIPCB14 front panel"
      },
      {
        "image": "/assets/products/industrial/brochure/mcipcb14/view-2.webp",
        "title": "MCIPCB14 rear panel"
      }
    ],
    "highlights": [
      "Intel N100 / i3-N305",
      "Up to 32GB DDR5",
      "Dual LAN",
      "Dual serial interfaces"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCB14"
      },
      {
        "label": "CPU",
        "value": "Intel Alder Lake-N N100 / i3-N305"
      },
      {
        "label": "BIOS",
        "value": "AMI 128M BIOS (Winbond 25Q128JVSQ); Auto Power On, PXE, WOL"
      },
      {
        "label": "Memory",
        "value": "1 x SODIMM DDR5 4800 MHz, max 32 GB"
      },
      {
        "label": "Graphics",
        "value": "Intel UHD Graphics"
      },
      {
        "label": "HDMI",
        "value": "1 x HDMI2.0, max 4K 60 Hz"
      },
      {
        "label": "DP",
        "value": "1 x DP1.4, max 4K 60 Hz"
      },
      {
        "label": "VGA",
        "value": "1 x VGA, max 1080P 60 Hz (optional DP/HDMI, RTD2166 solution)"
      },
      {
        "label": "USB Type-C",
        "value": "1 x USB Type-C, max 4K 60 Hz"
      },
      {
        "label": "SATA",
        "value": "1 x SATA3.0 6 Gb/s"
      },
      {
        "label": "Storage - M.2 SSD",
        "value": "1 x M.2 SSD 2280 (NGFF/PCIe auto-switching)"
      },
      {
        "label": "Network",
        "value": "2 x RTL8111H (LAN1 can be changed to a pin header; LAN2 can be changed to 2 x USB, FE1 solution)"
      },
      {
        "label": "USB",
        "value": "External: 3 x USB2.0 (2 can be changed to pin headers); 2 x USB3.2 Gen2; 1 x USB Type-C 3.2 Gen2"
      },
      {
        "label": "Serial",
        "value": "2 x COM RS232 (both support RS485)"
      },
      {
        "label": "Audio",
        "value": "Realtek ALC897 7.1-channel HDA codec"
      },
      {
        "label": "M.2 Key-E",
        "value": "M.2 Wi-Fi Key-E 2230 socket, PCIe protocol, supports CNVi"
      },
      {
        "label": "M.2 Key-B",
        "value": "M.2 5G Key-B 3052 socket, USB protocol"
      },
      {
        "label": "Mini PCIe",
        "value": "Supports Wi-Fi/4G, PCIe protocol"
      },
      {
        "label": "SIM",
        "value": "1 x Nano SIM"
      },
      {
        "label": "GPIO",
        "value": "Supports 8 GPIO channels"
      },
      {
        "label": "Watchdog",
        "value": "4~255-second watchdog timer"
      },
      {
        "label": "Fan",
        "value": "4-pin 12 V system fan monitoring and intelligent control"
      },
      {
        "label": "JP1",
        "value": "JP1(1-2) AUTO POWER ON; JP1(2-3) NORMAL"
      },
      {
        "label": "TPM",
        "value": "TPM2.0 hardware encryption (optional)"
      },
      {
        "label": "DC input",
        "value": "DC 12 V"
      },
      {
        "label": "Environment - Operating",
        "value": "-20~60 C / 0~90% RH, non-condensing"
      },
      {
        "label": "Environment - Storage",
        "value": "-20~60 C / 0~90% RH, non-condensing"
      },
      {
        "label": "Dimensions",
        "value": "PCB Size: 120 x 120 mm; Product Size: 148 x 125 x 56 mm"
      }
    ],
    "series": "B",
    "operatingRange": "-20°C to 60°C",
    "sourceBrochure": "public/assets/工控机IPC/B系列/MCIPCB14 Brochure.pdf",
    "sourceSha256": "9a6fc9a0ba416b19e90cbdcca0d95d0c6a5b4f8dc80e77f4cea7ccceba0c13c8"
  },
  {
    "id": "mcipcb14f",
    "name": "MCIPCB14F",
    "tagline": "Intel N100 / i3-N305 compact industrial PC",
    "description": "MCIPCB14F combines Intel N100 / i3-N305 processing, up to 32GB DDR5, and dual lan for industrial computing and connected equipment. Model-specific serial, display, storage, and expansion options are detailed below; optional interfaces depend on the selected configuration.",
    "image": "/assets/products/industrial/brochure/mcipcb14f/main.webp",
    "galleryImages": [
      "/assets/products/industrial/brochure/mcipcb14f/view-1.webp",
      "/assets/products/industrial/brochure/mcipcb14f/view-2.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/industrial/brochure/mcipcb14f/view-1.webp",
        "title": "MCIPCB14F front panel"
      },
      {
        "image": "/assets/products/industrial/brochure/mcipcb14f/view-2.webp",
        "title": "MCIPCB14F rear panel"
      }
    ],
    "highlights": [
      "Intel N100 / i3-N305",
      "Up to 32GB DDR5",
      "Dual LAN",
      "Dual serial interfaces"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCB14F"
      },
      {
        "label": "CPU",
        "value": "Intel Alder Lake-N N100 / i3-N305"
      },
      {
        "label": "BIOS",
        "value": "AMI 128M BIOS (Winbond 25Q128JVSQ); Auto Power On, PXE, WOL"
      },
      {
        "label": "Memory",
        "value": "1 x SODIMM DDR5 4800 MHz, max 32 GB"
      },
      {
        "label": "Graphics",
        "value": "Intel UHD Graphics"
      },
      {
        "label": "HDMI",
        "value": "1 x HDMI2.0, max 4K 60 Hz"
      },
      {
        "label": "DP",
        "value": "1 x DP1.4, max 4K 60 Hz"
      },
      {
        "label": "VGA",
        "value": "1 x VGA, max 1080P 60 Hz (optional DP/HDMI, RTD2166 solution)"
      },
      {
        "label": "USB Type-C",
        "value": "1 x USB Type-C, max 4K 60 Hz"
      },
      {
        "label": "SATA",
        "value": "1 x SATA3.0 6 Gb/s"
      },
      {
        "label": "Storage - M.2 SSD",
        "value": "1 x M.2 SSD 2280 (NGFF/PCIe auto-switching)"
      },
      {
        "label": "Network",
        "value": "2 x RTL8111H (LAN1 can be changed to a pin header; LAN2 can be changed to 2 x USB, FE1 solution)"
      },
      {
        "label": "USB",
        "value": "External: 3 x USB2.0 (2 can be changed to pin headers); 2 x USB3.2 Gen2; 1 x USB Type-C 3.2 Gen2"
      },
      {
        "label": "Serial",
        "value": "2 x COM RS232 (both support RS485)"
      },
      {
        "label": "Audio",
        "value": "Realtek ALC897 7.1-channel HDA codec"
      },
      {
        "label": "M.2 Key-E",
        "value": "M.2 Wi-Fi Key-E 2230 socket, PCIe protocol, supports CNVi"
      },
      {
        "label": "M.2 Key-B",
        "value": "M.2 5G Key-B 3052 socket, USB protocol"
      },
      {
        "label": "Mini PCIe",
        "value": "Supports Wi-Fi/4G, PCIe protocol"
      },
      {
        "label": "SIM",
        "value": "1 x Nano SIM"
      },
      {
        "label": "GPIO",
        "value": "Supports 8 GPIO channels"
      },
      {
        "label": "Watchdog",
        "value": "4~255-second watchdog timer"
      },
      {
        "label": "Fan",
        "value": "4-pin 12 V system fan monitoring and intelligent control"
      },
      {
        "label": "JP1",
        "value": "JP1(1-2) AUTO POWER ON; JP1(2-3) NORMAL"
      },
      {
        "label": "TPM",
        "value": "TPM2.0 hardware encryption (optional)"
      },
      {
        "label": "DC input",
        "value": "DC 12 V"
      },
      {
        "label": "Environment - Operating",
        "value": "-20~60 C / 0~90% RH, non-condensing"
      },
      {
        "label": "Environment - Storage",
        "value": "-20~60 C / 0~90% RH, non-condensing"
      },
      {
        "label": "Dimensions",
        "value": "PCB Size: 120 x 120 mm; Product Size: 148 x 125 x 56 mm"
      }
    ],
    "series": "B",
    "operatingRange": "-20°C to 60°C",
    "sourceBrochure": "public/assets/工控机IPC/B系列/MCIPCB14F Brochure.pdf",
    "sourceSha256": "5fb17b9aa3b9d40d1efacd9dbd6ccc587cf900e7c7cfc3c62c7f7ed80b8db7a0"
  },
  {
    "id": "mcipcb15a",
    "name": "MCIPCB15A",
    "tagline": "Intel Celeron N5095 compact industrial PC",
    "description": "MCIPCB15A combines Intel Celeron N5095 processing, up to 32GB DDR4, and dual gigabit lan for industrial computing and connected equipment. Model-specific serial, display, storage, and expansion options are detailed below; optional interfaces depend on the selected configuration.",
    "image": "/assets/products/industrial/brochure/mcipcb15a/main.webp",
    "galleryImages": [
      "/assets/products/industrial/brochure/mcipcb15a/view-1.webp",
      "/assets/products/industrial/brochure/mcipcb15a/view-2.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/industrial/brochure/mcipcb15a/view-1.webp",
        "title": "MCIPCB15A front panel"
      },
      {
        "image": "/assets/products/industrial/brochure/mcipcb15a/view-2.webp",
        "title": "MCIPCB15A rear panel"
      }
    ],
    "highlights": [
      "Intel Celeron N5095",
      "Up to 32GB DDR4",
      "Dual Gigabit LAN",
      "Dual serial interfaces"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCB15A"
      },
      {
        "label": "CPU",
        "value": "Intel Celeron N5095"
      },
      {
        "label": "BIOS",
        "value": "AMI 64M BIOS; Auto Power On, PXE, WOL"
      },
      {
        "label": "Memory",
        "value": "1 x SODIMM DDR4 2933 MHz, max 32 GB"
      },
      {
        "label": "Graphics",
        "value": "Intel UHD Graphics 600"
      },
      {
        "label": "HDMI",
        "value": "1 x HDMI2.0, max 4K 60 Hz"
      },
      {
        "label": "VGA / DP",
        "value": "1 x VGA, max 1080P 60 Hz, or 1 x DP, max 4K 60 Hz (mutually exclusive; VGA by default)"
      },
      {
        "label": "SATA",
        "value": "1 x SATA3.0 6 Gb/s"
      },
      {
        "label": "Storage - M.2 SSD",
        "value": "1 x M.2 Key-M 2280 (PCIe/SATA auto-switching)"
      },
      {
        "label": "Network",
        "value": "2 x Realtek RTL8111H Gigabit LAN (LAN2 can be changed to 2 x USB2.0)"
      },
      {
        "label": "USB",
        "value": "External: 2 x USB2.0; 4 x USB3.0"
      },
      {
        "label": "Serial",
        "value": "2 x COM RS232 (RS485 selectable via jumper)"
      },
      {
        "label": "Audio",
        "value": "Realtek ALC897 7.1-channel HDA codec"
      },
      {
        "label": "Mini PCIe",
        "value": "Supports Wi-Fi/4G, PCIe protocol"
      },
      {
        "label": "TPM",
        "value": "1 x TPM2.0 2 x 6-pin header"
      },
      {
        "label": "SIM",
        "value": "1 x Nano SIM"
      },
      {
        "label": "GPIO",
        "value": "Supports 8 GPIO channels"
      },
      {
        "label": "Watchdog",
        "value": "Watchdog timer with hardware reset support"
      },
      {
        "label": "Auto power",
        "value": "Supported by motherboard jumper and BIOS setting (jumper has priority)"
      },
      {
        "label": "DC input",
        "value": "DC 12 V, 5.5 x 2.5 mm jack"
      },
      {
        "label": "Environment - Operating",
        "value": "-10~60 C / 5~95% RH, non-condensing"
      },
      {
        "label": "Environment - Storage",
        "value": "-20~70 C / 5~95% RH, non-condensing"
      },
      {
        "label": "Dimensions",
        "value": "PCB Size: 120 x 120 mm; Product Size: 148 x 126 x 56 mm"
      }
    ],
    "series": "B",
    "operatingRange": "-10°C to 60°C",
    "sourceBrochure": "public/assets/工控机IPC/B系列/MCIPCB15A Brochure.pdf",
    "sourceSha256": "db8249fcce882e3503231506de346e415f4c5541d18bcee30334cb23c05cd4f3"
  },
  {
    "id": "mcipcb15b",
    "name": "MCIPCB15B",
    "tagline": "Intel Celeron J6412 compact industrial PC",
    "description": "MCIPCB15B combines Intel Celeron J6412 processing, up to 32GB DDR4, and dual gigabit lan for industrial computing and connected equipment. Model-specific serial, display, storage, and expansion options are detailed below; optional interfaces depend on the selected configuration.",
    "image": "/assets/products/industrial/brochure/mcipcb15b/main.webp",
    "galleryImages": [
      "/assets/products/industrial/brochure/mcipcb15b/view-1.webp",
      "/assets/products/industrial/brochure/mcipcb15b/view-2.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/industrial/brochure/mcipcb15b/view-1.webp",
        "title": "MCIPCB15B front panel"
      },
      {
        "image": "/assets/products/industrial/brochure/mcipcb15b/view-2.webp",
        "title": "MCIPCB15B rear panel"
      }
    ],
    "highlights": [
      "Intel Celeron J6412",
      "Up to 32GB DDR4",
      "Dual Gigabit LAN",
      "Dual serial interfaces"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCB15B"
      },
      {
        "label": "CPU",
        "value": "Intel Celeron J6412, 2.0 GHz"
      },
      {
        "label": "BIOS",
        "value": "128 Mb Flash ROM; Auto Power On, PXE, WOL"
      },
      {
        "label": "Memory",
        "value": "1 x SODIMM DDR4 3200 MHz, max 32 GB"
      },
      {
        "label": "Graphics",
        "value": "Intel UHD Graphics"
      },
      {
        "label": "HDMI",
        "value": "1 x HDMI2.0, max 4K 60 Hz"
      },
      {
        "label": "VGA",
        "value": "1 x VGA, max 1080P 60 Hz"
      },
      {
        "label": "SATA",
        "value": "1 x SATA3.0 6 Gb/s"
      },
      {
        "label": "Storage - M.2 SSD",
        "value": "1 x M.2 Key-M 2280 (PCIe/SATA auto-switching)"
      },
      {
        "label": "Network",
        "value": "2 x RTL8111H Gigabit LAN"
      },
      {
        "label": "USB",
        "value": "External: 2 x USB2.0; 4 x USB3.1"
      },
      {
        "label": "Serial",
        "value": "2 x COM RS232 (RS485 selectable via jumper)"
      },
      {
        "label": "Audio",
        "value": "Realtek ALC897 7.1-channel HD audio; supports MIC/Line-out"
      },
      {
        "label": "Mini PCIe",
        "value": "Supports Wi-Fi/4G, PCIe protocol"
      },
      {
        "label": "SIM",
        "value": "1 x Nano SIM"
      },
      {
        "label": "Internal I/O - USB",
        "value": "1 x USB2.0 4-pin header; 1 x USB2.0 2 x 5-pin header"
      },
      {
        "label": "Watchdog",
        "value": "256-level watchdog with hardware reset support, 0~255 seconds"
      },
      {
        "label": "Auto power",
        "value": "AX-ATX(1-2) NORMAL; AX-ATX(2-3) AUTO POWER ON"
      },
      {
        "label": "DC input",
        "value": "DC 12 V, 5.5 x 2.5 mm jack"
      },
      {
        "label": "Environment - Operating",
        "value": "-10~60 C / 5~95% RH, non-condensing"
      },
      {
        "label": "Environment - Storage",
        "value": "-20~70 C / 5~95% RH, non-condensing"
      },
      {
        "label": "Dimensions",
        "value": "PCB Size: 120 x 120 mm; Product Size: 148 x 125 x 56 mm"
      }
    ],
    "series": "B",
    "operatingRange": "-10°C to 60°C",
    "sourceBrochure": "public/assets/工控机IPC/B系列/MCIPCB15B Brochure.pdf",
    "sourceSha256": "e19e06311639f721c6763bbb67d9f3ef281aa92ed5d62a9cf6cbe5bf3dbc9deb"
  },
  {
    "id": "mcipcb15c",
    "name": "MCIPCB15C",
    "tagline": "4th / 5th Gen Intel Core compact industrial PC",
    "description": "MCIPCB15C combines 4th / 5th Gen Intel Core processing, up to 8GB DDR3L, and dual gigabit lan for industrial computing and connected equipment. Model-specific serial, display, storage, and expansion options are detailed below; optional interfaces depend on the selected configuration.",
    "image": "/assets/products/industrial/brochure/mcipcb15c/main.webp",
    "galleryImages": [
      "/assets/products/industrial/brochure/mcipcb15c/view-1.webp",
      "/assets/products/industrial/brochure/mcipcb15c/view-2.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/industrial/brochure/mcipcb15c/view-1.webp",
        "title": "MCIPCB15C front panel"
      },
      {
        "image": "/assets/products/industrial/brochure/mcipcb15c/view-2.webp",
        "title": "MCIPCB15C rear panel"
      }
    ],
    "highlights": [
      "4th / 5th Gen Intel Core",
      "Up to 8GB DDR3L",
      "Dual Gigabit LAN",
      "Dual serial interfaces"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCB15C"
      },
      {
        "label": "CPU",
        "value": "Intel Core i3/i5/i7, 4th/5th Gen"
      },
      {
        "label": "BIOS",
        "value": "AMI 64M BIOS; Auto Power On, PXE, WOL"
      },
      {
        "label": "Memory",
        "value": "1 x SODIMM DDR3L 1333 MHz, max 8 GB"
      },
      {
        "label": "Graphics",
        "value": "Intel HD Graphics 4400"
      },
      {
        "label": "HDMI",
        "value": "1 x HDMI1.4, max 2K 60 Hz (4K 30 Hz)"
      },
      {
        "label": "VGA",
        "value": "1 x VGA, max 1080P 60 Hz"
      },
      {
        "label": "SATA",
        "value": "1 x SATA3.0 6 Gb/s"
      },
      {
        "label": "mSATA",
        "value": "1 x mSATA3.0"
      },
      {
        "label": "Network",
        "value": "2 x Realtek RTL8111H Gigabit LAN (LAN2 can be changed to 2 x USB2.0)"
      },
      {
        "label": "USB",
        "value": "External: 2 x USB2.0; 4 x USB3.0"
      },
      {
        "label": "Serial",
        "value": "2 x COM RS232 (RS485 selectable via jumper)"
      },
      {
        "label": "Audio",
        "value": "Realtek ALC897 7.1-channel HDA codec"
      },
      {
        "label": "Mini PCIe",
        "value": "Supports Wi-Fi/4G, PCIe protocol"
      },
      {
        "label": "SIM",
        "value": "1 x Nano SIM"
      },
      {
        "label": "GPIO",
        "value": "Supports 8 GPIO channels"
      },
      {
        "label": "Watchdog",
        "value": "256-level watchdog with hardware reset support, 0~255 seconds"
      },
      {
        "label": "Auto power",
        "value": "AX-ATX(1-2) NORMAL; AX-ATX(2-3) AUTO POWER ON"
      },
      {
        "label": "DC input",
        "value": "DC 12 V, 5.5 x 2.5 mm jack"
      },
      {
        "label": "Environment - Operating",
        "value": "-20~60 C / 5~95% RH, non-condensing"
      },
      {
        "label": "Environment - Storage",
        "value": "-20~70 C / 5~95% RH, non-condensing"
      },
      {
        "label": "Dimensions",
        "value": "PCB Size: 120 x 120 mm; Product Size: 148 x 125 x 56 mm"
      }
    ],
    "series": "B",
    "operatingRange": "-20°C to 60°C",
    "sourceBrochure": "public/assets/工控机IPC/B系列/MCIPCB15C Brochure.pdf",
    "sourceSha256": "e07bd6a791dce3ae3df78d1f8adab55dbe0231b76d689e39bf3107fb192c7bd6"
  },
  {
    "id": "mcipcb15d",
    "name": "MCIPCB15D",
    "tagline": "6th-8th Gen Intel Core compact industrial PC",
    "description": "MCIPCB15D combines 6th-8th Gen Intel Core processing, up to 32GB DDR4, and dual gigabit lan for industrial computing and connected equipment. Model-specific serial, display, storage, and expansion options are detailed below; optional interfaces depend on the selected configuration.",
    "image": "/assets/products/industrial/brochure/mcipcb15d/main.webp",
    "galleryImages": [
      "/assets/products/industrial/brochure/mcipcb15d/view-1.webp",
      "/assets/products/industrial/brochure/mcipcb15d/view-2.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/industrial/brochure/mcipcb15d/view-1.webp",
        "title": "MCIPCB15D front panel"
      },
      {
        "image": "/assets/products/industrial/brochure/mcipcb15d/view-2.webp",
        "title": "MCIPCB15D rear panel"
      }
    ],
    "highlights": [
      "6th-8th Gen Intel Core",
      "Up to 32GB DDR4",
      "Dual Gigabit LAN",
      "Dual serial interfaces"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCB15D"
      },
      {
        "label": "CPU",
        "value": "Intel Core, 6th/7th/8th Gen"
      },
      {
        "label": "BIOS",
        "value": "AMI EFI BIOS; Auto Power On, PXE, WOL"
      },
      {
        "label": "Memory",
        "value": "1 x SODIMM DDR4 2133 MHz, max 32 GB"
      },
      {
        "label": "Graphics",
        "value": "Intel HD Graphics"
      },
      {
        "label": "HDMI",
        "value": "1 x HDMI1.4, max 4K 30 Hz (2K 60 Hz)"
      },
      {
        "label": "VGA / DP",
        "value": "1 x VGA, max 1080P 60 Hz / DP, max 4K 60 Hz"
      },
      {
        "label": "SATA",
        "value": "1 x SATA3.0 6 Gb/s"
      },
      {
        "label": "Storage - M.2 SSD",
        "value": "1 x M.2 Key-M 2280 (PCIe/SATA auto-switching)"
      },
      {
        "label": "Network",
        "value": "2 x Realtek RTL8111H Gigabit LAN"
      },
      {
        "label": "USB",
        "value": "External: 2 x USB2.0; 4 x USB3.0"
      },
      {
        "label": "Serial",
        "value": "2 x COM RS232 (RS485 selectable via jumper); expandable COM3/COM4 2.0 mm pin headers"
      },
      {
        "label": "Audio",
        "value": "Realtek ALC897 7.1-channel HDA codec"
      },
      {
        "label": "Mini PCIe",
        "value": "Supports Wi-Fi/4G, PCIe protocol"
      },
      {
        "label": "SIM",
        "value": "1 x Nano SIM"
      },
      {
        "label": "GPIO",
        "value": "1 x 2 x 5-pin GPIO header, 2.0 mm pitch"
      },
      {
        "label": "TPM",
        "value": "1 x TPM2.0 2 x 7-pin header"
      },
      {
        "label": "Auto power",
        "value": "AX-ATX(1-2) NORMAL; AX-ATX(2-3) AUTO POWER ON"
      },
      {
        "label": "DC input",
        "value": "DC 12 V, 5.5 x 2.5 mm jack"
      },
      {
        "label": "Environment - Operating",
        "value": "-10~60 C / 5~95% RH, non-condensing"
      },
      {
        "label": "Environment - Storage",
        "value": "-20~70 C / 5~95% RH, non-condensing"
      },
      {
        "label": "Dimensions",
        "value": "PCB Size: 120 x 120 mm; Product Size: 148 x 125 x 56 mm"
      }
    ],
    "series": "B",
    "operatingRange": "-10°C to 60°C",
    "sourceBrochure": "public/assets/工控机IPC/B系列/MCIPCB15D Brochure.pdf",
    "sourceSha256": "a22794fabb4d1ccd32d014ed31b95402020dd92efe88807f47c0489788ce7dd4"
  },
  {
    "id": "mcipcb15e",
    "name": "MCIPCB15E",
    "tagline": "12th Gen Intel Core compact industrial PC",
    "description": "MCIPCB15E combines 12th Gen Intel Core processing, up to 32GB DDR4, and dual gigabit lan for industrial computing and connected equipment. Model-specific serial, display, storage, and expansion options are detailed below; optional interfaces depend on the selected configuration.",
    "image": "/assets/products/industrial/brochure/mcipcb15e/main.webp",
    "galleryImages": [
      "/assets/products/industrial/brochure/mcipcb15e/view-1.webp",
      "/assets/products/industrial/brochure/mcipcb15e/view-2.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/industrial/brochure/mcipcb15e/view-1.webp",
        "title": "MCIPCB15E front panel"
      },
      {
        "image": "/assets/products/industrial/brochure/mcipcb15e/view-2.webp",
        "title": "MCIPCB15E rear panel"
      }
    ],
    "highlights": [
      "12th Gen Intel Core",
      "Up to 32GB DDR4",
      "Dual Gigabit LAN",
      "Dual serial interfaces"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCB15E"
      },
      {
        "label": "CPU",
        "value": "Intel Alder Lake-U/P/H 12th Gen Core i3/i5/i7"
      },
      {
        "label": "BIOS",
        "value": "AMI EFI BIOS; Auto Power On, PXE, WOL"
      },
      {
        "label": "Memory",
        "value": "1 x SODIMM DDR4 3200 MHz, max 32 GB"
      },
      {
        "label": "Graphics",
        "value": "Intel UHD Graphics"
      },
      {
        "label": "HDMI",
        "value": "1 x HDMI2.0, max 4K 60 Hz"
      },
      {
        "label": "VGA",
        "value": "1 x VGA, max 1080P 60 Hz"
      },
      {
        "label": "SATA",
        "value": "1 x SATA3.0 6 Gb/s"
      },
      {
        "label": "Storage - M.2 SSD",
        "value": "1 x M.2 Key-M 2280 (PCIe/SATA auto-switching)"
      },
      {
        "label": "Network",
        "value": "2 x Realtek RTL8111H Gigabit LAN"
      },
      {
        "label": "USB",
        "value": "External: 2 x USB2.0; 4 x USB3.2 Gen1"
      },
      {
        "label": "Serial",
        "value": "2 x COM RS232 (RS485 selectable via jumper)"
      },
      {
        "label": "Audio",
        "value": "Realtek ALC897 7.1-channel HD audio; supports MIC/Line-out"
      },
      {
        "label": "Mini PCIe",
        "value": "Supports Wi-Fi/4G, PCIe protocol"
      },
      {
        "label": "SIM",
        "value": "1 x Nano SIM"
      },
      {
        "label": "GPIO",
        "value": "Supports 8 GPIO channels"
      },
      {
        "label": "Internal I/O - USB",
        "value": "1 x USB2.0 4-pin header, expandable to 2 x USB2.0"
      },
      {
        "label": "Watchdog",
        "value": "Watchdog timer"
      },
      {
        "label": "Fan",
        "value": "4-pin 12 V CPU fan"
      },
      {
        "label": "TPM",
        "value": "1 x TPM2.0 2 x 6-pin header; onboard TPM footprint reserved"
      },
      {
        "label": "Auto power",
        "value": "AUTO ON(1-2) NORMAL; AUTO ON(2-3) AUTO POWER ON"
      },
      {
        "label": "DC input",
        "value": "DC 12-19 V, 5.5 x 2.5 mm jack; onboard ATX 1 x 4-pin power connector"
      },
      {
        "label": "Environment - Operating",
        "value": "-10~60 C / 0~95% RH, non-condensing"
      },
      {
        "label": "Environment - Storage",
        "value": "-20~70 C / 0~95% RH, non-condensing"
      },
      {
        "label": "Dimensions",
        "value": "PCB Size: 120 x 120 mm; Product Size: 148 x 125 x 56 mm"
      }
    ],
    "series": "B",
    "operatingRange": "-10°C to 60°C",
    "sourceBrochure": "public/assets/工控机IPC/B系列/MCIPCB15E Brochure.pdf",
    "sourceSha256": "68a639f79061007325a9ccd252e738a317f49eb557bdd56a200097d82117e6eb"
  },
  {
    "id": "mcipcb16a",
    "name": "MCIPCB16A",
    "tagline": "Intel J1900 / N2840 compact industrial PC",
    "description": "MCIPCB16A combines Intel J1900 / N2840 processing, up to 8GB DDR3L, and dual gigabit lan for industrial computing and connected equipment. Model-specific serial, display, storage, and expansion options are detailed below; optional interfaces depend on the selected configuration.",
    "image": "/assets/products/industrial/brochure/mcipcb16a/main.webp",
    "galleryImages": [
      "/assets/products/industrial/brochure/mcipcb16a/view-1.webp",
      "/assets/products/industrial/brochure/mcipcb16a/view-2.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/industrial/brochure/mcipcb16a/view-1.webp",
        "title": "MCIPCB16A front panel"
      },
      {
        "image": "/assets/products/industrial/brochure/mcipcb16a/view-2.webp",
        "title": "MCIPCB16A rear panel"
      }
    ],
    "highlights": [
      "Intel J1900 / N2840",
      "Up to 8GB DDR3L",
      "Dual Gigabit LAN",
      "Dual serial interfaces"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCB16A"
      },
      {
        "label": "CPU",
        "value": "Intel Bay Trail Celeron J1900 / N2840"
      },
      {
        "label": "BIOS",
        "value": "AMI 64M BIOS (Winbond 25Q64JWSIQ); Auto Power On, PXE, WOL"
      },
      {
        "label": "Memory",
        "value": "1 x SODIMM DDR3L 1333 MHz, max 8 GB"
      },
      {
        "label": "Graphics",
        "value": "Intel HD Graphics"
      },
      {
        "label": "HDMI",
        "value": "1 x HDMI1.2, max 1080P 60 Hz"
      },
      {
        "label": "VGA",
        "value": "1 x VGA, max 1080P 60 Hz (optional HDMI)"
      },
      {
        "label": "SATA",
        "value": "1 x SATA2.0 3 Gb/s"
      },
      {
        "label": "mSATA",
        "value": "1 x mSATA2.0 3 Gb/s (optional Mini PCIe)"
      },
      {
        "label": "Network",
        "value": "2 x RTL8111H Gigabit LAN"
      },
      {
        "label": "USB",
        "value": "External: 5 x USB2.0 (can be changed to pin headers, FE1 solution); 1 x USB3.0; internal: 1 x USB2.0 shared with 4G"
      },
      {
        "label": "Serial",
        "value": "2 x COM RS232 (both support RS485, internal headers); expandable COM3/COM4 2.0 mm pin headers"
      },
      {
        "label": "Audio",
        "value": "Realtek ALC897 7.1-channel HDA codec"
      },
      {
        "label": "Mini PCIe",
        "value": "Supports Wi-Fi/4G, PCIe protocol"
      },
      {
        "label": "SIM",
        "value": "1 x Nano SIM"
      },
      {
        "label": "GPIO",
        "value": "Supports 8 GPIO channels"
      },
      {
        "label": "Watchdog",
        "value": "Watchdog timer"
      },
      {
        "label": "Auto power",
        "value": "AX-ATX(1-2) NORMAL; AX-ATX(2-3) AUTO POWER ON"
      },
      {
        "label": "DC input",
        "value": "DC 12 V, 5.5 x 2.5 mm jack"
      },
      {
        "label": "Environment - Operating",
        "value": "-20~60 C / 5~95% RH, non-condensing"
      },
      {
        "label": "Environment - Storage",
        "value": "-20~70 C / 5~95% RH, non-condensing"
      },
      {
        "label": "Dimensions",
        "value": "PCB Size: 120 x 120 mm; Product Size: 145 x 127 x 38 mm"
      }
    ],
    "series": "B",
    "operatingRange": "-20°C to 60°C",
    "sourceBrochure": "public/assets/工控机IPC/B系列/MCIPCB16A Brochure.pdf",
    "sourceSha256": "c30fe46c6ed17189345d73049d6a2c519c65de4ce437c4a9e7b9a3035a070a3d"
  },
  {
    "id": "mcipcb16b",
    "name": "MCIPCB16B",
    "tagline": "Intel Celeron J4125 compact industrial PC",
    "description": "MCIPCB16B combines Intel Celeron J4125 processing, up to 16GB DDR4, and dual lan for industrial computing and connected equipment. Model-specific serial, display, storage, and expansion options are detailed below; optional interfaces depend on the selected configuration.",
    "image": "/assets/products/industrial/brochure/mcipcb16b/main.webp",
    "galleryImages": [
      "/assets/products/industrial/brochure/mcipcb16b/view-1.webp",
      "/assets/products/industrial/brochure/mcipcb16b/view-2.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/industrial/brochure/mcipcb16b/view-1.webp",
        "title": "MCIPCB16B front panel"
      },
      {
        "image": "/assets/products/industrial/brochure/mcipcb16b/view-2.webp",
        "title": "MCIPCB16B rear panel"
      }
    ],
    "highlights": [
      "Intel Celeron J4125",
      "Up to 16GB DDR4",
      "Dual LAN",
      "Dual serial interfaces"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCB16B"
      },
      {
        "label": "CPU",
        "value": "Intel Gemini Lake-R Celeron J4125"
      },
      {
        "label": "BIOS",
        "value": "AMI 64M BIOS (Winbond 25Q64JWSIQ); Auto Power On, PXE, WOL"
      },
      {
        "label": "Memory",
        "value": "1 x SODIMM DDR4 2400 MHz, max 16 GB"
      },
      {
        "label": "Graphics",
        "value": "Intel UHD Graphics 600"
      },
      {
        "label": "HDMI",
        "value": "1 x HDMI1.4, max 4K 30 Hz"
      },
      {
        "label": "VGA",
        "value": "1 x VGA, max 1080P 60 Hz (optional HDMI, CS5212 solution)"
      },
      {
        "label": "SATA",
        "value": "1 x SATA3.0 6 Gb/s"
      },
      {
        "label": "mSATA",
        "value": "1 x mSATA3.0 6 Gb/s (optional Mini PCIe)"
      },
      {
        "label": "Network",
        "value": "2 x RTL8111H (LAN1 can be changed to a pin header; LAN2 can be changed to 2 x USB shared with internal USB)"
      },
      {
        "label": "USB",
        "value": "External: 2 x USB2.0 (can be changed to pin headers); 4 x USB3.0; internal: 2 x USB2.0 (1 shared with 4G)"
      },
      {
        "label": "Serial",
        "value": "2 x COM RS232 (both support RS485, internal headers); expandable COM3/COM4 2.0 mm pin headers"
      },
      {
        "label": "Audio",
        "value": "Realtek ALC897 7.1-channel HDA codec"
      },
      {
        "label": "Mini PCIe",
        "value": "Supports Wi-Fi/4G, PCIe protocol"
      },
      {
        "label": "SIM",
        "value": "1 x Nano SIM"
      },
      {
        "label": "GPIO",
        "value": "Supports 8 GPIO channels"
      },
      {
        "label": "Watchdog",
        "value": "Watchdog timer"
      },
      {
        "label": "Auto power",
        "value": "AX-ATX(1-2) NORMAL; AX-ATX(2-3) AUTO POWER ON"
      },
      {
        "label": "DC input",
        "value": "DC 12 V, 5.5 x 2.5 mm jack"
      },
      {
        "label": "Environment - Operating",
        "value": "-20~60 C / 5~95% RH, non-condensing"
      },
      {
        "label": "Environment - Storage",
        "value": "-20~70 C / 5~95% RH, non-condensing"
      },
      {
        "label": "Dimensions",
        "value": "PCB Size: 120 x 120 mm; Product Size: 145 x 127 x 38 mm"
      }
    ],
    "series": "B",
    "operatingRange": "-20°C to 60°C",
    "sourceBrochure": "public/assets/工控机IPC/B系列/MCIPCB16B Brochure.pdf",
    "sourceSha256": "27e63032939e93964f0ded62cdb0a32fb505b57bf8510cb0ee7717337eef7d27"
  },
  {
    "id": "mcipcd4",
    "name": "MCIPCD4",
    "tagline": "Intel J4125 compact industrial PC",
    "description": "MCIPCD4 combines Intel J4125 processing, up to 16GB DDR4, and 4 x intel i226-v lan for industrial computing and connected equipment. Model-specific serial, display, storage, and expansion options are detailed below; optional interfaces depend on the selected configuration.",
    "image": "/assets/products/industrial/brochure/mcipcd4/main.webp",
    "galleryImages": [
      "/assets/products/industrial/brochure/mcipcd4/view-1.webp",
      "/assets/products/industrial/brochure/mcipcd4/view-2.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/industrial/brochure/mcipcd4/view-1.webp",
        "title": "MCIPCD4 front panel"
      },
      {
        "image": "/assets/products/industrial/brochure/mcipcd4/view-2.webp",
        "title": "MCIPCD4 rear panel"
      }
    ],
    "highlights": [
      "Intel J4125",
      "Up to 16GB DDR4",
      "4 x Intel I226-V LAN",
      "Dual serial interfaces"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCD4"
      },
      {
        "label": "CPU",
        "value": "Intel Gemini Lake-R J4125"
      },
      {
        "label": "BIOS",
        "value": "AMI 64M BIOS (winbond 25Q64JWSIQ) AUTO_POWER_ON, PXE, WOL"
      },
      {
        "label": "Memory",
        "value": "1 x SODIMM DDR4 2400MHz Max 16G"
      },
      {
        "label": "Graphics",
        "value": "Intel UHD Graphics 600"
      },
      {
        "label": "Display",
        "value": "1 x HDMI1.4 Max 4K 30hz; 1 x DP1.2 4K 30Hz (Optional)"
      },
      {
        "label": "Storage",
        "value": "1 x SATA3.0 6Gb/s; 1 x MSATA3.0 6Gb/s"
      },
      {
        "label": "Network",
        "value": "4 x Intel I226-V"
      },
      {
        "label": "USB",
        "value": "External 4 x USB2.0 (Two optional PinHeader) + 2 x USB3.0 + Inside 2 x USB2.0 (One shared with 4G)"
      },
      {
        "label": "Serial",
        "value": "2 x COM RS232 (Hardware modification support RS485, PinHeader)"
      },
      {
        "label": "Audio",
        "value": "RealtekALC897 7.1-channel HD audio codec"
      },
      {
        "label": "Expansion",
        "value": "MPCIE: Support WIFI/4G PCIe interface; SIM: 1 x Nano SIM; GPIO: Supports 8 channels GPIO"
      },
      {
        "label": "Watchdog",
        "value": "Watchdog Timer"
      },
      {
        "label": "Fan",
        "value": "4Pin 12V System Fan Detection and intelligent control (Optional)"
      },
      {
        "label": "AX-ATX",
        "value": "AX-ATX(1-2)NORMAL, AX-ATX(2-3)AUTO POWER ON"
      },
      {
        "label": "DC input",
        "value": "DC 12V"
      },
      {
        "label": "Environment - Temperature / humidity",
        "value": "Operating: -20~60 C /5~95%RH, Non-condensing; Non-Operating: -20~70 C /5~95%RH, Non-condensing"
      },
      {
        "label": "Dimensions",
        "value": "PCB Size: 120 x 120mm; Product Size: 145 x 127 x 37mm"
      }
    ],
    "series": "D",
    "operatingRange": "-20°C to 60°C",
    "sourceBrochure": "public/assets/工控机IPC/D系列/MCIPCD4 Brochure.pdf",
    "sourceSha256": "074573719649838036e7779b3c2e35ef1e4b30c9c90155ec4e1112eecc93190f"
  },
  {
    "id": "mcipcd5",
    "name": "MCIPCD5",
    "tagline": "Intel N100 / i3-N305 compact industrial PC",
    "description": "MCIPCD5 combines Intel N100 / i3-N305 processing, up to 32GB DDR5, and 4 x intel i226-v lan for industrial computing and connected equipment. Model-specific serial, display, storage, and expansion options are detailed below; optional interfaces depend on the selected configuration.",
    "image": "/assets/products/industrial/brochure/mcipcd5/main.webp",
    "galleryImages": [
      "/assets/products/industrial/brochure/mcipcd5/view-1.webp",
      "/assets/products/industrial/brochure/mcipcd5/view-2.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/industrial/brochure/mcipcd5/view-1.webp",
        "title": "MCIPCD5 front panel"
      },
      {
        "image": "/assets/products/industrial/brochure/mcipcd5/view-2.webp",
        "title": "MCIPCD5 rear panel"
      }
    ],
    "highlights": [
      "Intel N100 / i3-N305",
      "Up to 32GB DDR5",
      "4 x Intel I226-V LAN",
      "Dual serial interfaces"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCD5"
      },
      {
        "label": "CPU",
        "value": "Intel Alder Lake-N N100/i3-N305"
      },
      {
        "label": "BIOS",
        "value": "AMI 128M BIOS (winbond 25Q128JVSQ) AUTO_POWER_ON, PXE, WOL"
      },
      {
        "label": "Memory",
        "value": "1 x SODIMM DDR5 4800MHz Max 32G"
      },
      {
        "label": "Graphics",
        "value": "Intel UHD Graphics"
      },
      {
        "label": "Display",
        "value": "2 x HDMI2.0 Max 4K 60hz; 1 x EDP PinHeader (2 x 15Pin 2.0mm) Max 1080P 60hz"
      },
      {
        "label": "Storage",
        "value": "1 x SATA3.0 6Gb/s; 1 x M.2 SSD2280 (NGFF/PCIe auto-switching)"
      },
      {
        "label": "Network",
        "value": "4 x intel I226-V (Lan1 optional PinHeader)"
      },
      {
        "label": "USB",
        "value": "External 4 x USB2.0 (optional PinHeader, A USB can be flipped) + 2 x USB3.2 Gen2"
      },
      {
        "label": "Serial",
        "value": "2 x COM RS232 (COM2 support RS485, COM1 appearance supports RJ45)"
      },
      {
        "label": "Expansion",
        "value": "M.2_WIFI(E_KEY) 2230 socket, PCIe Support CNVI; MPCIE Support WIFI/4G USB/PCIe interface; 1 x NANO SIM; Supports 8 channels GPIO"
      },
      {
        "label": "Watchdog",
        "value": "4~255 Sec Watchdog Timer"
      },
      {
        "label": "Fan",
        "value": "4Pin 12V System Fan Detection and intelligent control"
      },
      {
        "label": "JP3",
        "value": "JP3(1-2)AUTO POWER ON, JP3(2-3)NORMAL"
      },
      {
        "label": "TPM",
        "value": "TPM2.0 Hardware_encryption (Optional)"
      },
      {
        "label": "DC input",
        "value": "DC 12V, DC 5.5 x 2.5mm"
      },
      {
        "label": "Environment - Temperature / humidity",
        "value": "Operating: -20~60 C /0~90%RH, Non-condensing; Non-Operating: -20~60 C /0~90%RH, Non-condensing"
      },
      {
        "label": "Dimensions",
        "value": "PCB Size: 120 x 120mm; Product Size: 148 x 125 x 56mm"
      }
    ],
    "series": "D",
    "operatingRange": "-20°C to 60°C",
    "sourceBrochure": "public/assets/工控机IPC/D系列/MCIPCD5 Brochure.pdf",
    "sourceSha256": "d5a4696597b48932a12c2d126443d68e298cc49ed45b7f1ede7cd2ceec90fc90"
  },
  {
    "id": "mcipcd5f",
    "name": "MCIPCD5F",
    "tagline": "Intel N100 / i3-N305 compact industrial PC",
    "description": "MCIPCD5F combines Intel N100 / i3-N305 processing, up to 32GB DDR5, and 4 x intel i226-v lan for industrial computing and connected equipment. Model-specific serial, display, storage, and expansion options are detailed below; optional interfaces depend on the selected configuration.",
    "image": "/assets/products/industrial/brochure/mcipcd5f/main.webp",
    "galleryImages": [
      "/assets/products/industrial/brochure/mcipcd5f/view-1.webp",
      "/assets/products/industrial/brochure/mcipcd5f/view-2.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/industrial/brochure/mcipcd5f/view-1.webp",
        "title": "MCIPCD5F front panel"
      },
      {
        "image": "/assets/products/industrial/brochure/mcipcd5f/view-2.webp",
        "title": "MCIPCD5F rear panel"
      }
    ],
    "highlights": [
      "Intel N100 / i3-N305",
      "Up to 32GB DDR5",
      "4 x Intel I226-V LAN",
      "Dual serial interfaces"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCD5F"
      },
      {
        "label": "CPU",
        "value": "Intel Alder Lake-N N100/i3-N305"
      },
      {
        "label": "BIOS",
        "value": "AMI 128M BIOS (winbond 25Q128JVSQ) AUTO_POWER_ON, PXE, WOL"
      },
      {
        "label": "Memory",
        "value": "1 x SODIMM DDR5 4800MHz Max 32G"
      },
      {
        "label": "Graphics",
        "value": "Intel UHD Graphics"
      },
      {
        "label": "Display",
        "value": "2 x HDMI2.0 Max 4K 60hz; 1 x EDP PinHeader (2 x 15Pin 2.0mm) Max 1080P 60hz"
      },
      {
        "label": "Storage",
        "value": "1 x SATA3.0 6Gb/s; 1 x M.2 SSD2280 (NGFF/PCIe auto-switching)"
      },
      {
        "label": "Network",
        "value": "4 x intel I226-V (Lan1 optional PinHeader)"
      },
      {
        "label": "USB",
        "value": "External 4 x USB2.0 (optional PinHeader, A USB can be flipped) + 2 x USB3.2 Gen2"
      },
      {
        "label": "Serial",
        "value": "2 x COM RS232 (COM2 support RS485, COM1 appearance supports RJ45)"
      },
      {
        "label": "Expansion",
        "value": "M.2_WIFI(E_KEY) 2230 socket, PCIe Support CNVI; MPCIE Support WIFI/4G USB/PCIe interface; 1 x NANO SIM; Supports 8 channels GPIO"
      },
      {
        "label": "Watchdog",
        "value": "4~255 Sec Watchdog Timer"
      },
      {
        "label": "Fan",
        "value": "4Pin 12V System Fan Detection and intelligent control"
      },
      {
        "label": "JP3",
        "value": "JP3(1-2)AUTO POWER ON, JP3(2-3)NORMAL"
      },
      {
        "label": "TPM",
        "value": "TPM2.0 Hardware_encryption (Optional)"
      },
      {
        "label": "DC input",
        "value": "DC 12V, DC 5.5 x 2.5mm"
      },
      {
        "label": "Environment - Temperature / humidity",
        "value": "Operating: -20~60 C /0~90%RH, Non-condensing; Non-Operating: -20~60 C /0~90%RH, Non-condensing"
      },
      {
        "label": "Dimensions",
        "value": "PCB Size: 120 x 120mm; Product Size: 148 x 125 x 56mm"
      }
    ],
    "series": "D",
    "operatingRange": "-20°C to 60°C",
    "sourceBrochure": "public/assets/工控机IPC/D系列/MCIPCD5F Brochure.pdf",
    "sourceSha256": "693b505bbca5dd083c788ae36148c3bc04fd3271500dd784f373586265bbc5a3"
  },
  {
    "id": "mcipcd6",
    "name": "MCIPCD6",
    "tagline": "Intel Celeron J6412 compact industrial PC",
    "description": "MCIPCD6 combines Intel Celeron J6412 processing, up to 64GB DDR4, and 4 x 2.5gbe lan for industrial computing and connected equipment. Model-specific serial, display, storage, and expansion options are detailed below; optional interfaces depend on the selected configuration.",
    "image": "/assets/products/industrial/brochure/mcipcd6/main.webp",
    "galleryImages": [
      "/assets/products/industrial/brochure/mcipcd6/view-1.webp",
      "/assets/products/industrial/brochure/mcipcd6/view-2.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/industrial/brochure/mcipcd6/view-1.webp",
        "title": "MCIPCD6 front panel"
      },
      {
        "image": "/assets/products/industrial/brochure/mcipcd6/view-2.webp",
        "title": "MCIPCD6 rear panel"
      }
    ],
    "highlights": [
      "Intel Celeron J6412",
      "Up to 64GB DDR4",
      "4 x 2.5GbE LAN",
      "Dual serial interfaces"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCD6"
      },
      {
        "label": "CPU",
        "value": "Intel Celeron J6412 2.0GHz Total Cores 4"
      },
      {
        "label": "BIOS",
        "value": "128Mb Flash ROM AUTO_POWER_ON, PXE, WOL"
      },
      {
        "label": "Memory",
        "value": "2 x SODIMM DDR4 3200MHz MAX 32G Total64G"
      },
      {
        "label": "Graphics",
        "value": "Intel UHD Graphics"
      },
      {
        "label": "Display",
        "value": "1 x HDMI2.0 Max 4K 60hz; 1 x DP1.2 Max 4K 60Hz"
      },
      {
        "label": "Storage",
        "value": "1 x SATA3.0 6Gbps; 1 x M.2 Key-M 2280/2242, default 2280 (NGFF/PCIE Adaptive)"
      },
      {
        "label": "Network",
        "value": "4 x intel i225/i226 2.5G network adapters"
      },
      {
        "label": "USB",
        "value": "4 x USB2.0 + 2 x USB3.0"
      },
      {
        "label": "Serial",
        "value": "2 x COM RS232 (COM1 hardware modification can support RS485)"
      },
      {
        "label": "Expansion",
        "value": "MPCIE: Support WIFI/4G PCIe interface; SIM: 1 x Nano SIM; GPIO: Supports 8 channels GPIO (4 inputs, 4 outputs)"
      },
      {
        "label": "Watchdog",
        "value": "Watchdog Timer"
      },
      {
        "label": "Fan",
        "value": "4Pin 12V CPU Fan Detection and intelligent control (Optional)"
      },
      {
        "label": "AX-ATX",
        "value": "AX-ATX(1-2) default, AX-ATX(2-3) AUTO POWER ON"
      },
      {
        "label": "DC input",
        "value": "DC 12V, DC 5.5 x 2.5mm"
      },
      {
        "label": "Environment - Temperature / humidity",
        "value": "Operating: -10~60 C /5~95%RH, Non-condensing; Non-Operating: -20~70 C /5~95%RH, Non-condensing"
      },
      {
        "label": "Dimensions",
        "value": "PCB Size: 120 x 120mm; Product Size: 148 x 125 x 56mm"
      }
    ],
    "series": "D",
    "operatingRange": "-10°C to 60°C",
    "sourceBrochure": "public/assets/工控机IPC/D系列/MCIPCD6 Brochure.pdf",
    "sourceSha256": "b8a64d2d857344a0b1f3636dbf6e028a3d800d562dcadb01891d83c37fe4077e"
  }
];

export const commercialBrochureProducts: (CommercialCatalogItem & Provenance)[] = [
  {
    "id": "mcnas11",
    "name": "MCNAS11",
    "tagline": "Intel Core i3-1115G4 compact NAS PC",
    "description": "MCNAS11 combines Intel Core i3-1115G4 processor options, up to 64GB DDR4, and 4 x RJ45 + 2 x SFP+ for compact storage and network-service deployments. NVMe, SATA, and PCIe expansion support project-specific storage and connectivity requirements.",
    "image": "/assets/products/commercial/brochure/mcnas11/main.webp",
    "galleryImages": [
      "/assets/products/commercial/brochure/mcnas11/view-1.webp",
      "/assets/products/commercial/brochure/mcnas11/view-2.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/commercial/brochure/mcnas11/view-1.webp",
        "title": "MCNAS11 front panel"
      },
      {
        "image": "/assets/products/commercial/brochure/mcnas11/view-2.webp",
        "title": "MCNAS11 rear panel"
      }
    ],
    "highlights": [
      "Intel Core i3-1115G4",
      "Up to 64GB DDR4",
      "4 x RJ45 + 2 x SFP+",
      "NVMe + SATA storage"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCNAS11"
      },
      {
        "label": "CPU",
        "value": "Onboard Intel Core i3-1115G4, FC-BGA1449; 2 cores / 4 threads; up to 4.10 GHz; 6 MB Smart Cache; TDP 28 W"
      },
      {
        "label": "Processor",
        "value": "Optional Intel 11th Gen Pentium / Celeron / Core i3 / i5 / i7 processors (FC-BGA1449)"
      },
      {
        "label": "Memory",
        "value": "2 x 260-pin DDR4-3200 SO-DIMM slots, 1.2 V; max 64 GB"
      },
      {
        "label": "SATA",
        "value": "2 x 7-pin SATA connectors"
      },
      {
        "label": "Storage - M.2 SSD",
        "value": "1 x M.2 2280 SSD slot, NVMe only"
      },
      {
        "label": "Network",
        "value": "4 x RJ45 LAN ports; onboard Intel I226 controllers; 2 x SFP+ ports"
      },
      {
        "label": "Display",
        "value": "1 x HDMI; 1 x DP"
      },
      {
        "label": "USB",
        "value": "2 x USB3.0; 2 x USB2.0; 1 x USB Type-C"
      },
      {
        "label": "Serial",
        "value": "1 x external RJ45 COM port; 1 x onboard COM header (RS232)"
      },
      {
        "label": "Audio",
        "value": "1 x microphone / headphone audio port"
      },
      {
        "label": "Controls / LED",
        "value": "1 x power button; 1 x reset button; 1 x LED indicator"
      },
      {
        "label": "PCIe",
        "value": "1 x PCIe 3.0 slot (x8 physical, x2 electrical)"
      },
      {
        "label": "Internal I/O - SATA power",
        "value": "2 x SATA power connectors"
      },
      {
        "label": "Internal I/O - Front panel",
        "value": "1 x front-panel header"
      },
      {
        "label": "Internal I/O - TPM",
        "value": "1 x TPM header"
      },
      {
        "label": "Internal I/O - CPU fan",
        "value": "1 x CPU fan power header"
      },
      {
        "label": "DC input",
        "value": "1 x DC_IN connector, 12 V DC"
      },
      {
        "label": "PCB Size",
        "value": "120 x 150 mm"
      },
      {
        "label": "Environment - Operating",
        "value": "-20 to 55 °C"
      },
      {
        "label": "Environment - Humidity",
        "value": "5-90% RH, non-condensing"
      }
    ],
    "series": "NAS",
    "operatingRange": "-20°C to 55°C",
    "sourceBrochure": "public/assets/NAS PC/MCNAS11 Brochure.pdf",
    "sourceSha256": "c9de402e10b8d4d8ff0bdfe53ec522a9ef87e4c874e5e21241c72aafb9fe4745"
  },
  {
    "id": "mcnas14a",
    "name": "MCNAS14A",
    "tagline": "Intel Core Ultra 125H / 155H / 185H compact NAS PC",
    "description": "MCNAS14A combines Intel Core Ultra 125H / 155H / 185H processor options, up to 96GB DDR5, and 4 x 2.5GbE + 2 x 10GbE SFP+ for compact storage and network-service deployments. NVMe, SATA, and PCIe expansion support project-specific storage and connectivity requirements.",
    "image": "/assets/products/commercial/brochure/mcnas14a/main.webp",
    "galleryImages": [
      "/assets/products/commercial/brochure/mcnas14a/view-1.webp",
      "/assets/products/commercial/brochure/mcnas14a/view-2.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/commercial/brochure/mcnas14a/view-1.webp",
        "title": "MCNAS14A front panel"
      },
      {
        "image": "/assets/products/commercial/brochure/mcnas14a/view-2.webp",
        "title": "MCNAS14A rear panel"
      }
    ],
    "highlights": [
      "Intel Core Ultra 125H / 155H / 185H",
      "Up to 96GB DDR5",
      "4 x 2.5GbE + 2 x 10GbE SFP+",
      "NVMe + SATA storage"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCNAS14A"
      },
      {
        "label": "CPU",
        "value": "Intel Core Ultra 5 125H / Ultra 7 155H / Ultra 9 185H (Meteor Lake)"
      },
      {
        "label": "Graphics",
        "value": "Intel Arc graphics"
      },
      {
        "label": "Memory",
        "value": "2 x SO-DIMM DDR5-5600; supports 4800 / 5200 MHz; up to 96 GB"
      },
      {
        "label": "Display",
        "value": "1 x HDMI 2.0 + 1 x DP 1.4a + 1 x USB4 Type-C; up to 8K at 60 Hz"
      },
      {
        "label": "Storage - M.2 / SATA",
        "value": "1 x M.2 NVMe PCIe 4.0 x4 + 1 x SATA 3.0"
      },
      {
        "label": "Network",
        "value": "4 x Intel I226-V 2.5GbE + 2 x Intel 82599ES 10GbE SFP+"
      },
      {
        "label": "Wireless",
        "value": "1 x M.2 E-Key; supports a CNVi Wi-Fi 6E module"
      },
      {
        "label": "PCIe",
        "value": "1 x PCIe x8 slot"
      },
      {
        "label": "Front I/O - Controls",
        "value": "Power button + BIOS recovery button"
      },
      {
        "label": "Front I/O - Audio / TF",
        "value": "1 x 2-in-1 audio interface + 1 x TF card slot"
      },
      {
        "label": "Front I/O - USB",
        "value": "1 x USB4 Type-C + 2 x USB 3.2 + 2 x USB 2.0"
      },
      {
        "label": "Rear I/O - Network",
        "value": "4 x RJ45 2.5GbE + 2 x SFP+ 10GbE"
      },
      {
        "label": "Rear I/O - USB",
        "value": "4 x USB 2.0"
      },
      {
        "label": "Rear I/O - Power",
        "value": "1 x DC 12-19 V input (5.5 x 2.5 mm)"
      },
      {
        "label": "BIOS",
        "value": "AMI UEFI BIOS; auto power-on, GPIO, PXE and Wake-on-LAN"
      },
      {
        "label": "Internal I/O - Headers",
        "value": "3 x 4-pin fan; GPIO; COM; F_PANEL; TPM; SATA power; control jumpers"
      },
      {
        "label": "DC IN",
        "value": "12-19 V DC, 5.5 x 2.5 mm"
      },
      {
        "label": "Dimensions",
        "value": "6.1 x 5.24 x 2.4 in"
      },
      {
        "label": "Indicators - Hard disk",
        "value": "Hard disk status LED"
      },
      {
        "label": "Indicators - Power",
        "value": "Power status LED"
      }
    ],
    "series": "NAS",
    "sourceBrochure": "public/assets/NAS PC/MCNAS14A brochure.pdf",
    "sourceSha256": "fc7507eb67f0f47af6a6aee5e7b0e79c3633bc4224c914e987c3430977467693"
  },
  {
    "id": "mcnas14b",
    "name": "MCNAS14B",
    "tagline": "Intel Core Ultra 125H / 155H / 185H compact NAS PC",
    "description": "MCNAS14B combines Intel Core Ultra 125H / 155H / 185H processor options, up to 96GB DDR5, and 4 x 2.5GbE + 4 x 10GbE SFP+ for compact storage and network-service deployments. NVMe, SATA, and PCIe expansion support project-specific storage and connectivity requirements.",
    "image": "/assets/products/commercial/brochure/mcnas14b/main.webp",
    "galleryImages": [
      "/assets/products/commercial/brochure/mcnas14b/view-1.webp",
      "/assets/products/commercial/brochure/mcnas14b/view-2.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/commercial/brochure/mcnas14b/view-1.webp",
        "title": "MCNAS14B front panel"
      },
      {
        "image": "/assets/products/commercial/brochure/mcnas14b/view-2.webp",
        "title": "MCNAS14B rear panel"
      }
    ],
    "highlights": [
      "Intel Core Ultra 125H / 155H / 185H",
      "Up to 96GB DDR5",
      "4 x 2.5GbE + 4 x 10GbE SFP+",
      "NVMe + SATA storage"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCNAS14B"
      },
      {
        "label": "CPU",
        "value": "Intel Core Ultra 5 125H / Ultra 7 155H / Ultra 9 185H (Meteor Lake)"
      },
      {
        "label": "Graphics",
        "value": "Intel Arc graphics"
      },
      {
        "label": "Memory",
        "value": "2 x SO-DIMM DDR5-5600; supports 4800 / 5200 MHz; up to 96 GB"
      },
      {
        "label": "Display",
        "value": "1 x HDMI 2.0 + 1 x DP 1.4a + 1 x USB4 Type-C; up to 8K at 60 Hz"
      },
      {
        "label": "Storage - M.2 / SATA",
        "value": "1 x M.2 NVMe PCIe 4.0 x4 + 1 x SATA 3.0"
      },
      {
        "label": "Network",
        "value": "4 x Intel I226-V 2.5GbE + 4 x Intel X710 10GbE SFP+"
      },
      {
        "label": "Wireless",
        "value": "1 x M.2 E-Key; supports a CNVi Wi-Fi 6E module"
      },
      {
        "label": "PCIe",
        "value": "1 x PCIe x8 slot"
      },
      {
        "label": "Front I/O - Controls",
        "value": "Power button + BIOS recovery button"
      },
      {
        "label": "Front I/O - Audio / TF",
        "value": "1 x 2-in-1 audio interface + 1 x TF card slot"
      },
      {
        "label": "Front I/O - USB",
        "value": "1 x USB4 Type-C + 2 x USB 3.2 + 2 x USB 2.0"
      },
      {
        "label": "Rear I/O - Network",
        "value": "4 x RJ45 2.5GbE + 4 x SFP+ 10GbE"
      },
      {
        "label": "Rear I/O - USB",
        "value": "4 x USB 2.0"
      },
      {
        "label": "Rear I/O - Power",
        "value": "1 x DC 12-19 V input (5.5 x 2.5 mm)"
      },
      {
        "label": "BIOS",
        "value": "AMI UEFI BIOS; auto power-on, GPIO, PXE and Wake-on-LAN"
      },
      {
        "label": "Internal I/O - Headers",
        "value": "3 x 4-pin fan; GPIO; COM; F_PANEL; TPM; SATA power; control jumpers"
      },
      {
        "label": "DC IN",
        "value": "12-19 V DC, 5.5 x 2.5 mm"
      },
      {
        "label": "Dimensions",
        "value": "6.1 x 5.24 x 2.4 in"
      },
      {
        "label": "Indicators - Hard disk",
        "value": "Hard disk status LED"
      },
      {
        "label": "Indicators - Power",
        "value": "Power status LED"
      }
    ],
    "series": "NAS",
    "sourceBrochure": "public/assets/NAS PC/MCNAS14B brochure.pdf",
    "sourceSha256": "656b4eed8c1ec883f77bd0c0c1c874b6b8dbeeaedc5b819c2230344433631a33"
  },
  {
    "id": "mcdpc1",
    "name": "MCDPC1",
    "tagline": "Intel N100 / N150 compact desktop PC",
    "description": "MCDPC1 is an Intel N100 / N150 desktop mini PC with replaceable DDR4 memory, dual Gigabit LAN, two M.2 2280 storage slots, and DisplayPort, HDMI, and USB-C display connections. A built-in 36 W power supply simplifies desk installation.",
    "image": "/assets/products/commercial/brochure/mcdpc1/main.webp",
    "galleryImages": [
      "/assets/products/commercial/brochure/mcdpc1/view-1.webp",
      "/assets/products/commercial/brochure/mcdpc1/view-2.webp",
      "/assets/products/commercial/brochure/mcdpc1/view-3.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/commercial/brochure/mcdpc1/view-1.webp",
        "title": "MCDPC1 front panel"
      },
      {
        "image": "/assets/products/commercial/brochure/mcdpc1/view-2.webp",
        "title": "MCDPC1 rear panel"
      },
      {
        "image": "/assets/products/commercial/brochure/mcdpc1/view-3.webp",
        "title": "MCDPC1 enclosure view"
      }
    ],
    "highlights": [
      "Intel N100 / N150",
      "Up to 16GB DDR4",
      "Dual Gigabit LAN",
      "NVMe + SATA storage"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCDPC1"
      },
      {
        "label": "CPU",
        "value": "Intel Alder Lake-N N100 / N150"
      },
      {
        "label": "Memory",
        "value": "1 x DDR4 SODIMM, max 16 GB"
      },
      {
        "label": "Network",
        "value": "2 x Realtek RTL8111H Gigabit Ethernet ports"
      },
      {
        "label": "USB",
        "value": "2 x USB3.2 Gen2 Type-A (10 Gb/s); 2 x USB2.0; 1 x USB3.2 Gen2 Type-C (10 Gb/s)"
      },
      {
        "label": "DP",
        "value": "1 x DP1.4"
      },
      {
        "label": "HDMI",
        "value": "1 x HDMI2.1"
      },
      {
        "label": "USB Type-C",
        "value": "1 x USB Type-C display output"
      },
      {
        "label": "Power button",
        "value": "1 x Power button"
      },
      {
        "label": "Audio",
        "value": "1 x headphone/microphone combo jack"
      },
      {
        "label": "Storage - M.2 SSD",
        "value": "2 x M.2 2280 NVMe (1 slot also supports M.2 SATA)"
      },
      {
        "label": "Wi-Fi",
        "value": "1 x M.2 2232 for Wi-Fi"
      },
      {
        "label": "OS",
        "value": "Windows 10, Windows 11, Linux"
      },
      {
        "label": "Features",
        "value": "Wake-on-LAN, Auto Power On, scheduled power-on, PXE boot"
      },
      {
        "label": "AC input",
        "value": "AC 100-240 V, 50/60 Hz; built-in 36 W power supply"
      },
      {
        "label": "Material",
        "value": "Fire-retardant ABS"
      },
      {
        "label": "Installation",
        "value": "Desktop"
      },
      {
        "label": "Dimensions",
        "value": "140 x 133 x 46 mm, including silicone feet"
      },
      {
        "label": "Weight",
        "value": "2 kg"
      },
      {
        "label": "Environment - Storage temperature",
        "value": "-30~70 C"
      },
      {
        "label": "Environment - Operating temperature",
        "value": "-20~60 C"
      },
      {
        "label": "Environment - Storage humidity",
        "value": "10%~90% RH at 30 C, non-condensing"
      }
    ],
    "series": "DPC",
    "operatingRange": "-20°C to 60°C",
    "sourceBrochure": "public/assets/桌面端DPC/MCDPC1 Brochure.pdf",
    "sourceSha256": "f1ff6e89fcc577225881c7c262f1779a682de16360815115cae3f6fb9eef1cfe"
  }
];

export const aiBrochureProducts = [
  {
    "id": "mcaipc3a",
    "name": "MCAIPC3A",
    "tagline": "AMD Ryzen / Ryzen AI options compact AI PC",
    "description": "MCAIPC3A combines AMD Ryzen / Ryzen AI options, up to 64GB onboard LPDDR5, dual 2.5GbE networking, and MCIO expansion in a 132 x 132 x 50.5 mm enclosure. Dual PCIe 4.0 M.2 storage, HDMI, DisplayPort, and USB4 support local computing and professional desktop workloads.",
    "image": "/assets/products/ai/brochure/mcaipc3a/main.webp",
    "galleryImages": [
      "/assets/products/ai/brochure/mcaipc3a/view-1.webp",
      "/assets/products/ai/brochure/mcaipc3a/view-2.webp",
      "/assets/products/ai/brochure/mcaipc3a/view-3.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/ai/brochure/mcaipc3a/view-1.webp",
        "title": "MCAIPC3A front panel"
      },
      {
        "image": "/assets/products/ai/brochure/mcaipc3a/view-2.webp",
        "title": "MCAIPC3A rear panel"
      },
      {
        "image": "/assets/products/ai/brochure/mcaipc3a/view-3.webp",
        "title": "MCAIPC3A enclosure view"
      }
    ],
    "highlights": [
      "AMD Ryzen / Ryzen AI options",
      "Up to 64GB onboard LPDDR5",
      "MCIO expansion",
      "Dual M.2 PCIe 4.0 SSD"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCAIPC3A"
      },
      {
        "label": "CPU",
        "value": "AMD Ryzen 7 H 260; Ryzen AI 7 Pro 360; Ryzen AI 9 365; Ryzen AI 9 HX 370; Ryzen AI 9 HX 470"
      },
      {
        "label": "Graphics",
        "value": "AMD Radeon 880M / 890M"
      },
      {
        "label": "Memory",
        "value": "Onboard LPDDR5, up to 6400 MT/s, max 64 GB"
      },
      {
        "label": "Storage - M.2 SSD",
        "value": "2 x M.2 2280 PCIe4.0 SSD"
      },
      {
        "label": "Network",
        "value": "2 x RJ45 2.5 GbE ports"
      },
      {
        "label": "USB",
        "value": "3 x USB3.0; 1 x USB2.0; 1 x USB4 Type-C"
      },
      {
        "label": "Audio",
        "value": "1 x audio combo jack, Realtek ALC869"
      },
      {
        "label": "Display",
        "value": "1 x HDMI2.1; 1 x DP2.1; 1 x USB4 Type-C display output"
      },
      {
        "label": "Front I/O - Ports & buttons",
        "value": "1 x power button; 1 x reset pinhole; 1 x audio jack; 2 x USB3.0; 1 x MCIO"
      },
      {
        "label": "Rear I/O - Ports",
        "value": "1 x DC input; 1 x USB4 Type-C; 2 x RJ45 2.5 GbE; 1 x HDMI2.1; 1 x DP2.1; 1 x USB3.0; 1 x USB2.0"
      },
      {
        "label": "High-speed interface",
        "value": "1 x MCIO"
      },
      {
        "label": "Wireless",
        "value": "Wi-Fi 6E; Bluetooth 5.2"
      },
      {
        "label": "Adapter",
        "value": "AC 100-240 V input; DC 19 V output (5.5 x 2.5 mm)"
      },
      {
        "label": "OS",
        "value": "Windows 10 / Windows 11 Pro"
      },
      {
        "label": "Dimensions",
        "value": "132 x 132 x 50.5 mm"
      },
      {
        "label": "Weight",
        "value": "Approx. 605 g"
      }
    ],
    "sourceBrochure": "public/assets/AIPC/MCAIPC3A Brochure.pdf",
    "sourceSha256": "62d38cd72a83e8864e48b77405ab250ce5fe18ed526889b2d28547eeaa4c769c"
  },
  {
    "id": "mcaipc3b",
    "name": "MCAIPC3B",
    "tagline": "AMD Ryzen AI options compact AI PC",
    "description": "MCAIPC3B combines AMD Ryzen AI options, up to 64GB DDR5 SO-DIMM, dual 2.5GbE networking, and OCuLink expansion in a 132 x 132 x 50.5 mm enclosure. Dual PCIe 4.0 M.2 storage, HDMI, DisplayPort, and USB4 support local computing and professional desktop workloads.",
    "image": "/assets/products/ai/brochure/mcaipc3b/main.webp",
    "galleryImages": [
      "/assets/products/ai/brochure/mcaipc3b/view-1.webp",
      "/assets/products/ai/brochure/mcaipc3b/view-2.webp",
      "/assets/products/ai/brochure/mcaipc3b/view-3.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/ai/brochure/mcaipc3b/view-1.webp",
        "title": "MCAIPC3B front panel"
      },
      {
        "image": "/assets/products/ai/brochure/mcaipc3b/view-2.webp",
        "title": "MCAIPC3B rear panel"
      },
      {
        "image": "/assets/products/ai/brochure/mcaipc3b/view-3.webp",
        "title": "MCAIPC3B enclosure view"
      }
    ],
    "highlights": [
      "AMD Ryzen AI options",
      "Up to 64GB DDR5 SO-DIMM",
      "OCuLink expansion",
      "Dual M.2 PCIe 4.0 SSD"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCAIPC3B"
      },
      {
        "label": "CPU",
        "value": "AMD Ryzen AI 5 340; Ryzen AI 7 Pro 360; Ryzen AI 9 365; Ryzen AI 9 HX 370; Ryzen AI 9 HX 470"
      },
      {
        "label": "Graphics",
        "value": "AMD Radeon 880M / 890M"
      },
      {
        "label": "Memory",
        "value": "2 x DDR5 SO-DIMM slots, up to 5600 MT/s, max 64 GB"
      },
      {
        "label": "Storage - M.2 SSD",
        "value": "2 x M.2 2280 PCIe4.0 SSD"
      },
      {
        "label": "Network",
        "value": "2 x RJ45 2.5 GbE ports"
      },
      {
        "label": "USB",
        "value": "3 x USB3.0; 1 x USB2.0; 1 x USB4 Type-C"
      },
      {
        "label": "Audio",
        "value": "1 x audio combo jack, Realtek ALC869"
      },
      {
        "label": "Display",
        "value": "1 x HDMI2.1; 1 x DP2.1; 1 x USB4 Type-C display output"
      },
      {
        "label": "Front I/O - Ports & buttons",
        "value": "1 x power button; 1 x reset pinhole; 1 x audio jack; 2 x USB3.0; 1 x USB4 Type-C; 1 x OCuLink"
      },
      {
        "label": "Rear I/O - Ports",
        "value": "1 x DC input; 2 x RJ45 2.5 GbE; 1 x HDMI2.1; 1 x DP2.1; 1 x USB3.0; 1 x USB2.0"
      },
      {
        "label": "High-speed interface",
        "value": "1 x OCuLink"
      },
      {
        "label": "Wireless",
        "value": "Wi-Fi 6E; Bluetooth 5.2"
      },
      {
        "label": "Adapter",
        "value": "AC 100-240 V input; DC 19 V output (5.5 x 2.5 mm)"
      },
      {
        "label": "OS",
        "value": "Windows 10 / Windows 11 Pro"
      },
      {
        "label": "Dimensions",
        "value": "132 x 132 x 50.5 mm"
      },
      {
        "label": "Weight",
        "value": "Approx. 605 g"
      }
    ],
    "sourceBrochure": "public/assets/AIPC/MCAIPC3B Brochure.pdf",
    "sourceSha256": "e10a5de01ebbf5edc8a770da5bb3cdfaf3ca802cbb9d3eb9cc3e7fdbcab55420"
  },
  {
    "id": "mcaipc3c",
    "name": "MCAIPC3C",
    "tagline": "Intel Core Ultra options compact AI PC",
    "description": "MCAIPC3C combines Intel Core Ultra options, up to 64GB DDR5 SO-DIMM, dual 2.5GbE networking, and OCuLink expansion in a 132 x 132 x 50.5 mm enclosure. Dual PCIe 4.0 M.2 storage, HDMI, DisplayPort, and USB4 support local computing and professional desktop workloads.",
    "image": "/assets/products/ai/brochure/mcaipc3c/main.webp",
    "galleryImages": [
      "/assets/products/ai/brochure/mcaipc3c/view-1.webp",
      "/assets/products/ai/brochure/mcaipc3c/view-2.webp",
      "/assets/products/ai/brochure/mcaipc3c/view-3.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/ai/brochure/mcaipc3c/view-1.webp",
        "title": "MCAIPC3C front panel"
      },
      {
        "image": "/assets/products/ai/brochure/mcaipc3c/view-2.webp",
        "title": "MCAIPC3C rear panel"
      },
      {
        "image": "/assets/products/ai/brochure/mcaipc3c/view-3.webp",
        "title": "MCAIPC3C enclosure view"
      }
    ],
    "highlights": [
      "Intel Core Ultra options",
      "Up to 64GB DDR5 SO-DIMM",
      "OCuLink expansion",
      "Dual M.2 PCIe 4.0 SSD"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCAIPC3C"
      },
      {
        "label": "CPU",
        "value": "Intel Core Ultra 5 125H; Ultra 7 165H; Ultra 9 185H; Ultra 7 255H; Ultra 9 285H"
      },
      {
        "label": "Graphics",
        "value": "Intel Arc Graphics (125H / 165H / 185H); Intel Arc 140T GPU (255H / 285H)"
      },
      {
        "label": "Memory",
        "value": "2 x DDR5 SO-DIMM slots, up to 5600 MT/s, max 64 GB"
      },
      {
        "label": "Storage - M.2 SSD",
        "value": "2 x M.2 2280 PCIe4.0 SSD"
      },
      {
        "label": "Network",
        "value": "2 x RJ45 2.5 GbE ports"
      },
      {
        "label": "USB",
        "value": "3 x USB3.0; 1 x USB2.0; 1 x USB4 Type-C"
      },
      {
        "label": "Audio",
        "value": "1 x audio combo jack, Realtek ALC869"
      },
      {
        "label": "Display",
        "value": "1 x HDMI2.1; 1 x DP2.1; 1 x USB4 Type-C display output"
      },
      {
        "label": "Front I/O - Ports & buttons",
        "value": "1 x power button; 1 x reset pinhole; 1 x audio jack; 2 x USB3.0; 1 x USB4 Type-C; 1 x OCuLink"
      },
      {
        "label": "Rear I/O - Ports",
        "value": "1 x DC input; 2 x RJ45 2.5 GbE; 1 x HDMI2.1; 1 x DP2.1; 1 x USB3.0; 1 x USB2.0"
      },
      {
        "label": "High-speed interface",
        "value": "1 x OCuLink"
      },
      {
        "label": "Wireless",
        "value": "Wi-Fi 6E; Bluetooth 5.2"
      },
      {
        "label": "Adapter",
        "value": "AC 100-240 V input; DC 19 V output (5.5 x 2.5 mm)"
      },
      {
        "label": "OS",
        "value": "Windows 10 / Windows 11 Pro"
      },
      {
        "label": "Dimensions",
        "value": "132 x 132 x 50.5 mm"
      },
      {
        "label": "Weight",
        "value": "Approx. 605 g"
      }
    ],
    "sourceBrochure": "public/assets/AIPC/MCAIPC3C Brochure.pdf",
    "sourceSha256": "8897c0a5ec17e72b1b6d461134c8c6990889036e326e2f6a3c24a737e92e26df"
  },
  {
    "id": "mcaipc3d",
    "name": "MCAIPC3D",
    "tagline": "Intel Core Ultra 235H / 255H / 285H compact AI PC",
    "description": "MCAIPC3D combines Intel Core Ultra 235H / 255H / 285H, up to 64GB onboard LPDDR5, dual 2.5GbE networking, and OCuLink expansion in a 132 x 132 x 50.5 mm enclosure. Dual PCIe 4.0 M.2 storage, HDMI, DisplayPort, and USB4 support local computing and professional desktop workloads.",
    "image": "/assets/products/ai/brochure/mcaipc3d/main.webp",
    "galleryImages": [
      "/assets/products/ai/brochure/mcaipc3d/view-1.webp",
      "/assets/products/ai/brochure/mcaipc3d/view-2.webp",
      "/assets/products/ai/brochure/mcaipc3d/view-3.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/ai/brochure/mcaipc3d/view-1.webp",
        "title": "MCAIPC3D front panel"
      },
      {
        "image": "/assets/products/ai/brochure/mcaipc3d/view-2.webp",
        "title": "MCAIPC3D rear panel"
      },
      {
        "image": "/assets/products/ai/brochure/mcaipc3d/view-3.webp",
        "title": "MCAIPC3D enclosure view"
      }
    ],
    "highlights": [
      "Intel Core Ultra 235H / 255H / 285H",
      "Up to 64GB onboard LPDDR5",
      "OCuLink expansion",
      "Dual M.2 PCIe 4.0 SSD"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCAIPC3D"
      },
      {
        "label": "CPU",
        "value": "Intel Core Ultra 5 235H; Ultra 7 255H; Ultra 9 285H"
      },
      {
        "label": "Graphics",
        "value": "Intel Arc Graphics / Intel Arc 140T GPU"
      },
      {
        "label": "Memory",
        "value": "Onboard LPDDR5, up to 6400 MT/s, max 64 GB"
      },
      {
        "label": "Storage - M.2 SSD",
        "value": "2 x M.2 2280 PCIe4.0 SSD"
      },
      {
        "label": "Network",
        "value": "2 x RJ45 2.5 GbE ports"
      },
      {
        "label": "USB",
        "value": "3 x USB3.0; 1 x USB2.0; 1 x USB4 Type-C"
      },
      {
        "label": "Audio",
        "value": "1 x audio combo jack, Realtek ALC869"
      },
      {
        "label": "Display",
        "value": "1 x HDMI2.1; 1 x DP2.1; 1 x USB4 Type-C display output"
      },
      {
        "label": "Front I/O - Ports & buttons",
        "value": "1 x power button; 1 x reset pinhole; 1 x audio jack; 2 x USB3.0; 1 x USB4 Type-C; 1 x OCuLink"
      },
      {
        "label": "Rear I/O - Ports",
        "value": "1 x DC input; 2 x RJ45 2.5 GbE; 1 x HDMI2.1; 1 x DP2.1; 1 x USB3.0; 1 x USB2.0"
      },
      {
        "label": "High-speed interface",
        "value": "1 x OCuLink"
      },
      {
        "label": "Wireless",
        "value": "Wi-Fi 6E; Bluetooth 5.2"
      },
      {
        "label": "Adapter",
        "value": "AC 100-240 V input; DC 19 V output (5.5 x 2.5 mm)"
      },
      {
        "label": "OS",
        "value": "Windows 10 / Windows 11 Pro"
      },
      {
        "label": "Dimensions",
        "value": "132 x 132 x 50.5 mm"
      },
      {
        "label": "Weight",
        "value": "Approx. 605 g"
      }
    ],
    "sourceBrochure": "public/assets/AIPC/MCAIPC3D Brochure.pdf",
    "sourceSha256": "b21a5ee77ae9cf6c910ab85e6df6dc05cb3cb365293e94a614711bca227129ac"
  },
  {
    "id": "mcai2",
    "name": "MCAIPC2",
    "tagline": "Three mainboard series with configurable memory, networking, and chassis",
    "description": "MCAIPC2 spans AXB35-02, AXB35-03, and AEB35-04 mainboards with series-specific AMD processors, LPDDR5 memory, networking, and expansion. Select a compatible chassis and power configuration.",
    "image": "/assets/products/ai/brochure/mcaipc2/main.webp",
    "galleryImages": [
      "/assets/products/ai/brochure/mcaipc2/view-1.webp",
      "/assets/products/ai/brochure/mcaipc2/view-2.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/ai/brochure/mcaipc2/view-1.webp",
        "title": "MCAIPC2 h04-bq front view"
      },
      {
        "image": "/assets/products/ai/brochure/mcaipc2/view-2.webp",
        "title": "MCAIPC2 h04-bq enclosure view"
      }
    ],
    "highlights": [
      "AXB35-02 / AXB35-03 / AEB35-04",
      "Up to 128GB, series-dependent",
      "2.5GbE or dual 10GbE",
      "Compatible chassis and power options"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCAIPC2"
      },
      {
        "label": "Mainboard series",
        "value": "AXB35-02: AMD FP11 Strix Halo, Ryzen AI Max 300; AXB35-03: AMD FP11 Strix/Gorgon Halo, Ryzen AI Max 300/400; AEB35-04: AMD FP10 Medusa Point (Zen 6)"
      },
      {
        "label": "GPU / NPU",
        "value": "AXB35-02: AMD integrated graphics; AXB35-03: Radeon 8000S series; AEB35-04: next-generation RDNA GPU, up to 50 TOPS, and XDNA 3 NPU, up to 100 TOPS"
      },
      {
        "label": "Memory",
        "value": "AXB35-02/-03: LPDDR5 8000 MT/s, up to 128 GB; AEB35-04: LPDDR5 9600 MT/s, 64 GB or 96 GB"
      },
      {
        "label": "Storage",
        "value": "AXB35-02: 2 x M.2 2280 PCIe 4.0 x4; AXB35-03: 2 x M.2 2280 plus optional M.2 2242/2280 for Flex I/O; AEB35-04: 2 x M.2 2280 PCIe 4.0 x4; SD 4.0 supported"
      },
      {
        "label": "Network",
        "value": "AXB35-02: 1 x RJ45 2.5 GbE; AXB35-03 and AEB35-04: 2 x RJ45 10 GbE"
      },
      {
        "label": "USB",
        "value": "Front, all series: 2 x USB 3.2 Gen 2 Type-A and 1 x USB4; rear: AXB35-02 has 1 x USB 3.2 Gen 2, 2 x USB 2.0 and 1 x USB4; AXB35-03/AEB35-04 have 1 x USB 3.2, 1 x USB 2.0 and 1 x USB4"
      },
      {
        "label": "Audio",
        "value": "AXB35-02/-03: front and rear combo jacks; AEB35-04: 1 x combo jack"
      },
      {
        "label": "Display",
        "value": "AXB35-02/-03: HDMI 2.1, DP 1.4 and 2 x USB4; AEB35-04: HDMI 2.1, DP 2.0 and 2 x USB4"
      },
      {
        "label": "Expansion",
        "value": "AXB35-03: optional M.2 Flex I/O for OCuLink or dual 80 Gbps USB4 data; AEB35-04: 1 x MCIO, PCIe 4.0 x8"
      },
      {
        "label": "Wi-Fi / Bluetooth",
        "value": "M.2 2230 PCIe/USB module; AXB35-02 supports 2.4/5 GHz; AXB35-03/AEB35-04 support 2.4/5/6 GHz; Bluetooth 5.0 or later"
      },
      {
        "label": "PSU / input",
        "value": "H01/H02/H03/H06/H07: internal 300/350 W Flex PSU; other documented chassis: 20 V / 12 A, 240 W external adapter"
      },
      {
        "label": "OS",
        "value": "AXB35-02/-03: Windows 11; AEB35-04: Windows 11 or Linux"
      },
      {
        "label": "Dimensions",
        "value": "Chassis-dependent; see the chassis compatibility guide below for dimensions and power options."
      }
    ],
    "sourceBrochure": "public/assets/AIPC/MCAIPC2 brochure.pdf",
    "sourceSha256": "0483c61c63c7bf5ea0208f296bc2f17d057135816ce144ec3fc89fca1cdd8d34"
  }
];
