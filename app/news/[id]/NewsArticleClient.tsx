'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Calendar, Tag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface MultiLangText {
  en: string;
  zh?: string;
  fr?: string;
  de?: string;
  it?: string;
  es?: string;
}

interface NewsArticle {
  id: string;
  date: string;
  category: MultiLangText;
  title: MultiLangText;
  excerpt: MultiLangText;
  image: string;
  published: boolean;
}

interface NewsArticleClientProps {
  article: NewsArticle;
}

function getLocalizedText(text: MultiLangText, language: string): string {
  return text[language as keyof MultiLangText] || text.en;
}

export default function NewsArticleClient({ article }: NewsArticleClientProps) {
  const { language } = useLanguage();

  const title = getLocalizedText(article.title, language);
  const excerpt = getLocalizedText(article.excerpt, language);
  const category = getLocalizedText(article.category, language);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/news"
            className="inline-flex items-center text-blue-100 hover:text-white mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to News
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-600 text-white">
                <Tag className="w-3 h-3 mr-1" />
                {category}
              </span>
              <div className="flex items-center text-sm text-blue-100">
                <Calendar className="w-4 h-4 mr-2" />
                {article.date}
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{title}</h1>
            <p className="text-xl text-blue-100">{excerpt}</p>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
              <img
                src={article.image}
                alt={title}
                className="w-full h-96 object-cover"
              />
            </div>

            <div className="bg-white rounded-lg shadow-sm p-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {excerpt}
                </p>
                <p className="text-gray-600 mt-6">
                  This is a placeholder for the full article content. In a production environment,
                  you would store the full article content in your JSON files and display it here.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </article>
    </div>
  );
}
