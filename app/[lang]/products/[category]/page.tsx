'use client';
import { brochureUpdates } from '@/lib/brochure-updates';

import { ModelFamilyLinks, AiFamilyCards, TpcSeriesLinks } from '@/components/ProductFamilyNavigation';

import Image from 'next/image';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, Cpu, Shield, Monitor, Brain, CheckCircle2, type LucideIcon } from 'lucide-react';
import Link from '@/components/LocalizedLink';
import { useParams } from 'next/navigation';
import { aiCatalog } from '@/lib/ai-catalog';
import { industrialCatalog } from '@/lib/industrial-catalog';
import { firewallCatalog } from '@/lib/firewall-catalog';
import { commercialCatalog } from '@/lib/commercial-catalog';
import { nasMotherboardCopy } from '@/lib/nas-motherboard-copy';
import { actionButtonStyles } from '@/lib/action-button-styles';
import { categoryNames, categoryDescriptions } from '@/lib/category-labels';
import { aiCategoryCopy, categoryUiCopy } from '@/lib/category-copy';
import { industrialCategoryCopy } from '@/lib/category-content-translations';
import CategorySelection from '@/components/CategorySelection';

const categoryData: Record<string, { icon: LucideIcon; gradient: string; image: string }> = {
  'industrial-mini-pc': { icon: Cpu, gradient: 'from-blue-600 to-blue-700', image: '/assets/home/categories/industrial-mini-pc.png' },
  'ai-mini-pc': { icon: Brain, gradient: 'from-violet-600 to-blue-700', image: '/assets/home/categories/ai-mini-pc.png' },
  'commercial-mini-pc': { icon: Monitor, gradient: 'from-blue-500 to-blue-600', image: '/assets/home/categories/commercial-mini-pc.png' },
  'firewall-mini-pc': { icon: Shield, gradient: 'from-rose-600 to-red-800', image: '/assets/home/categories/firewall-mini-pc-server-pc.png' },
};

