'use client';

import Image from 'next/image';
import { Download, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { certificates, certificateCopy, certificateFileCount } from '@/lib/certificates';

export default function CertificateLibrary({ dark = false, displayOnly = false }: { dark?: boolean; displayOnly?: boolean }) {
  const { language } = useLanguage();
  const text = certificateCopy[language];
  return (
    <section id="certificates" className={`scroll-mt-28 py-20 md:py-24 ${dark ? 'bg-[#101827] text-white' : 'bg-[#f3f7f5] text-slate-950'}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">{text.title}</h2>
          <p className={`mt-5 leading-7 ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{displayOnly ? text.displayIntro : text.intro}</p>
          {!displayOnly && <p className={`mt-3 text-sm ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{certificateFileCount} {text.files} · Shenzhen HyCert Co., Ltd.</p>}
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {certificates.map((cert, index) => (
            <article key={cert.id} id={cert.id} className="group flex min-w-0 scroll-mt-28 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-slate-950 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
              {displayOnly ? <div className="bg-slate-100 p-4">
                <Image src={cert.image} alt={`${cert.title} — ${cert.number}`} width={1190} height={1684} sizes="(min-width:1280px) 280px, (min-width:640px) 45vw, 90vw" className="aspect-[210/297] w-full object-contain shadow-sm transition-transform duration-300 group-hover:scale-[1.02]" />
              </div> : <a href={cert.certificate.href} target="_blank" rel="noopener noreferrer" aria-label={`${text.preview}: ${cert.title}`} className="block bg-slate-100 p-4 focus-visible:outline-2 focus-visible:outline-blue-600">
                <Image src={cert.image} alt={`${cert.title} — ${cert.number}`} width={1190} height={1684} sizes="(min-width:1280px) 280px, (min-width:640px) 45vw, 90vw" className="aspect-[210/297] w-full object-contain shadow-sm transition-transform duration-300 group-hover:scale-[1.02]" />
              </a>}
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-bold">{cert.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text.names[index]}</p>
                <p className="mt-3 break-all text-xs text-slate-500">{cert.number}</p>
                <p className="mt-1 text-xs text-slate-500">{text.issued}: <time dateTime={cert.issued}>{new Intl.DateTimeFormat(language, { dateStyle: 'medium', timeZone: 'UTC' }).format(new Date(`${cert.issued}T00:00:00Z`))}</time></p>
                {!displayOnly && <><div className="mt-5 space-y-2">
                  <a href={cert.certificate.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm font-semibold text-blue-700 hover:underline"><ExternalLink className="h-4 w-4 shrink-0" />{text.preview}</a>
                  {[{ file: cert.certificate, label: text.download }, { file: cert.report, label: text.report }].map(({ file, label }) => (
                    <a key={file.href} href={file.href} download className="flex items-start gap-2 rounded-lg border border-slate-200 p-3 text-sm transition hover:border-blue-400 hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-blue-600">
                      <Download className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
                      <span><span className="block font-medium">{label}</span><span className="mt-1 block text-xs text-slate-500">PDF · {(file.bytes / 1024 / 1024).toFixed(2)} MB · {`${file.pages} ${file.pages === 1 ? text.page : text.pages}`}</span></span>
                    </a>
                  ))}
                </div>
                <details className="mt-5 border-t border-slate-200 pt-4 text-sm">
                  <summary className="cursor-pointer font-medium text-slate-700 hover:text-blue-700">{text.details}</summary>
                  <p className="mt-3 font-medium">{text.standards}</p>
                  <ul className="mt-2 space-y-1 break-words text-xs leading-5 text-slate-600">{cert.standards.map(standard => <li key={standard}>{standard}</li>)}</ul>
                  <p className="mt-3 font-medium">{text.models}</p>
                  <p className="mt-2 break-words text-xs leading-5 text-slate-600">{cert.models}</p>
                  <p className="mt-3 break-all text-xs text-slate-500">{cert.reportNumber}</p>
                </details></>}
              </div>
            </article>
          ))}
        </div>
        <p className={`mx-auto mt-8 max-w-4xl text-center text-sm leading-6 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{text.scope}</p>
      </div>
    </section>
  );
}
