'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { BookOpen, Factory, Users, ArrowRight, Globe, Award, TrendingUp } from 'lucide-react';

const aboutData = {
  en: {
    hero: {
      title: 'About MagicChip',
      subtitle: 'Pioneering semiconductor innovation since 2015'
    },
    sections: [
      {
        title: 'Our Company',
        description: 'Learn about our history, mission, and vision for the future of semiconductor technology',
        icon: BookOpen,
        href: '/company',
        stats: [
          { label: 'Founded', value: '2015' },
          { label: 'Employees', value: '500+' },
          { label: 'Patents', value: '120+' }
        ]
      },
      {
        title: 'Manufacturing Facilities',
        description: 'Explore our state-of-the-art fabrication facilities and production capabilities',
        icon: Factory,
        href: '/factory',
        stats: [
          { label: 'Factories', value: '3' },
          { label: 'Capacity', value: '10M+' },
          { label: 'Yield Rate', value: '99.9%' }
        ]
      },
      {
        title: 'Member Team',
        description: 'Meet our executive team driving innovation and growth in the semiconductor industry',
        icon: Users,
        href: '/leadership',
        stats: [
          { label: 'Executives', value: '8' },
          { label: 'Avg. Experience', value: '20+' },
          { label: 'Industry Awards', value: '15' }
        ]
      }
    ],
    highlights: [
      {
        icon: Globe,
        title: 'Global Presence',
        description: 'Operations in 4 continents with customers in 50+ countries'
      },
      {
        icon: Award,
        title: 'Industry Recognition',
        description: 'Award-winning products and consistent quality certifications'
      },
      {
        icon: TrendingUp,
        title: 'Rapid Growth',
        description: 'Year-over-year revenue growth of 40% for the past 5 years'
      }
    ]
  },
  zh: {
    hero: {
      title: '关于 MagicChip',
      subtitle: '自2015年引领半导体创新'
    },
    sections: [
      {
        title: '公司介绍',
        description: '了解我们的历史、使命和半导体技术的未来愿景',
        icon: BookOpen,
        href: '/company',
        stats: [
          { label: '成立时间', value: '2015年' },
          { label: '员工数量', value: '500+' },
          { label: '专利数量', value: '120+' }
        ]
      },
      {
        title: '生产设施',
        description: '探索我们先进的制造设施和生产产能',
        icon: Factory,
        href: '/factory',
        stats: [
          { label: '工厂数量', value: '3座' },
          { label: '年产能', value: '1000万+' },
          { label: '良品率', value: '99.9%' }
        ]
      },
      {
        title: '领导团队',
        description: '认识推动半导体行业创新与发展的执行团队',
        icon: Users,
        href: '/leadership',
        stats: [
          { label: '高管人数', value: '8位' },
          { label: '平均经验', value: '20+' },
          { label: '行业奖项', value: '15个' }
        ]
      }
    ],
    highlights: [
      {
        icon: Globe,
        title: '全球布局',
        description: '业务遍及4大洲，客户覆盖50多个国家'
      },
      {
        icon: Award,
        title: '行业认可',
        description: '获奖产品与持续的质量认证'
      },
      {
        icon: TrendingUp,
        title: '快速增长',
        description: '过去5年年收入增长40%'
      }
    ]
  }
};

export default function AboutPage() {
  const { language } = useLanguage();
  const data = language === 'en' ? aboutData.en : aboutData.zh;

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

      {/* About Sections */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.sections.map((section, index) => (
              <motion.a
                key={section.title}
                href={section.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-gray-50 rounded-md p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-md flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors">
                  <section.icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{section.title}</h3>
                <p className="text-gray-600 mb-6">{section.description}</p>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {section.stats.map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-lg font-bold text-blue-600">{stat.value}</div>
                      <div className="text-xs text-gray-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <span className="flex items-center text-blue-600 font-medium">
                  {language === 'en' ? 'Learn More' : '了解更多'}
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {data.highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
