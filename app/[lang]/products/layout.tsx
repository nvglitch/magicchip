import type { ReactNode } from 'react';
import { createPageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  return createPageMetadata({
  name: 'Mini PCs & Industrial Computing Products',
  description: 'Browse MagicChip industrial, AI, commercial, and firewall Mini PCs for automation, edge computing, business, and network deployments.',
  path: '/products',
  }, (await params).lang);
}

export default function RouteLayout({ children }: { children: ReactNode }) {
  return children;
}