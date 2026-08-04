import type { ReactNode } from 'react';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  name: 'Technical Documents',
  description: 'Browse MagicChip technical product information, specifications, configuration references, and integration resources.',
  path: '/tech-docs',
});

export default function RouteLayout({ children }: { children: ReactNode }) {
  return children;
}