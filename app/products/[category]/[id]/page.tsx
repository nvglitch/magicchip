'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, Cpu, Shield, Monitor, Server, CheckCircle, Zap, Layers } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

const categoryData: Record<string, { icon: any; gradient: string }> = {
  'industrial-mini-pc': { icon: Cpu, gradient: 'from-blue-600 to-blue-800' },
  'firewall-mini-pc': { icon: Shield, gradient: 'from-red-600 to-red-800' },
  'desktop-mini-pc': { icon: Monitor, gradient: 'from-emerald-600 to-emerald-800' },
  'firewall-server': { icon: Server, gradient: 'from-purple-600 to-purple-800' },
};

const sampleProducts: Record<string, { name: string; tagline: string; description: string; specs: { label: string; value: string }[]; features: { icon: string; title: string; description: string }[] }> = {
  'mcai35': {
    name: 'MCAI35',
    tagline: 'High-performance AI mini PC powered by Strix Halo platform',
    description: 'The MCAI35 is a flagship AI mini PC featuring AMD\'s Strix Halo platform with integrated graphics and neural processing unit. Designed for edge computing, AI workloads, and high-performance industrial applications.',
    specs: [
      { label: 'Processor', value: 'AMD Strix Halo (120W/132W)' },
      { label: 'Graphics', value: 'Up to 40 Graphics Cores' },
      { label: 'NPU', value: '50 TOPs AI Performance' },
      { label: 'Memory', value: 'Up to 128GB LPDDR5x 8000MT/s' },
      { label: 'Storage', value: 'Dual M.2 2280 PCIe×4 SSD' },
      { label: 'Display', value: 'Quad-Display: HDMI 2.1 FRL + DP 1.4' },
      { label: 'USB', value: 'Dual USB4 (40Gbps)' },
      { label: 'Network', value: '2.5G LAN RJ45 + WiFi/BT' },
      { label: 'Power', value: '350W Internal Flex PSU' },
    ],
    features: [
      { icon: 'Cpu', title: 'AI Performance', description: '50 TOPs NPU for edge AI workloads' },
      { icon: 'Monitor', title: 'Quad Display', description: 'Support up to 4 simultaneous displays' },
      { icon: 'Zap', title: 'High Speed', description: 'Dual USB4 40Gbps ports' },
    ],
  },
  'mcai36': {
    name: 'MCAI36',
    tagline: 'Industrial Edge Computing Mini PC with Intel Core i7',
    description: 'The MCAI36 is a rugged industrial mini PC powered by Intel Core i7-1260P processor. Built for edge computing, machine vision, and industrial IoT applications.',
    specs: [
      { label: 'Processor', value: 'Intel Core i7-1260P (12C/16T)' },
      { label: 'Memory', value: 'Up to 32GB DDR4-3200' },
      { label: 'Storage', value: 'M.2 2280 NVMe SSD' },
      { label: 'Display', value: 'Triple Display: HDMI 2.0 + DP 1.2 + VGA' },
      { label: 'USB', value: '4× USB 3.2 Gen2 + 2× USB 2.0' },
      { label: 'Network', value: 'Dual 2.5G LAN + WiFi 6E' },
      { label: 'Serial', value: '2× RS232/485 + 1× RS232' },
      { label: 'Power', value: '12-24V DC Wide Input' },
      { label: 'Operating Temp', value: '-20°C to 60°C' },
    ],
    features: [
      { icon: 'Shield', title: 'Fanless Design', description: 'Silent operation with zero dust ingress' },
      { icon: 'Cpu', title: 'Wide Temperature', description: 'Operates in -20°C to 60°C environments' },
      { icon: 'Zap', title: 'Dual 2.5G LAN', description: 'High-speed industrial networking' },
    ],
  },
  'fw100': {
    name: 'FW-100',
    tagline: 'Compact network security appliance with 4× 2.5G ports',
    description: 'The FW-100 is a compact firewall mini PC featuring four 2.5GbE LAN ports and Intel N100 processor. Ideal for small business network security.',
    specs: [
      { label: 'Processor', value: 'Intel N100 (4C/4T)' },
      { label: 'Memory', value: 'Up to 16GB DDR4-3200' },
      { label: 'Storage', value: 'M.2 2242 SATA SSD' },
      { label: 'LAN Ports', value: '4× 2.5GbE RJ45' },
      { label: 'USB', value: '2× USB 3.2 + 1× USB 2.0' },
      { label: 'Console', value: '1× RJ45 Serial Console' },
      { label: 'Power', value: '12V DC / 5A Adapter' },
      { label: 'Dimensions', value: '134×126×40mm' },
    ],
    features: [
      { icon: 'Shield', title: '4× 2.5G LAN', description: 'High-speed network segmentation' },
      { icon: 'CheckCircle', title: 'VPN Support', description: 'WireGuard, OpenVPN, IPsec ready' },
      { icon: 'Zap', title: 'Low Power', description: 'Under 15W typical power consumption' },
    ],
  },
  'dt200': {
    name: 'DT-200',
    tagline: 'Ultra-compact desktop mini PC for business and education',
    description: 'The DT-200 is an ultra-compact desktop mini PC featuring Intel N-series processor and 4K display support. Perfect for office workstations and digital signage.',
    specs: [
      { label: 'Processor', value: 'Intel N200 (4C/4T)' },
      { label: 'Memory', value: 'Up to 16GB DDR4-3200' },
      { label: 'Storage', value: 'M.2 2280 NVMe SSD' },
      { label: 'Display', value: '4K@60Hz via HDMI 2.0 + DP 1.2' },
      { label: 'USB', value: '4× USB 3.2 Gen2 + 2× USB 2.0' },
      { label: 'Network', value: '1× 2.5G LAN + WiFi 6' },
      { label: 'Audio', value: '3.5mm Combo Jack' },
      { label: 'Power', value: '65W USB-C PD' },
      { label: 'Dimensions', value: '128×128×42mm' },
    ],
    features: [
      { icon: 'Monitor', title: '4K Display', description: 'Crystal clear 4K@60Hz output' },
      { icon: 'Zap', title: 'USB-C PD', description: 'Single cable power and data' },
      { icon: 'Layers', title: 'VESA Mount', description: 'Mount behind monitor or on wall' },
    ],
  },
  'fs500': {
    name: 'FS-500',
    tagline: '1U rackmount firewall server with 6× 2.5G LAN ports',
    description: 'The FS-500 is a 1U rackmount firewall server featuring six 2.5GbE LAN ports and Intel Core i5 processor. Designed for enterprise network security.',
    specs: [
      { label: 'Processor', value: 'Intel Core i5-1240P (12C/16T)' },
      { label: 'Memory', value: 'Up to 64GB DDR4-3200' },
      { label: 'Storage', value: '2× M.2 2280 NVMe SSD' },
      { label: 'LAN Ports', value: '6× 2.5GbE RJ45' },
      { label: 'Management', value: '1× IPMI BMC RJ45' },
      { label: 'USB', value: '2× USB 3.2 + 2× USB 2.0' },
      { label: 'Console', value: '1× RJ45 Serial + VGA' },
      { label: 'Power', value: '250W 1U Flex PSU' },
      { label: 'Form Factor', value: '1U Rackmount, 250mm Depth' },
    ],
    features: [
      { icon: 'Server', title: '6× 2.5G LAN', description: 'High-density network ports' },
      { icon: 'Shield', title: 'IPMI Remote', description: 'Out-of-band server management' },
      { icon: 'Zap', title: 'Redundant Power', description: 'Optional dual PSU for reliability' },
    ],
  },
};

