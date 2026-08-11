'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Globe, 
  Menu, 
  X, 
  Check, 
  ChevronRight,
  ChevronDown,
  Cpu,
  Brain,
  Network,
  Shield,
  Monitor,
  Server,
  Newspaper,
  Download,
  FileCode,
  Phone,
  MessageCircle,
  Mail,
  BookOpen,
  Factory
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import SiteSearch from '@/components/SiteSearch';
import { LANGUAGE_NAMES, SUPPORTED_LANGUAGES } from '@/lib/i18n/config';

interface DropdownItem {
  title: string;
  description?: string;
  href: string;
  icon?: React.ElementType;
  external?: boolean;
}

interface NavItem {
  label: string;
  href: string;
  dropdown?: DropdownItem[];
}

type MegaMenuProduct = {
  id: string;
  name: string;
  tagline: string;
  image: string;
};

type ProductMegaSeries = {
  id: string;
  code: string;
  title: string;
  description: string;
  image: string;
  href: string;
};

type ScenarioMegaProduct = MegaMenuProduct & {
  category: string;
};

type ScenarioMegaItem = DropdownItem & {
  id: string;
  products: ScenarioMegaProduct[];
};

const megaMenuProducts: Record<string, MegaMenuProduct[]> = {
  'industrial-mini-pc': [
    { id: 'mcipcb13', name: 'MCIPCB13', tagline: 'Flexible Intel Core industrial box PC', image: '/assets/products/industrial/b-series/mcipcb13/images/1.jpg' },
    { id: 'mcipcb12', name: 'MCIPCB12', tagline: 'Fanless triple-display industrial mini PC', image: '/assets/products/industrial/b-series/mcipcb12/images/1.jpg' },
    { id: 'mcipcd3', name: 'MCIPCD3', tagline: 'Six-LAN industrial network appliance', image: '/assets/products/industrial/d-series/mcipcd3/images/1.jpg' },
  ],
  'ai-mini-pc': [
    { id: 'mcai2', name: 'MCAIPC2', tagline: 'Strix Halo high-performance AI mini PC', image: '/assets/products/ai/mcaipc2/hero.png' },
    { id: 'mcai1', name: 'MCAIPC1', tagline: 'Ryzen AI Max+ flagship computing platform', image: '/assets/products/ai/mcaipc1/gallery/hero.jpg' },
  ],
  'commercial-mini-pc': [
    { id: 'mc15uh', name: 'MC15UH', tagline: 'Core Ultra mini PC with USB4 and OCuLink', image: '/assets/products/commercial/mc15uh/images/1.jpg' },
    { id: 'mctar7', name: 'MCTAR7', tagline: 'Compact AMD Ryzen commercial mini PC', image: '/assets/products/commercial/mctar7/images/1.jpg' },
  ],
  'firewall-mini-pc': [
    { id: 'mcr20', name: 'MCR20', tagline: 'Dual 10GbE and dual 2.5GbE network appliance', image: '/assets/products/firewall/mcr20/images/1.jpg' },
    { id: 'mcsrp6', name: 'MCSRP6', tagline: 'Compact dual 2.5GbE edge network appliance', image: '/assets/products/firewall/mcsrp6/images/1.jpg' },
  ],
};

const industrialMegaSeries: ProductMegaSeries[] = [
  {
    id: 'series-a',
    code: 'A',
    title: 'A Series',
    description: 'Single COM or COM-less compact industrial computers',
    image: '/assets/products/industrial/a-series/mcipca2/images/main-square-srgb.jpg',
    href: '/products/industrial-mini-pc#series-a',
  },
  {
    id: 'series-b',
    code: 'B',
    title: 'B Series',
    description: 'Dual-LAN industrial computers with dual COM ports',
    image: '/assets/products/industrial/b-series/mcipcb13/images/1.jpg',
    href: '/products/industrial-mini-pc#series-b',
  },
  {
    id: 'series-c',
    code: 'C',
    title: 'C Series',
    description: 'Multi-COM industrial computers with dual LAN ports',
    image: '/assets/products/industrial/c-series/mcipc9/images/main-square-srgb.jpg',
    href: '/products/industrial-mini-pc#series-c',
  },
  {
    id: 'series-d',
    code: 'D',
    title: 'D Series',
    description: 'Multi-LAN industrial computers with dual COM ports',
    image: '/assets/products/industrial/d-series/mcipcd3/images/1.jpg',
    href: '/products/industrial-mini-pc#series-d',
  },
  {
    id: 'series-tpc',
    code: 'TPC',
    title: 'TPC Series',
    description: 'Industrial panel PCs with integrated displays',
    image: '/assets/products/industrial/tpc-series/mctpc-1506e/images/main-transparent.png',
    href: '/products/industrial-mini-pc#series-tpc',
  },
];

