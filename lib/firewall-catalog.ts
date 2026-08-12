import { firewallBrochureSpecs } from '@/lib/firewall-brochure-specs';

export type FirewallSeriesCode = '2L' | '4L' | '6L' | '10G' | '1U';

export type FirewallCatalogSpec = {
  label: string;
  value: string;
};

export type FirewallCatalogItem = {
  id: string;
  name: string;
  series: FirewallSeriesCode;
  tagline: string;
  description: string;
  image: string;
  galleryImages: string[];
  highlights: string[];
  specs: FirewallCatalogSpec[];
  operatingRange?: string;
};

const seriesDirectories: Record<FirewallSeriesCode, string> = {
  '2L': 'dual-port-series',
  '4L': 'quad-port-series',
  '6L': 'six-port-series',
  '10G': 'high-speed-series',
  '1U': 'server-series',
};

type ProductInput = {
  id: string;
  name: string;
  series: FirewallSeriesCode;
  tagline: string;
  description: string;
  cpu: string;
  memory: string;
  network: string;
  display?: string;
  usb?: string;
  storage: string;
  expansion?: string;
  power?: string;
  dimensions?: string;
  operatingRange?: string;
  galleryCount?: number;
  includeMainInGallery?: boolean;
  highlights: string[];
};

const createProduct = (input: ProductInput): FirewallCatalogItem => {
  const imageBase = `/assets/products/firewall/${seriesDirectories[input.series]}/${input.id}/images`;
  const specs: FirewallCatalogSpec[] = [
    { label: 'CPU', value: input.cpu },
    { label: 'Memory', value: input.memory },
    { label: 'Network', value: input.network },
    input.display ? { label: 'Display', value: input.display } : null,
    input.usb ? { label: 'USB', value: input.usb } : null,
    { label: 'Storage', value: input.storage },
    input.expansion ? { label: 'Expansion', value: input.expansion } : null,
    input.power ? { label: 'Power', value: input.power } : null,
    input.dimensions ? { label: 'Dimensions', value: input.dimensions } : null,
    input.operatingRange ? { label: 'Operating Temperature', value: input.operatingRange } : null,
  ].filter((spec): spec is FirewallCatalogSpec => Boolean(spec));

  return {
    id: input.id,
    name: input.name,
    series: input.series,
    tagline: input.tagline,
    description: input.description,
    image: `${imageBase}/main-square.png`,
    galleryImages: [
      ...(input.includeMainInGallery ? [`${imageBase}/main-square.png`] : []),
      ...Array.from({ length: input.galleryCount ?? 2 }, (_, index) => `${imageBase}/view-${index + 1}.png`),
    ],
    highlights: input.highlights,
    specs: firewallBrochureSpecs[input.id] ?? specs,
    operatingRange: input.operatingRange,
  };
};