const sampleProducts: Record<string, Array<{ id: string; name: string; tagline: string; image: string; specs: string[] }>> = {
  'industrial-mini-pc': [
    {
      id: 'mcipca2',
      name: 'MCIPCA2',
      tagline: 'Compact single-COM industrial mini PC with four Intel Gigabit LAN ports',
      image: '/assets/products/industrial/a-series/mcipca2/images/main-square-srgb.jpg',
      specs: ['Intel Celeron J4125', '4 x Intel GbE LAN', '1 x DB9 RS232 COM', '-20°C to +60°C'],
    },
    {
      id: 'mcipcb13',
      name: 'MCIPCB13',
      tagline: 'Industrial box PC with Intel Core and Core Ultra configurations',
      image: '/assets/products/industrial/merged/mcipcb13/front.webp',
      specs: ['Intel Core / Core Ultra', 'Dual GbE LAN', 'Type-specific USB', '-20°C to +60°C'],
    },
    {
      id: 'mcipcb12',
      name: 'MCIPCB12',
      tagline: 'Compact fanless industrial mini PC with triple-display support',
      image: '/assets/products/industrial/b-series/mcipcb12/images/1.jpg',
      specs: ['Intel Elkhart Lake / Alder Lake-N', 'Dual GbE LAN', '2x HDMI + 1x DP', '-20°C to +60°C'],
    },
    {
      id: 'mcipcd3',
      name: 'MCIPCD3',
      tagline: 'Six-LAN industrial network appliance with flexible Intel Core options',
      image: '/assets/products/industrial/d-series/mcipcd3/images/1.jpg',
      specs: ['Intel Core i3/i5/i7 Options', '6x Intel GbE LAN', 'Dual RS232', '-20°C to +70°C'],
    },
    {
      id: 'mcipc9',
      name: 'MCIPC9',
      tagline: 'Six-COM industrial mini PC with Intel Core Ultra and dual LAN',
      image: '/assets/products/industrial/c-series/mcipc9/images/main-square-srgb.jpg',
      specs: ['Intel Core Ultra 125U-185H', '6 x DB9 COM', 'Dual Intel LAN', 'DC 9-36V'],
    },
    {
      id: 'mctpc-1506e',
      name: 'MCTPC-1506E',
      tagline: '15.6-inch Full HD industrial panel PC with flexible Intel platforms',
      image: '/assets/products/industrial/tpc-series/mctpc-1506e/images/main-transparent.png',
      specs: ['15.6-inch Full HD', '2 x 2.5GbE LAN', '2 x RS232/422/485 COM', 'DC 9-36V'],
    },
  ],
  'firewall-mini-pc': [
    {
      id: 'mcr20',
      name: 'MCR20',
      tagline: 'Fanless Alder Lake-N network appliance with dual 10GbE and dual 2.5GbE',
      image: '/assets/products/firewall/mcr20/images/1.jpg',
      specs: ['Intel Alder Lake-N', '2 x 10GbE + 2 x 2.5GbE', 'DDR5 up to 48GB', '0°C to 70°C'],
    },
    {
      id: 'mcsrp6',
      name: 'MCSRP6',
      tagline: 'Compact Alder Lake-N and Twin Lake network appliance with dual 2.5GbE',
      image: '/assets/products/firewall/mcsrp6/images/1.jpg',
      specs: ['Intel Alder Lake-N / Twin Lake', '2 x Intel 2.5GbE LAN', 'DDR5 up to 48GB', 'DC 12-24V'],
    },
  ],
  'ai-mini-pc': [
    ...aiCatalog.map(({ id, name, tagline, image, highlights }) => ({ id, name, tagline, image, specs: highlights })),
    { id: 'mcai1', name: 'MCAIPC1', tagline: 'AMD Ryzen AI Max+ 395 flagship mini PC with quad display', image: '/assets/products/ai/mcaipc1/gallery/hero.jpg', specs: ['AMD Ryzen AI Max+ 395', 'Up to 128GB LPDDR5x', '10G+2.5G Dual LAN', 'Quad M.2 NVMe'] },
  ],
  'commercial-mini-pc': [
    {
      id: 'mc15uh',
      name: 'MC15UH',
      tagline: 'Intel Core Ultra mini PC with USB4, OCuLink, and dual 2.5GbE',
      image: '/assets/products/commercial/mc15uh/images/1.jpg',
      specs: ['Intel Core Ultra 7 / 9', 'Intel Arc 140T Graphics', 'DDR5 up to 128GB', 'USB4 + OCuLink'],
    },
    {
      id: 'mctar7',
      name: 'MCTAR7',
      tagline: 'Compact AMD Ryzen mini PC with dual HDMI, full-featured Type-C, and dual storage',
      image: '/assets/products/commercial/mctar7/images/1.jpg',
      specs: ['AMD Ryzen 5 / 7 Options', '2 x HDMI + Full-featured Type-C', 'DDR4 up to 32GB', 'Dual M.2 Storage'],
    },
  ],
};

