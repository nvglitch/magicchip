import mcn1 from '@/content/products/items/mcn1.json';
import mcn2 from '@/content/products/items/mcn2.json';
import mcn5 from '@/content/products/items/mcn5.json';
import mcn6 from '@/content/products/items/mcn6.json';
import type { CommercialCatalogItem } from '@/lib/commercial-catalog';

// Reviewed October 27, 2026. Keep onboard/SO-DIMM memory and optional features model-specific.
export const mcnDesktopProducts: CommercialCatalogItem[] = [mcn1, mcn2, mcn5, mcn6] as CommercialCatalogItem[];
