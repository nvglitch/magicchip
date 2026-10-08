import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { commercialCatalog } from '@/lib/commercial-catalog';
import { firewallCatalog } from '@/lib/firewall-catalog';
import { industrialCatalog, industrialProductAliases } from '@/lib/industrial-catalog';
import { aiCatalog, aiProductAliases } from '@/lib/ai-catalog';
import { permanentRedirect } from 'next/navigation';
import { mergeSpecifications } from '@/lib/product-specifications';
import { categorySeo, createPageMetadata, productSeo, serializeJsonLd, SITE_NAME, SITE_URL } from '@/lib/seo';

type ProductLayoutProps = {
  children: ReactNode;
  params: Promise<{ category: string; id: string }>;
};

export async function generateMetadata({ params }: Omit<ProductLayoutProps, 'children'>): Promise<Metadata> {
  const { category, id } = await params;
  if (category === 'industrial-mini-pc' && industrialProductAliases[id]) permanentRedirect(industrialProductAliases[id]);
  if (category === 'ai-mini-pc' && aiProductAliases[id]) permanentRedirect(aiProductAliases[id]);
  const product = productSeo[id];

  if (!product || product.category !== category) {
    return { title: 'Product Not Found', robots: { index: false, follow: false } };
  }

  return createPageMetadata(product);
}

export default async function ProductLayout({ children, params }: ProductLayoutProps) {
  const { category, id } = await params;
  if (category === 'industrial-mini-pc' && industrialProductAliases[id]) permanentRedirect(industrialProductAliases[id]);
  if (category === 'ai-mini-pc' && aiProductAliases[id]) permanentRedirect(aiProductAliases[id]);
  const product = productSeo[id];
  const categoryEntry = categorySeo[category];
  const catalogItem = [...industrialCatalog, ...firewallCatalog, ...commercialCatalog, ...aiCatalog].find((item) => item.id === id);
  const configurationProduct = category === 'industrial-mini-pc' ? industrialCatalog.find(item => item.id === id) : category === 'ai-mini-pc' ? aiCatalog.find(item => item.id === id) : undefined;
  const isValidProduct = product && product.category === category;

  if (!isValidProduct) return children;

  const productData = {
    '@context': 'https://schema.org',
    '@type': configurationProduct?.skus?.length ? 'ProductGroup' : 'Product',
    '@id': `${SITE_URL}${product.path}#product`,
    name: product.name,
    description: product.description,
    image: product.image ? [`${SITE_URL}${product.image}`] : undefined,
    url: `${SITE_URL}${product.path}`,
    sku: configurationProduct?.skus?.length ? undefined : catalogItem?.name || id.toUpperCase(),
    mpn: configurationProduct?.skus?.length ? undefined : catalogItem?.name || id.toUpperCase(),
    productGroupID: configurationProduct?.skus?.length ? configurationProduct.name : undefined,
    hasVariant: configurationProduct?.skus?.map(sku => ({
      '@type': 'Product',
      name: `${configurationProduct.name} ${sku.label}`,
      sku: sku.legacyNames[0],
      image: `${SITE_URL}${sku.image}`,
      url: `${SITE_URL}${product.path}#sku-${sku.key}`,
      additionalProperty: (id === 'mcai2' ? sku.specs : mergeSpecifications(configurationProduct.specs, sku.specs)).map(spec => ({ '@type': 'PropertyValue', name: spec.label, value: spec.value })),
    })),
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
