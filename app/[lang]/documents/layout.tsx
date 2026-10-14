import type { ReactNode } from 'react';
import { createPageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  return createPageMetadata({
  name: 'Documents & Resources',
  description: 'Access MagicChip product news, file downloads, and technical documentation for Mini PCs and industrial computing products.',
  path: '/documents',
  }, (await params).lang);
}

export default function RouteLayout({ children }: { children: ReactNode }) {
  return children;
}