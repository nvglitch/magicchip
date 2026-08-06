'use client';

import { FormEvent, KeyboardEvent, RefObject, useEffect, useId, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight, FileText, Grid3X3, Map, Package, Search, X } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { SearchEntry, SearchEntryType, searchSite } from '@/lib/site-search';

type SiteSearchProps = {
  variant?: 'header' | 'mobile';
  onNavigate?: () => void;
};

const labels = {
  en: { noResults: 'No matching pages or products', allResults: 'View all results', close: 'Close search', types: { product: 'Product', category: 'Category', scenario: 'Scenario', page: 'Page', resource: 'Resource' } },
  fr: { noResults: 'Aucun produit ou page correspondant', allResults: 'Voir tous les résultats', close: 'Fermer la recherche', types: { product: 'Produit', category: 'Catégorie', scenario: 'Scénario', page: 'Page', resource: 'Ressource' } },
  de: { noResults: 'Keine passenden Seiten oder Produkte', allResults: 'Alle Ergebnisse anzeigen', close: 'Suche schließen', types: { product: 'Produkt', category: 'Kategorie', scenario: 'Szenario', page: 'Seite', resource: 'Ressource' } },
  it: { noResults: 'Nessuna pagina o prodotto corrispondente', allResults: 'Vedi tutti i risultati', close: 'Chiudi ricerca', types: { product: 'Prodotto', category: 'Categoria', scenario: 'Scenario', page: 'Pagina', resource: 'Risorsa' } },
  es: { noResults: 'No hay páginas o productos coincidentes', allResults: 'Ver todos los resultados', close: 'Cerrar búsqueda', types: { product: 'Producto', category: 'Categoría', scenario: 'Escenario', page: 'Página', resource: 'Recurso' } },
};

const typeIcons: Record<SearchEntryType, typeof Package> = {
  product: Package,
  category: Grid3X3,
  scenario: Map,
  page: FileText,
  resource: FileText,
};

