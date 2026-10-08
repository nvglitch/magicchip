import type { IndustrialCatalogItem } from '@/lib/industrial-catalog';
import type { ProductConfiguration } from '@/lib/product-specifications';

type FamilyDefinition = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  variants: { id: string; key: string; label: string; labelTranslations?: ProductConfiguration['labelTranslations']; cooling?: string }[];
};

const families: FamilyDefinition[] = [
  {
    id: 'mcipcd5',
    name: 'MCIPCD5',
    tagline: 'Intel N100 / i3-N305 industrial PC with two cooling configurations',
    description: 'Choose the fanless MCIPCD5 or fan-cooled MCIPCD5F enclosure. Both configurations offer Intel N100 / i3-N305 processors, up to 32GB DDR5, four Intel I226-V network interfaces, and dual serial ports.',
    highlights: ['Intel N100 / i3-N305', 'Up to 32GB DDR5', '4 × Intel I226-V LAN', 'Fanless / fan-cooled enclosures'],
    variants: [
      { id: 'mcipcd5', key: 'standard', label: 'MCIPCD5 · Fanless', labelTranslations: { de: 'MCIPCD5 · Lüfterlos', fr: 'MCIPCD5 · Sans ventilateur', it: 'MCIPCD5 · Senza ventola', es: 'MCIPCD5 · Sin ventilador' }, cooling: 'Fanless enclosure' },
      { id: 'mcipcd5f', key: 'fan', label: 'MCIPCD5F · Fan-cooled', labelTranslations: { de: 'MCIPCD5F · Mit Lüfter', fr: 'MCIPCD5F · Avec ventilateur', it: 'MCIPCD5F · Con ventola', es: 'MCIPCD5F · Con ventilador' }, cooling: 'Fan-cooled enclosure' },
    ],
  },
  {
    id: 'mcipc2',
    name: 'MCIPC2',
    tagline: 'Dual-LAN industrial PC with J1900 and Intel Core i3 configurations',
    description: 'Type A (MCIPC2A) offers J1900 processing, DDR3L memory and two COM ports. Type B (MCIPC2B) offers Intel Core i3 processors, DDR4 memory and six COM ports. Both support HDMI and VGA output with dual Gigabit LAN; enclosure, memory, USB, storage, operating range and dimensions follow the selected Type.',
    highlights: ['J1900 / Intel Core i3', 'Dual Gigabit LAN', '2 or 6 COM ports, by Type', '12 V DC input'],
    variants: [
      { id: 'mcipc2a', key: 'type-a', label: 'Type A · J1900 · DDR3L · 2 COM', labelTranslations: { de: 'Typ A · J1900 · DDR3L · 2 COM', fr: 'Type A · J1900 · DDR3L · 2 COM', it: 'Tipo A · J1900 · DDR3L · 2 COM', es: 'Tipo A · J1900 · DDR3L · 2 COM' } },
      { id: 'mcipc2b', key: 'type-b', label: 'Type B · Intel Core i3 · DDR4 · 6 COM', labelTranslations: { de: 'Typ B · Intel Core i3 · DDR4 · 6 COM', fr: 'Type B · Intel Core i3 · DDR4 · 6 COM', it: 'Tipo B · Intel Core i3 · DDR4 · 6 COM', es: 'Tipo B · Intel Core i3 · DDR4 · 6 COM' } },
    ],
  },
];

export const industrialFamilySourceIds = families.flatMap(family => family.variants.map(variant => variant.id));

function configurationGallery(model: IndustrialCatalogItem): ProductConfiguration['galleryCards'] {
  if (model.galleryCards) return model.galleryCards;
  const imageBase = model.image.replace(/\/[^/]+$/, '');
  return [
    { image: `${imageBase}/rear-transparent.png`, title: `${model.name} rear I/O and enclosure` },
    { image: `${imageBase}/internal-transparent.png`, title: `${model.name} internal board layout` },
  ];
}

// Keep each original model's complete facts; share only exactly matching rows.
export function mergeIndustrialFamilies(sourceModels: readonly IndustrialCatalogItem[]): IndustrialCatalogItem[] {
  return families.map(family => {
    const models = family.variants.map(variant => {
      const model = sourceModels.find(item => item.id === variant.id);
      if (!model) throw new Error(`Missing source model for ${family.name}: ${variant.id}`);
      return model;
    });
    const first = models[0];
    const sharedSpecs = first.specs.filter(spec => spec.label !== 'Model' && models.every(model =>
      model.specs.some(row => row.label.toLowerCase() === spec.label.toLowerCase() && row.value === spec.value),
    ));
    return {
      id: family.id,
      name: family.name,
      series: first.series,
      tagline: family.tagline,
      description: family.description,
      highlights: family.highlights,
      image: first.image,
      // Supporting views belong to the selected configuration's image panel.
      galleryImages: [],
      galleryCards: [],
      specs: [{ label: 'Model', value: family.name }, ...sharedSpecs],
      operatingRange: models.every(model => model.operatingRange === first.operatingRange) ? first.operatingRange : undefined,
      skus: family.variants.map((variant, index) => ({
        key: variant.key,
        label: variant.label,
        labelTranslations: variant.labelTranslations,
        legacyNames: [models[index].name],
        image: models[index].image,
        specs: [...models[index].specs, ...(variant.cooling ? [{ label: 'Cooling', value: variant.cooling }] : [])],
        galleryCards: configurationGallery(models[index]),
      })),
    };
  });
}
