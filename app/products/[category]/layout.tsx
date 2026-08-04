import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { categorySeo, createPageMetadata, serializeJsonLd, SITE_URL } from '@/lib/seo';

type CategoryLayoutProps = {
  children: ReactNode;
  params: Promise<{ category: string }>;
};

export async function generateMetadata({ params }: Omit<CategoryLayoutProps, 'children'>): Promise<Metadata> {
  const { category } = await params;
  const entry = categorySeo[category];

  return entry
    ? createPageMetadata(entry)
    : { title: 'Product Category', robots: { index: false, follow: true } };
}

export default async function CategoryLayout({ children, params }: CategoryLayoutProps) {
  const { category } = await params;
  const entry = categorySeo[category];
  const breadcrumb = entry
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
          { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE_URL}/products` },
          { '@type': 'ListItem', position: 3, name: entry.name, item: `${SITE_URL}${entry.path}` },
        ],
      }
    : null;

  return (
    <>
      {breadcrumb && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumb) }} />
      )}
      {children}
    </>
  );
}