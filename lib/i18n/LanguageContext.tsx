'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';
import { Language, SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE, detectBrowserLanguage, isValidLanguage } from './config';
import { TranslationSchema } from './types';
import { en } from './locales/en';

// Lazy load other languages
const loadTranslation = async (lang: Language): Promise<TranslationSchema> => {
  switch (lang) {
    case 'en':
      return en;
    case 'fr':
      return (await import('./locales/fr')).fr;
    case 'de':
      return (await import('./locales/de')).de;
    case 'it':
      return (await import('./locales/it')).it;
    case 'es':
      return (await import('./locales/es')).es;
    default:
      return en;
  }
};

interface LanguageContextType {
  language: Language;
  t: TranslationSchema;
  setLanguage: (lang: Language) => void;
  isLoading: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'magicchip-language';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(DEFAULT_LANGUAGE);
  const [translations, setTranslations] = useState<TranslationSchema>(en);
  const [isLoading, setIsLoading] = useState(false);

  // Initialize language from localStorage or browser
  useEffect(() => {
    const initLanguage = async () => {
      if (typeof window === 'undefined') return;

      let savedLang: Language = DEFAULT_LANGUAGE;

      // Try localStorage first
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored && isValidLanguage(stored)) {
        savedLang = stored;
      } else {
        // Fallback to browser language detection
        savedLang = detectBrowserLanguage();
      }

      // Chinese is no longer supported, fallback to English
      if (savedLang === 'zh') {
        savedLang = 'en';
      }

      if (savedLang !== DEFAULT_LANGUAGE) {
        setIsLoading(true);
        const trans = await loadTranslation(savedLang);
        setTranslations(trans);
        setLanguageState(savedLang);
        setIsLoading(false);
      }
    };

    initLanguage();
  }, []);

  const setLanguage = useCallback(async (lang: Language) => {
    // Chinese is no longer supported, fallback to English
    if (lang === 'zh') {
      lang = 'en';
    }
    
    if (!isValidLanguage(lang)) {
      console.warn(`Invalid language: ${lang}, falling back to ${DEFAULT_LANGUAGE}`);
      lang = DEFAULT_LANGUAGE;
    }

    setIsLoading(true);

    try {
      const trans = await loadTranslation(lang);
      setTranslations(trans);
      setLanguageState(lang);

      // Persist to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, lang);
        // Update HTML lang attribute for SEO
        document.documentElement.lang = lang;
      }
    } catch (error) {
      console.error(`Failed to load language ${lang}:`, error);
      // Fallback to English on error
      setTranslations(en);
      setLanguageState(DEFAULT_LANGUAGE);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, t: translations, setLanguage, isLoading }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
