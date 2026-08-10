import { industrialCatalog } from '@/lib/industrial-catalog';

export type SearchEntryType = 'product' | 'category' | 'scenario' | 'page' | 'resource';

export type SearchEntry = {
  title: string;
  description: string;
  href: string;
  type: SearchEntryType;
  keywords: string[];
  image?: string;
};

const curatedIndustrialSearchIds = new Set(['mcipca2', 'mcipc9', 'mctpc-1506e', 'mcipcb13', 'mcipcb12', 'mcipcd3']);
const catalogIndustrialSearchEntries: SearchEntry[] = industrialCatalog
  .filter((item) => !curatedIndustrialSearchIds.has(item.id))
  .map((item) => ({
    title: item.name,
    description: item.tagline,
    href: `/products/industrial-mini-pc/${item.id}`,
    type: 'product',
    keywords: ['industrial mini pc', `${item.series.toLowerCase()} series`, item.name.toLowerCase()],
    image: item.image,
  }));
export const siteSearchIndex: SearchEntry[] = [
  ...catalogIndustrialSearchEntries,
  {
    title: 'MCIPCA2',
    description: 'Compact A-series industrial Mini PC with one RS232 COM port and four Intel Gigabit LAN ports.',
    href: '/products/industrial-mini-pc/mcipca2',
    type: 'product',
    keywords: ['industrial mini pc', 'a series', 'single com', 'four lan', 'gateway', 'j4125'],
    image: '/assets/products/industrial/a-series/mcipca2/images/main-square-srgb.jpg',
  },
  {
    title: 'MCIPC9',
    description: 'C-series industrial Mini PC with Intel Core Ultra, six DB9 COM ports, dual Intel LAN, and wide-voltage input.',
    href: '/products/industrial-mini-pc/mcipc9',
    type: 'product',
    keywords: ['industrial mini pc', 'c series', 'six com', 'multi serial', 'dual lan', 'core ultra'],
    image: '/assets/products/industrial/c-series/mcipc9/images/main-square-srgb.jpg',
  },
  {
    title: 'MCTPC-1506E',
    description: '15.6-inch Full HD industrial panel PC with dual 2.5GbE, configurable serial ports, and 9-36V input.',
    href: '/products/industrial-mini-pc/mctpc-1506e',
    type: 'product',
    keywords: ['industrial panel pc', 'tpc series', '15.6 inch', 'hmi display', '2.5gbe'],
    image: '/assets/products/industrial/tpc-series/mctpc-1506e/images/main-transparent.png',
  },
  {
    title: 'MCIPCB13',
    description: 'Industrial box PC with flexible Intel Core platforms, dual LAN, eight USB ports, and dual COM.',
    href: '/products/industrial-mini-pc/mcipcb13',
    type: 'product',
    keywords: ['industrial mini pc', 'fanless', 'automation', 'serial', 'com', 'intel core'],
    image: '/assets/products/industrial/b-series/mcipcb13/images/1.jpg',
  },
  {
    title: 'MCIPCB12',
    description: 'Fanless industrial Mini PC with triple-display output, dual LAN, and dual RS232.',
    href: '/products/industrial-mini-pc/mcipcb12',
    type: 'product',
    keywords: ['industrial mini pc', 'fanless', 'digital signage', 'triple display', 'rs232'],
    image: '/assets/products/industrial/b-series/mcipcb12/images/1.jpg',
  },
  {
    title: 'MCIPCD3',
    description: 'Industrial network appliance with six Intel Gigabit LAN ports and wireless expansion.',
    href: '/products/industrial-mini-pc/mcipcd3',
    type: 'product',
    keywords: ['network appliance', 'six lan', 'iot gateway', 'edge gateway', 'routing'],
    image: '/assets/products/industrial/d-series/mcipcd3/images/1.jpg',
  },
  {
    title: 'MCAIPC1',
    description: 'Ryzen AI Max+ Mini PC with large unified memory, quad-display support, and four M.2 slots.',
    href: '/products/ai-mini-pc/mcai1',
    type: 'product',
    keywords: ['ai mini pc', 'ryzen ai max', 'edge ai', 'local ai', 'workstation'],
    image: '/assets/products/ai/mcaipc1/gallery/hero.jpg',
  },
  {
    title: 'MCAIPC2',
    description: 'High-performance AMD Strix Halo Mini PC for edge AI and professional computing.',
    href: '/products/ai-mini-pc/mcai2',
    type: 'product',
    keywords: ['ai mini pc', 'strix halo', 'edge ai', 'local ai', 'professional computing'],
    image: '/assets/products/ai/mcaipc2/hero.png',
  },
  {
    title: 'MC15UH',
    description: 'Intel Core Ultra commercial Mini PC with USB4, OCuLink, dual 2.5GbE, and dual NVMe.',
    href: '/products/commercial-mini-pc/mc15uh',
    type: 'product',
    keywords: ['commercial mini pc', 'business', 'education', 'digital signage', 'core ultra'],
    image: '/assets/products/commercial/mc15uh/images/1.jpg',
  },
  {
    title: 'MCTAR7',
    description: 'Compact AMD Ryzen commercial Mini PC with dual HDMI, full-featured Type-C, and Wi-Fi 6.',
    href: '/products/commercial-mini-pc/mctar7',
    type: 'product',
    keywords: ['commercial mini pc', 'business', 'education', 'office', 'ryzen'],
    image: '/assets/products/commercial/mctar7/images/1.jpg',
  },
  {
    title: 'MCR20',
    description: 'Fanless network appliance with dual 10GbE, dual 2.5GbE, DDR5, and flexible storage.',
    href: '/products/firewall-mini-pc/mcr20',
    type: 'product',
    keywords: ['firewall mini pc', '10gbe', '2.5gbe', 'router', 'vpn', 'sd-wan', 'gateway'],
    image: '/assets/products/firewall/mcr20/images/1.jpg',
  },
  {
    title: 'MCSRP6',
    description: 'Compact network appliance with dual Intel 2.5GbE, DDR5, and wide-voltage input.',
    href: '/products/firewall-mini-pc/mcsrp6',
    type: 'product',
    keywords: ['firewall mini pc', '2.5gbe', 'router', 'vpn', 'sd-wan', 'iot gateway'],
    image: '/assets/products/firewall/mcsrp6/images/1.jpg',
  },
  {
    title: 'Industrial Mini PCs',
    description: 'Fanless compact computers for automation, industrial edge, and 24/7 operation.',
    href: '/products/industrial-mini-pc',
    type: 'category',
    keywords: ['industrial computer', 'fanless pc', 'automation', 'wide temperature'],
  },
  {
    title: 'AI Mini PCs',
    description: 'High-performance compact systems for edge AI and local computing workloads.',
    href: '/products/ai-mini-pc',
    type: 'category',
    keywords: ['artificial intelligence', 'edge ai', 'local model', 'ryzen ai'],
  },
  {
    title: 'Commercial Mini PCs',
    description: 'Compact systems for offices, education, meeting rooms, and digital signage.',
    href: '/products/commercial-mini-pc',
    type: 'category',
    keywords: ['desktop mini pc', 'office pc', 'education', 'business'],
  },
  {
    title: 'Firewall Mini PCs',
    description: 'Network appliances for firewall, routing, VPN, SD-WAN, and edge gateways.',
    href: '/products/firewall-mini-pc',
    type: 'category',
    keywords: ['network appliance', 'router', 'vpn', 'gateway', 'server pc'],
  },
  {
    title: 'Industrial Automation',
    description: 'Systems selected for machine control, serial connectivity, rich I/O, and industrial edge use.',
    href: '/scenarios#industrialAutomation',
    type: 'scenario',
    keywords: ['machine control', 'factory', 'automation', 'industrial edge'],
  },
  {
    title: 'Edge AI & Local Compute',
    description: 'Systems selected for local AI, high-performance computing, memory, and multi-display workflows.',
    href: '/scenarios#edgeAi',
    type: 'scenario',
    keywords: ['ai workstation', 'local model', 'edge inference', 'professional compute'],
  },
  {
    title: 'Network Security & SD-WAN',
    description: 'Systems selected for multi-port networking, routing, VPN, and firewall deployments.',
    href: '/scenarios#networkSecurity',
    type: 'scenario',
    keywords: ['network security', 'router', 'vpn', 'firewall', 'sd-wan'],
  },
  {
    title: 'Digital Signage & Multi-Display',
    description: 'Compact systems selected for information displays and multi-screen deployments.',
    href: '/scenarios#digitalSignage',
    type: 'scenario',
    keywords: ['display', 'signage', 'multi screen', 'kiosk'],
  },
  {
    title: 'Business & Education',
    description: 'Compact systems selected for office productivity, classrooms, and meeting spaces.',
    href: '/scenarios#businessEducation',
    type: 'scenario',
    keywords: ['office', 'classroom', 'meeting', 'desktop'],
  },
  {
    title: 'IoT & Edge Gateways',
    description: 'Systems selected for connecting local devices, upstream networks, and edge services.',
    href: '/scenarios#iotGateway',
    type: 'scenario',
    keywords: ['iot', 'gateway', 'edge network', 'connectivity'],
  },
  { title: 'All Products', description: 'Browse all MagicChip Mini PC and industrial computing categories.', href: '/products', type: 'page', keywords: ['catalog', 'product range'] },
  { title: 'Application Scenarios', description: 'Browse products by deployment scenario and workload.', href: '/scenarios', type: 'page', keywords: ['solutions', 'applications', 'use cases'] },
  { title: 'Documents & Resources', description: 'Access product news, downloads, and technical information.', href: '/documents', type: 'resource', keywords: ['resources', 'support', 'manuals'] },
  { title: 'File Downloads', description: 'Download available product brochures and specification documents.', href: '/downloads', type: 'resource', keywords: ['pdf', 'brochure', 'datasheet', 'specification'] },
  { title: 'Technical Documents', description: 'Browse technical product information and integration resources.', href: '/tech-docs', type: 'resource', keywords: ['technical', 'manual', 'specification', 'guide'] },
  { title: 'News', description: 'Read MagicChip product and company updates.', href: '/news', type: 'resource', keywords: ['updates', 'announcements'] },
  { title: 'Our Company', description: 'Learn about MagicChip, its history, markets, and operating philosophy.', href: '/company', type: 'page', keywords: ['about', 'manufacturer', 'shenzhen'] },
  { title: 'Our Factory', description: 'Explore MagicChip manufacturing, assembly, testing, and customization capabilities.', href: '/factory', type: 'page', keywords: ['manufacturing', 'production', 'oem', 'odm'] },
  { title: 'Contact MagicChip', description: 'Contact our sales team about products, samples, quotations, and projects.', href: '/contact', type: 'page', keywords: ['sales', 'inquiry', 'quote', 'whatsapp', 'email'] },
];

function normalize(value: string) {
  return value.toLocaleLowerCase().replace(/[-_/]+/g, ' ').replace(/\s+/g, ' ').trim();
}

export function searchSite(query: string): SearchEntry[] {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return [];
  const tokens = normalizedQuery.split(' ');

  return siteSearchIndex
    .map(entry => {
      const title = normalize(entry.title);
      const keywords = entry.keywords.map(normalize);
      const haystack = normalize(`${entry.title} ${entry.description} ${entry.keywords.join(' ')}`);
      if (!tokens.every(token => haystack.includes(token))) return { entry, score: 0 };

      let score = tokens.reduce((total, token) => total + (title.includes(token) ? 18 : 6), 0);
      if (title === normalizedQuery) score += 120;
      else if (title.startsWith(normalizedQuery)) score += 80;
      else if (title.includes(normalizedQuery)) score += 50;
      if (keywords.some(keyword => keyword === normalizedQuery)) score += 35;
      if (entry.type === 'product') score += 8;
      return { entry, score };
    })
    .filter(result => result.score > 0)
    .sort((a, b) => b.score - a.score || a.entry.title.localeCompare(b.entry.title))
    .map(result => result.entry);
}
