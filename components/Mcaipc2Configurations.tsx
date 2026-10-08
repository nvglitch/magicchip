'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { defaultMcaipc2Configuration, mcaipc2Chassis, mcaipc2Configurations, mcaipc2Series, type Mcaipc2SeriesId } from '@/lib/ai-catalog';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import ConfigurationSpecifications from '@/components/ConfigurationSpecifications';
import { mergeSpecifications, type ProductConfiguration } from '@/lib/product-specifications';

const copy = {
  en: { title: 'Choose a configuration', intro: 'Select a mainboard series, then choose a compatible chassis to view the complete specifications.', chassis: 'Compatible chassis', specification: 'Configuration specifications', image: 'Selected chassis; I/O follows the selected mainboard series.' },
  fr: { title: 'Choisir une configuration', intro: 'Sélectionnez une série de cartes mères, puis un châssis compatible pour consulter toutes les caractéristiques.', chassis: 'Châssis compatibles', specification: 'Caractéristiques de la configuration', image: 'Châssis sélectionné ; les ports dépendent de la série de cartes mères.' },
  de: { title: 'Konfiguration wählen', intro: 'Wählen Sie eine Mainboard-Serie und ein kompatibles Gehäuse, um die vollständigen technischen Daten anzuzeigen.', chassis: 'Kompatible Gehäuse', specification: 'Konfigurationsdaten', image: 'Gewähltes Gehäuse; die Anschlüsse richten sich nach der Mainboard-Serie.' },
  it: { title: 'Scegli una configurazione', intro: 'Seleziona una serie di schede madri e uno chassis compatibile per visualizzare tutte le specifiche.', chassis: 'Chassis compatibili', specification: 'Specifiche della configurazione', image: 'Chassis selezionato; le porte dipendono dalla serie della scheda madre.' },
  es: { title: 'Elige una configuración', intro: 'Selecciona una serie de placas y un chasis compatible para ver todas las especificaciones.', chassis: 'Chasis compatibles', specification: 'Especificaciones de la configuración', image: 'Chasis seleccionado; los puertos dependen de la serie de placas.' },
};

export default function Mcaipc2Configurations({ onPreview, onConfigurationChange }: { onPreview: (image: string) => void; onConfigurationChange?: (configuration: ProductConfiguration) => void }) {
  const { language } = useLanguage();
  const t = copy[language];
  const [active, setActive] = useState(defaultMcaipc2Configuration);
  const chassis = mcaipc2Chassis.filter(item => item.series.includes(active.seriesId));
  useEffect(() => { onConfigurationChange?.(active); }, [active, onConfigurationChange]);

  useEffect(() => {
    const pickHash = () => {
      if (!window.location.hash.startsWith('#sku-')) return;
      const key = window.location.hash.slice('#sku-'.length);
      const configuration = mcaipc2Configurations.find(item => item.key === key);
      if (configuration) {
        setActive(configuration);
        requestAnimationFrame(() => document.getElementById('configuration-guide')?.scrollIntoView({ block: 'start' }));
      }
    };
    pickHash();
    window.addEventListener('hashchange', pickHash);
    return () => window.removeEventListener('hashchange', pickHash);
  }, []);

  const select = (seriesId: Mcaipc2SeriesId, chassisId: string) => {
    const configuration = mcaipc2Configurations.find(item => item.seriesId === seriesId && item.chassisId === chassisId)
      || mcaipc2Configurations.find(item => item.seriesId === seriesId)!;
    setActive(configuration);
    window.history.replaceState(null, '', `#sku-${configuration.key}`);
  };

  return (
    <section className="scroll-mt-24 bg-[#f3f8f6] py-16" id="configuration-guide">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">{t.title}</h2>
        <p className="mt-3 text-slate-600">{t.intro}</p>
        <div role="tablist" aria-label={`MCAIPC2 ${t.title}`} className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {mcaipc2Series.map(series => <button key={series.id} id={`sku-tab-${series.id}`} type="button" role="tab" aria-selected={series.id === active.seriesId} aria-controls="sku-panel" onClick={() => select(series.id, active.chassisId)} className={`rounded-xl border px-5 py-4 text-left font-semibold transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-blue-600 ${series.id === active.seriesId ? 'border-blue-500 bg-blue-50 text-blue-800 shadow-sm' : 'border-blue-200 bg-white text-slate-800 hover:border-blue-400'}`}>
            <span className="block">{series.id}</span>
            <span className="mt-1 block text-xs font-normal text-slate-500">{series.platform}</span>
          </button>)}
        </div>
        <h3 className="mt-8 text-lg font-bold text-slate-950">{t.chassis} ({chassis.length})</h3>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5" aria-label={t.chassis}>
          {chassis.map(item => <button key={item.id} type="button" aria-label={`MCAIPC2 ${item.id}`} aria-pressed={item.id === active.chassisId} onClick={() => select(active.seriesId, item.id)} className={`rounded-xl border p-2 font-semibold transition-all hover:-translate-y-0.5 hover:border-blue-400 hover:shadow-md focus-visible:outline-2 focus-visible:outline-blue-600 ${item.id === active.chassisId ? 'border-blue-500 bg-blue-50 text-blue-800' : 'border-blue-200 bg-white text-slate-800'}`}>
            <Image src={item.image} alt="" width={160} height={100} className="h-20 w-full object-contain p-2" />
            <span className="mt-1 block text-sm">{item.id}</span>
          </button>)}
        </div>
        <div id="sku-panel" role="tabpanel" aria-labelledby={`sku-tab-${active.seriesId}`} className="mt-6 overflow-hidden rounded-xl border border-blue-200 bg-white">
          <ConfigurationSpecifications key={active.key} title={`${active.label} · ${t.specification}`} image={active.image} imageAlt={`MCAIPC2 ${active.label}`} imageCaption={t.image} specs={mergeSpecifications([], active.specs)} galleryCards={active.galleryCards} onPreview={onPreview} />
        </div>
      </div>
    </section>
  );
}
