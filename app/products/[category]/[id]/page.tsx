'use client';

import { motion } from 'framer-motion';
import {
  ArrowRight,
  CheckCircle,
  ChevronLeft,
  Cpu,
  HardDrive,
  Layers,
  Monitor,
  Network,
  Server,
  Shield,
  Thermometer,
  Usb,
  Zap,
} from 'lucide-react';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { industrialCatalog, type IndustrialSeriesCode } from '@/lib/industrial-catalog';
import { firewallCatalog, type FirewallSeriesCode } from '@/lib/firewall-catalog';
import { commercialCatalog, type CommercialSeriesCode } from '@/lib/commercial-catalog';

type ProductSpec = { label: string; value: string };
type ProductFeature = { icon: keyof typeof iconMap; title: string; description: string };
type ProductCard = { image: string; title: string; description?: string };
type ProductDetail = {
  name: string;
  tagline: string;
  description: string;
  images: string[];
  galleryImages?: string[];
  galleryCards?: ProductCard[];
  specs: ProductSpec[];
  highlights: string[];
  features: ProductFeature[];
  sellingPoints?: ProductCard[];
  advantageSummary?: string;
  operatingRange?: string;
};

const mcipcb13ImageBase = '/assets/products/industrial/b-series/mcipcb13/images';
const mcipcb12ImageBase = '/assets/products/industrial/b-series/mcipcb12/images';
const mcipcd3ImageBase = '/assets/products/industrial/d-series/mcipcd3/images';
const mcipca2ImageBase = '/assets/products/industrial/a-series/mcipca2/images';
const mcipc9ImageBase = '/assets/products/industrial/c-series/mcipc9/images';
const mctpc1506eImageBase = '/assets/products/industrial/tpc-series/mctpc-1506e/images';

const categoryData: Record<string, { name: string; icon: keyof typeof iconMap; gradient: string; accent: string }> = {
  'industrial-mini-pc': { name: 'Industrial Mini PC', icon: 'Cpu', gradient: 'from-[#172033] via-blue-950 to-[#172033]', accent: 'blue' },
  'firewall-mini-pc': { name: 'Firewall Mini PC / Server PC', icon: 'Shield', gradient: 'from-[#172033] via-[#543431] to-[#172033]', accent: 'coral' },
  'ai-mini-pc': { name: 'AI Mini PC', icon: 'Cpu', gradient: 'from-[#172033] via-[#35306b] to-[#172033]', accent: 'blue' },
  'commercial-mini-pc': { name: 'Commercial Mini PC', icon: 'Monitor', gradient: 'from-[#172033] via-[#29473f] to-[#172033]', accent: 'mint' },
};

const industrialSeriesFeatures: Record<IndustrialSeriesCode, ProductFeature[]> = {
  A: [
    { icon: 'Cpu', title: 'Compact Industrial Platform', description: 'A-series systems focus on compact deployment with single-COM or COM-less interface architecture.' },
    { icon: 'Network', title: 'Practical Connectivity', description: 'Network, USB, display, and expansion interfaces vary by model and selected configuration.' },
    { icon: 'Layers', title: 'Configuration Options', description: 'Processor, memory, storage, and wireless options vary by model and selected platform.' },
  ],
  B: [
    { icon: 'Network', title: 'Dual-LAN Architecture', description: 'B-series systems use dual network interfaces for connected industrial and edge deployments.' },
    { icon: 'Server', title: 'Dual-COM Connectivity', description: 'Two serial interfaces support compatible controllers, peripherals, and equipment.' },
    { icon: 'HardDrive', title: 'Flexible Configuration', description: 'Processor, memory, storage, display, and expansion options vary by model.' },
  ],
  C: [
    { icon: 'Server', title: 'Multi-COM Architecture', description: 'C-series systems provide multiple serial interfaces for equipment control and data acquisition.' },
    { icon: 'Network', title: 'Dual-LAN Connectivity', description: 'Dual network interfaces support connected automation and industrial edge roles.' },
    { icon: 'Cpu', title: 'Multiple Compute Platforms', description: 'Processor and memory options vary by model and selected configuration.' },
  ],
  D: [
    { icon: 'Network', title: 'Multi-LAN Architecture', description: 'D-series systems provide multiple dedicated network interfaces for edge and gateway deployments.' },
    { icon: 'Server', title: 'Serial Equipment Support', description: 'Dual-COM architecture supports compatible serial equipment and management connections.' },
    { icon: 'Shield', title: 'Edge Network Roles', description: 'Interface layouts suit segmented networks, gateways, routing, and compatible security software.' },
  ],
  TPC: [
    { icon: 'Monitor', title: 'Integrated Industrial Display', description: 'TPC-series systems combine an industrial display and embedded computing in one panel-mount device.' },
    { icon: 'Network', title: 'Industrial I/O', description: 'Network, serial, USB, display, and expansion interfaces vary by panel size and compute platform.' },
    { icon: 'Cpu', title: 'Configurable Compute Platform', description: 'Available Intel processor, memory, and storage options are listed for each model.' },
  ],
};

const firewallSeriesFeatures: Record<FirewallSeriesCode, ProductFeature[]> = {
  '2L': [
    { icon: 'Network', title: 'Focused Dual-Port Architecture', description: 'Two dedicated Ethernet interfaces suit compact WAN/LAN, firewall, VPN, and edge gateway deployments.' },
    { icon: 'Cpu', title: 'Compact x86 Platform', description: 'Low-power Intel processor options support compatible network operating systems and local services.' },
    { icon: 'HardDrive', title: 'Local Storage Options', description: 'Model-specific NVMe, mSATA, and SATA options support the selected software and service configuration.' },
  ],
  '4L': [
    { icon: 'Network', title: 'Four Dedicated Network Ports', description: 'Four-port layouts support multi-WAN routing, network segmentation, and branch gateway configurations.' },
    { icon: 'Layers', title: 'Wireless and Cellular Expansion', description: 'Selected models provide Mini PCIe or M.2 expansion for compatible Wi-Fi and cellular modules.' },
    { icon: 'Monitor', title: 'Local Display Connectivity', description: 'HDMI and DisplayPort options simplify setup, diagnostics, and local management where required.' },
  ],
  '6L': [
    { icon: 'Network', title: 'Six-Port Network Architecture', description: 'Six dedicated interfaces provide additional flexibility for branch, SD-WAN, and segmented-network designs.' },
    { icon: 'Cpu', title: 'Intel Core Performance Options', description: 'Selected models use Intel Core U-series processors with higher memory capacity for more demanding services.' },
    { icon: 'HardDrive', title: 'Multi-Drive Storage', description: 'NVMe and SATA options support operating systems, logs, local applications, and project-specific storage needs.' },
  ],
  '10G': [
    { icon: 'Zap', title: '10GbE Connectivity', description: 'Selected models combine 10GbE RJ45 or SFP+ links with 2.5GbE interfaces for high-speed network edge designs.' },
    { icon: 'Network', title: 'Copper and Fiber Options', description: 'Choose the model and interface format that matches the required uplink and local network infrastructure.' },
    { icon: 'Server', title: 'Purpose-Built Network Platform', description: 'Dedicated multi-port hardware suits compatible routing, firewall, gateway, and network-service software.' },
  ],
  '1U': [
    { icon: 'Server', title: '1U Rackmount Format', description: 'Rackmount chassis and integrated AC power suit equipment rooms, network cabinets, and centralized deployments.' },
    { icon: 'HardDrive', title: 'Storage and Expansion', description: 'Model-specific SATA, NVMe, PCIe, and wireless or cellular options support varied server and network roles.' },
    { icon: 'Cpu', title: 'Broad Compute Range', description: 'The series spans low-power Intel platforms, desktop-class processors, and dual Xeon server configurations.' },
  ],
};
const commercialSeriesFeatures: Record<CommercialSeriesCode, ProductFeature[]> = {
  DPC: [
    { icon: 'Cpu', title: 'Flexible Compute Platforms', description: 'The desktop range spans efficient Intel N-series systems, Intel Core platforms, and AMD Ryzen performance configurations.' },
    { icon: 'Monitor', title: 'Display & Peripheral Connectivity', description: 'Model-specific HDMI, DisplayPort, Type-C, USB4, Thunderbolt, and OCuLink options support varied commercial workspaces.' },
    { icon: 'HardDrive', title: 'Configurable Memory & Storage', description: 'Choose memory capacity, NVMe, SATA, wireless, and network options according to the target workload and deployment.' },
  ],
  NAS: [
    { icon: 'HardDrive', title: 'Storage-Oriented Architecture', description: 'NAS-focused systems provide model-specific NVMe, SATA, TF, and expansion options for local storage and service workloads.' },
    { icon: 'Network', title: 'Multi-Gigabit Networking', description: 'Selected models combine 2.5GbE interfaces with 10GbE SFP+ or expandable high-speed network options.' },
    { icon: 'Server', title: 'Compact Local Services', description: 'The platforms suit compatible NAS, backup, media, private-cloud, and other local network-service software.' },
  ],
};
const compactCatalogHighlights = (specs: ProductSpec[]) => {
  const preferredLabels = ['CPU', 'Display', 'Network', 'Serial', 'Dimensions', 'USB'];

  return preferredLabels
    .map((label) => specs.find((spec) => spec.label === label))
    .filter((spec): spec is ProductSpec => Boolean(spec))
    .slice(0, 4)
    .map(({ label, value }) => {
      let compact = value.replace(/\s+/g, ' ').trim();

      if (label === 'CPU') {
        if (/Celeron/i.test(compact) && /Core/i.test(compact)) compact = 'Intel Celeron / Core options';
        else if (/Core.*i3\/i5\/i7/i.test(compact)) compact = 'Intel Core i3/i5/i7 options';
        else compact = compact.split(';')[0];
      } else if (label === 'Display' && /TFT-LCD/i.test(compact)) {
        const size = compact.match(/(\d+(?:\.\d+)?)"/)?.[1];
        const resolution = compact.match(/(\d+\s*[x×]\s*\d+)/i)?.[1]?.replace('×', ' x ');
        compact = [size ? `${size}-inch` : '', resolution || ''].filter(Boolean).join(' ');
      } else if (label === 'Serial') {
        compact = compact.split(';').find((part) => /COM|serial/i.test(part))?.trim() || compact.split(';')[0];
      } else {
        compact = compact.split(';')[0];
      }

      compact = compact.replace(/\s*\([^)]{18,}\)\s*/g, ' ').trim();
      if (compact.length > 44) compact = `${compact.slice(0, 41).replace(/\s+\S*$/, '')}…`;
      return `${label} · ${compact}`;
    });
};
const getIndustrialGallery = (item: (typeof industrialCatalog)[number]): Pick<ProductDetail, 'galleryImages' | 'galleryCards'> => {
  const imageBase = item.image.replace(/\/[^/]+$/, '');

  if (item.series === 'TPC') {
    const galleryImages = [`${imageBase}/enclosure-transparent.png`, `${imageBase}/interface-transparent.png`];
    return {
      galleryImages,
      galleryCards: [
        { image: galleryImages[0], title: `${item.name} enclosure design`, description: 'Rear enclosure and mounting details for panel integration.' },
        { image: galleryImages[1], title: `${item.name} interface layout`, description: 'I/O arrangement for connecting power, network, serial devices, and peripherals.' },
      ],
    };
  }

  if (item.id === 'mcipca1') {
    const galleryImages = [`${imageBase}/rear-transparent.png`, `${imageBase}/internal-transparent.png`];
    return {
      galleryImages,
      galleryCards: [
        { image: galleryImages[0], title: 'Rear I/O and enclosure layout' },
        { image: galleryImages[1], title: 'Internal board layout', description: 'The internal hardware is retained as a supporting engineering view rather than the product hero image.' },
      ],
    };
  }

  if (['mcipcb7', 'mcipcb8', 'mcipcb9', 'mcipcb11', 'mcipc2a', 'mcipc2b'].includes(item.id)) {
    const galleryImages = [`${imageBase}/rear-transparent.png`, `${imageBase}/internal-transparent.png`];
    return {
      galleryImages,
      galleryCards: [
        { image: galleryImages[0], title: `${item.name} rear I/O and enclosure` },
        { image: galleryImages[1], title: `${item.name} internal board layout`, description: 'The motherboard is shown as a supporting engineering view, after the complete enclosure views.' },
      ],
    };
  }

  return {};
};

