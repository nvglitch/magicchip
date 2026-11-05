import type { ReactNode } from 'react';
import { createPageMetadata } from '@/lib/seo';
import { editorialCopy } from '@/lib/editorial-copy';
import { isValidLanguage } from '@/lib/i18n/config';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const requested = (await params).lang;
  const lang = isValidLanguage(requested) ? requested : 'en';
  return createPageMetadata({
  name: editorialCopy[lang].resourcesTitle,
  description: editorialCopy[lang].resourcesIntro,
  path: '/documents',
  }, lang);
}

export default function RouteLayout({ children }: { children: ReactNode }) {
  return children;
}
