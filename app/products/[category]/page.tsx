'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, Cpu, Shield, Monitor, Server } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';

const categoryData: Record<string, { icon: any; gradient: string; image: string }> = {
  'industrial-mini-pc': { icon: Cpu, gradient: 'from-blue-600 to-indigo-700', image: '/Industrial.png' },
  'firewall-mini-pc': { icon: Shield, gradient: 'from-rose-600 to-red-800', image: '/firewall.png' },
  'desktop-mini-pc': { icon: Monitor, gradient: 'from-blue-500 to-indigo-600', image: '/desktop.png' },
  'firewall-server': { icon: Server, gradient: 'from-amber-600 to-orange-800', image: '/Firewall-Server.png' },
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
      id: 'mcipcb13',
      name: 'MCIPCB13',
      tagline: 'Compact industrial box PC with flexible Intel Core platform support',
      image: '/MCIPCB13/%E4%B8%BB%E5%9B%BE/1.jpg',
      specs: ['4th-13th Gen Intel Core', 'Dual GbE LAN', '8x USB Ports', '-20°C to +60°C'],
    },
    {
      id: 'mcipcb12',
      name: 'MCIPCB12',
      tagline: 'Compact fanless industrial mini PC with triple-display support',
      image: '/MCIPCB12/%E4%B8%BB%E5%9B%BE/1.jpg',
      specs: ['Intel Elkhart Lake / Alder Lake-N', 'Dual GbE LAN', '2x HDMI + 1x DP', '-20°C to +60°C'],
    },
    {
      id: 'mcipcd3',
      name: 'MCIPCD3',
      tagline: 'Six-LAN industrial network appliance with flexible Intel Core options',
      image: '/MCIPCD3/%E4%B8%BB%E5%9B%BE/1.jpg',
      specs: ['Intel Core i3/i5/i7 Options', '6x Intel GbE LAN', 'Dual RS232', '-20°C to +70°C'],
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
      id: 'mcai35',
      name: 'MCAI35',
      tagline: 'High-performance AI mini PC powered by Strix Halo platform',
      image: '/MCAI35.png',
      specs: ['AMD Strix Halo', 'Up to 128GB LPDDR5x', 'Quad-Display Support', '50 TOPs NPU'],
    },
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
  const { language, t } = useLanguage();
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
      <section className="relative bg-gradient-to-br from-[#172033] via-blue-950 to-[#172033] text-white py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link href="/products" className="inline-flex items-center text-gray-400 hover:text-white transition-colors text-sm">
              <ChevronLeft className="w-4 h-4 mr-1" />
              {t.products.backToProducts}
            </Link>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-6"
          >
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-950/30 flex-shrink-0">
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
                className={`group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden border ${index % 3 === 0 ? 'border-blue-200 hover:border-blue-400' : index % 3 === 1 ? 'border-amber-200 hover:border-amber-400' : 'border-rose-200 hover:border-rose-400'}`}
              >
                <div className="flex flex-col md:flex-row">
                  {/* Product Image */}
                  <div className={`md:w-2/5 flex items-center justify-center p-0 ${index % 3 === 0 ? 'bg-blue-50/50' : index % 3 === 1 ? 'bg-amber-50/50' : 'bg-rose-50/40'}`}>
                    <div className="relative w-full rounded-lg overflow-hidden">
                      {product.image ? (
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                          <IconComponent className="w-24 h-24 opacity-30" />
                        </div>
                      )}
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
                          className={`px-4 py-2 rounded-lg text-sm font-medium ${idx % 3 === 0 ? 'bg-blue-50 text-blue-800' : idx % 3 === 1 ? 'bg-amber-50 text-amber-800' : 'bg-rose-50 text-rose-800'}`}
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/products/${category}/${product.id}`}
                      className="inline-flex items-center self-start px-6 py-3 bg-blue-700 text-white rounded-xl font-semibold hover:bg-blue-800 transition-all shadow-lg shadow-blue-700/20 hover:shadow-xl group"
                    >
                      {t.products.viewDetails}
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
            className="bg-gradient-to-br from-blue-950 via-blue-800 to-blue-950 rounded-xl p-10 md:p-16 text-center text-white relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-20 -mt-20"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-10 -mb-10"></div>
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.products.ctaTitle}</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                {t.products.ctaDescription}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-800 rounded-xl font-semibold hover:bg-amber-50 transition-colors shadow-lg"
                >
                  {t.products.ctaButton}
                </Link>
                <a
                  href="https://magicchip.en.alibaba.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-amber-300/15 text-white border border-amber-200/40 rounded-xl font-semibold hover:bg-amber-300/25 transition-colors"
                >
                  {t.products.viewOnAlibaba}
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
