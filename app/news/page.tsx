'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Tag } from 'lucide-react';

const newsData = {
  en: [
    {
      id: 1,
      title: 'MagicChip Announces Next-Generation AI Accelerator Platform',
      excerpt: 'Revolutionary MC-AI Pro series delivers 3x performance improvement for machine learning workloads.',
      date: 'March 10, 2026',
      category: 'Product Launch',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'MagicChip Expands Manufacturing Capacity with New Fab Facility',
      excerpt: 'The new 300mm wafer fabrication line in Shenzhen will increase production capacity by 50%.',
      date: 'March 5, 2026',
      category: 'Company News',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Strategic Partnership with CloudTech Solutions Announced',
      excerpt: 'MagicChip and CloudTech join forces to deliver integrated edge computing solutions.',
      date: 'February 28, 2026',
      category: 'Partnership',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'MagicChip Wins "Best Enterprise Hardware Provider" Award',
      excerpt: 'Industry recognition for outstanding contributions to data center infrastructure.',
      date: 'February 20, 2026',
      category: 'Awards',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Q4 2025 Financial Results Exceed Expectations',
      excerpt: 'Strong growth driven by increased demand for enterprise and AI-focused products.',
      date: 'February 15, 2026',
      category: 'Financial',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'MagicChip Launches Sustainability Initiative',
      excerpt: 'Committing to carbon-neutral manufacturing by 2030 through renewable energy adoption.',
      date: 'February 10, 2026',
      category: 'Sustainability',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop'
    }
  ],
  zh: [
    {
      id: 1,
      title: 'MagicChip 发布新一代AI加速平台',
      excerpt: '革命性的MC-AI Pro系列为机器学习工作负载带来3倍性能提升。',
      date: '2026年3月10日',
      category: '产品发布',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'MagicChip扩产 - 新建晶圆厂',
      excerpt: '深圳新建的300mm晶圆生产线将使产能提升50%。',
      date: '2026年3月5日',
      category: '公司动态',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop'
    },
    {
      id: 3,
      title: '与CloudTech解决方案达成战略合作',
      excerpt: 'MagicChip与CloudTech强强联合，提供集成边缘计算解决方案。',
      date: '2026年2月28日',
      category: '合作伙伴',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'MagicChip荣获"最佳企业硬件提供商"奖',
      excerpt: '因对数据中心基础设施的杰出贡献获得行业认可。',
      date: '2026年2月20日',
      category: '奖项',
      image: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=400&fit=crop'
    },
    {
      id: 5,
      title: '2025年第四季度财务业绩超预期',
      excerpt: '企业和AI聚焦产品需求增长带动强劲业绩。',
      date: '2026年2月15日',
      category: '财务',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'MagicChip启动可持续发展计划',
      excerpt: '承诺到2030年通过采用可再生能源实现碳中和制造。',
      date: '2026年2月10日',
      category: '可持续发展',
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=400&fit=crop'
    }
  ]
};

export default function NewsPage() {
  const { language } = useLanguage();
  const news = language === 'en' ? newsData.en : newsData.zh;
  const pageTitle = language === 'en' ? 'News & Updates' : '新闻动态';
  const pageSubtitle = language === 'en' 
    ? 'Stay informed about the latest developments from MagicChip'
    : '了解MagicChip的最新发展';

  return (
    <>
      <main className="pt-16 min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{pageTitle}</h1>
              <p className="text-xl text-blue-100 max-w-2xl">{pageSubtitle}</p>
            </motion.div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {news.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-600 text-white">
                        <Tag className="w-3 h-3 mr-1" />
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <Calendar className="w-4 h-4 mr-2" />
                      {item.date}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                      {item.excerpt}
                    </p>
                    <a 
                      href={`/news/${item.id}`}
                      className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
                    >
                      {language === 'en' ? 'Read More' : '阅读更多'}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
