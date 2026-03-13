'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, Globe, TrendingUp, MapPin, Calendar, ArrowRight } from 'lucide-react';

const companyData = {
  en: {
    hero: {
      title: 'Our Company',
      subtitle: 'Pioneering the future of enterprise hardware technology since 2015'
    },
    stats: [
      { value: '10+', label: 'Years of Experience' },
      { value: '500+', label: 'Enterprise Clients' },
      { value: '50M+', label: 'Chips Shipped' },
      { value: '30+', label: 'Countries Served' }
    ],
    mission: {
      title: 'Our Mission',
      content: 'To empower enterprises with cutting-edge hardware solutions that drive innovation, efficiency, and sustainable growth. We are committed to delivering semiconductor technologies that form the backbone of modern digital infrastructure.'
    },
    vision: {
      title: 'Our Vision',
      content: 'To be the global leader in enterprise-grade chip solutions, recognized for our technological innovation, quality excellence, and positive impact on society.'
    },
    values: [
      {
        title: 'Innovation',
        description: 'We constantly push the boundaries of what\'s possible in chip design and manufacturing.',
        icon: '💡'
      },
      {
        title: 'Quality',
        description: 'Every chip we produce meets the highest standards of reliability and performance.',
        icon: '⭐'
      },
      {
        title: 'Sustainability',
        description: 'We are committed to reducing our environmental footprint through green manufacturing.',
        icon: '🌱'
      },
      {
        title: 'Partnership',
        description: 'We build long-term relationships with our clients based on trust and mutual success.',
        icon: '🤝'
      }
    ],
    timeline: [
      { year: '2015', title: 'Founded', description: 'MagicChip was established in Shenzhen' },
      { year: '2017', title: 'First Product', description: 'Launched MC-Pro X1 series' },
      { year: '2019', title: 'Global Expansion', description: 'Opened offices in US and Europe' },
      { year: '2021', title: 'AI Focus', description: 'Introduced AI accelerator product line' },
      { year: '2023', title: 'IPO', description: 'Went public on NASDAQ' },
      { year: '2025', title: 'New Fab', description: 'Opened advanced manufacturing facility' }
    ],
    locations: [
      { city: 'Shenzhen', country: 'China', address: 'Headquarters & R&D Center' },
      { city: 'San Jose', country: 'USA', address: 'North America HQ' },
      { city: 'Munich', country: 'Germany', address: 'Europe Office' },
      { city: 'Tokyo', country: 'Japan', address: 'Asia Pacific Sales' }
    ]
  },
  zh: {
    hero: {
      title: '关于我们',
      subtitle: '自2015年起，引领企业硬件技术创新'
    },
    stats: [
      { value: '10+', label: '年行业经验' },
      { value: '500+', label: '企业客户' },
      { value: '50M+', label: '芯片出货量' },
      { value: '30+', label: '服务国家' }
    ],
    mission: {
      title: '企业使命',
      content: '以尖端的硬件解决方案赋能企业，推动创新、效率和可持续增长。我们致力于提供构成现代数字基础设施骨干的半导体技术。'
    },
    vision: {
      title: '企业愿景',
      content: '成为全球企业级芯片解决方案的领导者，以技术创新、品质卓越和社会贡献而闻名。'
    },
    values: [
      {
        title: '创新',
        description: '我们不断突破芯片设计和制造的极限。',
        icon: '💡'
      },
      {
        title: '品质',
        description: '我们生产的每颗芯片都符合最高的可靠性和性能标准。',
        icon: '⭐'
      },
      {
        title: '可持续发展',
        description: '我们致力于通过绿色制造减少环境足迹。',
        icon: '🌱'
      },
      {
        title: '合作伙伴',
        description: '我们与客户建立基于信任和共同成功的长期关系。',
        icon: '🤝'
      }
    ],
    timeline: [
      { year: '2015', title: '成立', description: 'MagicChip在深圳成立' },
      { year: '2017', title: '首款产品', description: '发布MC-Pro X1系列' },
      { year: '2019', title: '全球扩张', description: '在美国和欧洲开设办事处' },
      { year: '2021', title: 'AI聚焦', description: '推出AI加速器产品线' },
      { year: '2023', title: '上市', description: '在纳斯达克上市' },
      { year: '2025', title: '新工厂', description: '开设先进制造设施' }
    ],
    locations: [
      { city: '深圳', country: '中国', address: '总部与研发中心' },
      { city: '圣何塞', country: '美国', address: '北美总部' },
      { city: '慕尼黑', country: '德国', address: '欧洲办公室' },
      { city: '东京', country: '日本', address: '亚太销售' }
    ]
  }
};

export default function CompanyPage() {
  const { language } = useLanguage();
  const data = companyData[language];

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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.hero.title}</h1>
              <p className="text-xl text-blue-100 max-w-2xl">{data.hero.subtitle}</p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {data.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-2xl shadow-sm"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{data.mission.title}</h2>
                <p className="text-gray-600 leading-relaxed">{data.mission.content}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-sm"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">{data.vision.title}</h2>
                <p className="text-gray-600 leading-relaxed">{data.vision.content}</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {language === 'en' ? 'Our Core Values' : '我们的核心价值观'}
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              {data.values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {language === 'en' ? 'Our Journey' : '发展历程'}
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-blue-200 hidden md:block" />
              <div className="space-y-12">
                {data.timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    <div className="flex-1 md:text-right pr-8">
                      <div className="text-2xl font-bold text-blue-600">{item.year}</div>
                      <div className="font-semibold text-gray-900">{item.title}</div>
                      <div className="text-gray-600 text-sm">{item.description}</div>
                    </div>
                    <div className="w-4 h-4 bg-blue-600 rounded-full flex-shrink-0 mx-4 md:mx-0 relative z-10" />
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Locations */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {language === 'en' ? 'Global Presence' : '全球布局'}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.locations.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-xl"
                >
                  <MapPin className="w-6 h-6 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-gray-900">{location.city}</h3>
                  <p className="text-gray-600 text-sm">{location.country}</p>
                  <p className="text-gray-500 text-sm mt-2">{location.address}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
