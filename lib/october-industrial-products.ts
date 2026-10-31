import mcipcbp1 from '@/content/products/items/mcipcbp1.json';
import mcipc8Hdmi from '@/content/products/items/mcipc8-hdmi.json';
import mcipc8 from '@/content/products/items/mcipc8.json';
import type { IndustrialCatalogItem } from '@/lib/industrial-catalog';

// Reviewed against the October 29 brochures; conditional facts stay with their platform.
export const octoberIndustrialProducts: IndustrialCatalogItem[] = [mcipcbp1, mcipc8Hdmi, mcipc8] as IndustrialCatalogItem[];
