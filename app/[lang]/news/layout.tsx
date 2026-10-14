import type { ReactNode } from 'react';
import { createPageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  return createPageMetadata({
  name: 'News & Product Updates',
  description: 'Read MagicChip product announcements, company updates, and Mini PC and industrial computing news.',
  path: '/news',
  }, (await params).lang);
}

export default function RouteLayout({ children }: { children: ReactNode }) {
  return children;
}