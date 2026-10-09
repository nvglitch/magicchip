'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { scenarios } from '@/lib/scenarios';
import { scenarioCopy } from '@/lib/scenario-copy';
import { scenarioIcons } from '@/lib/scenario-icons';

export default function ScenariosPage() {
  const { language } = useLanguage();
  const text = scenarioCopy[language];

  return (
    <main className="min-h-screen bg-[#f3f7f5] text-slate-950">
      <section className="relative isolate overflow-hidden bg-[#101827] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_20%,rgba(37,99,235,0.3),transparent_34%),radial-gradient(circle_at_15%_85%,rgba(245,158,11,0.14),transparent_28%)]" />
        <div className="absolute inset-0 -z-10 opacity-20 tech-pattern-overlay" />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-28 lg:px-8">
          <div className="max-w-4xl">
            <div className="mb-7 h-px w-24 bg-gradient-to-r from-amber-400 to-transparent" />
            <h1 className="break-words text-4xl font-bold tracking-tight sm:text-5xl md:text-7xl">{text.title}</h1>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-slate-300 md:text-2xl">{text.subtitle}</p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav aria-label={text.browse} className="mb-10 flex flex-wrap gap-2">
            {scenarios.map(scenario => {
              const Icon = scenarioIcons[scenario.id];
              return (
                <a key={scenario.id} href={`#${scenario.id}`} className="inline-flex items-center gap-2 rounded-lg border border-blue-100 bg-white px-3 py-2.5 text-sm font-medium text-slate-700 transition-colors hover:border-blue-300 hover:text-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
                  <Icon aria-hidden="true" className="h-4 w-4 shrink-0 text-blue-600" />
                  {text.items[scenario.id].title}
                </a>
              );
            })}
          </nav>
          <div className="grid gap-6 lg:grid-cols-2">
            {scenarios.map(scenario => {
              const item = text.items[scenario.id];
              const Icon = scenarioIcons[scenario.id];
              return (
                <article id={scenario.id} key={scenario.id} aria-labelledby={`${scenario.id}-title`} className="flex scroll-mt-24 flex-col overflow-hidden rounded-lg border border-blue-100 bg-white">
                  <div className="p-6 sm:p-8">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                        <Icon aria-hidden="true" className="h-6 w-6" />
                      </div>
                      <h2 id={`${scenario.id}-title`} className="text-2xl font-bold leading-tight text-slate-950">{item.title}</h2>
                    </div>
                    <p className="mt-5 leading-relaxed text-slate-600">{item.description}</p>
                    <h3 className="mt-6 font-semibold text-slate-900">{text.applications}</h3>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {item.applications.map(application => <li key={application} className="rounded-md bg-slate-100 px-3 py-1.5 text-sm text-slate-700">{application}</li>)}
                    </ul>
                    <h3 className="mt-6 font-semibold text-slate-900">{text.selection}</h3>
                    <ul className="mt-3 space-y-3 text-sm leading-6 text-slate-600">
                      {item.selection.map(check => (
                        <li key={check} className="flex items-start gap-2.5">
                          <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0 text-blue-600" />
                          <span>{check}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto border-t border-blue-100 bg-slate-50/60 p-6 sm:p-8">
                    <h3 className="font-semibold text-slate-900">{text.recommended}</h3>
                    <ul className="mt-4 space-y-2">
                      {scenario.products.map((product, index) => (
                        <li key={product.href}>
                          <Link href={product.href} className="group flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3 transition-colors hover:border-blue-300 hover:bg-blue-50/40 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:gap-4">
                            <div className="relative h-14 w-16 shrink-0 overflow-hidden rounded-md bg-white sm:h-16 sm:w-20">
                              <Image src={product.image} alt={product.name} fill sizes="(max-width: 639px) 64px, 80px" className="object-contain p-1" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="font-semibold text-slate-950 group-hover:text-blue-700">{product.name}</p>
                              <p className="mt-1 text-sm leading-5 text-slate-600">{item.reasons[index]}</p>
                            </div>
                            <ArrowRight aria-hidden="true" className="hidden h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:text-blue-600 motion-reduce:transform-none sm:block" />
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              );
            })}
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center text-sm leading-6 text-slate-500">{text.note}</p>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold text-slate-950 md:text-4xl">{text.ctaTitle}</h2>
          <p className="mb-8 text-lg text-slate-600">{text.ctaText}</p>
          <div className="flex justify-center">
            <Link href="/contact" className="liquid-cta liquid-cta-solid inline-flex items-center justify-center px-8 py-4 font-semibold">
              <span>{text.ctaButton}</span>
              <ArrowRight aria-hidden="true" className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