const iconMap: Record<string, any> = { Cpu, Shield, Monitor, Server, Zap, Layers, CheckCircle };

export default function ProductDetailPage() {
  const { language } = useLanguage();
  const params = useParams();
  const category = params.category as string;
  const productId = params.id as string;

  const product = sampleProducts[productId];
  const catInfo = categoryData[category];

  if (!product) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/products" className="text-blue-600 hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  const IconComponent = catInfo?.icon || Cpu;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mb-6"
          >
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              <span>/</span>
              <Link href={`/products/${category}`} className="hover:text-white transition-colors capitalize">
                {category.replace(/-/g, ' ')}
              </Link>
              <span>/</span>
              <span className="text-white">{product.name}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-3">{product.name}</h1>
            <p className="text-xl text-gray-300 max-w-2xl">{product.tagline}</p>
          </motion.div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-100 rounded-2xl aspect-square flex items-center justify-center"
            >
              <div className="text-center">
                <div className={`w-32 h-32 mx-auto mb-4 bg-gradient-to-br ${catInfo?.gradient} rounded-2xl flex items-center justify-center`}>
                  <IconComponent className="w-16 h-16 text-white" />
                </div>
                <p className="text-gray-400 text-sm">Product Image Placeholder</p>
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">{product.description}</p>

              <div className="flex flex-wrap gap-3 mb-8">
                {product.specs.slice(0, 4).map((spec, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm font-medium"
                  >
                    {spec.value.split(' ').slice(0, 3).join(' ')}
                  </span>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg"
                >
                  Contact Sales
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href="https://magicchip.en.alibaba.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
                >
                  View on Alibaba
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Specifications</h2>
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <table className="w-full">
                <tbody>
                  {product.specs.map((spec, idx) => (
                    <tr
                      key={idx}
                      className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                    >
                      <td className="px-6 py-4 font-medium text-gray-700 w-1/3">{spec.label}</td>
                      <td className="px-6 py-4 text-gray-900">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {product.features.map((feature, idx) => {
                const FeatureIcon = iconMap[feature.icon] || CheckCircle;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="bg-gray-50 rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
                  >
                    <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-br ${catInfo?.gradient} rounded-xl flex items-center justify-center`}>
                      <FeatureIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
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
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Interested in {product.name}?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Contact our sales team for pricing, customization options, and bulk orders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                >
                  Contact Sales
                  <ArrowRight className="w-5 h-5 ml-2" />
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
