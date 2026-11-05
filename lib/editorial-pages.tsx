import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ArticleListing from '@/components/ArticleListing';
import EditorialArticle from '@/components/EditorialArticle';
import { articlePaths, getArticle, getArticlePage, getPublishedArticles, type ArticleKind } from '@/lib/editorial';
import { editorialCopy } from '@/lib/editorial-copy';
import { isValidLanguage } from '@/lib/i18n/config';
import { localizedHref } from '@/lib/i18n/routing';
import { createPageMetadata, serializeJsonLd, SITE_URL } from '@/lib/seo';

export type ArticleListingProps = { params: Promise<{ lang: string }>; searchParams: Promise<{ page?: string | string[] }> };
export type ArticleDetailProps = { params: Promise<{ lang: string; id: string }> };

export async function articleListingMetadata(kind: ArticleKind, { params, searchParams }: ArticleListingProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isValidLanguage(lang)) notFound();
  const { page } = getArticlePage(kind, (await searchParams).page);
  const copy = editorialCopy[lang][kind];
  return createPageMetadata({ name: copy.title, description: editorialCopy[lang].heroDescriptions[kind], path: `${articlePaths[kind]}${page > 1 ? `?page=${page}` : ''}` }, lang);
}

export async function renderArticleListing(kind: ArticleKind, { params, searchParams }: ArticleListingProps) {
  const { lang } = await params;
  if (!isValidLanguage(lang)) notFound();
  const { items, page, totalPages } = getArticlePage(kind, (await searchParams).page);
  return <ArticleListing kind={kind} language={lang} articles={items} page={page} totalPages={totalPages} />;
}

export async function articleDetailMetadata(kind: ArticleKind, { params }: ArticleDetailProps): Promise<Metadata> {
  const { lang, id } = await params;
  if (!isValidLanguage(lang)) notFound();
  const article = getArticle(kind, id);
  if (!article) notFound();
  const copy = article.translations[lang];
  const metadata = createPageMetadata({ name: copy.title, description: copy.excerpt, path: `${articlePaths[kind]}/${id}`, image: article.image }, lang);
  return { ...metadata, openGraph: { ...metadata.openGraph, type: 'article', publishedTime: article.date, modifiedTime: article.updated || article.date } };
}

export async function renderArticleDetail(kind: ArticleKind, { params }: ArticleDetailProps) {
  const { lang, id } = await params;
  if (!isValidLanguage(lang)) notFound();
  const article = getArticle(kind, id);
  if (!article) notFound();
  const copy = article.translations[lang];
  const path = `${articlePaths[kind]}/${id}`;
  const jsonLd = {
    '@context': 'https://schema.org', '@type': 'Article',
    headline: copy.title, description: copy.excerpt, inLanguage: lang,
    datePublished: article.date, dateModified: article.updated || article.date,
    image: [`${SITE_URL}${article.image}`], mainEntityOfPage: `${SITE_URL}${localizedHref(path, lang)}`,
    author: { '@type': 'Organization', '@id': `${SITE_URL}/#organization` },
    publisher: { '@id': `${SITE_URL}/#organization` },
  };
  const related = getPublishedArticles(kind).filter(item => item.id !== id).slice(0, 3);
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLd) }} /><EditorialArticle article={article} language={lang} related={related} /></>;
}
