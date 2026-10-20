import { localizedHref } from '@/lib/i18n/routing';
import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { commercialCatalog } from '@/lib/commercial-catalog';
import { isValidLanguage } from '@/lib/i18n/config';
import { firewallCatalog } from '@/lib/firewall-catalog';
import { industrialCatalog, industrialProductAliases } from '@/lib/industrial-catalog';
import { aiCatalog, aiProductAliases } from '@/lib/ai-catalog';
import { firewallProductAliases } from '@/lib/firewall-product-aliases';
import { permanentRedirect } from 'next/navigation';
import { mergeSpecifications } from '@/lib/product-specifications';
import { categorySeo, createPageMetadata, productSeo, serializeJsonLd, SITE_NAME, SITE_URL } from '@/lib/seo';

type ProductLayoutProps = {
  children: ReactNode;
  params: Promise<{ lang: string; category: string; id: string }>;
};

export async function generateMetadata({ params }: Omit<ProductLayoutProps, 'children'>): Promise<Metadata> {
  const { lang, category, id } = await params;
  if (category === 'industrial-mini-pc' && industrialProductAliases[id]) permanentRedirect(localizedHref(industrialProductAliases[id], lang));
  if (category === 'ai-mini-pc' && aiProductAliases[id]) permanentRedirect(localizedHref(aiProductAliases[id], lang));
  if (category === 'firewall-mini-pc' && firewallProductAliases[id]) permanentRedirect(localizedHref(firewallProductAliases[id], lang));
  const product = productSeo[id];

  if (!product || product.category !== category) {
    return { title: 'Product Not Found', robots: { index: false, follow: false } };
  }

  return createPageMetadata(product, lang);
}

export default async function ProductLayout({ children, params }: ProductLayoutProps) {
  const { lang, category, id } = await params;
  if (category === 'industrial-mini-pc' && industrialProductAliases[id]) permanentRedirect(localizedHref(industrialProductAliases[id], lang));
  if (category === 'ai-mini-pc' && aiProductAliases[id]) permanentRedirect(localizedHref(aiProductAliases[id], lang));
  if (category === 'firewall-mini-pc' && firewallProductAliases[id]) permanentRedirect(localizedHref(firewallProductAliases[id], lang));
  const product = productSeo[id];
  const categoryEntry = categorySeo[category];
  const catalogItem = [...industrialCatalog, ...firewallCatalog, ...commercialCatalog, ...aiCatalog].find((item) => item.id === id);
  const translatedCopy = commercialCatalog.find(item => item.id === id)?.translations?.[isValidLanguage(lang) ? lang : 'en'];
  const configurationProduct = category === 'industrial-mini-pc' ? industrialCatalog.find(item => item.id === id) : category === 'ai-mini-pc' ? aiCatalog.find(item => item.id === id) : category === 'firewall-mini-pc' ? firewallCatalog.find(item => item.id === id) : undefined;
  const isValidProduct = product && product.category === category;

  if (!isValidProduct) return children;

  const productData = {
    '@context': 'https://schema.org',
    '@type': configurationProduct?.skus?.length ? 'ProductGroup' : 'Product',
    '@id': `${SITE_URL}${localizedHref(product.path, lang)}#product`,
    name: product.name,
    description: translatedCopy?.tagline || product.description,
    image: product.image ? [`${SITE_URL}${product.image}`] : undefined,
    url: `${SITE_URL}${localizedHref(product.path, lang)}`,
    sku: configurationProduct?.skus?.length ? undefined : catalogItem?.name || id.toUpperCase(),
    mpn: configurationProduct?.skus?.length ? undefined : catalogItem?.name || id.toUpperCase(),
    productGroupID: configurationProduct?.skus?.length ? configurationProduct.name : undefined,
    hasVariant: configurationProduct?.skus?.map(sku => ({
      '@type': 'Product',
      name: `${configurationProduct.name} ${sku.label}`,
      sku: sku.legacyNames[0],
      image: `${SITE_URL}${sku.image}`,
      url: `${SITE_URL}${localizedHref(product.path, lang)}#sku-${sku.key}`,
      additionalProperty: (id === 'mcai2' ? sku.specs : mergeSpecifications(configurationProduct.specs, sku.specs)).map(spec => ({ '@type': 'PropertyValue', name: spec.label, value: spec.value })),
    })),
    category: categoryEntry?.name,
    brand: { '@type': 'Brand', name: SITE_NAME },
    manufacturer: { '@id': `${SITE_URL}/#organization` },
    additionalProperty: (translatedCopy?.specs || catalogItem?.specs)
      ?.filter((spec) => !['Model', 'Series'].includes(spec.label))
      .map((spec) => ({ '@type': 'PropertyValue', name: spec.label, value: spec.value })),
  };
  const breadcrumb = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/${lang}` },
      { '@type': 'ListItem', position: 2, name: 'Products', item: `${SITE_URL}/${lang}/products` },
      { '@type': 'ListItem', position: 3, name: categoryEntry?.name || category, item: `${SITE_URL}/${lang}/products/${category}` },
      { '@type': 'ListItem', position: 4, name: product.name, item: `${SITE_URL}${localizedHref(product.path, lang)}` },
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
