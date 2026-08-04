'use client';

import { 
  Target, 
  Cpu, 
  Factory, 
  Globe, 
  HelpCircle, 
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
      icon: Target,
    },
    {
      id: 2,
      title: t.services.items.oemOdm.title,
      description: t.services.items.oemOdm.description,
      icon: Cpu,
    },
    {
      id: 3,
      title: t.services.items.rapidProduction.title,
      description: t.services.items.rapidProduction.description,
      icon: Factory,
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
      icon: HelpCircle,
    },
    {
      id: 6,
      title: t.services.items.lifecycleManagement.title,
      description: t.services.items.lifecycleManagement.description,
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="services" className="relative overflow-hidden bg-[#f3f7f5] py-16 md:py-20">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12">
          <h2 className="mb-4 text-4xl font-bold text-slate-950 md:text-5xl">
            {t.services.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
              {/* Icon */}
              <div className="mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 shadow-lg shadow-blue-600/20">
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a href="/contact" className="inline-flex cursor-pointer items-center rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700">
            {t.services.cta}
          </a>
          <p className="mt-4 text-gray-600">
            {t.services.customPackage}
          </p>
        </div>
      </div>
    </section>
  );
}
