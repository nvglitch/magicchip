import { DEFAULT_LANGUAGE, isValidLanguage, type Language } from './config';

export const LANGUAGE_COOKIE = 'magicchip-language';
export const LANGUAGE_COOKIE_MAX_AGE = 365 * 24 * 60 * 60;

export function languageFromPath(pathname: string): Language | null {
  const first = pathname.split('/')[1];
  return isValidLanguage(first) ? first : null;
}

export function withoutLanguage(pathname: string): string {
  if (!languageFromPath(pathname)) return pathname;
  return pathname.replace(/^\/[a-z]{2}(?=\/|$)/, '') || '/';
}

export function isPagePath(pathname: string): boolean {
  return pathname.startsWith('/') && !pathname.startsWith('//')
    && !/^\/(?:_next|api|assets|\.well-known)(?:\/|$)/.test(pathname)
    && !/\.[a-z0-9]+$/i.test(pathname);
}

export function localizedHref(href: string, requestedLanguage: string): string {
  const language = isValidLanguage(requestedLanguage) ? requestedLanguage : DEFAULT_LANGUAGE;
  const end = href.search(/[?#]/);
  const pathname = end < 0 ? href : href.slice(0, end);
  const suffix = end < 0 ? '' : href.slice(end);
  if (!isPagePath(pathname)) return href;
  const plainPath = withoutLanguage(pathname);
  return `/${language}${plainPath === '/' ? '' : plainPath}${suffix}`;
}

export function preferredLanguage(header: string | null): Language {
  const preferences = (header || '').split(',').map((part, index) => {
    const [tag, ...parameters] = part.trim().toLowerCase().split(';');
    const quality = parameters.find(value => value.trim().startsWith('q='));
    const q = quality ? Number(quality.trim().slice(2)) : 1;
    return { language: tag.split('-')[0], q, index };
  }).filter(item => Number.isFinite(item.q) && item.q > 0 && item.q <= 1 && isValidLanguage(item.language));
  preferences.sort((a, b) => b.q - a.q || a.index - b.index);
  return (preferences[0]?.language as Language | undefined) || DEFAULT_LANGUAGE;
}
