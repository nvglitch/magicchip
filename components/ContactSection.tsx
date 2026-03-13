'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, MessageSquare, ChevronRight } from 'lucide-react';

const contactData = {
  en: {
    info: [
      { title: 'Email', content: 'info@magicchip.com', icon: Mail, href: 'mailto:info@magicchip.com' },
      { title: 'Phone', content: '+1 (555) 123-4567', icon: Phone, href: 'tel:+15551234567' },
      { title: 'Headquarters', content: 'San Jose, CA, USA', icon: MapPin, href: '#' },
      { title: 'Business Hours', content: 'Mon-Fri: 9AM - 6PM (PST)', icon: Clock, href: '#' }
    ],
    offices: [
      { city: 'USA', address: 'San Jose, CA' },
      { city: 'China', address: 'Shenzhen' },
      { city: 'Germany', address: 'Munich' },
      { city: 'Japan', address: 'Tokyo' }
    ],
    form: {
      title: 'Send us a Message',
      name: 'Name',
      email: 'Email',
      message: 'How can we help?',
      button: 'Send Message'
    },
    whatsapp: {
      title: 'Chat on WhatsApp',
      button: 'Start Chat'
    }
  },
  zh: {
    info: [
      { title: '邮箱', content: 'info@magicchip.com', icon: Mail, href: 'mailto:info@magicchip.com' },
      { title: '电话', content: '+1 (555) 123-4567', icon: Phone, href: 'tel:+15551234567' },
      { title: '总部', content: '美国加利福尼亚州圣何塞', icon: MapPin, href: '#' },
      { title: '工作时间', content: '周一至周五: 9:00-18:00', icon: Clock, href: '#' }
    ],
    offices: [
      { city: '美国', address: '圣何塞' },
      { city: '中国', address: '深圳' },
      { city: '德国', address: '慕尼黑' },
      { city: '日本', address: '东京' }
    ],
    form: {
      title: '发送消息',
      name: '姓名',
      email: '邮箱',
      message: '有什么可以帮助您？',
      button: '发送消息'
    },
    whatsapp: {
      title: 'WhatsApp 咨询',
      button: '开始聊天'
    }
  }
};

export default function ContactSection() {
  const { language } = useLanguage();
  const data = contactData[language];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {language === 'en' ? 'Get in Touch' : '联系我们'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'en' 
              ? 'We\'re here to help and answer any questions you might have'
              : '我们随时为您提供帮助并解答任何问题'}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="space-y-4">
              {data.info.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center p-4 bg-gray-50 rounded-md hover:bg-blue-50 transition-colors group"
                >
                  <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mr-4 group-hover:bg-blue-600 transition-colors">
                    <item.icon className="w-5 h-5 text-blue-600 group-hover:text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{item.title}</div>
                    <div className="font-medium text-gray-900">{item.content}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center mt-6 p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-md hover:from-green-600 hover:to-green-700 transition-all"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              <span className="font-medium">{data.whatsapp.button}</span>
            </a>

            {/* Global Offices */}
            <div className="mt-6 p-4 bg-gray-50 rounded-md">
              <h4 className="font-semibold text-gray-900 mb-3">
                {language === 'en' ? 'Global Offices' : '全球办公室'}
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {data.offices.map((office, index) => (
                  <div key={index} className="text-sm">
                    <span className="font-medium text-gray-900">{office.city}</span>
                    <span className="text-gray-500"> - {office.address}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-gray-50 p-8 rounded-md">
              <h3 className="text-xl font-bold text-gray-900 mb-6">{data.form.title}</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{data.form.name}</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">{data.form.email}</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">{data.form.message}</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
                >
                  <Send className="w-5 h-5 mr-2" />
                  {data.form.button}
                </button>
              </form>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 p-6 rounded-md text-white h-full">
              <h3 className="text-lg font-bold mb-4">
                {language === 'en' ? 'Quick Links' : '快速链接'}
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="/news" className="flex items-center hover:text-blue-200 transition-colors">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {language === 'en' ? 'Latest News' : '最新动态'}
                  </a>
                </li>
                <li>
                  <a href="/downloads" className="flex items-center hover:text-blue-200 transition-colors">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {language === 'en' ? 'Downloads' : '资料下载'}
                  </a>
                </li>
                <li>
                  <a href="/tech-docs" className="flex items-center hover:text-blue-200 transition-colors">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {language === 'en' ? 'Tech Documents' : '技术文档'}
                  </a>
                </li>
                <li>
                  <a href="/company" className="flex items-center hover:text-blue-200 transition-colors">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {language === 'en' ? 'About Us' : '关于我们'}
                  </a>
                </li>
                <li>
                  <a href="/factory" className="flex items-center hover:text-blue-200 transition-colors">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {language === 'en' ? 'Our Factory' : '工厂设施'}
                  </a>
                </li>
                <li>
                  <a href="/leadership" className="flex items-center hover:text-blue-200 transition-colors">
                    <ChevronRight className="w-4 h-4 mr-2" />
                    {language === 'en' ? 'Member Team' : '团队成员'}
                  </a>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
