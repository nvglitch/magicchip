import siteConfig from '@/content/site-config.json';
import type { Language } from '@/lib/i18n/config';

export const socialLinks = [
  { id: 'linkedin', name: 'LinkedIn', href: siteConfig.social.linkedin },
  { id: 'facebook', name: 'Facebook', href: siteConfig.social.facebook },
] as const;

export const socialCopy: Record<Language, {
  title: string;
  profileLabel: (platform: string) => string;
}> = {
  en: { title: 'Follow us', profileLabel: platform => `MagicChip on ${platform} (opens in a new tab)` },
  de: { title: 'Folgen Sie uns', profileLabel: platform => `MagicChip auf ${platform} (öffnet in einem neuen Tab)` },
  fr: { title: 'Suivez-nous', profileLabel: platform => `MagicChip sur ${platform} (s’ouvre dans un nouvel onglet)` },
  it: { title: 'Seguici', profileLabel: platform => `MagicChip su ${platform} (si apre in una nuova scheda)` },
  es: { title: 'Síganos', profileLabel: platform => `MagicChip en ${platform} (se abre en una pestaña nueva)` },
};
