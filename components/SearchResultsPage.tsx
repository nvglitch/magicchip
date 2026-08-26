'use client';

import { FormEvent, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { ArrowRight, FileText, Grid3X3, Map, Package, Search } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { SearchEntryType, searchSite } from '@/lib/site-search';

const copy = {
  en: { eyebrow: 'SITE SEARCH', title: 'Search MagicChip', subtitle: 'Find products, application scenarios, documents, and company information.', resultsFor: 'Results for', found: 'results', empty: 'No matching results found.', emptyHint: 'Try a product model, category, application, or document keyword.', prompt: 'Enter a keyword to search the website.', types: { product: 'Product', category: 'Category', scenario: 'Scenario', page: 'Page', resource: 'Resource' } },
  fr: { eyebrow: 'RECHERCHE DU SITE', title: 'Rechercher sur MagicChip', subtitle: 'Trouvez des produits, scénarios, documents et informations sur l’entreprise.', resultsFor: 'Résultats pour', found: 'résultats', empty: 'Aucun résultat correspondant.', emptyHint: 'Essayez un modèle, une catégorie, une application ou un document.', prompt: 'Saisissez un mot-clé pour rechercher sur le site.', types: { product: 'Produit', category: 'Catégorie', scenario: 'Scénario', page: 'Page', resource: 'Ressource' } },
  de: { eyebrow: 'WEBSITE-SUCHE', title: 'MagicChip durchsuchen', subtitle: 'Finden Sie Produkte, Anwendungsszenarien, Dokumente und Unternehmensinformationen.', resultsFor: 'Ergebnisse für', found: 'Ergebnisse', empty: 'Keine passenden Ergebnisse gefunden.', emptyHint: 'Versuchen Sie ein Modell, eine Kategorie, eine Anwendung oder ein Dokument.', prompt: 'Geben Sie ein Stichwort für die Website-Suche ein.', types: { product: 'Produkt', category: 'Kategorie', scenario: 'Szenario', page: 'Seite', resource: 'Ressource' } },
  it: { eyebrow: 'RICERCA NEL SITO', title: 'Cerca in MagicChip', subtitle: 'Trova prodotti, scenari applicativi, documenti e informazioni aziendali.', resultsFor: 'Risultati per', found: 'risultati', empty: 'Nessun risultato corrispondente.', emptyHint: 'Prova un modello, una categoria, un’applicazione o un documento.', prompt: 'Inserisci una parola chiave per cercare nel sito.', types: { product: 'Prodotto', category: 'Categoria', scenario: 'Scenario', page: 'Pagina', resource: 'Risorsa' } },
  es: { eyebrow: 'BÚSQUEDA DEL SITIO', title: 'Buscar en MagicChip', subtitle: 'Encuentre productos, escenarios, documentos e información de la empresa.', resultsFor: 'Resultados para', found: 'resultados', empty: 'No se encontraron resultados.', emptyHint: 'Pruebe un modelo, categoría, aplicación o documento.', prompt: 'Introduzca una palabra clave para buscar en el sitio.', types: { product: 'Producto', category: 'Categoría', scenario: 'Escenario', page: 'Página', resource: 'Recurso' } },
};

const typeIcons: Record<SearchEntryType, typeof Package> = {
  product: Package,
  category: Grid3X3,
  scenario: Map,
  page: FileText,
  resource: FileText,
};

export default function SearchResultsPage() {
  const { t, language } = useLanguage();
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get('q')?.trim() || '';
  const [input, setInput] = useState(query);
  const text = copy[language] || copy.en;
  const results = useMemo(() => searchSite(query), [query]);

  useEffect(() => setInput(query), [query]);

  const submit = (event: FormEvent) => {
    event.preventDefault();
    const nextQuery = input.trim();
    if (nextQuery) router.push(`/search?q=${encodeURIComponent(nextQuery)}`);
  };

  return (
    <main className="min-h-screen bg-[#f3f7f5] text-slate-950">
      <section className="relative isolate overflow-hidden bg-[#101827] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_75%_20%,rgba(37,99,235,0.3),transparent_34%),radial-gradient(circle_at_15%_90%,rgba(20,184,166,0.12),transparent_28%)]" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 md:py-20 lg:px-8">
          <p className="text-sm font-bold tracking-normal text-blue-300">{text.eyebrow}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">{text.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">{text.subtitle}</p>
          <form onSubmit={submit} className="mt-8 flex max-w-3xl items-center rounded-2xl border border-white/20 bg-white p-2 shadow-2xl shadow-slate-950/30">
            <Search className="ml-3 h-5 w-5 shrink-0 text-slate-400" />
            <input value={input} onChange={event => setInput(event.target.value)} placeholder={t.nav.searchPlaceholder} aria-label={t.nav.searchAriaLabel} className="min-w-0 flex-1 bg-transparent px-3 py-3 text-base text-slate-900 outline-none placeholder:text-slate-400" autoFocus />
            <button type="submit" className="rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500">{text.title}</button>
          </form>
        </div>
      </section>

      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {query ? (
            <>
              <div className="mb-7 flex flex-wrap items-baseline justify-between gap-3 border-b border-slate-200 pb-5">
                <h2 className="text-2xl font-bold">{text.resultsFor} “{query}”</h2>
                <span className="text-sm font-medium text-slate-500">{results.length} {text.found}</span>
              </div>
              {results.length ? (
                <div className="grid gap-4 md:grid-cols-2">
                  {results.map(result => {
                    const Icon = typeIcons[result.type];
                    return (
                      <Link key={result.href} href={result.href} className="group flex min-h-36 items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-lg">
                        {result.image ? (
                          <div className="relative h-24 w-32 shrink-0 overflow-hidden rounded-xl border border-slate-100 bg-white">
                            <Image src={result.image} alt="" fill sizes="128px" className="object-contain p-1" />
                          </div>
                        ) : (
                          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600"><Icon className="h-6 w-6" /></div>
                        )}
                        <div className="min-w-0 flex-1">
                          <span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-normal text-slate-500">{text.types[result.type]}</span>
                          <h3 className="mt-3 text-lg font-bold text-slate-950 group-hover:text-blue-700">{result.title}</h3>
                          <p className="mt-1 line-clamp-2 text-sm leading-6 text-slate-600">{result.description}</p>
                        </div>
                        <ArrowRight className="h-5 w-5 shrink-0 text-slate-300 transition-transform group-hover:translate-x-1 group-hover:text-blue-600" />
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <div className="rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
                  <Search className="mx-auto h-10 w-10 text-slate-300" />
                  <h2 className="mt-5 text-xl font-bold">{text.empty}</h2>
                  <p className="mt-2 text-slate-500">{text.emptyHint}</p>
                </div>
              )}
            </>
          ) : (
            <div className="rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
              <Search className="mx-auto h-10 w-10 text-blue-500" />
              <p className="mt-5 text-lg font-medium text-slate-600">{text.prompt}</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
