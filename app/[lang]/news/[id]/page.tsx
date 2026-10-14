import { localizedHref } from '@/lib/i18n/routing';
import type { Metadata } from 'next';
import { getAllNews } from '@/lib/content-loader';
import { createPageMetadata, serializeJsonLd, SITE_URL } from '@/lib/seo';
import { notFound } from 'next/navigation';
import NewsArticleClient from './NewsArticleClient';

type NewsArticlePageProps = {
  params: Promise<{ lang: string; id: string }>;
};

export async function generateMetadata({ params }: NewsArticlePageProps): Promise<Metadata> {
  const { lang, id } = await params;
  const article = getAllNews().find(item => item.id === id);

  if (!article) return { title: 'Article Not Found', robots: { index: false, follow: false } };

  return createPageMetadata({
    name: article.title[lang as keyof typeof article.title] || article.title.en,
    description: article.excerpt[lang as keyof typeof article.excerpt] || article.excerpt.en,
    path: `/news/${article.id}`,
    image: article.image,
  }, lang);
}

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { lang, id } = await params;
  const article = getAllNews().find(item => item.id === id);

  if (!article) notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title[lang as keyof typeof article.title] || article.title.en,
    description: article.excerpt[lang as keyof typeof article.excerpt] || article.excerpt.en,
    datePublished: article.date,
    image: [article.image],
    mainEntityOfPage: `${SITE_URL}/${lang}/news/${article.id}`,
    publisher: { '@id': `${SITE_URL}/#organization` },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(articleJsonLd) }} />
      <NewsArticleClient article={article} />
    </>
  );
}

export async function generateStaticParams() {
  return getAllNews().map(article => ({ id: article.id }));
}