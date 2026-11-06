import articles from '@/content/articles.json';
import { SUPPORTED_LANGUAGES, type Language } from '@/lib/i18n/config';

export type ArticleKind = 'technical' | 'case-study';
export type ArticleBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'heading'; text: string; level?: 2 | 3 }
  | { type: 'list'; items: string[]; ordered?: boolean; start?: number }
  | { type: 'table'; columns: string[]; rows: string[][] }
  | { type: 'links'; items: { text: string; href: string }[] }
  | { type: 'code'; text: string }
  | { type: 'cards'; items: { title: string; subtitle?: string; text: string }[] }
  | { type: 'models'; items: { name: string; workload: string; download: string; command: string; note: string; href: string }[] }
  | { type: 'image'; src: string; alt: string; caption?: string; presentation?: 'panel' | 'diagram' };
export type ArticleCopy = {
  title: string; excerpt: string; imageAlt: string; body: ArticleBlock[];
  presentation?: 'guide';
  image?: string;
  imageCredit?: { text: string; href: string };
  metaTitle?: string;
  metaDescription?: string;
  cta?: { title: string; description: string; label: string; href: string };
};
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
const internalLink = (href: string) => /^\/(?:products(?:\/[a-z0-9-]+){0,2}|tech-docs(?:\/[a-z0-9-]+)?|contact)(?:#[a-z0-9-]+)?$/.test(href);
const referenceHosts = new Set(['ollama.com', 'docs.ollama.com', 'lmstudio.ai', 'huggingface.co', 'qwen.ai', 'qwenlm.github.io', 'www.ti.com', 'www.mathworks.com', 'www.beckhoff.com']);
export function isArticleReference(href: string) {
  try {
    const url = new URL(href);
    return url.protocol === 'https:' && !url.username && !url.password && !url.port && referenceHosts.has(url.hostname);
  } catch { return false; }
}
function validDate(value: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(value) && !Number.isNaN(Date.parse(value)) && new Date(value).toISOString().slice(0, 10) === value;
}
function validBlock(block: ArticleBlock) {
  if (!block) return false;
  if (block.type === 'paragraph' || block.type === 'code') return text(block.text);
  if (block.type === 'heading') return text(block.text) && (block.level === undefined || block.level === 2 || block.level === 3);
  if (block.type === 'list') return Array.isArray(block.items) && block.items.length > 0 && block.items.every(text)
    && (block.ordered === undefined || typeof block.ordered === 'boolean')
    && (block.start === undefined || (block.ordered === true && Number.isSafeInteger(block.start) && block.start > 0));
  if (block.type === 'cards') return Array.isArray(block.items) && block.items.length > 0
    && block.items.every(item => item && text(item.title) && text(item.text) && (item.subtitle === undefined || text(item.subtitle)));
  if (block.type === 'models') return Array.isArray(block.items) && block.items.length > 0
    && block.items.every(item => item && [item.name, item.workload, item.download, item.command, item.note].every(text) && isArticleReference(item.href));
  if (block.type === 'table') return Array.isArray(block.columns) && block.columns.length > 1 && block.columns.every(text)
    && Array.isArray(block.rows) && block.rows.length > 0
    && block.rows.every(row => Array.isArray(row) && row.length === block.columns.length && row.every(text));
  if (block.type === 'links') return Array.isArray(block.items) && block.items.length > 0
    && block.items.every(item => item && text(item.text) && typeof item.href === 'string'
      && (internalLink(item.href) || isArticleReference(item.href)));
  return block.type === 'image' && publicImage(block.src) && text(block.alt)
    && (block.presentation === undefined || block.presentation === 'panel' || block.presentation === 'diagram');
}

// Drafts and incomplete translations stay out of pages, search, counts and sitemap.
export function isPublishableArticle(article: EditorialArticle) {
  return article.published === true && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(article.id)
    && Object.hasOwn(articlePaths, article.kind) && validDate(article.date)
    && (!article.updated || (validDate(article.updated) && article.updated >= article.date))
    && publicImage(article.image) && SUPPORTED_LANGUAGES.every(language => {
      const copy = article.translations?.[language];
      return copy && text(copy.title) && text(copy.excerpt) && text(copy.imageAlt)
        && (copy.presentation === undefined || copy.presentation === 'guide')
        && (copy.image === undefined || publicImage(copy.image))
        && (copy.imageCredit === undefined || (text(copy.imageCredit.text) && isArticleReference(copy.imageCredit.href)))
        && (copy.metaTitle === undefined || text(copy.metaTitle)) && (copy.metaDescription === undefined || text(copy.metaDescription))
        && (copy.cta === undefined || ([copy.cta.title, copy.cta.description, copy.cta.label].every(text) && internalLink(copy.cta.href)))
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
