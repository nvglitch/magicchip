import fs from 'fs';
import path from 'path';

// This module should only be used in Server Components
if (typeof window !== 'undefined') {
  throw new Error('content-loader can only be used in Server Components');
}

const contentDir = path.join(process.cwd(), 'content');

export interface MultiLangText {
  en: string;
  zh?: string;
  fr?: string;
  de?: string;
  it?: string;
  es?: string;
}

export interface Banner {
  id: string;
  order: number;
  image: string | null;
  title: MultiLangText;
  subtitle: MultiLangText;
  ctaText: MultiLangText;
  ctaLink: string;
  published: boolean;
}

export interface Product {
  id: string;
  order: number;
  icon: string;
  gradient: string;
  title: MultiLangText;
  description: MultiLangText;
  features?: MultiLangText;
  published: boolean;
}

export interface NewsArticle {
  id: string;
  date: string;
  category: MultiLangText;
  title: MultiLangText;
  excerpt: MultiLangText;
  image: string;
  published: boolean;
}

export interface SiteConfig {
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
    wechatQR: string;
    address: MultiLangText;
    businessHours: MultiLangText;
  };
  social: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
    youtube?: string;
  };
  company: {
    name: string;
    logo: string;
    foundedYear: number;
    description: MultiLangText;
  };
  newsletter: {
    enabled: boolean;
    apiEndpoint: string;
  };
}

/**
 * Read all JSON files from a directory
 */
function readJsonFiles<T>(dirPath: string): T[] {
  try {
    const fullPath = path.join(contentDir, dirPath);

    if (!fs.existsSync(fullPath)) {
      console.warn(`Directory not found: ${fullPath}`);
      return [];
    }

    const files = fs.readdirSync(fullPath);
    const jsonFiles = files.filter(file => file.endsWith('.json'));

    return jsonFiles.map(file => {
      const filePath = path.join(fullPath, file);
      const fileContent = fs.readFileSync(filePath, 'utf-8');
      return JSON.parse(fileContent) as T;
    });
  } catch (error) {
    console.error(`Error reading files from ${dirPath}:`, error);
    return [];
  }
}

/**
 * Get all banners sorted by order
 */
export function getAllBanners(): Banner[] {
  const banners = readJsonFiles<Banner>('banners');
  return banners
    .filter(banner => banner.published)
    .sort((a, b) => a.order - b.order);
}

/**
 * Get all products sorted by order
 */
export function getAllProducts(): Product[] {
  const products = readJsonFiles<Product>('products');
  return products
    .filter(product => product.published)
    .sort((a, b) => a.order - b.order);
}

/**
 * Get all news articles sorted by date (newest first)
 */
export function getAllNews(): NewsArticle[] {
  const news = readJsonFiles<NewsArticle>('news');
  return news
    .filter(article => article.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get site configuration
 */
export function getSiteConfig(): SiteConfig | null {
  try {
    const configPath = path.join(contentDir, 'site-config.json');

    if (!fs.existsSync(configPath)) {
      console.warn('Site config not found');
      return null;
    }

    const fileContent = fs.readFileSync(configPath, 'utf-8');
    return JSON.parse(fileContent) as SiteConfig;
  } catch (error) {
    console.error('Error reading site config:', error);
    return null;
  }
}

/**
 * Get localized text based on language
 */
export function getLocalizedText(text: MultiLangText, language: string): string {
  return text[language as keyof MultiLangText] || text.en;
}
