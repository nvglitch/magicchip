import type { MetadataRoute } from 'next';
import { getAllNews } from '@/lib/content-loader';
import { categorySeo, productSeo, SITE_CONTENT_LAST_UPDATED, SITE_URL } from '@/lib/seo';
import { LEGAL_UPDATED, legalPaths } from '@/lib/legal-navigation';
import { SUPPORTED_LANGUAGES } from '@/lib/i18n/config';
import { localizedHref } from '@/lib/i18n/routing';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: SITE_CONTENT_LAST_UPDATED, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/products`, lastModified: SITE_CONTENT_LAST_UPDATED, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/scenarios`, lastModified: SITE_CONTENT_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${SITE_URL}/about`, lastModified: SITE_CONTENT_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/company`, lastModified: SITE_CONTENT_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/factory`, lastModified: SITE_CONTENT_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/documents`, lastModified: SITE_CONTENT_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/downloads`, lastModified: SITE_CONTENT_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/tech-docs`, lastModified: SITE_CONTENT_LAST_UPDATED, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/news`, lastModified: SITE_CONTENT_LAST_UPDATED, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${SITE_URL}/contact`, lastModified: SITE_CONTENT_LAST_UPDATED, changeFrequency: 'yearly', priority: 0.7 },
  ];

  const categoryPages: MetadataRoute.Sitemap = Object.values(categorySeo).map(category => ({
    url: `${SITE_URL}${category.path}`,
    lastModified: SITE_CONTENT_LAST_UPDATED,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  const productPages: MetadataRoute.Sitemap = Object.values(productSeo).map(product => ({
    url: `${SITE_URL}${product.path}`,
    lastModified: SITE_CONTENT_LAST_UPDATED,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const newsPages: MetadataRoute.Sitemap = getAllNews().map(article => ({
    url: `${SITE_URL}/news/${article.id}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  const legalPages: MetadataRoute.Sitemap = Object.values(legalPaths).map(path => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(`${LEGAL_UPDATED}T00:00:00.000Z`),
    changeFrequency: 'yearly',
    priority: 0.3,
  }));

  return [...staticPages, ...categoryPages, ...productPages, ...newsPages, ...legalPages].flatMap(entry => {
    const path = new URL(entry.url).pathname;
    const languages = Object.fromEntries(SUPPORTED_LANGUAGES.map(lang => [lang, `${SITE_URL}${localizedHref(path, lang)}`]));
    return SUPPORTED_LANGUAGES.map(lang => ({ ...entry, url: languages[lang], alternates: { languages } }));
  });
}
