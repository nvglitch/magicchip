'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Newspaper, Download, FileCode, ArrowRight } from 'lucide-react';

const documentsData = {
  en: {
    hero: {
      title: 'Documents & Resources',
      subtitle: 'Access technical documentation, downloads, and latest news'
    },
    sections: [
      {
        title: 'News & Announcements',
        description: 'Stay updated with the latest company news, product launches, and industry insights',
        icon: Newspaper,
        href: '/news',
        stats: '12 Articles'
      },
      {
        title: 'File Downloads',
        description: 'Download brochures, whitepapers, datasheets, and technical resources',
        icon: Download,
        href: '/downloads',
        stats: '24 Files'
      },
      {
        title: 'Technical Documentation',
        description: 'Access technical specifications, user manuals, and API documentation',
        icon: FileCode,
        href: '/tech-docs',
        stats: '48 Documents'
      }
    ],
    featured: {
      title: 'Featured Resources',
      items: [
        { title: 'Product Brochure 2026', type: 'Brochure', size: '2.4 MB' },
        { title: 'AI Accelerator Datasheet', type: 'Datasheet', size: '1.8 MB' },
        { title: 'Enterprise CPU Architecture', type: 'Whitepaper', size: '3.2 MB' },
        { title: 'Security Module Guide', type: 'Manual', size: '1.2 MB' }
      ]
    }
  },
  zh: {
    hero: {
      title: '文档与资源',
      subtitle: '访问技术文档、下载资源和最新新闻'
    },
    sections: [
      {
        title: '新闻与公告',
        description: '了解最新的公司新闻、产品发布和行业见解',
        icon: Newspaper,
        href: '/news',
        stats: '12篇文章'
      },
      {
        title: '文件下载',
        description: '下载宣传册、白皮书、数据表和技术资源',
        icon: Download,
        href: '/downloads',
        stats: '24个文件'
      },
      {
        title: '技术文档',
        description: '访问技术规格、用户手册和API文档',
        icon: FileCode,
        href: '/tech-docs',
        stats: '48份文档'
      }
    ],
    featured: {
      title: '精选资源',
      items: [
        { title: '2026产品宣传册', type: '宣传册', size: '2.4 MB' },
        { title: 'AI加速器数据表', type: '数据表', size: '1.8 MB' },
        { title: '企业级CPU架构', type: '白皮书', size: '3.2 MB' },
        { title: '安全模块指南', type: '手册', size: '1.2 MB' }
      ]
    }
  }
};

export default function DocumentsPage() {
  const { language } = useLanguage();
  const data = language === 'en' ? documentsData.en : documentsData.zh;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-green-500 rounded-full filter blur-3xl"></div>
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

      {/* Document Sections */}
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
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">{section.stats}</span>
                  <span className="flex items-center text-blue-600 font-medium">
                    {language === 'en' ? 'View' : '查看'}
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Resources */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-8">{data.featured.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.featured.items.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-md p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mb-4">
                    <FileCode className="w-5 h-5 text-blue-600" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{item.type}</span>
                    <span>{item.size}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
