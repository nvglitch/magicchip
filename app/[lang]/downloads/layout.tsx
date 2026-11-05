import type { ReactNode } from 'react';
import { createPageMetadata } from '@/lib/seo';
import { certificateCopy } from '@/lib/certificates';
import { isValidLanguage } from '@/lib/i18n/config';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const requested = (await params).lang;
  const lang = isValidLanguage(requested) ? requested : 'en';
  return createPageMetadata({
  name: certificateCopy[lang].downloads,
  description: certificateCopy[lang].displayIntro,
  path: '/downloads',
  }, lang);
}

export default function RouteLayout({ children }: { children: ReactNode }) {
  return children;
}
