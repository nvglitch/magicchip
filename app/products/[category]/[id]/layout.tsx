import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { commercialCatalog } from '@/lib/commercial-catalog';
import { firewallCatalog } from '@/lib/firewall-catalog';
import { industrialCatalog } from '@/lib/industrial-catalog';
import { categorySeo, createPageMetadata, productSeo, serializeJsonLd, SITE_NAME, SITE_URL } from '@/lib/seo';

type ProductLayoutProps = {
  children: ReactNode;
  params: Promise<{ category: string; id: string }>;
};

export async function generateMetadata({ params }: Omit<ProductLayoutProps, 'children'>): Promise<Metadata> {
  const { category, id } = await params;
  const product = productSeo[id];

  if (!product || product.category !== category) {
    return { title: 'Product Not Found', robots: { index: false, follow: false } };
  }

  return createPageMetadata(product);
}

export default async function ProductLayout({ children, params }: ProductLayoutProps) {
  const { category, id } = await params;
  const product = productSeo[id];
  const categoryEntry = categorySeo[category];
  const catalogItem = [...industrialCatalog, ...firewallCatalog, ...commercialCatalog].find((item) => item.id === id);
  const isValidProduct = product && product.category === category;

  if (!isValidProduct) return children;

  const productData = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    '@id': `${SITE_URL}${product.path}#product`,
    name: product.name,
    description: product.description,
    image: product.image ? [`${SITE_URL}${product.image}`] : undefined,
    url: `${SITE_URL}${product.path}`,
    sku: catalogItem?.name || id.toUpperCase(),
    mpn: catalogItem?.name || id.toUpperCase(),
    category: categoryEntry?.name,
    brand: { '@type': 'Brand', name: SITE_NAME },
    manufacturer: { '@id': `${SITE_URL}/#organization` },
    additionalProperty: catalogItem?.specs
      .filter((spec) => !['Model', 'Series'].includes(spec.label))
      .map((spec) => ({ '@type': 'PropertyValue', name: spec.label, value: spec.value })),
  };
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE_URL}/products` },
      { '@type': 'ListItem', position: 3, name: categoryEntry?.name || category, item: `${SITE_URL}/products/${category}` },
      { '@type': 'ListItem', position: 4, name: product.name, item: `${SITE_URL}${product.path}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(productData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(breadcrumb) }} />
      {children}
    </>
  );
}