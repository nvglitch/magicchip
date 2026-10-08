import type { IndustrialCatalogItem, IndustrialCatalogSpec } from '@/lib/industrial-catalog';

export type IndustrialSku = {
  key: string;
  label: string;
  legacyNames: string[];
  image: string;
  specs: IndustrialCatalogSpec[];
};

type MergedProduct = IndustrialCatalogItem & { skus: IndustrialSku[]; sourceBrochures: string[] };
const root = '/assets/products/industrial/merged';
const spec = (label: string, value: string): IndustrialCatalogSpec => ({ label, value });
const view = (model: string, side: string) => `${root}/${model}/${side}.webp`;
const gallery = (model: string, fan = false) => [
  { image: view(model, 'rear'), title: `${model.toUpperCase()} rear panel` },
  ...(fan ? [
    { image: view(model, 'front-fan'), title: `${model.toUpperCase()} optional fan enclosure` },
    { image: view(model, 'rear-fan'), title: `${model.toUpperCase()} optional fan rear panel` },
  ] : []),
];

// Store only shared facts on the family; Type-specific rows override them
// when rendering the selected configuration's complete specification table.
export const mergedBSeries: MergedProduct[] = [
  {
    id: 'mcipcb1', name: 'MCIPCB1', series: 'B',
    tagline: 'Dual-LAN industrial PC with Intel N-series and Core platform options',
    description: 'Select Type A, Type B or the fan-cooled i3-N305 configuration. Processor, memory, display outputs and network controllers depend on the chosen SKU; the images in the brochure illustrate Type A.',
    image: view('mcipcb1', 'front'), galleryCards: gallery('mcipcb1', true),
    highlights: ['Three platform configurations', 'Dual LAN', 'Two serial ports', '148 × 125 × 56 mm'],
    specs: [spec('Model', 'MCIPCB1 family'), spec('Series', 'B Series'), spec('Storage', '1 × SATA 3.0; 1 × M.2 2280 SSD (NGFF / PCIe x2 auto-switching)'), spec('Serial', '2 × COM RS232, with RS485 support'), spec('Power', '12 V DC'), spec('Operating Environment', '0°C to +60°C; 5–95% RH, non-condensing'), spec('Dimensions', '148 × 125 × 56 mm')],
    operatingRange: '0°C to +60°C',
    sourceBrochures: ['工控机IPC/B系列/MCIPCB1 brochure.pdf'],
    skus: [
      { key: 'type-a', label: 'Type A · N100 / N150', legacyNames: ['MCIPCB1A'], image: view('mcipcb1', 'rear'), specs: [spec('CPU', 'Intel Alder Lake-N N100 / N150'), spec('Memory', '1 × DDR4 SO-DIMM 3200 MHz, up to 32 GB'), spec('Display', '2 × HDMI 1.4 + 1 × DP 1.4; confirm maximum HDMI resolution for the selected board'), spec('Network', '2 × Intel I226-V'), spec('USB', '2 × USB 2.0, 2 × USB 3.0, 1 × USB 3.2 Gen 1, 1 × USB Type-C 3.0'), spec('Cooling', 'Standard enclosure; fan header does not imply an installed fan')] },
      { key: 'type-b', label: 'Type B · Intel Core', legacyNames: ['MCIPCB1B'], image: view('mcipcb1', 'rear'), specs: [spec('CPU', 'Intel Skylake-U / Kaby Lake-U Core i3 / i5 / i7'), spec('Memory', '1 × DDR3L SO-DIMM 1600 MHz, up to 16 GB'), spec('Display', 'HDMI 1.4 up to 4K 30 Hz; VGA up to 1080p 60 Hz; eDP header; optional HDMI replaces VGA'), spec('Network', '2 × Realtek RTL8111H Gigabit LAN (RTL8106E option)'), spec('USB', 'External: 4 × USB 3.0 + 2 × USB 2.0; internal: 2 × USB 2.0 header'), spec('Cooling', 'Standard enclosure; optional system-fan header')] },
      { key: 'fan', label: 'Fan-cooled · i3-N305', legacyNames: ['MCIPCB1F'], image: view('mcipcb1', 'front-fan'), specs: [spec('CPU', 'Intel Core i3-N305'), spec('Memory', '1 × DDR4 SO-DIMM 3200 MHz, up to 32 GB'), spec('Display', '2 × HDMI 1.4 + 1 × DP 1.4; confirm maximum HDMI resolution for the selected board'), spec('Network', '2 × Intel I226-V'), spec('USB', '2 × USB 2.0, 2 × USB 3.0, 1 × USB 3.2 Gen 1, 1 × USB Type-C 3.0'), spec('Cooling', 'Fan-equipped enclosure')] },
    ],
  },
  {
    id: 'mcipcb2', name: 'MCIPCB2', series: 'B',
    tagline: 'Compact dual-LAN industrial PC with DDR3 and DDR4 platform options',
    description: 'Type A and Type B share the same 136 × 126 × 40 mm enclosure. Select the DDR3 or DDR4 platform by processor, memory and other configuration details below.',
    image: view('mcipcb2', 'front'), galleryCards: gallery('mcipcb2'),
    highlights: ['Type A / Type B', 'Dual Gigabit LAN', 'Dual COM', '12 V DC'],
    specs: [spec('Model', 'MCIPCB2 family'), spec('Series', 'B Series'), spec('Display', 'HDMI + VGA'), spec('Network', '2 × Gigabit RJ45 LAN'), spec('Serial', '2 × COM RS232'), spec('Power', '12 V DC')],
    sourceBrochures: ['工控机IPC/B系列/MCIPCB2 brochure.pdf'],
    skus: [
      { key: 'type-a', label: 'Type A · DDR3', legacyNames: ['MCIPCB2-D3'], image: view('mcipcb2', 'rear'), specs: [spec('CPU', 'Intel Celeron N2810 / N2840 / N2910 / 2940 / J1900'), spec('Memory', '1 × DDR3 SO-DIMM; capacity and speed to confirm for the chosen processor'), spec('USB', '2 × USB 3.0 + 4 × USB 2.0'), spec('Storage', 'mSATA SSD + M.2 NVMe 2280 + 2.5-inch HDD / SSD'), spec('Dimensions', '136 × 126 × 40 mm'), spec('Operating Environment', '0°C to +50°C')] },
      { key: 'type-b', label: 'Type B · DDR4', legacyNames: ['MCIPCB2-D4'], image: view('mcipcb2', 'rear'), specs: [spec('CPU', 'Intel Celeron N4000 / J4125'), spec('Memory', '1 × DDR4 SO-DIMM 2400 MHz'), spec('USB', '2 × USB 3.0 + 4 × USB 2.0'), spec('Storage', 'mSATA SSD + M.2 NVMe 2280 + 2.5-inch HDD / SSD'), spec('Dimensions', '136 × 126 × 40 mm'), spec('Operating Environment', '0°C to +50°C')] },
    ],
  },
  {
    id: 'mcipcb6', name: 'MCIPCB6', series: 'B',
    tagline: 'Intel Core industrial PC with DDR3L and DDR4 platform choices',
    description: 'Three platform types share the same enclosure and dual-LAN, dual-COM layout. Choose Type A, B or C by processor generation, memory standard and DisplayPort capability.',
    image: view('mcipcb6', 'front'), galleryCards: gallery('mcipcb6'),
    highlights: ['Intel Core 4th–8th Gen options', 'DDR3L / DDR4 by Type', 'Dual Gigabit LAN', '12–19 V DC'],
    specs: [spec('Model', 'MCIPCB6 family'), spec('Series', 'B Series'), spec('Display', 'HDMI 1.4 up to 4K 30 Hz; DisplayPort version differs by Type'), spec('Storage', '1 × SATA 3.0 + 1 × M.2 Key-M 2280 SSD'), spec('Network', '2 × Realtek RTL8111H Gigabit LAN'), spec('USB', '4 × USB 3.0 + 2 × USB 2.0'), spec('Serial', '2 × COM RS232; RS485 via jumper; internal COM3/COM4 headers'), spec('Power', '12–19 V DC'), spec('Operating Environment', '0°C to +60°C'), spec('Dimensions', '148 × 126 × 56 mm')],
    operatingRange: '0°C to +60°C',
    sourceBrochures: ['工控机IPC/B系列/MCIPCB6 Brochure.pdf'],
    skus: [
      { key: 'type-a', label: 'Type A · 4th / 5th Gen', legacyNames: ['MCIPCB6'], image: view('mcipcb6', 'rear'), specs: [spec('CPU', 'Intel Core 4th / 5th Gen'), spec('Memory', '1 × DDR3L SO-DIMM 1333 / 1600 MHz, up to 16 GB'), spec('DisplayPort', 'DP 1.1, up to 4K 30 Hz'), spec('Power connector', 'Onboard 2-pin Phoenix terminal')] },
      { key: 'type-b', label: 'Type B · DDR3L', legacyNames: ['MCIPCB6-DDR3L'], image: view('mcipcb6', 'rear'), specs: [spec('CPU', 'Intel Core 6th / 7th / 8th Gen'), spec('Memory', '1 × DDR3L SO-DIMM 1600 MHz, up to 16 GB'), spec('DisplayPort', 'DP 1.2, up to 4K 60 Hz'), spec('Power connector', 'Onboard 2-pin connector')] },
      { key: 'type-c', label: 'Type C · DDR4', legacyNames: ['MCIPCB6-DDR4'], image: view('mcipcb6', 'rear'), specs: [spec('CPU', 'Intel Core 6th / 7th / 8th Gen'), spec('Memory', '1 × DDR4 SO-DIMM, up to 32 GB'), spec('DisplayPort', 'DP 1.2, up to 4K 60 Hz'), spec('Power connector', 'Onboard 2-pin connector')] },
    ],
  },
  {
    id: 'mcipcb13', name: 'MCIPCB13', series: 'B',
    tagline: 'Industrial PC with Intel Core and Core Ultra platform types',
    description: 'Type A covers selected Intel Core generations; Type B covers Core Ultra or Core 3. Memory, display, USB and storage depend on the board platform and should be selected from the Type specifications below.',
    image: view('mcipcb13', 'front'), galleryCards: gallery('mcipcb13'),
    highlights: ['Intel Core / Core Ultra options', 'Up to 64 GB on selected platforms', 'Dual Gigabit LAN', '193.9 × 127 × 57.2 mm'],
    specs: [spec('Model', 'MCIPCB13 family'), spec('Series', 'B Series'), spec('Network', '2 × Realtek RTL8111H Gigabit LAN'), spec('Serial', '2 × DB9 COM; signaling for Type A requires confirmation'), spec('Power', '12–19 V DC'), spec('Operating Environment', '-20°C to +60°C'), spec('Dimensions', '193.9 × 127 × 57.2 mm')],
    operatingRange: '-20°C to +60°C',
    sourceBrochures: ['工控机IPC/B系列/MCIPCB13 brochure.pdf'],
    skus: [
      { key: 'type-a', label: 'Type A · Intel Core', legacyNames: ['MCIPCB13A'], image: view('mcipcb13', 'rear'), specs: [spec('CPU', 'Intel Core i3 / i5 / i7, selected 4th / 6th / 7th / 8th / 10th / 12th / 13th Gen platforms'), spec('Memory', '4th Gen: DDR3L up to 8 GB; 6th–8th Gen: DDR4 up to 16 GB; 8th/10th Gen boards: 2 × DDR4 up to 32 GB; 12th/13th Gen: DDR5 up to 64 GB. Verify the exact 8th Gen board before ordering.'), spec('Display', '1 × HDMI + 1 × VGA; optional HDMI replaces VGA'), spec('USB', '4 × USB 3.0 + 4 × USB 2.0'), spec('Storage', '4th Gen: mSATA; later boards: M.2 2280 SATA / NVMe; plus 2.5-inch HDD / SSD')] },
      { key: 'type-b', label: 'Type B · Core Ultra / Core 3', legacyNames: ['MCIPCB13B'], image: view('mcipcb13', 'rear'), specs: [spec('CPU', 'Intel Core Ultra 1 / 2 U5 / U7 or Intel Core 3 304 / 305 / 315 / 320 / 330 / 350 / 360'), spec('Memory', '1 × DDR5 SO-DIMM, up to 64 GB'), spec('Display', '2 × HDMI + 1 × DisplayPort'), spec('USB', 'Core Ultra: 4 × USB 3.0 + 4 × USB 2.0; Core 3: 2 × USB 3.0 + 6 × USB 2.0'), spec('Storage', 'M.2 2280 NVMe; 2.5-inch HDD / SSD on Core Ultra only, not Core 3')] },
    ],
  },
  {
    id: 'mcipcb14', name: 'MCIPCB14', series: 'B',
    tagline: 'DDR5 Intel N-series industrial PC with optional fan cooling',
    description: 'The standard and optional fan-equipped enclosures use the same N100 / i3-N305 board specification. Select the cooling option that fits the deployment; the processor and interfaces do not change with the enclosure.',
    image: view('mcipcb14', 'front'), galleryCards: gallery('mcipcb14', true),
    highlights: ['Intel N100 / i3-N305', 'DDR5 up to 32 GB', 'Dual Gigabit LAN', 'Standard or fan-equipped enclosure'],
    specs: [spec('Model', 'MCIPCB14 family'), spec('Series', 'B Series'), spec('CPU', 'Intel Alder Lake-N N100 / Core i3-N305'), spec('Memory', '1 × DDR5 SO-DIMM 4800 MHz, up to 32 GB'), spec('Display', 'HDMI 2.0 + DP 1.4 + USB Type-C display output, up to 4K 60 Hz; VGA up to 1080p 60 Hz'), spec('Storage', 'SATA 3.0 + M.2 SSD 2280'), spec('Network', '2 × Realtek RTL8111H Gigabit LAN'), spec('USB', '3 × USB 2.0 + 2 × USB 3.2 Gen 2 + 1 × USB Type-C 3.2 Gen 2'), spec('Serial', '2 × COM RS232 with RS485 support'), spec('Power', '12 V DC'), spec('Operating Environment', '-20°C to +60°C'), spec('Dimensions', '148 × 125 × 56 mm')],
    operatingRange: '-20°C to +60°C',
    sourceBrochures: ['工控机IPC/B系列/MCIPCB14 Brochure.pdf'],
    skus: [
      { key: 'standard', label: 'Standard enclosure', legacyNames: ['MCIPCB14'], image: view('mcipcb14', 'front'), specs: [spec('Cooling', 'Standard enclosure; 4-pin 12 V fan header is available for system monitoring')] },
      { key: 'fan', label: 'Optional fan enclosure', legacyNames: ['MCIPCB14F'], image: view('mcipcb14', 'front-fan'), specs: [spec('Cooling', 'Fan-equipped enclosure; same board, CPU and interface specification as the standard configuration')] },
    ],
  },
  {
    id: 'mcipcb15', name: 'MCIPCB15', series: 'B',
    tagline: 'Dual-LAN industrial PC with four standard platform types and a fan-cooled option',
    description: 'Type A through D differ in CPU generation, memory, display and expansion. The optional fan configuration uses a 12th Gen Intel Core platform. Compare the selected SKU before specifying ports, temperature range or power.',
    image: view('mcipcb15', 'front'), galleryCards: gallery('mcipcb15', true),
    highlights: ['Five configurations', 'Dual Gigabit LAN', 'Dual COM', 'DDR3L / DDR4 by platform'],
    specs: [spec('Model', 'MCIPCB15 family'), spec('Series', 'B Series'), spec('Network', '2 × Realtek RTL8111H Gigabit LAN'), spec('Serial', '2 × COM RS232; RS485 via jumper'), spec('Storage', '1 × SATA 3.0')],
    sourceBrochures: ['工控机IPC/B系列/MCIPCB15 brochure.pdf'],
    skus: [
      { key: 'type-a', label: 'Type A · N5095', legacyNames: ['MCIPCB15A'], image: view('mcipcb15', 'rear'), specs: [spec('CPU', 'Intel Celeron N5095'), spec('Memory', '1 × DDR4 SO-DIMM 2933 MHz, up to 32 GB'), spec('Display', 'HDMI 2.0 + VGA; optional DP replaces VGA'), spec('USB', '4 × USB 3.0 + 2 × USB 2.0'), spec('Storage expansion', 'M.2 Key-M 2280'), spec('Power', '12 V DC'), spec('Operating Environment', '-10°C to +60°C'), spec('Dimensions', '148 × 126 × 56 mm')] },
      { key: 'type-b', label: 'Type B · J6412', legacyNames: ['MCIPCB15B'], image: view('mcipcb15', 'rear'), specs: [spec('CPU', 'Intel Celeron J6412'), spec('Memory', '1 × DDR4 SO-DIMM 3200 MHz, up to 32 GB'), spec('Display', 'HDMI 2.0 + VGA'), spec('USB', '4 × USB 3.1 + 2 × USB 2.0'), spec('Storage expansion', 'M.2 Key-M 2280'), spec('Power', '12 V DC'), spec('Operating Environment', '-10°C to +60°C'), spec('Dimensions', '148 × 125 × 56 mm')] },
      { key: 'type-c', label: 'Type C · 4th / 5th Gen Core', legacyNames: ['MCIPCB15C'], image: view('mcipcb15', 'rear'), specs: [spec('CPU', 'Intel Core i3 / i5 / i7, 4th / 5th Gen'), spec('Memory', '1 × DDR3L SO-DIMM 1333 MHz, up to 8 GB'), spec('Display', 'HDMI 1.4 + VGA'), spec('USB', '4 × USB 3.0 + 2 × USB 2.0'), spec('Storage expansion', 'mSATA 3.0'), spec('Power', '12 V DC'), spec('Operating Environment', '-20°C to +60°C'), spec('Dimensions', '148 × 125 × 56 mm')] },
      { key: 'type-d', label: 'Type D · 6th / 7th / 8th Gen Core', legacyNames: ['MCIPCB15D'], image: view('mcipcb15', 'rear'), specs: [spec('CPU', 'Intel Core, 6th / 7th / 8th Gen'), spec('Memory', '1 × DDR4 SO-DIMM 2133 MHz, up to 32 GB'), spec('Display', 'HDMI 1.4 + VGA / DP option'), spec('USB', '4 × USB 3.0 + 2 × USB 2.0'), spec('Storage expansion', 'M.2 Key-M 2280'), spec('Power', '12 V DC'), spec('Operating Environment', '-10°C to +60°C'), spec('Dimensions', '148 × 125 × 56 mm')] },
      { key: 'fan', label: 'Fan-cooled · 12th Gen Core', legacyNames: ['MCIPCB15E'], image: view('mcipcb15', 'front-fan'), specs: [spec('CPU', 'Intel Core i3 / i5 / i7, 12th Gen Alder Lake-U / P / H'), spec('Memory', '1 × DDR4 SO-DIMM 3200 MHz, up to 32 GB'), spec('Display', 'HDMI 2.0 + VGA'), spec('USB', '4 × USB 3.2 Gen 1 + 2 × USB 2.0'), spec('Storage expansion', 'M.2 Key-M 2280'), spec('Power', '12–19 V DC; onboard ATX 4-pin power connector'), spec('Operating Environment', '-10°C to +60°C'), spec('Cooling', 'Fan-equipped enclosure'), spec('Dimensions', '148 × 125 × 56 mm')] },
    ],
  },
  {
    id: 'mcipcb16', name: 'MCIPCB16', series: 'B',
    tagline: 'Compact dual-LAN Celeron PC with DDR3L and DDR4 platform types',
    description: 'Type A uses Bay Trail processors and DDR3L; Type B uses J4125 and DDR4. HDMI version, USB mix and storage interface speed also differ by Type.',
    image: view('mcipcb16', 'front'), galleryCards: gallery('mcipcb16'),
    highlights: ['J1900 / N2840 / J4125', 'Dual LAN', 'Two COM', '145 × 127 × 38 mm'],
    specs: [spec('Model', 'MCIPCB16 family'), spec('Series', 'B Series'), spec('Network', '2 × Realtek RTL8111H LAN'), spec('Serial', '2 × COM RS232 / RS485 via internal headers'), spec('Power', '12 V DC'), spec('Operating Environment', '-20°C to +60°C'), spec('Dimensions', '145 × 127 × 38 mm')],
    operatingRange: '-20°C to +60°C',
    sourceBrochures: ['工控机IPC/B系列/MCIPCB16 brochure.pdf'],
    skus: [
      { key: 'type-a', label: 'Type A · J1900 / N2840', legacyNames: ['MCIPCB16A'], image: view('mcipcb16', 'rear'), specs: [spec('CPU', 'Intel Celeron J1900 / N2840'), spec('Memory', '1 × DDR3L SO-DIMM 1333 MHz, up to 8 GB'), spec('Display', 'HDMI 1.2 up to 1080p 60 Hz + VGA'), spec('USB', '5 × USB 2.0 + 1 × USB 3.0 externally'), spec('Storage', 'SATA 2.0 + mSATA 2.0, each 3 Gb/s')] },
      { key: 'type-b', label: 'Type B · J4125', legacyNames: ['MCIPCB16B'], image: view('mcipcb16', 'rear'), specs: [spec('CPU', 'Intel Celeron J4125'), spec('Memory', '1 × DDR4 SO-DIMM 2400 MHz, up to 16 GB'), spec('Display', 'HDMI 1.4 up to 4K 30 Hz + VGA'), spec('USB', '2 × USB 2.0 + 4 × USB 3.0 externally'), spec('Storage', 'SATA 3.0 + mSATA 3.0, each 6 Gb/s')] },
    ],
  },
];