export default function SiteSearch({ variant = 'header', onNavigate }: SiteSearchProps) {
  const { t, language } = useLanguage();
  const router = useRouter();
  const rootRef = useRef<HTMLDivElement>(null);
  const compactInputRef = useRef<HTMLInputElement>(null);
  const listId = useId();
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isCompactOpen, setIsCompactOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const text = labels[language] || labels.en;
  const results = useMemo(() => searchSite(query).slice(0, 6), [query]);

  useEffect(() => setActiveIndex(-1), [query]);

  useEffect(() => {
    const closeOnOutside = (event: PointerEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) setIsOpen(false);
    };
    const closeOnEscape = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
        setIsCompactOpen(false);
      }
    };
    document.addEventListener('pointerdown', closeOnOutside);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOnOutside);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, []);

  useEffect(() => {
    if (isCompactOpen) requestAnimationFrame(() => compactInputRef.current?.focus());
  }, [isCompactOpen]);

  const closeSearch = () => {
    setIsOpen(false);
    setIsCompactOpen(false);
    onNavigate?.();
  };

  const navigateTo = (href: string) => {
    closeSearch();
    router.push(href);
  };

  const submitSearch = (event: FormEvent) => {
    event.preventDefault();
    if (!query.trim()) return;
    if (activeIndex >= 0 && results[activeIndex]) navigateTo(results[activeIndex].href);
    else navigateTo(`/search?q=${encodeURIComponent(query.trim())}`);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (!results.length) return;
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setIsOpen(true);
      setActiveIndex(index => (index + 1) % results.length);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setIsOpen(true);
      setActiveIndex(index => index <= 0 ? results.length - 1 : index - 1);
    }
  };

  const resultList = (position: 'floating' | 'static') => query.trim() && isOpen && (
    <div
      id={listId}
      role="listbox"
      className={`${position === 'floating' ? 'absolute right-0 top-[calc(100%+0.65rem)] w-[min(26rem,calc(100vw-2rem))]' : 'mt-3 w-full'} overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_60px_-24px_rgba(15,23,42,0.45)]`}
    >
      {results.length > 0 ? (
        <>
          <div className="max-h-[26rem] overflow-y-auto p-2">
            {results.map((result, index) => (
              <SearchResult
                key={result.href}
                result={result}
                typeLabel={text.types[result.type]}
                active={index === activeIndex}
                onMouseEnter={() => setActiveIndex(index)}
                onNavigate={closeSearch}
              />
            ))}
          </div>
          <Link
            href={`/search?q=${encodeURIComponent(query.trim())}`}
            onClick={closeSearch}
            className="flex items-center justify-between border-t border-slate-100 bg-slate-50 px-4 py-3 text-sm font-semibold text-blue-700 transition-colors hover:bg-blue-50"
          >
            {text.allResults}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </>
      ) : (
        <div className="px-5 py-6 text-center text-sm text-slate-500">{text.noResults}</div>
      )}
    </div>
  );

  const searchForm = (inputRef?: RefObject<HTMLInputElement>) => (
    <form onSubmit={submitSearch} className="flex w-full items-center gap-2 rounded-full border border-slate-200 bg-slate-50/90 px-3 py-2 shadow-sm transition-all focus-within:border-blue-300 focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-100/70">
      <Search className="h-4 w-4 shrink-0 text-slate-400" aria-hidden="true" />
      <input
        ref={inputRef}
        type="search"
        value={query}
        onChange={event => {
          setQuery(event.target.value);
          setIsOpen(true);
        }}
        onFocus={() => query.trim() && setIsOpen(true)}
        onKeyDown={handleKeyDown}
        placeholder={t.nav.searchPlaceholder}
        aria-label={t.nav.searchAriaLabel}
        aria-autocomplete="list"
        aria-controls={listId}
        aria-expanded={Boolean(query.trim() && isOpen)}
        className="min-w-0 flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
      />
      {query && (
        <button type="button" onClick={() => setQuery('')} className="rounded-full p-0.5 text-slate-400 hover:bg-slate-200 hover:text-slate-700" aria-label={text.close}>
          <X className="h-3.5 w-3.5" />
        </button>
      )}
    </form>
  );

  if (variant === 'mobile') {
    return (
      <div ref={rootRef} className="relative pb-3">
        {searchForm()}
        {resultList('static')}
      </div>
    );
  }

  return (
    <div ref={rootRef} className="relative">
      <div className="hidden w-40 xl:block 2xl:w-56">
        {searchForm()}
        {resultList('floating')}
      </div>

      <button
        type="button"
        onClick={() => {
          setIsCompactOpen(true);
          setIsOpen(Boolean(query.trim()));
        }}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 shadow-sm transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 sm:h-10 sm:w-10 xl:hidden"
        aria-label={t.nav.searchAriaLabel}
      >
        <Search className="h-[18px] w-[18px]" />
      </button>

      {isCompactOpen && (
        <div className="fixed inset-0 z-[70] flex items-start justify-center bg-slate-950/35 px-4 pt-20 backdrop-blur-sm sm:pt-24 xl:hidden">
          <button type="button" className="absolute inset-0" onClick={() => setIsCompactOpen(false)} aria-label={text.close} />
          <div className="relative w-full max-w-xl rounded-3xl border border-white/70 bg-white p-4 shadow-2xl">
            <div className="flex items-center gap-3">
              {searchForm(compactInputRef)}
              <button type="button" onClick={() => setIsCompactOpen(false)} className="rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-800" aria-label={text.close}>
                <X className="h-5 w-5" />
              </button>
            </div>
            {resultList('static')}
          </div>
        </div>
      )}
    </div>
  );
}

function SearchResult({ result, typeLabel, active, onMouseEnter, onNavigate }: {
  result: SearchEntry;
  typeLabel: string;
  active: boolean;
  onMouseEnter: () => void;
  onNavigate: () => void;
}) {
  const Icon = typeIcons[result.type];
  return (
    <Link
      href={result.href}
      role="option"
      aria-selected={active}
      onMouseEnter={onMouseEnter}
      onClick={onNavigate}
      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors ${active ? 'bg-blue-50' : 'hover:bg-slate-50'}`}
    >
      {result.image ? (
        <div className="relative h-12 w-16 shrink-0 overflow-hidden rounded-lg border border-slate-100 bg-white">
          <Image src={result.image} alt="" fill sizes="64px" className="object-contain" />
        </div>
      ) : (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100 text-slate-500">
          <Icon className="h-5 w-5" />
        </div>
      )}
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="truncate text-sm font-semibold text-slate-900">{result.title}</span>
          <span className="shrink-0 rounded-full bg-slate-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-slate-500">{typeLabel}</span>
        </div>
        <p className="mt-0.5 line-clamp-1 text-xs text-slate-500">{result.description}</p>
      </div>
      <ArrowRight className={`h-4 w-4 shrink-0 transition-transform ${active ? 'translate-x-0.5 text-blue-600' : 'text-slate-300'}`} />
    </Link>
  );
}
