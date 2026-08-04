'use client';

import { ArrowRight } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';
import Image from 'next/image';
import Link from 'next/link';

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
      mobileImage: '/assets/home/categories/mobile/' + product.id + '.webp',
      url: product.url,
    };
  });

  return (
    <section id="products" className="bg-[#f3f7f5] py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="mb-4 text-4xl font-bold text-slate-950 md:text-5xl">
            {t.products.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.products.subtitle}
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {categories.map((category) => (
            <div key={category.id} className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl">
              {/* Image Area */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 md:h-48 md:aspect-auto">
                {category.image && (
                  <>
                    <Image
                      src={category.mobileImage}
                      alt={category.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105 md:hidden"
                      sizes="(max-width: 767px) 100vw, 0px"
                    />
                    <Image
                      src={category.image}
                      alt=""
                      fill
                      className="hidden object-cover transition-transform duration-300 group-hover:scale-105 md:block"
                      sizes="(max-width: 1279px) 50vw, 640px"
                    />
                  </>
                )}
                {/* Scale effect on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-blue-950/10 transition-colors duration-300" />
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-slate-600 mb-4">
                  {category.description}
                </p>
                <Link
                  href={`/products/${category.id}`}
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group/link"
                >
                  {t.products.learnMore}
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
