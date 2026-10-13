// NAS boards are separate from enclosed NAS PCs. NASJ4125 is deferred by the user.
import type { CommercialCatalogItem } from '@/lib/commercial-catalog';
export const nasMotherboards: CommercialCatalogItem[] = [
  {
    "id": "nasd2700",
    "name": "NASD2700",
    "series": "NAS-MB",
    "tagline": "Xeon D-2700 NAS motherboard with 10GbE and IPMI",
    "description": "NASD2700 is a 244 x 258 mm extended micro-ATX motherboard, shown with Xeon D-2712T. Eight DDR4 ECC UDIMM slots, two 10GbE RJ45 and four 10GbE SFP+ ports, dedicated IPMI LAN, eight NVMe slots and up to twelve SATA connections support storage-system integration. ATX power, a compatible enclosure, cooling, memory and drives must be selected separately.",
    "highlights": [
      "Xeon D-2712T standard",
      "8 DDR4 ECC slots / 4 channels",
      "2 RJ45 + 4 SFP+ at 10GbE",
      "IPMI / 8 NVMe / up to 12 SATA"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "NASD2700"
      },
      {
        "label": "CPU",
        "value": "Intel Xeon D-2712T: 4 cores / 8 threads; 1.9 to 3.0 GHz; 65 W TDP"
      },
      {
        "label": "CPU options",
        "value": "D-2733NT / D-2752TER / D-2775TE / D-2796TE; 8 to 20 cores"
      },
      {
        "label": "Memory",
        "value": "8 x DDR4 ECC U-DIMM; 4 channels; D-2712T: 2667 MT/s, up to 1 TB with qualified DIMMs"
      },
      {
        "label": "Network",
        "value": "2 x 10GbE RJ45 (AQC113-B1-C); 4 x 10GbE SFP+"
      },
      {
        "label": "Management LAN",
        "value": "1 x dedicated 1GbE RJ45 for management (RTL8211F)"
      },
      {
        "label": "Expansion - PCIe",
        "value": "2 x physical x16 slots: one PCIe 4.0 x16, one PCIe 4.0 x8 signal"
      },
      {
        "label": "Expansion - Cellular",
        "value": "2 x M.2 B-key slots for 4G / 5G modules; 2 x SIM slots"
      },
      {
        "label": "BMC",
        "value": "ASPEED AST2500; IPMI remote management; onboard status display"
      },
      {
        "label": "Display",
        "value": "VGA header provided by the BMC"
      },
      {
        "label": "External I/O",
        "value": "2 x USB 3.0; 2 x 10GbE RJ45; 4 x SFP+; 1 x 1GbE IPMI"
      },
      {
        "label": "Internal I/O",
        "value": "USB 3.0 socket, Type-E, USB 2.0, COM, GPIO, F_PANEL, SSI AUX"
      },
      {
        "label": "Fans",
        "value": "Multiple onboard fan power headers"
      },
      {
        "label": "Power",
        "value": "ATX 24-pin + ATX 8-pin"
      },
      {
        "label": "Dimensions",
        "value": "White PCB; 244 x 258 mm extended micro-ATX"
      },
      {
        "label": "System",
        "value": "Windows 10 / 11, Windows Server, Linux; UEFI boot only"
      },
      {
        "label": "Operating Environment",
        "value": "0 to 65 °C; storage -20 to 75 °C; 5%-95% RH, noncondensing"
      },
      {
        "label": "Storage",
        "value": "8 x M.2 PCIe 3.0 x2: 6 x 2242 and 2 x 2242 / 2280; 3 x SFF-8643 via ASM1166; up to 12 x SATA 3.0; 1 x mSATA slot"
      }
    ],
    "image": "/assets/products/commercial/nas-motherboards/nasd2700/top.webp",
    "galleryImages": [
      "/assets/products/commercial/nas-motherboards/nasd2700/top.webp",
      "/assets/products/commercial/nas-motherboards/nasd2700/bottom.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/commercial/nas-motherboards/nasd2700/top.webp",
        "title": "NASD2700 top view"
      },
      {
        "image": "/assets/products/commercial/nas-motherboards/nasd2700/bottom.webp",
        "title": "NASD2700 bottom view"
      }
    ],
    "sourceBrochure": "NAS主板/NASD2700 brochure.pdf",
    "sourceSha256": "87a63c0d91c7d3c5dc0bbf7d8ce756cda65ba1bb76af819a0edb34bfc593bbc6",
    "operatingRange": "0°C to 65°C"
  },
  {
    "id": "nasn100",
    "name": "NASN100",
    "series": "NAS-MB",
    "tagline": "Mini-ITX Alder Lake-N NAS motherboard with four 2.5GbE ports",
    "description": "NASN100 is a 170 x 170 mm Mini-ITX motherboard with Intel N95 / N100 / N200 / i3-N305 options, up to 32GB DDR5, four Intel i226-V 2.5GbE ports, two M.2 NVMe x1 slots and six SATA connections. Its PCIe x1 slot shares resources with the second M.2 slot. This is a motherboard for integration, rather than an enclosed NAS PC.",
    "highlights": [
      "Intel Alder Lake-N options",
      "DDR5 up to 32GB",
      "4 x Intel i226-V 2.5GbE",
      "2 NVMe + 6 SATA"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "NASN100"
      },
      {
        "label": "CPU",
        "value": "Intel Alder Lake-N N95; Intel Alder Lake-N N100; Intel Alder Lake-N N200; Intel Alder Lake-N i3-N305"
      },
      {
        "label": "Graphics",
        "value": "Intel UHD Graphics; 16EU (N95)/24EU (N100)/32EU (N200, i3-N305)"
      },
      {
        "label": "Display",
        "value": "HDMI 2.1 support 4K@60Hz; DP1.4b support 4K@60Hz"
      },
      {
        "label": "Memory",
        "value": "1 x DDR5 SO-DIMM; 4800/5200/5600 MHz modules, up to 32GB; operating speed follows the selected CPU/platform"
      },
      {
        "label": "Material",
        "value": "Black PCB"
      },
      {
        "label": "Network",
        "value": "4 x Intel i226-V 2.5G RJ45 Ethernet"
      },
      {
        "label": "Dimensions",
        "value": "Mini-ITX, 170 x 170 mm (6.7 x 6.7 in); all solid-state capacitors"
      },
      {
        "label": "TDP",
        "value": "9-15W"
      },
      {
        "label": "System",
        "value": "Compatible Microsoft@Windows 10/11 64-bit; Compatible Linux; Supports UEFI mode only"
      },
      {
        "label": "Rear I/O",
        "value": "2 x USB2.0; 1 x USB3.0; 1 x Type-C (USB2.0); 1 x HDMI 2.1; 1 x DP 1.4b; 4 x RJ45 2.5GbE; 1 x 2-in-1 audio jack"
      },
      {
        "label": "Internal I/O",
        "value": "1 x FPANEL Pin; 1 x TPM Pin; 1 x USB2.0 Pin; 1 x CPU_FAN 4Pin (temperature control); 1 x SYS_FAN 4Pin (temperature control); 1 x 24+4 ATX Power supply connector; 1 x USB2.0 Socket (Dual USB); 1 x PCIex1 Slot (Shares with the second M.2 slot)"
      },
      {
        "label": "Storage",
        "value": "2 x M.2 NVMex1(2280); 6 x SATA3.0 6Gb/s; SATA1 is native, SATA2-6 are JMB585 expansion"
      }
    ],
    "image": "/assets/products/commercial/nas-motherboards/nasn100/top.webp",
    "galleryImages": [
      "/assets/products/commercial/nas-motherboards/nasn100/top.webp",
      "/assets/products/commercial/nas-motherboards/nasn100/bottom.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/commercial/nas-motherboards/nasn100/top.webp",
        "title": "NASN100 top view"
      },
      {
        "image": "/assets/products/commercial/nas-motherboards/nasn100/bottom.webp",
        "title": "NASN100 bottom view"
      }
    ],
    "sourceBrochure": "NAS主板/NASN100  brochure.pdf",
    "sourceSha256": "9a832f2152f5c245b630ec33be45f602121c10ff6b783a4cf394af6346792dd8"
  },
  {
    "id": "nasn150",
    "name": "NASN150",
    "series": "NAS-MB",
    "tagline": "Mini-ITX Alder / Twin Lake-N NAS motherboard with dual 2.5GbE",
    "description": "NASN150 is a 170 x 170 mm Mini-ITX motherboard with Intel N100 / i3-N305 / N150 / i3-N355 options, up to 48GB DDR5, dual Intel i226-V 2.5GbE, two M.2 NVMe PCIe 3.0 x1 slots and six SATA ports via ASM1166. A PCIe 3.0 x4 slot and ATX power connectors support system integration. Reserved eMMC solder pads are not populated by default.",
    "highlights": [
      "N100 / i3-N305 / N150 / i3-N355",
      "DDR5 up to 48GB",
      "2 x Intel 2.5GbE",
      "6 SATA / PCIe 3.0 x4"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "NASN150"
      },
      {
        "label": "CPU",
        "value": "Intel Alder Lake-N N100 / i3-N305; Intel Twin Lake N150 / i3-N355"
      },
      {
        "label": "Graphics",
        "value": "Intel UHD Graphics (N100: 24EU / N305: 32EU)"
      },
      {
        "label": "Display",
        "value": "HDMI 2.0 support 4K@60Hz; DP 1.4 support 4K@60Hz"
      },
      {
        "label": "Memory",
        "value": "1 x SO-DIMM DDR5 4800MHz (5200/5600 auto-downclock) Max 48G"
      },
      {
        "label": "Material",
        "value": "White PCB"
      },
      {
        "label": "Network",
        "value": "2 x Intel i226-V 2.5G RJ45 Ethernet"
      },
      {
        "label": "Dimensions",
        "value": "Mini-ITX, 170 x 170 mm (6.7 x 6.7 in); all solid-state capacitors"
      },
      {
        "label": "Base power consumption",
        "value": "Motherboard base power consumption: 18W-23W (depends on CPU); Whole system base power consumption: 25W-35W; (excluding hard drives, depends on CPU model)"
      },
      {
        "label": "System",
        "value": "Compatible with Microsoft Windows 10/11 64-bit and Linux; UEFI mode only"
      },
      {
        "label": "Rear I/O",
        "value": "1 x USB3.0; 3 x USB2.0; 1 x HDMI 2.0; 1 x DP 1.4; 2 x RJ45 2.5GbE; 1 x audio interface"
      },
      {
        "label": "Internal I/O",
        "value": "1 x SYSFAN1 (supports PWM); 1 x SYSFAN2 (does not support PWM); 1 x 4Pin ATX CPU power supply connector; 1 x 24Pin ATX motherboard power supply connector; 1 x USB 3.0 header; 2 x M.2 NVMe PCIe 3.0 x 1 2280; 1 x SO-DIMM DDR5 single memory slot; 6 x SATA 3.0 (ASM1166); 1 x Power switch header (_FPANEL pin); 1 x Buzzer; 1 x PCIe x4 slot (PCIe 3.0 x 4 signal); 1 x USB 2.0 socket; 1 x USB 3.0 pin header; 1 x GPIO pin header; 1 x 2pin JBAT pin (Clear CMOS)"
      },
      {
        "label": "Storage",
        "value": "2 x M.2 NVMe PCIe 3.0 x 1 (2280); 6 x SATA3.0 6Gb/s (expanded via ASM1166 chip); 1 x TF card slot; 1 x eMMC storage (not populated by default, solder pads reserved)"
      }
    ],
    "image": "/assets/products/commercial/nas-motherboards/nasn150/top.webp",
    "galleryImages": [
      "/assets/products/commercial/nas-motherboards/nasn150/top.webp",
      "/assets/products/commercial/nas-motherboards/nasn150/bottom.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/commercial/nas-motherboards/nasn150/top.webp",
        "title": "NASN150 top view"
      },
      {
        "image": "/assets/products/commercial/nas-motherboards/nasn150/bottom.webp",
        "title": "NASN150 bottom view"
      }
    ],
    "sourceBrochure": "NAS主板/NASN150 brochure.pdf",
    "sourceSha256": "75eda648f832819def435367d4f5f2f0b337c6f8cc4245aa23204c6bb72f3a65"
  }
];
