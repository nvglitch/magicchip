'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function FeaturedProduct() {
  const { t } = useLanguage();
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D tilt — track normalized mouse position
  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const rawShineX = useMotionValue(50);
  const rawShineY = useMotionValue(50);
  const rotateX = useSpring(rawRotateX, { stiffness: 180, damping: 22 });
  const rotateY = useSpring(rawRotateY, { stiffness: 180, damping: 22 });
  const shineX = useSpring(rawShineX, { stiffness: 120, damping: 25 });
  const shineY = useSpring(rawShineY, { stiffness: 120, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = (e.clientX - rect.left) / rect.width;   // 0..1
    const y = (e.clientY - rect.top) / rect.height;    // 0..1
    rawRotateX.set((y - 0.5) * -16);  // -8° to +8°
    rawRotateY.set((x - 0.5) * 16);   // -8° to +8°
    rawShineX.set(x * 100);
    rawShineY.set(y * 100);
  };

  const handleMouseLeave = () => {
    rawRotateX.set(0);
    rawRotateY.set(0);
    rawShineX.set(50);
    rawShineY.set(50);
  };

  const shineBg = useMotionTemplate`radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255,255,255,0.25) 0%, transparent 60%)`;

  return (
    <section id="solutions" className="py-20 bg-gradient-to-b from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side — 3D tilt */}
          <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
            style={{ perspective: 600 }}
          >
            <motion.div
              className="relative rounded-lg overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 shadow-xl ring-1 ring-blue-900/5"
              style={{ rotateX, rotateY }}
            >
              <Image
                src="/MCAI35.png"
                alt="MCAI35"
                width={600}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
              {/* Shine overlay — follows mouse */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{ background: shineBg }}
              />
            </motion.div>
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
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wide">
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
                  <Check className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <button className="inline-flex items-center px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-md hover:bg-gray-900 hover:text-white hover:border-emerald-500 transition-all duration-300">
              {t.featured.cta}
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
