import type { ReactNode } from 'react';
import { createPageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  return createPageMetadata({
  name: 'Our Company | Shenzhen Magic Chip Technology Co., Ltd.',
  description: 'Learn about MagicChip, also known as Magic Chip, and Shenzhen Magic Chip Technology Co., Ltd., a Mini PC and industrial computing manufacturer in Shenzhen, China.',
  path: '/company',
  }, (await params).lang);
}

export default function RouteLayout({ children }: { children: ReactNode }) {
  return children;
}