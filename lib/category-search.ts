import { searchSite, type SearchEntry } from '@/lib/site-search';
import { industrialCatalog } from '@/lib/industrial-catalog';
import { commercialCatalog } from '@/lib/commercial-catalog';
import { firewallCatalog } from '@/lib/firewall-catalog';
import { aiCatalog } from '@/lib/ai-catalog';
import { germanAiCopy } from '@/lib/ai-product-german';
import type { CatalogProductTranslations } from '@/lib/catalog-product-copy';
import type { ProductConfiguration } from '@/lib/product-specifications';
import type { Language } from '@/lib/i18n/config';

export const categorySearchTerms: Record<string, string[]> = {
  'industrial-mini-pc': ['COM', 'LAN', 'GPIO', 'RS485', '9-36V', 'fanless'],
  'ai-mini-pc': ['AMD', 'Intel', 'LPDDR5', 'DDR5', 'USB4', '10GbE', 'OCuLink', 'MCIO'],
  'commercial-mini-pc': ['Intel', 'AMD', 'DDR4', 'DDR5', 'NVMe', 'HDMI', 'USB4'],
  'firewall-mini-pc': ['LAN', '2.5GbE', '10GbE', 'DDR5', 'NVMe', 'Intel'],
};

function termPattern(term: string) {
  return new RegExp(`(^|[\\s,;])${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}(?=$|[\\s,;])`, 'gi');
}

export function hasSearchTerm(query: string, term: string) {
  return termPattern(term).test(query);
}

export function toggleSearchTerm(query: string, term: string, checked: boolean) {
  if (checked) return hasSearchTerm(query, term) ? query : `${query.trim()} ${term}`.trim();
  return query.replace(termPattern(term), ' ').replace(/\s+/g, ' ').trim();
}

export function searchCategory(query: string, category: string) {
  const prefix = `/products/${category}/`;
  const seen = new Set<string>();
  return searchSite(query).filter(result => {
    if (result.type !== 'product' || !result.href.startsWith(prefix) || seen.has(result.href)) return false;
    seen.add(result.href);
    return true;
  });
}

const products = [...industrialCatalog, ...commercialCatalog, ...firewallCatalog, ...aiCatalog];
export function categoryResultCopy(result: SearchEntry, language: Language) {
  const id = result.href.split('/')[3]?.split('#')[0];
  const product = products.find(item => item.id === id) as {
    name: string; translations?: CatalogProductTranslations; skus?: ProductConfiguration[];
  } | undefined;
  const sku = product?.skus?.find(item => result.href.endsWith(`#sku-${item.key}`));
  const type = { en: 'Type', de: 'Typ', fr: 'Type', it: 'Tipo', es: 'Tipo' }[language];
  const label = sku && (language !== 'en' && sku.labelTranslations?.[language] || sku.label.replace(/\bType\b/g, type));
  const copy = language === 'de' && germanAiCopy[id] || product?.translations?.[language];
  return {
    title: sku ? `${product!.name} · ${label}` : result.title,
    description: language === 'en' ? result.description : copy?.tagline,
    evidence: language === 'en' ? result.matchedSpecs?.filter(spec => !/^(?:model|series)\s*:/i.test(spec)).slice(0, 2) || [] : [],
  };
}
