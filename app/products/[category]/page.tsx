'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, Cpu, Shield, Monitor, Server } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';

const categoryData: Record<string, { icon: any; gradient: string; image: string }> = {
  'industrial-mini-pc': { icon: Cpu, gradient: 'from-blue-600 to-blue-800', image: '/Industrial.png' },
  'firewall-mini-pc': { icon: Shield, gradient: 'from-red-600 to-red-800', image: '/firewall.png' },
  'desktop-mini-pc': { icon: Monitor, gradient: 'from-emerald-600 to-emerald-800', image: '/desktop.png' },
  'firewall-server': { icon: Server, gradient: 'from-purple-600 to-purple-800', image: '/Firewall-Server.png' },
};

const categoryNames: Record<string, Record<string, string>> = {
  'industrial-mini-pc': {
    en: 'Industrial Mini PC',
    zh: '工业迷你电脑',
    fr: 'Mini PC Industriel',
    de: 'Industrieller Mini-PC',
    it: 'Mini PC Industriale',
    es: 'Mini PC Industrial',
  },
  'firewall-mini-pc': {
    en: 'Firewall Mini PC',
    zh: '防火墙迷你电脑',
    fr: 'Mini PC Firewall',
    de: 'Firewall Mini-PC',
    it: 'Mini PC Firewall',
    es: 'Mini PC Firewall',
  },
  'desktop-mini-pc': {
    en: 'Desktop Mini PC',
    zh: '桌面迷你电脑',
    fr: 'Mini PC de Bureau',
    de: 'Desktop Mini-PC',
    it: 'Mini PC da Scrivania',
    es: 'Mini PC de Escritorio',
  },
  'firewall-server': {
    en: '1U/2U Firewall Server PC',
    zh: '1U/2U 防火墙服务器',
    fr: 'Serveur Firewall 1U/2U',
    de: '1U/2U Firewall Server PC',
    it: 'Server Firewall 1U/2U',
    es: 'Servidor Firewall 1U/2U',
  },
};

const categoryDescriptions: Record<string, Record<string, string>> = {
  'industrial-mini-pc': {
    en: 'Fanless, compact industrial computers designed for harsh environments and 24/7 operation.',
    zh: '无风扇、紧凑型工业电脑，专为恶劣环境和24/7运行设计。',
    fr: 'Ordinateurs industriels compacts sans ventilateur conçus pour les environnements difficiles.',
    de: 'Lüfterlose, kompakte Industriecomputer für raue Umgebungen und 24/7-Betrieb.',
    it: 'Computer industriali compatti senza ventola progettati per ambienti difficili.',
    es: 'Computadoras industriales compactas sin ventiladores diseñadas para entornos difíciles.',
  },
  'firewall-mini-pc': {
    en: 'Network security appliances with advanced firewall capabilities and multi-Gigabit ports.',
    zh: '配备先进防火墙功能和多千兆端口的网络安全设备。',
    fr: 'Appliances de sécurité réseau avec capacités de firewall avancées.',
    de: 'Netzwerksicherheitsgeräte mit erweiterten Firewall-Funktionen.',
    it: 'Appliance di sicurezza di rete con capacità firewall avanzate.',
    es: 'Appliances de seguridad de red con capacidades avanzadas de firewall.',
  },
  'desktop-mini-pc': {
    en: 'Compact desktop computers ideal for business, education, and digital signage applications.',
    zh: '紧凑型台式电脑，适用于商业、教育和数字标牌应用。',
    fr: 'Ordinateurs de bureau compacts idéaux pour les applications commerciales.',
    de: 'Kompakte Desktop-Computer ideal für Business- und Bildungsanwendungen.',
    it: 'Computer desktop compatti ideali per applicazioni commerciali e educative.',
    es: 'Computadoras de escritorio compactas ideales para aplicaciones comerciales y educativas.',
  },
  'firewall-server': {
    en: 'Rackmount firewall servers for enterprise network security with high throughput.',
    zh: '机架式防火墙服务器，用于企业网络安全，高吞吐量。',
    fr: 'Serveurs firewall rack pour sécurité réseau d\'entreprise avec haut débit.',
    de: 'Rackmontierte Firewall-Server für Enterprise-Netzwerksicherheit.',
    it: 'Server firewall rack per sicurezza di rete aziendale.',
    es: 'Servidores firewall rack para seguridad de red empresarial.',
  },
};

