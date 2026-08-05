import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Search',
  description: 'Search MagicChip products, application scenarios, documents, and company information.',
  alternates: { canonical: '/search' },
  robots: { index: false, follow: true },
};

export default function SearchLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
