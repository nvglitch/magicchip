import { en } from './locales/en';
import { de } from './locales/de';
import { fr } from './locales/fr';
import { it } from './locales/it';
import { es } from './locales/es';
import type { Language } from './config';
import type { TranslationSchema } from './types';

export const dictionaries: Record<Language, TranslationSchema> = { en, de, fr, it, es };
