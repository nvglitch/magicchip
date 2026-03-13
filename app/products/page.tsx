'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Cpu, Brain, Network, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const productsData = {
  en: {
    hero: {
      title: 'Our Products',
      subtitle: 'Innovative semiconductor solutions powering the future of computing'
    },
    categories: [
      {
        title: 'Enterprise CPUs',
        description: 'High-performance processors designed for data center and enterprise workloads',
        features: ['Up to 128 cores', 'Advanced cache architecture', 'Enterprise-grade reliability', 'Virtualization support'],
        icon: Cpu,
        href: '#'
      },
      {
        title: 'AI Accelerators',
        description: 'Specialized chips optimized for machine learning and AI workloads',
        features: ['Tensor processing cores', 'High memory bandwidth', 'Low latency inference', 'Scalable architecture'],
        icon: Brain,
        href: '#'
      },
      {
        title: 'Network Chips',
        description: 'Advanced connectivity solutions for next-generation networks',
        features: ['High-speed data transfer', 'Low power consumption', 'Advanced security features', 'Flexible programmability'],
        icon: Network,
        href: '#'
      },
      {
        title: 'Security Modules',
        description: 'Hardware-based security solutions for data protection',
        features: ['Hardware encryption', 'Secure boot', 'Tamper detection', 'Key management'],
        icon: Shield,
        href: '#'
      }
    ],
    cta: {
      title: 'Need a Custom Solution?',
      description: 'We offer customized semiconductor solutions tailored to your specific requirements.',
      button: 'Contact Sales'
    }
  },
  zh: {
    hero: {
      title: '产品中心',
      subtitle: '创新半导体解决方案，为计算未来提供动力'
    },
    categories: [
      {
        title: '企业级CPU',
        description: '为数据中心和企业工作负载设计的高性能处理器',
        features: ['最高128核心', '先进缓存架构', '企业级可靠性', '虚拟化支持'],
        icon: Cpu,
        href: '#'
      },
      {
        title: 'AI加速器',
        description: '针对机器学习和AI工作负载优化的专业芯片',
        features: ['张量处理核心', '高内存带宽', '低延迟推理', '可扩展架构'],
        icon: Brain,
        href: '#'
      },
      {
        title: '网络芯片',
        description: '面向下一代网络的高级连接解决方案',
        features: ['高速数据传输', '低功耗', '高级安全功能', '灵活可编程'],
        icon: Network,
        href: '#'
      },
      {
        title: '安全模块',
        description: '用于数据保护的硬件安全解决方案',
        features: ['硬件加密', '安全启动', '篡改检测', '密钥管理'],
        icon: Shield,
        href: '#'
      }
    ],
    cta: {
      title: '需要定制方案？',
      description: '我们提供根据您的特定需求定制的半导体解决方案。',
      button: '联系销售'
    }
  }
};

export default function ProductsPage() {
  const { language } = useLanguage();
  const data = language === 'en' ? productsData.en : productsData.zh;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.hero.title}</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">{data.hero.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {data.categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 rounded-md p-8 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-md flex items-center justify-center">
                    <category.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <a
                    href={category.href}
                    className="flex items-center text-blue-600 hover:text-blue-700 font-medium transition-colors"
                  >
                    {language === 'en' ? 'Learn More' : '了解更多'}
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{category.title}</h3>
                <p className="text-gray-600 mb-6">{category.description}</p>
                <ul className="space-y-2">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-md p-8 md:p-12 text-white text-center"
          >
            <h2 className="text-3xl font-bold mb-4">{data.cta.title}</h2>
            <p className="text-lg mb-8 opacity-90">{data.cta.description}</p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-md hover:bg-gray-100 transition-colors"
            >
              {data.cta.button}
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
