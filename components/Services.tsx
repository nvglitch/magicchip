'use client';

import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Wrench, 
  Globe, 
  Headphones, 
  GraduationCap, 
  RefreshCw 
} from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Strategic Consulting',
    description: 'Expert guidance on hardware architecture and infrastructure planning tailored to your business needs.',
    icon: Lightbulb,
  },
  {
    id: 2,
    title: 'Custom Engineering',
    description: 'Bespoke chip design and optimization services for specialized applications and unique requirements.',
    icon: Wrench,
  },
  {
    id: 3,
    title: 'Global Deployment',
    description: 'End-to-end support for worldwide rollouts including logistics, installation, and configuration.',
    icon: Globe,
  },
  {
    id: 4,
    title: '24/7 Technical Support',
    description: 'Round-the-clock assistance from our team of certified engineers and technical specialists.',
    icon: Headphones,
  },
  {
    id: 5,
    title: 'Training & Certification',
    description: 'Comprehensive training programs to help your team maximize the potential of our solutions.',
    icon: GraduationCap,
  },
  {
    id: 6,
    title: 'Lifecycle Management',
    description: 'Continuous updates, maintenance, and upgrade paths to keep your systems at peak performance.',
    icon: RefreshCw,
  },
];

export default function Services() {
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
            Enterprise Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive support and professional services to ensure your success at every stage
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
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
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
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Need a customized service package?
          </p>
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
            Contact Our Team
          </button>
        </motion.div>
      </div>
    </section>
  );
}
