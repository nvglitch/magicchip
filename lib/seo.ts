import type { Metadata } from 'next';
import { industrialCatalog } from '@/lib/industrial-catalog';
import { firewallCatalog } from '@/lib/firewall-catalog';
import { commercialCatalog } from '@/lib/commercial-catalog';

export const SITE_URL = 'https://szmagicchip.com';
export const SITE_NAME = 'MagicChip';

export type SeoEntry = {
  name: string;
  description: string;
  path: string;
  image?: string;
};

export const categorySeo: Record<string, SeoEntry> = {
  'industrial-mini-pc': {
    name: 'Industrial Mini PCs',
    description: 'Explore fanless industrial mini PCs with flexible Intel platforms, rich I/O, wide-temperature options, and compact aluminum enclosures.',
    path: '/products/industrial-mini-pc',
  },
  'ai-mini-pc': {
    name: 'AI Mini PCs',
    description: 'Explore compact high-performance AI mini PCs for edge AI, professional computing, multi-display, and data-intensive workloads.',
    path: '/products/ai-mini-pc',
  },
  'commercial-mini-pc': {
    name: 'Commercial Mini PCs',
    description: 'Explore compact desktop PCs and NAS PCs for office, education, professional workloads, digital signage, local storage, backup, and network services.',
    path: '/products/commercial-mini-pc',
  },
  'firewall-mini-pc': {
    name: 'Firewall Mini PCs & Server PCs',
    description: 'Explore compact network appliances and server PCs for firewall, routing, VPN, gateway, and edge-network deployments.',
    path: '/products/firewall-mini-pc',
  },
};

