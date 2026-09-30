'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import type { IndustrialSku } from '@/lib/merged-b-series';

const copy = {
  en: { title: 'Choose a configuration', detail: 'Specifications below apply to the selected configuration. Shared specifications follow.', sku: 'SKU', image: 'Reference view; I/O may differ by Type', specification: 'Configuration specifications' },
  de: { title: 'Konfiguration wählen', detail: 'Die folgenden Daten gelten für die gewählte Konfiguration. Gemeinsame Daten folgen darunter.', sku: 'SKU', image: 'Referenzansicht; Anschlüsse können je nach Typ abweichen', specification: 'Konfigurationsdaten' },
  fr: { title: 'Choisir une configuration', detail: 'Les caractéristiques ci-dessous concernent la configuration choisie. Les données communes suivent.', sku: 'SKU', image: 'Vue de référence ; les ports varient selon le type', specification: 'Caractéristiques de la configuration' },
  it: { title: 'Scegli una configurazione', detail: 'Le specifiche seguenti si riferiscono alla configurazione selezionata. Seguono le specifiche comuni.', sku: 'SKU', image: 'Immagine indicativa; le porte variano in base al tipo', specification: 'Specifiche della configurazione' },
  es: { title: 'Elige una configuración', detail: 'Las especificaciones siguientes corresponden a la configuración elegida. Después se muestran las comunes.', sku: 'SKU', image: 'Vista de referencia; los puertos varían según el tipo', specification: 'Especificaciones de la configuración' },
};

export default function IndustrialSkuSelector({ model, skus, onPreview }: { model: string; skus: IndustrialSku[]; onPreview: (image: string) => void }) {
  const { language } = useLanguage();
  const words = copy[language];
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const pickHash = () => {
      const key = window.location.hash.slice('#sku-'.length);
      if (!window.location.hash.startsWith('#sku-')) return;
      if (model === 'MCIPCB2' && key === 'j5005') {
        window.location.replace('/products/industrial-mini-pc/mcipcb2-j5005');
        return;
      }
      const index = skus.findIndex(sku => sku.key === key);
      if (index >= 0) {
        setSelected(index);
        requestAnimationFrame(() => document.getElementById('configurations')?.scrollIntoView({ block: 'start' }));
      }
    };
    pickHash();
    window.addEventListener('hashchange', pickHash);
    return () => window.removeEventListener('hashchange', pickHash);
  }, [model, skus]);

  const active = skus[selected];
  const selectSku = (index: number) => {
    setSelected(index);
    window.history.replaceState(null, '', `#sku-${skus[index].key}`);
  };

  return (
    <section id="configurations" className="scroll-mt-24 bg-[#f3f8f6] py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-950 md:text-4xl">{words.title}</h2>
        <p className="mt-3 text-slate-600">{words.detail}</p>
        <div role="tablist" aria-label={`${model} ${words.title}`} className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {skus.map((sku, index) => (
            <button
              key={sku.key}
              id={`sku-tab-${sku.key}`}
              type="button"
              role="tab"
              aria-selected={selected === index}
              aria-controls="sku-panel"
              onClick={() => selectSku(index)}
              className={`rounded-xl border px-5 py-4 text-left font-semibold transition-all hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-blue-600 ${selected === index ? 'border-blue-500 bg-blue-50 text-blue-800 shadow-sm' : 'border-blue-200 bg-white text-slate-800 hover:border-blue-400'}`}
            >
              <span className="block">{sku.label}</span>
              {sku.legacyNames.filter(name => name.toLowerCase() !== model.toLowerCase()).length > 0 && (
                <span className="mt-1 block text-xs font-normal text-slate-500">{words.sku}: {sku.legacyNames.filter(name => name.toLowerCase() !== model.toLowerCase()).join(', ')}</span>
              )}
            </button>
          ))}
        </div>
        <div id="sku-panel" role="tabpanel" aria-labelledby={`sku-tab-${active.key}`} className="mt-6 overflow-hidden rounded-xl border border-blue-200 bg-white shadow-sm">
          <div className="grid md:grid-cols-[300px_1fr]">
            <div className="flex flex-col border-b border-blue-100 p-5 md:border-b-0 md:border-r">
              <button type="button" onClick={() => onPreview(active.image)} className="group cursor-zoom-in rounded-lg bg-white p-3 focus-visible:outline-2 focus-visible:outline-blue-600">
                <Image src={active.image} alt={`${model} ${active.label}`} width={960} height={540} className="aspect-[4/3] w-full object-contain transition-transform group-hover:scale-[1.03]" />
              </button>
              <p className="mt-2 text-center text-xs text-slate-500">{words.image}</p>
            </div>
            <div>
              <h3 className="border-b border-blue-100 bg-[#172033] px-6 py-5 text-xl font-bold text-white">{active.label} · {words.specification}</h3>
              <dl className="divide-y divide-blue-100">
                {active.specs.map(item => (
                  <div key={item.label} className="grid gap-1 px-6 py-3.5 sm:grid-cols-[150px_1fr] sm:gap-5 even:bg-blue-50/40">
                    <dt className="text-sm font-semibold text-slate-700">{item.label}</dt>
                    <dd className="text-sm leading-relaxed text-slate-800">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
