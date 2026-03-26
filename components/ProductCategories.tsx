'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import Image from 'next/image';

interface MultiLangText {
  en: string;
  zh?: string;
  fr?: string;
  de?: string;
  it?: string;
  es?: string;
}

interface Product {
  id: string;
  order: number;
  icon: string;
  gradient: string;
  image?: string;
  url?: string;
  title: MultiLangText;
  description: MultiLangText;
  features?: MultiLangText;
  published: boolean;
}

interface ProductCategoriesProps {
  products: Product[];
}

function getLocalizedText(text: MultiLangText, language: string): string {
  return text[language as keyof MultiLangText] || text.en;
}

export default function ProductCategories({ products }: ProductCategoriesProps) {
  const { t, language } = useLanguage();

  const categories = products.map(product => {
    return {
      id: product.id,
      title: getLocalizedText(product.title, language),
      description: getLocalizedText(product.description, language),
      image: product.image || '',
      url: product.url,
    };
  });

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            {t.products.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.products.subtitle}
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-md overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Area */}
              <div className="h-48 relative overflow-hidden bg-gray-100">
                {category.image && (
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                )}
                {/* Scale effect on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {category.description}
                </p>
                {category.url ? (
                  <a
                    href={category.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group/link"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {t.products.learnMore}
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <a
                    href="/products"
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group/link"
                  >
                    {t.products.learnMore}
                    <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
