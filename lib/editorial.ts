import articles from '@/content/articles.json';
import { SUPPORTED_LANGUAGES, type Language } from '@/lib/i18n/config';

export type ArticleKind = 'technical' | 'case-study';
export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'image'; src: string; alt: string; caption?: string };
export type ArticleCopy = { title: string; excerpt: string; imageAlt: string; body: ArticleBlock[] };
export type EditorialArticle = {
  id: string;
  kind: ArticleKind;
  published: boolean;
  date: string;
  updated?: string;
  image: string;
  translations: Record<Language, ArticleCopy>;
};

export const articlePaths: Record<ArticleKind, string> = { technical: '/tech-docs', 'case-study': '/case-studies' };
const publicImage = (path: string) => typeof path === 'string' && /^\/assets\/(?!.*(?:\.\.|[?#]))[^\s]+\.(?:webp|png|jpe?g|svg)$/i.test(path);
const text = (value: unknown): value is string => typeof value === 'string' && value.trim().length > 0;
function validDate(value: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value)) && new Date(value).toISOString().slice(0, 10) === value;
}
function validBlock(block: ArticleBlock) {
  if (!block) return false;
  if (block.type === 'paragraph' || block.type === 'heading') return text(block.text);
  if (block.type === 'list') return Array.isArray(block.items) && block.items.length > 0 && block.items.every(text);
  return block.type === 'image' && publicImage(block.src) && text(block.alt);
}

// Drafts and incomplete translations stay out of pages, search, counts and sitemap.
export function isPublishableArticle(article: EditorialArticle) {
  return article.published === true && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(article.id)
    && Object.hasOwn(articlePaths, article.kind) && validDate(article.date)
    && (!article.updated || (validDate(article.updated) && article.updated >= article.date))
    && publicImage(article.image) && SUPPORTED_LANGUAGES.every(language => {
      const copy = article.translations?.[language];
      return copy && text(copy.title) && text(copy.excerpt) && text(copy.imageAlt)
        && Array.isArray(copy.body) && copy.body.length > 0 && copy.body.every(validBlock)
        && copy.body.some(block => block.type === 'paragraph' || block.type === 'list');
    });
}

export function getPublishedArticles(kind?: ArticleKind, source = articles as EditorialArticle[]) {
  return source.filter(article => isPublishableArticle(article) && (!kind || article.kind === kind))
    .sort((a, b) => b.date.localeCompare(a.date) || a.id.localeCompare(b.id));
}

export function getArticle(kind: ArticleKind, id: string, source = articles as EditorialArticle[]) {
  return getPublishedArticles(kind, source).find(article => article.id === id);
}

export function getArticlePage(kind: ArticleKind, requestedPage?: string | string[], source = articles as EditorialArticle[]) {
  const items = getPublishedArticles(kind, source);
  const totalPages = Math.max(1, Math.ceil(items.length / 9));
  const number = typeof requestedPage === 'string' && /^[1-9]\d*$/.test(requestedPage) ? Number(requestedPage) : 1;
  const page = Math.min(number, totalPages);
  return { items: items.slice((page - 1) * 9, page * 9), page, totalPages, total: items.length };
}
