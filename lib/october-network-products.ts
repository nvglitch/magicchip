// Reviewed read-only ver2 SR brochures, October 13, 2026.
import type { FirewallCatalogItem } from '@/lib/firewall-catalog';
export const octoberFirewallProducts: FirewallCatalogItem[] = [
  {
    "id": "mc30s",
    "name": "MC30S",
    "series": "4L",
    "tagline": "Four-port 2.5GbE appliance with DDR4 and DDR5 configurations",
    "description": "Compare DDR4 and DDR5 CPU platforms in the MC30S enclosure. Both configurations provide four Intel i226 2.5GbE ports, HDMI and DisplayPort, RJ45 COM, NVMe and SATA storage. CPU, memory and TDP follow the selected configuration.",
    "highlights": [
      "DDR4 / DDR5 configurations",
      "4 x Intel i226 2.5GbE",
      "NVMe + SATA",
      "146 x 133 x 57 mm"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MC30S"
      },
      {
        "label": "Material",
        "value": "Aluminium"
      },
      {
        "label": "Graphics",
        "value": "Integrated Intel graphics; exact GPU depends on the selected CPU"
      },
      {
        "label": "Display",
        "value": "1 x DP port; 1 x HDMI port"
      },
      {
        "label": "Serial",
        "value": "1 x RJ45 COM"
      },
      {
        "label": "USB",
        "value": "2 x USB 3.0; 4 x USB 2.0 (internal pins)"
      },
      {
        "label": "Power",
        "value": "DC 12 V / 4 A, 5.5 x 2.5 mm jack"
      },
      {
        "label": "Network",
        "value": "4 x Intel i226 2.5 Gigabit Ethernet"
      },
      {
        "label": "Expansion",
        "value": "1 x Mini PCIe for Wi-Fi / Bluetooth / 4G; 1 x M.2 2242 for 5G"
      },
      {
        "label": "Dimensions",
        "value": "146 x 133 x 57 mm"
      },
      {
        "label": "BIOS",
        "value": "AMI UEFI BIOS"
      },
      {
        "label": "System",
        "value": "Windows 10 / Windows 11 / Linux"
      },
      {
        "label": "Operating Environment",
        "value": "0-50 C; 0%-95% relative humidity, non-condensing"
      },
      {
        "label": "Front I/O",
        "value": "Power input; 4 x 2.5 GbE; RJ45 COM; power / HDD LEDs"
      },
      {
        "label": "Rear I/O",
        "value": "2 x USB 3.0; 2 x USB 2.0; HDMI; DP; power; CLR-CMOS; 4G/5G SIM"
      },
      {
        "label": "Internal I/O",
        "value": "SATA; M.2; Mini PCIe for Wi-Fi / Bluetooth / 4G; F-PANEL"
      },
      {
        "label": "Storage",
        "value": "1 x M.2 NVMe 2280; 1 x SATA 3.0 (2.5-inch HDD/SSD)"
      }
    ],
    "image": "/assets/products/firewall/ver2/mc30s/front.webp",
    "galleryImages": [
      "/assets/products/firewall/ver2/mc30s/front.webp",
      "/assets/products/firewall/ver2/mc30s/rear.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/firewall/ver2/mc30s/front.webp",
        "title": "MC30S front panel"
      },
      {
        "image": "/assets/products/firewall/ver2/mc30s/rear.webp",
        "title": "MC30S rear panel"
      }
    ],
    "sourceBrochure": "软路由SR/MC30S brochure.pdf",
    "sourceSha256": "52d5069da09f4c846875e310d3b070705fbd71864841ee9bacb3600395bed016",
    "operatingRange": "0°C to 50°C",
    "skus": [
      {
        "key": "ddr4",
        "label": "DDR4 · N6415 / J5005 / J6413 / N5105",
        "legacyNames": [
          "MC30S DDR4"
        ],
        "image": "/assets/products/firewall/ver2/mc30s/front.webp",
        "galleryCards": [
          {
            "image": "/assets/products/firewall/ver2/mc30s/front.webp",
            "title": "MC30S front panel"
          },
          {
            "image": "/assets/products/firewall/ver2/mc30s/rear.webp",
            "title": "MC30S rear panel"
          }
        ],
        "specs": [
          {
            "label": "CPU",
            "value": "Intel N6415 / J5005 / J6413 / N5105"
          },
          {
            "label": "Memory",
            "value": "1 x DDR4 SO-DIMM, up to 16GB"
          },
          {
            "label": "TDP",
            "value": "Depends on the selected CPU"
          }
        ]
      },
      {
        "key": "ddr5",
        "label": "DDR5 · N95 / N100 / N200 / i3-N305",
        "legacyNames": [
          "MC30S DDR5",
          "MC30S N100"
        ],
        "image": "/assets/products/firewall/ver2/mc30s/front.webp",
        "galleryCards": [
          {
            "image": "/assets/products/firewall/ver2/mc30s/front.webp",
            "title": "MC30S front panel"
          },
          {
            "image": "/assets/products/firewall/ver2/mc30s/rear.webp",
            "title": "MC30S rear panel"
          }
        ],
        "specs": [
          {
            "label": "CPU",
            "value": "Intel N95 / N100 / N200 / i3-N305; N100: 4 cores, up to 3.4 GHz"
          },
          {
            "label": "Memory",
            "value": "1 x DDR5-4800 SO-DIMM, up to 16GB"
          },
          {
            "label": "TDP",
            "value": "N100 configuration: 10–15W; other CPUs depend on configuration"
          }
        ]
      }
    ]
  },
  {
    "id": "mc30w",
    "name": "MC30W",
    "series": "4L",
    "tagline": "Slim N100 network appliance with four 2.5GbE ports",
    "description": "MC30W combines Intel N100 processing, up to 16GB DDR5 and four Intel i226 2.5GbE ports in a 136 x 126 x 40 mm enclosure. NVMe, SATA and module slots support configurable storage and connectivity.",
    "highlights": [
      "Intel N100",
      "DDR5 up to 16GB",
      "4 x Intel 2.5GbE",
      "136 x 126 x 40 mm"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MC30W"
      },
      {
        "label": "CPU",
        "value": "Intel N100 processor 4 Core 3.4GHz"
      },
      {
        "label": "Chipset",
        "value": "Intel N-series N95/N100/N200/i3-N305"
      },
      {
        "label": "Graphics",
        "value": "Integrated Intel graphics; exact GPU depends on the selected CPU"
      },
      {
        "label": "Display",
        "value": "1 x DP port; 1 x HDMI port"
      },
      {
        "label": "Memory",
        "value": "1 x DDR5 4800MHZ SODIMM Up to 16GB"
      },
      {
        "label": "Serial ports USB",
        "value": "1 x RJ45 COM 2 x USB3.0; 4 x USB2.0 (Built-in pin)"
      },
      {
        "label": "USB",
        "value": "2 x USB3.0; 4 x USB2.0 (Built-in pin)"
      },
      {
        "label": "Power",
        "value": "DC 12V-4A 5.5 x 2.5"
      },
      {
        "label": "Network",
        "value": "4 x Intel i226 2.5Gigabit Ethernet"
      },
      {
        "label": "Expansion",
        "value": "1 x Mini pCle Channel for WiFi/Bluetooth/4G; 1 x M.2 2242 (Support 5G Communication)"
      },
      {
        "label": "Dimensions",
        "value": "136 x 126 x 40mm"
      },
      {
        "label": "BIOS",
        "value": "AMI UEFI BIOS"
      },
      {
        "label": "TDP",
        "value": "10-15W"
      },
      {
        "label": "System",
        "value": "Windows10/Windows11/Linux"
      },
      {
        "label": "Operating Environment",
        "value": "0~50 C; 0%~95% Relative humidity; (no condensation)"
      },
      {
        "label": "Front I/O",
        "value": "1 x Power Adapter port; 4 x 2.5G Ethernet port; 1 x RJ45 COM"
      },
      {
        "label": "Rear I/O",
        "value": "2 x USB3.0; 4 x USB2.0; 1 x HDMI (With audio output); 1 x DP; 1 x Power Button; 1 x Power HDD LED; 1 x CLR-CMOS; 1 x 4G SIM Card slot; 1 x 5G SiM Card slot"
      },
      {
        "label": "Internal I/O",
        "value": "1 x SATA Interface; 1 x M.2 Interface; 1 x Mini PCIE Channel for WiFi/Bluetooth/4G; 1 x F-PANEL pin"
      },
      {
        "label": "Storage",
        "value": "1 x M.2 NVMe 2280; 1 x SATA3.0 (supports 2.5-inch HDD/SSD)"
      }
    ],
    "image": "/assets/products/firewall/ver2/mc30w/front.webp",
    "galleryImages": [
      "/assets/products/firewall/ver2/mc30w/front.webp",
      "/assets/products/firewall/ver2/mc30w/rear.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/firewall/ver2/mc30w/front.webp",
        "title": "MC30W front panel"
      },
      {
        "image": "/assets/products/firewall/ver2/mc30w/rear.webp",
        "title": "MC30W rear panel"
      }
    ],
    "sourceBrochure": "软路由SR/MC30W brochure.pdf",
    "sourceSha256": "f1662d25c0797279fd375e68448ef509ac17309a549116059e9ebf9f2e7de664",
    "operatingRange": "0°C to 50°C"
  },
  {
    "id": "mcsr6n1",
    "name": "MCSR6N1",
    "series": "6L",
    "tagline": "12th Gen Intel Core six-port appliance with DDR4",
    "description": "MCSR6N1 offers Intel Core i3-1215U / i5-1235U / i7-1265U, up to 64GB DDR4, six Intel i226-V 2.5GbE ports, NVMe and dual SATA. Its 145.6 x 145.4 x 53.6 mm enclosure uses DC 12–19V input.",
    "highlights": [
      "12th Gen Intel Core",
      "DDR4 up to 64GB",
      "6 x Intel 2.5GbE",
      "DC 12–19V"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCSR6N1"
      },
      {
        "label": "CPU",
        "value": "Intel 12th Core i3-1215U/i5-1235U/i7-1265U"
      },
      {
        "label": "Chipset",
        "value": "Intel Alder Lake-U"
      },
      {
        "label": "Graphics",
        "value": "Iris Xe Graphics 1.10GHz/Iris Xe Graphics 1.20GHz"
      },
      {
        "label": "Display",
        "value": "1 x HDMI 1.4; 1 x DP 1.4a; 1 x Type-C"
      },
      {
        "label": "Memory",
        "value": "2 x SO-DIMM DDR4 3200/2666/2400MHz Max 64G"
      },
      {
        "label": "Material",
        "value": "Made of aluminum alloy"
      },
      {
        "label": "USB",
        "value": "2 x USB 3.0; 2 x USB 3.2"
      },
      {
        "label": "Power",
        "value": "DC12-19V wide voltage"
      },
      {
        "label": "Network",
        "value": "6 x Intel i226-V(2.5Gigabit Ethernet port)"
      },
      {
        "label": "Expansion",
        "value": "1 x 4Pin CPUFAN; 1 x COM Pin; 1 x USB Pin"
      },
      {
        "label": "Dimensions",
        "value": "145.6mm x 145.4mm x 53.6mm"
      },
      {
        "label": "BIOS",
        "value": "AMI EFI BIOS supports auto power on"
      },
      {
        "label": "TDP",
        "value": "15W"
      },
      {
        "label": "System",
        "value": "Windows10 / windows11 / Linux"
      },
      {
        "label": "Operating Environment",
        "value": "-10~70 C; 5%~95% Relative humidity; (no condensation)"
      },
      {
        "label": "Front I/O",
        "value": "1 x Power button; 1 x HDMI 1.4; 1 x DP 1.4a; 1 x RST Button; 2 x USB 3.0; 1 x USB 3.2; 1 x Type-C; 1 x TF card"
      },
      {
        "label": "Rear I/O",
        "value": "1 x DC12-19V Power interface; 6 x Intel 2.5Gb Ethernet port; 1 x Hard disk indicator; 1 x Power indicator"
      },
      {
        "label": "Internal I/O",
        "value": "2 x SO-DIMM DDR4 memory slots; 1 x M.2 Wi-Fi header (expandable NVMe signals); 1 x M.2 NVMe x4 header; 1 x buzzer; 1 x 4-pin power header; 1 x 12 V CPU fan 4-pin header; 1 x COM header; 1 x USB header; 1 x 2-pin non-standard SATA connector; 1 x F-PANEL header"
      },
      {
        "label": "Storage",
        "value": "1 x M.2 NVMex4; 2 x SATA 3.0"
      }
    ],
    "image": "/assets/products/firewall/ver2/mcsr6n1/front.webp",
    "galleryImages": [
      "/assets/products/firewall/ver2/mcsr6n1/front.webp",
      "/assets/products/firewall/ver2/mcsr6n1/rear.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/firewall/ver2/mcsr6n1/front.webp",
        "title": "MCSR6N1 front panel"
      },
      {
        "image": "/assets/products/firewall/ver2/mcsr6n1/rear.webp",
        "title": "MCSR6N1 rear panel"
      }
    ],
    "sourceBrochure": "软路由SR/MCSR6N1 Brochure.pdf",
    "sourceSha256": "d30bb530243ce1e3e836aeeaa9b0ee2b6238368db454b62bc6e9ef12d6a14707",
    "operatingRange": "-10°C to 70°C"
  },
  {
    "id": "mcsr6n2",
    "name": "MCSR6N2",
    "series": "6L",
    "tagline": "13th Gen Intel U-series six-port appliance with DDR4",
    "description": "MCSR6N2 offers Intel U300 / Core i3-1315U / i5-1335U / i7-1355U, up to 64GB DDR4, six Intel i226-V 2.5GbE ports and DC 12–19V input. HDMI, DisplayPort and Type-C provide display connectivity; exact display versions and resolutions require confirmation.",
    "highlights": [
      "Intel U300 / 13th Gen Core",
      "DDR4 up to 64GB",
      "6 x Intel 2.5GbE",
      "NVMe + dual SATA"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCSR6N2"
      },
      {
        "label": "CPU",
        "value": "Intel 13th U300/i3-1315U/i5-1335U/i7-1355U"
      },
      {
        "label": "Graphics",
        "value": "13th Intel Integrated Graphics/Intel Iris Xe Graphics"
      },
      {
        "label": "Display",
        "value": "HDMI + DisplayPort + Type-C (data and display); connector revisions and resolutions require confirmation"
      },
      {
        "label": "Memory",
        "value": "2 x SO-DIMM DDR4 3200/2666/2400MHz Max 64G"
      },
      {
        "label": "Material",
        "value": "Made of aluminum alloy"
      },
      {
        "label": "USB",
        "value": "2 x USB 3.0; 2 x USB 3.2(10Gbps)"
      },
      {
        "label": "Power",
        "value": "DC12-19V wide voltage Supply(5.5 x 2.5 mm)"
      },
      {
        "label": "Network",
        "value": "6 x Intel i226-V(2.5Gigabit Ethernet port)"
      },
      {
        "label": "Expansion",
        "value": "M.2 E-Key WiFi socket can be converted to; M.2 NVMe hard drive signal with an available expansion board."
      },
      {
        "label": "Dimensions",
        "value": "145.4mm x 131.7mm x 60mm"
      },
      {
        "label": "BIOS",
        "value": "Supports power-on sele-test, GPIO, wake-on-LAN features"
      },
      {
        "label": "TDP",
        "value": "15W (Basic), 55W (Turbo)"
      },
      {
        "label": "System",
        "value": "Windows10 / windows11 / Linux"
      },
      {
        "label": "Operating Environment",
        "value": "0~70 C; 5%~95% Relative humidity; (no condensation)"
      },
      {
        "label": "Front I/O",
        "value": "1 x Power Button; 1 x HDMI; 1 x DP; 1 x Type-C (data & display); 1 x CLR-CMOS Button; 2 x USB 3.0; 2 x USB 3.2; 1 x TF card"
      },
      {
        "label": "Rear I/O",
        "value": "1 x DC12-19V Power interface; 6 x Intel 2.5Gb Ethernet port; 1 x Hard disk indicator; 1 x Power indicator"
      },
      {
        "label": "Internal I/O",
        "value": "2 x SO-DIMM DDR4 memory slots; 1 x M.2 Wi-Fi header (expandable NVMe signals); 1 x M.2 NVMe x4 header; 1 x buzzer; 1 x 4-pin power header; 1 x 12 V CPU fan 4-pin header; 1 x COM header; 1 x USB header; 1 x 2-pin non-standard SATA connector; 1 x F-PANEL header"
      },
      {
        "label": "Storage",
        "value": "1 x M.2 NVMex4; 2 x SATA (Unstandard 12 Pin 2.5-inch Interface)"
      }
    ],
    "image": "/assets/products/firewall/ver2/mcsr6n2/front.webp",
    "galleryImages": [
      "/assets/products/firewall/ver2/mcsr6n2/front.webp",
      "/assets/products/firewall/ver2/mcsr6n2/rear.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/firewall/ver2/mcsr6n2/front.webp",
        "title": "MCSR6N2 front panel"
      },
      {
        "image": "/assets/products/firewall/ver2/mcsr6n2/rear.webp",
        "title": "MCSR6N2 rear panel"
      }
    ],
    "sourceBrochure": "软路由SR/MCSR6N2 Brochure.pdf",
    "sourceSha256": "3fe84443af20a29701790f9cf21bb02f84502cb1812adf805aeb5c064682802c",
    "operatingRange": "0°C to 70°C"
  },
  {
    "id": "mcsr6n3",
    "name": "MCSR6N3",
    "series": "6L",
    "tagline": "12th / 13th Gen Intel six-port appliance with DDR5",
    "description": "MCSR6N3 combines Intel 12th / 13th Gen platform options, up to 64GB DDR5, six Intel i226-V 2.5GbE ports, dual M.2 NVMe and dual SATA. DC 12–19V and Type-C PD 19V / 65W input support different power arrangements.",
    "highlights": [
      "12th / 13th Gen Intel options",
      "DDR5 up to 64GB",
      "6 x Intel 2.5GbE",
      "Dual NVMe + dual SATA"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCSR6N3"
      },
      {
        "label": "CPU",
        "value": "Intel 12th Alder Lake-U i3-1215U/i5-1235U/i7-1265U; Intel 13th Raptor Lake-U i3-1315U/i5-1335U/i7-1355U/i7-1370P; Intel Pentium Gold 8505"
      },
      {
        "label": "Chipset",
        "value": "Intel Alder Lake/Raptor Lake-U"
      },
      {
        "label": "Graphics",
        "value": "Intel XE/UHD Graphics"
      },
      {
        "label": "Display",
        "value": "1 x HDMI 2.0; 1 x DP1.4; 1 x Type-C"
      },
      {
        "label": "Memory",
        "value": "2 x SO-DIMM DDR5 5600/5200/4800 MHz, max 64 GB"
      },
      {
        "label": "USB",
        "value": "2 x USB 3.2; 3 x USB 2.0"
      },
      {
        "label": "Power",
        "value": "DC12~19V Wide Voltage Supply(5.5 x 2.5 mm); 4Pin Type-C PD 19V 65W"
      },
      {
        "label": "Network",
        "value": "6 x Intel i226-V 2.5Gb"
      },
      {
        "label": "Expansion",
        "value": "1 x COM pin; 1 x 4 Pin CPU Fan Pin; 1 x USB 2.0 Pin; 1 x M.2 SSD2 (PCIEx4); M.2 SSD2 slot supports splitting into 4 x 1 signals"
      },
      {
        "label": "Dimensions",
        "value": "131.7mm x 145.4mm x 60mm"
      },
      {
        "label": "BIOS",
        "value": "AMI EFI BIOS, supports Power-on after blackout, GPIO, PXE"
      },
      {
        "label": "TDP",
        "value": "6W~28W"
      },
      {
        "label": "System",
        "value": "Windows10 / windows11 / Linux"
      },
      {
        "label": "Operating Environment",
        "value": "0~70 C; 5%~85% Relative humidity; (no condensation)"
      },
      {
        "label": "Front I/O",
        "value": "1 x Power button; 1 x Type-C (USB 4.0); 1 x HDMI 2.0; 2 x USB 3.2; 1 x DP 1.4; 2 x USB 2.0; 1 x CLR CMOS Button; 2 x Wi-Fi antenna reserved hole; 1 x TF Port"
      },
      {
        "label": "Rear I/O",
        "value": "1 x DC-12V(5.5 x 2.5 mm); 6 x 2.5G Ethernet; 2 x Wi-Fi antenna reserved hole"
      },
      {
        "label": "Internal I/O",
        "value": "1 x M.2 (PCIE4.0 x 4)NVMe; 1 x M.2 (PCIE3.0 x 4)NVMe; 1 x M.2 E Key WiFi Port; 1 x PANEL POW Pin; 1 x CPU 4Pin Fan Port; 2 x DDR5 RAM Port; 2 x SATA 3.0 Port; 1 x COM Pin; 1 x GPIO Pin"
      },
      {
        "label": "Storage",
        "value": "2 x M.2 NVMex4; 2 x SATA 3.0; 1 x TF"
      }
    ],
    "image": "/assets/products/firewall/ver2/mcsr6n3/front.webp",
    "galleryImages": [
      "/assets/products/firewall/ver2/mcsr6n3/front.webp",
      "/assets/products/firewall/ver2/mcsr6n3/rear.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/firewall/ver2/mcsr6n3/front.webp",
        "title": "MCSR6N3 front panel"
      },
      {
        "image": "/assets/products/firewall/ver2/mcsr6n3/rear.webp",
        "title": "MCSR6N3 rear panel"
      }
    ],
    "sourceBrochure": "软路由SR/MCSR6N3 Brochure.pdf",
    "sourceSha256": "ae8cbd9d112f04a2230b7b120b0ecbd435ff6ad532dd684d65acaa13f6dee44b",
    "operatingRange": "0°C to 70°C"
  },
  {
    "id": "mcsrp7",
    "name": "MCSRP7",
    "series": "4L",
    "tagline": "Compact Braswell four-port 2.5GbE fanless appliance",
    "description": "MCSRP7 uses Intel Pentium J3700 / J3710 processors, up to 8GB DDR3L and four Intel i225-V B3 2.5GbE ports. The 120 x 107.5 x 36.5 mm fanless aluminum chassis includes mSATA, SATA, COM, HDMI and DisplayPort.",
    "highlights": [
      "Pentium J3700 / J3710",
      "DDR3L up to 8GB",
      "4 x Intel i225-V B3",
      "Fanless aluminum chassis"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MCSRP7"
      },
      {
        "label": "CPU",
        "value": "Intel Pentium J3700 / J3710 (Braswell; 4 cores, 4 threads)"
      },
      {
        "label": "Graphics",
        "value": "Integrated Intel graphics"
      },
      {
        "label": "Display",
        "value": "HDMI 1.4: 1920 x 1080 @ 60 Hz; DP 1.2: 2560 x 1440 @ 60 Hz"
      },
      {
        "label": "Memory",
        "value": "1 x DDR3L SO-DIMM, 1600 / 1333 MHz, max 8 GB"
      },
      {
        "label": "Network",
        "value": "4 x Intel i225-V B3 2.5 GbE LAN"
      },
      {
        "label": "USB",
        "value": "2 x external USB 3.0; 1 x internal USB 2.0 header"
      },
      {
        "label": "Other",
        "value": "1 x COM; 1 x combo audio jack; Wi-Fi antenna openings"
      },
      {
        "label": "Expansion - Wi-Fi",
        "value": "1 x mini PCIe slot for 2.4 / 5 GHz Wi-Fi module"
      },
      {
        "label": "Internal I/O",
        "value": "1 x USB 2.0; 1 x F_PANEL; 1 x SATA power"
      },
      {
        "label": "Power",
        "value": "12 V DC, 5.5 x 2.5 mm barrel connector"
      },
      {
        "label": "TDP",
        "value": "6 W"
      },
      {
        "label": "Enclosure",
        "value": "Aluminum alloy, fanless passive cooling; black"
      },
      {
        "label": "Dimensions",
        "value": "120 x 107.5 x 36.5 mm; approx. 0.4 kg"
      },
      {
        "label": "Installation",
        "value": "Desktop or wall mount"
      },
      {
        "label": "Operating Environment",
        "value": "0 to 65 °C; 10% to 90% relative humidity"
      },
      {
        "label": "Front I/O",
        "value": "Power button; combo audio; 2 x USB 3.0; COM; HDMI 1.4; DP 1.2"
      },
      {
        "label": "Rear I/O",
        "value": "4 x 2.5 GbE; DC 12 V; power and drive status LEDs"
      },
      {
        "label": "Storage",
        "value": "1 x mSATA; 1 x SATA 3.0 (6 Gbps)"
      }
    ],
    "image": "/assets/products/firewall/ver2/mcsrp7/front.webp",
    "galleryImages": [
      "/assets/products/firewall/ver2/mcsrp7/front.webp",
      "/assets/products/firewall/ver2/mcsrp7/rear.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/firewall/ver2/mcsrp7/front.webp",
        "title": "MCSRP7 front panel"
      },
      {
        "image": "/assets/products/firewall/ver2/mcsrp7/rear.webp",
        "title": "MCSRP7 rear panel"
      }
    ],
    "sourceBrochure": "软路由SR/MCSRP7 brochure.pdf",
    "sourceSha256": "8538c21f866920d7f824e8a6b48618ce4e829bf8a39d7be06668c1ebc1ef3220",
    "operatingRange": "0°C to 65°C"
  },
  {
    "id": "mgsrn100",
    "name": "MGSRN100",
    "series": "4L",
    "tagline": "DDR5 four-port 2.5GbE Alder Lake-N appliance",
    "description": "MGSRN100 offers Intel N100 / N200 / i3-N305, up to 32GB DDR5, four Intel i226-V 2.5GbE ports, NVMe and M.2 E-key wireless expansion. The 145.6 x 145.4 x 53.6 mm enclosure uses 12V DC input.",
    "highlights": [
      "Intel N100 / N200 / i3-N305",
      "DDR5 up to 32GB",
      "4 x Intel 2.5GbE",
      "12V DC input"
    ],
    "specs": [
      {
        "label": "Model",
        "value": "MGSRN100"
      },
      {
        "label": "CPU",
        "value": "Intel 12th Gen Alder Lake-N N100/N200/i3-N305"
      },
      {
        "label": "Chipset",
        "value": "Alder Lake-N"
      },
      {
        "label": "Graphics",
        "value": "Intel UHD Graphics N100(24EU)/N200(32EU)/i3-N305(32EU)"
      },
      {
        "label": "Display",
        "value": "1 x HDMI 2.1; 1 x DP1.4 (All support 4k@60Hz)"
      },
      {
        "label": "Memory",
        "value": "1 x SO-DIMM DDR5 4800/5600 MHz Max 32Gb"
      },
      {
        "label": "Material",
        "value": "Made of aluminum alloy"
      },
      {
        "label": "USB",
        "value": "4 x USB2.0"
      },
      {
        "label": "Power",
        "value": "1 x DC-IN 12V(5.5 x 2.5 mm)"
      },
      {
        "label": "Network",
        "value": "4 x Intel i226-V(2.5G Ethernet port)"
      },
      {
        "label": "Wi-Fi",
        "value": "1 x M.2KEY-E (Bluetooth & Wi-Fi6)"
      },
      {
        "label": "Dimensions",
        "value": "145.6mm x 145.4mm x 53.6mm"
      },
      {
        "label": "BIOS",
        "value": "AMI EFI BIOS supports Auto-Power-On, Wake-On-Lan, PXE"
      },
      {
        "label": "TDP",
        "value": "6W/15W"
      },
      {
        "label": "System",
        "value": "WIN10/WIN11/Linux"
      },
      {
        "label": "Operating Environment",
        "value": "Temperature: 0°c~70°c; Humdity: 5%~85%, no-Condensing"
      },
      {
        "label": "Front I/O",
        "value": "1 x Power Button; 1 x CLR CMOS; 1 x TF Slot; 2 x WiFi Antennas holes; 2 x USB 2.0"
      },
      {
        "label": "Rear I/O",
        "value": "1 x DC-IN 12V(5.5 x 2.5 mm); 4 x Intel i226-V 2.5G Ethernet port; 2 x USB2.0; 1 x HDMI 2.1 (Support 4k@60Hz); 1 x DP1.4 (Support 4k@60Hz)"
      },
      {
        "label": "Internal I/O",
        "value": "2 x 4Pin fan header with temperature control; 1 x COM Pin Head; 1 x USB Pin Head; 1 x SW (Power off and disconnect USB pin)"
      },
      {
        "label": "Storage",
        "value": "1 x M.2 NVME x4 (Support multiple M.2 or mSATA/SATA)"
      }
    ],
    "image": "/assets/products/firewall/ver2/mgsrn100/front.webp",
    "galleryImages": [
      "/assets/products/firewall/ver2/mgsrn100/front.webp",
      "/assets/products/firewall/ver2/mgsrn100/rear.webp"
    ],
    "galleryCards": [
      {
        "image": "/assets/products/firewall/ver2/mgsrn100/front.webp",
        "title": "MGSRN100 front panel"
      },
      {
        "image": "/assets/products/firewall/ver2/mgsrn100/rear.webp",
        "title": "MGSRN100 rear panel"
      }
    ],
    "sourceBrochure": "软路由SR/MGSRN100 brochure.pdf",
    "sourceSha256": "5aafb096c94e4016cc81680ceb5aa865208600e26d2541e359828d4dc7537d7d",
    "operatingRange": "0°C to 70°C"
  }
];
