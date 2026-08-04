import type { ReactNode } from 'react';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  name: 'Mini PCs & Industrial Computing Products',
  description: 'Browse MagicChip industrial, AI, commercial, and firewall Mini PCs for automation, edge computing, business, and network deployments.',
  path: '/products',
});

export default function RouteLayout({ children }: { children: ReactNode }) {
  return children;
}