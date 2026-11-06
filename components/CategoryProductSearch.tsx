'use client';

import { type FormEvent, useMemo, useRef, useState } from 'react';
import { ArrowRight, Search, X } from 'lucide-react';
import Link from '@/components/LocalizedLink';
import type { Language } from '@/lib/i18n/config';
import { categoryResultCopy, categorySearchTerms, hasSearchTerm, searchCategory, toggleSearchTerm } from '@/lib/category-search';
import { categorySearchCopy, categorySearchExamples } from '@/lib/category-search-copy';

export default function CategoryProductSearch({ category, language }: { category: string; language: Language }) {
  const [query, setQuery] = useState('');
  const [limit, setLimit] = useState(6);
  const input = useRef<HTMLInputElement>(null);
  const status = useRef<HTMLParagraphElement>(null);
  const words = categorySearchCopy[language];
  const results = useMemo(() => searchCategory(query, category), [query, category]);
  const update = (next: string) => { setQuery(next.slice(0, 300)); setLimit(6); };
  const submit = (event: FormEvent) => { event.preventDefault(); if (query.trim()) status.current?.focus(); else input.current?.focus(); };

  return <div className="p-6 sm:p-8" data-category-search={category}>
    <h3 id="selection-heading" className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">{words.title}</h3>
    <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">{words.intro}</p>
    <form onSubmit={submit} role="search" aria-label={words.input} className="mt-6 flex items-center gap-2 rounded-xl border border-blue-200 bg-[#f5f9fc] p-2 shadow-sm focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-50">
      <Search aria-hidden="true" className="ml-2 hidden h-6 w-6 shrink-0 text-brand sm:block" />
      <input ref={input} type="search" data-category-query value={query} maxLength={300} onChange={event => update(event.target.value)} aria-label={words.input} aria-describedby="category-search-help" aria-controls="category-search-results" placeholder={categorySearchExamples[category]} className="min-w-0 flex-1 bg-transparent px-2 py-3 text-base text-slate-950 outline-none placeholder:text-slate-400 sm:px-3 sm:text-lg" />
      {query && <button type="button" aria-label={words.clear} onClick={() => { update(''); input.current?.focus(); }} className="rounded-lg p-2 text-slate-400 hover:bg-white hover:text-slate-700"><X aria-hidden="true" className="h-4 w-4" /></button>}
      <button type="submit" className="rounded-lg bg-brand px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover sm:px-7 sm:text-base">{words.search}</button>
    </form>
    <fieldset className="mt-5"><legend className="mb-3 text-xs font-semibold text-slate-500">{words.quick}</legend><div className="flex flex-wrap gap-2">
      {(categorySearchTerms[category] || []).map(term => { const checked = hasSearchTerm(query, term); return <label key={term} className={`inline-flex min-h-11 cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 text-sm font-medium transition-colors ${checked ? 'border-blue-300 bg-blue-50 text-brand' : 'border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:bg-slate-50'}`}>
        <input type="checkbox" checked={checked} onChange={event => update(toggleSearchTerm(query, term, event.target.checked))} className="h-4 w-4 accent-brand" />{term === 'fanless' ? words.fanless : term}
      </label>; })}
    </div></fieldset>
    <p id="category-search-help" className="mt-3 text-xs leading-6 text-slate-500">{words.help}</p>

    <div id="category-search-results" className="mt-6 border-t border-slate-100 pt-5">
      <div className="flex flex-wrap items-center justify-between gap-3"><p ref={status} role="status" tabIndex={-1} aria-live="polite" className="text-sm text-slate-600 outline-none">{query.trim() ? `${results.length} ${results.length === 1 ? words.result : words.results}` : words.prompt}</p>
        {query.trim() && <Link href={`/search?q=${encodeURIComponent(query.trim())}`} className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-hover">{words.all}<ArrowRight aria-hidden="true" className="h-4 w-4" /></Link>}
      </div>
      {query.trim() && (results.length ? <div className="mt-5 grid gap-3 md:grid-cols-2">{results.slice(0, limit).map(result => { const copy = categoryResultCopy(result, language); return <Link key={result.href} href={result.href} className="group flex min-w-0 items-start gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-blue-300 hover:bg-blue-50/30">
        {result.image && <img src={result.image} alt="" loading="lazy" className="h-20 w-24 shrink-0 rounded-lg border border-slate-100 bg-white object-contain" />}
        <div className="min-w-0 flex-1"><h4 className="text-base font-bold text-slate-950 group-hover:text-brand">{copy.title}</h4>{copy.description && <p className="mt-1 line-clamp-2 text-xs leading-6 text-slate-500">{copy.description}</p>}{copy.evidence.map(evidence => <p key={evidence} className="mt-2 line-clamp-2 text-xs leading-5 text-slate-600">{evidence}</p>)}<span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-brand">{words.details}<ArrowRight aria-hidden="true" className="h-3.5 w-3.5" /></span></div>
      </Link>; })}</div> : <p className="mt-4 rounded-xl bg-slate-50 p-5 text-sm leading-7 text-slate-500">{words.empty}</p>)}
      {results.length > limit && <button type="button" onClick={() => setLimit(current => current + 6)} className="mt-5 rounded-lg border border-blue-200 bg-blue-50 px-5 py-2.5 text-sm font-semibold text-brand hover:bg-blue-100">{words.more} ({results.length - limit})</button>}
    </div>
  </div>;
}
