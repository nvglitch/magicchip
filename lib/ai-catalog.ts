import { aiBrochureProducts } from '@/lib/brochure-products';

type AiFeature = {
  icon: 'Cpu' | 'Network' | 'HardDrive' | 'Layers';
  title: string;
  description: string;
};

const mcaipc2Features: AiFeature[] = [
  { icon: 'Cpu', title: 'Three Mainboard Series', description: 'Choose AXB35-02, AXB35-03, or AEB35-04. Processor, graphics, NPU, memory, and operating-system support depend on the selected series.' },
  { icon: 'Network', title: 'Series-Specific Connectivity', description: 'AXB35-02 provides one 2.5GbE RJ45 port. AXB35-03 and AEB35-04 provide two 10GbE RJ45 ports, with different optional high-speed expansion interfaces.' },
  { icon: 'Layers', title: 'Chassis and Power Options', description: 'Match the selected mainboard to a compatible chassis, with an internal 300/350 W Flex PSU or a 240 W external adapter. Fingerprint, lighting, and cooling options vary by enclosure.' },
];

export const aiCatalog = aiBrochureProducts.map((item) => {
  const flagship = item.id === 'mcai2';
  const features: AiFeature[] = flagship ? mcaipc2Features : [
    { icon: 'Cpu', title: 'Configurable Computing Platform', description: `${item.highlights[0]}. Processor and graphics configuration follows the selected model and order specification.` },
    { icon: 'Network', title: 'Dual 2.5GbE and Display I/O', description: 'Two 2.5GbE RJ45 ports, HDMI 2.1, DisplayPort 2.1, and USB4 display output connect network, desktop, and display workloads.' },
    { icon: 'HardDrive', title: 'Storage and Expansion', description: `Two M.2 2280 PCIe 4.0 SSD slots and ${item.id === 'mcaipc3a' ? 'MCIO' : 'OCuLink'} expansion support compatible storage and external devices.` },
  ];
  return {
    ...item,
    tagline: flagship ? 'Three mainboard series with configurable memory, networking, and chassis' : item.tagline,
    description: flagship
      ? 'MCAIPC2 is a configurable AI computer family spanning AXB35-02, AXB35-03, and AEB35-04 mainboards. Choose series-specific AMD processor platforms, LPDDR5 memory, 2.5GbE or dual 10GbE networking, and expansion through USB4, optional Flex I/O, or MCIO. Compatible desktop and tower enclosures offer internal or external power options; the configuration guide below shows which combinations are supported.'
      : item.description,
    highlights: flagship ? ['AXB35-02 / AXB35-03 / AEB35-04', 'Up to 128GB, series-dependent', '2.5GbE or dual 10GbE', 'Compatible chassis and power options'] : item.highlights,
    specs: flagship ? item.specs.map((spec) => spec.label === 'Dimensions' ? { ...spec, value: 'Chassis-dependent; see the chassis compatibility guide below for dimensions and power options.' } : spec) : item.specs,
    features,
  };
});

export const mcaipc2 = aiCatalog.find((item) => item.id === 'mcai2')!;

export const mcaipc2Series = [
  {
    id: 'AXB35-02', platform: 'AMD FP11 Strix Halo · Ryzen AI Max 300',
    graphics: 'AMD integrated graphics', memory: 'LPDDR5 8000 MT/s, up to 128GB',
    network: '1 x RJ45 2.5GbE', storage: '2 x M.2 2280 PCIe 4.0 x4; SD 4.0',
    display: 'HDMI 2.1, DisplayPort 1.4, and 2 x USB4',
    expansion: 'M.2 2230 PCIe/USB wireless module', system: 'Windows 11',
  },
  {
    id: 'AXB35-03', platform: 'AMD FP11 Strix / Gorgon Halo · Ryzen AI Max 300 / 400',
    graphics: 'Radeon 8000S series', memory: 'LPDDR5 8000 MT/s, up to 128GB',
    network: '2 x RJ45 10GbE', storage: '2 x M.2 2280; optional M.2 2242/2280 for Flex I/O; SD 4.0',
    display: 'HDMI 2.1, DisplayPort 1.4, and 2 x USB4',
    expansion: 'Optional M.2 Flex I/O for OCuLink or dual 80Gbps USB4 data', system: 'Windows 11',
  },
  {
    id: 'AEB35-04', platform: 'AMD FP10 Medusa Point · Zen 6',
    graphics: 'Next-generation RDNA GPU, up to 50 TOPS; XDNA 3 NPU, up to 100 TOPS',
    memory: 'LPDDR5 9600 MT/s, 64GB or 96GB', network: '2 x RJ45 10GbE',
    storage: '2 x M.2 2280 PCIe 4.0 x4; SD 4.0',
    display: 'HDMI 2.1, DisplayPort 2.0, and 2 x USB4',
    expansion: '1 x MCIO, PCIe 4.0 x8', system: 'Windows 11 or Linux',
  },
] as const;

