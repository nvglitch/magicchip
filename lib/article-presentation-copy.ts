import type { Language } from '@/lib/i18n/config';
export const articlePresentationCopy = {
  en: { contents: 'In this article' },
  de: { contents: 'In diesem Artikel' },
  fr: { contents: 'Dans cet article' },
  it: { contents: 'In questo articolo' },
  es: { contents: 'En este artículo' },
} satisfies Record<Language, object>;
