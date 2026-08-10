'use client';

import Image from 'next/image';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, Cpu, Shield, Monitor, Brain, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { industrialCatalog } from '@/lib/industrial-catalog';

const categoryData: Record<string, { icon: any; gradient: string; image: string }> = {
  'industrial-mini-pc': { icon: Cpu, gradient: 'from-blue-600 to-indigo-700', image: '/assets/home/categories/industrial-mini-pc.png' },
  'ai-mini-pc': { icon: Brain, gradient: 'from-violet-600 to-blue-700', image: '/assets/home/categories/ai-mini-pc.png' },
  'commercial-mini-pc': { icon: Monitor, gradient: 'from-blue-500 to-indigo-600', image: '/assets/home/categories/commercial-mini-pc.png' },
  'firewall-mini-pc': { icon: Shield, gradient: 'from-rose-600 to-red-800', image: '/assets/home/categories/firewall-mini-pc-server-pc.png' },
};

const categoryNames: Record<string, Record<string, string>> = {
  'industrial-mini-pc': {
    en: 'Industrial Mini PC',
    fr: 'Mini PC Industriel',
    de: 'Industrie-Mini-PC',
    it: 'Mini PC Industriale',
    es: 'Mini PC Industrial',
  },
  'ai-mini-pc': {
    en: 'AI Mini PC',
    fr: 'Mini PC IA',
    de: 'AI Mini-PC',
    it: 'Mini PC AI',
    es: 'Mini PC con IA',
  },
  'commercial-mini-pc': {
    en: 'Commercial Mini PC',
    fr: 'Mini PC Commercial',
    de: 'Kommerzieller Mini-PC',
    it: 'Mini PC Commerciale',
    es: 'Mini PC Comercial',
  },
  'firewall-mini-pc': {
    en: 'Firewall Mini PC / Server PC',
    fr: 'Mini PC Firewall / Serveur PC',
    de: 'Firewall Mini-PC / Server-PC',
    it: 'Mini PC Firewall / Server PC',
    es: 'Mini PC Firewall / Servidor PC',
  },
};
const categoryDescriptions: Record<string, Record<string, string>> = {
  'industrial-mini-pc': {
    en: 'Fanless, compact industrial computers designed for harsh environments and 24/7 operation.',
    fr: 'Ordinateurs industriels compacts sans ventilateur conçus pour les environnements exigeants et un fonctionnement 24/7.',
    de: 'Lüfterlose, kompakte Industriecomputer für anspruchsvolle Umgebungen und den 24/7-Betrieb.',
    it: 'Computer industriali compatti senza ventola per ambienti difficili e funzionamento 24/7.',
    es: 'Computadoras industriales compactas sin ventilador para entornos exigentes y funcionamiento 24/7.',
  },
  'ai-mini-pc': {
    en: 'High-performance mini PCs designed for AI workloads, edge computing, and professional applications.',
    fr: 'Mini PC hautes performances conçus pour les charges de travail IA, le edge computing et les applications professionnelles.',
    de: 'Leistungsstarke Mini-PCs für KI-Workloads, Edge Computing und professionelle Anwendungen.',
    it: 'Mini PC ad alte prestazioni per carichi di lavoro AI, edge computing e applicazioni professionali.',
    es: 'Mini PC de alto rendimiento para cargas de trabajo de IA, edge computing y aplicaciones profesionales.',
  },
  'commercial-mini-pc': {
    en: 'Compact computers for business, education, digital signage, and everyday commercial use.',
    fr: 'Ordinateurs compacts pour les entreprises, l’éducation, l’affichage dynamique et les usages commerciaux.',
    de: 'Kompakte Computer für Unternehmen, Bildung, Digital Signage und den kommerziellen Alltag.',
    it: 'Computer compatti per aziende, istruzione, digital signage e uso commerciale quotidiano.',
    es: 'Computadoras compactas para empresas, educación, señalización digital y uso comercial cotidiano.',
  },
  'firewall-mini-pc': {
    en: 'Compact and rackmount network appliances for firewall, routing, and enterprise network deployments.',
    fr: 'Appliances réseau compactes et rackables pour pare-feu, routage et déploiements réseau professionnels.',
    de: 'Kompakte und rackmontierte Netzwerkgeräte für Firewall-, Routing- und Unternehmensnetzwerke.',
    it: 'Appliance di rete compatte e rackmount per firewall, routing e reti aziendali.',
    es: 'Dispositivos de red compactos y para rack destinados a firewall, routing y redes empresariales.',
  },
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
      tagline: 'Compact industrial box PC with flexible Intel Core platform support',
      image: '/assets/products/industrial/b-series/mcipcb13/images/1.jpg',
      specs: ['4th-13th Gen Intel Core', 'Dual GbE LAN', '8x USB Ports', '-20°C to +60°C'],
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
    {
      id: 'mcai2',
      name: 'MCAIPC2',
      tagline: 'High-performance AI mini PC powered by Strix Halo platform',
      image: '/assets/products/ai/mcaipc2/hero.png',
      specs: ['AMD Strix Halo', 'Up to 128GB LPDDR5x', 'Quad-Display Support', '50 TOPs NPU'],
    },
    {
      id: 'mcai1',
      name: 'MCAIPC1',
      tagline: 'AMD Ryzen AI Max+ 395 — 140W flagship mini PC with quad display',
      image: '/assets/products/ai/mcaipc1/gallery/hero.jpg',
      specs: ['AMD Ryzen AI Max+ 395', 'Up to 128GB LPDDR5x', '10G+2.5G Dual LAN', 'Quad M.2 NVMe'],
    },
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

const industrialSeries = [
  {
    code: 'A',
    title: 'A Series',
    description: 'Single COM or COM-less compact industrial computers',
    image: '/assets/products/industrial/a-series/mcipca2/images/main-square-srgb.jpg',
    models: industrialCatalog.filter((product) => product.series === 'A').map(({ id, name }) => ({ id, name })),
  },
  {
    code: 'B',
    title: 'B Series',
    description: 'Dual-LAN industrial computers with dual COM ports',
    image: '/assets/products/industrial/b-series/mcipcb13/images/1.jpg',
    models: industrialCatalog.filter((product) => product.series === 'B').map(({ id, name }) => ({ id, name })),

  },
  {
    code: 'C',
    title: 'C Series',
    description: 'Multi-COM industrial computers with dual LAN ports',
    image: '/assets/products/industrial/c-series/mcipc9/images/main-square-srgb.jpg',
    models: industrialCatalog.filter((product) => product.series === 'C').map(({ id, name }) => ({ id, name })),
  },
  {
    code: 'D',
    title: 'D Series',
    description: 'Multi-LAN industrial computers with dual COM ports',
    image: '/assets/products/industrial/d-series/mcipcd3/images/1.jpg',
    models: industrialCatalog.filter((product) => product.series === 'D').map(({ id, name }) => ({ id, name })),
  },
  {
    code: 'TPC',
    title: 'TPC Series',
    description: 'Industrial panel PCs with integrated displays',
    image: '/assets/products/industrial/tpc-series/mctpc-1506e/images/main-transparent.png',
    models: industrialCatalog.filter((product) => product.series === 'TPC').map(({ id, name }) => ({ id, name })),
  },
];
const richCategoryData = {
  'industrial-mini-pc': {
    overview: 'MagicChip Industrial Mini PCs bring processing, networking, display output, and equipment-facing I/O into compact fanless systems. They can run control software beside a machine, collect data from serial devices, drive production dashboards, or connect local equipment to an industrial edge network.',
    qualifier: 'Choose from compact A Series systems, dual-LAN B Series, multi-COM C Series, multi-LAN D Series, or integrated-display TPC models according to the interfaces, compute platform, and installation method your project requires.',
    capabilities: [
      { title: 'Run beside the equipment', description: 'Compact fanless enclosures support machine-side computing where space is limited and continuous operation matters.' },
      { title: 'Connect industrial devices', description: 'Serial ports, wired LAN, USB, and display outputs connect controllers, sensors, cameras, peripherals, and operator displays.' },
      { title: 'Match the system to the task', description: 'Select the series by serial-port count, network architecture, display needs, compute platform, and panel-mount requirements.' },
    ],
    sceneImage: '/assets/products/category-scenes/industrial-automation.webp',
    sceneAlt: 'Automated robotic production line with conveyors, sensors, and safety systems',
    photoCredit: 'Testalize.me / Unsplash',
    photoUrl: 'https://unsplash.com/photos/industrial-robotic-arm-in-blue-lit-factory-9xHsWmh3m_4',
    scenarios: [
      { title: 'Compact machine-side control', description: 'A and B Series systems place control software, display output, USB peripherals, and essential serial connectivity close to the equipment.', products: ['MCIPCA1', 'MCIPCB12'] },
      { title: 'Serial equipment & data acquisition', description: 'Multi-COM C Series models connect several controllers, instruments, readers, or legacy serial devices through one industrial computer.', products: ['MCIPC1', 'MCIPC9'] },
      { title: 'Industrial edge & network gateways', description: 'Multi-LAN D Series and expandable box PCs support local data processing, segmented equipment networks, vision systems, and edge gateway roles.', products: ['MCIPCD3', 'MCIPCB13'] },
      { title: 'Panel HMI & operator stations', description: 'TPC models combine the display and computer in one panel-mount system for production status, equipment operation, and on-site interaction.', products: ['MCTPC-1506E', 'MCTPC-2105E'] },
    ],
  },
  'ai-mini-pc': {
    overview: 'AI Mini PCs bring high-performance AMD compute, large unified-memory options, fast local storage, and multi-display output into a compact workstation format for local AI and demanding professional workloads.',
    qualifier: 'AI performance depends on the selected processor, memory configuration, software stack, and workload.',
    capabilities: [
      { title: 'Local AI acceleration', description: 'The current range includes Ryzen AI and Strix Halo platforms with integrated NPU capability.' },
      { title: 'Large memory configurations', description: 'Up to 128GB LPDDR5x supports memory-intensive local models and professional applications.' },
      { title: 'Fast data & display paths', description: 'Multi-display output, high-speed networking, and multiple NVMe options support substantial local workflows.' },
    ],
    sceneImage: '/assets/products/category-scenes/edge-ai-robotics.webp',
    sceneAlt: 'Robotic arm in a modern AI and engineering laboratory',
    photoCredit: 'Brecht Corbeel / Unsplash',
    photoUrl: 'https://unsplash.com/photos/a-robotic-arm-in-a-clean-minimalist-laboratory-setting-gEtezQMsu64',
    scenarios: [
      { title: 'Local AI development & inference', description: 'Run supported models locally where data proximity, responsiveness, or offline operation matters.', products: ['MCAIPC2', 'MCAIPC1'] },
      { title: 'Computer-vision development', description: 'Use high-performance compute and external camera connectivity to prototype visual-analysis workflows.', products: ['MCAIPC2', 'MCAIPC1'] },
      { title: 'Professional multi-display work', description: 'Quad-display support suits engineering, visualization, media, and information-dense workspaces.', products: ['MCAIPC2', 'MCAIPC1'] },
    ],
  },
  'commercial-mini-pc': {
    overview: 'Commercial Mini PCs deliver desktop-class connectivity in a small footprint for offices, classrooms, meeting spaces, and display installations. The current range covers both high-performance expansion and practical everyday deployment.',
    qualifier: 'Select processor, memory, expansion, and display configuration according to the intended software and peripherals.',
    capabilities: [
      { title: 'Small-footprint deployment', description: 'Compact enclosures simplify desk, display, meeting-room, and other space-constrained installations.' },
      { title: 'Modern peripheral support', description: 'USB4, OCuLink, Type-C, HDMI, and wired networking options cover varied commercial peripherals.' },
      { title: 'Flexible performance levels', description: 'Choose Intel Core Ultra or AMD Ryzen platforms according to workload, graphics, and budget.' },
    ],
    sceneImage: '/assets/products/category-scenes/commercial-workspace.webp',
    sceneAlt: 'Modern commercial meeting room with a large presentation display',
    photoCredit: 'Exospace Bbsr / Unsplash',
    photoUrl: 'https://unsplash.com/photos/a-modern-empty-meeting-room-with-furniture-ML5m44ZgIsU',
    scenarios: [
      { title: 'Office & meeting rooms', description: 'Compact systems support productivity, conferencing, presentation displays, and shared workspaces.', products: ['MC15UH', 'MCTAR7'] },
      { title: 'Education & laboratories', description: 'Multiple display and peripheral connections suit classrooms, training rooms, and practical labs.', products: ['MC15UH', 'MCTAR7'] },
      { title: 'Digital signage', description: 'HDMI and Type-C display connectivity supports information displays and commercial visual communication.', products: ['MCTAR7', 'MC15UH'] },
    ],
  },
  'firewall-mini-pc': {
    overview: 'Firewall Mini PCs are compact x86 network appliances designed around multiple dedicated Ethernet interfaces. Current MagicChip models cover dual-2.5GbE edge deployments and higher-throughput configurations with dual 10GbE plus dual 2.5GbE.',
    qualifier: 'Firewall, VPN, and routing throughput depends on software, packet size, enabled services, and hardware configuration.',
    capabilities: [
      { title: 'Multi-gigabit networking', description: 'Choose dual 2.5GbE or combined dual 10GbE and dual 2.5GbE connectivity by deployment scale.' },
      { title: 'Purpose-built network roles', description: 'Dedicated interfaces suit firewall, routing, VPN, SD-WAN, segmentation, and gateway configurations.' },
      { title: 'Compact edge installation', description: 'Fanless enclosures, DDR5 memory, and storage expansion support local network services at the edge.' },
    ],
    sceneImage: '/assets/products/category-scenes/network-infrastructure.webp',
    sceneAlt: 'Organized server racks in a modern network infrastructure room',
    photoCredit: 'Taylor Vick / Unsplash',
    photoUrl: 'https://unsplash.com/@tvick',
    scenarios: [
      { title: 'Firewall & network segmentation', description: 'Use dedicated ports to separate WAN, LAN, management, and internal network zones.', products: ['MCR20', 'MCSRP6'] },
      { title: 'VPN & SD-WAN edge', description: 'Compact x86 platforms can host compatible routing, VPN, and branch-network software stacks.', products: ['MCR20', 'MCSRP6'] },
      { title: 'IoT & edge gateway', description: 'Connect local devices and upstream networks while keeping selected services close to the deployment.', products: ['MCSRP6', 'MCR20'] },
    ],
  },
} as const;
export default function CategoryPage() {
  const { language, t } = useLanguage();
  const params = useParams();
  const category = params.category as string;

  const catInfo = categoryData[category];
  const products = category === 'industrial-mini-pc'
    ? industrialCatalog.map(({ id, name, tagline, image, highlights }) => ({ id, name, tagline, image, specs: highlights }))
    : sampleProducts[category] || [];
  const richContent = richCategoryData[category as keyof typeof richCategoryData] || richCategoryData['industrial-mini-pc'];

  const categoryName = categoryNames[category]?.[language] || categoryNames[category]?.en || category;
  const categoryDesc = categoryDescriptions[category]?.[language] || categoryDescriptions[category]?.en || '';

  const IconComponent = catInfo?.icon || Cpu;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#172033] via-blue-950 to-[#172033] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/products" className="inline-flex items-center text-gray-400 hover:text-white transition-colors text-sm">
              <ChevronLeft className="w-4 h-4 mr-1" />
              {t.products.backToProducts}
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-6"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-950/30 flex-shrink-0">
              <IconComponent className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3">{categoryName}</h1>
              <p className="text-xl text-gray-300 max-w-2xl">{categoryDesc}</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a href="#models" className="inline-flex items-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500">
                  Browse Models <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a href="#applications" className="inline-flex items-center rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10">
                  View Applications
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>


      <nav aria-label="Category sections" className="sticky top-16 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl gap-7 overflow-x-auto px-4 py-4 text-sm font-semibold text-slate-600 sm:px-6 lg:px-8">
          <a href="#overview" className="whitespace-nowrap transition-colors hover:text-blue-700">Category Overview</a>
          <a href="#applications" className="whitespace-nowrap transition-colors hover:text-blue-700">Application Scenarios</a>
          <a href="#models" className="whitespace-nowrap transition-colors hover:text-blue-700">Current Models</a>
        </div>
      </nav>

      <section id="overview" className="scroll-mt-32 bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Category Overview</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{category === 'industrial-mini-pc' ? 'Compact computers for machines, data, and the industrial edge' : `What defines ${categoryName}?`}</h2>
            </div>
            <div>
              <p className="text-lg leading-8 text-slate-600">{richContent.overview}</p>
              <p className="mt-4 text-sm text-slate-500">{richContent.qualifier}</p>
            </div>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {richContent.capabilities.map((capability) => (
              <article key={capability.title} className="rounded-2xl border border-slate-200 bg-[#f7faf9] p-6 transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:shadow-lg">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><CheckCircle2 className="h-5 w-5" /></div>
                <h3 className="mt-5 text-lg font-bold text-slate-950">{capability.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{capability.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="applications" className="scroll-mt-32 bg-[#eaf0ee] py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Application Scenarios</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              {category === 'industrial-mini-pc' ? 'From machine control to operator stations' : 'Where this category fits'}
            </h2>
            {category === 'industrial-mini-pc' && (
              <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
                The expanded range covers four box-PC interface architectures plus integrated-display panel PCs, so customers can start with the deployment task and then narrow the choice by I/O and compute platform.
              </p>
            )}
          </div>
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10">
            <figure className="relative aspect-[3/2] overflow-hidden bg-slate-900 lg:aspect-video">
              <Image src={richContent.sceneImage} alt={richContent.sceneAlt} fill sizes="(max-width: 1279px) 100vw, 1280px" className="object-cover transition-transform duration-700 hover:scale-[1.02]" />
              {category !== 'industrial-mini-pc' && (
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950/75 to-transparent px-6 pb-5 pt-16 text-xs text-white/80">
                  Photo: <a href={richContent.photoUrl} target="_blank" rel="noopener noreferrer" className="underline decoration-white/35 underline-offset-2 hover:text-white">{richContent.photoCredit}</a>
                </figcaption>
              )}
            </figure>
            <div className="grid gap-px bg-slate-200 md:grid-cols-2">
              {richContent.scenarios.map((scenario, index) => (
                <article key={scenario.title} className="bg-white p-6 md:p-8">
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 text-sm font-bold text-white">0{index + 1}</div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-950">{scenario.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{scenario.description}</p>
                      <p className="mt-4 text-xs font-semibold uppercase tracking-[0.12em] text-slate-400">Recommended SKUs</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {scenario.products.map((productName) => {
                          const product = products.find((item) => item.name === productName);
                          return product ? (
                            <Link key={product.id} href={`/products/${category}/${product.id}`} className="rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-sm font-semibold text-blue-700 transition-colors hover:border-blue-400 hover:bg-blue-100">
                              {product.name}
                            </Link>
                          ) : null;
                        })}
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Product List */}
      <section id="models" className="scroll-mt-32 bg-gray-50 py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-700">Current Models</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">Choose the right configuration</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {category === 'industrial-mini-pc'
                ? 'Select an IPC series by serial, network, and display architecture, then open the available model page.'
                : 'Compare the current models by processor platform, connectivity, expansion, and deployment requirements.'}
            </p>
          </div>

          {category === 'industrial-mini-pc' ? (
            <div className="space-y-6 md:space-y-8">
              {industrialSeries.map((series) => (
                <section
                  id={`series-${series.code.toLowerCase()}`}
                  key={series.code}
                  className="scroll-mt-28 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-slate-900/10"
                >
                  <div className="relative p-6 sm:p-8 lg:p-10">
                    <div aria-hidden="true" className="pointer-events-none absolute right-8 top-[118px] hidden -translate-y-1/2 select-none text-[9rem] font-black leading-none tracking-[-0.08em] text-slate-950/[0.045] md:block lg:right-12 lg:text-[11rem]">
                      {series.code}
                    </div>

                    <div className="relative grid gap-7 md:grid-cols-[190px_minmax(0,1fr)] md:items-center lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-10">
                      <div className="relative aspect-square w-full max-w-[190px] justify-self-center overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 shadow-sm md:max-w-[220px]">
                        <img src={series.image} alt={`${series.title} representative product`} className="h-full w-full object-contain p-3 transition-transform duration-500 hover:scale-105" />
                      </div>

                      <div className="min-w-0 text-center md:pr-36 md:text-left lg:pr-52">
                        <h3 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">{series.title}</h3>
                        <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">{series.description}</p>
                        <p className="mt-5 text-sm font-semibold uppercase tracking-[0.16em] text-slate-400">
                          {series.models.length} {series.models.length === 1 ? 'current model' : 'current models'}
                        </p>
                      </div>
                    </div>

                    <div className="mt-8 border-t border-slate-200 pt-6">
                      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-slate-400">Available models</p>
                      <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        {series.models.map((model) => (
                          <Link key={model.id} href={`/products/industrial-mini-pc/${model.id}`} className="group inline-flex min-h-12 items-center justify-between rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 font-semibold text-blue-800 transition-all hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-100 hover:shadow-md">
                            {model.name}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>
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
                          <span key={idx} className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-800">
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-950 via-blue-800 to-blue-950 rounded-xl p-10 md:p-16 text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-10 -mb-10"></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.products.ctaTitle}</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                {t.products.ctaDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-800 rounded-xl font-semibold hover:bg-amber-50 transition-colors shadow-lg"
                >
                  {t.products.ctaButton}
                </Link>
                <a
                  href="https://magicchip.en.alibaba.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-amber-300/15 text-white border border-amber-200/40 rounded-xl font-semibold hover:bg-amber-300/25 transition-colors"
                >
                  {t.products.viewOnAlibaba}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