export type Mcaipc2SeriesId = (typeof mcaipc2Series)[number]['id'];

export const mcaipc2Chassis: {
  id: string; series: Mcaipc2SeriesId[]; dimensions: string; details: string; image: string;
}[] = [
  { id: 'H02', series: ['AXB35-02', 'AXB35-03', 'AEB35-04'], dimensions: '248.5 x 188.4 x 97.5 mm', details: 'Internal 300/350 W PSU; audio jack', image: 'h02' },
  { id: 'H01', series: ['AXB35-02', 'AXB35-03'], dimensions: '248.5 x 188.4 x 97.5 mm', details: 'Internal 300/350 W PSU; MOC fingerprint; audio jack', image: 'h01' },
  { id: 'H03', series: ['AXB35-02', 'AXB35-03'], dimensions: '248.5 x 188.4 x 97.5 mm', details: 'Internal 300/350 W PSU; ambient LED; audio jack', image: 'h03' },
  { id: 'H04-BQ', series: ['AXB35-02', 'AXB35-03'], dimensions: '203 x 192 x 70 mm', details: '240 W external adapter; optional fingerprint; audio jack', image: 'h04-bq' },
  { id: 'H05', series: ['AXB35-02', 'AXB35-03'], dimensions: '200 x 197.8 x 70 mm', details: '240 W external adapter; optional fingerprint; audio jack', image: 'h05' },
  { id: 'H06', series: ['AXB35-02', 'AXB35-03'], dimensions: '248.5 x 188.4 x 97.5 mm', details: 'Internal 300/350 W PSU; MOC fingerprint; audio jack', image: 'h06' },
  { id: 'H07', series: ['AXB35-02', 'AXB35-03'], dimensions: '248.5 x 188.4 x 97.5 mm', details: 'Internal 300/350 W PSU; ambient LED; optional fingerprint', image: 'h07' },
  { id: 'H11', series: ['AXB35-02', 'AXB35-03'], dimensions: '206 x 186.5 x 126 mm', details: 'Liquid-cooled; optional 3.5-inch touch TFT; 240 W adapter', image: 'h11' },
  { id: 'H13', series: ['AXB35-02', 'AXB35-03'], dimensions: '188 x 190 x 69 mm', details: '240 W external adapter; optional fingerprint; speakers vary', image: 'h13' },
  { id: 'H09', series: ['AXB35-02', 'AEB35-04'], dimensions: '200 x 197.8 x 70 mm', details: '240 W external adapter; optional fingerprint; audio jack', image: 'h09' },
  { id: 'H04-BQ-B', series: ['AXB35-02'], dimensions: '203 x 192 x 70 mm', details: '240 W external adapter; MOC fingerprint; audio jack', image: 'h04-bq-b' },
  { id: 'H04-BQ-C', series: ['AXB35-02'], dimensions: '203 x 192 x 70 mm', details: '240 W external adapter; MOC fingerprint; audio jack', image: 'h04-bq-c' },
  { id: 'H08', series: ['AXB35-02'], dimensions: '187 x 196.5 x 55.6 mm', details: '240 W external adapter; optional fingerprint; audio jack', image: 'h08' },
  { id: 'H10', series: ['AXB35-02'], dimensions: '200 x 197.8 x 70 mm', details: '240 W external adapter; optional fingerprint; audio jack', image: 'h10' },
].map((chassis) => ({ ...chassis, series: chassis.series as Mcaipc2SeriesId[], image: `/assets/products/ai/brochure/mcaipc2/chassis/${chassis.image}.webp` }));
