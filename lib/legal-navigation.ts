import type { Language } from '@/lib/i18n/config';

export const legalRoutes = ['privacy', 'cookies', 'terms'] as const;
export type LegalDocumentId = typeof legalRoutes[number];

export const legalPaths: Record<LegalDocumentId, string> = {
  privacy: '/privacy-policy',
  cookies: '/cookie-policy',
  terms: '/terms-of-use',
};

export const legalNavigation: Record<Language, {
  privacy: string;
  cookies: string;
  terms: string;
  updated: string;
  contents: string;
  navigation: string;
}> = {
  en: { privacy: 'Privacy Policy', cookies: 'Cookie Policy', terms: 'Website Terms', updated: 'Last updated', contents: 'On this page', navigation: 'Policies and website terms' },
  de: { privacy: 'Datenschutzerklärung', cookies: 'Cookie-Richtlinie', terms: 'Website-Nutzungsbedingungen', updated: 'Zuletzt aktualisiert', contents: 'Auf dieser Seite', navigation: 'Datenschutz und Nutzungsbedingungen' },
  fr: { privacy: 'Politique de confidentialité', cookies: 'Politique relative aux cookies', terms: 'Conditions d’utilisation', updated: 'Dernière mise à jour', contents: 'Sur cette page', navigation: 'Politiques et conditions d’utilisation' },
  it: { privacy: 'Informativa sulla privacy', cookies: 'Informativa sui cookie', terms: 'Condizioni d’uso', updated: 'Ultimo aggiornamento', contents: 'In questa pagina', navigation: 'Informative e condizioni d’uso' },
  es: { privacy: 'Política de privacidad', cookies: 'Política de cookies', terms: 'Condiciones de uso', updated: 'Última actualización', contents: 'En esta página', navigation: 'Políticas y condiciones de uso' },
};

export const LEGAL_UPDATED = '2026-10-14';

export type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  items?: string[];
  links?: { label: string; href: string }[];
};

export type LegalDocument = {
  introduction: string;
  sections: LegalSection[];
};
