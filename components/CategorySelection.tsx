'use client';

import { ArrowRight } from 'lucide-react';
import Link from '@/components/LocalizedLink';
import type { Language } from '@/lib/i18n/config';
import { selectionCopy } from '@/lib/category-selection-copy';
import CategoryProductSearch from '@/components/CategoryProductSearch';

export default function CategorySelection({ category, language }: { category: string; language: Language }) {
  const words = selectionCopy[language];
  const firewall = category === 'firewall-mini-pc';
  const ai = category === 'ai-mini-pc';
  return <section aria-labelledby="selection-heading" className="mb-12 overflow-hidden rounded-2xl border border-blue-100 bg-white shadow-sm">
    <CategoryProductSearch category={category} language={language} />
    {ai && <div className="border-t border-blue-100 p-6 sm:p-8"><p className="max-w-4xl text-sm leading-7 text-slate-600">{words.ai}</p><Link href="/tech-docs/local-ai-mini-pc-memory" className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-hover">{words.memoryGuide}<ArrowRight aria-hidden="true" className="h-4 w-4" /></Link></div>}
    {firewall && <p className="border-t border-blue-100 p-6 text-sm leading-7 text-slate-600 sm:p-8">{words.firewall}</p>}
  </section>;
}
