'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Linkedin, Mail, Globe } from 'lucide-react';

const leadershipData = {
  en: {
    hero: {
      title: 'Leadership',
      subtitle: 'Meet the team driving innovation in enterprise hardware'
    },
    description: 'Our leadership team brings decades of experience in semiconductor industry, combining technical expertise with business acumen to guide MagicChip\'s continued growth and innovation.',
    executives: [
      {
        name: 'Dr. Michael Chen',
        title: 'CEO & Co-Founder',
        bio: 'Dr. Chen has over 25 years of experience in the semiconductor industry. He previously held leadership positions at major chip companies and holds a Ph.D. in Electrical Engineering from MIT.',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'michael.chen@magicchip.com'
      },
      {
        name: 'Sarah Johnson',
        title: 'COO',
        bio: 'Sarah brings 20 years of operational excellence in technology manufacturing. She previously served as VP of Operations at a Fortune 500 electronics company.',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'sarah.johnson@magicchip.com'
      },
      {
        name: 'Dr. James Wu',
        title: 'CTO',
        bio: 'Dr. Wu leads our R&D efforts with 18 years of experience in chip architecture and design. He holds multiple patents in processor technology and holds a Ph.D. from Stanford.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'james.wu@magicchip.com'
      },
      {
        name: 'Emily Zhang',
        title: 'CFO',
        bio: 'Emily has 15 years of financial leadership experience in the technology sector. She previously served as VP of Finance at a leading semiconductor company.',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'emily.zhang@magicchip.com'
      },
      {
        name: 'David Park',
        title: 'VP of Sales, Americas',
        bio: 'David leads our sales strategy in North America with 12 years of enterprise software and hardware sales experience.',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'david.park@magicchip.com'
      },
      {
        name: 'Dr. Lisa Wang',
        title: 'VP of Engineering',
        bio: 'Dr. Wang oversees all engineering operations with 16 years of experience in semiconductor manufacturing and process optimization.',
        image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'lisa.wang@magicchip.com'
      }
    ],
    board: {
      title: 'Board of Directors',
      members: [
        { name: 'Dr. Michael Chen', title: 'CEO & Co-Founder' },
        { name: 'Robert Thompson', title: 'Independent Director, Former CEO of TechCorp' },
        { name: 'Jennifer Liu', title: 'Independent Director, Venture Capitalist' },
        { name: 'Dr. William Zhang', title: 'Independent Director, Professor at Stanford' }
      ]
    }
  },
  zh: {
    hero: {
      title: '领导团队',
      subtitle: '认识推动企业硬件创新的团队'
    },
    description: '我们的领导团队拥有数十年的半导体行业经验，将技术专长与商业智慧相结合，引领MagicChip持续成长与创新。',
    executives: [
      {
        name: '陈博士',
        title: '首席执行官兼联合创始人',
        bio: '陈博士在半导体行业拥有超过25年的经验。他曾在多家知名芯片公司担任领导职务，拥有麻省理工学院电气工程博士学位。',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'michael.chen@magicchip.com'
      },
      {
        name: 'Sarah Johnson',
        title: '首席运营官',
        bio: 'Sarah在科技制造领域拥有20年的运营管理经验。她曾担任财富500强电子公司的运营副总裁。',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'sarah.johnson@magicchip.com'
      },
      {
        name: '吴博士',
        title: '首席技术官',
        bio: '吴博士领导我们的研发工作，拥有18年的芯片架构和设计经验。他拥有多项处理器技术专利，博士学位毕业于斯坦福大学。',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'james.wu@magicchip.com'
      },
      {
        name: '张Emily',
        title: '首席财务官',
        bio: 'Emily在科技领域拥有15年的财务领导经验。她曾担任一家领先半导体公司的财务副总裁。',
        image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'emily.zhang@magicchip.com'
      },
      {
        name: 'David Park',
        title: '美洲销售副总裁',
        bio: 'David负责北美销售战略，拥有12年企业软件和硬件销售经验。',
        image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'david.park@magicchip.com'
      },
      {
        name: '王博士',
        title: '工程副总裁',
        bio: '王博士负责所有工程运营，拥有16年半导体制造和工艺优化经验。',
        image: 'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?w=400&h=500&fit=crop',
        linkedin: '#',
        email: 'lisa.wang@magicchip.com'
      }
    ],
    board: {
      title: '董事会',
      members: [
        { name: '陈博士', title: '首席执行官兼联合创始人' },
        { name: 'Robert Thompson', title: '独立董事，前TechCorp首席执行官' },
        { name: 'Jennifer Liu', title: '独立董事，风险投资家' },
        { name: '张博士', title: '独立董事，斯坦福大学教授' }
      ]
    }
  }
};

export default function LeadershipPage() {
  const { language } = useLanguage();
  const data = leadershipData[language];

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

        {/* Description */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <p className="text-lg text-gray-600">{data.description}</p>
            </motion.div>
          </div>
        </section>

        {/* Executive Team */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {language === 'en' ? 'Executive Team' : '管理团队'}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.executives.map((exec, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
                >
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={exec.image} 
                      alt={exec.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{exec.name}</h3>
                    <p className="text-blue-600 font-medium mb-4">{exec.title}</p>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">{exec.bio}</p>
                    <div className="flex items-center gap-4">
                      <a 
                        href={exec.linkedin}
                        className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        <Linkedin className="w-5 h-5 text-gray-600 hover:text-blue-600" />
                      </a>
                      <a 
                        href={`mailto:${exec.email}`}
                        className="p-2 bg-gray-100 rounded-lg hover:bg-blue-100 transition-colors"
                      >
                        <Mail className="w-5 h-5 text-gray-600 hover:text-blue-600" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Board of Directors */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              {data.board.title}
            </h2>
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-6">
                {data.board.members.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-gray-50 p-6 rounded-xl"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-gray-600 text-sm">{member.title}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
