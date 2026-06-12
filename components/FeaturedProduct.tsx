'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function FeaturedProduct() {
  const { t } = useLanguage();

  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-teal-50 via-white to-amber-50/50 relative">
      {/* Tech pattern overlay — beneath content, above gradient */}
      <div className="absolute inset-0 tech-pattern-overlay pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden bg-gradient-to-br from-teal-100 via-white to-amber-100 shadow-xl ring-1 ring-teal-900/10">
              <Image
                src="/MCAI35.png"
                alt="MCAI35"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <div className="mt-4 text-center">
              <p className="text-gray-400 text-sm">{t.featured.title}</p>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-teal-700 font-semibold text-sm uppercase tracking-wide">
              {t.featured.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2 mb-4">
              {t.featured.title}
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              {t.featured.description}
            </p>

            {/* Features List */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {t.featured.features.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center space-x-2"
                >
                  <Check className="w-5 h-5 text-amber-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="/products/desktop-mini-pc/mcai35"
              className="group inline-flex items-center px-6 py-3 border-2 border-teal-700 text-teal-800 font-semibold rounded-md hover:bg-teal-700 hover:text-white hover:border-teal-700 transition-all duration-300"
            >
              {t.featured.cta}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
