import { brochureUpdates } from '@/lib/brochure-updates';
import { categoryNames, categoryDescriptions } from '@/lib/category-labels';
import { aiCatalog, mcaipc2 } from '@/lib/ai-catalog';
import type { Metadata } from 'next';
import { isValidLanguage, SUPPORTED_LANGUAGES, type Language } from '@/lib/i18n/config';
import { localizedHref } from '@/lib/i18n/routing';
import { dictionaries } from '@/lib/i18n/dictionaries';
import { legalNavigation } from '@/lib/legal-navigation';
import { industrialCatalog } from '@/lib/industrial-catalog';
import { firewallCatalog } from '@/lib/firewall-catalog';
import { commercialCatalog } from '@/lib/commercial-catalog';
import { editorialCopy } from '@/lib/editorial-copy';
import { certificateCopy } from '@/lib/certificates';
import { germanAiCopy } from '@/lib/ai-product-german';

export const SITE_URL = 'https://szmagicchip.com';
export const SITE_NAME = 'MagicChip';
// Update this only when the published site or product catalog materially changes.
export const SITE_CONTENT_LAST_UPDATED = new Date('2026-11-06T00:00:00.000Z');
export const DEFAULT_SOCIAL_IMAGE = '/assets/brand/og-default.png';

export type SeoEntry = {
  name: string;
  description: string;
  path: string;
  image?: string;
  descriptionTranslations?: Partial<Record<Language, string>>;
};

// Metadata titles only: keep visible headings, catalog names and JSON-LD unchanged.
const productPageTitles: Partial<Record<string, Partial<Record<Language, string>>>> = {
  '/products/industrial-mini-pc': {
    en: 'Industrial Mini PCs with Multi-COM & LAN',
    de: 'Industrie-Mini-PCs mit mehreren COM- & LAN-Ports',
    fr: 'Mini PC industriels avec plusieurs ports COM et LAN',
    it: 'Mini PC industriali con più porte COM e LAN',
    es: 'Mini PCs industriales con múltiples puertos COM y LAN',
  },
  '/products/ai-mini-pc': {
    en: 'AI Mini PCs for Local AI & Edge Computing',
    de: 'KI-Mini-PCs für lokale KI & Edge-Computing',
    fr: 'Mini PC IA pour l’IA locale et l’edge computing',
    it: 'Mini PC AI per IA locale ed edge computing',
    es: 'Mini PCs para IA local y edge computing',
  },
  '/products/industrial-mini-pc/mcipc8-hdmi': {
    en: 'MCIPC8-HDMI 6-COM Fanless PC, Dual LAN',
    de: 'MCIPC8-HDMI: Lüfterloser PC, 6 COM, Dual-LAN',
    fr: 'MCIPC8-HDMI : PC sans ventilateur, 6 COM, double LAN',
    it: 'MCIPC8-HDMI: PC senza ventole, 6 COM, doppia LAN',
    es: 'MCIPC8-HDMI: PC sin ventilador, 6 COM, doble LAN',
  },
  '/products/commercial-mini-pc/mcn1': {
    en: 'MCN1 Intel N95/N100/N150 Mini PC',
    de: 'MCN1 Mini-PC mit Intel N95/N100/N150',
    fr: 'MCN1 Mini PC Intel N95/N100/N150',
    it: 'MCN1 Mini PC Intel N95/N100/N150',
    es: 'MCN1 Mini PC Intel N95/N100/N150',
  },
  '/products/ai-mini-pc/mcai1': { de: 'MCAIPC1 KI-Mini-PC mit Ryzen AI Max+ 395' },
  '/products/ai-mini-pc/mcai2': { de: 'MCAIPC2 KI-Mini-PC mit drei Mainboard-Serien' },
  '/products/ai-mini-pc/mcaipc3': { de: 'MCAIPC3 KI-Mini-PC mit AMD- und Intel-Konfigurationen' },
};

