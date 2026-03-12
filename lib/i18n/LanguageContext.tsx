'use client';

import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { translations, Language, Translations } from './translations';

interface LanguageContextType {
  language: Language;
  t: Translations;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    // Optionally persist to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('magicchip-language', lang);
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  }, [language, setLanguage]);

  // Load from localStorage on mount
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('magicchip-language') as Language;
      if (saved && (saved === 'en' || saved === 'zh')) {
        setLanguageState(saved);
      }
    }
  }, []);

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, t, setLanguage, toggleLanguage }}>
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
