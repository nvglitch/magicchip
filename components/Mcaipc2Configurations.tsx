'use client';

import { useState } from 'react';
import Image from 'next/image';
import { mcaipc2Chassis, mcaipc2Series, type Mcaipc2SeriesId } from '@/lib/ai-catalog';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const copy = {
  en: { title: 'Choose your MCAIPC2 configuration', intro: 'Compare the three mainboard series, then find a compatible chassis. Memory, networking, display, and expansion options are specific to each series.', chassis: 'Chassis compatibility guide', all: 'All chassis', matching: 'compatible chassis', concept: 'New ID concept', conceptNote: 'Under design. Mainboard compatibility, dimensions, power, and I/O are not yet assigned.' },
  fr: { title: 'Choisissez votre configuration MCAIPC2', intro: 'Comparez les trois séries de cartes mères, puis trouvez un châssis compatible. Mémoire, réseau, affichage et extensions dépendent de la série.', chassis: 'Compatibilité des châssis', all: 'Tous les châssis', matching: 'châssis compatibles', concept: 'Nouveau concept de design', conceptNote: 'En conception. Compatibilité, dimensions, alimentation et interfaces à définir.' },
  de: { title: 'Wählen Sie Ihre MCAIPC2-Konfiguration', intro: 'Vergleichen Sie die drei Mainboard-Serien und wählen Sie ein kompatibles Gehäuse. Speicher, Netzwerk, Display und Erweiterungen sind serienabhängig.', chassis: 'Kompatible Gehäuse', all: 'Alle Gehäuse', matching: 'kompatible Gehäuse', concept: 'Neues Designkonzept', conceptNote: 'In Entwicklung. Mainboard-Kompatibilität, Maße, Stromversorgung und Anschlüsse sind noch nicht festgelegt.' },
  it: { title: 'Scegli la configurazione MCAIPC2', intro: 'Confronta le tre serie di schede madri e trova uno chassis compatibile. Memoria, rete, display ed espansioni dipendono dalla serie.', chassis: 'Compatibilità degli chassis', all: 'Tutti gli chassis', matching: 'chassis compatibili', concept: 'Nuovo concept di design', conceptNote: 'In progettazione. Compatibilità, dimensioni, alimentazione e interfacce da definire.' },
  es: { title: 'Elige tu configuración MCAIPC2', intro: 'Compara las tres series de placas y elige un chasis compatible. La memoria, red, pantalla y expansión dependen de cada serie.', chassis: 'Compatibilidad de chasis', all: 'Todos los chasis', matching: 'chasis compatibles', concept: 'Nuevo concepto de diseño', conceptNote: 'En desarrollo. Compatibilidad, dimensiones, alimentación e interfaces por definir.' },
};

export default function Mcaipc2Configurations({ onPreview }: { onPreview: (image: string) => void }) {
  const { language } = useLanguage();
  const t = copy[language];
  const [selected, setSelected] = useState<Mcaipc2SeriesId | 'all'>('all');
  const chassis = mcaipc2Chassis.filter((item) => selected === 'all' || item.series.includes(selected));
  return (
    <section className="bg-[#f3f8f6] py-16" id="configuration-guide">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">{t.title}</h2>
        <p className="mt-4 max-w-3xl text-slate-600">{t.intro}</p>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {mcaipc2Series.map((series) => (
            <article key={series.id} className="min-w-0 overflow-hidden rounded-xl border border-blue-200 bg-white shadow-sm">
              <div className="bg-[#172033] p-6 text-white"><h3 className="text-xl font-bold">{series.id}</h3><p className="mt-2 text-sm text-blue-100">{series.platform}</p></div>
              <dl className="divide-y divide-slate-100 px-6">
                {Object.entries({ 'Graphics / NPU': series.graphics, Memory: series.memory, Network: series.network, Storage: series.storage, Display: series.display, Expansion: series.expansion, OS: series.system }).map(([label, value]) => (
                  <div key={label} className="py-4"><dt className="text-xs font-bold uppercase text-blue-700">{label}</dt><dd className="mt-1 break-words text-sm leading-relaxed text-slate-700">{value}</dd></div>
                ))}
              </dl>
            </article>
          ))}
        </div>
        <h3 className="mt-14 text-2xl font-bold text-slate-950">{t.chassis}</h3>
        <div className="mt-5 flex flex-wrap gap-2" aria-label={t.chassis}>
          {(['all', ...mcaipc2Series.map((series) => series.id)] as const).map((id) => (
            <button key={id} type="button" aria-pressed={selected === id} onClick={() => setSelected(id)} className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${selected === id ? 'bg-blue-700 text-white' : 'border border-slate-300 bg-white text-slate-700 hover:border-blue-500'}`}>{id === 'all' ? t.all : id}</button>
          ))}
        </div>
        <p className="mt-4 text-sm text-slate-600" aria-live="polite">{chassis.length} {t.matching}</p>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {chassis.map((item) => (
            <article key={item.id} className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
              <button type="button" onClick={() => onPreview(item.image)} aria-label={`MCAIPC2 ${item.id}`} className="block w-full cursor-zoom-in"><Image src={item.image} alt={`MCAIPC2 ${item.id} chassis`} width={1200} height={1200} className="aspect-square w-full object-contain" /></button>
              <div className="border-t border-slate-100 p-5"><h4 className="text-lg font-bold text-slate-950">{item.id}</h4><p className="mt-2 text-xs font-semibold text-blue-700">{item.series.join(' / ')}</p><p className="mt-2 text-sm text-slate-700">{item.dimensions}</p><p className="mt-2 text-sm leading-relaxed text-slate-600">{item.details}</p></div>
            </article>
          ))}
        </div>
        {selected === 'all' && <aside className="mt-6 rounded-xl border border-dashed border-slate-300 bg-white p-6"><h4 className="font-bold text-slate-700">{t.concept}</h4><p className="mt-2 text-sm text-slate-600">{t.conceptNote}</p></aside>}
      </div>
    </section>
  );
}
