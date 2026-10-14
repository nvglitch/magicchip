import type { ReactNode } from 'react';
import { createPageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  return createPageMetadata({
  name: 'Product Downloads',
  description: 'Access available MagicChip product brochures, specifications, and downloadable resources for Mini PCs and industrial computing systems.',
  path: '/downloads',
  }, (await params).lang);
}

export default function RouteLayout({ children }: { children: ReactNode }) {
  return children;
}