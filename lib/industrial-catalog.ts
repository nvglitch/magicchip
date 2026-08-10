export type IndustrialSeriesCode = 'A' | 'B' | 'C' | 'D' | 'TPC';

export type IndustrialCatalogSpec = { label: string; value: string };

export type IndustrialCatalogItem = {
  id: string;
  name: string;
  series: IndustrialSeriesCode;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
  specs: IndustrialCatalogSpec[];
  operatingRange?: string;
};

// Product facts are derived from the supplied one-page IPC brochures.
export const industrialCatalog: IndustrialCatalogItem[] = [
  {
    "id": "mcipca1",
    "name": "MCIPCA1",
    "series": "A",
    "tagline": "MCIPCA1 compact A Series industrial computer",
    "description": "MCIPCA1 is a compact industrial computer with a single-COM or COM-less architecture. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/a-series/mcipca1/images/main-square-srgb.jpg",
    "highlights": [
      "Onboard Intel Celeron J6412/ Pentium J6426",
      "2 x HDMI;1 x DP",
      "2 x RJ45 Gigabit LAN",
      "2 x DB9 RS232 COM"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCA1"
      },
      {
        "label": "Series",
        "value": "A Series"
      },
      {
        "label": "CPU",
        "value": "Onboard Intel Celeron J6412/ Pentium J6426"
      },
      {
        "label": "Display",
        "value": "2 x HDMI;1 x DP"
      },
      {
        "label": "Memory",
        "value": "1 x SODIMM DDR4 slot"
      },
      {
        "label": "USB",
        "value": "6 x USB2.0; 2 x USB3.0"
      },
      {
        "label": "Network",
        "value": "2 x RJ45 Gigabit LAN"
      },
      {
        "label": "Serial",
        "value": "2 x DB9 RS232 COM"
      },
      {
        "label": "Storage",
        "value": "1 x M.2 SSD slot"
      },
      {
        "label": "Power",
        "value": "1 x DC 12V"
      },
      {
        "label": "System",
        "value": "Windows10/WES10/Linux"
      },
      {
        "label": "Operating Environment",
        "value": "Working Temperature: -20~60℃；"
      },
      {
        "label": "Dimensions",
        "value": "135 x 127 x 38.7(mm)"
      }
    ],
    "operatingRange": "Working Temperature: -20~60℃；"
  },
  {
    "id": "mcipca2",
    "name": "MCIPCA2",
    "series": "A",
    "tagline": "MCIPCA2 compact A Series industrial computer",
    "description": "MCIPCA2 is a compact industrial computer with a single-COM or COM-less architecture. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/a-series/mcipca2/images/main-square-srgb.jpg",
    "highlights": [
      "Intel® J4125",
      "1 x HDMI",
      "4 x GbE RJ45 LAN",
      "1 x DB-9 COM RS-232"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCA2"
      },
      {
        "label": "Series",
        "value": "A Series"
      },
      {
        "label": "CPU",
        "value": "Intel® J4125"
      },
      {
        "label": "Display",
        "value": "1 x HDMI"
      },
      {
        "label": "Memory",
        "value": "1 x DDR4 SODIMM slot, supports up to 8GB"
      },
      {
        "label": "USB",
        "value": "4 x USB 2.0, 2 x USB 3.0"
      },
      {
        "label": "Network",
        "value": "4 x GbE RJ45 LAN"
      },
      {
        "label": "Serial",
        "value": "1 x DB-9 COM RS-232"
      },
      {
        "label": "Storage",
        "value": "1 x HDD/SSD, 1 x mSATA"
      },
      {
        "label": "Power",
        "value": "DC 12V"
      },
      {
        "label": "System",
        "value": "Windows® 10, WES 10, LINUX"
      },
      {
        "label": "Operating Environment",
        "value": "Operating Temperature -20°C to +60°C."
      },
      {
        "label": "Dimensions",
        "value": "135 x 127 x 38.7 mm"
      }
    ],
    "operatingRange": "Operating Temperature -20°C to +60°C."
  },
  {
    "id": "mcipcb10",
    "name": "MCIPCB10",
    "series": "B",
    "tagline": "MCIPCB10 dual-LAN, dual-COM industrial computer",
    "description": "MCIPCB10 is an industrial computer with dual-LAN and dual-COM architecture. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/b-series/mcipcb10/images/main-square-srgb.jpg",
    "highlights": [
      "Intel Celeron,Pentium,Core®I3/I5/I7 Haswell/Broadwell-U",
      "1 x HDMI; 1 x VGA",
      "2 x Realtek RTL8111H Gigabit LAN card",
      "2 x COM(RS232/RS485)"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCB10"
      },
      {
        "label": "Series",
        "value": "B Series"
      },
      {
        "label": "CPU",
        "value": "Intel Celeron,Pentium,Core®I3/I5/I7 Haswell/Broadwell-U"
      },
      {
        "label": "Display",
        "value": "1 x HDMI; 1 x VGA"
      },
      {
        "label": "Memory",
        "value": "DDR3L 1333MHz Max 8GB"
      },
      {
        "label": "USB",
        "value": "4 x USB3.0; 2 x USB 2.0"
      },
      {
        "label": "Network",
        "value": "2 x Realtek RTL8111H Gigabit LAN card"
      },
      {
        "label": "Serial",
        "value": "2 x COM(RS232/RS485)"
      },
      {
        "label": "Power",
        "value": "DC-12V (55 x 25)"
      },
      {
        "label": "System",
        "value": "Windows 7/Windows 10/Linux"
      },
      {
        "label": "Operating Environment",
        "value": "-20~60℃;5%~95% Relative humidity,"
      }
    ],
    "operatingRange": "-20~60℃;5%~95% Relative humidity,"
  },
  {
    "id": "mcipcb11",
    "name": "MCIPCB11",
    "series": "B",
    "tagline": "MCIPCB11 dual-LAN, dual-COM industrial computer",
    "description": "MCIPCB11 is an industrial computer with dual-LAN and dual-COM architecture. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/b-series/mcipcb11/images/main-square-srgb.jpg",
    "highlights": [
      "Intel N100",
      "2 x HDMI; 1 x DP; 1 x USB-C(Display supported)",
      "2 x Realtek RTL8111 Gigabit LAN",
      "2 x COM（RS232/RS485）"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCB11"
      },
      {
        "label": "Series",
        "value": "B Series"
      },
      {
        "label": "CPU",
        "value": "Intel N100"
      },
      {
        "label": "Display",
        "value": "2 x HDMI; 1 x DP; 1 x USB-C(Display supported)"
      },
      {
        "label": "Memory",
        "value": "1 x DDR4 SO-DIMM Slot"
      },
      {
        "label": "USB",
        "value": "4 x USB3.0/2 x USB2.0"
      },
      {
        "label": "Network",
        "value": "2 x Realtek RTL8111 Gigabit LAN"
      },
      {
        "label": "Serial",
        "value": "2 x COM（RS232/RS485）"
      },
      {
        "label": "Power",
        "value": "1 x DC 12V"
      },
      {
        "label": "System",
        "value": "Windows10/Windows11/Linux"
      },
      {
        "label": "Operating Environment",
        "value": "0~50℃;5%~90% Relative humidity,"
      },
      {
        "label": "Dimensions",
        "value": "138 x 126 x 48(mm)"
      }
    ],
    "operatingRange": "0~50℃;5%~90% Relative humidity,"
  },
  {
    "id": "mcipcb12",
    "name": "MCIPCB12",
    "series": "B",
    "tagline": "MCIPCB12 dual-LAN, dual-COM industrial computer",
    "description": "MCIPCB12 is an industrial computer with dual-LAN and dual-COM architecture. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/b-series/mcipcb12/images/main-square-srgb.jpg",
    "highlights": [
      "Intel® Elkhart Lake J6412/J6413/J6426",
      "2 x HDMI;1 x DP",
      "2 x RJ45 Gigabit LAN",
      "2 x DB9 RS232 COM"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCB12"
      },
      {
        "label": "Series",
        "value": "B Series"
      },
      {
        "label": "CPU",
        "value": "Intel® Elkhart Lake J6412/J6413/J6426"
      },
      {
        "label": "Display",
        "value": "2 x HDMI;1 x DP"
      },
      {
        "label": "Memory",
        "value": "1 x SODIMM DDR4 slot"
      },
      {
        "label": "USB",
        "value": "2 x USB2.0; 2 x USB3.0"
      },
      {
        "label": "Network",
        "value": "2 x RJ45 Gigabit LAN"
      },
      {
        "label": "Serial",
        "value": "2 x DB9 RS232 COM"
      },
      {
        "label": "Storage",
        "value": "1 x M.2 SSD slot"
      },
      {
        "label": "Power",
        "value": "1 x DC 12V"
      },
      {
        "label": "System",
        "value": "Windows10/WES10/Linux"
      },
      {
        "label": "Operating Environment",
        "value": "Working Temperature: -20~60℃；"
      },
      {
        "label": "Dimensions",
        "value": "135 x 127 x 38.7(mm)"
      }
    ],
    "operatingRange": "Working Temperature: -20~60℃；"
  },
  {
    "id": "mcipcb13",
    "name": "MCIPCB13",
    "series": "B",
    "tagline": "MCIPCB13 dual-LAN, dual-COM industrial computer",
    "description": "MCIPCB13 is an industrial computer with dual-LAN and dual-COM architecture. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/b-series/mcipcb13/images/main-square-srgb.jpg",
    "highlights": [
      "Optional Intel 4th/5th/6th/7th/8th/10th Gen Core i3/i5/i7 CPU",
      "1 x HDMI, 1 x VGA (or HDMI)",
      "2 x GbE RJ45 LAN",
      "2 x DB9 COM"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCB13"
      },
      {
        "label": "Series",
        "value": "B Series"
      },
      {
        "label": "CPU",
        "value": "Optional Intel 4th/5th/6th/7th/8th/10th Gen Core i3/i5/i7 CPU"
      },
      {
        "label": "Display",
        "value": "1 x HDMI, 1 x VGA (or HDMI)"
      },
      {
        "label": "Memory",
        "value": "4th Gen: 1 x DDR3L SODIMM, maximum support 8GB"
      },
      {
        "label": "USB",
        "value": "4 x USB 3.0, 4 x USB 2.0"
      },
      {
        "label": "Network",
        "value": "2 x GbE RJ45 LAN"
      },
      {
        "label": "Serial",
        "value": "2 x DB9 COM"
      },
      {
        "label": "Power",
        "value": "DC 12V-19V Power Input"
      },
      {
        "label": "System",
        "value": "Windows® 7/8/10, WES 7/10, LINUX"
      },
      {
        "label": "Operating Environment",
        "value": "Working Temp: -20°C to +60°C"
      },
      {
        "label": "Dimensions",
        "value": "193.9 x 127 x 57.2 mm"
      }
    ],
    "operatingRange": "Working Temp: -20°C to +60°C"
  },
  {
    "id": "mcipcb2-d3",
    "name": "MCIPCB2-D3",
    "series": "B",
    "tagline": "MCIPCB2-D3 dual-LAN, dual-COM industrial computer",
    "description": "MCIPCB2-D3 is an industrial computer with dual-LAN and dual-COM architecture. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/b-series/mcipcb2-d3/images/main-square-srgb.jpg",
    "highlights": [
      "Intel Celeron series",
      "1 x HDMI; 1 x VGA",
      "2 x RTL8111 Gigabit Ethernet port",
      "2 x COM RS232(Opt.1 RS485)"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCB2-D3"
      },
      {
        "label": "Series",
        "value": "B Series"
      },
      {
        "label": "CPU",
        "value": "Intel Celeron series"
      },
      {
        "label": "Display",
        "value": "1 x HDMI; 1 x VGA"
      },
      {
        "label": "Memory",
        "value": "1 x SO_DIMM DDR3 2400 MHz"
      },
      {
        "label": "USB",
        "value": "2 x USB 3.0; 4 x USB 2.0(Built-in pin)"
      },
      {
        "label": "Network",
        "value": "2 x RTL8111 Gigabit Ethernet port"
      },
      {
        "label": "Serial",
        "value": "2 x COM RS232(Opt.1 RS485)"
      },
      {
        "label": "Storage",
        "value": "1 x mSATA SSD; 1 x M.2 NVMe 2280; 12.5-inch HDD/SSD"
      },
      {
        "label": "Power",
        "value": "In-DC 12V-4A 55 x 25"
      },
      {
        "label": "System",
        "value": "Windows10 / WES10 / Linux"
      },
      {
        "label": "Operating Environment",
        "value": "0~50℃;0%~95% Relative humidity,"
      },
      {
        "label": "Dimensions",
        "value": "1 x 3.5mm Audio port"
      }
    ],
    "operatingRange": "0~50℃;0%~95% Relative humidity,"
  },
  {
    "id": "mcipcb2-d4",
    "name": "MCIPCB2-D4",
    "series": "B",
    "tagline": "MCIPCB2-D4 dual-LAN, dual-COM industrial computer",
    "description": "MCIPCB2-D4 is an industrial computer with dual-LAN and dual-COM architecture. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/b-series/mcipcb2-d4/images/main-square-srgb.jpg",
    "highlights": [
      "Intel Celeron N4000 / J4125",
      "1 x HDMI; 1 x VGA",
      "2 x RTL8111 Gigabit Ethernet port",
      "2 x COM RS232(Opt.1 RS485)"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCB2-D4"
      },
      {
        "label": "Series",
        "value": "B Series"
      },
      {
        "label": "CPU",
        "value": "Intel Celeron N4000 / J4125"
      },
      {
        "label": "Display",
        "value": "1 x HDMI; 1 x VGA"
      },
      {
        "label": "Memory",
        "value": "1 x SO_DIMM DDR4 2400 MHz"
      },
      {
        "label": "USB",
        "value": "2 x USB 3.0; 4 x USB 2.0(Built-in pin)"
      },
      {
        "label": "Network",
        "value": "2 x RTL8111 Gigabit Ethernet port"
      },
      {
        "label": "Serial",
        "value": "2 x COM RS232(Opt.1 RS485)"
      },
      {
        "label": "Storage",
        "value": "1 x mSATA SSD; 1 x M.2 NVMe 2280; 12.5-inch HDD/SSD"
      },
      {
        "label": "Power",
        "value": "In-DC 12V-4A 55 x 25"
      },
      {
        "label": "System",
        "value": "Windows10 / WES10 / Linux"
      },
      {
        "label": "Operating Environment",
        "value": "0~50℃;0%~95% Relative humidity,"
      },
      {
        "label": "Dimensions",
        "value": "1 x 3.5mm Audio port"
      }
    ],
    "operatingRange": "0~50℃;0%~95% Relative humidity,"
  },
  {
    "id": "mcipcb2-j5005",
    "name": "MCIPCB2-J5005",
    "series": "B",
    "tagline": "MCIPCB2-J5005 dual-LAN, dual-COM industrial computer",
    "description": "MCIPCB2-J5005 is an industrial computer with dual-LAN and dual-COM architecture. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/b-series/mcipcb2-j5005/images/main-square-srgb.jpg",
    "highlights": [
      "Intel® Pentium® Silver J5005 Processor",
      "HDMI, VGA",
      "2 x GbE RJ45 LAN",
      "2 x DB-9 (COM1 & COM2) RS-232"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCB2-J5005"
      },
      {
        "label": "Series",
        "value": "B Series"
      },
      {
        "label": "CPU",
        "value": "Intel® Pentium® Silver J5005 Processor"
      },
      {
        "label": "Display",
        "value": "HDMI, VGA"
      },
      {
        "label": "Memory",
        "value": "1 x DDR4 SODIMM slot, supports up to 8GB"
      },
      {
        "label": "USB",
        "value": "3 x USB 2.0, 1 x USB 3.0"
      },
      {
        "label": "Network",
        "value": "2 x GbE RJ45 LAN"
      },
      {
        "label": "Serial",
        "value": "2 x DB-9 (COM1 & COM2) RS-232"
      },
      {
        "label": "Storage",
        "value": "1 x HDD/SSD, 1 x M.2 SSD"
      },
      {
        "label": "Power",
        "value": "DC 12V"
      },
      {
        "label": "System",
        "value": "Windows® 7/8/10, WES 7, Linux"
      },
      {
        "label": "Operating Environment",
        "value": "Operating Temperature -20°C ~ 70°C, Storage Temperature -30°C ~ 70°C"
      },
      {
        "label": "Dimensions",
        "value": "135 x 127 x 38.7 mm"
      }
    ],
    "operatingRange": "Operating Temperature -20°C ~ 70°C, Storage Temperature -30°C ~ 70°C"
  },
  {
    "id": "mcipcb3",
    "name": "MCIPCB3",
    "series": "B",
    "tagline": "MCIPCB3 dual-LAN, dual-COM industrial computer",
    "description": "MCIPCB3 is an industrial computer with dual-LAN and dual-COM architecture. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/b-series/mcipcb3/images/main-square-srgb.jpg",
    "highlights": [
      "Intel N100",
      "2 x HDMI; 1 x DP(Support for 3-screen synchronous display)",
      "2 x 2.5G Ethernet",
      "2 x COM(RS232/RS485)"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCB3"
      },
      {
        "label": "Series",
        "value": "B Series"
      },
      {
        "label": "CPU",
        "value": "Intel N100"
      },
      {
        "label": "Display",
        "value": "2 x HDMI; 1 x DP(Support for 3-screen synchronous display)"
      },
      {
        "label": "Memory",
        "value": "SO-DIMM DDR4 3200MHz Up to 16G"
      },
      {
        "label": "USB",
        "value": "3 x USB 3.0; 2 x USB 2.0; 1 x Type-C"
      },
      {
        "label": "Network",
        "value": "2 x 2.5G Ethernet"
      },
      {
        "label": "Serial",
        "value": "2 x COM(RS232/RS485)"
      },
      {
        "label": "Storage",
        "value": "1 x M.2 (Key-M,2280,PCIEx2 NVMe/SATA,SSD); 1 x SATA3.0"
      },
      {
        "label": "Power",
        "value": "1 x DC-12V(55 x 25)"
      },
      {
        "label": "System",
        "value": "Windows10 / windows11 / Linux"
      },
      {
        "label": "Operating Environment",
        "value": "0~70℃;5%~85% Relative humidity,"
      }
    ],
    "operatingRange": "0~70℃;5%~85% Relative humidity,"
  },
  {
    "id": "mcipcb4",
    "name": "MCIPCB4",
    "series": "B",
    "tagline": "MCIPCB4 dual-LAN, dual-COM industrial computer",
    "description": "MCIPCB4 is an industrial computer with dual-LAN and dual-COM architecture. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/b-series/mcipcb4/images/main-square-srgb.jpg",
    "highlights": [
      "Intel Celeron N5105",
      "1 x HDMI 1.4",
      "2 x 2.5G Network Port",
      "2 x RS232/RS485 COM"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCB4"
      },
      {
        "label": "Series",
        "value": "B Series"
      },
      {
        "label": "CPU",
        "value": "Intel Celeron N5105"
      },
      {
        "label": "Display",
        "value": "1 x HDMI 1.4"
      },
      {
        "label": "Memory",
        "value": "SO-DIMM DDR4 2400/2666/3200MHz Max16G"
      },
      {
        "label": "USB",
        "value": "4 x USB 3.0; 2 x USB 2.0; 1 x Type-C"
      },
      {
        "label": "Network",
        "value": "2 x 2.5G Network Port"
      },
      {
        "label": "Serial",
        "value": "2 x RS232/RS485 COM"
      },
      {
        "label": "Power",
        "value": "1 x DC-12V(55 x 25)"
      },
      {
        "label": "System",
        "value": "Windows10 / windows11 / Linux"
      },
      {
        "label": "Operating Environment",
        "value": "0~70℃;5%~85% Relative humidity,"
      }
    ],
    "operatingRange": "0~70℃;5%~85% Relative humidity,"
  },
  {
    "id": "mcipcb5",
    "name": "MCIPCB5",
    "series": "B",
    "tagline": "MCIPCB5 dual-LAN, dual-COM industrial computer",
    "description": "MCIPCB5 is an industrial computer with dual-LAN and dual-COM architecture. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/b-series/mcipcb5/images/main-square-srgb.jpg",
    "highlights": [
      "Intel Celeron Processor N2840",
      "1 x HDMI; 1 x VGA(Support for 2-screen synchronous display)",
      "2 x RTL8160E/RTL8111H Gigabit network port",
      "2 x RS232/RS485 COM"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCB5"
      },
      {
        "label": "Series",
        "value": "B Series"
      },
      {
        "label": "CPU",
        "value": "Intel Celeron Processor N2840"
      },
      {
        "label": "Display",
        "value": "1 x HDMI; 1 x VGA(Support for 2-screen synchronous display)"
      },
      {
        "label": "Memory",
        "value": "SO-DIMM DDR3 1333MHz Max8G"
      },
      {
        "label": "USB",
        "value": "2 x USB 3.0; 2 x USB 2.0"
      },
      {
        "label": "Network",
        "value": "2 x RTL8160E/RTL8111H Gigabit network port"
      },
      {
        "label": "Serial",
        "value": "2 x RS232/RS485 COM"
      },
      {
        "label": "System",
        "value": "Windows10 / windows11 / Linux"
      },
      {
        "label": "Operating Environment",
        "value": "10~15W"
      }
    ],
    "operatingRange": "10~15W"
  },
  {
    "id": "mcipcb7",
    "name": "MCIPCB7",
    "series": "B",
    "tagline": "MCIPCB7 dual-LAN, dual-COM industrial computer",
    "description": "MCIPCB7 is an industrial computer with dual-LAN and dual-COM architecture. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/b-series/mcipcb7/images/main-square-srgb.jpg",
    "highlights": [
      "Intel Sky Lake-U Kaby Lake-U Core i3 i5 i7",
      "1 x EDP;1 x HDMI; 1 x VGA",
      "2 x Realtek ECI-E RTL8106E/RTL8111H Gigabit LAN card",
      "2 x COM(RS232/RS485)"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCB7"
      },
      {
        "label": "Series",
        "value": "B Series"
      },
      {
        "label": "CPU",
        "value": "Intel Sky Lake-U Kaby Lake-U Core i3 i5 i7"
      },
      {
        "label": "Display",
        "value": "1 x EDP;1 x HDMI; 1 x VGA"
      },
      {
        "label": "Memory",
        "value": "DDR3L 1600MHz Max 8GB"
      },
      {
        "label": "USB",
        "value": "4 x USB3.0; 2 x USB 2.0; 2 x USB 2.0 Pin Head"
      },
      {
        "label": "Network",
        "value": "2 x Realtek ECI-E RTL8106E/RTL8111H Gigabit LAN card"
      },
      {
        "label": "Serial",
        "value": "2 x COM(RS232/RS485)"
      },
      {
        "label": "Storage",
        "value": "1 x SATA 3.0 ，1 x M.2(Key-M, 2280, PCIe x2 NVMe/ SATA, SSD)"
      },
      {
        "label": "Power",
        "value": "DC-12V (55 x 25)"
      },
      {
        "label": "Operating Environment",
        "value": "0~60℃;5%~95% Relative humidity,"
      }
    ],
    "operatingRange": "0~60℃;5%~95% Relative humidity,"
  },
  {
    "id": "mcipcb8",
    "name": "MCIPCB8",
    "series": "B",
    "tagline": "MCIPCB8 dual-LAN, dual-COM industrial computer",
    "description": "MCIPCB8 is an industrial computer with dual-LAN and dual-COM architecture. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/b-series/mcipcb8/images/main-square-srgb.jpg",
    "highlights": [
      "Intel ® Celeron N150 0.8GHz quad-core processor",
      "2 x HDMI(One single-layer HDMI support dual DP)",
      "2 x Realtek RJ45 LAN ports",
      "2 x DB9 RS232 serial ports"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCB8"
      },
      {
        "label": "Series",
        "value": "B Series"
      },
      {
        "label": "CPU",
        "value": "Intel ® Celeron N150 0.8GHz quad-core processor"
      },
      {
        "label": "Display",
        "value": "2 x HDMI(One single-layer HDMI support dual DP)"
      },
      {
        "label": "Memory",
        "value": "1 x SO-DIMM slot, single-channel 4800MHz DDR5, supports up to 16GB"
      },
      {
        "label": "USB",
        "value": "2 x USB 3.1, 2 x USB 2.0"
      },
      {
        "label": "Network",
        "value": "2 x Realtek RJ45 LAN ports"
      },
      {
        "label": "Serial",
        "value": "2 x DB9 RS232 serial ports"
      },
      {
        "label": "Storage",
        "value": "1 x M.2 Key-M Slot for SSD (SSD1)"
      },
      {
        "label": "Power",
        "value": "DC 12V power input"
      },
      {
        "label": "Operating Environment",
        "value": "Working Temperature: -10°C to 60°C"
      },
      {
        "label": "Dimensions",
        "value": "138 x 125 x 47 mm"
      }
    ],
    "operatingRange": "Working Temperature: -10°C to 60°C"
  },
  {
    "id": "mcipcb9",
    "name": "MCIPCB9",
    "series": "B",
    "tagline": "MCIPCB9 dual-LAN, dual-COM industrial computer",
    "description": "MCIPCB9 is an industrial computer with dual-LAN and dual-COM architecture. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/b-series/mcipcb9/images/main-square-srgb.jpg",
    "highlights": [
      "Intel N2840/ N2930/J1900(2core 2.0GHz)",
      "1 x HDMI; 1 x VGA",
      "2 x Realtek ECI-E RTL8106E/RTL8111H Gigabit LAN card",
      "2 x COM(RS232/RS485)"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCB9"
      },
      {
        "label": "Series",
        "value": "B Series"
      },
      {
        "label": "CPU",
        "value": "Intel N2840/ N2930/J1900(2core 2.0GHz)"
      },
      {
        "label": "Display",
        "value": "1 x HDMI; 1 x VGA"
      },
      {
        "label": "Memory",
        "value": "DDR3L 1333MHz Max 8GB"
      },
      {
        "label": "USB",
        "value": "1 x USB3.0; 3 x USB 2.0; (N2930/J1900: 5 x USB2.0; 1 x USB 3.0)"
      },
      {
        "label": "Network",
        "value": "2 x Realtek ECI-E RTL8106E/RTL8111H Gigabit LAN card"
      },
      {
        "label": "Serial",
        "value": "2 x COM(RS232/RS485)"
      },
      {
        "label": "Power",
        "value": "DC-12V (55 x 25)"
      },
      {
        "label": "Operating Environment",
        "value": "0~60℃;5%~95% Relative humidity,"
      }
    ],
    "operatingRange": "0~60℃;5%~95% Relative humidity,"
  },
  {
    "id": "mcipc1",
    "name": "MCIPC1",
    "series": "C",
    "tagline": "MCIPC1 multi-COM industrial computer with dual LAN",
    "description": "MCIPC1 is a multi-COM industrial computer with dual-LAN architecture. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/c-series/mcipc1/images/main-square-srgb.jpg",
    "highlights": [
      "Intel Core i7-1355U 1.7GHz up to 5.0GHz;10 Core 12 threads 12MB cache",
      "1 x VGA, 1 x HDMI 1.4",
      "2 x RJ45 Intel 2.5G LAN;1 x mini PCIE-full port 3G/4G/Wifi/Bluetooth module",
      "1 x ATX/AT quick switch; 6 x DB9 COM(4 x COM support RS422/RS485)"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPC1"
      },
      {
        "label": "Series",
        "value": "C Series"
      },
      {
        "label": "CPU",
        "value": "Intel Core i7-1355U 1.7GHz up to 5.0GHz;10 Core 12 threads 12MB cache"
      },
      {
        "label": "Display",
        "value": "1 x VGA, 1 x HDMI 1.4"
      },
      {
        "label": "Memory",
        "value": "2 x SO-DIMM DDR5 Slot"
      },
      {
        "label": "USB",
        "value": "4 x USB 3.0; 2 x USB 2.0"
      },
      {
        "label": "Network",
        "value": "2 x RJ45 Intel 2.5G LAN;1 x mini PCIE-full port 3G/4G/Wifi/Bluetooth module"
      },
      {
        "label": "Serial",
        "value": "1 x ATX/AT quick switch; 6 x DB9 COM(4 x COM support RS422/RS485)"
      },
      {
        "label": "Storage",
        "value": "1 x MSATA3.0; 1 x M.2 NVME 2280; 1 x SATA3.0 for SATA HDD or SSD"
      },
      {
        "label": "Power",
        "value": "In- DC 100V~ 240V, AC/50~60Hz; DC 9V~36V,recommend 19V/5A"
      },
      {
        "label": "System",
        "value": "Windows10 / WES10 / Linux"
      },
      {
        "label": "Operating Environment",
        "value": "-20~60℃;10%~90% Relative humidity,"
      }
    ],
    "operatingRange": "-20~60℃;10%~90% Relative humidity,"
  },
  {
    "id": "mcipc2a",
    "name": "MCIPC2A",
    "series": "C",
    "tagline": "MCIPC2A multi-COM industrial computer with dual LAN",
    "description": "MCIPC2A is a multi-COM industrial computer with dual-LAN architecture. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/c-series/mcipc2a/images/main-square-srgb.jpg",
    "highlights": [
      "Optional Intel® Atom™ J1900 Quad Core 2.0GHz",
      "HDMI, VGA",
      "2x GbE RJ45 LAN",
      "2x DB-9 COM1&COM2 (RS-232/422/485)"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPC2A"
      },
      {
        "label": "Series",
        "value": "C Series"
      },
      {
        "label": "CPU",
        "value": "Optional Intel® Atom™ J1900 Quad Core 2.0GHz"
      },
      {
        "label": "Display",
        "value": "HDMI, VGA"
      },
      {
        "label": "Memory",
        "value": "1x DDR3L SODIMM slot, maximum support 8GB"
      },
      {
        "label": "USB",
        "value": "5x USB 2.0, 1x USB 3.0"
      },
      {
        "label": "Network",
        "value": "2x GbE RJ45 LAN"
      },
      {
        "label": "Serial",
        "value": "2x DB-9 COM1&COM2 (RS-232/422/485)"
      },
      {
        "label": "Power",
        "value": "DC 12V"
      },
      {
        "label": "System",
        "value": "Windows 7/8/10, WES 7, LINUX"
      },
      {
        "label": "Operating Environment",
        "value": "Working Temp: -20°C to 70°C"
      },
      {
        "label": "Dimensions",
        "value": "150 x 135 x 49 mm"
      }
    ],
    "operatingRange": "Working Temp: -20°C to 70°C"
  },
  {
    "id": "mcipc2b",
    "name": "MCIPC2B",
    "series": "C",
    "tagline": "MCIPC2B multi-COM industrial computer with dual LAN",
    "description": "MCIPC2B is a multi-COM industrial computer with dual-LAN architecture. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/c-series/mcipc2b/images/main-square-srgb.jpg",
    "highlights": [
      "Intel i3-6157U/i3-7100U/i3-8130U",
      "HDMI, VGA",
      "2x GbE RJ45 Intel i211/i210",
      "6x DB9 COM (2 of them support RS485/RS422)"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPC2B"
      },
      {
        "label": "Series",
        "value": "C Series"
      },
      {
        "label": "CPU",
        "value": "Intel i3-6157U/i3-7100U/i3-8130U"
      },
      {
        "label": "Display",
        "value": "HDMI, VGA"
      },
      {
        "label": "Memory",
        "value": "1x DDR4 SODIMM slot, maximum support 16GB"
      },
      {
        "label": "USB",
        "value": "4x USB 3.0, 2x USB 2.0"
      },
      {
        "label": "Network",
        "value": "2x GbE RJ45 Intel i211/i210"
      },
      {
        "label": "Serial",
        "value": "6x DB9 COM (2 of them support RS485/RS422)"
      },
      {
        "label": "Storage",
        "value": "1x MSATA , 1x HDD/SSD"
      },
      {
        "label": "Power",
        "value": "DC 12V"
      },
      {
        "label": "System",
        "value": "Windows® 7/8/10, WES 7/10, Linux"
      },
      {
        "label": "Operating Environment",
        "value": "Working Temp: -20°C to +60°C"
      },
      {
        "label": "Dimensions",
        "value": "180 x 120 x 54 mm"
      }
    ],
    "operatingRange": "Working Temp: -20°C to +60°C"
  },
  {
    "id": "mcipc3",
    "name": "MCIPC3",
    "series": "C",
    "tagline": "MCIPC3 multi-COM industrial computer with dual LAN",
    "description": "MCIPC3 is a multi-COM industrial computer with dual-LAN architecture. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/c-series/mcipc3/images/main-square-srgb.jpg",
    "highlights": [
      "Intel Atom J1900 Processor",
      "1x HDMI, 1x VGA",
      "2x GbE RJ45 Intel i211/i210",
      "6x DB9 COM (2 of them support RS485/RS422)"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPC3"
      },
      {
        "label": "Series",
        "value": "C Series"
      },
      {
        "label": "CPU",
        "value": "Intel Atom J1900 Processor"
      },
      {
        "label": "Display",
        "value": "1x HDMI, 1x VGA"
      },
      {
        "label": "Memory",
        "value": "1x DDR3L SODIMM slot, maximum support 8GB"
      },
      {
        "label": "USB",
        "value": "1x USB 3.0, 5x USB 2.0"
      },
      {
        "label": "Network",
        "value": "2x GbE RJ45 Intel i211/i210"
      },
      {
        "label": "Serial",
        "value": "6x DB9 COM (2 of them support RS485/RS422)"
      },
      {
        "label": "Storage",
        "value": "1x MSATA , 1x HDD/SSD"
      },
      {
        "label": "Power",
        "value": "DC 12V"
      },
      {
        "label": "System",
        "value": "Windows® 7/8/10, WES 7/10, LINUX"
      },
      {
        "label": "Operating Environment",
        "value": "Working Temp: -20°C to +60°C"
      },
      {
        "label": "Dimensions",
        "value": "216 x 126 x 63.5 mm"
      }
    ],
    "operatingRange": "Working Temp: -20°C to +60°C"
  },
  {
    "id": "mcipc4",
    "name": "MCIPC4",
    "series": "C",
    "tagline": "MCIPC4 multi-COM industrial computer with dual LAN",
    "description": "MCIPC4 is a multi-COM industrial computer with dual-LAN architecture. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/c-series/mcipc4/images/main-square-srgb.jpg",
    "highlights": [
      "Intel Core i3-6157U / Intel Atom J4125 / Intel Atom J1900",
      "1x HDMI, 1x VGA",
      "2x GbE RJ45 Intel i211/i210",
      "6x DB9 COM (Supports RS-232 only)"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPC4"
      },
      {
        "label": "Series",
        "value": "C Series"
      },
      {
        "label": "CPU",
        "value": "Intel Core i3-6157U / Intel Atom J4125 / Intel Atom J1900"
      },
      {
        "label": "Display",
        "value": "1x HDMI, 1x VGA"
      },
      {
        "label": "Memory",
        "value": "J4125: DDR4 SODIMM, max support 8GB"
      },
      {
        "label": "USB",
        "value": "J1900: 1x USB 3.0, 5x USB 2.0"
      },
      {
        "label": "Network",
        "value": "2x GbE RJ45 Intel i211/i210"
      },
      {
        "label": "Serial",
        "value": "6x DB9 COM (Supports RS-232 only)"
      },
      {
        "label": "Storage",
        "value": "1x MSATA , 1x HDD/SSD"
      },
      {
        "label": "Power",
        "value": "DC 12V"
      },
      {
        "label": "System",
        "value": "J4125: Windows 10, WES 10, Linux"
      },
      {
        "label": "Operating Environment",
        "value": "Working Temp: -20°C to +60°C"
      },
      {
        "label": "Dimensions",
        "value": "180 x 120 x 54 mm"
      }
    ],
    "operatingRange": "Working Temp: -20°C to +60°C"
  },
  {
    "id": "mcipc6",
    "name": "MCIPC6",
    "series": "C",
    "tagline": "MCIPC6 multi-COM industrial computer with dual LAN",
    "description": "MCIPC6 is a multi-COM industrial computer with dual-LAN architecture. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/c-series/mcipc6/images/main-square-srgb.jpg",
    "highlights": [
      "Optional Intel 4th/5th/6th/7th/8th/10th Gen Core i3/i5/i7 CPU",
      "1 x HDMI, 1 x VGA",
      "2 x GbE RJ45 LAN",
      "4 x DB9 COM (RS232/422/485)"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPC6"
      },
      {
        "label": "Series",
        "value": "C Series"
      },
      {
        "label": "CPU",
        "value": "Optional Intel 4th/5th/6th/7th/8th/10th Gen Core i3/i5/i7 CPU"
      },
      {
        "label": "Display",
        "value": "1 x HDMI, 1 x VGA"
      },
      {
        "label": "Memory",
        "value": "4th/5th Gen: 1 x DDR3L SODIMM, maximum support 8GB"
      },
      {
        "label": "USB",
        "value": "4 x USB 3.0, 2 x USB 2.0"
      },
      {
        "label": "Network",
        "value": "2 x GbE RJ45 LAN"
      },
      {
        "label": "Serial",
        "value": "4 x DB9 COM (RS232/422/485)"
      },
      {
        "label": "Storage",
        "value": "1 x MSATA, 1 x HDD/SSD"
      },
      {
        "label": "Power",
        "value": "1 x 3-pin Phoenix terminal power connector, supports 9-36V DC input"
      },
      {
        "label": "System",
        "value": "Windows® 7/8/10, WES 7/10, LINUX"
      },
      {
        "label": "Operating Environment",
        "value": "Working Temp: -20°C to +60°C"
      },
      {
        "label": "Dimensions",
        "value": "240 x 150 x 65 mm"
      }
    ],
    "operatingRange": "Working Temp: -20°C to +60°C"
  },
  {
    "id": "mcipc7",
    "name": "MCIPC7",
    "series": "C",
    "tagline": "MCIPC7 multi-COM industrial computer with dual LAN",
    "description": "MCIPC7 is a multi-COM industrial computer with dual-LAN architecture. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/c-series/mcipc7/images/main-square-srgb.jpg",
    "highlights": [
      "Optional Intel 4th Gen Core i3/i5/i7 CPU",
      "1 x HDMI, 1 x VGA",
      "2 x GbE RJ45 Intel i211/i210",
      "6 x DB9 COM (2 support RS485/RS422)"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPC7"
      },
      {
        "label": "Series",
        "value": "C Series"
      },
      {
        "label": "CPU",
        "value": "Optional Intel 4th Gen Core i3/i5/i7 CPU"
      },
      {
        "label": "Display",
        "value": "1 x HDMI, 1 x VGA"
      },
      {
        "label": "Memory",
        "value": "DDR3L SODIMM x1, maximum support 8GB"
      },
      {
        "label": "USB",
        "value": "2 x USB 3.0, 2 x USB 2.0"
      },
      {
        "label": "Network",
        "value": "2 x GbE RJ45 Intel i211/i210"
      },
      {
        "label": "Serial",
        "value": "6 x DB9 COM (2 support RS485/RS422)"
      },
      {
        "label": "Storage",
        "value": "1x MSATA , 1x HDD/SSD"
      },
      {
        "label": "Power",
        "value": "12V DC Input"
      },
      {
        "label": "System",
        "value": "Windows® 7/8/10, WES 7/10, LINUX"
      },
      {
        "label": "Operating Environment",
        "value": "Working Temp: -20°C to +60°C"
      },
      {
        "label": "Dimensions",
        "value": "210 x 150 x 68.4 mm"
      }
    ],
    "operatingRange": "Working Temp: -20°C to +60°C"
  },
  {
    "id": "mcipc8",
    "name": "MCIPC8",
    "series": "C",
    "tagline": "MCIPC8 multi-COM industrial computer with dual LAN",
    "description": "MCIPC8 is a multi-COM industrial computer with dual-LAN architecture. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/c-series/mcipc8/images/main-square-srgb.jpg",
    "highlights": [
      "Optional Intel 4th/5th/6th/7th/8th/10th Gen Core i3/i5/i7 CPU",
      "1 x HDMI, 1 x VGA",
      "2 x GbE RJ45 LAN",
      "6 x DB9 COM"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPC8"
      },
      {
        "label": "Series",
        "value": "C Series"
      },
      {
        "label": "CPU",
        "value": "Optional Intel 4th/5th/6th/7th/8th/10th Gen Core i3/i5/i7 CPU"
      },
      {
        "label": "Display",
        "value": "1 x HDMI, 1 x VGA"
      },
      {
        "label": "Memory",
        "value": "4th/5th Gen: 1 x DDR3L SODIMM, maximum support 8GB"
      },
      {
        "label": "USB",
        "value": "4 x USB 3.0, 2 x USB 2.0"
      },
      {
        "label": "Network",
        "value": "2 x GbE RJ45 LAN"
      },
      {
        "label": "Serial",
        "value": "6 x DB9 COM"
      },
      {
        "label": "Storage",
        "value": "1 x MSATA, 1 x HDD/SSD"
      },
      {
        "label": "Power",
        "value": "1 x 3-pin Phoenix terminal power connector, supports 9-36V DC input"
      },
      {
        "label": "System",
        "value": "Windows® 7/8/10, WES 7/10, LINUX"
      },
      {
        "label": "Operating Environment",
        "value": "Working Temp: -20°C to +60°C"
      },
      {
        "label": "Dimensions",
        "value": "249 x 150 x 86 mm"
      }
    ],
    "operatingRange": "Working Temp: -20°C to +60°C"
  },
  {
    "id": "mcipc9",
    "name": "MCIPC9",
    "series": "C",
    "tagline": "MCIPC9 multi-COM industrial computer with dual LAN",
    "description": "MCIPC9 is a multi-COM industrial computer with dual-LAN architecture. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/c-series/mcipc9/images/main-square-srgb.jpg",
    "highlights": [
      "Intel Core 14th Gen Ultra 125U / 125H / 155H / 185H full series processors",
      "1 x HDMI , 1 x DP",
      "2 x Intel I219LM + i226-V LAN",
      "COM2/COM3 support optional RS485 via jumper)"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPC9"
      },
      {
        "label": "Series",
        "value": "C Series"
      },
      {
        "label": "CPU",
        "value": "Intel Core 14th Gen Ultra 125U / 125H / 155H / 185H full series processors"
      },
      {
        "label": "Display",
        "value": "1 x HDMI , 1 x DP"
      },
      {
        "label": "Memory",
        "value": "1 x SO-DIMM slot, supports single-channel 5600MHz DDR5 memory,"
      },
      {
        "label": "USB",
        "value": "2 x USB 3.2 Gen2 (10Gbps), 8 x USB 2.0"
      },
      {
        "label": "Network",
        "value": "2 x Intel I219LM + i226-V LAN"
      },
      {
        "label": "Serial",
        "value": "COM2/COM3 support optional RS485 via jumper)"
      },
      {
        "label": "Power",
        "value": "DC 9-36V wide voltage input"
      },
      {
        "label": "System",
        "value": "Windows 10 / Windows 11 / Linux / Ubuntu / CentOS"
      },
      {
        "label": "Operating Environment",
        "value": "Operating Temperature: -20°C to 60°C"
      },
      {
        "label": "Dimensions",
        "value": "195 x 127 x 62 mm"
      }
    ],
    "operatingRange": "Operating Temperature: -20°C to 60°C"
  },
  {
    "id": "mcipcd1",
    "name": "MCIPCD1",
    "series": "D",
    "tagline": "MCIPCD1 multi-LAN industrial computer with dual COM",
    "description": "MCIPCD1 is a multi-LAN industrial computer with dual-COM architecture. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/d-series/mcipcd1/images/main-square-srgb.jpg",
    "highlights": [
      "Intel Celeron N5095/N5105 (Select option)",
      "1 x DP",
      "4 x 2.5G Ethernet port",
      "2 x DB9 COM(RS232/RS485)"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCD1"
      },
      {
        "label": "Series",
        "value": "D Series"
      },
      {
        "label": "CPU",
        "value": "Intel Celeron N5095/N5105 (Select option)"
      },
      {
        "label": "Display",
        "value": "1 x DP"
      },
      {
        "label": "Memory",
        "value": "1 x SO-DIMM DDR4 slot"
      },
      {
        "label": "USB",
        "value": "2 x USB2.0; 2 x USB3.0"
      },
      {
        "label": "Network",
        "value": "4 x 2.5G Ethernet port"
      },
      {
        "label": "Serial",
        "value": "2 x DB9 COM(RS232/RS485)"
      },
      {
        "label": "Storage",
        "value": "1 x mSATA SSD; 1 x SATA 6.0Gb/s (Support 2.5 inch HDD/SSD)"
      },
      {
        "label": "Power",
        "value": "DC 12V-4A 5.5 x 2.5 (Options PoE 24V)"
      },
      {
        "label": "System",
        "value": "Windows10 / windows11 / Linux"
      },
      {
        "label": "Operating Environment",
        "value": "-20~50℃;5%~85% Relative humidity,"
      },
      {
        "label": "Dimensions",
        "value": "187x120x50 (mm)"
      }
    ],
    "operatingRange": "-20~50℃;5%~85% Relative humidity,"
  },
  {
    "id": "mcipcd2",
    "name": "MCIPCD2",
    "series": "D",
    "tagline": "MCIPCD2 multi-LAN industrial computer with dual COM",
    "description": "MCIPCD2 is a multi-LAN industrial computer with dual-COM architecture. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/d-series/mcipcd2/images/main-square-srgb.jpg",
    "highlights": [
      "Intel EHL J6412/J6413/J6426 or Intel ADL-N N95/N100/N200/N300",
      "1 x HDMI 2.0, 1 x DP 1.4",
      "4 x 2.5GbE RJ45 LAN",
      "1 x DB-9 COM (COM2: RS-232)"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCD2"
      },
      {
        "label": "Series",
        "value": "D Series"
      },
      {
        "label": "CPU",
        "value": "Intel EHL J6412/J6413/J6426 or Intel ADL-N N95/N100/N200/N300"
      },
      {
        "label": "Display",
        "value": "1 x HDMI 2.0, 1 x DP 1.4"
      },
      {
        "label": "Memory",
        "value": "1 x DDR4 SODIMM slot, supports up to 16GB"
      },
      {
        "label": "USB",
        "value": "4 x USB 2.0, 2 x USB 3.0"
      },
      {
        "label": "Network",
        "value": "4 x 2.5GbE RJ45 LAN"
      },
      {
        "label": "Serial",
        "value": "1 x DB-9 COM (COM2: RS-232)"
      },
      {
        "label": "Storage",
        "value": "1 x HDD/SSD, 1 x mSATA, 1 x M.2 NVMe"
      },
      {
        "label": "Power",
        "value": "DC 12V"
      },
      {
        "label": "System",
        "value": "Windows 10, Windows 11, Linux"
      },
      {
        "label": "Operating Environment",
        "value": "Operating Temperature -20°C to +60°C"
      },
      {
        "label": "Dimensions",
        "value": "135 x 127 x 38.7 mm"
      }
    ],
    "operatingRange": "Operating Temperature -20°C to +60°C"
  },
  {
    "id": "mcipcd3",
    "name": "MCIPCD3",
    "series": "D",
    "tagline": "MCIPCD3 multi-LAN industrial computer with dual COM",
    "description": "MCIPCD3 is a multi-LAN industrial computer with dual-COM architecture. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/d-series/mcipcd3/images/main-square-srgb.jpg",
    "highlights": [
      "Optional Intel 2955U, 4th/6th/7th/8th Gen Core i3/i5/i7 CPU",
      "1 x HDMI",
      "6 x GbE RJ45 LAN",
      "1 x DB-9 RS232 (COM2)"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCIPCD3"
      },
      {
        "label": "Series",
        "value": "D Series"
      },
      {
        "label": "CPU",
        "value": "Optional Intel 2955U, 4th/6th/7th/8th Gen Core i3/i5/i7 CPU"
      },
      {
        "label": "Display",
        "value": "1 x HDMI"
      },
      {
        "label": "Memory",
        "value": "1 x DDR3L SO-DIMM slot, maximum support 16GB"
      },
      {
        "label": "USB",
        "value": "4 x USB"
      },
      {
        "label": "Network",
        "value": "6 x GbE RJ45 LAN"
      },
      {
        "label": "Serial",
        "value": "1 x DB-9 RS232 (COM2)"
      },
      {
        "label": "Storage",
        "value": "1 x MSATA, 1 x HDD/SSD"
      },
      {
        "label": "Power",
        "value": "12V DC Input"
      },
      {
        "label": "System",
        "value": "Windows 7/8/10, Linux"
      },
      {
        "label": "Operating Environment",
        "value": "Working Temp: -20°C to 70°C"
      }
    ],
    "operatingRange": "Working Temp: -20°C to 70°C"
  },
  {
    "id": "mctpc-1201e",
    "name": "MCTPC-1201E",
    "series": "TPC",
    "tagline": "12.1-inch 1024x768 industrial panel PC",
    "description": "MCTPC-1201E is an industrial panel PC with an integrated display. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/tpc-series/mctpc-1201e/images/main-square-srgb.jpg",
    "highlights": [
      "Intel Celeron J4125/J6412, Intel Processor N100/N150; Intel Core 8th/10th/11th/12th/13th Gen i3/i5/i7",
      "LCD Type: 12.1\" TFT-LCD; Resolution: 1024x768",
      "2 x 2.5GbE RJ45 Intel i225V/i226V (Expandable to 4 LAN ports)",
      "2 x DB-9 COM1 & COM2 (RS-232/422/485)"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCTPC-1201E"
      },
      {
        "label": "Series",
        "value": "TPC Series"
      },
      {
        "label": "CPU",
        "value": "Intel Celeron J4125/J6412, Intel Processor N100/N150; Intel Core 8th/10th/11th/12th/13th Gen i3/i5/i7"
      },
      {
        "label": "Display",
        "value": "LCD Type: 12.1\" TFT-LCD; Resolution: 1024x768"
      },
      {
        "label": "Memory",
        "value": "N100/N150: 1 x DDR5 SODIMM"
      },
      {
        "label": "USB",
        "value": "8th/10th/12th/13th Gen: 4 x USB 3.0, 2 x USB 2.0"
      },
      {
        "label": "Network",
        "value": "2 x 2.5GbE RJ45 Intel i225V/i226V (Expandable to 4 LAN ports)"
      },
      {
        "label": "Serial",
        "value": "2 x DB-9 COM1 & COM2 (RS-232/422/485)"
      },
      {
        "label": "Storage",
        "value": "1 x M.2 2242/2260/2280 SATA, 1 x 2.5\" HDD/SSD"
      },
      {
        "label": "Power",
        "value": "DC 9-36V (4-pin aviation connector)"
      },
      {
        "label": "System",
        "value": "Windows, LINUX"
      },
      {
        "label": "Operating Environment",
        "value": "Working Temp: -20°C to +60°C"
      },
      {
        "label": "Dimensions",
        "value": "293 x 234 x 66.5 mm"
      }
    ],
    "operatingRange": "Working Temp: -20°C to +60°C"
  },
  {
    "id": "mctpc-1303e",
    "name": "MCTPC-1303E",
    "series": "TPC",
    "tagline": "13.3-inch 1920x1080 industrial panel PC",
    "description": "MCTPC-1303E is an industrial panel PC with an integrated display. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/tpc-series/mctpc-1303e/images/main-square-srgb.jpg",
    "highlights": [
      "Intel Celeron J4125/J6412, Intel Processor N100/N150; Intel Core 8th/10th/11th/12th/13th Gen i3/i5/i7",
      "LCD Type: 13.3\" TFT-LCD; Resolution: 1920x1080",
      "2 x 2.5GbE RJ45 Intel i225V/i226V (Expandable to 4 LAN ports)",
      "2 x DB-9 COM1 & COM2 (RS-232/422/485)"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCTPC-1303E"
      },
      {
        "label": "Series",
        "value": "TPC Series"
      },
      {
        "label": "CPU",
        "value": "Intel Celeron J4125/J6412, Intel Processor N100/N150; Intel Core 8th/10th/11th/12th/13th Gen i3/i5/i7"
      },
      {
        "label": "Display",
        "value": "LCD Type: 13.3\" TFT-LCD; Resolution: 1920x1080"
      },
      {
        "label": "Memory",
        "value": "N100/N150: 1 x DDR5 SODIMM"
      },
      {
        "label": "USB",
        "value": "8th/10th/12th/13th Gen: 4 x USB 3.0, 2 x USB 2.0"
      },
      {
        "label": "Network",
        "value": "2 x 2.5GbE RJ45 Intel i225V/i226V (Expandable to 4 LAN ports)"
      },
      {
        "label": "Serial",
        "value": "2 x DB-9 COM1 & COM2 (RS-232/422/485)"
      },
      {
        "label": "Storage",
        "value": "1 x M.2 2242/2260/2280 SATA, 1 x 2.5\" HDD/SSD"
      },
      {
        "label": "Power",
        "value": "DC 9-36V (4-pin aviation connector)"
      },
      {
        "label": "System",
        "value": "Windows, LINUX"
      },
      {
        "label": "Operating Environment",
        "value": "Working Temp: -20°C to +60°C"
      },
      {
        "label": "Dimensions",
        "value": "327 x 204 x 66.5 mm"
      }
    ],
    "operatingRange": "Working Temp: -20°C to +60°C"
  },
  {
    "id": "mctpc-1501b",
    "name": "MCTPC-1501B",
    "series": "TPC",
    "tagline": "15.0-inch 1024x768 industrial panel PC",
    "description": "MCTPC-1501B is an industrial panel PC with an integrated display. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/tpc-series/mctpc-1501b/images/main-square-srgb.jpg",
    "highlights": [
      "Intel Celeron J4125/J6412, Intel Core 8th/10th/11th Gen-U i5/i7",
      "LCD Type: 15.0\" TFT-LCD; Resolution: 1024x768",
      "2 x 2.5 GbE RJ45 Intel i225V (Optional 4 x 2.5GbE RJ45 Intel i225V)",
      "2 x DB-9 COM1 & COM2 (RS-232/422/485)"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCTPC-1501B"
      },
      {
        "label": "Series",
        "value": "TPC Series"
      },
      {
        "label": "CPU",
        "value": "Intel Celeron J4125/J6412, Intel Core 8th/10th/11th Gen-U i5/i7"
      },
      {
        "label": "Display",
        "value": "LCD Type: 15.0\" TFT-LCD; Resolution: 1024x768"
      },
      {
        "label": "Memory",
        "value": "J4125/J6412: 1 x DDR4 SODIMM Core i5/i7: 2 x DDR4 SODIMM"
      },
      {
        "label": "USB",
        "value": "J4125/J6412: 4 x USB 2.0, 2 x USB 3.0"
      },
      {
        "label": "Network",
        "value": "2 x 2.5 GbE RJ45 Intel i225V (Optional 4 x 2.5GbE RJ45 Intel i225V)"
      },
      {
        "label": "Serial",
        "value": "2 x DB-9 COM1 & COM2 (RS-232/422/485)"
      },
      {
        "label": "Power",
        "value": "DC 9-36V (4-pin aviation connector)"
      },
      {
        "label": "System",
        "value": "Windows 10/11, WES 10, LINUX"
      },
      {
        "label": "Operating Environment",
        "value": "Working Temp: -20°C to +60°C"
      },
      {
        "label": "Dimensions",
        "value": "376.13 x 285.34 x 68.90 mm"
      }
    ],
    "operatingRange": "Working Temp: -20°C to +60°C"
  },
  {
    "id": "mctpc-1501e",
    "name": "MCTPC-1501E",
    "series": "TPC",
    "tagline": "15.0-inch 1024x768 industrial panel PC",
    "description": "MCTPC-1501E is an industrial panel PC with an integrated display. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/tpc-series/mctpc-1501e/images/main-square-srgb.jpg",
    "highlights": [
      "Intel Celeron J4125/J6412, Intel Processor N100/N150; Intel Core 8th/10th/11th/12th/13th Gen i3/i5/i7",
      "LCD Type: 15.0\" TFT-LCD; Resolution: 1024x768",
      "2 x 2.5GbE RJ45 Intel i225V/i226V (Expandable to 4 LAN ports)",
      "2 x DB-9 COM1 & COM2 (RS-232/422/485)"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCTPC-1501E"
      },
      {
        "label": "Series",
        "value": "TPC Series"
      },
      {
        "label": "CPU",
        "value": "Intel Celeron J4125/J6412, Intel Processor N100/N150; Intel Core 8th/10th/11th/12th/13th Gen i3/i5/i7"
      },
      {
        "label": "Display",
        "value": "LCD Type: 15.0\" TFT-LCD; Resolution: 1024x768"
      },
      {
        "label": "Memory",
        "value": "N100/N150: 1 x DDR5 SODIMM"
      },
      {
        "label": "USB",
        "value": "8th/10th/12th/13th Gen: 4 x USB 3.0, 2 x USB 2.0"
      },
      {
        "label": "Network",
        "value": "2 x 2.5GbE RJ45 Intel i225V/i226V (Expandable to 4 LAN ports)"
      },
      {
        "label": "Serial",
        "value": "2 x DB-9 COM1 & COM2 (RS-232/422/485)"
      },
      {
        "label": "Storage",
        "value": "1 x M.2 2242/2260/2280 SATA, 1 x 2.5\" HDD/SSD"
      },
      {
        "label": "Power",
        "value": "DC 9-36V (4-pin aviation connector)"
      },
      {
        "label": "System",
        "value": "Windows, LINUX"
      },
      {
        "label": "Operating Environment",
        "value": "Working Temp: -20°C to +60°C"
      },
      {
        "label": "Dimensions",
        "value": "356 x 280 x 66.5 mm"
      }
    ],
    "operatingRange": "Working Temp: -20°C to +60°C"
  },
  {
    "id": "mctpc-1506e",
    "name": "MCTPC-1506E",
    "series": "TPC",
    "tagline": "15.6-inch 1920x1080 industrial panel PC",
    "description": "MCTPC-1506E is an industrial panel PC with an integrated display. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/tpc-series/mctpc-1506e/images/main-square-srgb.jpg",
    "highlights": [
      "Intel Celeron J4125/J6412, Intel Processor N100/N150; Intel Core 8th/10th/11th/12th/13th Gen i3/i5/i7",
      "LCD Type: 15.6\" TFT-LCD; Resolution: 1920x1080",
      "2 x 2.5GbE RJ45 Intel i225V/i226V (Expandable to 4 LAN ports)",
      "2 x DB-9 COM1 & COM2 (RS-232/422/485)"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCTPC-1506E"
      },
      {
        "label": "Series",
        "value": "TPC Series"
      },
      {
        "label": "CPU",
        "value": "Intel Celeron J4125/J6412, Intel Processor N100/N150; Intel Core 8th/10th/11th/12th/13th Gen i3/i5/i7"
      },
      {
        "label": "Display",
        "value": "LCD Type: 15.6\" TFT-LCD; Resolution: 1920x1080"
      },
      {
        "label": "Memory",
        "value": "N100/N150: 1 x DDR5 SODIMM"
      },
      {
        "label": "USB",
        "value": "8th/10th/12th/13th Gen: 4 x USB 3.0, 2 x USB 2.0"
      },
      {
        "label": "Network",
        "value": "2 x 2.5GbE RJ45 Intel i225V/i226V (Expandable to 4 LAN ports)"
      },
      {
        "label": "Serial",
        "value": "2 x DB-9 COM1 & COM2 (RS-232/422/485)"
      },
      {
        "label": "Storage",
        "value": "1 x M.2 2242/2260/2280 SATA, 1 x 2.5\" HDD/SSD"
      },
      {
        "label": "Power",
        "value": "DC 9-36V (4-pin aviation connector)"
      },
      {
        "label": "System",
        "value": "Windows, LINUX"
      },
      {
        "label": "Operating Environment",
        "value": "Working Temp: -20°C to +60°C"
      },
      {
        "label": "Dimensions",
        "value": "378.56 x 235.49 x 66.5 mm"
      }
    ],
    "operatingRange": "Working Temp: -20°C to +60°C"
  },
  {
    "id": "mctpc-1805e",
    "name": "MCTPC-1805E",
    "series": "TPC",
    "tagline": "18.5-inch 1920x1080 industrial panel PC",
    "description": "MCTPC-1805E is an industrial panel PC with an integrated display. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/tpc-series/mctpc-1805e/images/main-square-srgb.jpg",
    "highlights": [
      "Intel Celeron J4125/J6412, Intel Processor N100/N150; Intel Core 8th/10th/11th/12th/13th Gen i3/i5/i7",
      "LCD Type: 18.5\" TFT-LCD; Resolution: 1920x1080",
      "2 x 2.5GbE RJ45 Intel i225V/i226V (Expandable to 4 LAN ports)",
      "2 x DB-9 COM1 & COM2 (RS-232/422/485)"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCTPC-1805E"
      },
      {
        "label": "Series",
        "value": "TPC Series"
      },
      {
        "label": "CPU",
        "value": "Intel Celeron J4125/J6412, Intel Processor N100/N150; Intel Core 8th/10th/11th/12th/13th Gen i3/i5/i7"
      },
      {
        "label": "Display",
        "value": "LCD Type: 18.5\" TFT-LCD; Resolution: 1920x1080"
      },
      {
        "label": "Memory",
        "value": "N100/N150: 1 x DDR5 SODIMM"
      },
      {
        "label": "USB",
        "value": "8th/10th/12th/13th Gen: 4 x USB 3.0, 2 x USB 2.0"
      },
      {
        "label": "Network",
        "value": "2 x 2.5GbE RJ45 Intel i225V/i226V (Expandable to 4 LAN ports)"
      },
      {
        "label": "Serial",
        "value": "2 x DB-9 COM1 & COM2 (RS-232/422/485)"
      },
      {
        "label": "Storage",
        "value": "1 x M.2 2242/2260/2280 SATA, 1 x 2.5\" HDD/SSD"
      },
      {
        "label": "Power",
        "value": "DC 9-36V (4-pin aviation connector)"
      },
      {
        "label": "System",
        "value": "Windows, LINUX"
      },
      {
        "label": "Operating Environment",
        "value": "Working Temp: -20°C to +60°C"
      },
      {
        "label": "Dimensions",
        "value": "447.2 x 273.6 x 66.5 mm"
      }
    ],
    "operatingRange": "Working Temp: -20°C to +60°C"
  },
  {
    "id": "mctpc-2105e",
    "name": "MCTPC-2105E",
    "series": "TPC",
    "tagline": "21.5-inch 1920x1080 industrial panel PC",
    "description": "MCTPC-2105E is an industrial panel PC with an integrated display. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/tpc-series/mctpc-2105e/images/main-square-srgb.jpg",
    "highlights": [
      "Intel Celeron J4125/J6412, Intel Processor N100/N150; Intel Core 8th/10th/11th/12th/13th Gen i3/i5/i7",
      "LCD Type: 21.5\" TFT-LCD; Resolution: 1920x1080",
      "2 x 2.5GbE RJ45 Intel i225V/i226V (Expandable to 4 LAN ports)",
      "2 x DB-9 COM1 & COM2 (RS-232/422/485)"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCTPC-2105E"
      },
      {
        "label": "Series",
        "value": "TPC Series"
      },
      {
        "label": "CPU",
        "value": "Intel Celeron J4125/J6412, Intel Processor N100/N150; Intel Core 8th/10th/11th/12th/13th Gen i3/i5/i7"
      },
      {
        "label": "Display",
        "value": "LCD Type: 21.5\" TFT-LCD; Resolution: 1920x1080"
      },
      {
        "label": "Memory",
        "value": "N100/N150: 1 x DDR5 SODIMM"
      },
      {
        "label": "USB",
        "value": "8th/10th/12th/13th Gen: 4 x USB 3.0, 2 x USB 2.0"
      },
      {
        "label": "Network",
        "value": "2 x 2.5GbE RJ45 Intel i225V/i226V (Expandable to 4 LAN ports)"
      },
      {
        "label": "Serial",
        "value": "2 x DB-9 COM1 & COM2 (RS-232/422/485)"
      },
      {
        "label": "Storage",
        "value": "1 x M.2 2242/2260/2280 SATA, 1 x 2.5\" HDD/SSD"
      },
      {
        "label": "Power",
        "value": "DC 9-36V (4-pin aviation connector)"
      },
      {
        "label": "System",
        "value": "Windows, LINUX"
      },
      {
        "label": "Operating Environment",
        "value": "Working Temp: -20°C to +60°C"
      },
      {
        "label": "Dimensions",
        "value": "514.86 x 311.17 x 66.5 mm"
      }
    ],
    "operatingRange": "Working Temp: -20°C to +60°C"
  },
  {
    "id": "mctpc-2308e",
    "name": "MCTPC-2308E",
    "series": "TPC",
    "tagline": "23.8-inch 1920x1080 industrial panel PC",
    "description": "MCTPC-2308E is an industrial panel PC with an integrated display. Available processor, memory, storage, and interface configurations are listed from the supplied product brochure.",
    "image": "/assets/products/industrial/tpc-series/mctpc-2308e/images/main-square-srgb.jpg",
    "highlights": [
      "Intel Celeron J4125/J6412, Intel Processor N100/N150; Intel Core 8th/10th/11th/12th/13th Gen i3/i5/i7",
      "LCD Type: 23.8\" TFT-LCD; Resolution: 1920x1080",
      "2 x 2.5GbE RJ45 Intel i225V/i226V (Expandable to 4 LAN ports)",
      "2 x DB-9 COM1 & COM2 (RS-232/422/485)"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCTPC-2308E"
      },
      {
        "label": "Series",
        "value": "TPC Series"
      },
      {
        "label": "CPU",
        "value": "Intel Celeron J4125/J6412, Intel Processor N100/N150; Intel Core 8th/10th/11th/12th/13th Gen i3/i5/i7"
      },
      {
        "label": "Display",
        "value": "LCD Type: 23.8\" TFT-LCD; Resolution: 1920x1080"
      },
      {
        "label": "Memory",
        "value": "N100/N150: 1 x DDR5 SODIMM"
      },
      {
        "label": "USB",
        "value": "8th/10th/12th/13th Gen: 4 x USB 3.0, 2 x USB 2.0"
      },
      {
        "label": "Network",
        "value": "2 x 2.5GbE RJ45 Intel i225V/i226V (Expandable to 4 LAN ports)"
      },
      {
        "label": "Serial",
        "value": "2 x DB-9 COM1 & COM2 (RS-232/422/485)"
      },
      {
        "label": "Storage",
        "value": "1 x M.2 2242/2260/2280 SATA, 1 x 2.5\" HDD/SSD"
      },
      {
        "label": "Power",
        "value": "DC 9-36V (4-pin aviation connector)"
      },
      {
        "label": "System",
        "value": "Windows, LINUX"
      },
      {
        "label": "Operating Environment",
        "value": "Working Temp: -20°C to +60°C"
      },
      {
        "label": "Dimensions",
        "value": "566.44 x 340.42 x 66.5 mm"
      }
    ],
    "operatingRange": "Working Temp: -20°C to +60°C"
  }
];
