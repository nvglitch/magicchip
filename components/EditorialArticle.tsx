import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { articlePaths, type EditorialArticle as Article } from '@/lib/editorial';
import { editorialCopy } from '@/lib/editorial-copy';
import { articlePresentationCopy } from '@/lib/article-presentation-copy';
import type { Language } from '@/lib/i18n/config';
import { localizedHref } from '@/lib/i18n/routing';
import { ArticleCards } from '@/components/ArticleListing';
import ArticleEntrance from '@/components/ArticleEntrance';
import ArticleToc from '@/components/ArticleToc';

export default function EditorialArticle({ article, language, related = [] }: { article: Article; language: Language; related?: Article[] }) {
  const words = editorialCopy[language];
  const presentation = articlePresentationCopy[language];
  const copy = article.translations[language];
  const guide = copy.presentation === 'guide';
  const headings = copy.body.flatMap((block, index) => block.type === 'heading' && block.level !== 3 ? [{ text: guide ? block.text.replace(/^\d+\.\s+/, '') : block.text, id: `section-${index}` }] : []);
  const date = (value: string) => new Intl.DateTimeFormat(language, { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(new Date(`${value}T00:00:00Z`));
  const contents = <ArticleToc headings={headings} label={presentation.contents} />;

  return <div data-analytics-article={article.id} data-editorial-guide={guide || undefined} className={`${guide ? 'bg-[#f6f8fa]' : 'bg-[#edf2f6]'} text-slate-950`}>
    <article>
      <header className="relative overflow-hidden bg-[#101e31] text-white" style={{ backgroundImage: 'radial-gradient(circle at 85% 15%, rgba(26,129,190,.24), transparent 44%), linear-gradient(125deg,#17283d,#101b2d 62%,#0d304a)' }}>
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-[0.045]" style={{ backgroundImage: 'linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)', backgroundSize: '36px 36px' }} />
        <div className="relative mx-auto max-w-7xl px-4 py-9 sm:px-6 md:py-12 lg:px-8">
          <Link href={localizedHref(articlePaths[article.kind], language)} className="inline-flex items-center gap-2 text-sm text-blue-100/75 hover:text-white"><ArrowLeft aria-hidden="true" className="h-4 w-4" />{words.back}</Link>
          <div className="mt-8 grid items-center gap-8 lg:grid-cols-[1.25fr_.75fr] lg:gap-12">
            <ArticleEntrance>
              <h1 className="text-3xl font-bold leading-tight tracking-tight md:text-4xl lg:text-5xl">{copy.title}</h1>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg md:leading-8">{copy.excerpt}</p>
              <p className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-blue-100/60"><time dateTime={article.date}>{date(article.date)}</time>{article.updated && article.updated !== article.date && <span>{words.updated}: <time dateTime={article.updated}>{date(article.updated)}</time></span>}</p>
            </ArticleEntrance>
            <figure className={`overflow-hidden rounded-2xl border bg-white ${guide ? 'border-slate-200' : 'border-white/15 shadow-xl shadow-black/10'}`}><img src={copy.image || article.image} alt={copy.imageAlt} width={720} height={450} className="aspect-[8/5] w-full object-contain" />{copy.imageCredit && <figcaption className="border-t border-slate-100 px-4 py-3 text-xs text-slate-500"><a href={copy.imageCredit.href} className="underline underline-offset-2 hover:text-brand">{copy.imageCredit.text}</a></figcaption>}</figure>
          </div>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl items-start gap-8 px-4 py-9 sm:px-6 md:py-12 lg:grid-cols-[minmax(0,1fr)_240px] lg:px-8">
        <div className="min-w-0 overflow-hidden rounded-2xl border border-slate-200/80 bg-white px-5 py-7 shadow-sm sm:px-8 md:px-10 md:py-10">
          {headings.length > 0 && <details className="mb-8 rounded-xl border border-blue-100 bg-[#f1f7fc] p-4 lg:hidden"><summary className="cursor-pointer text-sm font-semibold text-slate-800">{presentation.contents}</summary><div className="mt-4">{contents}</div></details>}
          <div data-article-body className={guide ? 'text-base leading-7 text-slate-700' : 'space-y-7 text-base leading-8 text-slate-700'}>
            {copy.body.map((block, index) => {
              if (block.type === 'heading') return block.level === 3
                ? <h3 key={index} className={guide ? 'mb-2 mt-7 text-xl font-medium leading-snug text-slate-950' : 'pt-2 text-lg font-semibold leading-snug text-slate-950'}>{block.text}</h3>
                : <h2 id={`section-${index}`} key={index} className={guide ? 'mb-4 mt-10 scroll-mt-28 text-2xl font-semibold leading-snug text-slate-950' : 'scroll-mt-28 border-t border-slate-100 pt-7 text-2xl font-bold leading-snug text-slate-950'}>{block.text}</h2>;
              if (block.type === 'paragraph') return <p key={index} className={guide ? 'mb-4 whitespace-pre-line' : 'whitespace-pre-line'}>{block.text}</p>;
              if (block.type === 'list') {
                const List = block.ordered ? 'ol' : 'ul';
                return <List key={index} start={block.ordered ? block.start : undefined} className={`${block.ordered ? 'list-decimal' : 'list-disc'} ${guide ? 'my-4 space-y-2 pl-6 text-base leading-7 marker:text-slate-500' : 'space-y-3 rounded-xl bg-[#f2f7fb] py-5 pl-9 pr-5 text-[15px] leading-7 marker:text-brand'}`}>{block.items.map((item, i) => <li key={i}>{item}</li>)}</List>;
              }
              if (block.type === 'code') return <pre key={index} className="my-4 overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm leading-7 text-slate-800"><code>{block.text}</code></pre>;
              if (block.type === 'cards') return <div key={index} className="my-6 grid gap-4 sm:grid-cols-2">{block.items.map(item => <div key={item.title} className="rounded-xl border border-slate-200 bg-slate-50/70 p-5"><h3 className={item.subtitle ? 'text-3xl font-semibold text-brand' : 'text-base font-semibold text-slate-950'}>{item.title}</h3>{item.subtitle && <p className="mt-3 text-sm font-semibold leading-6 text-slate-900">{item.subtitle}</p>}<p className="mt-2 text-sm leading-6 text-slate-600">{item.text}</p></div>)}</div>;
              if (block.type === 'models') return <div key={index} className="my-6 grid gap-5 sm:grid-cols-2">{block.items.map(item => <section key={item.command} className="min-w-0 rounded-xl border border-slate-200 p-5"><h3 className="text-lg font-semibold leading-6 text-slate-950"><a href={item.href} className="underline decoration-slate-300 underline-offset-4 hover:text-brand">{item.name}</a></h3><p className="mt-3 text-sm leading-6 text-slate-600">{item.workload}</p><p className="mt-3 text-sm font-medium leading-6 text-slate-800">{item.download}</p><pre className="mt-4 overflow-x-auto rounded-lg bg-slate-50 p-3 text-xs leading-6 text-slate-800"><code>{item.command}</code></pre><p className="mt-3 text-xs leading-6 text-slate-500">{item.note}</p></section>)}</div>;
              if (block.type === 'table') return <div key={index} className={`${guide ? 'my-6 ' : ''}overflow-x-auto rounded-xl border border-blue-100`}>
                <table className="w-full min-w-[540px] text-left text-sm leading-6">
                  <thead className="bg-[#17283d] text-white"><tr>{block.columns.map((column, i) => <th key={i} scope="col" className="px-4 py-4 font-semibold">{column}</th>)}</tr></thead>
                  <tbody>{block.rows.map((row, i) => <tr key={i} className={i % 2 ? 'bg-blue-50/60' : 'bg-white'}>{row.map((cell, j) => j === 0 ? <th key={j} scope="row" className="px-4 py-4 align-top font-semibold text-slate-950">{cell}</th> : <td key={j} className="px-4 py-4 align-top">{cell}</td>)}</tr>)}</tbody>
                </table>
              </div>;
              if (block.type === 'links') return <ul key={index} className={`${guide ? 'my-4 ' : ''}grid gap-3 sm:grid-cols-2`}>{block.items.map(item => <li key={item.href}><Link href={localizedHref(item.href, language)} className={guide ? 'inline-flex items-center gap-2 text-sm font-medium leading-6 text-brand underline underline-offset-4' : 'flex h-full items-center justify-between gap-3 rounded-xl border border-blue-100 bg-blue-50/60 px-4 py-3 text-sm font-semibold leading-6 text-brand transition-colors hover:border-blue-300 hover:bg-blue-50'}>{item.text}<ArrowRight aria-hidden="true" className="h-4 w-4 shrink-0" /></Link></li>)}</ul>;
              return <figure key={index} className="overflow-hidden rounded-xl border border-slate-200 bg-[#f3f7fa]">
                <img src={block.src} alt={block.alt} loading="lazy" width={block.presentation === 'diagram' ? 960 : 1200} height={block.presentation === 'diagram' ? 540 : 600} className={block.presentation === 'panel' ? 'aspect-[2/1] w-full bg-white object-cover' : 'max-h-[460px] w-full object-contain'} />
                {block.caption && <figcaption className="border-t border-slate-200 bg-[#f5f8fa] px-4 py-3 text-xs leading-6 text-slate-500">{block.caption}</figcaption>}
              </figure>;
            })}
          </div>
          {copy.cta && <section data-article-cta className="mt-12 border-t border-slate-200 pt-8"><h2 className="text-2xl font-semibold leading-snug text-slate-950">{copy.cta.title}</h2><p className="mt-3 text-base leading-7 text-slate-600">{copy.cta.description}</p><Link href={localizedHref(copy.cta.href, language)} className="liquid-cta liquid-cta-solid mt-6 inline-flex items-center justify-center gap-3 px-6 py-3 font-semibold"><span>{copy.cta.label}</span><ArrowRight aria-hidden="true" className="h-4 w-4" /></Link></section>}
          {!guide && <div className="mt-12 flex flex-wrap items-center justify-between gap-5 border-t border-slate-200 pt-6">
            <Link href={localizedHref(articlePaths[article.kind], language)} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-brand"><ArrowLeft aria-hidden="true" className="h-4 w-4" />{words.back}</Link>
            <Link href={localizedHref('/contact', language)} className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-hover">{words.contact}<ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>
          </div>}
        </div>

        <aside data-article-toc className="sticky top-24 hidden self-start lg:block">
          {headings.length > 0 && <div className="rounded-2xl border border-slate-200 bg-white p-5"><h2 className="mb-5 text-sm font-bold text-slate-950">{presentation.contents}</h2>{contents}</div>}
        </aside>
      </div>
    </article>
    {related.length > 0 && <section className="border-t border-slate-200 bg-[#e6eef4] py-14"><div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><h2 className="mb-8 text-2xl font-semibold">{words.related}</h2><ArticleCards articles={related} language={language} /></div></section>}
  </div>;
}
