"use client";

import { createContext, useContext, useCallback, useEffect, useTransition, type ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { isValidLanguage, type Language } from './config';
import type { TranslationSchema } from './types';
import { LANGUAGE_COOKIE, LANGUAGE_COOKIE_MAX_AGE, localizedHref } from './routing';

interface LanguageContextType {
  language: Language;
  t: TranslationSchema;
  setLanguage: (lang: Language) => void;
  isLoading: boolean;
}
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

function rememberLanguage(language: Language) {
  document.cookie = `${LANGUAGE_COOKIE}=${language}; Path=/; Max-Age=${LANGUAGE_COOKIE_MAX_AGE}; SameSite=Lax${location.protocol === 'https:' ? '; Secure' : ''}`;
  try { localStorage.setItem(LANGUAGE_COOKIE, language); } catch { /* URL remains authoritative. */ }
}

export function LanguageProvider({ children, initialLanguage, initialTranslations }: {
  children: ReactNode;
  initialLanguage: Language;
  initialTranslations: TranslationSchema;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoading, startTransition] = useTransition();
  useEffect(() => {
    document.documentElement.lang = initialLanguage;
    rememberLanguage(initialLanguage);
  }, [initialLanguage]);
  const setLanguage = useCallback((language: Language) => {
    if (!isValidLanguage(language) || language === initialLanguage) return;
    rememberLanguage(language);
    const destination = localizedHref(`${pathname}${window.location.search}${window.location.hash}`, language);
    startTransition(() => router.push(destination, { scroll: false }));
  }, [initialLanguage, pathname, router]);
  return <LanguageContext.Provider value={{ language: initialLanguage, t: initialTranslations, setLanguage, isLoading }}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
}