const productPageDescriptions: Partial<Record<string, Record<Language, string>>> = {
  '/products/industrial-mini-pc': {
    en: 'Compare industrial mini PCs by COM, LAN, GPIO, mounting and temperature range. Explore fanless options and OEM/ODM configurations for equipment integration.',
    de: 'Vergleichen Sie Industrie-Mini-PCs nach COM, LAN, GPIO, Montage und Temperaturbereich. Entdecken Sie lüfterlose Modelle und OEM/ODM-Konfigurationen.',
    fr: 'Comparez les mini PC industriels selon les ports COM, LAN, GPIO, le montage et la température. Découvrez les modèles sans ventilateur et les options OEM/ODM.',
    it: 'Confronta mini PC industriali per COM, LAN, GPIO, montaggio e temperatura. Scopri modelli senza ventole e configurazioni OEM/ODM per i tuoi impianti.',
    es: 'Compare mini PCs industriales por COM, LAN, GPIO, montaje y temperatura. Descubra modelos sin ventilador y configuraciones OEM/ODM para sus equipos.',
  },
  '/products/ai-mini-pc': {
    en: 'Compare AMD and Intel AI mini PCs by CPU, memory, networking and expansion. Choose configurations for local inference, edge AI and professional workloads.',
    de: 'Vergleichen Sie KI-Mini-PCs mit AMD und Intel nach CPU, RAM, Netzwerk und Erweiterung. Wählen Sie die passende Konfiguration für lokale KI und Edge-Anwendungen.',
    fr: 'Comparez les mini PC IA AMD et Intel : processeur, mémoire, réseau et extensions. Choisissez une configuration pour l’inférence locale et l’IA en périphérie.',
    it: 'Confronta mini PC AI AMD e Intel per CPU, memoria, rete ed espansione. Scegli una configurazione per inferenza locale, IA edge e attività professionali.',
    es: 'Compare mini PCs con IA AMD e Intel por CPU, memoria, red y expansión. Elija una configuración para inferencia local, IA en el borde y trabajo profesional.',
  },
  '/products/commercial-mini-pc/mcn1': {
    en: 'MCN1 mini PC with Intel N95/N100/N150, replaceable DDR4 SO-DIMM, dual HDMI 2.0, M.2 SATA and optional 2.5-inch storage for offices and displays.',
    de: 'MCN1 mit Intel N95/N100/N150, austauschbarem DDR4-SO-DIMM, zwei HDMI-2.0-Ausgängen, M.2-SATA und optionalem 2,5-Zoll-Laufwerk für Büro und Anzeigen.',
    fr: 'MCN1 avec Intel N95/N100/N150, RAM DDR4 SO-DIMM remplaçable, deux HDMI 2.0, M.2 SATA et disque 2,5 pouces en option pour le bureau et l’affichage.',
    it: 'MCN1 con Intel N95/N100/N150, DDR4 SO-DIMM sostituibile, doppia HDMI 2.0, M.2 SATA e unità da 2,5 pollici opzionale per uffici e schermi.',
    es: 'MCN1 con Intel N95/N100/N150, DDR4 SO-DIMM reemplazable, dos HDMI 2.0, M.2 SATA y disco de 2,5 pulgadas opcional para oficina y pantallas.',
  },
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
    description: 'Explore desktop PCs, enclosed NAS PCs and NAS motherboards for office computing, storage, backup, network services and custom system integration.',
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
      descriptionTranslations: Object.fromEntries(Object.entries(item.translations || {}).map(([language, copy]) => [language, copy.tagline])),
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
      descriptionTranslations: Object.fromEntries(Object.entries(item.translations || {}).map(([language, copy]) => [language, copy.tagline])),
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
      name: `${item.name} ${item.series === 'NAS-MB' ? 'NAS Motherboard' : item.series === 'NAS' ? 'NAS PC' : 'Commercial Desktop PC'}`,
      description: item.tagline,
      descriptionTranslations: Object.fromEntries(Object.entries(item.translations || {}).map(([language, copy]) => [language, copy.tagline])),
      path: `/products/commercial-mini-pc/${item.id}`,
      image: item.image,
      category: 'commercial-mini-pc',
    },
  ]),
);
export const productSeo: Record<string, SeoEntry & { category: string }> = {
  ...Object.fromEntries(aiCatalog.map((item) => [item.id, { name: `${item.name} AI Mini PC`, description: item.tagline, path: `/products/ai-mini-pc/${item.id}`, image: item.image, category: 'ai-mini-pc' }])),
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
    description: mcaipc2.tagline,
    path: '/products/ai-mini-pc/mcai2',
    image: mcaipc2.image,
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
    ...catalogFirewallProductSeo.mcsrp6,
    name: 'MCSRP6 Firewall Mini PC',
  },
};

