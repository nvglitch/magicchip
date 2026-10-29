import mcipc2 from '@/content/products/items/mcipc2.json';
import mcipcd5 from '@/content/products/items/mcipcd5.json';
import type { IndustrialCatalogItem } from '@/lib/industrial-catalog';
import { mergeSpecifications } from '@/lib/product-specifications';

// The reviewed brochures explicitly retain both Types / cooling configurations.
export const mergedIndustrialFamilies: IndustrialCatalogItem[] = [mcipcd5, mcipc2] as IndustrialCatalogItem[];
export const industrialFamilySourceIds = mergedIndustrialFamilies.flatMap(family =>
  family.skus!.flatMap(sku => sku.legacyNames.map(name => name.toLowerCase())),
);

// Exact-model compatibility records derive from the current canonical family data.
export const reviewedIndustrialFamilyModels: IndustrialCatalogItem[] = mergedIndustrialFamilies.flatMap(family =>
  family.skus!.map(sku => ({
    id: sku.legacyNames[0].toLowerCase(), name: sku.legacyNames[0], series: family.series,
    tagline: sku.label, description: family.description, image: sku.image,
    galleryCards: sku.galleryCards, highlights: family.highlights,
    specs: mergeSpecifications(family.specs, sku.specs),
  })),
);
