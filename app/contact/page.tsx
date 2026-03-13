'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, MessageSquare } from 'lucide-react';

const contactData = {
  en: {
    hero: {
      title: 'Contact Us',
      subtitle: 'We\'re here to help and answer any questions you might have'
    },
    info: [
      {
        title: 'Email',
        description: 'Send us an email anytime',
        content: 'info@magicchip.com',
        icon: Mail
      },
      {
        title: 'Phone',
        description: 'Mon-Fri from 9am to 6pm',
        content: '+1 (555) 123-4567',
        icon: Phone
      },
      {
        title: 'Headquarters',
        description: 'Visit our headquarters',
        content: '123 Tech Boulevard, San Jose, CA 95110, USA',
        icon: MapPin
      },
      {
        title: 'Business Hours',
        description: 'Our support team',
        content: 'Mon-Fri: 9:00 AM - 6:00 PM (PST)',
        icon: Clock
      }
    ],
    global: {
      title: 'Global Offices',
      offices: [
        { city: 'San Jose', country: 'USA', address: '123 Tech Boulevard, CA 95110' },
        { city: 'Shenzhen', country: 'China', address: 'Nanshan District, Shenzhen 518000' },
        { city: 'Munich', country: 'Germany', address: 'Technopark, 80939 Munich' },
        { city: 'Tokyo', country: 'Japan', address: 'Shibuya, Tokyo 150-0002' }
      ]
    },
    form: {
      title: 'Send us a Message',
      name: 'Your Name',
      email: 'Email Address',
      company: 'Company',
      subject: 'Subject',
      message: 'Message',
      submit: 'Send Message',
      success: 'Thank you! We\'ll get back to you soon.'
    },
    whatsapp: {
      title: 'Chat on WhatsApp',
      description: 'Get quick responses on WhatsApp',
      button: 'Start Chat'
    }
  },
  zh: {
    hero: {
      title: '联系我们',
      subtitle: '我们随时为您提供帮助并解答任何问题'
    },
    info: [
      {
        title: '邮箱',
        description: '随时给我们发送邮件',
        content: 'info@magicchip.com',
        icon: Mail
      },
      {
        title: '电话',
        description: '周一至周五 9:00-18:00',
        content: '+1 (555) 123-4567',
        icon: Phone
      },
      {
        title: '总部',
        description: '访问我们的总部',
        content: '美国加利福尼亚州圣何塞市科技大道123号，95110',
        icon: MapPin
      },
      {
        title: '工作时间',
        description: '我们的支持团队',
        content: '周一至周五: 9:00 AM - 6:00 PM (太平洋时间)',
        icon: Clock
      }
    ],
    global: {
      title: '全球办公室',
      offices: [
        { city: '圣何塞', country: '美国', address: '加利福尼亚州科技大道123号 95110' },
        { city: '深圳', country: '中国', address: '南山区，深圳 518000' },
        { city: '慕尼黑', country: '德国', address: '科技园，80939 慕尼黑' },
        { city: '东京', country: '日本', address: '涩谷区，东京 150-0002' }
      ]
    },
    form: {
      title: '发送消息',
      name: '您的姓名',
      email: '邮箱地址',
      company: '公司',
      subject: '主题',
      message: '留言内容',
      submit: '发送消息',
      success: '感谢您！我们将尽快回复您。'
    },
    whatsapp: {
      title: 'WhatsApp 在线咨询',
      description: '通过 WhatsApp 快速获取回复',
      button: '开始聊天'
    }
  }
};

export default function ContactPage() {
  const { language } = useLanguage();
  const data = contactData[language];

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

        {/* Contact Info */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {data.info.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-6"
                >
                  <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-500 text-sm mb-2">{item.description}</p>
                  <p className="text-blue-600 font-medium">{item.content}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & WhatsApp */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white p-8 rounded-md shadow-sm"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">{data.form.title}</h2>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{data.form.name}</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{data.form.email}</label>
                      <input 
                        type="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{data.form.company}</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">{data.form.subject}</label>
                      <input 
                        type="text" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{data.form.message}</label>
                    <textarea 
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <button 
                    type="submit"
                    className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    {data.form.submit}
                  </button>
                </form>
              </motion.div>

              {/* WhatsApp & Global Offices */}
              <div className="space-y-8">
                {/* WhatsApp */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gradient-to-r from-green-500 to-green-600 p-8 rounded-md text-white"
                >
                  <div className="flex items-center mb-4">
                    <MessageCircle className="w-8 h-8 mr-3" />
                    <h2 className="text-2xl font-bold">{data.whatsapp.title}</h2>
                  </div>
                  <p className="text-green-100 mb-6">{data.whatsapp.description}</p>
                  <a 
                    href="https://wa.me/1234567890"
                    className="inline-flex items-center px-6 py-3 bg-white text-green-600 font-medium rounded-md hover:bg-green-50 transition-colors"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    {data.whatsapp.button}
                  </a>
                </motion.div>

                {/* Global Offices */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white p-8 rounded-md shadow-sm"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">{data.global.title}</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {data.global.offices.map((office, index) => (
                      <div key={index} className="flex items-start p-4 bg-gray-50 rounded-md">
                        <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-gray-900">{office.city}</div>
                          <div className="text-sm text-gray-600">{office.country}</div>
                          <div className="text-sm text-gray-500 mt-1">{office.address}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Map */}
        <section className="h-96 bg-gray-200">
          <div className="w-full h-full flex items-center justify-center bg-gray-300">
            <div className="text-center text-gray-500">
              <MapPin className="w-12 h-12 mx-auto mb-2" />
              <p>{language === 'en' ? 'Map View' : '地图视图'}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
