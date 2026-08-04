import type { ReactNode } from 'react';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  name: 'Mini PC Manufacturing Factory',
  description: 'Explore MagicChip manufacturing, assembly, testing, quality assurance, and customization capabilities for Mini PCs and industrial computers.',
  path: '/factory',
});

export default function RouteLayout({ children }: { children: ReactNode }) {
  return children;
}