const catalogIndustrialProducts: Record<string, ProductDetail> = Object.fromEntries(
  industrialCatalog.map((item) => [
    item.id,
    {
      name: item.name,
      tagline: item.tagline,
      description: item.description,
      images: [item.image],
      highlights: compactCatalogHighlights(item.specs),
      specs: item.specs,
      features: industrialSeriesFeatures[item.series],
      operatingRange: item.operatingRange,
      ...getIndustrialGallery(item),
    },
  ]),
);
const catalogFirewallProducts: Record<string, ProductDetail> = Object.fromEntries(
  firewallCatalog.map((item) => [
    item.id,
    {
      name: item.name,
      tagline: item.tagline,
      description: item.description,
      images: [item.image],
      galleryImages: item.galleryImages,
      galleryCards: item.galleryImages.map((image, index) => ({
        image,
        title: index === 0 ? `${item.name} enclosure and interface view` : `${item.name} product view ${index + 1}`,
      })),
      highlights: item.highlights,
      specs: item.specs,
      features: firewallSeriesFeatures[item.series],
      operatingRange: item.operatingRange,
    },
  ]),
);
const catalogCommercialProducts: Record<string, ProductDetail> = Object.fromEntries(
  commercialCatalog.map((item) => [
    item.id,
    {
      name: item.name,
      tagline: item.tagline,
      description: item.description,
      images: [item.image],
      galleryImages: item.galleryImages,
      galleryCards: item.galleryImages.map((image, index) => ({
        image,
        title: index === 0 ? `${item.name} enclosure and interface view` : `${item.name} product view ${index + 1}`,
      })),
      highlights: compactCatalogHighlights(item.specs),
      specs: item.specs,
      features: commercialSeriesFeatures[item.series],
      operatingRange: item.operatingRange,
    },
  ]),
);
const products: Record<string, ProductDetail> = {
  ...catalogIndustrialProducts,
  ...catalogFirewallProducts,
  ...catalogCommercialProducts,
  mcipcb13: {
    name: 'MCIPCB13',
    tagline: 'Industrial Mini PC for dependable multi-I/O edge deployment',
    description:
      'MCIPCB13 is a compact industrial box PC built for automation, machine control, embedded gateway, and factory workstation scenarios. It combines broad Intel Core platform compatibility with dual LAN, rich USB and COM connectivity, wide voltage input, and a rugged operating temperature range.',
    images: [
      `${mcipcb13ImageBase}/1.jpg`,
    ],
    galleryImages: [`${mcipcb13ImageBase}/2.jpg`, `${mcipcb13ImageBase}/3.jpg`, `${mcipcb13ImageBase}/4.jpg`],
    highlights: ['Intel Core i3/i5/i7 options', '2 x GbE RJ45 LAN', '4 x USB 3.0 + 4 x USB 2.0', '193.9 x 127 x 57.2 mm'],
    specs: [
      { label: 'Model', value: 'MCIPCB13' },
      { label: 'CPU', value: 'Optional Intel 4th/5th/6th/7th/8th/10th Gen Core i3/i5/i7 CPU' },
      { label: 'Video', value: '1 x HDMI, 1 x VGA (or HDMI)' },
      { label: 'RAM', value: '4th Gen: 1 x DDR3L SODIMM, up to 8GB; 6th/7th/8th Gen: 1 x DDR4 SODIMM, up to 16GB; 8th/10th Gen: 2 x DDR4 SODIMM, up to 32GB; 12th/13th Gen: 1 x DDR5 SODIMM, up to 64GB' },
      { label: 'USB', value: '4 x USB 3.0, 4 x USB 2.0' },
      { label: 'Power Input', value: 'DC 12V-19V power input' },
      { label: 'NIC', value: '2 x GbE RJ45 Realtek 8111H' },
      { label: 'COM', value: '2 x DB9 COM' },
      { label: 'Storage', value: '4th Gen: 1 x mSATA; 6th/7th/8th/10th/12th/13th Gen: 1 x M.2 2280 supporting SATA and NVMe; 1 x 2.5-inch HDD/SSD' },
      { label: 'Expansion', value: '1 x Mini-PCIe half/full card with SIM slot, supports 3G/4G, WiFi/Bluetooth; supports watchdog and diskless boot' },
      { label: 'Front I/O', value: '1 x Power button, 4 x USB 3.0, 4 x USB 2.0, 2 x DB9 COM (COM1, COM2)' },
      { label: 'Rear I/O', value: '1 x DC power input, 2 x GbE RJ45 LAN, 1 x HDMI, 1 x VGA, 1 x earphone jack, 1 x microphone, 2 x antenna connectors for WiFi/3G/4G' },
      { label: 'System', value: 'Windows 7/8/10, WES 7/10, Linux' },
      { label: 'Working Environment', value: 'Working temperature: -20°C to +60°C; storage temperature: -30°C to +70°C; storage humidity: 10%-90% @30°C, non-condensing' },
      { label: 'Size', value: '193.9 x 127 x 57.2 mm' },
    ],
    features: [
      { icon: 'Cpu', title: 'Flexible Intel Core Platform', description: 'Covers multiple Intel Core generations so projects can balance cost, lifecycle, and performance.' },
      { icon: 'Network', title: 'Industrial Connectivity', description: 'Dual Gigabit LAN, dual DB9 COM, and eight USB ports support controllers, sensors, cameras, and peripherals.' },
      { icon: 'Thermometer', title: 'Wide Temperature Operation', description: 'Designed for -20°C to +60°C operation in demanding industrial and edge environments.' },
    ],
    sellingPoints: [
      {
        image: `${mcipcb13ImageBase}/5.jpg`,
        title: 'Front and rear I/O at a glance',
        description: 'The illustrated panel map identifies the power button, eight USB ports, dual COM, audio, dual Gigabit LAN, dual display outputs, DC input, and antenna connections.',
      },
      {
        image: `${mcipcb13ImageBase}/6.jpg`,
        title: 'Fanless reliability for industrial workloads',
        description: 'A fanless aluminum enclosure, wide-temperature support, dual-display capability, wireless expansion, and 24/7 operation suit demanding automation and edge deployments.',
      },
    ],
    advantageSummary: 'MCIPCB13 focuses on the interfaces and durability industrial buyers usually need first: broad CPU options, legacy and modern I/O, resilient environmental ratings, and flexible storage expansion in a compact enclosure.',
    operatingRange: '-20°C to +60°C',
  },
  mcai2: {
    name: 'MCAIPC2',
    tagline: 'High-performance AI mini PC powered by Strix Halo platform',
    description: 'A flagship AI mini PC for edge computing, AI workloads, and high-performance industrial applications.',
    images: ['/assets/products/ai/mcaipc2/hero.png'],
    highlights: ['AMD Strix Halo', '50 TOPs NPU', 'Quad display', 'Dual USB4'],
    specs: [
      { label: 'Processor', value: 'AMD Strix Halo (120W/132W)' },
      { label: 'Graphics', value: 'Up to 40 graphics cores' },
      { label: 'NPU', value: '50 TOPs AI performance' },
      { label: 'Memory', value: 'Up to 128GB LPDDR5x 8000MT/s' },
      { label: 'Storage', value: 'Dual M.2 2280 PCIe x4 SSD' },
      { label: 'Display', value: 'Quad-display: HDMI 2.1 FRL + DP 1.4' },
      { label: 'USB', value: 'Dual USB4 40Gbps' },
      { label: 'Network', value: '2.5G LAN RJ45 + WiFi/BT' },
      { label: 'Power', value: '350W internal Flex PSU or 240W DC-IN' },
    ],
    features: [
      { icon: 'Cpu', title: 'AI Performance', description: '50 TOPs NPU for edge AI workloads.' },
      { icon: 'Monitor', title: 'Quad Display', description: 'Support up to four simultaneous displays.' },
      { icon: 'Zap', title: 'High Speed', description: 'Dual USB4 40Gbps ports for demanding peripherals.' },
    ],
  },
  mcipcb12: {
    name: 'MCIPCB12',
    tagline: 'Compact fanless industrial mini PC with rich I/O and triple-display support',
    description: 'MCIPCB12 is a compact industrial mini PC designed for automation, digital signage, embedded gateways, and machine-side control. It combines efficient Intel Elkhart Lake or Alder Lake-N processors with dual Gigabit LAN, dual RS232, flexible storage, and triple-display output.',
    images: [`${mcipcb12ImageBase}/1.jpg`],
    galleryImages: [
      `${mcipcb12ImageBase}/1.jpg`,
      `${mcipcb12ImageBase}/2.jpg`,
      `${mcipcb12ImageBase}/3.jpg`,
    ],
    highlights: ['Intel Elkhart Lake / Alder Lake-N', '2 x HDMI + 1 x DP', 'Dual GbE LAN', '135 x 127 x 38.7 mm'],
    specs: [
      { label: 'Model', value: 'MCIPCB12' },
      { label: 'CPU', value: 'Intel Elkhart Lake J6412/J6413/J6426; Intel Alder Lake-N N95/N100/N200/N300' },
      { label: 'Video', value: '2 x HDMI 1.4, 1 x DP 1.2' },
      { label: 'Graphics', value: 'Intel UHD Graphics' },
      { label: 'RAM', value: '1 x DDR4 SO-DIMM slot, maximum 16GB' },
      { label: 'USB', value: '2 x USB 3.0, 2 x USB 2.0' },
      { label: 'Power Input', value: 'DC 12V' },
      { label: 'NIC', value: '2 x Realtek RTL8111H Gigabit LAN' },
      { label: 'COM', value: '2 x DB9 RS232 COM' },
      { label: 'Storage', value: '1 x M.2 2280 NVMe, 1 x SATA 3.0, 1 x mSATA 3.0' },
      { label: 'Expansion', value: '1 x M.2 2230 supporting WiFi and Bluetooth; watchdog; network wake-up / PXE' },
      { label: 'Front I/O', value: '2 x USB 3.0, 2 x USB 2.0, 2 x DB9 RS232 COM, 1 x power button' },
      { label: 'Rear I/O', value: '2 x RJ45 Gigabit LAN, 1 x DC 12V, 2 x HDMI 1.4, 1 x DP 1.2, 1 x microphone, 1 x speaker' },
      { label: 'Internal I/O', value: '1 x SATA 3.0 slot, 1 x M.2 SSD slot, 1 x mSATA 3.0 slot, 1 x DDR4 SO-DIMM slot, 1 x M.2 2230 slot, 1 x CMOS battery' },
      { label: 'BIOS', value: 'AMI UEFI BIOS' },
      { label: 'System', value: 'Windows 10, WES 10, Linux' },
      { label: 'Working Environment', value: 'Working temperature: -20°C to +60°C; storage temperature: -30°C to +70°C; relative humidity: 10%-90%, non-condensing' },
      { label: 'Size', value: '135 x 127 x 38.7 mm' },
      { label: 'Weight', value: 'Net 0.8 kg; gross 1 kg' },
    ],
    features: [
      { icon: 'Monitor', title: 'Triple Display Output', description: 'Dual HDMI and DisplayPort outputs support information displays and multi-screen workstations.' },
      { icon: 'Network', title: 'Industrial Connectivity', description: 'Dual Gigabit LAN, dual RS232, and four USB ports connect controllers, sensors, and peripherals.' },
      { icon: 'HardDrive', title: 'Flexible Storage', description: 'M.2 NVMe, SATA 3.0, and mSATA storage options simplify deployment and expansion.' },
    ],
    sellingPoints: [
      { image: `${mcipcb12ImageBase}/4.jpg`, title: 'Clearly labeled internal expansion', description: 'The internal layout identifies DDR4 memory, M.2 WiFi, mSATA, M.2 NVMe, SATA, speaker, CMOS, and front-panel connections for easier configuration and servicing.' },
      { image: `${mcipcb12ImageBase}/5.jpg`, title: 'Complete front and rear interface map', description: 'The panel guide shows four USB ports, dual DB9 RS232, dual Gigabit LAN, dual HDMI, DisplayPort, audio, WiFi antenna, and 12V DC input.' },
      { image: `${mcipcb12ImageBase}/6.jpg`, title: 'Versatile industrial and commercial applications', description: 'Designed for intelligent forklifts, CNC machines, automation, self-service payment equipment, kiosks, and digital signage.' },
      { image: `${mcipcb12ImageBase}/7.jpg`, title: 'Broad operating system support', description: 'Compatible with Ubuntu, Windows, and Linux environments for flexible software deployment and system integration.' },
    ],
    advantageSummary: 'MCIPCB12 balances compact dimensions with practical industrial connectivity, flexible storage, triple-display output, and efficient processor options for reliable embedded and edge deployments.',
    operatingRange: '-20°C to +60°C',
  },
  mcipcd3: {
    name: 'MCIPCD3',
    tagline: 'Six-LAN industrial network appliance with flexible Intel Core platform support',
    description: 'MCIPCD3 is a rugged industrial network appliance designed for routing, firewall, gateway, and edge connectivity deployments. It combines flexible Intel processor options with six Intel Gigabit LAN ports, dual serial interfaces, expandable wireless connectivity, and a wide operating temperature range.',
    images: [`${mcipcd3ImageBase}/1.jpg`],
    galleryImages: [
      `${mcipcd3ImageBase}/2.jpg`,
      `${mcipcd3ImageBase}/3.jpg`,
      `${mcipcd3ImageBase}/4.jpg`,
    ],
    highlights: ['Intel 2955U / Core i3/i5/i7', '6 x Intel GbE LAN', 'Dual RS232', '209 x 150 x 57 mm'],
    specs: [
      { label: 'Model', value: 'MCIPCD3' },
      { label: 'CPU', value: 'Optional Intel 2955U, 4th/6th/7th/8th Gen Core i3/i5/i7 CPU' },
      { label: 'Video', value: '1 x HDMI' },
      { label: 'RAM', value: '1 x DDR3L SO-DIMM slot, maximum 16GB' },
      { label: 'Material', value: 'Aluminum' },
      { label: 'USB', value: '4 x USB' },
      { label: 'Power Input', value: '12V DC input' },
      { label: 'NIC', value: '6 x GbE RJ45 Intel i210/i211' },
      { label: 'COM', value: '1 x DB-9 RS232, 1 x RJ45 RS232 Cisco standard' },
      { label: 'Storage', value: '1 x mSATA, 1 x HDD/SSD' },
      { label: 'Expansion', value: '1 x Mini-PCIe full card with SIM slot supporting 3G/4G, WiFi/Bluetooth; watchdog timer 1-255 seconds' },
      { label: 'Front I/O', value: '1 x power button, 1 x reset button, 4 x USB, 1 x HDMI, 1 x DB-9 RS232, 1 x RJ45 RS232 Cisco standard' },
      { label: 'Rear I/O', value: '6 x GbE RJ45 LAN, 1 x 12V DC power input, 2 x antenna connectors, 1 x power LED, 1 x HDD LED' },
      { label: 'System', value: 'Windows 7/8/10, Linux' },
      { label: 'Working Environment', value: 'Working temperature: -20°C to +70°C; storage temperature: -30°C to +70°C; storage humidity: 95% @40°C, non-condensing' },
      { label: 'Size', value: '209 x 150 x 57 mm' },
      { label: 'Weight', value: '1.35 kg' },
    ],
    features: [
      { icon: 'Network', title: 'Six Intel Gigabit LAN Ports', description: 'Six Intel i210/i211 network interfaces support routing, firewall, gateway, and network segmentation workloads.' },
      { icon: 'Cpu', title: 'Flexible Intel Platform', description: 'Multiple Intel processor options help balance performance, cost, and project lifecycle requirements.' },
      { icon: 'Thermometer', title: 'Wide Temperature Operation', description: 'Designed for reliable operation from -20°C to +70°C in demanding edge environments.' },
    ],
    sellingPoints: [
      { image: `${mcipcd3ImageBase}/5.jpg`, title: 'Front and rear panel overview', description: 'The illustrated interface map identifies USB, HDMI, dual serial ports, six Gigabit LAN ports, reset and power controls, status LEDs, antenna connectors, and 12V DC input.' },
      { image: `${mcipcd3ImageBase}/6.jpg`, title: 'Six Intel Gigabit LAN ports', description: 'Six 1GbE interfaces powered by Intel i210/i211 controllers provide stable, high-density connectivity for routing, firewall, and network segmentation workloads.' },
    ],
    advantageSummary: 'MCIPCD3 combines six Intel Gigabit LAN ports, flexible Intel processor choices, legacy serial connectivity, wireless expansion, and a rugged aluminum enclosure for network security and industrial edge deployments.',
    operatingRange: '-20°C to +70°C',
  },
  mcr20: {
    name: 'MCR20',
    tagline: 'Fanless Alder Lake-N network appliance with dual 10GbE and dual 2.5GbE',
    description: 'MCR20 is a compact network security and edge appliance built for high-throughput routing, firewall, VPN, and gateway deployments. It combines Intel Alder Lake-N processors with dual Intel 2.5GbE, dual 10GbE copper or SFP+ networking, DDR5 memory, flexible storage, and a rugged aluminum enclosure.',
    images: ['/assets/products/firewall/mcr20/images/1.jpg'],
    galleryCards: [
      {
        image: '/assets/products/firewall/mcr20/images/3.jpg',
        title: 'Clearly labeled internal expansion',
        description: 'The motherboard layout identifies DDR5 memory, M.2 NVMe, dual SATA, PCIe expansion, TPM, COM, power, and service connections for straightforward configuration.',
      },
      {
        image: '/assets/products/firewall/mcr20/images/5.jpg',
        title: 'Purpose-built thermal design',
        description: 'The high-fin aluminum chassis dissipates processor heat while a dedicated 10G network-card fan manages the higher thermal load of multi-gigabit networking.',
      },
    ],
    highlights: ['Intel Alder Lake-N', '2 x 10GbE + 2 x 2.5GbE', 'DDR5 up to 48GB', 'Triple 4K@60Hz output'],
    specs: [
      { label: 'Model', value: 'MCR20' },
      { label: 'CPU', value: 'Intel Alder Lake-N N95, N97, N100, N200, Core i3-N300, or Core i3-N305' },
      { label: 'Chipset', value: 'Intel Alder Lake-N' },
      { label: 'Graphics', value: 'Intel UHD Graphics' },
      { label: 'Video', value: '2 x HDMI 2.0 and 1 x Type-C, supporting 4K at 60Hz' },
      { label: 'Memory', value: '1 x SO-DIMM DDR5-4800 slot with DDR5-5200/5600 support, maximum 48GB' },
      { label: 'Material', value: 'Aluminum alloy' },
      { label: 'USB', value: '5 x USB 2.0, 1 x USB 3.2 Gen 1 (5Gbps), and 1 x Type-C USB 2.0' },
      { label: 'Power', value: '12V DC; 5A for N100-N200 configurations or 8A for Core i3-N300/N305 configurations' },
      { label: 'Network', value: '2 x Intel i226-V 2.5GbE RJ45 plus 2 x Intel X550-T2 10GbE RJ45 or 2 x Intel 82599ES SFP+' },
      { label: 'Storage', value: '1 x M.2 2280 NVMe PCIe 3.0 x1 and 2 x SATA 3.0 6Gbps' },
      { label: 'Expansion', value: '1 x TF card slot, 1 x COM header, and 1 x TPM header' },
      { label: 'Front I/O', value: 'Power button, Clear CMOS, 2 x WiFi antenna holes, TF slot, Type-C, USB 2.0, 2 x HDMI 2.0, power indicator, and storage indicator' },
      { label: 'Rear I/O', value: '12V DC input, grounding screw, USB 3.2 Gen 1, 3 x USB 2.0, 2 x 2.5GbE RJ45, and either 2 x 10GbE RJ45 or 2 x SFP+' },
      { label: 'Internal I/O', value: '4-pin power, TPM, SATA power, 2 x SATA, PCIe x8 slot with PCIe 3.0 x4 signal, M.2 NVMe PCIe 3.0 x1, DDR5 SO-DIMM, buzzer, and COM' },
      { label: 'Dimensions', value: '176.7 x 143.7 x 58.2 mm' },
      { label: 'TDP', value: '6W or 15W depending on processor' },
      { label: 'System', value: 'Windows 10, Windows 11, and Linux' },
      { label: 'Working Environment', value: '0°C to 70°C; 5%-85% relative humidity, non-condensing' },
    ],
    features: [
      { icon: 'Network', title: 'Multi-Gigabit Network Platform', description: 'Dual Intel 2.5GbE plus dual 10GbE copper or SFP+ interfaces support high-throughput routing, firewall, and network segmentation.' },
      { icon: 'Cpu', title: 'Flexible Alder Lake-N Performance', description: 'Processor options from N95 through Core i3-N305 let projects balance compute performance, power use, and deployment cost.' },
      { icon: 'HardDrive', title: 'Expandable Storage and I/O', description: 'M.2 NVMe, dual SATA, DDR5 memory, TPM, COM, TF card, and PCIe expansion provide a flexible platform for edge applications.' },
    ],
    sellingPoints: [
      {
        image: '/assets/products/firewall/mcr20/images/a3.jpg',
        title: 'Complete front and rear interface map',
        description: 'The labeled panel overview shows display, USB, TF, Type-C, control, status, power, dual 2.5GbE, and dual 10GbE connections at a glance.',
      },
      {
        image: '/assets/products/firewall/mcr20/images/a2.jpg',
        title: 'Dual Intel 10GbE connectivity',
        description: 'Two Intel X550-T2 10GbE copper ports deliver high-throughput connectivity, with an Intel 82599ES dual-SFP+ configuration available as an alternative.',
      },
    ],
    advantageSummary: 'MCR20 combines compact fanless edge computing with enterprise-oriented network bandwidth: dual 2.5GbE, optional dual 10GbE copper or SFP+, DDR5 memory, flexible storage, triple-display output, and broad internal expansion in one rugged appliance.',
    operatingRange: '0°C to 70°C',
  },
  mcsrp6: {
    name: 'MCSRP6',
    tagline: 'Compact Alder Lake-N and Twin Lake network appliance with dual 2.5GbE',
    description: 'MCSRP6 is a compact aluminum-alloy network and edge appliance with Intel Alder Lake-N and Twin Lake processor options. It combines dual Intel 2.5GbE LAN, DDR5 memory, HDMI and DisplayPort output, wide 12-24V DC input, M.2 storage, and extensive internal expansion in a 115 x 114.3 x 40 mm chassis.',
    images: ['/assets/products/firewall/mcsrp6/images/1.jpg'],
    galleryCards: [
      { image: '/assets/products/firewall/mcsrp6/images/2.jpg', title: 'Compact aluminum-alloy chassis', description: 'A compact enclosure brings the power, display, dual-network, and USB connections together in an easy-to-access layout.' },
      { image: '/assets/products/firewall/mcsrp6/images/3.jpg', title: 'Rear expansion connectivity', description: 'The rear panel provides space for SFF-8654, ATX 4-pin power, and dual wireless antenna connections.' },
      { image: '/assets/products/firewall/mcsrp6/images/8.jpg', title: 'Clearly labeled internal expansion', description: 'Internal headers and slots support storage, Wi-Fi, GPIO, COM, cooling, front-panel controls, and additional USB connectivity.' },
    ],
    highlights: ['Intel Alder Lake-N / Twin Lake', '2 x Intel i226-V 2.5GbE', 'DDR5 up to 48GB', 'DC 12-24V input'],
    specs: [
      { label: 'Model', value: 'MCSRP6' },
      { label: 'CPU', value: 'Intel Alder Lake-N N100 / N200 / Core i3-N305; Twin Lake N150 / N250 / Core i3-N355' },
      { label: 'Chipset', value: 'Intel Alder Lake-N and Twin Lake' },
      { label: 'Graphics', value: 'Intel Graphics' },
      { label: 'Display', value: '1 x HDMI 2.0 and 1 x DisplayPort 1.4, both supporting 4K at 60Hz' },
      { label: 'Memory', value: '1 x SO-DIMM DDR5-4800; supports DDR5-5200 / 5600; maximum 48GB' },
      { label: 'Material', value: 'Aluminum alloy' },
      { label: 'USB', value: '2 x USB 3.2 Gen 2, up to 10Gbps' },
      { label: 'Power Input', value: 'DC 12-24V, 5.5 x 2.5 mm connector' },
      { label: 'Network', value: '2 x Intel i226-V 2.5GbE LAN' },
      { label: 'Storage', value: '1 x M.2 slot supporting NVMe or NGFF SATA SSD' },
      { label: 'Front I/O', value: 'DC input, HDMI 2.0, DisplayPort 1.4, 2 x 2.5GbE LAN, 2 x USB 3.2, and power button' },
      { label: 'Rear I/O', value: 'SFF-8654 8i, ATX 4-pin 12V, and 2 x Wi-Fi antenna holes' },
      { label: 'Internal I/O', value: 'Phoenix Contact, Auto Power On, SYS_FAN, GPIO, COM, CPU_FAN, eDP, DDR5 SO-DIMM, Clear BIOS, F_PANEL, 2 x USB 2.0, SFF-8654, M.2 storage, and M.2 Wi-Fi' },
      { label: 'Dimensions', value: '115 x 114.3 x 40 mm' },
      { label: 'TDP', value: '9-15W, depending on processor' },
      { label: 'System', value: 'Windows 7 / 8 / 10 and Linux' },
      { label: 'Working Environment', value: '0°C to 75°C; 10%-90% relative humidity, non-condensing' },
      { label: 'Color', value: 'Black' },
    ],
    features: [
      { icon: 'Network', title: 'Dual Intel 2.5GbE Networking', description: 'Two Intel i226-V ports provide high-speed wired connectivity for compact routing and edge-network deployments.' },
      { icon: 'Zap', title: 'Wide-Voltage DC Input', description: 'The 12-24V DC input supports installation across a wider range of network and embedded environments.' },
      { icon: 'Layers', title: 'Expansion-Ready Platform', description: 'M.2 storage, M.2 Wi-Fi, SFF-8654, GPIO, COM, eDP, fan, and front-panel connections support flexible integration.' },
    ],
    sellingPoints: [
      { image: '/assets/products/firewall/mcsrp6/images/6.jpg', title: 'Standard interface layout', description: 'The standard front and rear interface map makes installation planning and cable routing straightforward.' },
      { image: '/assets/products/firewall/mcsrp6/images/7.jpg', title: 'Optional expansion-panel configurations', description: 'Optional rear-panel configurations support additional USB 2.0 connections or SFF-8654 and ATX power expansion with the corresponding parts and cables.' },
      { image: '/assets/products/firewall/mcsrp6/images/5.jpg', title: '80 x 80 mm fan mounting support', description: 'Reserved mounting holes allow an 80 x 80 mm fan to be added when the deployment requires active airflow.' },
      { image: '/assets/products/firewall/mcsrp6/images/4.jpg', title: 'Broad edge and network applications', description: 'MCSRP6 supports varied edge and network deployments, including AI robots, smart homes, smart hardware, soft routers, 3D printers, and education.' },
    ],
    advantageSummary: 'MCSRP6 combines modern low-power Intel processor options, dual 2.5GbE networking, DDR5 memory, 4K dual-display output, and a broad set of internal expansion connections in a compact aluminum-alloy enclosure.',
    operatingRange: '0°C to 75°C',
  },  mc15uh: {
    name: 'MC15UH',
    tagline: 'Intel Core Ultra performance with USB4, OCuLink, and dual 2.5GbE',
    description: 'MC15UH is a compact commercial mini PC based on the Intel Arrow Lake-H platform. It combines Intel Core Ultra processing and Intel Arc 140T graphics with dual DDR5 memory slots, two NVMe storage slots, dual 2.5GbE LAN, USB4, and OCuLink connectivity.',
    images: ['/assets/products/commercial/mc15uh/images/1.jpg'],
    galleryCards: [
      {
        image: '/assets/products/commercial/mc15uh/images/2.jpg',
        title: 'Front and rear connectivity',
        description: 'Front USB, USB4, audio, reset, and OCuLink connections are paired with dual 2.5GbE LAN, HDMI, DisplayPort, USB, and DC input on the rear panel.',
      },
      {
        image: '/assets/products/commercial/mc15uh/images/3.jpg',
        title: 'Compact ventilated enclosure',
        description: 'The compact chassis uses ventilated side panels and a top intake pattern as part of its cooling design.',
      },      {
        image: '/assets/products/commercial/mc15uh/images/5.jpg',
        title: 'Intel Core Ultra platform',
        description: 'The Arrow Lake-H platform combines Intel Core Ultra processing with integrated Intel Arc 140T graphics.',
      },
    ],
    highlights: ['Intel Core Ultra 7 / 9', 'Intel Arc 140T Graphics', '2 x DDR5 SO-DIMM, up to 128GB', '132 x 132 x 50.5 mm'],
    specs: [
      { label: 'Model', value: 'MC15UH' },
      { label: 'CPU', value: 'Intel Core Ultra 7 255H or Intel Core Ultra 9 285H processor' },
      { label: 'Platform', value: 'Intel Arrow Lake-H' },
      { label: 'Graphics', value: 'Intel Arc 140T Graphics' },
      { label: 'Memory', value: '2 x SO-DIMM DDR5-5600 slots, supporting up to 128GB' },
      { label: 'Storage', value: '2 x M.2 2280 NVMe SSD slots' },
      { label: 'Display', value: '1 x HDMI (up to 8K@60Hz / 4K@120Hz), 1 x DisplayPort (up to 8K@60Hz / 4K@160Hz), and display output through USB4 (up to 4K@120Hz)' },
      { label: 'Network', value: '2 x Intel i226-V 2.5GbE LAN' },
      { label: 'Wireless', value: 'Wi-Fi 6E and Bluetooth 5.3' },
      { label: 'Front I/O', value: '1 x power button, 1 x reset hole, 1 x 3.5 mm combined audio jack, 2 x USB 3.0, 1 x USB4 40Gbps, and 1 x OCuLink connector for an external graphics expansion dock' },
      { label: 'Rear I/O', value: '1 x DC input, 2 x 2.5GbE LAN, 1 x HDMI 2.1, 1 x DisplayPort 2.1, and 2 x USB 3.0' },
      { label: 'Power', value: '19V / 6.32A, 120W' },
      { label: 'BIOS', value: 'AMI BIOS, Legacy or UEFI' },
      { label: 'System', value: 'Windows 10 or Windows 11' },
      { label: 'Working Environment', value: '0°C to 50°C; 5%-90% relative humidity, non-condensing' },
      { label: 'Dimensions', value: '132 x 132 x 50.5 mm' },
    ],
    features: [
      { icon: 'Cpu', title: 'Intel Core Ultra Platform', description: 'Arrow Lake-H Core Ultra 7 255H and Core Ultra 9 285H processor options are paired with Intel Arc 140T graphics.' },
      { icon: 'Zap', title: 'USB4 and OCuLink', description: 'USB4 40Gbps supports display output, while OCuLink provides a connection for an external graphics expansion dock.' },
      { icon: 'Network', title: 'Dual 2.5GbE Networking', description: 'Two Intel i226-V 2.5GbE ports provide separate high-speed wired network connections.' },
    ],
    sellingPoints: [
      {
        image: '/assets/products/commercial/mc15uh/images/4.jpg',
        title: 'Clearly labeled interface layout',
        description: 'The panel overview identifies every front and rear connection, including USB4, OCuLink, dual 2.5GbE LAN, HDMI, and DisplayPort.',
      },
      {
        image: '/assets/products/commercial/mc15uh/images/6.jpg',
        title: 'VC cooling structure',
        description: 'The cooling assembly combines a fan with a VC heat spreader in the compact enclosure.',
      },
    ],
    advantageSummary: 'MC15UH brings an Intel Core Ultra platform, up to 128GB DDR5 memory, dual NVMe storage, dual 2.5GbE networking, and external expansion through USB4 and OCuLink into a 132 mm square chassis.',
    operatingRange: '0°C to 50°C',
  },
  mctar7: {
    name: 'MCTAR7',
    tagline: 'Compact AMD Ryzen performance with dual HDMI, full-featured Type-C, and dual storage',
    description: 'MCTAR7 is a compact commercial mini PC with AMD Ryzen 5 and Ryzen 7 processor options. It combines AMD Radeon graphics with dual DDR4 memory slots, two M.2 storage formats, dual HDMI, full-featured Type-C, Gigabit Ethernet, Wi-Fi 6, and Bluetooth 5.2 in a 105 x 115 x 35 mm chassis.',
    images: ['/assets/products/commercial/mctar7/images/1.jpg'],
    galleryCards: [
      {
        image: '/assets/products/commercial/mctar7/images/2.jpg',
        title: 'Compact front-panel design',
        description: 'The front panel provides two USB 3.1 ports, a power button, and a clean compact enclosure for desk or display-side deployment.',
      },
      {
        image: '/assets/products/commercial/mctar7/images/3.jpg',
        title: 'Rear connectivity',
        description: 'The rear panel brings together Gigabit Ethernet, dual HDMI, full-featured Type-C, audio, USB, and DC power connections.',
      },
      {
        image: '/assets/products/commercial/mctar7/images/5.jpg',
        title: 'AMD Ryzen processor platform',
        description: 'The available AMD Ryzen processor range includes configurations for responsive multitasking and everyday commercial workloads.',
      },
    ],
    highlights: ['AMD Ryzen 5 / 7 options', '2 x HDMI 1.4 + full-featured Type-C', '2 x DDR4-3200 SO-DIMM, up to 32GB', '105 x 115 x 35 mm'],
    specs: [
      { label: 'Model', value: 'MCTAR7' },
      { label: 'CPU', value: 'AMD Ryzen 7 4700U, Ryzen 5 5600U, Ryzen 7 5800U, Ryzen 7 5825U, Ryzen 5 7535U, or Ryzen 7 7730U processor' },
      { label: 'Graphics', value: 'AMD Radeon Graphics' },
      { label: 'Memory', value: '2 x SO-DIMM DDR4-3200 slots, supporting up to 32GB' },
      { label: 'Storage', value: '1 x M.2 2280 PCIe 3.0 x4 SSD slot and 1 x M.2 2242 NGFF SATA SSD slot, supporting up to 2TB' },
      { label: 'Display', value: '2 x HDMI 1.4 and 1 x full-featured Type-C' },
      { label: 'USB', value: '2 x USB 3.1 and 2 x USB 3.0' },
      { label: 'Network', value: '1 x RJ45 Gigabit Ethernet' },
      { label: 'Wireless', value: 'Wi-Fi 6 and Bluetooth 5.2' },
      { label: 'Front I/O', value: '1 x power button and 2 x USB 3.1' },
      { label: 'Rear I/O', value: '1 x RJ45 Gigabit Ethernet, 1 x full-featured Type-C, 2 x HDMI 1.4, 1 x DC 19V input, 1 x audio jack, and 2 x USB 3.0' },
      { label: 'Power', value: 'DC 19V / 3.42A adapter' },
      { label: 'System', value: 'Windows 10 Home or Windows 11 Home' },
      { label: 'TDP', value: 'Depends on processor' },
      { label: 'Working Environment', value: '0°C to 50°C; 5%-90% relative humidity, non-condensing' },
      { label: 'Dimensions', value: '105 x 115 x 35 mm' },
    ],
    features: [
      { icon: 'Cpu', title: 'Flexible AMD Ryzen Options', description: 'Ryzen 5 and Ryzen 7 processor choices support a range of commercial performance requirements.' },
      { icon: 'Monitor', title: 'Flexible Display Connectivity', description: 'Dual HDMI 1.4 and a full-featured Type-C port provide multiple display connection options.' },
      { icon: 'HardDrive', title: 'Dual Storage Formats', description: 'M.2 2280 PCIe and M.2 2242 SATA slots support flexible SSD configurations in the compact chassis.' },
    ],
    sellingPoints: [
      {
        image: '/assets/products/commercial/mctar7/images/4.jpg',
        title: 'Clearly labeled front and rear interfaces',
        description: 'The interface map identifies USB 3.1, power, DC input, audio, HDMI, Gigabit Ethernet, USB 3.0, and full-featured Type-C connections.',
      },
      {
        image: '/assets/products/commercial/mctar7/images/6.jpg',
        title: 'Designed for everyday commercial scenarios',
        description: 'The provided application examples cover audio-visual entertainment, meetings, remote conferencing, and comfortable office work.',
      },
    ],
    advantageSummary: 'MCTAR7 combines a broad AMD Ryzen processor range, dual DDR4 memory, two SSD formats, multiple display outputs, Wi-Fi 6, and practical commercial connectivity in a compact 105 x 115 x 35 mm enclosure.',
    operatingRange: '0°C to 50°C',
  },
  mcipca2: {
    name: 'MCIPCA2',
    tagline: 'Compact single-COM industrial mini PC with four Intel Gigabit LAN ports',
    description: 'MCIPCA2 is a compact fanless industrial computer for gateway, embedded network, and machine-side deployments. It combines an Intel J4125 processor with four Intel Gigabit LAN ports, one RS232 serial port, six USB ports, wireless expansion, and a compact aluminum enclosure.',
    images: [`${mcipca2ImageBase}/main-square-srgb.jpg`],
    galleryImages: [`${mcipca2ImageBase}/view-1-square-srgb.jpg`, `${mcipca2ImageBase}/view-2-square-srgb.jpg`],
    highlights: ['Intel Celeron J4125', '4 x Intel GbE LAN', '1 x DB9 RS232 COM', '135 x 127 x 38.7 mm'],
    specs: [
      { label: 'Model', value: 'MCIPCA2' },
      { label: 'CPU', value: 'Intel Celeron J4125' },
      { label: 'Video', value: '1 x HDMI' },
      { label: 'RAM', value: '1 x DDR4 SO-DIMM slot, maximum 8GB' },
      { label: 'USB', value: '2 x USB 3.0, 4 x USB 2.0' },
      { label: 'Power Input', value: 'DC 12V' },
      { label: 'COM', value: '1 x DB9 RS232 COM' },
      { label: 'NIC', value: '4 x GbE RJ45 with Intel i211/i210 controllers' },
      { label: 'Storage', value: '1 x 2.5-inch HDD/SSD, 1 x mSATA' },
      { label: 'Expansion', value: '1 x full-size Mini-PCIe with onboard SIM slot, supporting 3G/4G module, WiFi, and Bluetooth' },
      { label: 'Front I/O', value: '1 x power button, 1 x reset button, 2 x USB 3.0, 4 x USB 2.0, 1 x DB9 RS232 COM' },
      { label: 'Rear I/O', value: '4 x GbE RJ45 LAN, 1 x HDMI, 1 x DC 12V input, 2 x antenna connectors, 1 x SIM card slot, power and HDD LEDs' },
      { label: 'System', value: 'Windows 10, WES 10, Linux' },
      { label: 'Working Environment', value: 'Operating temperature: -20°C to +60°C; storage temperature: -30°C to +70°C; storage humidity: 10%-90% @30°C, non-condensing' },
      { label: 'Size', value: '135 x 127 x 38.7 mm' },
      { label: 'Weight', value: '1 kg' },
    ],
    features: [
      { icon: 'Network', title: 'Four Intel Gigabit LAN Ports', description: 'Four Intel i211/i210 network interfaces suit compact gateways and multi-network edge deployments.' },
      { icon: 'Usb', title: 'Practical Peripheral I/O', description: 'Six USB ports and one RS232 serial port connect common industrial peripherals without unnecessary serial density.' },
      { icon: 'Layers', title: 'Wireless Expansion', description: 'Full-size Mini-PCIe and an onboard SIM slot support compatible cellular, WiFi, and Bluetooth modules.' },
    ],
    advantageSummary: 'MCIPCA2 represents the A-series approach: compact deployment with a single serial interface, while retaining four Intel Gigabit LAN ports and practical storage and wireless expansion.',
    operatingRange: '-20°C to +60°C',
  },
  mcipc9: {
    name: 'MCIPC9',
    tagline: 'Six-COM industrial mini PC with Intel Core Ultra and dual LAN',
    description: 'MCIPC9 is a multi-serial industrial computer designed for equipment control, data acquisition, and automation integration. It combines Intel Core Ultra processor options with six DB9 serial ports, dual Intel LAN, wide-voltage input, DDR5 memory, and flexible wireless expansion.',
    images: [`${mcipc9ImageBase}/main-square-srgb.jpg`],
    galleryImages: [`${mcipc9ImageBase}/view-1-square-srgb.jpg`, `${mcipc9ImageBase}/view-2-square-srgb.jpg`],
    highlights: ['Intel Core Ultra 125U-185H', '6 x DB9 COM', 'Dual Intel LAN', 'DC 9-36V input'],
    specs: [
      { label: 'Model', value: 'MCIPC9' },
      { label: 'CPU', value: 'Intel Core Ultra 125U, 125H, 155H, or 185H' },
      { label: 'Video', value: '1 x HDMI supporting up to 8K at 60Hz; 1 x DisplayPort supporting up to 4K at 60Hz; synchronous or asynchronous dual display' },
      { label: 'RAM', value: '1 x DDR5-5600 SO-DIMM slot, maximum 48GB' },
      { label: 'USB', value: '2 x USB 3.2 Gen 2 (10Gbps), 8 x USB 2.0' },
      { label: 'Power Input', value: 'DC 9-36V wide-voltage input' },
      { label: 'NIC', value: '2 x Intel LAN using I219-LM and i226-V/i226-LM controllers, with vPro, WOL, and PXE support' },
      { label: 'COM', value: '6 x DB9 serial ports; RS232 by default; COM1 supports optional TTL; COM2 and COM3 support optional RS485 by jumper' },
      { label: 'Storage', value: '1 x M.2 Key M 2280 supporting SATA/PCIe x4 adaptive storage; 1 x SATA 3.0 interface' },
      { label: 'Expansion', value: '1 x M.2 B Key for 4G/5G; 1 x M.2 E Key for WiFi 6 and Bluetooth' },
      { label: 'Front I/O', value: '2 x USB 3.2 Gen 2, 2 x USB 2.0, 2 x LAN, HDMI, DisplayPort, audio, COM5, COM6, power button, and DC input' },
      { label: 'Rear I/O', value: '6 x USB 2.0, COM1-COM4, and 2 x antenna openings' },
      { label: 'System', value: 'Windows 10, Windows 11, Linux, Ubuntu, CentOS' },
      { label: 'Working Environment', value: 'Operating temperature: -20°C to +60°C; storage temperature: -20°C to +70°C; operating humidity: 5%-95%, non-condensing' },
      { label: 'Size', value: '195 x 127 x 62 mm' },
    ],
    features: [
      { icon: 'Cpu', title: 'Intel Core Ultra Platform', description: 'Core Ultra processor options provide a modern platform for industrial control and edge workloads.' },
      { icon: 'Server', title: 'Six Serial Interfaces', description: 'Six DB9 ports support serial equipment integration, with selected TTL and RS485 configuration options.' },
      { icon: 'Zap', title: 'Wide-Voltage Input', description: 'DC 9-36V input supports deployment across varied industrial power environments.' },
    ],
    advantageSummary: 'MCIPC9 represents the C-series focus on multiple serial interfaces with dual networking, combining six DB9 ports, modern Intel Core Ultra processors, DDR5 memory, and wide-voltage input.',
    operatingRange: '-20°C to +60°C',
  },
  'mctpc-1506e': {
    name: 'MCTPC-1506E',
    tagline: '15.6-inch Full HD industrial panel PC with flexible Intel platforms',
    description: 'MCTPC-1506E combines a 15.6-inch Full HD display with industrial computing, multi-serial expansion, dual 2.5GbE networking, and DC 9-36V input. Its configurable processor, memory, storage, and wireless options support machine interfaces, production dashboards, and panel-mounted control applications.',
    images: [`${mctpc1506eImageBase}/main-transparent.png`],
    galleryImages: [`${mctpc1506eImageBase}/enclosure-transparent.png`, `${mctpc1506eImageBase}/interface-transparent.png`],
    highlights: ['15.6-inch 1920 x 1080 display', '2 x 2.5GbE LAN', '2 x RS232/422/485 COM', 'DC 9-36V input'],
    specs: [
      { label: 'Model', value: 'MCTPC-1506E' },
      { label: 'Display', value: '15.6-inch TFT-LCD, 1920 x 1080, 16.7M colors, 250 cd/m², 178° viewing angle, LED backlight with 30,000-hour rated lifespan' },
      { label: 'CPU', value: 'Intel Celeron J4125/J6412, Intel Processor N100/N150, or Intel Core 8th/10th/11th/12th/13th Gen i3/i5/i7' },
      { label: 'Video', value: '1 x HDMI' },
      { label: 'RAM', value: 'DDR4 for J4125/J6412 and 8th/10th/11th Gen Core; DDR5 for N100/N150 and 12th/13th Gen Core; slot count varies by platform' },
      { label: 'USB', value: 'J4125/J6412/N100/N150/11th Gen: 2 x USB 3.0 and 4 x USB 2.0; 8th/10th/12th/13th Gen: 4 x USB 3.0 and 2 x USB 2.0' },
      { label: 'Power Input', value: 'DC 9-36V through a 4-pin aviation connector' },
      { label: 'NIC', value: '2 x Intel i225-V/i226-V 2.5GbE RJ45, expandable to 4 LAN ports' },
      { label: 'COM', value: '2 x DB9 COM supporting RS232/422/485' },
      { label: 'Storage', value: '1 x M.2 2242/2260/2280 SATA, 1 x 2.5-inch HDD/SSD, and 1 x M.2 2280 NVMe' },
      { label: 'Expansion', value: '1 x M.2 3042/3052 for 3G/4G/5G with onboard SIM; 1 x M.2 2230 for WiFi/Bluetooth; extended I/O integrates 4 x 3-wire COM, 10 x GPIO, and 1 x remote switch' },
      { label: 'I/O', value: '2 x DB9 COM, audio line-out, power button, 4-pin aviation power connector, AT/ATX switch, HDMI, 5 x antenna connectors, and extended I/O' },
      { label: 'System', value: 'Windows, Linux' },
      { label: 'Working Environment', value: 'Operating temperature: -20°C to +60°C; storage temperature: -30°C to +70°C; storage humidity: 10%-90% @30°C, non-condensing' },
      { label: 'Size', value: '378.56 x 235.49 x 66.5 mm' },
    ],
    features: [
      { icon: 'Monitor', title: '15.6-inch Full HD Display', description: 'The integrated 1920 x 1080 panel provides a clear machine interface and production dashboard surface.' },
      { icon: 'Network', title: 'Industrial Network and Serial I/O', description: 'Dual 2.5GbE, dual configurable COM, and extended I/O support equipment and controller integration.' },
      { icon: 'Layers', title: 'Configurable Compute Platform', description: 'Multiple Intel processor generations, storage formats, and wireless modules support varied project requirements.' },
    ],
    advantageSummary: 'MCTPC-1506E integrates a Full HD industrial display, configurable Intel computing, wide-voltage power, 2.5GbE networking, serial connectivity, and wireless expansion in one panel-mount system.',
    operatingRange: '-20°C to +60°C',
  },
  mcai1: {
    name: 'MCAIPC1',
    tagline: 'AMD Ryzen AI Max+ flagship — 140W desktop performance in a 220mm chassis',
    description: 'Powered by the AMD Ryzen™ AI Max+ 395 processor with up to 128GB LPDDR5x memory and quad-display support. A 220×220×83mm powerhouse with dual 10G + 2.5G LAN, quad M.2 NVMe, USB4, and PD3.1 — built for AI workloads, edge servers, and professional workstations.',
    images: ['/assets/products/ai/mcaipc1/gallery/hero.jpg'],
    galleryImages: [
      '/assets/products/ai/mcaipc1/gallery/1.jpg',
      '/assets/products/ai/mcaipc1/gallery/2.jpg',
      '/assets/products/ai/mcaipc1/gallery/3.jpg',
      '/assets/products/ai/mcaipc1/gallery/4.jpg',
      '/assets/products/ai/mcaipc1/gallery/5.jpg',
      '/assets/products/ai/mcaipc1/gallery/6.jpg',
      '/assets/products/ai/mcaipc1/gallery/7.jpg',
      '/assets/products/ai/mcaipc1/gallery/8.jpg',
      '/assets/products/ai/mcaipc1/gallery/9.jpg',
    ],
    highlights: ['AMD Ryzen AI Max+ 395', '140W TDP', 'Quad-Display 4K', 'Dual 10G+2.5G LAN'],
    specs: [
      { label: 'Processor', value: 'AMD Ryzen™ AI Max+ 395, TDP up to 140W' },
      { label: 'Memory', value: 'LPDDR5x 8533MT/s, 256-bit, up to 128GB' },
      { label: 'Storage', value: '4x M.2 2280 PCIe 4.0 SSD + 4x SATA' },
      { label: 'Display', value: '1x HDMI 2.1 + 1x DP 2.1 + 2x USB4 (Quad Display)' },
      { label: 'USB', value: '2x USB4 + 6x USB3.0 (2x Front 10Gbps, 4x Rear)' },
      { label: 'Network', value: '1x 10G LAN (AQC113) + 1x 2.5G LAN (Intel I226)' },
      { label: 'Power', value: '8Pin ATX + 19V DC-IN + Type-C PD3.1 28V' },
      { label: 'Expansion', value: 'M.2 2230 PCIe (WiFi/BT), ARGB Header, FG Header' },
      { label: 'Dimensions', value: '220 × 220 × 83 mm' },
    ],
    features: [
      { icon: 'Cpu', title: 'AI Max+ Platform', description: 'AMD Ryzen™ AI Max+ 395 with integrated NPU for edge AI inference and real-time workloads.' },
      { icon: 'Monitor', title: 'Quad 4K Display', description: 'Simultaneous output via HDMI 2.1, DP 2.1, and dual USB4 — ideal for video walls and control rooms.' },
      { icon: 'HardDrive', title: 'Quad M.2 RAID', description: '4x PCIe 4.0 M.2 slots plus 4x SATA — up to 32TB total storage with flexible RAID configurations.' },
      { icon: 'Network', title: 'Dual High-Speed LAN', description: '10GbE (AQC113) for backbone throughput plus 2.5GbE (I226) with PXE and WoL for enterprise deployment.' },
      { icon: 'Zap', title: 'Triple Power Input', description: '8Pin ATX, 19V DC barrel, and USB-C PD3.1 28V — deploy in server rooms, deskside, or mobile workstations.' },
      { icon: 'Thermometer', title: 'Advanced Cooling', description: 'Dual fan headers (CPU + System) with intelligent PWM curves for sustained 140W operation in a compact chassis.' },
    ],
    sellingPoints: [
      { image: '/assets/products/ai/mcaipc1/details/2.jpg', title: 'AI Max+ Platform' },
      { image: '/assets/products/ai/mcaipc1/details/5.jpg', title: 'Advanced Cooling' },
      { image: '/assets/products/ai/mcaipc1/details/6.jpg', title: 'WiFi 7 + Bluetooth 5.4' },
      { image: '/assets/products/ai/mcaipc1/details/7.jpg', title: 'Quad M.2 Storage Array' },
    ],
  },
};

