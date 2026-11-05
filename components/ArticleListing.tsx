import Link from 'next/link';
import { ArrowRight, BookOpen, FolderOpen } from 'lucide-react';
import ResourceHero from '@/components/ResourceHero';
import { articlePaths, type ArticleKind, type EditorialArticle } from '@/lib/editorial';
import { editorialCopy } from '@/lib/editorial-copy';
import { localizedHref } from '@/lib/i18n/routing';
import type { Language } from '@/lib/i18n/config';

export function ArticleCards({ articles, language }: { articles: EditorialArticle[]; language: Language }) {
  const words = editorialCopy[language];
  return <div className="grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
    {articles.map(article => {
      const copy = article.translations[language];
      return <article key={article.id} className="group flex min-w-0 flex-col border-b border-slate-200 pb-7">
        <Link href={localizedHref(`${articlePaths[article.kind]}/${article.id}`, language)} className="block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">
          <div className="overflow-hidden bg-slate-100"><img src={article.image} alt={copy.imageAlt} width={720} height={450} loading="lazy" className="aspect-[8/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.025] motion-reduce:transform-none" /></div>
          <div className="mt-5">
            <time dateTime={article.date} className="text-sm text-slate-500">{new Intl.DateTimeFormat(language, { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' }).format(new Date(`${article.date}T00:00:00Z`))}</time>
            <h2 className="mt-2 text-xl font-semibold leading-snug text-slate-950 transition-colors group-hover:text-brand">{copy.title}</h2>
          </div>
        </Link>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-slate-600">{copy.excerpt}</p>
        <Link href={localizedHref(`${articlePaths[article.kind]}/${article.id}`, language)} aria-label={`${words.readMore}: ${copy.title}`} className="mt-5 inline-flex items-center gap-2 self-start text-sm font-semibold text-brand hover:text-brand-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">
          {words.readMore}<ArrowRight aria-hidden="true" className="h-4 w-4" />
        </Link>
      </article>;
    })}
  </div>;
}

export default function ArticleListing({ kind, language, articles, page = 1, totalPages = 1 }: { kind: ArticleKind; language: Language; articles: EditorialArticle[]; page?: number; totalPages?: number }) {
  const words = editorialCopy[language];
  const copy = words[kind];
  const Icon = kind === 'technical' ? BookOpen : FolderOpen;
  const pageHref = (number: number) => localizedHref(`${articlePaths[kind]}${number > 1 ? `?page=${number}` : ''}`, language);
  return <div className="min-h-screen bg-[#f3f7f5] text-slate-950">
    <ResourceHero title={copy.title} description={words.heroDescriptions[kind]} />
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-28 lg:px-8" aria-label={copy.title}>
      {articles.length ? <ArticleCards articles={articles} language={language} /> : <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-[#f8faf9] px-6 py-20 text-center shadow-sm md:px-12 md:py-24">
        <div className="mb-7 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/20"><Icon aria-hidden="true" className="h-8 w-8" /></div>
        <h2 className="text-2xl font-semibold leading-relaxed text-slate-900">{copy.emptyTitle}</h2>
        <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-slate-600">{copy.emptyText}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href={localizedHref('/contact', language)} className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-blue-600/20 transition-colors hover:bg-blue-700">{words.contact}<ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
          <Link href={localizedHref('/products', language)} className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-brand hover:border-blue-300">{words.products}</Link>
        </div>
      </div>}
      {totalPages > 1 && <nav aria-label={words.pagination} className="mt-14 flex flex-wrap items-center justify-center gap-3 border-t border-slate-200 pt-8 text-sm">
        {page > 1 && <Link rel="prev" href={pageHref(page - 1)} className="border border-slate-200 px-4 py-2 hover:border-blue-600 hover:text-brand">{words.previous}</Link>}
        <span aria-current="page" className="px-3 text-slate-600">{words.page} {page} {words.of} {totalPages}</span>
        {page < totalPages && <Link rel="next" href={pageHref(page + 1)} className="border border-slate-200 px-4 py-2 hover:border-blue-600 hover:text-brand">{words.next}</Link>}
      </nav>}
    </section>
  </div>;
}
