export interface SEOConfig {
  alternates: {
    languages: Record<string, string>;
  };
  openGraph: {
    locale: string;
    alternateLocale: string[];
    siteName: string;
  };
}

export const SEO_CONFIGS: Record<string, SEOConfig> = {
  home: {
    alternates: {
      languages: {
        'en': 'https://magicchip.com/',
        'en-US': 'https://magicchip.com/',
        'fr': 'https://magicchip.com/fr/',
        'de': 'https://magicchip.com/de/',
        'it': 'https://magicchip.com/it/',
        'es': 'https://magicchip.com/es/',
      },
    },
    openGraph: {
      locale: 'en_US',
      alternateLocale: ['fr_FR', 'de_DE', 'it_IT', 'es_ES'],
      siteName: 'MagicChip',
    },
  },
  products: {
    alternates: {
      languages: {
        'en': 'https://magicchip.com/products',
        'en-US': 'https://magicchip.com/products',
        'fr': 'https://magicchip.com/fr/products',
        'de': 'https://magicchip.com/de/products',
        'it': 'https://magicchip.com/it/products',
        'es': 'https://magicchip.com/es/products',
      },
    },
    openGraph: {
      locale: 'en_US',
      alternateLocale: ['fr_FR', 'de_DE', 'it_IT', 'es_ES'],
      siteName: 'MagicChip',
    },
  },
  about: {
    alternates: {
      languages: {
        'en': 'https://magicchip.com/about',
        'en-US': 'https://magicchip.com/about',
        'fr': 'https://magicchip.com/fr/about',
        'de': 'https://magicchip.com/de/about',
        'it': 'https://magicchip.com/it/about',
        'es': 'https://magicchip.com/es/about',
      },
    },
    openGraph: {
      locale: 'en_US',
      alternateLocale: ['fr_FR', 'de_DE', 'it_IT', 'es_ES'],
      siteName: 'MagicChip',
    },
  },
  contact: {
    alternates: {
      languages: {
        'en': 'https://magicchip.com/contact',
        'en-US': 'https://magicchip.com/contact',
        'fr': 'https://magicchip.com/fr/contact',
        'de': 'https://magicchip.com/de/contact',
        'it': 'https://magicchip.com/it/contact',
        'es': 'https://magicchip.com/es/contact',
      },
    },
    openGraph: {
      locale: 'en_US',
      alternateLocale: ['fr_FR', 'de_DE', 'it_IT', 'es_ES'],
      siteName: 'MagicChip',
    },
  },
};

export const LANGUAGE_REGION_CODES: Record<string, { hreflang: string; ogLocale: string; countryCode: string }> = {
  en: { hreflang: 'en', ogLocale: 'en_US', countryCode: 'US' },
  'en-US': { hreflang: 'en-US', ogLocale: 'en_US', countryCode: 'US' },
  fr: { hreflang: 'fr', ogLocale: 'fr_FR', countryCode: 'FR' },
  de: { hreflang: 'de', ogLocale: 'de_DE', countryCode: 'DE' },
  it: { hreflang: 'it', ogLocale: 'it_IT', countryCode: 'IT' },
  es: { hreflang: 'es', ogLocale: 'es_ES', countryCode: 'ES' },
};

export function generateHreflangTags(currentLang: string): Array<{ lang: string; href: string }> {
  const tags: Array<{ lang: string; href: string }> = [];
  
  const languages = ['en', 'fr', 'de', 'it', 'es'];
  
  for (const lang of languages) {
    const basePath = lang === 'en' ? '' : `/${lang}`;
    tags.push({
      lang: LANGUAGE_REGION_CODES[lang]?.hreflang || lang,
      href: `https://magicchip.com${basePath}`,
    });
  }
  
  tags.push({
    lang: 'x-default',
    href: 'https://magicchip.com',
  });
  
  return tags;
}
