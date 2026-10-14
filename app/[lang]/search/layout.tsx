import type { Metadata } from 'next';
import { createPageMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return { ...createPageMetadata({ name: 'Search', description: 'Search MagicChip products, application scenarios, documents, and company information.', path: '/search' }, (await params).lang), robots: { index: false, follow: true } };
}

export default function SearchLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