const firewallMegaSeries: ProductMegaSeries[] = [
  {
    id: 'series-2l',
    code: '2L',
    title: '2-Port Edge Series',
    description: 'Compact dual-LAN firewall, VPN, and edge gateway appliances',
    image: '/assets/products/firewall/dual-port-series/mcsrp6/images/main-square.png',
    href: '/products/firewall-mini-pc#series-2l',
  },
  {
    id: 'series-4l',
    code: '4L',
    title: '4-Port Router Series',
    description: 'Four-port platforms for multi-WAN and segmented networks',
    image: '/assets/products/firewall/quad-port-series/mc30s-n100/images/main-square.png',
    href: '/products/firewall-mini-pc#series-4l',
  },
  {
    id: 'series-6l',
    code: '6L',
    title: '6-Port Gateway Series',
    description: 'Six-port appliances for branch gateways and SD-WAN',
    image: '/assets/products/firewall/six-port-series/mcsr613u/images/main-square.png',
    href: '/products/firewall-mini-pc#series-6l',
  },
  {
    id: 'series-10g',
    code: '10G',
    title: '10GbE & Fiber Series',
    description: 'High-speed RJ45 and SFP+ network edge platforms',
    image: '/assets/products/firewall/high-speed-series/mcr20/images/main-square.png',
    href: '/products/firewall-mini-pc#series-10g',
  },
  {
    id: 'series-1u',
    code: '1U',
    title: '1U Server Series',
    description: 'Rackmount network and server systems with expansion',
    image: '/assets/products/firewall/server-series/mc14n-1u6l/images/main-square.png',
    href: '/products/firewall-mini-pc#series-1u',
  },
];
const productCategoryImages: Record<string, string> = {
  'industrial-mini-pc': '/assets/home/categories/industrial-mini-pc.png',
  'ai-mini-pc': '/assets/home/categories/ai-mini-pc.png',
  'commercial-mini-pc': '/assets/home/categories/commercial-mini-pc.png',
  'firewall-mini-pc': '/assets/home/categories/firewall-mini-pc-server-pc.png',
};

const scenarioProduct = (category: string, id: string): ScenarioMegaProduct => ({
  ...megaMenuProducts[category].find(product => product.id === id)!,
  category,
});

