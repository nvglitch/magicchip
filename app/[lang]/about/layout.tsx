import type { ReactNode } from 'react';
import { createPageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  return createPageMetadata({
  name: 'About MagicChip | Shenzhen Magic Chip Technology Co., Ltd.',
  description: 'Learn about MagicChip, the brand of Shenzhen Magic Chip Technology Co., Ltd., a Shenzhen-based Mini PC and industrial computing manufacturer with OEM/ODM capabilities.',
  path: '/about',
  }, (await params).lang);
}

export default function RouteLayout({ children }: { children: ReactNode }) {
  return children;
}