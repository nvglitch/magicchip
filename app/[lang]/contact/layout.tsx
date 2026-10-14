import type { ReactNode } from 'react';
import { createPageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  return createPageMetadata({
  name: 'Contact MagicChip Sales',
  description: 'Contact MagicChip in Shenzhen for Mini PC product inquiries, OEM/ODM requirements, technical questions, quotations, and project discussions.',
  path: '/contact',
  }, (await params).lang);
}

export default function RouteLayout({ children }: { children: ReactNode }) {
  return children;
}