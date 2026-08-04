import type { ReactNode } from 'react';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata({
  name: 'About MagicChip',
  description: 'Learn about MagicChip, our Mini PC and industrial computing product portfolio, manufacturing capabilities, and OEM/ODM services.',
  path: '/about',
});

export default function RouteLayout({ children }: { children: ReactNode }) {
  return children;
}