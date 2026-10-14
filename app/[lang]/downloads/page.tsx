'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import CertificateLibrary from '@/components/CertificateLibrary';
import { certificateCopy } from '@/lib/certificates';

export default function DownloadsPage() {
  const { language } = useLanguage();
  const text = certificateCopy[language];
  return (
    <div className="min-h-screen bg-[#f3f7f5] text-slate-950">
      <section className="relative isolate overflow-hidden bg-[#101827] text-white">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_78%_20%,rgba(37,99,235,0.3),transparent_34%)]" />
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-28 lg:px-8">
          <div className="max-w-3xl">
            <div className="mb-7 h-px w-24 bg-gradient-to-r from-amber-400 to-transparent" />
            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">{text.downloads}</h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-slate-300 md:text-2xl">{text.downloadsIntro}</p>
          </div>
        </div>
      </section>
      <CertificateLibrary />
    </div>
  );
}
