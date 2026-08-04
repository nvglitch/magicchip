import type { MetadataRoute } from 'next';
import { getAllNews } from '@/lib/content-loader';
import { categorySeo, productSeo, SITE_URL } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/products`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/about`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/company`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/factory`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${SITE_URL}/documents`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/downloads`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/tech-docs`, changeFrequency: 'monthly', priority: 0.6 },
    { url: `${SITE_URL}/news`, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${SITE_URL}/contact`, changeFrequency: 'yearly', priority: 0.7 },
  ];

  const categoryPages: MetadataRoute.Sitemap = Object.values(categorySeo).map(category => ({
    url: `${SITE_URL}${category.path}`,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  const productPages: MetadataRoute.Sitemap = Object.values(productSeo).map(product => ({
    url: `${SITE_URL}${product.path}`,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const newsPages: MetadataRoute.Sitemap = getAllNews().map(article => ({
    url: `${SITE_URL}/news/${article.id}`,
    lastModified: new Date(article.date),
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [...staticPages, ...categoryPages, ...productPages, ...newsPages];
}