const sampleProducts: Record<string, Array<{ id: string; name: string; tagline: string; image: string; specs: string[] }>> = {
  'industrial-mini-pc': [
    {
      id: 'mcai35',
      name: 'MCAI35',
      tagline: 'High-performance AI mini PC powered by Strix Halo platform',
      image: '/MCAI35.png',
      specs: ['AMD Strix Halo', 'Up to 128GB LPDDR5x', 'Quad-Display Support', '50 TOPs NPU'],
    },
    {
      id: 'mcai36',
      name: 'MCAI36',
      tagline: 'Industrial Edge Computing Mini PC with Intel Core i7',
      image: '/Industrial.png',
      specs: ['Intel Core i7-1260P', 'Up to 32GB DDR4', 'Triple Display', '-20°C to 60°C'],
    },
  ],
  'firewall-mini-pc': [
    {
      id: 'fw100',
      name: 'FW-100',
      tagline: 'Compact network security appliance with 4× 2.5G ports',
      image: '/firewall.png',
      specs: ['Intel N100', '4× 2.5GbE LAN', 'VPN Support', '<15W Power'],
    },
  ],
  'desktop-mini-pc': [
    {
      id: 'dt200',
      name: 'DT-200',
      tagline: 'Ultra-compact desktop mini PC for business and education',
      image: '/desktop.png',
      specs: ['Intel N200', '4K@60Hz Display', 'USB-C PD', 'VESA Mount'],
    },
  ],
  'firewall-server': [
    {
      id: 'fs500',
      name: 'FS-500',
      tagline: '1U rackmount firewall server with 6× 2.5G LAN ports',
      image: '/Firewall-Server.png',
      specs: ['Intel Core i5-1240P', '6× 2.5GbE LAN', 'IPMI Remote', '1U Rackmount'],
    },
  ],
};

export default function CategoryPage() {
  const { language } = useLanguage();
  const params = useParams();
  const category = params.category as string;

  const catInfo = categoryData[category];
  const products = sampleProducts[category] || [];

  const categoryName = categoryNames[category]?.[language] || categoryNames[category]?.en || category;
  const categoryDesc = categoryDescriptions[category]?.[language] || categoryDescriptions[category]?.en || '';

  const IconComponent = catInfo?.icon || Cpu;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/products" className="inline-flex items-center text-gray-400 hover:text-white transition-colors text-sm">
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back to Products
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-6"
          >
            <div className={`w-20 h-20 bg-gradient-to-br ${catInfo?.gradient || 'from-blue-600 to-blue-800'} rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0`}>
              <IconComponent className="w-10 h-10 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-3">{categoryName}</h1>
              <p className="text-xl text-gray-300 max-w-2xl">{categoryDesc}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Product List */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Product Image */}
                  <div className="md:w-2/5 bg-gray-100 flex items-center justify-center p-8">
                    <div className="relative w-full aspect-square max-w-[280px]">
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl" />
                      <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                        <IconComponent className="w-24 h-24 opacity-30" />
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h2>
                    <p className="text-lg text-gray-600 mb-6">{product.tagline}</p>

                    <div className="flex flex-wrap gap-3 mb-8">
                      {product.specs.map((spec, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/products/${category}/${product.id}`}
                      className="inline-flex items-center self-start px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl group"
                    >
                      View Details
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-br from-blue-600 to-purple-700 rounded-3xl p-10 md:p-16 text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-10 -mb-10"></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Need a Custom Solution?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                We offer customized solutions tailored to your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Contact Sales
                </Link>
                <a
                  href="https://magicchip.en.alibaba.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-blue-500/30 text-white border border-white/30 rounded-xl font-semibold hover:bg-blue-500/50 transition-colors"
                >
                  View on Alibaba
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