// J5005 has a different enclosure and its own brochure, so it keeps its own detail URL.
export const separateB2J5005: IndustrialCatalogItem = {
  id: 'mcipcb2-j5005', name: 'MCIPCB2-J5005', series: 'B',
  tagline: 'Intel Pentium Silver J5005 industrial PC with a distinct compact enclosure',
  description: 'MCIPCB2-J5005 uses a separate 135 × 127 × 38.7 mm chassis. Its USB layout, storage options and operating range differ from the MCIPCB2 Type A / Type B enclosure.',
  image: '/assets/products/industrial/b-series/mcipcb2-j5005/images/main-square-srgb.jpg',
  galleryCards: [
    { image: `${root}/mcipcb2-j5005/front.webp`, title: 'MCIPCB2-J5005 network and display panel' },
    { image: `${root}/mcipcb2-j5005/rear.webp`, title: 'MCIPCB2-J5005 USB and serial panel' },
  ],
  highlights: ['Intel Pentium Silver J5005', '1 × DDR4 SO-DIMM, up to 8 GB', 'Dual Gigabit LAN', '-20°C to +70°C'],
  specs: [
    spec('Model', 'MCIPCB2-J5005'), spec('Series', 'B Series'),
    spec('CPU', 'Intel Pentium Silver J5005'), spec('Memory', '1 × DDR4 SO-DIMM, up to 8 GB'),
    spec('Display', 'HDMI + VGA'), spec('Network', '2 × Gigabit RJ45 LAN'),
    spec('Serial', '2 × COM RS232'), spec('USB', '1 × USB 3.0 + 3 × USB 2.0'),
    spec('Storage', '1 × HDD / SSD + 1 × M.2 SSD'), spec('Power', '12 V DC'),
    spec('Operating Environment', '-20°C to +70°C'), spec('Dimensions', '135 × 127 × 38.7 mm'),
  ],
  operatingRange: '-20°C to +70°C',
  sourceBrochures: ['工控机IPC/B系列/MCIPCB2-J5005 brochure.pdf'],
};

export const mergedBSeriesAliases: Record<string, string> = Object.fromEntries(
  mergedBSeries.flatMap(product => product.skus.flatMap(sku => sku.legacyNames
    .filter(name => name.toLowerCase() !== product.id)
    .map(name => [name.toLowerCase(), `/products/industrial-mini-pc/${product.id}#sku-${sku.key}`]))),
);
