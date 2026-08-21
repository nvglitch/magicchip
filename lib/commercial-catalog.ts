export type CommercialSeriesCode = 'DPC' | 'NAS';

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
export const commercialCatalog: CommercialCatalogItem[] = [
  {
    "id": "mc12",
    "name": "MC12",
    "series": "DPC",
    "tagline": "12th and 13th Gen Intel Core compact desktop PC",
    "description": "MC12 combines 12th and 13th Gen Intel Core U/P-series processor options, dual Gigabit LAN, triple-display connectivity, DDR5 memory, and dual M.2 storage in a compact aluminum enclosure.",
    "image": "/assets/products/commercial/dpc/mc12/images/main-square.png",
    "galleryImages": [
      "/assets/products/commercial/dpc/mc12/images/view-1.png",
      "/assets/products/commercial/dpc/mc12/images/view-2.png"
    ],
    "highlights": [
      "Intel Core i3-1215U / i5-1245U / i7-1255U / i5-1340P / i7-1360P",
      "2 x DDR5 SO-DIMM, up to 64GB at 4800MHz",
      "2 x Realtek RTL8111H Gigabit Ethernet",
      "2 x M.2 NVMe 2280; one slot also supports SATA"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MC12"
      },
      {
        "label": "CPU",
        "value": "Intel Core i3-1215U / i5-1245U / i7-1255U / i5-1340P / i7-1360P"
      },
      {
        "label": "Chipset",
        "value": "Intel 12th / 13th Gen Alder Lake U/P"
      },
      {
        "label": "Graphics",
        "value": "Intel UHD Graphics or Iris Xe Graphics"
      },
      {
        "label": "Video",
        "value": "DisplayPort 1.4a, HDMI 2.1, and USB Type-C"
      },
      {
        "label": "Memory",
        "value": "2 x DDR5 SO-DIMM, up to 64GB at 4800MHz"
      },
      {
        "label": "USB",
        "value": "3 x USB 3.2, 2 x USB 2.0, and 1 x USB Type-C"
      },
      {
        "label": "Material",
        "value": "Aluminum alloy"
      },
      {
        "label": "Power",
        "value": "DC 12V"
      },
      {
        "label": "Network",
        "value": "2 x Realtek RTL8111H Gigabit Ethernet"
      },
      {
        "label": "Storage",
        "value": "2 x M.2 NVMe 2280; one slot also supports SATA"
      },
      {
        "label": "Expansion",
        "value": "M.2 E-Key 2230 for Wi-Fi / CNVi"
      },
      {
        "label": "Front I/O",
        "value": "3 x USB 3.0; 1 x USB Type-C; 1 x audio output; 1 x microphone input; 1 x power button"
      },
      {
        "label": "Rear I/O",
        "value": "1 x 12V DC input; 2 x Realtek RTL8111H Gigabit Ethernet; 1 x DisplayPort 1.4a; 1 x HDMI 2.1; 1 x power button"
      },
      {
        "label": "Internal I/O",
        "value": "1 x M.2 E-Key 2230 for Wi-Fi 6; 1 x M.2 storage slot with SATA support; 2 x DDR5 SO-DIMM slots"
      },
      {
        "label": "Dimensions",
        "value": "135 x 125 x 49 mm"
      },
      {
        "label": "BIOS",
        "value": "AMI EFI BIOS"
      },
      {
        "label": "TDP",
        "value": "13W base, up to 35W turbo"
      },
      {
        "label": "System",
        "value": "Windows 10 / Windows 11 / Linux"
      },
      {
        "label": "Working Environment",
        "value": "0°C to 60°C; 0% to 95% relative humidity, non-condensing"
      }
    ],
    "operatingRange": "0°C to 60°C; 0% to 95% relative humidity, non-condensing"
  },
  {
    "id": "mcar9",
    "name": "MCAR9",
    "series": "DPC",
    "tagline": "Ryzen AI 300 compact desktop PC with USB4 and OCuLink",
    "description": "MCAR9 brings AMD Ryzen AI 300 processor options, Radeon graphics, up to 128GB DDR5, dual 2.5GbE, USB4, OCuLink, and dual NVMe storage to a compact high-performance desktop platform.",
    "image": "/assets/products/commercial/dpc/mcar9/images/main-square.png",
    "galleryImages": [
      "/assets/products/commercial/dpc/mcar9/images/view-1.png",
      "/assets/products/commercial/dpc/mcar9/images/view-2.png"
    ],
    "highlights": [
      "AMD Ryzen AI 7 PRO 360 / Ryzen AI 9 365 / Ryzen AI 9 HX 370",
      "2 x DDR5 SO-DIMM, up to 128GB at 5600MHz",
      "2 x Intel i226-V 2.5GbE",
      "2 x M.2 NVMe 2280"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCAR9"
      },
      {
        "label": "CPU",
        "value": "AMD Ryzen AI 7 PRO 360 / Ryzen AI 9 365 / Ryzen AI 9 HX 370"
      },
      {
        "label": "Chipset",
        "value": "AMD Ryzen AI 300 platform"
      },
      {
        "label": "Graphics",
        "value": "AMD Radeon 880M or Radeon 890M"
      },
      {
        "label": "Video",
        "value": "HDMI 2.1, DisplayPort 2.1, and USB4 display output"
      },
      {
        "label": "Memory",
        "value": "2 x DDR5 SO-DIMM, up to 128GB at 5600MHz"
      },
      {
        "label": "USB",
        "value": "3 x USB 3.0, 1 x USB 2.0, and 1 x USB4 40Gb/s"
      },
      {
        "label": "Power",
        "value": "19V / 6.32A, 120W"
      },
      {
        "label": "Network",
        "value": "2 x Intel i226-V 2.5GbE"
      },
      {
        "label": "Storage",
        "value": "2 x M.2 NVMe 2280"
      },
      {
        "label": "Expansion",
        "value": "OCuLink for a compatible external graphics dock"
      },
      {
        "label": "Wireless",
        "value": "Wi-Fi 6E and Bluetooth 5.3"
      },
      {
        "label": "Front I/O",
        "value": "1 x power button; 1 x reset pinhole; 2 x USB 3.0; 1 x 3.5 mm combo audio jack; 1 x USB4 40Gbps; 1 x OCuLink"
      },
      {
        "label": "Rear I/O",
        "value": "1 x 19V DC input; 2 x Intel i226-V 2.5GbE; 1 x HDMI 2.1; 1 x DisplayPort 2.1; 1 x USB 3.0; 1 x USB 2.0"
      },
      {
        "label": "Dimensions",
        "value": "132 x 132 x 50.5 mm"
      },
      {
        "label": "BIOS",
        "value": "AMI BIOS, Legacy or UEFI"
      },
      {
        "label": "TDP",
        "value": "Depends on selected processor"
      },
      {
        "label": "System",
        "value": "Windows 10 / Windows 11"
      },
      {
        "label": "Working Environment",
        "value": "0°C to 50°C; 5% to 90% relative humidity, non-condensing"
      }
    ],
    "operatingRange": "0°C to 50°C; 5% to 90% relative humidity, non-condensing"
  },
  {
    "id": "mccn51",
    "name": "MCCN51",
    "series": "DPC",
    "tagline": "Compact Intel N5100 mini PC with dual 4K display",
    "description": "MCCN51 is a practical commercial mini PC with Intel Celeron N5100, dual 4K HDMI output, up to 32GB DDR4, Wi-Fi 6, and NVMe storage for everyday office and display deployments.",
    "image": "/assets/products/commercial/dpc/mccn51/images/main-square.png",
    "galleryImages": [
      "/assets/products/commercial/dpc/mccn51/images/view-1.png",
      "/assets/products/commercial/dpc/mccn51/images/view-2.png"
    ],
    "highlights": [
      "Intel Celeron N5100",
      "2 x DDR4 SO-DIMM, up to 32GB",
      "1 x Gigabit Ethernet",
      "1 x M.2 NVMe 2280 PCIe 3.0 x4, up to 2TB"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCCN51"
      },
      {
        "label": "CPU",
        "value": "Intel Celeron N5100"
      },
      {
        "label": "Chipset",
        "value": "Intel Celeron N-series"
      },
      {
        "label": "Graphics",
        "value": "Intel UHD Graphics"
      },
      {
        "label": "Video",
        "value": "2 x HDMI 2.0, supporting dual 4K at 60Hz"
      },
      {
        "label": "Memory",
        "value": "2 x DDR4 SO-DIMM, up to 32GB"
      },
      {
        "label": "USB",
        "value": "3 x USB 3.0, 2 x USB 2.0, and 1 x Type-C"
      },
      {
        "label": "Power",
        "value": "12V / 3A, 36W adapter"
      },
      {
        "label": "Network",
        "value": "1 x Gigabit Ethernet"
      },
      {
        "label": "Storage",
        "value": "1 x M.2 NVMe 2280 PCIe 3.0 x4, up to 2TB"
      },
      {
        "label": "Wireless",
        "value": "Wi-Fi 6 and Bluetooth 5.2"
      },
      {
        "label": "Front I/O",
        "value": "3 x USB 3.0; 1 x Type-C; 1 x 3.5 mm audio jack; 1 x power button"
      },
      {
        "label": "Rear I/O",
        "value": "2 x HDMI 2.0; 2 x USB 2.0; 1 x Gigabit Ethernet; 1 x DC input"
      },
      {
        "label": "Dimensions",
        "value": "123 x 115 x 47 mm"
      },
      {
        "label": "Weight",
        "value": "Approx. 410 g"
      },
      {
        "label": "TDP",
        "value": "6W"
      },
      {
        "label": "System",
        "value": "Windows 7 / 10 / 11 64-bit; Linux 64-bit"
      },
      {
        "label": "Working Environment",
        "value": "0°C to 50°C; 5% to 90% relative humidity, non-condensing"
      }
    ],
    "operatingRange": "0°C to 50°C; 5% to 90% relative humidity, non-condensing"
  },
  {
    "id": "mcgm13",
    "name": "MCGM13",
    "series": "DPC",
    "tagline": "13th Gen Intel Core mini PC with quad-display support",
    "description": "MCGM13 combines 13th Gen Intel Core U-series performance, dual 2.5GbE, Thunderbolt 4, four-display connectivity, dual NVMe storage, and optional 2.5-inch storage for professional desktop workloads.",
    "image": "/assets/products/commercial/dpc/mcgm13/images/main-square.png",
    "galleryImages": [
      "/assets/products/commercial/dpc/mcgm13/images/view-1.png"
    ],
    "highlights": [
      "13th Gen Intel Core U-series, including Core i7-13350 / i7-1355U",
      "2 x DDR5 SO-DIMM, up to 64GB at 4800 / 5200MHz",
      "2 x 2.5GbE RJ45",
      "M.2 2280 SATA / NVMe Gen3 x4; M.2 2280 NVMe PCIe Gen4 x4; optional 2.5-inch SATA drive"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCGM13"
      },
      {
        "label": "CPU",
        "value": "13th Gen Intel Core U-series, including Core i7-13350 / i7-1355U"
      },
      {
        "label": "Chipset",
        "value": "Intel 13th Gen Raptor Lake"
      },
      {
        "label": "Graphics",
        "value": "Intel Iris Xe Graphics, supporting up to four displays"
      },
      {
        "label": "Video",
        "value": "2 x HDMI 2.0, DisplayPort 1.4, and Thunderbolt 4 Type-C"
      },
      {
        "label": "Memory",
        "value": "2 x DDR5 SO-DIMM, up to 64GB at 4800 / 5200MHz"
      },
      {
        "label": "USB",
        "value": "4 x USB 3.2 Gen 1, 2 x USB 2.0, and Thunderbolt 4 Type-C"
      },
      {
        "label": "Power",
        "value": "12V to 19V, 90W; Type-C PD supported with a compatible 96W+ supply"
      },
      {
        "label": "Network",
        "value": "2 x 2.5GbE RJ45"
      },
      {
        "label": "Storage",
        "value": "M.2 2280 SATA / NVMe Gen3 x4; M.2 2280 NVMe PCIe Gen4 x4; optional 2.5-inch SATA drive"
      },
      {
        "label": "Wireless",
        "value": "1 x M.2 2230 slot for Wi-Fi / Bluetooth"
      },
      {
        "label": "Front I/O",
        "value": "1 x power button; 1 x Thunderbolt 4 Type-C with compatible PD input; 4 x USB 3.2 Gen 1; 1 x 3.5 mm headphone jack; 1 x 3.5 mm microphone input"
      },
      {
        "label": "Rear I/O",
        "value": "1 x 12V-19V DC input; 2 x 2.5GbE RJ45; 2 x HDMI 2.0; 1 x DisplayPort 1.4; 2 x USB 2.0; 2 x Wi-Fi antenna connectors"
      },
      {
        "label": "Dimensions",
        "value": "175 x 128 x 46 mm"
      },
      {
        "label": "BIOS",
        "value": "AMI UEFI BIOS with PXE and Wake-on-LAN"
      },
      {
        "label": "TDP",
        "value": "15W"
      },
      {
        "label": "Working Environment",
        "value": "0°C to 70°C; 5% to 90% relative humidity"
      }
    ],
    "operatingRange": "0°C to 70°C; 5% to 90% relative humidity"
  },
  {
    "id": "mcmq12-13",
    "name": "MCMQ12/13",
    "series": "DPC",
    "tagline": "12th and 13th Gen Intel Core compact desktop series",
    "description": "MCMQ12/13 is a compact Intel Core platform covering 12th and 13th Gen U, P, H, and HK processor options with USB4, dual HDMI, DDR4 memory, and dual M.2 storage.",
    "image": "/assets/products/commercial/dpc/mcmq12-13/images/main-square.png",
    "galleryImages": [
      "/assets/products/commercial/dpc/mcmq12-13/images/view-1.png",
      "/assets/products/commercial/dpc/mcmq12-13/images/view-2.png"
    ],
    "highlights": [
      "12th / 13th Gen Intel Core U, P, H, and HK options",
      "2 x DDR4 SO-DIMM at 3200MHz, up to 64GB or 96GB by configuration",
      "1 x 2.5GbE RJ45",
      "M.2 NVMe 2280 and M.2 NVMe 2242, up to 2TB"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCMQ12/13"
      },
      {
        "label": "CPU",
        "value": "12th / 13th Gen Intel Core U, P, H, and HK options"
      },
      {
        "label": "Chipset",
        "value": "Intel Alder Lake platform"
      },
      {
        "label": "Graphics",
        "value": "Intel Iris Xe Graphics eligible"
      },
      {
        "label": "Video",
        "value": "2 x HDMI 2.1 and USB4 Type-C, supporting 4K at 60Hz"
      },
      {
        "label": "Memory",
        "value": "2 x DDR4 SO-DIMM at 3200MHz, up to 64GB or 96GB by configuration"
      },
      {
        "label": "USB",
        "value": "5 x USB 3.2 and 1 x USB4 Type-C"
      },
      {
        "label": "Power",
        "value": "19V / 3.78A adapter, 100-240V AC input"
      },
      {
        "label": "Network",
        "value": "1 x 2.5GbE RJ45"
      },
      {
        "label": "Storage",
        "value": "M.2 NVMe 2280 and M.2 NVMe 2242, up to 2TB"
      },
      {
        "label": "Expansion",
        "value": "M.2 E-Key Wi-Fi and Bluetooth 5.2; TPM 2.0 integrated in CPU"
      },
      {
        "label": "Front I/O",
        "value": "1 x power button; 1 x 3.5 mm audio jack; 1 x USB4 Type-C; 1 x USB 3.2"
      },
      {
        "label": "Rear I/O",
        "value": "1 x DC input; 2 x HDMI 2.1; 4 x USB 3.2; 1 x 2.5GbE RJ45"
      },
      {
        "label": "Dimensions",
        "value": "113 x 113 mm"
      },
      {
        "label": "BIOS",
        "value": "Resume by alarm, UEFI diskless boot, automatic power-on"
      },
      {
        "label": "System",
        "value": "Windows 11 / Linux"
      },
      {
        "label": "Working Environment",
        "value": "0°C to 45°C operating; -20°C to 70°C storage; 5% to 95% RH"
      }
    ],
    "operatingRange": "0°C to 45°C operating; -20°C to 70°C storage; 5% to 95% RH"
  },
  {
    "id": "mcmqr-series",
    "name": "MCMQR5/R6/R7/R8",
    "series": "DPC",
    "tagline": "AMD Ryzen 5000 to 8000 compact desktop series",
    "description": "MCMQR Series covers AMD Ryzen 5000, 6000, 7000, and 8000 processor families with model-specific DDR4 or DDR5 memory, USB4, dual HDMI, 2.5GbE, and dual M.2 storage.",
    "image": "/assets/products/commercial/dpc/mcmqr-series/images/main-square.png",
    "galleryImages": [
      "/assets/products/commercial/dpc/mcmqr-series/images/view-1.png",
      "/assets/products/commercial/dpc/mcmqr-series/images/view-2.png"
    ],
    "highlights": [
      "AMD Ryzen 5000 / 6000 / 7000 / 8000 series options",
      "2 x DDR4 or DDR5 SO-DIMM, up to 64GB or 96GB by model",
      "1 x 2.5GbE RJ45",
      "M.2 NVMe 2280 and M.2 NVMe 2242, up to 2TB"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCMQR5/R6/R7/R8"
      },
      {
        "label": "CPU",
        "value": "AMD Ryzen 5000 / 6000 / 7000 / 8000 series options"
      },
      {
        "label": "Graphics",
        "value": "AMD Radeon Graphics"
      },
      {
        "label": "Video",
        "value": "2 x HDMI 2.1 and USB4 Type-C, supporting 4K at 60Hz"
      },
      {
        "label": "Memory",
        "value": "2 x DDR4 or DDR5 SO-DIMM, up to 64GB or 96GB by model"
      },
      {
        "label": "USB",
        "value": "5 x USB 3.2 and 1 x USB4 Type-C"
      },
      {
        "label": "Power",
        "value": "19V / 3.78A adapter, 100-240V AC input"
      },
      {
        "label": "Network",
        "value": "1 x 2.5GbE RJ45"
      },
      {
        "label": "Storage",
        "value": "M.2 NVMe 2280 and M.2 NVMe 2242, up to 2TB"
      },
      {
        "label": "Expansion",
        "value": "M.2 E-Key Wi-Fi and Bluetooth 5.2; TPM 2.0 integrated in CPU"
      },
      {
        "label": "Front I/O",
        "value": "1 x power button; 1 x 3.5 mm audio jack; 1 x USB4 Type-C; 1 x USB 3.2"
      },
      {
        "label": "Rear I/O",
        "value": "1 x DC input; 2 x HDMI 2.1; 4 x USB 3.2; 1 x 2.5GbE RJ45"
      },
      {
        "label": "Dimensions",
        "value": "113 x 113 mm"
      },
      {
        "label": "BIOS",
        "value": "Resume by alarm, UEFI diskless boot, automatic power-on"
      },
      {
        "label": "System",
        "value": "Windows 11 / Linux"
      },
      {
        "label": "Working Environment",
        "value": "0°C to 45°C operating; -20°C to 70°C storage; 5% to 95% RH"
      }
    ],
    "operatingRange": "0°C to 45°C operating; -20°C to 70°C storage; 5% to 95% RH"
  },
  {
    "id": "mcn1",
    "name": "MCN1",
    "series": "DPC",
    "tagline": "Alder Lake-N compact mini PC with expandable storage",
    "description": "MCN1 is a compact Alder Lake-N commercial mini PC with dual 4K HDMI, replaceable DDR4 memory, four USB 3.2 ports, and both M.2 and 2.5-inch storage support.",
    "image": "/assets/products/commercial/dpc/mcn1/images/main-square.png",
    "galleryImages": [
      "/assets/products/commercial/dpc/mcn1/images/view-1.png",
      "/assets/products/commercial/dpc/mcn1/images/view-2.png"
    ],
    "highlights": [
      "Intel N95 / N100 / N150",
      "DDR4 SO-DIMM at 3200MHz, 8GB to 16GB",
      "1 x Realtek RTL8111 Gigabit Ethernet",
      "M.2 SATA 2280 and 2.5-inch HDD / SSD, 7 mm height"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCN1"
      },
      {
        "label": "CPU",
        "value": "Intel N95 / N100 / N150"
      },
      {
        "label": "Graphics",
        "value": "Intel UHD Graphics"
      },
      {
        "label": "Video",
        "value": "2 x HDMI, up to 4K at 60Hz"
      },
      {
        "label": "Memory",
        "value": "DDR4 SO-DIMM at 3200MHz, 8GB to 16GB"
      },
      {
        "label": "USB",
        "value": "4 x USB 3.2 at 10Gb/s"
      },
      {
        "label": "Material",
        "value": "Plastic"
      },
      {
        "label": "Power",
        "value": "DC 12V"
      },
      {
        "label": "Network",
        "value": "1 x Realtek RTL8111 Gigabit Ethernet"
      },
      {
        "label": "Storage",
        "value": "M.2 SATA 2280 and 2.5-inch HDD / SSD, 7 mm height"
      },
      {
        "label": "Expansion",
        "value": "Wi-Fi 5 / Wi-Fi 6 and Bluetooth 4.2 / 5.2"
      },
      {
        "label": "Front I/O",
        "value": "1 x power button; 1 x 3.5 mm combo audio jack with Realtek ALC897; 2 x USB 3.2; 1 x Clear CMOS button"
      },
      {
        "label": "Rear I/O",
        "value": "1 x 12V DC input; 1 x Realtek RTL8111 Gigabit Ethernet; 2 x HDMI; 2 x USB 3.2"
      },
      {
        "label": "Dimensions",
        "value": "127 x 145 x 38 mm"
      },
      {
        "label": "Weight",
        "value": "315 g"
      },
      {
        "label": "BIOS",
        "value": "RTC scheduled boot, automatic power-on, Wake-on-LAN"
      },
      {
        "label": "TDP",
        "value": "Depends on selected processor"
      },
      {
        "label": "System",
        "value": "Windows 7 / 8 / 10; Linux"
      },
      {
        "label": "Working Environment",
        "value": "0°C to 40°C operating; -20°C to 60°C storage; up to 90% RH at 40°C, non-condensing"
      }
    ],
    "operatingRange": "0°C to 40°C operating; -20°C to 60°C storage; up to 90% RH at 40°C, non-condensing"
  },
  {
    "id": "mcn2",
    "name": "MCN2",
    "series": "DPC",
    "tagline": "Compact Alder Lake-N mini PC with dual HDMI",
    "description": "MCN2 delivers Alder Lake-N processing, dual 4K HDMI output, replaceable DDR4 memory, four USB 3.2 ports, and flexible M.2 plus 2.5-inch storage in a compact enclosure.",
    "image": "/assets/products/commercial/dpc/mcn2/images/main-square.png",
    "galleryImages": [
      "/assets/products/commercial/dpc/mcn2/images/view-1.png",
      "/assets/products/commercial/dpc/mcn2/images/view-2.png"
    ],
    "highlights": [
      "Intel N95 / N100 / N150",
      "DDR4 SO-DIMM at 3200MHz, 8GB to 16GB",
      "1 x Realtek RTL8111 Gigabit Ethernet",
      "M.2 SATA 2280 and 2.5-inch HDD / SSD, 7 mm height"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCN2"
      },
      {
        "label": "CPU",
        "value": "Intel N95 / N100 / N150"
      },
      {
        "label": "Graphics",
        "value": "Intel UHD Graphics"
      },
      {
        "label": "Video",
        "value": "2 x HDMI, up to 4K at 60Hz"
      },
      {
        "label": "Memory",
        "value": "DDR4 SO-DIMM at 3200MHz, 8GB to 16GB"
      },
      {
        "label": "USB",
        "value": "4 x USB 3.2 at 10Gb/s"
      },
      {
        "label": "Material",
        "value": "Plastic"
      },
      {
        "label": "Power",
        "value": "DC 12V"
      },
      {
        "label": "Network",
        "value": "1 x Realtek RTL8111 Gigabit Ethernet"
      },
      {
        "label": "Storage",
        "value": "M.2 SATA 2280 and 2.5-inch HDD / SSD, 7 mm height"
      },
      {
        "label": "Expansion",
        "value": "Wi-Fi 5 and Bluetooth 4.2"
      },
      {
        "label": "Front I/O",
        "value": "1 x power button; 1 x 3.5 mm combo audio jack with Realtek ALC897; 2 x USB 3.2; 1 x Clear CMOS button"
      },
      {
        "label": "Rear I/O",
        "value": "1 x 12V DC input; 1 x Realtek RTL8111 Gigabit Ethernet; 2 x HDMI; 2 x USB 3.2"
      },
      {
        "label": "Dimensions",
        "value": "115 x 113 x 40 mm"
      },
      {
        "label": "Weight",
        "value": "305 g"
      },
      {
        "label": "BIOS",
        "value": "RTC scheduled boot, automatic power-on, Wake-on-LAN"
      },
      {
        "label": "TDP",
        "value": "Depends on selected processor"
      },
      {
        "label": "System",
        "value": "Windows 7 / 8 / 10; Linux"
      },
      {
        "label": "Working Environment",
        "value": "0°C to 40°C operating; -20°C to 60°C storage; up to 90% RH at 40°C, non-condensing"
      }
    ],
    "operatingRange": "0°C to 40°C operating; -20°C to 60°C storage; up to 90% RH at 40°C, non-condensing"
  },
  {
    "id": "mcn5",
    "name": "MCN5",
    "series": "DPC",
    "tagline": "90 mm Alder Lake-N mini PC with LPDDR5",
    "description": "MCN5 condenses Alder Lake-N processor options, LPDDR5 memory, three display outputs, dual Gigabit LAN, and M.2 storage into a 90 mm square commercial mini PC.",
    "image": "/assets/products/commercial/dpc/mcn5/images/main-square.png",
    "galleryImages": [
      "/assets/products/commercial/dpc/mcn5/images/view-1.png",
      "/assets/products/commercial/dpc/mcn5/images/view-2.png"
    ],
    "highlights": [
      "Intel N95 / N100 / N97 / N150 / N200 / N305",
      "LPDDR5 4800MHz, 8GB / 12GB / 16GB",
      "2 x Realtek RTL8111 Gigabit Ethernet",
      "M.2 2242 SATA / NVMe PCIe 3.0, up to 2TB"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCN5"
      },
      {
        "label": "CPU",
        "value": "Intel N95 / N100 / N97 / N150 / N200 / N305"
      },
      {
        "label": "Graphics",
        "value": "Intel UHD Graphics"
      },
      {
        "label": "Video",
        "value": "2 x HDMI 2.0 and DisplayPort 1.4"
      },
      {
        "label": "Memory",
        "value": "LPDDR5 4800MHz, 8GB / 12GB / 16GB"
      },
      {
        "label": "USB",
        "value": "3 x USB 3.2 at 10Gb/s and 2 x Type-C"
      },
      {
        "label": "Material",
        "value": "Plastic"
      },
      {
        "label": "Power",
        "value": "DC 12V"
      },
      {
        "label": "Network",
        "value": "2 x Realtek RTL8111 Gigabit Ethernet"
      },
      {
        "label": "Storage",
        "value": "M.2 2242 SATA / NVMe PCIe 3.0, up to 2TB"
      },
      {
        "label": "Expansion",
        "value": "Wi-Fi 5 / Wi-Fi 6 and Bluetooth 4.2 / 5.2"
      },
      {
        "label": "Dimensions",
        "value": "90 x 90 x 38.5 mm"
      },
      {
        "label": "Weight",
        "value": "190 g"
      },
      {
        "label": "BIOS",
        "value": "RTC scheduled boot, automatic power-on, Wake-on-LAN"
      },
      {
        "label": "TDP",
        "value": "Depends on selected processor"
      },
      {
        "label": "System",
        "value": "Windows 7 / 8 / 10; Linux"
      },
      {
        "label": "Working Environment",
        "value": "0°C to 40°C operating; -20°C to 60°C storage; up to 90% RH at 40°C, non-condensing"
      }
    ],
    "operatingRange": "0°C to 40°C operating; -20°C to 60°C storage; up to 90% RH at 40°C, non-condensing"
  },
  {
    "id": "mcn6",
    "name": "MCN6",
    "series": "DPC",
    "tagline": "Slim Alder Lake-N mini PC with dual 4K HDMI",
    "description": "MCN6 is a slim commercial mini PC with a broad Alder Lake-N processor range, replaceable DDR4 memory, dual 4K HDMI, four USB 3.2 ports, and M.2 storage.",
    "image": "/assets/products/commercial/dpc/mcn6/images/main-square.png",
    "galleryImages": [
      "/assets/products/commercial/dpc/mcn6/images/view-1.png",
      "/assets/products/commercial/dpc/mcn6/images/view-2.png"
    ],
    "highlights": [
      "Intel N95 / N100 / N97 / N150 / N200 / N300",
      "DDR4 SO-DIMM at 3200MHz, 8GB to 16GB",
      "1 x Realtek RTL8111 Gigabit Ethernet",
      "M.2 2242 SATA / NVMe PCIe 3.0, up to 2TB"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCN6"
      },
      {
        "label": "CPU",
        "value": "Intel N95 / N100 / N97 / N150 / N200 / N300"
      },
      {
        "label": "Graphics",
        "value": "Intel UHD Graphics"
      },
      {
        "label": "Video",
        "value": "2 x HDMI 2.0, up to 4K at 60Hz"
      },
      {
        "label": "Memory",
        "value": "DDR4 SO-DIMM at 3200MHz, 8GB to 16GB"
      },
      {
        "label": "USB",
        "value": "4 x USB 3.2 at 10Gb/s"
      },
      {
        "label": "Material",
        "value": "Plastic"
      },
      {
        "label": "Power",
        "value": "DC 12V"
      },
      {
        "label": "Network",
        "value": "1 x Realtek RTL8111 Gigabit Ethernet"
      },
      {
        "label": "Storage",
        "value": "M.2 2242 SATA / NVMe PCIe 3.0, up to 2TB"
      },
      {
        "label": "Expansion",
        "value": "Wi-Fi 5 / Wi-Fi 6 and Bluetooth 4.2 / 5.2"
      },
      {
        "label": "Dimensions",
        "value": "124.5 x 111 x 33 mm"
      },
      {
        "label": "Weight",
        "value": "215 g"
      },
      {
        "label": "BIOS",
        "value": "RTC scheduled boot, automatic power-on, Wake-on-LAN"
      },
      {
        "label": "TDP",
        "value": "Depends on selected processor"
      },
      {
        "label": "System",
        "value": "Windows 7 / 8 / 10; Linux"
      },
      {
        "label": "Working Environment",
        "value": "0°C to 40°C operating; -20°C to 60°C storage; up to 90% RH at 40°C, non-condensing"
      }
    ],
    "operatingRange": "0°C to 40°C operating; -20°C to 60°C storage; up to 90% RH at 40°C, non-condensing"
  },
  {
    "id": "mcn7a",
    "name": "MCN7A",
    "series": "DPC",
    "tagline": "Intel Core performance mini PC with USB4",
    "description": "MCN7A combines Intel Alder Lake Core processor options, DDR5 memory, USB4, triple-display connectivity, dual NVMe, and optional SATA storage for performance-oriented commercial deployments.",
    "image": "/assets/products/commercial/dpc/mcn7a/images/main-square.png",
    "galleryImages": [
      "/assets/products/commercial/dpc/mcn7a/images/view-1.png"
    ],
    "highlights": [
      "Intel Core i3-1215U / i5-1235U / i5-12650H",
      "2 x DDR5 SO-DIMM at 4800MHz, up to 64GB",
      "1 x Intel 2.5GbE",
      "2 x M.2 NVMe 2280 and 1 x SATA 3.0 for HDD / SSD"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCN7A"
      },
      {
        "label": "CPU",
        "value": "Intel Core i3-1215U / i5-1235U / i5-12650H"
      },
      {
        "label": "Chipset",
        "value": "Intel Alder Lake / Raptor Lake U, P, and H platforms"
      },
      {
        "label": "Graphics",
        "value": "Intel Iris Xe Graphics"
      },
      {
        "label": "Video",
        "value": "HDMI, DisplayPort, and USB4 Type-C, supporting 4K at 60Hz"
      },
      {
        "label": "Memory",
        "value": "2 x DDR5 SO-DIMM at 4800MHz, up to 64GB"
      },
      {
        "label": "USB",
        "value": "2 x USB 2.0, 2 x USB 3.0, 1 x USB4, and 1 x Type-C data port"
      },
      {
        "label": "Material",
        "value": "Plastic and metal"
      },
      {
        "label": "Power",
        "value": "DC 19V, 5.26A to 6.32A"
      },
      {
        "label": "Network",
        "value": "1 x Intel 2.5GbE"
      },
      {
        "label": "Storage",
        "value": "2 x M.2 NVMe 2280 and 1 x SATA 3.0 for HDD / SSD"
      },
      {
        "label": "Expansion",
        "value": "Mini PCIe for Wi-Fi / Bluetooth"
      },
      {
        "label": "Front I/O",
        "value": "1 x 3.5 mm audio jack; 2 x USB 3.2; 1 x Type-C data port"
      },
      {
        "label": "Rear I/O",
        "value": "2 x USB 2.0; 1 x HDMI; 1 x DisplayPort; 1 x USB4; 1 x 2.5GbE RJ45; 1 x DC input"
      },
      {
        "label": "Internal I/O",
        "value": "1 x system-fan connector; 1 x Mini PCIe half-size slot for Wi-Fi / Bluetooth; 2 x M.2 2280 NVMe slots; 1 x SATA 3.0 connector; 2 x DDR5 SO-DIMM slots"
      },
      {
        "label": "Dimensions",
        "value": "136 x 123 x 51 mm"
      },
      {
        "label": "BIOS",
        "value": "AMI EFI BIOS"
      },
      {
        "label": "TDP",
        "value": "Depends on selected processor"
      },
      {
        "label": "System",
        "value": "Windows 11 64-bit / Ubuntu / CentOS"
      },
      {
        "label": "Working Environment",
        "value": "0°C to 60°C; 10% to 90% relative humidity, non-condensing"
      }
    ],
    "operatingRange": "0°C to 60°C; 10% to 90% relative humidity, non-condensing"
  },
  {
    "id": "mcn7p",
    "name": "MCN7P",
    "series": "DPC",
    "tagline": "AMD Ryzen performance mini PC with USB4 and dual 2.5GbE",
    "description": "MCN7P pairs AMD Ryzen HS processor options with Radeon graphics, DDR5, USB4, dual 2.5GbE, dual NVMe, and optional SATA storage for demanding commercial desktops.",
    "image": "/assets/products/commercial/dpc/mcn7p/images/main-square.png",
    "galleryImages": [
      "/assets/products/commercial/dpc/mcn7p/images/view-1.png"
    ],
    "highlights": [
      "AMD Ryzen 7 7735HS / 7840HS / 7940HS",
      "2 x DDR5 SO-DIMM at 4800 / 5600MHz, up to 64GB",
      "2 x Intel 2.5GbE",
      "2 x M.2 NVMe 2280 PCIe 4.0 x4 and 1 x SATA 3.0 for HDD / SSD"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCN7P"
      },
      {
        "label": "CPU",
        "value": "AMD Ryzen 7 7735HS / 7840HS / 7940HS"
      },
      {
        "label": "Chipset",
        "value": "AMD Rembrandt / Phoenix U, H, and HS platforms"
      },
      {
        "label": "Graphics",
        "value": "AMD Radeon 680M Graphics"
      },
      {
        "label": "Video",
        "value": "HDMI, DisplayPort, and USB4 Type-C, supporting 4K at 60Hz"
      },
      {
        "label": "Memory",
        "value": "2 x DDR5 SO-DIMM at 4800 / 5600MHz, up to 64GB"
      },
      {
        "label": "USB",
        "value": "2 x USB 2.0, 2 x USB 3.0, 1 x USB4, and 1 x Type-C data port"
      },
      {
        "label": "Material",
        "value": "Plastic and metal"
      },
      {
        "label": "Power",
        "value": "DC 19V, 5.26A to 6.32A"
      },
      {
        "label": "Network",
        "value": "2 x Intel 2.5GbE"
      },
      {
        "label": "Storage",
        "value": "2 x M.2 NVMe 2280 PCIe 4.0 x4 and 1 x SATA 3.0 for HDD / SSD"
      },
      {
        "label": "Expansion",
        "value": "Mini PCIe for Wi-Fi / Bluetooth"
      },
      {
        "label": "Front I/O",
        "value": "1 x 3.5 mm audio jack; 2 x USB 3.2; 1 x Type-C data port"
      },
      {
        "label": "Rear I/O",
        "value": "2 x USB 2.0; 1 x HDMI; 1 x DisplayPort; 1 x USB4; 2 x 2.5GbE RJ45; 1 x DC input"
      },
      {
        "label": "Internal I/O",
        "value": "1 x system-fan connector; 1 x Mini PCIe half-size slot for Wi-Fi / Bluetooth; 2 x M.2 2280 NVMe slots; 1 x SATA 3.0 connector; 2 x DDR5 SO-DIMM slots"
      },
      {
        "label": "Dimensions",
        "value": "136 x 123 x 51 mm"
      },
      {
        "label": "BIOS",
        "value": "AMI EFI BIOS"
      },
      {
        "label": "TDP",
        "value": "Depends on selected processor"
      },
      {
        "label": "System",
        "value": "Windows 11 64-bit / Ubuntu / CentOS"
      },
      {
        "label": "Working Environment",
        "value": "0°C to 60°C; 10% to 90% relative humidity, non-condensing"
      }
    ],
    "operatingRange": "0°C to 60°C; 10% to 90% relative humidity, non-condensing"
  },
  {
    "id": "mcnuc-1",
    "name": "MCNUC-1",
    "series": "DPC",
    "tagline": "Legacy Intel Core compact desktop PC",
    "description": "MCNUC-1 provides Intel Haswell and Broadwell Core options, VGA and HDMI output, eight USB ports, Gigabit LAN, and mSATA plus 2.5-inch storage in an aluminum enclosure.",
    "image": "/assets/products/commercial/dpc/mcnuc-1/images/main-square.png",
    "galleryImages": [
      "/assets/products/commercial/dpc/mcnuc-1/images/view-1.png",
      "/assets/products/commercial/dpc/mcnuc-1/images/view-2.png",
      "/assets/products/commercial/dpc/mcnuc-1/images/view-3.png"
    ],
    "highlights": [
      "Intel Core i5-4005U / 4200U / 5005U / 5200U",
      "DDR3L SO-DIMM at 1333 / 1600MHz",
      "1 x Realtek RTL8111G/H Gigabit Ethernet",
      "1 x mSATA and 1 x 2.5-inch SATA 3.0"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCNUC-1"
      },
      {
        "label": "CPU",
        "value": "Intel Core i5-4005U / 4200U / 5005U / 5200U"
      },
      {
        "label": "Chipset",
        "value": "Intel Haswell / Broadwell"
      },
      {
        "label": "Graphics",
        "value": "Intel HD 4400 / 5500 Graphics"
      },
      {
        "label": "Video",
        "value": "VGA and HDMI"
      },
      {
        "label": "Memory",
        "value": "DDR3L SO-DIMM at 1333 / 1600MHz"
      },
      {
        "label": "USB",
        "value": "4 x USB 2.0 and 4 x USB 3.0"
      },
      {
        "label": "Material",
        "value": "Aluminum alloy"
      },
      {
        "label": "Power",
        "value": "DC 12V"
      },
      {
        "label": "Network",
        "value": "1 x Realtek RTL8111G/H Gigabit Ethernet"
      },
      {
        "label": "Storage",
        "value": "1 x mSATA and 1 x 2.5-inch SATA 3.0"
      },
      {
        "label": "Front I/O",
        "value": "2 x USB 2.0; 4 x USB 3.0; 1 x power button"
      },
      {
        "label": "Rear I/O",
        "value": "1 x 12V DC input; 2 x USB 2.0; 1 x Realtek RTL8111G/H Gigabit Ethernet; 1 x HDMI; 1 x VGA; 1 x audio port"
      },
      {
        "label": "Internal I/O",
        "value": "1 x DDR3 SO-DIMM slot; 1 x mSATA slot; 1 x 2.5-inch SATA 3.0 connector"
      },
      {
        "label": "Dimensions",
        "value": "126 x 126 x 52 mm"
      },
      {
        "label": "BIOS",
        "value": "Diskless boot, Wake-on-LAN, automatic and scheduled power-on"
      },
      {
        "label": "TDP",
        "value": "Depends on selected processor"
      },
      {
        "label": "System",
        "value": "Windows 7 / Windows 10 / Linux"
      },
      {
        "label": "Working Environment",
        "value": "-20°C to 55°C; 5% to 95% relative humidity, non-condensing"
      }
    ],
    "operatingRange": "-20°C to 55°C; 5% to 95% relative humidity, non-condensing"
  },
  {
    "id": "mcnuc-2",
    "name": "MCNUC-2",
    "series": "DPC",
    "tagline": "Dual-2.5GbE Intel Core compact desktop PC",
    "description": "MCNUC-2 combines Intel Whiskey Lake-U or Comet Lake-U processing, triple-display output, dual 2.5GbE, DDR4 memory, and M.2 plus 2.5-inch storage.",
    "image": "/assets/products/commercial/dpc/mcnuc-2/images/main-square.png",
    "galleryImages": [
      "/assets/products/commercial/dpc/mcnuc-2/images/view-1.png",
      "/assets/products/commercial/dpc/mcnuc-2/images/view-2.png"
    ],
    "highlights": [
      "Intel Core i5-8265U / i5-10210U",
      "DDR4 SO-DIMM, up to 32GB",
      "2 x Intel i226-V 2.5GbE",
      "M.2 2280 NVMe / NGFF and 2.5-inch SATA 3.0"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCNUC-2"
      },
      {
        "label": "CPU",
        "value": "Intel Core i5-8265U / i5-10210U"
      },
      {
        "label": "Chipset",
        "value": "Intel Whiskey Lake-U / Comet Lake-U"
      },
      {
        "label": "Graphics",
        "value": "Intel UHD Graphics 620"
      },
      {
        "label": "Video",
        "value": "USB Type-C, HDMI, and DisplayPort"
      },
      {
        "label": "Memory",
        "value": "DDR4 SO-DIMM, up to 32GB"
      },
      {
        "label": "USB",
        "value": "6 x USB 2.0 and 2 x USB 3.0"
      },
      {
        "label": "Material",
        "value": "Aluminum alloy"
      },
      {
        "label": "Power",
        "value": "DC 12V"
      },
      {
        "label": "Network",
        "value": "2 x Intel i226-V 2.5GbE"
      },
      {
        "label": "Storage",
        "value": "M.2 2280 NVMe / NGFF and 2.5-inch SATA 3.0"
      },
      {
        "label": "Front I/O",
        "value": "1 x dual-function audio jack; 6 x USB 2.0; 1 x power button"
      },
      {
        "label": "Rear I/O",
        "value": "1 x 12V DC input; 2 x USB 2.0; 2 x Intel i226-V 2.5GbE; 1 x Type-C; 1 x HDMI; 1 x DisplayPort"
      },
      {
        "label": "Internal I/O",
        "value": "1 x DDR4 SO-DIMM slot; 1 x M.2 2280 M-Key slot; 1 x 2.5-inch SATA 3.0 connector"
      },
      {
        "label": "Dimensions",
        "value": "138 x 138 x 51.6 mm"
      },
      {
        "label": "BIOS",
        "value": "Diskless boot, Wake-on-LAN, automatic and scheduled power-on"
      },
      {
        "label": "TDP",
        "value": "Depends on selected processor"
      },
      {
        "label": "System",
        "value": "Windows 7 / Windows 10 / Linux"
      },
      {
        "label": "Working Environment",
        "value": "-20°C to 55°C; 5% to 95% relative humidity, non-condensing"
      }
    ],
    "operatingRange": "-20°C to 55°C; 5% to 95% relative humidity, non-condensing"
  },
  {
    "id": "mcnuc-3",
    "name": "MCNUC-3",
    "series": "DPC",
    "tagline": "12th Gen Intel Core compact PC with 2.5GbE and 4G/5G expansion",
    "description": "MCNUC-3 brings 12th Gen Intel Core options, four-display connectivity, dual 2.5GbE, NVMe plus SATA storage, Wi-Fi, and 4G/5G expansion to a compact aluminum system.",
    "image": "/assets/products/commercial/dpc/mcnuc-3/images/main-square.png",
    "galleryImages": [
      "/assets/products/commercial/dpc/mcnuc-3/images/view-1.png",
      "/assets/products/commercial/dpc/mcnuc-3/images/view-2.png"
    ],
    "highlights": [
      "Intel Core i3-1215U / i5-1245U / i7-1255U",
      "DDR4 SO-DIMM at 2666 / 3200MHz, up to 32GB",
      "2 x Intel i226-V 2.5GbE",
      "M.2 2280 NVMe / NGFF and 2.5-inch SATA 3.0"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCNUC-3"
      },
      {
        "label": "CPU",
        "value": "Intel Core i3-1215U / i5-1245U / i7-1255U"
      },
      {
        "label": "Chipset",
        "value": "12th Gen Intel Core mobile platform"
      },
      {
        "label": "Graphics",
        "value": "Intel HD Graphics"
      },
      {
        "label": "Video",
        "value": "2 x HDMI, DisplayPort, and USB Type-C display output"
      },
      {
        "label": "Memory",
        "value": "DDR4 SO-DIMM at 2666 / 3200MHz, up to 32GB"
      },
      {
        "label": "USB",
        "value": "6 x USB 2.0, 2 x USB 3.0, and 1 x Type-C"
      },
      {
        "label": "Material",
        "value": "Aluminum alloy"
      },
      {
        "label": "Power",
        "value": "DC 12V"
      },
      {
        "label": "Network",
        "value": "2 x Intel i226-V 2.5GbE"
      },
      {
        "label": "Storage",
        "value": "M.2 2280 NVMe / NGFF and 2.5-inch SATA 3.0"
      },
      {
        "label": "Expansion",
        "value": "M.2 E-Key Wi-Fi; M.2 B-Key 4G/5G; SIM slot"
      },
      {
        "label": "Front I/O",
        "value": "1 x combo audio jack; 6 x USB 2.0; 2 x USB 3.0; 1 x HDMI; 1 x power button"
      },
      {
        "label": "Rear I/O",
        "value": "1 x 12V DC input; 1 x full-featured Type-C; 2 x USB 3.0; 2 x Intel i226-V 2.5GbE; 1 x HDMI; 1 x DisplayPort"
      },
      {
        "label": "Internal I/O",
        "value": "1 x DDR4 SO-DIMM slot; 1 x M.2 2280 M-Key slot; 1 x 2.5-inch SATA 3.0 connector; 1 x M.2 E-Key 2230 slot for Wi-Fi; 1 x M.2 B-Key slot for 4G/5G; 1 x SIM slot"
      },
      {
        "label": "Dimensions",
        "value": "126 x 126 x 47 mm"
      },
      {
        "label": "BIOS",
        "value": "Diskless boot, Wake-on-LAN, automatic and scheduled power-on"
      },
      {
        "label": "TDP",
        "value": "Depends on selected processor"
      },
      {
        "label": "System",
        "value": "Windows 7 / Windows 10 / Linux"
      },
      {
        "label": "Working Environment",
        "value": "-20°C to 55°C; 5% to 95% relative humidity, non-condensing"
      }
    ],
    "operatingRange": "-20°C to 55°C; 5% to 95% relative humidity, non-condensing"
  },
  {
    "id": "mcvx4",
    "name": "MCVX4",
    "series": "DPC",
    "tagline": "Desktop-class Intel Pentium compact PC",
    "description": "MCVX4 uses an Intel H610 platform with a desktop-class Pentium Gold processor, dual-display output, up to 64GB DDR4, NVMe, dual SATA, and Wi-Fi expansion.",
    "image": "/assets/products/commercial/dpc/mcvx4/images/main-square.png",
    "galleryImages": [
      "/assets/products/commercial/dpc/mcvx4/images/view-1.png",
      "/assets/products/commercial/dpc/mcvx4/images/view-2.png"
    ],
    "highlights": [
      "Intel Pentium Gold G7400, 2 cores / 4 threads, up to 3.7GHz",
      "2 x DDR4 SO-DIMM at 2666 / 3200MHz, up to 64GB",
      "1 x Gigabit Ethernet",
      "M.2 2280 NVMe / NGFF and 2 x SATA 3.0"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCVX4"
      },
      {
        "label": "CPU",
        "value": "Intel Pentium Gold G7400, 2 cores / 4 threads, up to 3.7GHz"
      },
      {
        "label": "Chipset",
        "value": "Intel H610"
      },
      {
        "label": "Graphics",
        "value": "Intel UHD Graphics 710"
      },
      {
        "label": "Video",
        "value": "HDMI and DisplayPort"
      },
      {
        "label": "Memory",
        "value": "2 x DDR4 SO-DIMM at 2666 / 3200MHz, up to 64GB"
      },
      {
        "label": "USB",
        "value": "4 x USB 2.0 and 4 x USB 3.0"
      },
      {
        "label": "Material",
        "value": "Aluminum alloy"
      },
      {
        "label": "Power",
        "value": "DC 12V / 19V"
      },
      {
        "label": "Network",
        "value": "1 x Gigabit Ethernet"
      },
      {
        "label": "Storage",
        "value": "M.2 2280 NVMe / NGFF and 2 x SATA 3.0"
      },
      {
        "label": "Expansion",
        "value": "M.2 E-Key 2230 for Wi-Fi"
      },
      {
        "label": "Front I/O",
        "value": "1 x audio / microphone combo jack; 4 x USB 2.0; 1 x power button"
      },
      {
        "label": "Rear I/O",
        "value": "1 x 12V / 19V DC input; 1 x HDMI; 1 x DisplayPort; 4 x USB 3.0; 1 x Gigabit Ethernet"
      },
      {
        "label": "Internal I/O",
        "value": "2 x DDR4 SO-DIMM slots; 1 x M.2 2280 M-Key slot; 2 x SATA 3.0 connectors; 1 x M.2 E-Key 2230 slot for Wi-Fi"
      },
      {
        "label": "Dimensions",
        "value": "200 x 190 x 40 mm"
      },
      {
        "label": "BIOS",
        "value": "UEFI, Wake-on-LAN, automatic and scheduled power-on"
      },
      {
        "label": "TDP",
        "value": "46W CPU; approximately 40W to 60W system"
      },
      {
        "label": "System",
        "value": "Windows 10 / Windows 11 / Ubuntu"
      },
      {
        "label": "Working Environment",
        "value": "-20°C to 55°C; 5% to 95% relative humidity, non-condensing"
      }
    ],
    "operatingRange": "-20°C to 55°C; 5% to 95% relative humidity, non-condensing"
  },
  {
    "id": "mcnas100",
    "name": "MCNAS100",
    "series": "NAS",
    "tagline": "Compact NAS platform with dual 10GbE SFP+ and four 2.5GbE ports",
    "description": "MCNAS100 combines Alder Lake-N processing, DDR5 memory, dual 10GbE SFP+, four 2.5GbE ports, NVMe and SATA storage, and PCIe expansion for compact storage and high-speed network deployments.",
    "image": "/assets/products/commercial/nas/mcnas100/images/main-square.png",
    "galleryImages": [
      "/assets/products/commercial/nas/mcnas100/images/view-1.png",
      "/assets/products/commercial/nas/mcnas100/images/view-2.png"
    ],
    "highlights": [
      "Intel N100 / N200 / Core i3-N305",
      "DDR5 SO-DIMM, up to 32GB at 4800 / 5200 / 5600MHz",
      "2 x Intel 82599ES 10GbE SFP+ and 4 x Intel i226-V 2.5GbE",
      "M.2 NVMe PCIe 3.0 x1, SATA 3.0, and TF card"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCNAS100"
      },
      {
        "label": "CPU",
        "value": "Intel N100 / N200 / Core i3-N305"
      },
      {
        "label": "Chipset",
        "value": "Intel Alder Lake-N"
      },
      {
        "label": "Graphics",
        "value": "Intel UHD Graphics"
      },
      {
        "label": "Video",
        "value": "HDMI 2.0, DisplayPort 1.2, and USB Type-C"
      },
      {
        "label": "Memory",
        "value": "DDR5 SO-DIMM, up to 32GB at 4800 / 5200 / 5600MHz"
      },
      {
        "label": "USB",
        "value": "1 x USB 3.0 and 5 x USB 2.0"
      },
      {
        "label": "Material",
        "value": "Aluminum alloy"
      },
      {
        "label": "Power",
        "value": "DC 12V"
      },
      {
        "label": "Network",
        "value": "2 x Intel 82599ES 10GbE SFP+ and 4 x Intel i226-V 2.5GbE"
      },
      {
        "label": "Storage",
        "value": "M.2 NVMe PCIe 3.0 x1, SATA 3.0, and TF card"
      },
      {
        "label": "Expansion",
        "value": "PCIe x8 slot with PCIe 3.0 x4 signal; Mini PCIe; GPIO; COM; TPM; SIM"
      },
      {
        "label": "Front I/O",
        "value": "1 x power button; 1 x Type-C; 1 x audio port; 1 x HDMI 2.0; 1 x USB 3.0; 1 x DisplayPort 1.2; 3 x USB 2.0; 1 x restart button; 1 x SIM slot; 1 x TF card slot"
      },
      {
        "label": "Rear I/O",
        "value": "2 x USB 2.0; 1 x 12V DC input; 4 x 2.5GbE RJ45; 2 x 10GbE SFP+"
      },
      {
        "label": "Internal I/O",
        "value": "1 x buzzer; 1 x TPM header; 1 x debug header; 2 x DDR5 memory slots; 1 x Mini PCIe slot with USB 2.0 signal; 1 x Phoenix terminal power connector; 1 x front-panel header; 1 x motherboard battery connector; 1 x jumper header; 1 x PCIe x8 slot with PCIe 3.0 x4 signal; 2 x USB 2.0 headers; 1 x M.2 NVMe slot with PCIe 3.0 x1 signal; 1 x SATA 3.0 connector; 1 x GPIO header; 1 x SATA power connector; 1 x COM header"
      },
      {
        "label": "Dimensions",
        "value": "131.7 x 155 x 60 mm"
      },
      {
        "label": "BIOS",
        "value": "AMI EFI BIOS with automatic power-on, Wake-on-LAN, GPIO, and PXE"
      },
      {
        "label": "TDP",
        "value": "6W base, up to 15W turbo"
      },
      {
        "label": "System",
        "value": "Windows 10 / Windows 11 / Linux"
      },
      {
        "label": "Working Environment",
        "value": "0°C to 70°C; 5% to 85% relative humidity, non-condensing"
      }
    ],
    "operatingRange": "0°C to 70°C; 5% to 85% relative humidity, non-condensing"
  },
  {
    "id": "mcnas12",
    "name": "MCNAS12",
    "series": "NAS",
    "tagline": "Intel Core NAS platform with four 2.5GbE and dual 10GbE SFP+",
    "description": "MCNAS12 combines 12th and 13th Gen Intel processor options, DDR5 memory, four 2.5GbE ports, dual 10GbE SFP+, NVMe, dual SATA, and triple-display output for compact storage and network services.",
    "image": "/assets/products/commercial/nas/mcnas12/images/main-square.png",
    "galleryImages": [
      "/assets/products/commercial/nas/mcnas12/images/view-1.png"
    ],
    "highlights": [
      "Intel Core i5-1240P / Pentium Gold 8505 / Intel U300E",
      "2 x DDR5 SO-DIMM, up to 64GB at 5600MHz",
      "4 x Intel i226 2.5GbE and 2 x Intel 82599ES 10GbE SFP+",
      "M.2 NVMe PCIe 3.0 x4 and 2 x external SATA 3.0"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCNAS12"
      },
      {
        "label": "CPU",
        "value": "Intel Core i5-1240P / Pentium Gold 8505 / Intel U300E"
      },
      {
        "label": "Chipset",
        "value": "Intel Alder Lake platform"
      },
      {
        "label": "Graphics",
        "value": "Intel Iris Xe Graphics"
      },
      {
        "label": "Video",
        "value": "DisplayPort, 2 x HDMI, and Type-C 3.1"
      },
      {
        "label": "Memory",
        "value": "2 x DDR5 SO-DIMM, up to 64GB at 5600MHz"
      },
      {
        "label": "USB",
        "value": "USB 3.2 Gen 1, Type-C 3.1, and 2 x USB 2.0"
      },
      {
        "label": "Material",
        "value": "Aluminum alloy"
      },
      {
        "label": "Power",
        "value": "DC 12V to 19V"
      },
      {
        "label": "Network",
        "value": "4 x Intel i226 2.5GbE and 2 x Intel 82599ES 10GbE SFP+"
      },
      {
        "label": "Storage",
        "value": "M.2 NVMe PCIe 3.0 x4 and 2 x external SATA 3.0"
      },
      {
        "label": "Expansion",
        "value": "TF card and F_PANEL header"
      },
      {
        "label": "Front I/O",
        "value": "1 x power input; 4 x 2.5GbE RJ45; 2 x 10GbE SFP+; 1 x RJ45 COM"
      },
      {
        "label": "Rear I/O",
        "value": "1 x Type-C 3.1; 2 x USB 2.0; 1 x USB 3.2; 2 x HDMI with audio; 1 x DisplayPort; 1 x power button; 1 x TF card slot; 1 x antenna connector; 1 x audio jack"
      },
      {
        "label": "Internal I/O",
        "value": "2 x SATA 3.0 connectors; 1 x M.2 connector; 1 x front-panel header"
      },
      {
        "label": "Dimensions",
        "value": "145.4 x 131.7 x 60 mm"
      },
      {
        "label": "BIOS",
        "value": "AMI EFI BIOS"
      },
      {
        "label": "TDP",
        "value": "15W to 28W"
      },
      {
        "label": "System",
        "value": "Windows 10 / Windows 11 / Linux"
      },
      {
        "label": "Working Environment",
        "value": "0°C to 60°C; 0% to 95% relative humidity, non-condensing"
      }
    ],
    "operatingRange": "0°C to 60°C; 0% to 95% relative humidity, non-condensing"
  },
  {
    "id": "mcnash10",
    "name": "MCNASH10",
    "series": "NAS",
    "tagline": "Expandable Intel N100 NAS platform with optional high-speed SFP+",
    "description": "MCNASH10 combines Intel N100, DDR5, dual 2.5GbE, NVMe storage, and a PCIe-based expansion interface supporting compatible 20Gb or 40Gb SFP+ configurations.",
    "image": "/assets/products/commercial/nas/mcnash10/images/main-square.png",
    "galleryImages": [
      "/assets/products/commercial/nas/mcnash10/images/view-1.png",
      "/assets/products/commercial/nas/mcnash10/images/view-2.png"
    ],
    "highlights": [
      "Intel N100 quad-core processor",
      "DDR5 SO-DIMM, up to 16GB",
      "2 x Intel i226 2.5GbE; optional 2 or 4 SFP+ 10GbE ports",
      "M.2 NVMe / NGFF"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCNASH10"
      },
      {
        "label": "CPU",
        "value": "Intel N100 quad-core processor"
      },
      {
        "label": "Chipset",
        "value": "Intel N100 platform"
      },
      {
        "label": "Graphics",
        "value": "Intel UHD Graphics"
      },
      {
        "label": "Video",
        "value": "HDMI 2.0, DisplayPort 1.2, and expandable Type-C display"
      },
      {
        "label": "Memory",
        "value": "DDR5 SO-DIMM, up to 16GB"
      },
      {
        "label": "USB",
        "value": "2 x USB 3.2 and 1 x USB 2.0"
      },
      {
        "label": "Power",
        "value": "DC 12V / 7A"
      },
      {
        "label": "Network",
        "value": "2 x Intel i226 2.5GbE; optional 2 or 4 SFP+ 10GbE ports"
      },
      {
        "label": "Storage",
        "value": "M.2 NVMe / NGFF"
      },
      {
        "label": "Expansion",
        "value": "PCIe x6 I/O interface for compatible 20Gb / 40Gb SFP+ expansion; M.2 CNVi; GPIO; COM"
      },
      {
        "label": "Front I/O",
        "value": "2 x USB 3.2; 2 x 2.5GbE RJ45; 1 x HDMI 2.0; 1 x DisplayPort 1.2; 1 x DC input; 1 x USB 2.0; 1 x power button"
      },
      {
        "label": "Rear I/O",
        "value": "2 or 4 x expandable 10GbE SFP+"
      },
      {
        "label": "Internal I/O",
        "value": "2 x front USB headers; 1 x COM header; 1 x front-panel header; 2 x CPU / system fan connectors; 1 x GPIO header"
      },
      {
        "label": "Dimensions",
        "value": "128 x 156 x 59 mm"
      },
      {
        "label": "Weight",
        "value": "1.1 kg"
      },
      {
        "label": "BIOS",
        "value": "AMI UEFI BIOS with watchdog, Wake-on-LAN, and PXE"
      },
      {
        "label": "TDP",
        "value": "6W"
      },
      {
        "label": "System",
        "value": "Windows 10 / Windows 11 / Linux"
      },
      {
        "label": "Working Environment",
        "value": "0°C to 50°C; 5% to 90% relative humidity, non-condensing"
      }
    ],
    "operatingRange": "0°C to 50°C; 5% to 90% relative humidity, non-condensing"
  },
  {
    "id": "mcnash14",
    "name": "MCNASH14",
    "series": "NAS",
    "tagline": "Expandable Intel NAS platform with four 2.5GbE ports",
    "description": "MCNASH14 provides Pentium 8505 or optional Core i7 performance, up to 64GB DDR5, four 2.5GbE ports, NVMe plus SATA storage, PCIe expansion, and optional high-speed network modules.",
    "image": "/assets/products/commercial/nas/mcnash14/images/main-square.png",
    "galleryImages": [
      "/assets/products/commercial/nas/mcnash14/images/view-1.png",
      "/assets/products/commercial/nas/mcnash14/images/view-2.png"
    ],
    "highlights": [
      "Intel Pentium Gold 8505; optional Core i7-13620H",
      "2 x DDR5 SO-DIMM, up to 64GB",
      "4 x Intel i226 2.5GbE; expandable to compatible 20Gb / 40Gb SFP+ or four-LAN modules",
      "M.2 NVMe 2280 PCIe 4.0 x4 and SATA 3.0"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCNASH14"
      },
      {
        "label": "CPU",
        "value": "Intel Pentium Gold 8505; optional Core i7-13620H"
      },
      {
        "label": "Chipset",
        "value": "Intel 8505 platform"
      },
      {
        "label": "Graphics",
        "value": "Intel UHD Graphics for 12th Gen processors"
      },
      {
        "label": "Video",
        "value": "DisplayPort and HDMI"
      },
      {
        "label": "Memory",
        "value": "2 x DDR5 SO-DIMM, up to 64GB"
      },
      {
        "label": "USB",
        "value": "2 x USB 3.0 and 2 x USB 2.0"
      },
      {
        "label": "Power",
        "value": "DC 12V"
      },
      {
        "label": "Network",
        "value": "4 x Intel i226 2.5GbE; expandable to compatible 20Gb / 40Gb SFP+ or four-LAN modules"
      },
      {
        "label": "Storage",
        "value": "M.2 NVMe 2280 PCIe 4.0 x4 and SATA 3.0"
      },
      {
        "label": "Expansion",
        "value": "PCIe x8 slot with PCIe 3.0 x4 signal; M.2 3052; M.2 2230; SIM; GPIO; TPM"
      },
      {
        "label": "Front I/O",
        "value": "2 x USB 2.0; 4 x 2.5GbE RJ45; 1 x DC input; 1 x DisplayPort; 1 x HDMI"
      },
      {
        "label": "Rear I/O",
        "value": "2 x USB 3.0; 1 x power button; 1 x Type-C; 1 x SIM slot; 1 x console port"
      },
      {
        "label": "Internal I/O",
        "value": "1 x SATA connector; 1 x SATA power connector; 2 x DDR5 SO-DIMM slots; 1 x PCIe x8 slot; M.2 slots for Wi-Fi, 3052 expansion, and 2280 storage; 1 x Clear CMOS header; 1 x GPIO header; 1 x front USB header; 1 x TPM header; 1 x CPU fan connector"
      },
      {
        "label": "Dimensions",
        "value": "150 x 143 x 84 mm"
      },
      {
        "label": "Weight",
        "value": "1.5 kg net"
      },
      {
        "label": "BIOS",
        "value": "AMI UEFI BIOS with Wake-on-LAN and PXE"
      },
      {
        "label": "TDP",
        "value": "Depends on selected processor"
      },
      {
        "label": "System",
        "value": "Windows 10 / Windows 11 / Linux"
      },
      {
        "label": "Working Environment",
        "value": "0°C to 50°C; 5% to 90% relative humidity, non-condensing"
      }
    ],
    "operatingRange": "0°C to 50°C; 5% to 90% relative humidity, non-condensing"
  },
  {
    "id": "mcnash9",
    "name": "MCNASH9",
    "series": "NAS",
    "tagline": "Compact Intel N100 NAS and edge storage platform",
    "description": "MCNASH9 is a compact Intel N100 platform with DDR5, dual 2.5GbE, HDMI and DisplayPort, NVMe plus SATA storage, and Wi-Fi expansion for small storage and edge-service projects.",
    "image": "/assets/products/commercial/nas/mcnash9/images/main-square.png",
    "galleryImages": [
      "/assets/products/commercial/nas/mcnash9/images/view-1.png",
      "/assets/products/commercial/nas/mcnash9/images/view-2.png"
    ],
    "highlights": [
      "Intel N100 quad-core processor",
      "DDR5 SO-DIMM at 4800MHz, up to 16GB",
      "2 x Intel i226 2.5GbE; expandable to four LAN ports",
      "M.2 Key-M 2280 PCIe / SATA and SATA 3.0"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCNASH9"
      },
      {
        "label": "CPU",
        "value": "Intel N100 quad-core processor"
      },
      {
        "label": "Chipset",
        "value": "Intel N100 platform"
      },
      {
        "label": "Graphics",
        "value": "Intel UHD Graphics"
      },
      {
        "label": "Video",
        "value": "HDMI up to 4K at 60Hz and DisplayPort; expandable Type-C display"
      },
      {
        "label": "Memory",
        "value": "DDR5 SO-DIMM at 4800MHz, up to 16GB"
      },
      {
        "label": "USB",
        "value": "1 x USB 2.0 and 1 x USB 3.2 Gen 2"
      },
      {
        "label": "Power",
        "value": "DC 12V"
      },
      {
        "label": "Network",
        "value": "2 x Intel i226 2.5GbE; expandable to four LAN ports"
      },
      {
        "label": "Storage",
        "value": "M.2 Key-M 2280 PCIe / SATA and SATA 3.0"
      },
      {
        "label": "Expansion",
        "value": "M.2 E-Key 2230 for Wi-Fi / Bluetooth; GPIO; COM; fan headers"
      },
      {
        "label": "Front I/O",
        "value": "2 x Intel i226 2.5GbE RJ45; 1 x USB 2.0; 1 x USB 3.2 Gen 2; 1 x HDMI supporting 4K at 60Hz; 1 x DisplayPort; 1 x power button; 1 x 12V DC input"
      },
      {
        "label": "Rear I/O",
        "value": "1 x 4-pin CPU fan connector"
      },
      {
        "label": "Internal I/O",
        "value": "2 x front USB headers; 1 x COM header; 1 x front-panel header; 2 x CPU / system fan connectors; 1 x GPIO header"
      },
      {
        "label": "Dimensions",
        "value": "100 x 100 x 45 mm"
      },
      {
        "label": "Weight",
        "value": "1 kg"
      },
      {
        "label": "BIOS",
        "value": "AMI UEFI BIOS with watchdog, Wake-on-LAN, and PXE"
      },
      {
        "label": "TDP",
        "value": "6W"
      },
      {
        "label": "System",
        "value": "Windows 10 / Windows 11 / Linux"
      },
      {
        "label": "Working Environment",
        "value": "0°C to 50°C; 5% to 90% relative humidity, non-condensing"
      }
    ],
    "operatingRange": "0°C to 50°C; 5% to 90% relative humidity, non-condensing"
  }
];
