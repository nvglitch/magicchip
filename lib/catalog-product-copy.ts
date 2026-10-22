import type { Language } from '@/lib/i18n/config';

export type CatalogProductFeature = {
  icon: 'Cpu' | 'Network' | 'HardDrive' | 'Monitor' | 'Layers' | 'Usb' | 'Thermometer' | 'Zap' | 'Shield' | 'Server';
  title: string;
  description: string;
};

// Optional, product-specific presentation shared by commercial and network PCs.
export type CatalogProductCopy = {
  tagline: string;
  description: string;
  highlights: string[];
  specs: { label: string; value: string }[];
  galleryCards?: { image: string; title: string; description?: string }[];
  features?: CatalogProductFeature[];
  specificationHeading?: string;
  featureHeading?: string;
  advantageSummary?: string;
};

export type CatalogProductTranslations = Partial<Record<Language, CatalogProductCopy>>;