export const firewallCatalog: FirewallCatalogItem[] = [
  createProduct({
    id: 'mcsrp1', name: 'MCSRP1', series: '2L',
    tagline: 'Compact dual-Gigabit fanless network appliance',
    description: 'MCSRP1 is a compact x86 network appliance with two Gigabit Ethernet ports, HDMI output, and flexible SATA or mSATA storage for entry-level routing and gateway deployments.',
    cpu: 'Intel Celeron N3050 / N3160 or Pentium N3700', memory: 'DDR3L, up to 8GB',
    network: '2 x Realtek RTL8111H Gigabit Ethernet', display: '1 x HDMI 1.4', usb: '2 x USB 3.0',
    storage: '1 x mSATA and 1 x SATA 3.0', power: 'DC 12V', dimensions: '112.3 x 100 x 36.5 mm', operatingRange: '-20°C to 55°C',
    highlights: ['Intel Celeron / Pentium options', '2 x Gigabit Ethernet', 'DDR3L up to 8GB', 'mSATA + SATA storage'],
  }),
  createProduct({
    id: 'mcsrp2', name: 'MCSRP2', series: '2L',
    tagline: 'Dual-2.5GbE compact network appliance',
    description: 'MCSRP2 combines two Intel 2.5GbE interfaces, DDR4 memory, HDMI output, and NVMe storage in a compact fanless enclosure for firewall, routing, and edge gateway projects.',
    cpu: 'Intel Celeron N4000 / J4105 / J4125', memory: 'DDR4, up to 16GB', network: '2 x Intel i226-V 2.5GbE',
    display: '1 x HDMI 1.4', usb: '2 x USB 3.0', storage: 'M.2 NVMe 2242 / 2280', power: 'DC 12V',
    dimensions: '112.3 x 100 x 36.5 mm', operatingRange: '0°C to 70°C',
    highlights: ['Intel Celeron platform', '2 x Intel 2.5GbE', 'DDR4 up to 16GB', 'M.2 NVMe storage'],
  }),
  createProduct({
    id: 'mcsrp2-hdmi', name: 'MCSRP2-HDMI', series: '2L',
    tagline: 'Dual-2.5GbE appliance with dual HDMI',
    description: 'MCSRP2-HDMI adds dual-display connectivity to the compact MCSRP2 platform while retaining two Intel 2.5GbE ports and NVMe storage.',
    cpu: 'Intel Celeron N4000 / J4105 / J4125', memory: 'DDR4, up to 16GB', network: '2 x Intel i226-V 2.5GbE',
    display: '2 x HDMI 1.4', usb: '2 x USB 3.0', storage: 'M.2 NVMe 2242 / 2280', power: 'DC 12V',
    dimensions: '112.3 x 100 x 36.5 mm', operatingRange: '0°C to 70°C',
    highlights: ['Intel Celeron platform', '2 x Intel 2.5GbE', '2 x HDMI 1.4', 'M.2 NVMe storage'],
  }),
  createProduct({
    id: 'mcsrp3', name: 'MCSRP3', series: '2L',
    tagline: 'Expandable dual-2.5GbE edge appliance',
    description: 'MCSRP3 supports up to 32GB DDR4, dual Intel 2.5GbE, dual HDMI, NVMe and SATA storage, and wireless expansion for adaptable edge network deployments.',
    cpu: 'Intel Celeron N5100 / N5105 / N6005', memory: 'DDR4, up to 32GB', network: '2 x Intel i226-V 2.5GbE',
    display: '2 x HDMI 1.4', usb: '2 x USB 3.0 and 4 x USB 2.0', storage: 'M.2 NVMe 2242 and 2 x SATA 3.0',
    expansion: 'M.2 E-Key for Wi-Fi / Bluetooth', operatingRange: '0°C to 70°C',
    highlights: ['Intel Jasper Lake options', '2 x Intel 2.5GbE', 'DDR4 up to 32GB', 'NVMe + dual SATA'],
  }),
  createProduct({
    id: 'mcsrp4', name: 'MCSRP4', series: '2L',
    tagline: 'Elkhart Lake dual-2.5GbE network appliance',
    description: 'MCSRP4 is a compact Elkhart Lake appliance with dual 2.5GbE, dual 4K-capable HDMI, NVMe and SATA storage, and an extended operating range.',
    cpu: 'Intel Celeron J6412', memory: 'DDR4, up to 32GB', network: '2 x Intel i226-V 2.5GbE',
    display: '2 x HDMI 2.0', usb: '2 x USB 3.1 and 4 x USB 2.0', storage: 'M.2 Key-M 2242 NVMe and 2 x SATA 3.0',
    power: 'DC 12V', dimensions: '100 x 112 x 39.7 mm', operatingRange: '-10°C to 60°C',
    highlights: ['Intel Celeron J6412', '2 x Intel 2.5GbE', '2 x HDMI 2.0', 'NVMe + dual SATA'],
  }),
  createProduct({
    id: 'mcsrp5', name: 'MCSRP5', series: '2L',
    tagline: 'Alder Lake-N dual-2.5GbE gateway platform',
    description: 'MCSRP5 brings DDR5 memory, two Intel 2.5GbE ports, dual HDMI 2.0, and NVMe storage to a compact Alder Lake-N network platform.',
    cpu: 'Intel N100 / N200 / Core i3-N305', memory: 'DDR5, up to 32GB', network: '2 x Intel i226-V 2.5GbE',
    display: '2 x HDMI 2.0, up to 4K 60Hz', usb: '2 x USB 3.2 plus USB 2.0 headers', storage: 'M.2 NVMe 2242 / 2280',
    operatingRange: '-10°C to 70°C', highlights: ['Intel Alder Lake-N', '2 x Intel 2.5GbE', 'DDR5 up to 32GB', 'Dual HDMI 2.0'],
  }),
  createProduct({
    id: 'mcsrp6', name: 'MCSRP6', series: '2L',
    tagline: 'Compact dual-2.5GbE Alder Lake-N and Twin Lake appliance',
    description: 'MCSRP6 combines a compact fanless enclosure with dual Intel 2.5GbE, DDR5 memory, HDMI and DisplayPort output, and wide-range DC input.',
    cpu: 'Intel Alder Lake-N or Twin Lake options', memory: 'DDR5, up to 48GB', network: '2 x Intel i226-V 2.5GbE',
    display: 'HDMI 2.0 and DisplayPort 1.4', usb: '2 x USB 3.2 Gen 2', storage: 'M.2 NVMe', power: 'DC 12-24V',
    dimensions: '115 x 114.3 x 40 mm', operatingRange: '0°C to 75°C',
    highlights: ['Alder Lake-N / Twin Lake', '2 x Intel 2.5GbE', 'DDR5 up to 48GB', 'DC 12-24V input'],
  }),

  createProduct({
    id: 'mc30s-ddr4', name: 'MC30S DDR4', series: '4L',
    tagline: 'Four-port 2.5GbE fanless routing appliance',
    description: 'MC30S DDR4 provides four Intel 2.5GbE ports, dual display output, NVMe and SATA storage, and cellular or wireless expansion for multi-WAN and segmented-network deployments.',
    cpu: 'Intel N6415 / J5005 / J6413 / N5105', memory: 'DDR4, up to 16GB', network: '4 x Intel i226 2.5GbE',
    display: 'DisplayPort and HDMI', usb: '2 x USB 3.0 plus internal USB 2.0', storage: 'M.2 NVMe 2280 and SATA 3.0',
    expansion: 'Mini PCIe and M.2 2242 for Wi-Fi / cellular modules', power: 'DC 12V', dimensions: '146 x 133 x 57 mm', operatingRange: '0°C to 50°C',
    highlights: ['Intel low-power CPU options', '4 x Intel 2.5GbE', 'NVMe + SATA storage', 'Wireless / cellular expansion'],
  }),
  createProduct({
    id: 'mc30s-n100', name: 'MC30S N100', series: '4L',
    tagline: 'Alder Lake-N four-port 2.5GbE appliance',
    description: 'MC30S N100 updates the four-port MC30S platform with Alder Lake-N processing and DDR5 while retaining storage and wireless expansion for branch and edge networks.',
    cpu: 'Intel N100 with N95 / N200 / Core i3-N305 platform options', memory: 'DDR5-4800, up to 16GB', network: '4 x Intel i226 2.5GbE',
    display: 'DisplayPort and HDMI', usb: '2 x USB 3.0 plus internal USB 2.0', storage: 'M.2 NVMe 2280 and SATA 3.0',
    expansion: 'Mini PCIe and M.2 2242 for Wi-Fi / cellular modules', power: 'DC 12V', dimensions: '146 x 133 x 57 mm', operatingRange: '0°C to 50°C',
    highlights: ['Intel Alder Lake-N', '4 x Intel 2.5GbE', 'DDR5 up to 16GB', 'NVMe + SATA storage'],
  }),
  createProduct({
    id: 'mc30w-n100', name: 'MC30W N100', series: '4L',
    tagline: 'Slim four-port Alder Lake-N network appliance',
    description: 'MC30W N100 packages four Intel 2.5GbE ports, DDR5 memory, dual display output, and flexible storage into a lower-profile fanless chassis.',
    cpu: 'Intel N100 with N95 / N200 / Core i3-N305 platform options', memory: 'DDR5-4800, up to 16GB', network: '4 x Intel i226 2.5GbE',
    display: 'DisplayPort and HDMI', usb: '2 x USB 3.0 plus internal USB 2.0', storage: 'M.2 NVMe 2280 and SATA 3.0',
    expansion: 'Mini PCIe and M.2 2242 for Wi-Fi / cellular modules', power: 'DC 12V', dimensions: '136 x 126 x 40 mm', operatingRange: '0°C to 50°C',
    highlights: ['Intel Alder Lake-N', '4 x Intel 2.5GbE', '40 mm slim chassis', 'Wireless / cellular expansion'],
  }),
  createProduct({
    id: 'mcsrg31f', name: 'MCSRG31F', series: '4L',
    tagline: 'Intel Core four-port 2.5GbE edge appliance',
    description: 'MCSRG31F pairs 11th through 13th Gen Intel Core options with four Intel 2.5GbE interfaces, up to 64GB DDR4, and NVMe plus SATA storage.',
    cpu: '11th / 12th / 13th Gen Intel Core i3 / i5 / i7', memory: 'DDR4, up to 64GB', network: '4 x Intel i226 2.5GbE',
    display: 'HDMI and DisplayPort', usb: '4 x USB 3.0', storage: 'M.2 NVMe 2280 and SATA', power: 'DC 12V',
    dimensions: '178 x 126 x 56 mm', operatingRange: '0°C to 60°C',
    highlights: ['11th-13th Gen Intel Core', '4 x Intel 2.5GbE', 'DDR4 up to 64GB', 'NVMe + SATA storage'],
  }),
  createProduct({
    id: 'mcsrh30x', name: 'MCSRH30X', series: '4L',
    tagline: 'Compact four-port Alder Lake-N edge gateway',
    description: 'MCSRH30X is a compact four-port 2.5GbE platform with Alder Lake-N processors, dual display output, and NVMe plus SATA storage.',
    cpu: 'Intel N100 / N95 / N200 / Core i3-N305', memory: 'DDR4, up to 16GB', network: '4 x Intel i226 2.5GbE',
    display: 'DisplayPort and HDMI', usb: '2 x USB 3.0 and 2 x USB 2.0', storage: 'M.2 NVMe and SATA', power: 'DC 12V',
    dimensions: '138 x 128 x 48 mm', operatingRange: '0°C to 50°C',
    highlights: ['Intel Alder Lake-N', '4 x Intel 2.5GbE', 'NVMe + SATA storage', 'Compact fanless chassis'],
  }),
  createProduct({
    id: 'mgsrn100-v1', name: 'MGSRN100-V1', series: '4L',
    tagline: 'DDR5 four-port 2.5GbE network platform',
    description: 'MGSRN100-V1 combines Alder Lake-N processors, four Intel 2.5GbE interfaces, DDR5 memory, HDMI 2.1, DisplayPort 1.4, and PCIe NVMe storage.',
    cpu: 'Intel N100 / N200 / Core i3-N305', memory: 'DDR5, up to 32GB', network: '4 x Intel i226-V 2.5GbE',
    display: 'HDMI 2.1 and DisplayPort 1.4', usb: '4 x USB 2.0', storage: 'M.2 NVMe PCIe x4',
    expansion: 'M.2 E-Key for Wi-Fi 6', power: 'DC 12V', operatingRange: '0°C to 70°C', galleryCount: 1, includeMainInGallery: true,
    highlights: ['Intel Alder Lake-N', '4 x Intel 2.5GbE', 'DDR5 up to 32GB', 'HDMI 2.1 + DisplayPort 1.4'],
  }),

  createProduct({
    id: 'mcsr613u', name: 'MCSR613U', series: '6L',
    tagline: '13th Gen Intel Core six-port 2.5GbE appliance',
    description: 'MCSR613U supports 13th Gen Intel Core U-series processors, six Intel 2.5GbE ports, DDR5 memory, USB4, dual NVMe, and dual SATA for demanding branch and edge workloads.',
    cpu: 'Intel Core i3-1315U / i5-1335U / i7-1355U', memory: 'DDR5, up to 64GB', network: '6 x Intel i226-V 2.5GbE',
    display: 'HDMI 2.0, DisplayPort 1.4, and USB4 Type-C', usb: '2 x USB 3.2 and 3 x USB 2.0', storage: '2 x M.2 NVMe 2280 and 2 x SATA',
    power: 'DC 12-19V or USB Type-C 19V / 65W', dimensions: '145.4 x 131.7 x 60 mm', operatingRange: '0°C to 70°C',
    highlights: ['13th Gen Intel Core U-series', '6 x Intel 2.5GbE', 'DDR5 up to 64GB', 'USB4 + dual NVMe'],
  }),
  createProduct({
    id: 'mcsr6n12u', name: 'MCSR6N12U', series: '6L',
    tagline: '12th Gen Intel Core six-port network appliance',
    description: 'MCSR6N12U combines 12th Gen Intel Core U-series processing with six Intel 2.5GbE ports, DDR4 memory, Type-C display connectivity, and multi-drive storage.',
    cpu: 'Intel Core i3-1215U / i5-1235U / i7-1265U', memory: 'DDR4, up to 64GB', network: '6 x Intel i226-V 2.5GbE',
    display: 'HDMI 1.4, DisplayPort 1.4a, and Type-C', usb: '2 x USB 3.0 and 2 x USB 3.2', storage: 'M.2 NVMe and 2 x SATA',
    power: 'DC 12-19V', dimensions: '145.4 x 131.7 x 60 mm', operatingRange: '-10°C to 70°C', galleryCount: 3,
    highlights: ['12th Gen Intel Core U-series', '6 x Intel 2.5GbE', 'DDR4 up to 64GB', 'NVMe + dual SATA'],
  }),
  createProduct({
    id: 'mcsr6n13u', name: 'MCSR6N13U', series: '6L',
    tagline: '13th Gen Intel Core six-port edge appliance',
    description: 'MCSR6N13U uses 13th Gen Intel Core U-series processors with six Intel 2.5GbE ports, up to 64GB DDR4, Type-C display output, and flexible NVMe plus SATA storage.',
    cpu: 'Intel U300 / Core i3-1315U / i5-1335U / i7-1355U', memory: 'DDR4, up to 64GB', network: '6 x Intel i226-V 2.5GbE',
    display: 'HDMI 1.4, DisplayPort 1.4a, and Type-C', usb: '2 x USB 3.0 and 2 x USB 3.2', storage: 'M.2 NVMe and 2 x SATA',
    power: 'DC 12-19V', dimensions: '145.4 x 131.7 x 60 mm', operatingRange: '0°C to 70°C',
    highlights: ['13th Gen Intel Core U-series', '6 x Intel 2.5GbE', 'DDR4 up to 64GB', 'NVMe + dual SATA'],
  }),
  createProduct({
    id: 'mcsrg7', name: 'MCSRG7', series: '6L',
    tagline: 'Six-port Intel Core fanless network appliance',
    description: 'MCSRG7 provides six Intel Gigabit Ethernet interfaces, broad 8th and 10th Gen Intel Core options, DDR4 memory, and mSATA plus SATA storage in a fanless enclosure.',
    cpu: '8th / 10th Gen Intel Core i3 / i5 / i7 options', memory: 'DDR4, up to 32GB', network: '6 x Intel Gigabit Ethernet',
    display: 'HDMI and DisplayPort', usb: '4 x USB 3.0', storage: 'mSATA and SATA', expansion: 'Mini PCIe', power: 'DC 12-19V',
    dimensions: '209 x 150 x 57 mm', operatingRange: '-20°C to 60°C',
    highlights: ['8th / 10th Gen Intel Core', '6 x Intel Gigabit Ethernet', 'DDR4 up to 32GB', 'mSATA + SATA storage'],
  }),

  createProduct({
    id: 'mcr10', name: 'MCR10', series: '10G',
    tagline: 'Dual-10GbE and dual-2.5GbE compact appliance',
    description: 'MCR10 combines two 10GbE interfaces with two Intel 2.5GbE ports, DDR5 memory, dual HDMI, and NVMe plus SATA storage for high-speed network edge deployments.',
    cpu: 'Intel N100 or Core i3-N305', memory: 'DDR5, up to 32GB', network: '2 x Intel 82599ES 10GbE and 2 x Intel i226-V 2.5GbE',
    display: '2 x HDMI 2.0', usb: 'USB 3.2, Type-C, and USB 2.0', storage: 'M.2 NVMe and SATA', power: 'DC 12V',
    dimensions: '148 x 127 x 60 mm', operatingRange: '0°C to 70°C',
    highlights: ['Intel Alder Lake-N', '2 x 10GbE + 2 x 2.5GbE', 'DDR5 up to 32GB', 'NVMe + SATA storage'],
  }),
  createProduct({
    id: 'mcr20', name: 'MCR20', series: '10G',
    tagline: 'Configurable 10GbE RJ45 or SFP+ network appliance',
    description: 'MCR20 combines dual Intel 2.5GbE with a choice of dual 10GbE RJ45 or dual 10GbE SFP+ connectivity, DDR5 memory, and flexible local storage.',
    cpu: 'Intel Alder Lake-N platform options', memory: 'DDR5, up to 48GB',
    network: '2 x Intel i226-V 2.5GbE plus 2 x 10GbE RJ45 or SFP+', display: '2 x HDMI 2.0 and Type-C',
    storage: 'M.2 NVMe and 2 x SATA', operatingRange: '0°C to 70°C', galleryCount: 3,
    highlights: ['Intel Alder Lake-N', '2 x 10GbE + 2 x 2.5GbE', 'DDR5 up to 48GB', 'RJ45 or SFP+ options'],
  }),
  createProduct({
    id: 'mcsrh15', name: 'MCSRH15', series: '10G',
    tagline: 'Atom C3000 appliance with four 10GbE SFP+ ports',
    description: 'MCSRH15 is a fanless network platform built around Intel Atom C3000 processors with four 10GbE SFP+ ports, four 2.5GbE interfaces, and expandable local storage.',
    cpu: 'Intel Atom C3758 / C3858 / C3958', memory: 'DDR4, up to 64GB',
    network: '4 x Intel X553 10GbE SFP+ and 4 x Intel i226 2.5GbE', display: 'VGA', usb: '2 x USB 3.0 and 2 x USB 2.0',
    storage: 'M.2 NVMe and SATA', expansion: 'Mini PCIe', power: 'DC 12V / 10A', dimensions: '197 x 165 x 67 mm', operatingRange: '0°C to 50°C',
    highlights: ['Intel Atom C3000', '4 x 10GbE SFP+ + 4 x 2.5GbE', 'DDR4 up to 64GB', 'NVMe + SATA storage'],
  }),

  createProduct({
    id: 'mc12n-1u4l', name: 'MC12N-1U4L', series: '1U',
    tagline: 'Alder Lake-N 1U four-port network server',
    description: 'MC12N-1U4L is a 1U rackmount network platform with four Intel 2.5GbE interfaces, DDR5 memory, multiple storage formats, and an integrated AC power supply.',
    cpu: 'Intel N100 / N95 / Core i3-N305', memory: 'DDR5, up to 48GB', network: '4 x Intel i226-V 2.5GbE',
    display: 'VGA and internal HDMI header', usb: 'USB 2.0 and USB 3.0', storage: 'SATA, mSATA, or CF configuration', power: 'AC 100-240V',
    dimensions: '1U, 440 x 320 x 45 mm', operatingRange: '0°C to 60°C', galleryCount: 3,
    highlights: ['Intel Alder Lake-N', '4 x Intel 2.5GbE', 'DDR5 up to 48GB', '1U rackmount chassis'],
  }),
  createProduct({
    id: 'mc12n-1u6l', name: 'MC12N-1U6L', series: '1U',
    tagline: 'Alder Lake-N 1U six-port network server',
    description: 'MC12N-1U6L expands the Alder Lake-N rackmount platform to six Intel 2.5GbE ports, with PCIe and wireless or cellular expansion for branch network deployments.',
    cpu: 'Intel N100 / N95 / Core i3-N305', memory: 'DDR5, up to 48GB', network: '6 x Intel i226-V 2.5GbE',
    display: 'VGA and internal HDMI header', usb: '2 x USB 3.0 and 4 x USB 2.0', storage: 'mSATA and SATA',
    expansion: 'PCIe plus Wi-Fi / 4G / 5G options', power: 'AC 100-240V', dimensions: '1U, 440 x 225 x 45 mm', operatingRange: '0°C to 60°C', galleryCount: 3,
    highlights: ['Intel Alder Lake-N', '6 x Intel 2.5GbE', 'PCIe and cellular expansion', '1U rackmount chassis'],
  }),
  createProduct({
    id: 'mc14n-1u6l', name: 'MC14N-1U6L', series: '1U',
    tagline: 'Desktop-class Intel 1U six-port network server',
    description: 'MC14N-1U6L uses a B660 platform with 12th through 14th Gen Intel processors, six 2.5GbE ports, dual NVMe, four SATA ports, and rackmount expansion.',
    cpu: '12th / 13th / 14th Gen Intel processor options', memory: 'DDR4, up to 64GB', network: '6 x Intel i226-V 2.5GbE',
    display: 'VGA and internal HDMI header', usb: 'USB 3.2 and USB 2.0', storage: '2 x M.2 NVMe, 4 x SATA, and mSATA',
    expansion: 'PCIe expansion', power: 'AC 100-240V or DC 19-24V', dimensions: '1U, 440 x 320 x 45 mm', operatingRange: '0°C to 60°C', galleryCount: 3,
    highlights: ['12th-14th Gen Intel options', '6 x Intel 2.5GbE', 'Dual NVMe + four SATA', '1U rackmount chassis'],
  }),
  createProduct({
    id: 'mc23-1u6l', name: 'MC23-1U6L', series: '1U',
    tagline: 'Six-port 1U Intel network appliance',
    description: 'MC23-1U6L is a 1U six-port Intel network platform with DDR3 memory, four SATA interfaces, mSATA storage, and an integrated AC power supply.',
    cpu: 'Intel Core i3-3240 / i5-3470 / i7-3770 or Xeon E3 V2 options', memory: 'DDR3, up to 16GB',
    network: '6 x Intel LAN', display: 'VGA', usb: 'USB 2.0', storage: '4 x SATA 3.0 and mSATA', power: 'AC 100-240V',
    dimensions: '1U, 440 x 225 x 45 mm', operatingRange: '0°C to 60°C', galleryCount: 3,
    highlights: ['Intel Core / Xeon E3 V2', '6 x Intel LAN', 'Four SATA + mSATA', '1U rackmount chassis'],
  }),
  createProduct({
    id: 'mce5-1u6l', name: 'MCE5-1U6L', series: '1U',
    tagline: 'Dual-Xeon 1U server platform with IPMI',
    description: 'MCE5-1U6L is a deep 1U dual-socket Xeon server with ECC memory, IPMI management, extensive SATA and NVMe storage, and multiple PCIe expansion slots.',
    cpu: 'Dual Intel Xeon E5 V3 / V4 processors', memory: '8 x DDR4 ECC / ECC REG slots, up to 256GB',
    network: 'Dedicated IPMI plus 2 x Intel Gigabit Ethernet', display: 'VGA via ASPEED AST2400', usb: 'USB 2.0 and USB 3.0',
    storage: '2 x M.2 NVMe, 8 x SATA, mSATA, and CF', expansion: '3 x PCIe x8 and 1 x PCIe x16', power: 'AC 100-240V',
    dimensions: '1U, 440 x 600 x 45 mm', operatingRange: '0°C to 60°C', galleryCount: 3,
    highlights: ['Dual Intel Xeon E5 V3 / V4', 'ECC memory up to 256GB', 'IPMI remote management', 'NVMe + eight SATA'],
  }),
  createProduct({
    id: 'mcj6-1u6l', name: 'MCJ6-1U6L', series: '1U',
    tagline: 'Low-power six-port 1U network server',
    description: 'MCJ6-1U6L combines an Intel Celeron J6412 platform with six Intel 2.5GbE ports, up to 64GB DDR4, flexible storage, and integrated AC power in a 1U chassis.',
    cpu: 'Intel Celeron J6412', memory: 'DDR4, up to 64GB', network: '6 x Intel i226-V 2.5GbE',
    display: 'VGA, internal HDMI header, and eDP', usb: 'USB 3.0 and USB 2.0', storage: 'SATA, mSATA, or CF configuration', power: 'AC 100-240V',
    dimensions: '1U, 440 x 319 x 45 mm', operatingRange: '0°C to 60°C', galleryCount: 3,
    highlights: ['Intel Celeron J6412', '6 x Intel 2.5GbE', 'DDR4 up to 64GB', '1U rackmount chassis'],
  }),
];

export const firewallSeriesOrder: FirewallSeriesCode[] = ['2L', '4L', '6L', '10G', '1U'];