for (const update of brochureUpdates) {
  const items = sampleProducts['commercial-mini-pc'];
  const index = items.findIndex(item => item.id === update.id);
  if (index >= 0) items[index] = { ...update, specs: update.highlights };
}
const industrialSeries = [
  {
    code: 'A',
    title: 'A Series',
    description: 'Single COM or COM-less compact industrial computers',
    image: '/assets/products/industrial/a-series/mcipca2/images/main-square-srgb.jpg',
    models: industrialCatalog.filter((product) => product.series === 'A').map(({ id, name, image }) => ({ id, name, image })),
  },
  {
    code: 'B',
    title: 'B Series',
    description: 'Industrial computers with dual-LAN platforms and configurable serial I/O',
    image: '/assets/products/industrial/merged/mcipcb13/front.webp',
    models: industrialCatalog.filter((product) => product.series === 'B').map(({ id, name, image }) => ({ id, name, image })),

  },
  {
    code: 'C',
    title: 'C Series',
    description: 'Multi-COM industrial computers with dual LAN ports',
    image: '/assets/products/industrial/c-series/mcipc9/images/main-square-srgb.jpg',
    models: industrialCatalog.filter((product) => product.series === 'C').map(({ id, name, image }) => ({ id, name, image })),
  },
  {
    code: 'D',
    title: 'D Series',
    description: 'Multi-LAN industrial computers with dual COM ports',
    image: '/assets/products/industrial/d-series/mcipcd3/images/1.jpg',
    models: industrialCatalog.filter((product) => product.series === 'D').map(({ id, name, image }) => ({ id, name, image })),
  },
  {
    code: 'E',
    title: 'E Series',
    description: 'Custom industrial computers with multi-LAN, serial and GPIO connectivity',
    image: '/assets/products/industrial/ver2/mcipce1/main.webp',
    models: industrialCatalog.filter(product => product.series === 'E').map(({ id, name, image }) => ({ id, name, image })),
  },
  {
    code: 'TPC',
    title: 'TPC Series',
    description: 'Industrial panel PCs with integrated displays',
    image: '/assets/products/industrial/tpc-series/mctpc-1506e/images/main-transparent.png',
    models: industrialCatalog.filter((product) => product.series === 'TPC').map(({ id, name, image }) => ({ id, name, image })),
  },
];
const firewallSeries = [
  {
    code: '2L',
    title: '2-Port Edge Series',
    description: 'Compact dual-LAN appliances for firewall, routing, VPN, and edge gateway deployments',
    image: '/assets/products/firewall/dual-port-series/mcsrp6/images/main-square.png',
    models: firewallCatalog.filter((product) => product.series === '2L').map(({ id, name, image }) => ({ id, name, image })),
  },
  {
    code: '4L',
    title: '4-Port Router Series',
    description: 'Four-port network platforms for multi-WAN routing and segmented networks',
    image: '/assets/products/firewall/ver2/mc30s/front.webp',
    models: firewallCatalog.filter((product) => product.series === '4L').map(({ id, name, image }) => ({ id, name, image })),
  },
  {
    code: '6L',
    title: '6-Port Gateway Series',
    description: 'Six-port appliances for branch gateways, SD-WAN, and denser network segmentation',
    image: '/assets/products/firewall/ver2/mcsr6n3/front.webp',
    models: firewallCatalog.filter((product) => product.series === '6L').map(({ id, name, image }) => ({ id, name, image })),
  },
  {
    code: '10G',
    title: '10GbE & Fiber Series',
    description: 'High-speed edge platforms with 2.5GbE, 10GbE RJ45, or SFP+ connectivity',
    image: '/assets/products/firewall/high-speed-series/mcr20/images/main-square.png',
    models: firewallCatalog.filter((product) => product.series === '10G').map(({ id, name, image }) => ({ id, name, image })),
  },
  {
    code: '1U',
    title: '1U Server Series',
    description: 'Rackmount network and server platforms with multi-LAN, storage, and expansion options',
    image: '/assets/products/firewall/server-series/mc14n-1u6l/images/main-square.png',
    models: firewallCatalog.filter((product) => product.series === '1U').map(({ id, name, image }) => ({ id, name, image })),
  },
];
const commercialSeries = [
  {
    code: 'DPC',
    title: 'Desktop PC Series',
    description: 'Compact desktop and mini PC platforms for business, education, professional work, and display deployments',
    image: '/assets/products/commercial/dpc/mcar9/images/main-square.png',
    models: [
      { id: 'mc15uh', name: 'MC15UH', image: '/assets/products/commercial/ver2/mc15uh/main.webp' },
      { id: 'mctar7', name: 'MCTAR7', image: '/assets/products/commercial/ver2/mctar7/main.webp' },
      ...commercialCatalog.filter((product) => product.series === 'DPC').map(({ id, name, image }) => ({ id, name, image })),
    ],
  },
  {
    code: 'NAS',
    title: 'NAS PC Series',
    description: 'Compact storage and network-service platforms with multi-drive, multi-LAN, and high-speed uplink options',
    image: '/assets/products/commercial/nas/mcnas12/images/main-square.png',
    models: commercialCatalog.filter((product) => product.series === 'NAS').map(({ id, name, image }) => ({ id, name, image })),
  },
  {
    code: 'NAS-MB',
    title: nasMotherboardCopy.en.title,
    description: nasMotherboardCopy.en.description,
    image: '/assets/products/commercial/nas-motherboards/nasd2700/top.webp',
    models: commercialCatalog.filter((product) => product.series === 'NAS-MB').map(({ id, name, image }) => ({ id, name, image })),
  },
];
const richCategoryData = {
  'industrial-mini-pc': {
    ...industrialCategoryCopy.en,
    sceneImage: '/assets/products/category-scenes/industrial-automation.webp',
    desktopSceneImage: '/assets/products/category-scenes/industrial-automation-desktop.webp',
  },
  'ai-mini-pc': {
    ...aiCategoryCopy.en,
    sceneImage: '/assets/products/category-scenes/edge-ai-robotics.webp',
    desktopSceneImage: '/assets/products/category-scenes/edge-ai-robotics-desktop.webp',
  },
  'commercial-mini-pc': {
    overview: 'MagicChip Commercial PCs now cover compact desktop systems for office, education, display, and professional workloads, together with NAS-focused platforms for local storage, backup, media libraries, and network services. The range spans low-power Intel N-series systems, Intel Core and AMD Ryzen performance platforms, and multi-LAN storage appliances.',
    qualifier: 'Start with Desktop PC or NAS PC, then choose the processor, memory, display, network, storage, and expansion configuration required by the deployment.',
    capabilities: [
      { title: 'Desktop systems from efficient to high performance', description: 'Choose compact Intel N-series models, Intel Core platforms, or AMD Ryzen systems according to workload, graphics, memory, and expansion needs.' },
      { title: 'Modern display and peripheral connectivity', description: 'Model-specific HDMI, DisplayPort, Type-C, USB4, Thunderbolt, OCuLink, and multi-LAN options support varied commercial workspaces.' },
      { title: 'NAS and local-service platforms', description: 'NAS-focused models add multi-drive storage, 2.5GbE and 10GbE options, and PCIe expansion for backup, media, storage, and network services.' },
    ],
    sceneImage: '/assets/products/category-scenes/commercial-workspace.webp',
    desktopSceneImage: '/assets/products/category-scenes/commercial-workspace-desktop.webp',
    sceneAlt: 'Bright modern office workspace for meetings and collaboration',
    scenarios: [
      { title: 'Office, meeting rooms & education', description: 'Compact desktop systems support productivity, conferencing, shared workspaces, classrooms, and training environments.', products: ['MCN5', 'MCTAR7'] },
      { title: 'Professional desktop workloads', description: 'Intel Core, Core Ultra, and AMD Ryzen platforms provide additional memory, display, networking, and expansion for demanding applications.', products: ['MC15UH', 'MCAR9'] },
      { title: 'Digital signage & information displays', description: 'Multi-display HDMI, DisplayPort, and Type-C options support commercial visual communication and distributed display installations.', products: ['MCCN51', 'MC12'] },
      { title: 'Local storage, backup & media services', description: 'NAS-focused platforms combine multi-drive storage with 2.5GbE or 10GbE networking for local data, media, and service workloads.', products: ['MCNAS12', 'MCNAS100'] },
    ],
  },
  'firewall-mini-pc': {
    overview: 'MagicChip network appliances range from compact dual-port edge gateways to multi-port 2.5GbE and 10GbE platforms, plus 1U rackmount servers. They provide dedicated interfaces, x86 compute, local storage, and expansion options for firewall, routing, VPN, branch networking, and server deployments.',
    qualifier: 'Start with the required port count and installation format, then select processor, memory, storage, display, and expansion options for the intended network software and services.',
    capabilities: [
      { title: 'Choose the right port architecture', description: 'Dual-port, four-port, six-port, mixed 10GbE, and rackmount platforms cover different network scales and interface requirements.' },
      { title: 'Deploy at the edge or in a rack', description: 'Compact fanless appliances suit branch and edge installations, while 1U models add rackmount storage, power, and expansion options.' },
      { title: 'Configure compute and storage', description: 'The range spans low-power Intel platforms, Core processors, Atom C3000, and dual Xeon servers with model-specific memory and storage options.' },
    ],
    sceneImage: '/assets/products/category-scenes/network-infrastructure.webp',
    desktopSceneImage: '/assets/products/category-scenes/network-infrastructure-desktop.webp',
    sceneAlt: 'Modern enterprise data center aisle with organized server racks and network infrastructure',
    scenarios: [
      { title: 'Compact firewall & VPN edge', description: 'Dual-port appliances support focused WAN/LAN, firewall, VPN, and local gateway deployments where enclosure size and low-power operation matter.', products: ['MCSRP6', 'MCSRP5'] },
      { title: 'Branch routing & SD-WAN', description: 'Four-port and six-port systems provide additional dedicated interfaces for multi-WAN routing, segmented branch networks, and compatible SD-WAN software.', products: ['MCSR6N3', 'MC30S'] },
      { title: '10GbE & fiber network edge', description: 'Mixed 2.5GbE and 10GbE RJ45 or SFP+ models support higher-speed uplinks and fiber-connected network designs.', products: ['MCR20', 'MCSRH15'] },
      { title: 'Rackmount network & server roles', description: '1U platforms add integrated AC power, storage, and expansion for equipment rooms, network services, and compute workloads.', products: ['MC14N-1U6L', 'MCE5-1U6L'] },
    ],
  },
} as const;
export default function CategoryPage() {
  const { language, t } = useLanguage();
  const params = useParams();
  const category = params.category as string;

  const catInfo = categoryData[category];
  const products = category === 'industrial-mini-pc'
    ? industrialCatalog.map(item => ({ id: item.id, name: item.name, tagline: item.translations?.[language]?.tagline || item.tagline, image: item.image, specs: item.translations?.[language]?.highlights || item.highlights }))
    : category === 'firewall-mini-pc'
      ? firewallCatalog.map(item => ({ id: item.id, name: item.name, tagline: item.translations?.[language]?.tagline || item.tagline, image: item.image, specs: item.translations?.[language]?.highlights || item.highlights }))
      : category === 'commercial-mini-pc'
        ? [
          ...sampleProducts['commercial-mini-pc'],
          ...commercialCatalog.map(item => ({ id: item.id, name: item.name, tagline: item.translations?.[language]?.tagline || item.tagline, image: item.image, specs: item.translations?.[language]?.highlights || item.highlights })),
        ]
        : sampleProducts[category] || [];
  const activeSeries = category === 'industrial-mini-pc'
    ? industrialSeries
    : category === 'firewall-mini-pc'
      ? firewallSeries
      : category === 'commercial-mini-pc'
        ? commercialSeries
        : null;
  const baseContent = richCategoryData[category as keyof typeof richCategoryData] || richCategoryData['industrial-mini-pc'];
  const industrialCopy = industrialCategoryCopy[language];
  const richContent = category === 'ai-mini-pc' ? { ...baseContent, ...aiCategoryCopy[language] }
    : category === 'industrial-mini-pc' ? { ...baseContent, ...industrialCopy } : baseContent;
  const ui = categoryUiCopy[language];

  const categoryName = categoryNames[category]?.[language] || categoryNames[category]?.en || category;
  const categoryDesc = categoryDescriptions[category]?.[language] || categoryDescriptions[category]?.en || '';

  const IconComponent = catInfo?.icon || Cpu;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section data-category-hero className="relative bg-[#172033] text-white py-20 overflow-hidden">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <Image
            src={richContent.desktopSceneImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: category === 'industrial-mini-pc' ? '35% 45%' : category === 'commercial-mini-pc' ? '50% 60%' : '50% 50%' }}
          />
          <div className="absolute inset-0 bg-slate-950/70 md:bg-[linear-gradient(90deg,rgba(8,18,35,0.86)_0%,rgba(8,18,35,0.72)_48%,rgba(8,18,35,0.42)_100%)] md:bg-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/products" className="inline-flex items-center text-gray-300 hover:text-white transition-colors text-sm">
              <ChevronLeft className="w-4 h-4 mr-1" />
              {t.products.backToProducts}
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-3">{categoryName}</h1>
            <p className="text-xl text-gray-300 max-w-2xl">{categoryDesc}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="#models" className={actionButtonStyles.primary}>
                {ui.browse} <ArrowRight aria-hidden="true" className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>


      <nav aria-label={ui.sections} className="sticky top-16 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl gap-7 overflow-x-auto px-4 py-4 text-sm font-semibold text-slate-600 sm:px-6 lg:px-8">
          <Link href="#overview" className="whitespace-nowrap transition-colors hover:text-brand-hover">{ui.overview}</Link>
          <Link href="#models" className="whitespace-nowrap transition-colors hover:text-brand-hover">{ui.models}</Link>
        </div>
      </nav>

      <section id="overview" className="scroll-mt-32 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{ui.overviewTitles[category as keyof typeof ui.overviewTitles] || categoryName}</h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-slate-600">{richContent.overview}</p>
              <p className="mt-4 text-sm text-slate-500">{category === 'commercial-mini-pc' ? nasMotherboardCopy[language].selection : richContent.qualifier}</p>
            </div>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {richContent.capabilities.map((capability) => (
              <article key={capability.title} className="rounded-2xl border border-slate-200 bg-[#f7faf9] p-6 transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:shadow-lg">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-brand"><CheckCircle2 className="h-5 w-5" /></div>
                <h3 className="mt-5 text-lg font-bold text-slate-950">{capability.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{capability.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Product List */}
      <section id="models" className="scroll-mt-32 bg-gray-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{ui.choose}</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {category === 'industrial-mini-pc'
                ? industrialCopy.selectionIntro
                : category === 'firewall-mini-pc'
                  ? 'Select a series by port count, network speed, and installation format, then open the available model page.'
                  : category === 'commercial-mini-pc'
                    ? nasMotherboardCopy[language].selection
                    : ui.compare}
            </p>
          </div>

          <CategorySelection key={category} category={category} language={language} />

          {activeSeries ? (
            <div className="space-y-6 md:space-y-8">
              {activeSeries.map((series) => (
                <section
                  id={`series-${series.code.toLowerCase()}`}
                  key={series.code}
                  className="relative hover:z-20 focus-within:z-20 scroll-mt-28 rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-900/10"
                >
                  <div className="relative p-6 sm:p-8 lg:p-10">
                    <div aria-hidden="true" className="pointer-events-none absolute right-8 top-[118px] hidden -translate-y-1/2 select-none text-[9rem] font-black leading-none tracking-[-0.08em] text-slate-950/[0.045] md:block lg:right-12 lg:text-[11rem]">
                      {series.code === 'NAS-MB' ? 'MB' : series.code}
                    </div>

                    <div className="relative grid gap-7 md:grid-cols-[190px_minmax(0,1fr)] md:items-center lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
                      <div className="relative aspect-square w-full max-w-[190px] justify-self-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm md:max-w-[220px]">
                        <img src={series.image} alt={`${category === 'industrial-mini-pc' ? industrialCopy.series[series.code as keyof typeof industrialCopy.series].title : series.title} · ${industrialCopy.representativeProduct}`} className="h-full w-full object-contain p-3 transition-transform duration-500 hover:scale-105" />
                      </div>

                      <div className="min-w-0 text-center md:pr-36 md:text-left lg:pr-52">
                        <h3 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">{category === 'industrial-mini-pc' ? industrialCopy.series[series.code as keyof typeof industrialCopy.series].title : series.code === 'NAS-MB' ? nasMotherboardCopy[language].title : series.title}</h3>
                        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">{category === 'industrial-mini-pc' ? industrialCopy.series[series.code as keyof typeof industrialCopy.series].description : series.code === 'NAS-MB' ? nasMotherboardCopy[language].description : series.description}</p>
                        <p className="mt-5 text-sm font-bold uppercase tracking-normal text-slate-400">
                          {series.models.length} {series.models.length === 1 ? industrialCopy.currentModel : industrialCopy.currentModels}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 border-t border-slate-200 pt-6">
                      <p className="mb-4 text-xs font-bold uppercase tracking-normal text-slate-400">{industrialCopy.availableModels}</p>
                      {series.code === 'TPC'
                        ? <TpcSeriesLinks models={series.models} category={category} language={language} />
                        : <ModelFamilyLinks models={series.models} category={category} />}
                    </div>
                  </div>
                </section>
              ))}
            </div>
          ) : category === 'ai-mini-pc' ? (
            <AiFamilyCards language={language} products={products.map(product => ({ ...product, tagline: aiCategoryCopy[language].products[product.id as keyof typeof aiCategoryCopy.en.products] || product.tagline }))} />
          ) : (
            <div className="space-y-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-xl hover:shadow-slate-900/10"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="flex items-center justify-center bg-[#f4f7f7] p-0 md:w-2/5">
                      <div className="relative w-full overflow-hidden rounded-lg">
                        {product.image ? (
                          <img src={product.image} alt={product.name} className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-105" />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                            <IconComponent className="h-24 w-24 opacity-30" />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-col justify-center p-8 md:w-3/5 md:p-10">
                      <h2 className="mb-2 text-3xl font-bold text-gray-900">{product.name}</h2>
                      <p className="mb-6 text-lg text-gray-600">{product.tagline}</p>
                      <div className="mb-8 flex flex-wrap gap-3">
                        {product.specs.map((spec, idx) => (
                          <span key={idx} className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-brand">
                            {spec}
                          </span>
                        ))}
                      </div>
                      <Link href={`/products/${category}/${product.id}`} className="group inline-flex self-start rounded-xl bg-blue-700 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-700/20 transition-all hover:bg-blue-800 hover:shadow-xl">
                        {t.products.viewDetails}
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-slate-950 md:text-4xl">{t.products.ctaTitle}</h2>
          <p className="mb-8 text-lg text-slate-600">{t.products.ctaDescription}</p>
          <div className="flex justify-center">
            <Link href="/contact" className="liquid-cta liquid-cta-solid inline-flex items-center justify-center px-8 py-4 font-semibold">
              <span>{t.products.ctaButton}</span>
              <ArrowRight aria-hidden="true" className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
