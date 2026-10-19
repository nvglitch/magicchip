'use client';

import { useState } from 'react';
import { MapPin } from 'lucide-react';
import Link from '@/components/LocalizedLink';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const copy = {
  en: { load: 'Load Google Maps', hide: 'Hide map', notice: 'Loading this map connects to Google and may allow Google to use cookies. You can read our office address without loading it.', privacy: 'Google Privacy Policy', policy: 'Cookie Policy' },
  de: { load: 'Google Maps laden', hide: 'Karte ausblenden', notice: 'Beim Laden wird eine Verbindung zu Google hergestellt; Google kann Cookies verwenden. Die Büroanschrift ist auch ohne Karte sichtbar.', privacy: 'Google-Datenschutzerklärung', policy: 'Cookie-Richtlinie' },
  fr: { load: 'Charger Google Maps', hide: 'Masquer la carte', notice: 'Le chargement se connecte à Google et peut permettre l’utilisation de cookies. L’adresse reste visible sans charger la carte.', privacy: 'Confidentialité Google', policy: 'Politique relative aux cookies' },
  it: { load: 'Carica Google Maps', hide: 'Nascondi mappa', notice: 'Il caricamento si collega a Google e può consentire l’uso di cookie. L’indirizzo resta visibile senza caricare la mappa.', privacy: 'Privacy di Google', policy: 'Informativa sui cookie' },
  es: { load: 'Cargar Google Maps', hide: 'Ocultar mapa', notice: 'Cargar el mapa conecta con Google y puede permitir el uso de cookies. La dirección está disponible sin cargarlo.', privacy: 'Privacidad de Google', policy: 'Política de cookies' },
};

export default function OfficeMap({ address, city }: { address: string; city: string }) {
  const { language } = useLanguage();
  const [loaded, setLoaded] = useState(false);
  const labels = copy[language];

  return (
    <div className="relative flex min-h-[420px] items-center justify-center bg-slate-100 lg:min-h-[520px]">
      {loaded ? (
        <>
          <iframe title={`${city} office map`} src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`} referrerPolicy="no-referrer" className="absolute inset-0 h-full w-full border-0" allowFullScreen />
          <button type="button" onClick={() => setLoaded(false)} className="absolute right-4 top-4 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">{labels.hide}</button>
        </>
      ) : (
        <div className="max-w-md px-6 py-10 text-center">
          <MapPin className="mx-auto h-10 w-10 text-brand" aria-hidden="true" />
          <p className="mt-4 text-lg font-semibold text-slate-900">{city}</p>
          <p className="mt-3 text-sm leading-6 text-slate-600">{labels.notice}</p>
          <button type="button" onClick={() => setLoaded(true)} className="mt-6 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">{labels.load}</button>
          <div className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-xs text-slate-500">
            <Link href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-brand-hover">{labels.privacy}</Link>
            <Link href="/cookie-policy" className="underline underline-offset-4 hover:text-brand-hover">{labels.policy}</Link>
          </div>
        </div>
      )}
    </div>
  );
}
