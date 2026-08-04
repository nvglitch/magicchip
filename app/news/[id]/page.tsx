import type { Metadata } from 'next';
import { getAllNews } from '@/lib/content-loader';
import { createPageMetadata, serializeJsonLd, SITE_URL } from '@/lib/seo';
import { notFound } from 'next/navigation';
import NewsArticleClient from './NewsArticleClient';

type NewsArticlePageProps = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: NewsArticlePageProps): Promise<Metadata> {
  const { id } = await params;
  const article = getAllNews().find(item => item.id === id);

  if (!article) return { title: 'Article Not Found', robots: { index: false, follow: false } };

  return createPageMetadata({
    name: article.title.en,
    description: article.excerpt.en,
    path: `/news/${article.id}`,
    image: article.image,
  });
}

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { id } = await params;
  const article = getAllNews().find(item => item.id === id);

  if (!article) notFound();

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title.en,
    description: article.excerpt.en,
    datePublished: article.date,
    image: [article.image],
    mainEntityOfPage: `${SITE_URL}/news/${article.id}`,
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