const catalogProductSeo: Record<string, SeoEntry & { category: string }> = Object.fromEntries(
  industrialCatalog.map((item) => [
    item.id,
    {
      name: `${item.name} Industrial Computing Product`,
      description: item.tagline,
      path: `/products/industrial-mini-pc/${item.id}`,
      image: item.image,
      category: 'industrial-mini-pc',
    },
  ]),
);
const catalogFirewallProductSeo: Record<string, SeoEntry & { category: string }> = Object.fromEntries(
  firewallCatalog.map((item) => [
    item.id,
    {
      name: `${item.name} Network Appliance`,
      description: item.tagline,
      path: `/products/firewall-mini-pc/${item.id}`,
      image: item.image,
      category: 'firewall-mini-pc',
    },
  ]),
);
const catalogCommercialProductSeo: Record<string, SeoEntry & { category: string }> = Object.fromEntries(
  commercialCatalog.map((item) => [
    item.id,
    {
      name: `${item.name} ${item.series === 'NAS' ? 'NAS PC' : 'Commercial Desktop PC'}`,
      description: item.tagline,
      path: `/products/commercial-mini-pc/${item.id}`,
      image: item.image,
      category: 'commercial-mini-pc',
    },
  ]),
);
export const productSeo: Record<string, SeoEntry & { category: string }> = {
  ...catalogProductSeo,
  ...catalogFirewallProductSeo,
  ...catalogCommercialProductSeo,
  mcipca2: {
    name: 'MCIPCA2 A-Series Industrial Mini PC',
    description: 'Compact industrial mini PC with Intel J4125, one RS232 COM port, four Intel Gigabit LAN ports, six USB ports, and wireless expansion.',
    path: '/products/industrial-mini-pc/mcipca2',
    image: '/assets/products/industrial/a-series/mcipca2/images/main-square-srgb.jpg',
    category: 'industrial-mini-pc',
  },
  mcipc9: {
    name: 'MCIPC9 Six-COM Industrial Mini PC',
    description: 'Industrial mini PC with Intel Core Ultra processors, six DB9 serial ports, dual Intel LAN, DDR5 memory, and DC 9-36V input.',
    path: '/products/industrial-mini-pc/mcipc9',
    image: '/assets/products/industrial/c-series/mcipc9/images/main-square-srgb.jpg',
    category: 'industrial-mini-pc',
  },
  'mctpc-1506e': {
    name: 'MCTPC-1506E Industrial Panel PC',
    description: '15.6-inch Full HD industrial panel PC with flexible Intel processors, dual 2.5GbE, configurable COM ports, and wide-voltage input.',
    path: '/products/industrial-mini-pc/mctpc-1506e',
    image: '/assets/products/industrial/tpc-series/mctpc-1506e/images/main-transparent.png',
    category: 'industrial-mini-pc',
  },
  mcipcb13: {
    name: 'MCIPCB13 Industrial Mini PC',
    description: 'Compact industrial box PC with flexible Intel Core platform support, dual Gigabit LAN, eight USB ports, dual COM, and wide-temperature operation.',
    path: '/products/industrial-mini-pc/mcipcb13',
    image: '/assets/products/industrial/b-series/mcipcb13/images/1.jpg',
    category: 'industrial-mini-pc',
  },
  mcipcb12: {
    name: 'MCIPCB12 Industrial Mini PC',
    description: 'Compact fanless industrial mini PC with Intel Elkhart Lake or Alder Lake-N processors, triple-display output, dual LAN, dual RS232, and flexible storage.',
    path: '/products/industrial-mini-pc/mcipcb12',
    image: '/assets/products/industrial/b-series/mcipcb12/images/1.jpg',
    category: 'industrial-mini-pc',
  },
  mcipcd3: {
    name: 'MCIPCD3 Six-LAN Network Appliance',
    description: 'Rugged industrial network appliance with six Intel Gigabit LAN ports, flexible Intel processor options, dual serial interfaces, and wireless expansion.',
    path: '/products/industrial-mini-pc/mcipcd3',
    image: '/assets/products/industrial/d-series/mcipcd3/images/1.jpg',
    category: 'industrial-mini-pc',
  },
  mcai1: {
    name: 'MCAIPC1 AI Mini PC',
    description: 'AMD Ryzen AI Max+ 395 mini PC with up to 128GB LPDDR5x memory, quad-display support, high-speed networking, and four M.2 NVMe slots.',
    path: '/products/ai-mini-pc/mcai1',
    image: '/assets/products/ai/mcaipc1/gallery/hero.jpg',
    category: 'ai-mini-pc',
  },
  mcai2: {
    name: 'MCAIPC2 AI Mini PC',
    description: 'High-performance AI mini PC powered by the AMD Strix Halo platform for edge AI, professional computing, and demanding multi-display workloads.',
    path: '/products/ai-mini-pc/mcai2',
    image: '/assets/products/ai/mcaipc2/hero.png',
    category: 'ai-mini-pc',
  },
  mc15uh: {
    name: 'MC15UH Commercial Mini PC',
    description: 'Intel Core Ultra commercial mini PC with Intel Arc graphics, dual DDR5 memory, dual NVMe storage, dual 2.5GbE, USB4, and OCuLink.',
    path: '/products/commercial-mini-pc/mc15uh',
    image: '/assets/products/commercial/mc15uh/images/1.jpg',
    category: 'commercial-mini-pc',
  },
  mctar7: {
    name: 'MCTAR7 Commercial Mini PC',
    description: 'Compact AMD Ryzen commercial mini PC with dual HDMI, full-featured Type-C, dual storage formats, Wi-Fi 6, and practical business connectivity.',
    path: '/products/commercial-mini-pc/mctar7',
    image: '/assets/products/commercial/mctar7/images/1.jpg',
    category: 'commercial-mini-pc',
  },
  mcr20: {
    name: 'MCR20 Firewall Mini PC',
    description: 'Fanless Alder Lake-N network appliance with dual 10GbE, dual 2.5GbE, DDR5 memory, flexible storage, and triple 4K display output.',
    path: '/products/firewall-mini-pc/mcr20',
    image: '/assets/products/firewall/mcr20/images/1.jpg',
    category: 'firewall-mini-pc',
  },
  mcsrp6: {
    name: 'MCSRP6 Firewall Mini PC',
    description: 'Compact Alder Lake-N and Twin Lake network appliance with dual Intel 2.5GbE, DDR5 memory, wide-voltage DC input, and flexible internal expansion.',
    path: '/products/firewall-mini-pc/mcsrp6',
    image: '/assets/products/firewall/mcsrp6/images/1.jpg',
    category: 'firewall-mini-pc',
  },
};

export function createPageMetadata(entry: SeoEntry): Metadata {
  const brandedTitle = entry.name.includes(SITE_NAME) ? entry.name : `${entry.name} | ${SITE_NAME}`;

  return {
    title: { absolute: brandedTitle },
    description: entry.description,
    alternates: { canonical: entry.path },
    openGraph: {
      title: brandedTitle,
      description: entry.description,
      url: entry.path,
      type: 'website',
      images: entry.image ? [{ url: entry.image, alt: entry.name }] : undefined,
    },
  };
}

export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
