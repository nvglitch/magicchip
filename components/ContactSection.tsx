'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageCircle, Send, ChevronRight } from 'lucide-react';
import { getSiteConfig } from '@/lib/content-loader';

interface ContactSectionProps {
  siteConfig: ReturnType<typeof getSiteConfig>;
}

function getLocalizedText(text: any, language: string): string {
  if (typeof text === 'string') return text;
  return text?.[language as keyof typeof text] || text?.en || '';
}

const contactData = {
  en: {
    hero: {
      title: 'Get in Touch',
      subtitle: "We're here to help and answer any questions you might have"
    },
    officeAddress: 'Office Address',
    quickLinks: 'Quick Links',
    links: {
      latestNews: 'Latest News',
      downloads: 'Downloads',
      techDocuments: 'Tech Documents',
      aboutUs: 'About Us',
      ourFactory: 'Our Factory',
      memberTeam: 'Member Team'
    },
    labels: {
      email: 'Email',
      phone: 'Phone',
      address: 'Office Address',
      businessHours: 'Business Hours'
    },
    form: {
      title: 'Send us a Message',
      name: 'Name',
      email: 'Email',
      message: 'How can we help?',
      button: 'Send Message'
    },
    whatsapp: {
      button: 'Start WhatsApp Chat'
    }
  },
  zh: {
    hero: {
      title: '联系我们',
      subtitle: '我们随时为您提供帮助并解答您的问题'
    },
    officeAddress: '办公地址',
    quickLinks: '快速链接',
    links: {
      latestNews: '最新动态',
      downloads: '资料下载',
      techDocuments: '技术文档',
      aboutUs: '关于我们',
      ourFactory: '工厂介绍',
      memberTeam: '团队成员'
    },
    labels: {
      email: '邮箱',
      phone: '电话',
      address: '办公地址',
      businessHours: '工作时间'
    },
    form: {
      title: '发送消息',
      name: '姓名',
      email: '邮箱',
      message: '我们能帮您什么？',
      button: '发送消息'
    },
    whatsapp: {
      button: '开始WhatsApp聊天'
    }
  },
  fr: {
    hero: {
      title: 'Contactez-Nous',
      subtitle: 'Nous sommes ici pour vous aider et répondre à toutes vos questions'
    },
    officeAddress: 'Adresse du Bureau',
    quickLinks: 'Liens Rapides',
    links: {
      latestNews: 'Actualités',
      downloads: 'Téléchargements',
      techDocuments: 'Documents Techniques',
      aboutUs: 'À Propos',
      ourFactory: 'Notre Usine',
      memberTeam: 'Équipe'
    },
    labels: {
      email: 'Email',
      phone: 'Téléphone',
      address: 'Adresse du Bureau',
      businessHours: 'Horaires'
    },
    form: {
      title: 'Envoyez-nous un Message',
      name: 'Nom',
      email: 'Email',
      message: 'Comment pouvons-nous vous aider?',
      button: 'Envoyer'
    },
    whatsapp: {
      button: 'Commencer sur WhatsApp'
    }
  }
};

export default function ContactSection({ siteConfig }: ContactSectionProps) {
  const { language } = useLanguage();
  const dataLanguage = (contactData as any)[language] ? language : 'en';
  const data = (contactData as any)[dataLanguage];

  if (!siteConfig) return null;

  const contactInfo = [
    {
      title: data.labels.email,
      content: siteConfig.contact.email,
      icon: Mail,
      href: `mailto:${siteConfig.contact.email}`
    },
    {
      title: data.labels.phone,
      content: siteConfig.contact.phone,
      icon: Phone,
      href: `tel:${siteConfig.contact.phone}`
    },
    {
      title: data.labels.address,
      content: getLocalizedText(siteConfig.contact.address, language),
      icon: MapPin,
      href: '#'
    },
    {
      title: data.labels.businessHours,
      content: getLocalizedText(siteConfig.contact.businessHours, language),
      icon: Clock,
      href: '#'
    }
  ];

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
            {data.hero.title}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {data.hero.subtitle}
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
              {contactInfo.map((item, index) => (
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
              href={`https://wa.me/${siteConfig.contact.whatsapp.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center mt-6 p-4 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-md hover:from-green-600 hover:to-green-700 transition-all"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              <span className="font-medium">{data.whatsapp.button}</span>
            </a>
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
            <div className="bg-gray-50 p-4 rounded-md">
              <h4 className="font-semibold text-gray-900 mb-3">{data.quickLinks}</h4>
              <div className="space-y-2">
                <a href="/news" className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  {data.links.latestNews}
                </a>
                <a href="/downloads" className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  {data.links.downloads}
                </a>
                <a href="/tech-docs" className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  {data.links.techDocuments}
                </a>
                <a href="/about" className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  {data.links.aboutUs}
                </a>
                <a href="/factory" className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  {data.links.ourFactory}
                </a>
                <a href="/leadership" className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors">
                  <ChevronRight className="w-4 h-4 mr-1" />
                  {data.links.memberTeam}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
