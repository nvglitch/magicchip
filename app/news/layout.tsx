import type { ReactNode } from 'react';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  name: 'News & Product Updates',
  description: 'Read MagicChip product announcements, company updates, and Mini PC and industrial computing news.',
  path: '/news',
});

export default function RouteLayout({ children }: { children: ReactNode }) {
  return children;
}