const productCategories: Record<string, string> = {
  ...Object.fromEntries(industrialCatalog.map((item) => [item.id, 'industrial-mini-pc'])),
  ...Object.fromEntries(firewallCatalog.map((item) => [item.id, 'firewall-mini-pc'])),
  ...Object.fromEntries(commercialCatalog.map((item) => [item.id, 'commercial-mini-pc'])),
  mcipcb13: 'industrial-mini-pc',
  mcipcb12: 'industrial-mini-pc',
  mcipcd3: 'industrial-mini-pc',
  mcipca2: 'industrial-mini-pc',
  mcipc9: 'industrial-mini-pc',
  'mctpc-1506e': 'industrial-mini-pc',
  mcai1: 'ai-mini-pc',
  mcai2: 'ai-mini-pc',
  mcr20: 'firewall-mini-pc',
  mcsrp6: 'firewall-mini-pc',
  mc15uh: 'commercial-mini-pc',
  mctar7: 'commercial-mini-pc',
};
const iconMap = {
  Cpu,
  Shield,
  Monitor,
  Server,
  Zap,
  Layers,
  CheckCircle,
  Network,
  Usb,
  HardDrive,
  Thermometer,
};

export default function ProductDetailPage() {
  const { t } = useLanguage();
  const params = useParams();
  const category = params.category as string;
  const productId = params.id as string;
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const product = productCategories[productId] === category ? products[productId] : undefined;
  const industrialSeriesCode = category === 'industrial-mini-pc'
    ? industrialCatalog.find((item) => item.id === productId)?.series.toLowerCase()
    : undefined;
  const firewallSeriesCode = category === 'firewall-mini-pc'
    ? firewallCatalog.find((item) => item.id === productId)?.series.toLowerCase()
    : undefined;
  const commercialSeriesCode = category === 'commercial-mini-pc'
    ? commercialCatalog.find((item) => item.id === productId)?.series.toLowerCase()
      || (['mc15uh', 'mctar7'].includes(productId) ? 'dpc' : undefined)
    : undefined;
  const categorySeriesCode = industrialSeriesCode || firewallSeriesCode || commercialSeriesCode;
  const backToCategoryHref = categorySeriesCode
    ? `/products/${category}#series-${categorySeriesCode}`
    : `/products/${category}`;
  const needsHeroImagePadding =
    productId === 'mcipcb7' ||
    productId === 'mcipcb9' ||
    (industrialSeriesCode === 'tpc' && productId !== 'mctpc-1501b');
  const catInfo = categoryData[category] || categoryData['industrial-mini-pc'];
  const CategoryIcon = iconMap[catInfo.icon] || Cpu;
  const gallery = product?.images || [];
  const detailImages = product?.galleryImages || gallery.slice(1, 4);
  const galleryItems: ProductCard[] = product?.galleryCards || detailImages.map((image) => ({ image, title: product?.name || '' }));

  useEffect(() => {
    if (!previewImage) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setPreviewImage(null);
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [previewImage]);

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">{t.productDetail.productNotFound}</h1>
          <Link href="/products" className="text-blue-700 hover:underline">
            {t.productDetail.backToProducts}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <section className={`relative overflow-hidden bg-gradient-to-br ${catInfo.gradient} text-white`}>
        <div className="absolute inset-0 opacity-20 tech-pattern-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <Link href={backToCategoryHref} className="inline-flex items-center text-sm text-slate-300 hover:text-white transition-colors mb-8">
            <ChevronLeft className="w-4 h-4 mr-1" />
            {t.productDetail.backToCategory.replace('{category}', catInfo?.name || category)}
          </Link>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[minmax(0,1.06fr)_minmax(400px,0.94fr)] lg:gap-12">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/30 bg-blue-300/10 px-4 py-2 text-sm text-blue-100 mb-6">
                <CategoryIcon className="w-4 h-4" />
                {catInfo?.name || ''}
              </div>
              <h1 className="text-4xl md:text-6xl font-bold tracking-normal mb-5">{product.name}</h1>
              <p className="text-xl md:text-2xl text-slate-200 mb-6 max-w-2xl">{product.tagline}</p>
              <p className="text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl">{product.description}</p>

              <div className="grid grid-cols-2 gap-3 mt-8 max-w-2xl">
                {product.highlights.map((item) => (
                  <div key={item} className="flex min-h-[68px] items-center rounded-lg border border-amber-200/20 bg-amber-200/10 px-4 py-3 text-sm font-medium leading-5 text-amber-50">
                    <span className="line-clamp-2">{item}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={() => document.getElementById('contact-cta')?.scrollIntoView({ behavior: 'smooth' })}
                className="liquid-cta liquid-cta-solid mt-6 inline-flex cursor-pointer items-center gap-2 px-6 py-3 text-sm font-semibold"
              >
                <span>{t.productDetail.contactSales}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            <motion.div className="mx-auto w-full max-w-[540px] lg:justify-self-end" initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.1 }}>
              <button
                type="button"
                onClick={() => setPreviewImage(gallery[0])}
                aria-label={t.productDetail.enlargeMainView.replace('{name}', product.name)}
                className="group block w-full cursor-zoom-in rounded-lg bg-white shadow-2xl shadow-blue-950/30 ring-1 ring-amber-200/30 overflow-hidden transition-transform duration-300 hover:scale-[1.015] hover:shadow-blue-950/45"
              >
                <img src={gallery[0]} alt={`${product.name} ${catInfo.name}`} className={`aspect-square w-full object-contain transition-transform duration-500 group-hover:scale-[1.025] ${needsHeroImagePadding ? 'p-8 sm:p-10 lg:p-12' : ''}`} />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {galleryItems.length > 0 && (
        <section className="py-16 bg-[#f3f8f6]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-9 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700 mb-3">{t.productDetail.productGallery}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-950">{t.productDetail.exploreProduct.replace('{name}', product.name)}</h2>
              <p className="mt-3 text-slate-600">{t.productDetail.galleryDescription}</p>
            </div>
            <div className={`grid grid-cols-1 gap-5 ${galleryItems.length === 1 ? 'mx-auto max-w-xl' : galleryItems.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'}`}>
              {galleryItems.map((item, index) => (
                <motion.div
                  key={item.image}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="rounded-lg border border-blue-100 bg-white shadow-sm overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-lg"
                >
                  <button
                    type="button"
                    onClick={() => setPreviewImage(item.image)}
                    aria-label={t.productDetail.enlargeView.replace('{name}', product.name).replace('{n}', String(index + 2))}
                    className="group block w-full cursor-zoom-in overflow-hidden"
                  >
                    <img src={item.image} alt={item.title || product.name} className="aspect-square w-full object-contain transition-transform duration-500 group-hover:scale-[1.025]" />
                  </button>
                  {item.description && (
                    <div className="border-t border-slate-100 p-6 text-left">
                      <h3 className="text-xl font-bold text-slate-950">{item.title}</h3>
                      <p className="mt-2 leading-relaxed text-slate-600">{item.description}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700 mb-3">{t.productDetail.technicalSpecifications}</p>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-950">{t.productDetail.industrialConfigDetails}</h2>
          </div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="overflow-hidden rounded-xl border border-blue-200 bg-white shadow-lg shadow-blue-900/10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-gradient-to-r from-[#172033] via-blue-950 to-[#172033] px-6 md:px-8 py-6 text-white">
              <div>
                <p className="text-sm uppercase tracking-[0.18em] text-blue-200 mb-2">{t.productDetail.specificationMatrix.replace('{name}', product.name)}</p>
                <h3 className="text-2xl font-bold">{t.productDetail.hardwareParameters}</h3>
              </div>
              <div className="rounded-lg border border-amber-300/30 bg-amber-300/10 px-4 py-3 text-left md:text-right">
                <p className="text-xs uppercase tracking-[0.16em] text-amber-200">{t.productDetail.operatingRange}</p>
                <p className="text-lg font-semibold text-amber-50">{product.operatingRange || t.productDetail.industrialRated}</p>
              </div>
            </div>

            <div>
              {product.specs.map((spec, index) => (
                <div key={spec.label} className={`group grid grid-cols-1 md:grid-cols-[240px_1fr] border-t border-blue-100 transition-colors ${index % 2 === 0 ? 'bg-white' : 'bg-blue-50/30'}`}>
                  <div className="relative flex items-center gap-3 border-b border-amber-100 bg-amber-50/80 px-5 py-4 transition-colors group-hover:bg-amber-100/80 md:border-b-0 md:border-r md:border-amber-200 md:px-6">
                    <div className="absolute left-0 top-0 h-full w-1 bg-amber-500 opacity-60 transition-all group-hover:w-1.5 group-hover:opacity-100" />
                    <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-md bg-white text-[11px] font-bold text-amber-700 ring-1 ring-amber-200">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <h4 className="text-sm font-bold uppercase tracking-wide text-amber-900">{spec.label}</h4>
                  </div>
                  <p className="bg-blue-50/35 px-5 py-4 text-blue-900 leading-relaxed transition-colors group-hover:bg-blue-50 md:px-7">{spec.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-[#f5f8f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-[0.82fr_1.18fr] gap-10 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700 mb-3">{t.productDetail.productAdvantages}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-5">{t.productDetail.advantagesHeading}</h2>
              <p className="text-slate-600 leading-relaxed">
                {product.advantageSummary || product.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {product.features.map((feature, index) => {
                const FeatureIcon = iconMap[feature.icon] || CheckCircle;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm hover:-translate-y-1 hover:border-amber-300 hover:shadow-md transition-all"
                  >
                    <div className={`w-11 h-11 rounded-lg flex items-center justify-center mb-5 ring-1 ${index === 0 ? 'bg-blue-50 text-blue-700 ring-blue-200' : index === 1 ? 'bg-amber-50 text-amber-700 ring-amber-200' : 'bg-rose-50 text-rose-700 ring-rose-200'}`}>
                      <FeatureIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-950 mb-2">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-slate-600">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {product.sellingPoints && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {product.sellingPoints.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`overflow-hidden rounded-xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${index % 2 === 0 ? 'border-blue-200 hover:border-blue-400' : 'border-amber-200 hover:border-amber-400'}`}
                >
                  <button
                    type="button"
                    onClick={() => setPreviewImage(point.image)}
                    aria-label={t.productDetail.enlargeImage.replace('{title}', point.title)}
                    className="group block w-full cursor-zoom-in overflow-hidden"
                  >
                    <img src={point.image} alt={point.title} className="aspect-square w-full object-contain transition-transform duration-500 group-hover:scale-[1.025]" />
                  </button>
                  <div className="p-6 text-slate-950 border-t border-slate-100">
                    <h3 className="text-xl font-bold">{point.title}</h3>
                    {point.description && (
                      <p className="text-slate-600 leading-relaxed mt-2">{point.description}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-white" id="contact-cta">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-950 mb-4">{t.productDetail.interestedIn.replace('{name}', product.name)}</h2>
          <p className="text-lg text-slate-600 mb-8">{t.productDetail.contactPrompt}</p>
          <div className="flex justify-center">
            <Link href="/contact" className="liquid-cta liquid-cta-solid inline-flex items-center justify-center px-8 py-4 font-semibold">
              <span>{t.productDetail.contactSales}</span>
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {previewImage && (
        <button
          type="button"
          onClick={() => setPreviewImage(null)}
          aria-label={t.productDetail.closeEnlargedImage}
          className="fixed inset-0 z-[100] flex cursor-zoom-out items-center justify-center bg-slate-950/85 p-4 md:p-10 backdrop-blur-sm"
        >
          <img
            src={previewImage}
            alt={t.productDetail.enlargedProductView}
            className="block max-h-full max-w-full object-contain shadow-2xl"
          />
        </button>
      )}
    </div>
  );
}
