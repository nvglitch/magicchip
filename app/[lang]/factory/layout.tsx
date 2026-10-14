import type { ReactNode } from 'react';
import { createPageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  return createPageMetadata({
  name: 'Mini PC Manufacturing Factory',
  description: 'Explore MagicChip manufacturing, assembly, testing, quality assurance, and customization capabilities for Mini PCs and industrial computers.',
  path: '/factory',
  }, (await params).lang);
}

export default function RouteLayout({ children }: { children: ReactNode }) {
  return children;
}