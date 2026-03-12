'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Cpu, Server, Shield, Zap } from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function ProductCategories() {
  const { t } = useLanguage();

  const categories = [
    {
      id: 1,
      title: t.products.categories.processors.title,
      description: t.products.categories.processors.description,
      icon: Cpu,
      image: 'bg-gradient-to-br from-blue-600 to-blue-800',
    },
    {
      id: 2,
      title: t.products.categories.ai.title,
      description: t.products.categories.ai.description,
      icon: Zap,
      image: 'bg-gradient-to-br from-purple-600 to-purple-800',
    },
    {
      id: 3,
      title: t.products.categories.network.title,
      description: t.products.categories.network.description,
      icon: Server,
      image: 'bg-gradient-to-br from-emerald-600 to-emerald-800',
    },
    {
      id: 4,
      title: t.products.categories.security.title,
      description: t.products.categories.security.description,
      icon: Shield,
      image: 'bg-gradient-to-br from-orange-600 to-orange-800',
    },
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
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
              className="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image Area */}
              <div className={`h-48 ${category.image} relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <category.icon className="w-16 h-16 text-white/80" />
                </div>
                {/* Scale effect on hover */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors group/link"
                >
                  {t.products.learnMore}
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
