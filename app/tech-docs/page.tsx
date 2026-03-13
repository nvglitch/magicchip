'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { FileCode, BookOpen, Settings, Cpu, Database, Lock, Search, ChevronRight, ExternalLink } from 'lucide-react';

const techDocsData = {
  en: {
    categories: [
      { 
        id: 'processors', 
        name: 'Processors', 
        icon: Cpu,
        description: 'CPU and processor documentation'
      },
      { 
        id: 'network', 
        name: 'Networking', 
        icon: Database,
        description: 'Network chip and connectivity docs'
      },
      { 
        id: 'security', 
        name: 'Security', 
        icon: Lock,
        description: 'Security module documentation'
      },
      { 
        id: 'api', 
        name: 'API Reference', 
        icon: Settings,
        description: 'Developer APIs and SDKs'
      },
      { 
        id: 'guides', 
        name: 'User Guides', 
        icon: BookOpen,
        description: 'Installation and setup guides'
      },
    ],
    documents: [
      {
        id: 1,
        title: 'MC-Pro X1 Series Programming Guide',
        description: 'Complete programming manual for MC-Pro X1 processor series including architecture overview, instruction set, and optimization techniques.',
        category: 'processors',
        updated: '2026-03-01',
        pages: 245
      },
      {
        id: 2,
        title: 'Processor Thermal Management',
        description: 'Thermal design guide for optimal cooling solutions and heat dissipation strategies.',
        category: 'processors',
        updated: '2026-02-15',
        pages: 89
      },
      {
        id: 3,
        title: 'MC-Network 10G Configuration Guide',
        description: 'Step-by-step configuration instructions for network chips including VLAN, QoS, and bonding settings.',
        category: 'network',
        updated: '2026-02-28',
        pages: 156
      },
      {
        id: 4,
        title: 'Network Performance Tuning',
        description: 'Advanced tuning parameters for maximizing network throughput and reducing latency.',
        category: 'network',
        updated: '2026-01-20',
        pages: 78
      },
      {
        id: 5,
        title: 'Security Module Integration Guide',
        description: 'Integration documentation for hardware security modules including key management and encryption APIs.',
        category: 'security',
        updated: '2026-02-10',
        pages: 112
      },
      {
        id: 6,
        title: 'Secure Boot Implementation',
        description: 'Implementation guide for secure boot chain and firmware validation.',
        category: 'security',
        updated: '2026-01-15',
        pages: 65
      },
      {
        id: 7,
        title: 'MagicChip REST API v2.0',
        description: 'Complete REST API reference for cloud management and monitoring platform.',
        category: 'api',
        updated: '2026-03-05',
        pages: 320
      },
      {
        id: 8,
        title: 'SDK Installation & Getting Started',
        description: 'Software development kit installation guide and quick start tutorial.',
        category: 'api',
        updated: '2026-02-20',
        pages: 45
      },
      {
        id: 9,
        title: 'Hardware Installation Manual',
        description: 'Complete hardware installation guide for rack mounting and initial setup.',
        category: 'guides',
        updated: '2026-01-10',
        pages: 34
      },
      {
        id: 10,
        title: 'System Administration Guide',
        description: 'Comprehensive system administration documentation including monitoring, backup, and recovery procedures.',
        category: 'guides',
        updated: '2026-02-01',
        pages: 189
      }
    ]
  },
  zh: {
    categories: [
      { 
        id: 'processors', 
        name: '处理器', 
        icon: Cpu,
        description: 'CPU和处理器文档'
      },
      { 
        id: 'network', 
        name: '网络', 
        icon: Database,
        description: '网络芯片和连接文档'
      },
      { 
        id: 'security', 
        name: '安全', 
        icon: Lock,
        description: '安全模块文档'
      },
      { 
        id: 'api', 
        name: 'API参考', 
        icon: Settings,
        description: '开发者API和SDK'
      },
      { 
        id: 'guides', 
        name: '用户指南', 
        icon: BookOpen,
        description: '安装和设置指南'
      },
    ],
    documents: [
      {
        id: 1,
        title: 'MC-Pro X1系列编程指南',
        description: 'MC-Pro X1处理器系列的完整编程手册，包括架构概述、指令集和优化技术。',
        category: 'processors',
        updated: '2026-03-01',
        pages: 245
      },
      {
        id: 2,
        title: '处理器热管理',
        description: '最佳冷却方案和散热策略的热设计指南。',
        category: 'processors',
        updated: '2026-02-15',
        pages: 89
      },
      {
        id: 3,
        title: 'MC-Network 10G配置指南',
        description: '网络芯片的分步配置说明，包括VLAN、QoS和绑定设置。',
        category: 'network',
        updated: '2026-02-28',
        pages: 156
      },
      {
        id: 4,
        title: '网络性能调优',
        description: '最大化网络吞吐量和降低延迟的高级调优参数。',
        category: 'network',
        updated: '2026-01-20',
        pages: 78
      },
      {
        id: 5,
        title: '安全模块集成指南',
        description: '硬件安全模块的集成文档，包括密钥管理和加密API。',
        category: 'security',
        updated: '2026-02-10',
        pages: 112
      },
      {
        id: 6,
        title: '安全启动实现',
        description: '安全启动链和固件验证的实施指南。',
        category: 'security',
        updated: '2026-01-15',
        pages: 65
      },
      {
        id: 7,
        title: 'MagicChip REST API v2.0',
        description: '云管理和监控平台的完整REST API参考。',
        category: 'api',
        updated: '2026-03-05',
        pages: 320
      },
      {
        id: 8,
        title: 'SDK安装与快速入门',
        description: '软件开发工具包安装指南和快速入门教程。',
        category: 'api',
        updated: '2026-02-20',
        pages: 45
      },
      {
        id: 9,
        title: '硬件安装手册',
        description: '机架安装和初始设置的完整硬件安装指南。',
        category: 'guides',
        updated: '2026-01-10',
        pages: 34
      },
      {
        id: 10,
        title: '系统管理指南',
        description: '全面的系统管理文档，包括监控、备份和恢复程序。',
        category: 'guides',
        updated: '2026-02-01',
        pages: 189
      }
    ]
  }
};

