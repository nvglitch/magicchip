'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Factory, Shield, Zap, Leaf, Users, Award, CheckCircle, ArrowRight } from 'lucide-react';

const factoryData = {
  en: {
    hero: {
      title: 'Our Factory',
      subtitle: 'State-of-the-art manufacturing facilities delivering excellence'
    },
    overview: {
      title: 'Manufacturing Excellence',
      content: 'Our advanced manufacturing facilities span over 50,000 square meters across multiple locations, employing cutting-edge semiconductor fabrication technology to produce chips that power the digital world.'
    },
    stats: [
      { value: '50,000+', label: 'sqm Production Area' },
      { value: '1,200+', label: 'Employees' },
      { value: '10M+', label: 'Chips/Month' },
      { value: '99.9%', label: 'Yield Rate' }
    ],
    facilities: [
      {
        title: 'Wafer Fabrication',
        description: 'Advanced 300mm wafer fab with leading-edge process nodes.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
        features: ['300mm wafer processing', '14nm - 28nm process nodes', 'Class 100 cleanroom']
      },
      {
        title: 'Assembly & Testing',
        description: 'State-of-the-art packaging and final testing facilities.',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
        features: ['Advanced packaging', 'Automated testing', 'Quality assurance']
      },
      {
        title: 'R&D Center',
        description: 'Innovation hub for next-generation chip development.',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop',
        features: ['Product design', 'Simulation & modeling', 'Prototyping']
      }
    ],
    certifications: [
      { name: 'ISO 9001', description: 'Quality Management' },
      { name: 'ISO 14001', description: 'Environmental Management' },
      { name: 'IATF 16949', description: 'Automotive Quality' },
      { name: 'ISO 45001', description: 'Occupational Health & Safety' },
      { name: 'ISO 27001', description: 'Information Security' },
      { name: 'IECQ', description: 'Electronic Components' }
    ],
    sustainability: {
      title: 'Sustainable Manufacturing',
      content: 'We are committed to minimizing our environmental impact through energy-efficient processes, waste reduction programs, and renewable energy adoption.',
      highlights: [
        '40% reduction in energy consumption per chip',
        '90% water recycling rate',
        'Zero waste to landfill target',
        'Carbon neutral by 2030'
      ]
    }
  },
  zh: {
    hero: {
      title: '我们的工厂',
      subtitle: '最先进的制造设施，追求卓越品质'
    },
    overview: {
      title: '卓越制造',
      content: '我们先进的制造设施总面积超过50,000平方米，分布于多个地点，采用尖端的半导体制造技术，生产为数字世界提供动力的芯片。'
    },
    stats: [
      { value: '50,000+', label: '平方米生产区域' },
      { value: '1,200+', label: '员工数量' },
      { value: '10M+', label: '月芯片产量' },
      { value: '99.9%', label: '良品率' }
    ],
    facilities: [
      {
        title: '晶圆制造',
        description: '先进的300mm晶圆厂，采用前沿工艺节点。',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
        features: ['300mm晶圆加工', '14nm-28nm工艺节点', '百级洁净室']
      },
      {
        title: '封装与测试',
        description: '先进的封装和最终测试设施。',
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop',
        features: ['先进封装', '自动化测试', '质量保证']
      },
      {
        title: '研发中心',
        description: '下一代芯片开发的创新中心。',
        image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=600&h=400&fit=crop',
        features: ['产品设计', '仿真与建模', '原型制作']
      }
    ],
    certifications: [
      { name: 'ISO 9001', description: '质量管理' },
      { name: 'ISO 14001', description: '环境管理' },
      { name: 'IATF 16949', description: '汽车质量' },
      { name: 'ISO 45001', description: '职业健康安全' },
      { name: 'ISO 27001', description: '信息安全' },
      { name: 'IECQ', description: '电子元件' }
    ],
    sustainability: {
      title: '可持续制造',
      content: '我们致力于通过节能工艺、减排计划和可再生能源采用来最大限度地减少对环境的影响。',
      highlights: [
        '每颗芯片能耗降低40%',
        '水资源回收率达90%',
        '零垃圾填埋目标',
        '2030年实现碳中和'
      ]
    }
  }
};

export default function FactoryPage() {
  const { language } = useLanguage();
  const data = factoryData[language];

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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{data.hero.title}</h1>
              <p className="text-xl text-blue-100 max-w-2xl">{data.hero.subtitle}</p>
            </motion.div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{data.overview.title}</h2>
              <p className="text-lg text-gray-600 leading-relaxed">{data.overview.content}</p>
            </motion.div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {data.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center bg-white p-8 rounded-md shadow-sm"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Facilities */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {language === 'en' ? 'Our Facilities' : '我们的设施'}
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {data.facilities.map((facility, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 rounded-md overflow-hidden"
                >
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={facility.image} 
                      alt={facility.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{facility.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{facility.description}</p>
                    <ul className="space-y-2">
                      {facility.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-blue-600 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
              {language === 'en' ? 'Certifications' : '认证资质'}
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Our facilities maintain the highest industry standards and certifications'
                : '我们的设施保持最高的行业标准和认证'}
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {data.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-white p-6 rounded-md text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <Award className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <div className="font-semibold text-gray-900">{cert.name}</div>
                  <div className="text-xs text-gray-500 mt-1">{cert.description}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-4">
                  <Leaf className="w-8 h-8 mr-3" />
                  <h2 className="text-3xl font-bold">{data.sustainability.title}</h2>
                </div>
                <p className="text-green-100 mb-6 text-lg">{data.sustainability.content}</p>
                <ul className="space-y-3">
                  {data.sustainability.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-300" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 gap-4"
              >
                <div className="bg-white/10 backdrop-blur rounded-md p-6 text-center">
                  <Zap className="w-8 h-8 mx-auto mb-2" />
                  <div className="font-bold text-2xl">40%</div>
                  <div className="text-green-100 text-sm">{language === 'en' ? 'Energy Reduction' : '能耗降低'}</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-md p-6 text-center">
                  <Shield className="w-8 h-8 mx-auto mb-2" />
                  <div className="font-bold text-2xl">90%</div>
                  <div className="text-green-100 text-sm">{language === 'en' ? 'Water Recycled' : '水回收'}</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-md p-6 text-center">
                  <Factory className="w-8 h-8 mx-auto mb-2" />
                  <div className="font-bold text-2xl">0</div>
                  <div className="text-green-100 text-sm">{language === 'en' ? 'Waste to Landfill' : '垃圾填埋'}</div>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-md p-6 text-center">
                  <Leaf className="w-8 h-8 mx-auto mb-2" />
                  <div className="font-bold text-2xl">2030</div>
                  <div className="text-green-100 text-sm">{language === 'en' ? 'Carbon Neutral' : '碳中和'}</div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
