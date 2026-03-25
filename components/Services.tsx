'use client';

import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Wrench, 
  Globe, 
  Headphones, 
  Rocket, 
  ShieldCheck 
} from 'lucide-react';
import { useLanguage } from '@/lib/i18n/LanguageContext';

export default function Services() {
  const { t } = useLanguage();

  const services = [
    {
      id: 1,
      title: t.services.items.industrySolutions.title,
      description: t.services.items.industrySolutions.description,
      icon: Lightbulb,
    },
    {
      id: 2,
      title: t.services.items.oemOdm.title,
      description: t.services.items.oemOdm.description,
      icon: Wrench,
    },
    {
      id: 3,
      title: t.services.items.rapidProduction.title,
      description: t.services.items.rapidProduction.description,
      icon: Rocket,
    },
    {
      id: 4,
      title: t.services.items.globalSupply.title,
      description: t.services.items.globalSupply.description,
      icon: Globe,
    },
    {
      id: 5,
      title: t.services.items.technicalSupport.title,
      description: t.services.items.technicalSupport.description,
      icon: Headphones,
    },
    {
      id: 6,
      title: t.services.items.lifecycleManagement.title,
      description: t.services.items.lifecycleManagement.description,
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
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
            {t.services.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-md p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-blue-600" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a href="/contact" className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors cursor-pointer">
            {t.services.cta}
          </a>
          <p className="mt-4 text-gray-600">
            {t.services.customPackage}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