export default function TechDocsPage() {
  const { language } = useLanguage();
  const data = techDocsData[language];
  const pageTitle = language === 'en' ? 'Technical Documentation' : '技术文档';
  const pageSubtitle = language === 'en'
    ? 'Comprehensive technical resources for developers and engineers'
    : '为开发者和工程师提供的全面技术资源';

  return (
    <>
      <Navbar />
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

        {/* Categories */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {data.categories.map((category, index) => (
                <motion.a
                  key={category.id}
                  href={`#${category.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-blue-50 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-3 group-hover:bg-blue-600 transition-colors">
                    <category.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-medium text-gray-900 text-center">{category.name}</span>
                  <span className="text-xs text-gray-500 text-center mt-1">{category.description}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Documents List */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {data.categories.map((category) => {
                const categoryDocs = data.documents.filter(doc => doc.category === category.id);
                if (categoryDocs.length === 0) return null;
                
                return (
                  <div key={category.id} id={category.id}>
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                        <category.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
                    </div>
                    
                    <div className="grid gap-4">
                      {categoryDocs.map((doc, index) => (
                        <motion.div
                          key={doc.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                                <FileCode className="w-5 h-5 text-blue-600 mr-2" />
                                {doc.title}
                              </h3>
                              <p className="text-gray-600 text-sm mb-3">{doc.description}</p>
                              <div className="flex items-center gap-4 text-xs text-gray-500">
                                <span>{language === 'en' ? 'Updated:' : '更新:'} {doc.updated}</span>
                                <span>{doc.pages} {language === 'en' ? 'pages' : '页'}</span>
                              </div>
                            </div>
                            <a 
                              href="#"
                              className="ml-4 flex items-center px-4 py-2 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-lg transition-colors"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              {language === 'en' ? 'View' : '查看'}
                              <ChevronRight className="w-4 h-4 ml-1" />
                            </a>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
