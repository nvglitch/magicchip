import type { ReactNode } from 'react';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  name: 'Documents & Resources',
  description: 'Access MagicChip product news, file downloads, and technical documentation for Mini PCs and industrial computing products.',
  path: '/documents',
});

export default function RouteLayout({ children }: { children: ReactNode }) {
  return children;
}