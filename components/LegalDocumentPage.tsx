'use client';

import Link from '@/components/LocalizedLink';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { LEGAL_UPDATED, legalNavigation, legalPaths, legalRoutes } from '@/lib/legal-navigation';
import type { LegalDocument, LegalDocumentId } from '@/lib/legal-navigation';
import type { Language } from '@/lib/i18n/config';

export default function LegalDocumentPage({ documentId, documents }: {
  documentId: LegalDocumentId;
  documents: Record<Language, LegalDocument>;
}) {
  const { language } = useLanguage();
  const labels = legalNavigation[language];
  const document = documents[language];
  const updated = new Intl.DateTimeFormat(language, { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' }).format(new Date(`${LEGAL_UPDATED}T00:00:00Z`));

  return (
    <div className="bg-white text-slate-900">
      <header className="bg-[#101827] py-14 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="max-w-4xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">{labels[documentId]}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-300">{document.introduction}</p>
          <p className="mt-6 text-sm text-slate-400">{labels.updated}: <time dateTime={LEGAL_UPDATED}>{updated}</time></p>
        </div>
      </header>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:py-16 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-16 lg:px-8">
        <aside>
          <nav aria-label={labels.contents} className="rounded-xl border border-slate-200 bg-slate-50 p-5 lg:sticky lg:top-24">
            <h2 className="font-semibold">{labels.contents}</h2>
            <ol className="mt-4 space-y-3 text-sm leading-6">
              {document.sections.map(section => (
                <li key={section.id}>
                  <Link href={`#${section.id}`} className="block text-slate-600 transition-colors hover:text-brand-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">{section.title}</Link>
                </li>
              ))}
            </ol>
          </nav>
        </aside>

        <article className="min-w-0 max-w-3xl space-y-10">
          {document.sections.map(section => (
            <section id={section.id} key={section.id} className="scroll-mt-24 border-b border-slate-200 pb-10 last:border-0 last:pb-0">
              <h2 className="text-2xl font-semibold leading-snug">{section.title}</h2>
              <div className="mt-4 space-y-4 text-base leading-8 text-slate-600">
                {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                {section.items && <ul className="list-disc space-y-2 pl-5">{section.items.map(item => <li key={item}>{item}</li>)}</ul>}
                {section.links && <ul className="space-y-2">{section.links.map(link => (
                  <li key={link.href}><Link href={link.href} className="break-words text-brand underline decoration-blue-200 underline-offset-4 hover:text-brand-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">{link.label}</Link></li>
                ))}</ul>}
              </div>
            </section>
          ))}

          <nav aria-label={labels.navigation} className="flex flex-wrap gap-x-6 gap-y-3 border-t border-slate-200 pt-6 text-sm">
            {legalRoutes.filter(id => id !== documentId).map(id => <Link key={id} href={legalPaths[id]} className="text-brand underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">{labels[id]}</Link>)}
          </nav>
        </article>
      </div>
    </div>
  );
}
