import { SITE_URL } from '@/lib/seo';
import { SUPPORTED_LANGUAGES } from './config';
import { localizedHref } from './routing';

export const LANGUAGE_REGION_CODES: Record<string, { hreflang: string; ogLocale: string; countryCode: string }> = {
  en: { hreflang: 'en', ogLocale: 'en_US', countryCode: 'US' },
  fr: { hreflang: 'fr', ogLocale: 'fr_FR', countryCode: 'FR' },
  de: { hreflang: 'de', ogLocale: 'de_DE', countryCode: 'DE' },
  it: { hreflang: 'it', ogLocale: 'it_IT', countryCode: 'IT' },
  es: { hreflang: 'es', ogLocale: 'es_ES', countryCode: 'ES' },
};

export function generateHreflangTags(_currentLang: string, path = '/') {
  return [...SUPPORTED_LANGUAGES.map(lang => ({ lang, href: `${SITE_URL}${localizedHref(path, lang)}` })), { lang: 'x-default', href: `${SITE_URL}${localizedHref(path, 'en')}` }];
}

export const SEO_CONFIGS = Object.fromEntries(Object.entries({ home: '/', products: '/products', about: '/about', contact: '/contact' }).map(([name, path]) => [name, {
  alternates: { languages: Object.fromEntries(generateHreflangTags('en', path).map(item => [item.lang, item.href])) },
  openGraph: { locale: 'en_US', alternateLocale: ['fr_FR', 'de_DE', 'it_IT', 'es_ES'], siteName: 'MagicChip' },
}]));
