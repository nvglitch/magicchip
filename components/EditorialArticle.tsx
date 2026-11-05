import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { articlePaths, type EditorialArticle as Article } from '@/lib/editorial';
import { editorialCopy } from '@/lib/editorial-copy';
import type { Language } from '@/lib/i18n/config';
import { localizedHref } from '@/lib/i18n/routing';
import { ArticleCards } from '@/components/ArticleListing';

export default function EditorialArticle({ article, language, related = [] }: { article: Article; language: Language; related?: Article[] }) {
  const words = editorialCopy[language];
  const copy = article.translations[language];
  const date = (value: string) => new Intl.DateTimeFormat(language, { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T00:00:00Z`));
  return <div data-analytics-article={article.id} className="bg-white text-slate-950">
    <article>
      <header className="bg-[#f6f9fb]">
        <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 md:py-14 lg:px-8">
          <Link href={localizedHref(articlePaths[article.kind], language)} className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-brand"><ArrowLeft aria-hidden="true" className="h-4 w-4" />{words.back}</Link>
          <p className="mt-8 text-sm font-semibold text-brand">{words[article.kind].title}</p>
          <h1 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">{copy.title}</h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">{copy.excerpt}</p>
          <p className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-500"><time dateTime={article.date}>{date(article.date)}</time>{article.updated && article.updated !== article.date && <span>{words.updated}: <time dateTime={article.updated}>{date(article.updated)}</time></span>}</p>
        </div>
      </header>
      <div className="mx-auto max-w-4xl px-4 pb-16 pt-10 sm:px-6 md:pt-12 lg:px-8">
        <img src={article.image} alt={copy.imageAlt} width={1200} height={750} className="mb-10 aspect-[8/5] w-full object-cover" />
        <div className="space-y-6 text-base leading-8 text-slate-700 md:text-lg">
          {copy.body.map((block, index) => {
            if (block.type === 'heading') return <h2 key={index} className="pt-5 text-2xl font-semibold leading-snug text-slate-950 md:text-3xl">{block.text}</h2>;
            if (block.type === 'paragraph') return <p key={index} className="whitespace-pre-line">{block.text}</p>;
            if (block.type === 'list') return <ul key={index} className="list-disc space-y-2 pl-6 marker:text-brand">{block.items.map((item, i) => <li key={i}>{item}</li>)}</ul>;
            return <figure key={index} className="py-4"><img src={block.src} alt={block.alt} loading="lazy" width={1200} height={750} className="h-auto w-full" />{block.caption && <figcaption className="mt-3 text-sm leading-6 text-slate-500">{block.caption}</figcaption>}</figure>;
          })}
        </div>
        <div className="mt-14 flex flex-wrap items-center justify-between gap-5 border-t border-slate-200 pt-7">
          <Link href={localizedHref(articlePaths[article.kind], language)} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-brand"><ArrowLeft aria-hidden="true" className="h-4 w-4" />{words.back}</Link>
          <Link href={localizedHref('/contact', language)} className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-hover">{words.contact}<ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
        </div>
      </div>
    </article>
    {related.length > 0 && <section className="border-t border-slate-200 bg-[#f6f9fb] py-14"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><h2 className="mb-8 text-2xl font-semibold">{words.related}</h2><ArticleCards articles={related} language={language} /></div></section>}
  </div>;
}