for (const item of brochureUpdates) {
  if (productSeo[item.id]) productSeo[item.id] = { ...productSeo[item.id], description: item.description, image: item.image };
}
for (const [id, copy] of Object.entries(germanAiCopy)) {
  if (productSeo[id] && copy.description) productSeo[id].descriptionTranslations = { ...productSeo[id].descriptionTranslations, de: copy.description };
}
export function createPageMetadata(entry: SeoEntry, requestedLanguage = 'en'): Metadata {
  const language = isValidLanguage(requestedLanguage) ? requestedLanguage : 'en';
  const copy = dictionaries[language];
  const titles: Record<string, string> = {
    '/products': copy.nav.products, '/scenarios': copy.nav.solutions, '/about': copy.nav.aboutUs,
    '/company': copy.footer.about[0], '/factory': copy.footer.about[1], '/case-studies': editorialCopy[language]['case-study'].title,
    '/contact': copy.footer.support[2], '/tech-docs': editorialCopy[language].technical.title, '/downloads': certificateCopy[language].downloads,
    '/documents': editorialCopy[language].resourcesTitle, '/search': copy.nav.searchAriaLabel,
    '/privacy-policy': legalNavigation[language].privacy, '/cookie-policy': legalNavigation[language].cookies, '/terms-of-use': legalNavigation[language].terms,
  };
  const categoryId = entry.path.match(/^\/products\/([^/]+)$/)?.[1];
  const name = titles[entry.path] || (categoryId && categoryNames[categoryId]?.[language]) || entry.name;
  const description = productPageDescriptions[entry.path]?.[language] || entry.descriptionTranslations?.[language] || (categoryId && categoryDescriptions[categoryId]?.[language]) || entry.description;
  const title = productPageTitles[entry.path]?.[language] || name;
  const brandedTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const socialImage = entry.image || DEFAULT_SOCIAL_IMAGE;
  const path = localizedHref(entry.path, language);
  const locales = { en: 'en_US', de: 'de_DE', fr: 'fr_FR', it: 'it_IT', es: 'es_ES' };

  return {
    title: { absolute: brandedTitle },
    description,
    alternates: { canonical: path, languages: Object.fromEntries([...SUPPORTED_LANGUAGES.map(lang => [lang, localizedHref(entry.path, lang)]), ['x-default', localizedHref(entry.path, 'en')]]) },
    openGraph: {
      title: brandedTitle,
      description,
      url: path,
      locale: locales[language],
      alternateLocale: SUPPORTED_LANGUAGES.filter(lang => lang !== language).map(lang => locales[lang]),
      type: 'website',
      images: [{
        url: socialImage,
        ...(entry.image ? {} : { width: 1200, height: 630, type: 'image/png' }),
        alt: entry.name,
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: brandedTitle,
      description,
      images: [socialImage],
    },
  };
}
export function serializeJsonLd(value: unknown) {
  return JSON.stringify(value).replace(/</g, '\\u003c');
}