const scenarioMegaItems: ScenarioMegaItem[] = [
  {
    id: 'industrialAutomation',
    title: 'Industrial Automation',
    description: 'Fanless systems with serial connectivity and rich I/O for machine control.',
    href: '/scenarios#industrialAutomation',
    icon: Factory,
    products: [scenarioProduct('industrial-mini-pc', 'mcipcb13'), scenarioProduct('industrial-mini-pc', 'mcipcb12')],
  },
  {
    id: 'edgeAi',
    title: 'Edge AI & Local Compute',
    description: 'High-performance platforms for local AI and professional computing.',
    href: '/scenarios#edgeAi',
    icon: Brain,
    products: [scenarioProduct('ai-mini-pc', 'mcai2'), scenarioProduct('ai-mini-pc', 'mcai1')],
  },
  {
    id: 'networkSecurity',
    title: 'Network Security & SD-WAN',
    description: 'Multi-port systems for routing, VPN, firewall, and network edge.',
    href: '/scenarios#networkSecurity',
    icon: Shield,
    products: [scenarioProduct('firewall-mini-pc', 'mcr20'), scenarioProduct('firewall-mini-pc', 'mcsrp6'), scenarioProduct('industrial-mini-pc', 'mcipcd3')],
  },
  {
    id: 'digitalSignage',
    title: 'Digital Signage & Multi-Display',
    description: 'Compact systems with multiple display outputs for visual communication.',
    href: '/scenarios#digitalSignage',
    icon: Monitor,
    products: [scenarioProduct('industrial-mini-pc', 'mcipcb12'), scenarioProduct('commercial-mini-pc', 'mc15uh')],
  },
  {
    id: 'businessEducation',
    title: 'Business & Education',
    description: 'Compact commercial systems for offices, classrooms, and meeting spaces.',
    href: '/scenarios#businessEducation',
    icon: BookOpen,
    products: [scenarioProduct('commercial-mini-pc', 'mc15uh'), scenarioProduct('commercial-mini-pc', 'mctar7')],
  },
  {
    id: 'iotGateway',
    title: 'IoT & Edge Gateways',
    description: 'Flexible network systems for connecting devices and edge services.',
    href: '/scenarios#iotGateway',
    icon: Network,
    products: [scenarioProduct('industrial-mini-pc', 'mcipcd3'), scenarioProduct('firewall-mini-pc', 'mcsrp6'), scenarioProduct('firewall-mini-pc', 'mcr20')],
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeProductCategory, setActiveProductCategory] = useState('industrial-mini-pc');
  const [activeScenario, setActiveScenario] = useState('industrialAutomation');
  const languageMenuRef = useRef<HTMLDivElement>(null);
  const { t, language, setLanguage } = useLanguage();

  useEffect(() => {
    if (!isLangMenuOpen) return;

    const closeOnOutsideInteraction = (event: PointerEvent) => {
      if (!languageMenuRef.current?.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsLangMenuOpen(false);
    };

    document.addEventListener('pointerdown', closeOnOutsideInteraction);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideInteraction);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [isLangMenuOpen]);

  // Scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // 多语言下拉菜单内容 - 使用专业图标
  const getDropdownContent = (): Record<string, DropdownItem[]> => ({
    products: [
      { title: t.navDropdown?.products?.industrialMiniPC || 'Industrial Mini PC', description: t.navDropdown?.products?.industrialMiniPCDesc || 'Fanless compact industrial computers', href: '/products/industrial-mini-pc', icon: Cpu },
      { title: 'AI Mini PC', description: 'High-performance mini PCs for AI workloads', href: '/products/ai-mini-pc', icon: Brain },
      { title: 'Commercial Mini PC', description: 'Compact computers for business and daily use', href: '/products/commercial-mini-pc', icon: Monitor },
      { title: 'Firewall Mini PC / Server PC', description: 'Compact firewall, routing, and gateway appliances', href: '/products/firewall-mini-pc', icon: Shield },
    ],
    documents: [
      { title: t.navDropdown?.documents?.news || 'News', description: t.navDropdown?.documents?.newsDesc || 'Latest updates and announcements', href: '/news', icon: Newspaper },
      { title: t.navDropdown?.documents?.downloads || 'File Downloads', description: t.navDropdown?.documents?.downloadsDesc || 'Brochures, whitepapers, and resources', href: '/downloads', icon: Download },
      { title: t.navDropdown?.documents?.techDocs || 'Tech Document', description: t.navDropdown?.documents?.techDocsDesc || 'Technical specifications and manuals', href: '/tech-docs', icon: FileCode },
    ],
    contact: [
      { title: t.navDropdown?.contact?.email || 'Email', description: t.navDropdown?.contact?.emailDesc || 'Send us an email', href: 'mailto:Contact@szmagicchip.com', icon: Mail, external: true },
      { title: t.navDropdown?.contact?.phone || 'Phone', description: t.navDropdown?.contact?.phoneDesc || 'Call our sales team', href: 'tel:+8613392172330', icon: Phone, external: true },
      { title: t.navDropdown?.contact?.whatsapp || 'WhatsApp', description: t.navDropdown?.contact?.whatsappDesc || 'Chat with us on WhatsApp', href: 'https://wa.me/8613392172330', icon: MessageCircle, external: true },
    ],
    about: [
      { title: t.navDropdown?.about?.ourCompany || 'Our Company', description: t.navDropdown?.about?.ourCompanyDesc || 'Company history and mission', href: '/company', icon: BookOpen },
      { title: t.navDropdown?.about?.ourFactory || 'Our Factory', description: t.navDropdown?.about?.ourFactoryDesc || 'Manufacturing facilities and capabilities', href: '/factory', icon: Factory },
    ],
  });

  const dropdownContent = getDropdownContent();
  const productCategoryIds = ['industrial-mini-pc', 'ai-mini-pc', 'commercial-mini-pc', 'firewall-mini-pc'];
  const productMegaCategories = dropdownContent.products.map((item, index) => ({
    ...item,
    id: productCategoryIds[index],
    products: megaMenuProducts[productCategoryIds[index]] || [],
    image: productCategoryImages[productCategoryIds[index]],
  }));
  const activeMegaCategory = productMegaCategories.find(category => category.id === activeProductCategory) || productMegaCategories[0];
  const activeMegaScenario = scenarioMegaItems.find(scenario => scenario.id === activeScenario) || scenarioMegaItems[0];

  const navItems: NavItem[] = [
    { label: t.nav.home, href: '/', dropdown: undefined },
    { label: t.nav.products, href: '/products', dropdown: dropdownContent.products },
    { label: t.nav.solutions, href: '/scenarios', dropdown: scenarioMegaItems },
    { label: t.nav.documents, href: '/documents', dropdown: dropdownContent.documents },
    { label: t.nav.contact, href: '/contact', dropdown: dropdownContent.contact },
    { label: t.nav.aboutUs, href: '/about', dropdown: dropdownContent.about },
  ];

  const isNavItemActive = (item: NavItem) => {
    if (item.href === '/') return pathname === '/';
    if (item.href === '/documents') {
      return ['/documents', '/downloads', '/tech-docs', '/news'].some(
        path => pathname === path || pathname.startsWith(`${path}/`),
      );
    }
    if (item.href === '/about') {
      return ['/about', '/company', '/factory'].some(
        path => pathname === path || pathname.startsWith(`${path}/`),
      );
    }
    return pathname === item.href || pathname.startsWith(`${item.href}/`);
  };

  const languages = SUPPORTED_LANGUAGES.map(code => ({
    code,
    label: LANGUAGE_NAMES[code].native,
  }));

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200/80 bg-white/90 shadow-[0_1px_0_rgba(15,23,42,0.03)] backdrop-blur-xl">
      <div className="mx-auto w-full max-w-[1680px] px-3 sm:px-4 lg:px-6 2xl:px-8">
        <div className="relative flex h-16 items-center justify-between gap-2 md:gap-3 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-4">
          {/* Logo */}
          <a href="/" className="group relative flex h-12 min-w-0 flex-shrink-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 md:ml-0 md:h-11 md:px-1.5 lg:justify-self-start">
            <Image
              src="/assets/brand/logo-mark.svg"
              alt="MagicChip"
              width={40}
              height={38}
              className="h-9 w-9 object-contain transition-transform duration-300 group-hover:scale-105 md:hidden"
              priority
            />
            <Image
              src="/assets/brand/logo-wordmark.svg"
              alt="MagicChip"
              width={150}
              height={40}
              className="hidden h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02] md:block lg:h-10"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center justify-center gap-0 lg:flex lg:justify-self-center xl:gap-1 2xl:gap-2">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  aria-current={isNavItemActive(item) ? 'page' : undefined}
                  className={`nav-item group relative inline-flex items-center gap-1 rounded-lg px-2 py-2 text-sm font-medium transition-colors duration-300 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 xl:px-4 xl:text-base 2xl:px-5 ${isNavItemActive(item) ? 'text-blue-700' : 'text-slate-600'}`}
                >
                  <span className="relative">
                    {item.label}
                    {/* Hover underline effect */}
                    <span className={`absolute -bottom-1 h-0.5 rounded-full bg-blue-600 transition-all duration-300 ${
                      isNavItemActive(item) || activeDropdown === item.label
                        ? 'left-0 w-full'
                        : 'left-1/2 w-0 group-hover:left-0 group-hover:w-full'
                    }`} />
                  </span>
                  {item.dropdown && (
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  )}
                </a>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.label && (
                    item.href === '/products' ? (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.99 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.99 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="fixed left-1/2 top-16 z-50 w-[calc(100vw-2rem)] max-w-[1600px] -translate-x-1/2 overflow-hidden rounded-3xl border border-slate-200 bg-[#f7f8fa] p-5 shadow-[0_28px_80px_-28px_rgba(15,23,42,0.42)] lg:p-7"
                      >
                        <div className="mb-5 flex items-center justify-between border-b border-slate-200 pb-4">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">MagicChip</p>
                            <h2 className="mt-1 text-2xl font-bold text-slate-950 lg:text-3xl">{t.nav.products}</h2>
                          </div>
                          <a href="/products" className="inline-flex items-center gap-1 text-sm font-semibold text-slate-600 transition-colors hover:text-blue-700">
                            {t.products.learnMore}
                            <ChevronRight className="h-4 w-4" />
                          </a>
                        </div>

                        <div className="grid gap-5 md:grid-cols-[190px_1fr] lg:grid-cols-[230px_1fr]">
                          <div className="rounded-2xl bg-slate-200/65 p-2">
                            {productMegaCategories.map((category) => (
                              <a
                                key={category.id}
                                href={category.href}
                                onMouseEnter={() => setActiveProductCategory(category.id)}
                                onFocus={() => setActiveProductCategory(category.id)}
                                className={`flex items-center gap-3 rounded-xl px-3 py-3.5 text-sm font-semibold transition-all lg:px-4 ${
                                  activeMegaCategory.id === category.id
                                    ? 'bg-white text-slate-950 shadow-sm ring-1 ring-slate-200'
                                    : 'text-slate-600 hover:bg-white/65 hover:text-slate-950'
                                }`}
                              >
                                {category.icon && <category.icon className={`h-5 w-5 ${activeMegaCategory.id === category.id ? 'text-blue-600' : 'text-slate-400'}`} />}
                                <span>{category.title}</span>
                                <ChevronRight className="ml-auto h-4 w-4 text-slate-400" />
                              </a>
                            ))}
                          </div>

                          <div className="min-w-0">
                            <div className="mb-3 flex items-center justify-between gap-4">
                              <div>
                                <h3 className="text-xl font-bold text-slate-950">{activeMegaCategory.title}</h3>
                                <p className="mt-1 hidden text-sm text-slate-500 lg:block">{activeMegaCategory.description}</p>
                              </div>
                              <a href={activeMegaCategory.href} className="shrink-0 text-sm font-semibold text-blue-700 hover:text-blue-800">
                                {t.products.learnMore}
                              </a>
                            </div>

                            {(activeMegaCategory.id === 'industrial-mini-pc' || activeMegaCategory.id === 'firewall-mini-pc') ? (
                              <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
                                {(activeMegaCategory.id === 'industrial-mini-pc' ? industrialMegaSeries : firewallMegaSeries).map((series) => (
                                  <a
                                    key={series.id}
                                    href={series.href}
                                    className="group flex min-h-32 items-center gap-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg"
                                  >
                                    <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-slate-50 ring-1 ring-slate-200">
                                      <Image
                                        src={series.image}
                                        alt={`${series.title} representative product`}
                                        fill
                                        sizes="96px"
                                        className="object-contain p-1.5 transition-transform duration-300 group-hover:scale-105"
                                      />
                                    </div>
                                    <div className="min-w-0">
                                      <span className="inline-flex rounded-md bg-slate-950 px-2 py-0.5 text-[10px] font-bold text-white">{series.code}</span>
                                      <div className="mt-1 flex items-center gap-1">
                                        <h4 className="text-base font-bold text-slate-950">{series.title}</h4>
                                        <ChevronRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-blue-600" />
                                      </div>
                                      <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-500">{series.description}</p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            ) : (
                              <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
                                <div className="relative aspect-[4.6/1] min-h-36 overflow-hidden bg-slate-100">
                                  <Image
                                    src={activeMegaCategory.image}
                                    alt={activeMegaCategory.title}
                                    fill
                                    sizes="(max-width: 1279px) 70vw, 1100px"
                                    className="object-cover"
                                  />
                                </div>
                                <div className="grid gap-3 border-t border-slate-100 p-4 md:grid-cols-3">
                                  {[
                                    { label: 'Category Overview', hash: 'overview' },
                                    { label: 'Application Scenarios', hash: 'applications' },
                                    { label: 'Current Models', hash: 'models' },
                                  ].map((section) => (
                                    <a
                                      key={section.hash}
                                      href={`${activeMegaCategory.href}#${section.hash}`}
                                      className="group flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                                    >
                                      {section.label}
                                      <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                                    </a>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ) : item.href === '/scenarios' ? (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.99 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 6, scale: 0.99 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="fixed left-1/2 top-16 z-50 w-[calc(100vw-2rem)] max-w-[1600px] -translate-x-1/2 overflow-hidden rounded-3xl border border-slate-200 bg-[#f7f8fa] p-5 shadow-[0_28px_80px_-28px_rgba(15,23,42,0.42)] lg:p-7"
                      >
                        <div className="mb-5 flex items-center justify-between border-b border-slate-200 pb-4">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">Application-based selection</p>
                            <h2 className="mt-1 text-2xl font-bold text-slate-950 lg:text-3xl">{t.nav.solutions}</h2>
                          </div>
                          <a href="/scenarios" className="inline-flex items-center gap-1 text-sm font-semibold text-slate-600 transition-colors hover:text-blue-700">
                            {t.navDropdown?.solutions?.viewAll || t.products.learnMore}
                            <ChevronRight className="h-4 w-4" />
                          </a>
                        </div>

                        <div className="grid gap-5 md:grid-cols-[240px_1fr] lg:grid-cols-[300px_1fr]">
                          <div className="rounded-2xl bg-slate-200/65 p-2">
                            {scenarioMegaItems.map((scenario) => (
                              <a
                                key={scenario.id}
                                href={scenario.href}
                                onMouseEnter={() => setActiveScenario(scenario.id)}
                                onFocus={() => setActiveScenario(scenario.id)}
                                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all lg:px-4 ${
                                  activeMegaScenario.id === scenario.id
                                    ? 'bg-white text-slate-950 shadow-sm ring-1 ring-slate-200'
                                    : 'text-slate-600 hover:bg-white/65 hover:text-slate-950'
                                }`}
                              >
                                {scenario.icon && <scenario.icon className={`h-5 w-5 shrink-0 ${activeMegaScenario.id === scenario.id ? 'text-blue-600' : 'text-slate-400'}`} />}
                                <span className="leading-snug">{scenario.title}</span>
                                <ChevronRight className="ml-auto h-4 w-4 shrink-0 text-slate-400" />
                              </a>
                            ))}
                          </div>

                          <div className="min-w-0">
                            <div className="mb-3 flex items-center justify-between gap-4">
                              <div>
                                <h3 className="text-xl font-bold text-slate-950">{activeMegaScenario.title}</h3>
                                <p className="mt-1 hidden text-sm text-slate-500 lg:block">{activeMegaScenario.description}</p>
                              </div>
                              <a href={activeMegaScenario.href} className="shrink-0 text-sm font-semibold text-blue-700 hover:text-blue-800">
                                {t.products.learnMore}
                              </a>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                              {activeMegaScenario.products.map((product) => (
                                <a
                                  key={`${product.category}-${product.id}`}
                                  href={`/products/${product.category}/${product.id}`}
                                  className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg"
                                >
                                  <div className="relative aspect-[16/9] overflow-hidden bg-white">
                                    <Image
                                      src={product.image}
                                      alt={`${product.name} for ${activeMegaScenario.title}`}
                                      fill
                                      sizes="(max-width: 1279px) 40vw, 360px"
                                      className="object-contain scale-[1.16] transition-transform duration-300 group-hover:scale-[1.22] xl:scale-[1.2] xl:group-hover:scale-[1.26]"
                                    />
                                  </div>
                                  <div className="border-t border-slate-100 px-4 py-3.5">
                                    <div className="flex items-center justify-between gap-3">
                                      <h4 className="font-bold text-slate-950">{product.name}</h4>
                                      <ChevronRight className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-blue-600" />
                                    </div>
                                    <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-slate-500">{product.tagline}</p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        className="absolute left-0 top-full z-50 mt-2 w-72 origin-top-left overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 py-2 shadow-[0_20px_50px_-18px_rgba(15,23,42,0.35)] backdrop-blur-xl"
                      >
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.href}
                            href={dropdownItem.href}
                            target={dropdownItem.external ? '_blank' : '_self'}
                            rel={dropdownItem.external ? 'noopener noreferrer' : undefined}
                            className="group flex items-start px-4 py-3 transition-colors hover:bg-blue-50/80"
                          >
                            {dropdownItem.icon && (
                              <div className="mr-3 flex h-5 w-5 flex-shrink-0 items-center justify-center">
                                <dropdownItem.icon className="h-5 w-5 text-slate-400 transition-colors group-hover:text-blue-600" />
                              </div>
                            )}
                            <div className="min-w-0 flex-1">
                              <div className="text-sm font-medium text-slate-900">{dropdownItem.title}</div>
                              {dropdownItem.description && <div className="mt-0.5 text-xs text-slate-500">{dropdownItem.description}</div>}
                            </div>
                          </a>
                        ))}
                      </motion.div>
                    )
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Toolbar */}
          <div className="ml-auto flex flex-shrink-0 items-center gap-1 md:gap-2 lg:ml-0 lg:justify-self-end">
            <div onClickCapture={() => setIsMobileMenuOpen(false)}>
              <SiteSearch />
            </div>
            {/* Language/Region Dropdown */}
            <div ref={languageMenuRef} className="relative">
              <button
                onClick={() => {
                  setIsLangMenuOpen(!isLangMenuOpen);
                  setIsMobileMenuOpen(false);
                }}
                className="group flex h-9 items-center gap-1 rounded-full border border-slate-200 bg-slate-50/80 px-2 text-slate-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md hover:shadow-blue-100/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 sm:h-auto sm:gap-1.5 sm:px-3 sm:py-2"
                aria-label={t.nav.languageAriaLabel}
                aria-expanded={isLangMenuOpen}
                aria-haspopup="menu"
              >
                <Globe className="h-[18px] w-[18px] flex-shrink-0 transition-transform duration-500 group-hover:rotate-[18deg]" />
                <span className="text-xs md:text-sm font-medium uppercase">{language}</span>
              </button>

              {/* Language Dropdown Menu */}
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full z-50 mt-2 w-48 origin-top-right overflow-hidden rounded-2xl border border-slate-200/80 bg-white/95 py-1 shadow-[0_20px_50px_-18px_rgba(15,23,42,0.35)] backdrop-blur-xl"
                  >
                    <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase border-b border-gray-100">
                      {t.language.title}
                    </div>
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          setLanguage(lang.code);
                          setIsLangMenuOpen(false);
                        }}
                        className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                      >
                        <span>{lang.label}</span>
                        {language === lang.code && (
                          <Check className="h-4 w-4 flex-shrink-0 text-blue-600" />
                        )}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => {
                setIsMobileMenuOpen(!isMobileMenuOpen);
                setIsLangMenuOpen(false);
              }}
              className="touch-manipulation rounded-xl p-2 text-slate-700 transition-all duration-300 hover:bg-blue-50 hover:text-blue-700 active:scale-95 lg:hidden"
              aria-label={t.nav.menuAriaLabel}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden border-t border-gray-200 bg-white overflow-hidden max-h-[calc(100vh-4rem)] overflow-y-auto"
          >
            <div className="px-3 sm:px-4 py-4 space-y-3">
              {/* Navigation Items */}
              {navItems.map((item) => (
                <div key={item.label} className="space-y-2">
                  <a
                    href={item.href}
                    aria-current={isNavItemActive(item) ? 'page' : undefined}
                    className={`block rounded-lg px-2 py-2 font-medium touch-manipulation ${isNavItemActive(item) ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'}`}
                    onClick={() => !item.dropdown && setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                  {item.dropdown && (
                    <div className="pl-3 sm:pl-4 space-y-1 border-l-2 border-gray-100">
                      {item.dropdown.map((dropdownItem, index) => (
                        <a
                          key={index}
                          href={dropdownItem.href}
                          target={dropdownItem.external ? '_blank' : '_self'}
                          rel={dropdownItem.external ? 'noopener noreferrer' : undefined}
                          className="flex items-center py-2 text-sm text-gray-600 hover:text-teal-700 transition-colors touch-manipulation"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {dropdownItem.icon && (
                            <dropdownItem.icon className="w-4 h-4 mr-2 flex-shrink-0" />
                          )}
                          <span className="truncate">{dropdownItem.title}</span>
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll progress bar */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px] origin-left bg-gradient-to-r from-blue-600 via-cyan-400 to-amber-400"
        style={{ scaleX }}
      />
    </nav>
  );
}
