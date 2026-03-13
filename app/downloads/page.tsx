'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Download, FileText, Presentation, Image, File, Filter } from 'lucide-react';

const downloadsData = {
  en: {
    categories: [
      { id: 'brochures', name: 'Brochures', icon: FileText },
      { id: 'whitepapers', name: 'Whitepapers', icon: FileText },
      { id: 'datasheets', name: 'Datasheets', icon: FileText },
      { id: 'presentations', name: 'Presentations', icon: Presentation },
      { id: 'images', name: 'Images & Logos', icon: Image },
    ],
    items: [
      {
        id: 1,
        title: 'MagicChip Product Portfolio 2026',
        description: 'Complete overview of our enterprise hardware and service offerings.',
        category: 'brochures',
        format: 'PDF',
        size: '4.2 MB',
        date: '2026-03-01'
      },
      {
        id: 2,
        title: 'Enterprise Solutions Guide',
        description: 'Comprehensive guide to data center and cloud infrastructure solutions.',
        category: 'brochures',
        format: 'PDF',
        size: '3.8 MB',
        date: '2026-02-15'
      },
      {
        id: 3,
        title: 'AI Accelerator Whitepaper',
        description: 'Technical deep-dive into MC-AI Pro series architecture and performance.',
        category: 'whitepapers',
        format: 'PDF',
        size: '2.5 MB',
        date: '2026-02-20'
      },
      {
        id: 4,
        title: 'Edge Computing Architecture',
        description: 'Best practices for deploying edge solutions in enterprise environments.',
        category: 'whitepapers',
        format: 'PDF',
        size: '1.8 MB',
        date: '2026-01-10'
      },
      {
        id: 5,
        title: 'MC-Pro X1 Datasheet',
        description: 'Complete technical specifications for the flagship processor series.',
        category: 'datasheets',
        format: 'PDF',
        size: '890 KB',
        date: '2026-03-05'
      },
      {
        id: 6,
        title: 'MC-Network 10G Datasheet',
        description: 'Network chip specifications and performance benchmarks.',
        category: 'datasheets',
        format: 'PDF',
        size: '720 KB',
        date: '2026-02-28'
      },
      {
        id: 7,
        title: 'Investor Presentation Q4 2025',
        description: 'Quarterly financial results and business outlook.',
        category: 'presentations',
        format: 'PPTX',
        size: '8.5 MB',
        date: '2026-02-15'
      },
      {
        id: 8,
        title: 'Partner Program Overview',
        description: 'Information for potential business partners and resellers.',
        category: 'presentations',
        format: 'PDF',
        size: '2.1 MB',
        date: '2026-01-20'
      },
      {
        id: 9,
        title: 'Brand Assets Package',
        description: 'Official logos, brand guidelines, and approved imagery.',
        category: 'images',
        format: 'ZIP',
        size: '15.3 MB',
        date: '2026-01-05'
      },
      {
        id: 10,
        title: 'Product Photography',
        description: 'High-resolution product images for media and marketing use.',
        category: 'images',
        format: 'ZIP',
        size: '45.8 MB',
        date: '2026-02-01'
      }
    ]
  },
  zh: {
    categories: [
      { id: 'brochures', name: '产品手册', icon: FileText },
      { id: 'whitepapers', name: '白皮书', icon: FileText },
      { id: 'datasheets', name: '数据手册', icon: FileText },
      { id: 'presentations', name: '演示文稿', icon: Presentation },
      { id: 'images', name: '图片与Logo', icon: Image },
    ],
    items: [
      {
        id: 1,
        title: 'MagicChip产品组合2026',
        description: '我们的企业硬件和服务产品的完整概述。',
        category: 'brochures',
        format: 'PDF',
        size: '4.2 MB',
        date: '2026-03-01'
      },
      {
        id: 2,
        title: '企业解决方案指南',
        description: '数据中心和云基础设施解决方案的完整指南。',
        category: 'brochures',
        format: 'PDF',
        size: '3.8 MB',
        date: '2026-02-15'
      },
      {
        id: 3,
        title: 'AI加速器白皮书',
        description: 'MC-AI Pro系列架构和性能的技术深入分析。',
        category: 'whitepapers',
        format: 'PDF',
        size: '2.5 MB',
        date: '2026-02-20'
      },
      {
        id: 4,
        title: '边缘计算架构',
        description: '在企业环境中部署边缘解决方案的最佳实践。',
        category: 'whitepapers',
        format: 'PDF',
        size: '1.8 MB',
        date: '2026-01-10'
      },
      {
        id: 5,
        title: 'MC-Pro X1 数据手册',
        description: '旗舰处理器系列的完整技术规格。',
        category: 'datasheets',
        format: 'PDF',
        size: '890 KB',
        date: '2026-03-05'
      },
      {
        id: 6,
        title: 'MC-Network 10G 数据手册',
        description: '网络芯片规格和性能基准。',
        category: 'datasheets',
        format: 'PDF',
        size: '720 KB',
        date: '2026-02-28'
      },
      {
        id: 7,
        title: '2025年第四季度投资者演示',
        description: '季度财务业绩和业务展望。',
        category: 'presentations',
        format: 'PPTX',
        size: '8.5 MB',
        date: '2026-02-15'
      },
      {
        id: 8,
        title: '合作伙伴计划概述',
        description: '潜在业务合作伙伴和经销商信息。',
        category: 'presentations',
        format: 'PDF',
        size: '2.1 MB',
        date: '2026-01-20'
      },
      {
        id: 9,
        title: '品牌资产包',
        description: '官方Logo、品牌指南和批准使用的图片。',
        category: 'images',
        format: 'ZIP',
        size: '15.3 MB',
        date: '2026-01-05'
      },
      {
        id: 10,
        title: '产品摄影',
        description: '用于媒体和营销的高分辨率产品图片。',
        category: 'images',
        format: 'ZIP',
        size: '45.8 MB',
        date: '2026-02-01'
      }
    ]
  }
};

