'use client';

import { useEffect, useRef, useState, useSyncExternalStore } from 'react';
import { usePathname } from 'next/navigation';
import { X } from 'lucide-react';
import Link from '@/components/LocalizedLink';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import { actionButtonStyles } from '@/lib/action-button-styles';
import { analyticsCopy } from '@/lib/analytics-copy';
import { ANALYTICS_CONSENT_KEY, ANALYTICS_SETTINGS_EVENT, getAnalyticsConsent, getServerAnalyticsConsent, initializeAnalyticsConsent, refreshAnalyticsConsent, setAnalyticsConsent, subscribeAnalyticsConsent, trackAnalyticsClick, trackPageView } from '@/lib/analytics';

export default function AnalyticsConsent() {
  const { language } = useLanguage();
  const words = analyticsCopy[language];
  const pathname = usePathname();
  const consent = useSyncExternalStore(subscribeAnalyticsConsent, getAnalyticsConsent, getServerAnalyticsConsent);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const notice = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const visible = consent === 'unknown' || settingsOpen;

  useEffect(() => {
    initializeAnalyticsConsent();
    const settings = () => { previousFocus.current = document.activeElement as HTMLElement | null; setSettingsOpen(true); };
    const storage = (event: StorageEvent) => { if (!event.key || event.key === ANALYTICS_CONSENT_KEY) refreshAnalyticsConsent(); };
    const visibility = () => { if (document.visibilityState === 'visible') refreshAnalyticsConsent(); };
    window.addEventListener(ANALYTICS_SETTINGS_EVENT, settings);
    window.addEventListener('storage', storage);
    document.addEventListener('visibilitychange', visibility);
    document.addEventListener('click', trackAnalyticsClick, true);
    return () => {
      window.removeEventListener(ANALYTICS_SETTINGS_EVENT, settings);
      window.removeEventListener('storage', storage);
      document.removeEventListener('visibilitychange', visibility);
      document.removeEventListener('click', trackAnalyticsClick, true);
    };
  }, []);

  useEffect(() => { trackPageView(); }, [pathname]);

  useEffect(() => {
    if (!visible || !notice.current) return;
    const element = notice.current;
    const updateHeight = () => document.documentElement.style.setProperty('--analytics-notice-height', `${element.getBoundingClientRect().height}px`);
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(element);
    return () => { observer.disconnect(); document.documentElement.style.removeProperty('--analytics-notice-height'); };
  }, [visible]);

  useEffect(() => {
    if (!settingsOpen) return;
    notice.current?.querySelector('button')?.focus();
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setSettingsOpen(false); previousFocus.current?.focus(); }
    };
    window.addEventListener('keydown', escape);
    return () => window.removeEventListener('keydown', escape);
  }, [settingsOpen]);

  function choose(choice: 'granted' | 'denied') {
    setAnalyticsConsent(choice);
    setSettingsOpen(false);
    previousFocus.current?.focus();
  }

  if (!visible) return null;
  return (
    <div ref={notice} role="region" aria-labelledby="analytics-notice-title" className="fixed inset-x-0 bottom-0 z-[10000] border-t border-slate-200 bg-white px-4 py-5 shadow-[0_-8px_32px_rgba(15,23,42,0.12)] sm:px-6">
      <div className="relative mx-auto flex max-w-7xl flex-col gap-5 lg:flex-row lg:items-center lg:gap-8">
        <div className="min-w-0 flex-1 pr-7">
          <h2 id="analytics-notice-title" className="text-lg font-semibold text-slate-950">{words.title}</h2>
          <p className="mt-2 text-sm leading-6 text-slate-600">{words.description} <Link href="/cookie-policy" onClick={() => setSettingsOpen(false)} className="font-medium text-blue-700 underline underline-offset-2">{words.cookieLink}</Link></p>
          {settingsOpen && <p role="status" className="mt-2 text-sm font-medium text-slate-700">{consent === 'granted' ? words.enabled : words.disabled}</p>}
        </div>
        <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
          <button type="button" onClick={() => choose('granted')} className={actionButtonStyles.primary}>{words.accept}</button>
          <button type="button" onClick={() => choose('denied')} className={actionButtonStyles.primary}>{words.reject}</button>
        </div>
        {settingsOpen && <button type="button" aria-label={words.close} onClick={() => { setSettingsOpen(false); previousFocus.current?.focus(); }} className="absolute right-0 top-0 rounded-full p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-950"><X className="h-5 w-5" /></button>}
      </div>
    </div>
  );
}
