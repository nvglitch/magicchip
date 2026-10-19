// Language configuration
export const SUPPORTED_LANGUAGES = ['en', 'fr', 'de', 'it', 'es'] as const;
export type Language = typeof SUPPORTED_LANGUAGES[number];

export const LANGUAGE_NAMES: Record<Language, { native: string; english: string }> = {
  en: { native: 'English', english: 'English' },
  fr: { native: 'Français', english: 'French' },
  de: { native: 'Deutsch', english: 'German' },
  it: { native: 'Italiano', english: 'Italian' },
  es: { native: 'Español', english: 'Spanish' },
};

export const DEFAULT_LANGUAGE: Language = 'en';

// Browser language detection
export function detectBrowserLanguage(): Language {
  if (typeof window === 'undefined') return DEFAULT_LANGUAGE;

  const browserLang = navigator.language.split('-')[0];
  return SUPPORTED_LANGUAGES.includes(browserLang as Language)
    ? (browserLang as Language)
    : DEFAULT_LANGUAGE;
}

// Validate language code
export function isValidLanguage(lang: string): lang is Language {
  return SUPPORTED_LANGUAGES.includes(lang as Language);
}