export default function DownloadsPage() {
  const { language } = useLanguage();
  const data = downloadsData[language];
  const pageTitle = language === 'en' ? 'File Downloads' : '文件下载';
  const pageSubtitle = language === 'en'
    ? 'Access brochures, whitepapers, datasheets, and other resources'
    : '获取产品手册、白皮书、数据手册和其他资源';

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

        {/* Downloads Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-10">
              {data.categories.map((category, index) => (
                <motion.button
                  key={category.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg hover:border-blue-500 hover:text-blue-600 transition-colors"
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                </motion.button>
              ))}
            </div>

            {/* Downloads Table */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                        {language === 'en' ? 'Document' : '文档'}
                      </th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                        {language === 'en' ? 'Category' : '类别'}
                      </th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                        {language === 'en' ? 'Format' : '格式'}
                      </th>
                      <th className="text-left px-6 py-4 text-sm font-semibold text-gray-600">
                        {language === 'en' ? 'Size' : '大小'}
                      </th>
                      <th className="text-right px-6 py-4 text-sm font-semibold text-gray-600">
                        {language === 'en' ? 'Download' : '下载'}
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {data.items.map((item, index) => (
                      <motion.tr
                        key={item.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="hover:bg-gray-50"
                      >
                        <td className="px-6 py-4">
                          <div>
                            <div className="font-medium text-gray-900">{item.title}</div>
                            <div className="text-sm text-gray-500">{item.description}</div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {data.categories.find(c => c.id === item.category)?.name}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600">{item.format}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{item.size}</td>
                        <td className="px-6 py-4 text-right">
                          <button className="inline-flex items-center px-3 py-1.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors">
                            <Download className="w-4 h-4 mr-2" />
                            {language === 'en' ? 'Download' : '下载'}
                          </button>
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
