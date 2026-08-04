import type { ReactNode } from 'react';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  name: 'Product Downloads',
  description: 'Access available MagicChip product brochures, specifications, and downloadable resources for Mini PCs and industrial computing systems.',
  path: '/downloads',
});

export default function RouteLayout({ children }: { children: ReactNode }) {
  return children;
}