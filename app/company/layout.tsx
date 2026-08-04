import type { ReactNode } from 'react';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  name: 'Our Company',
  description: 'Learn about MagicChip and our focus on Mini PCs, industrial computing systems, smart hardware, and customer-oriented OEM/ODM development.',
  path: '/company',
});

export default function RouteLayout({ children }: { children: ReactNode }) {
  return children;
}