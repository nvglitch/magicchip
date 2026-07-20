'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { Factory, Shield, Zap, Leaf, Users, Award, CheckCircle, ArrowRight, Cpu, Wrench, Package } from 'lucide-react';

const factoryData = {
  en: {
    hero: {
      title: 'Our Factory',
      subtitle: 'Professional Manufacturing for Mini PCs & Industrial Computing'
    },
    overview: {
      title: 'Manufacturing Excellence',
      content: 'Our manufacturing facilities specialize in producing high-quality mini PCs, industrial computers, and embedded computing solutions. With advanced production lines and strict quality control systems, we deliver reliable products that meet industrial-grade standards.'
    },
    stats: [
      { value: '5,000+', label: 'sqm Production Area' },
      { value: '50-100', label: 'Employees' },
      { value: '1000+', label: 'Units/Day' },
      { value: '99.5%', label: 'Quality Rate' }
    ],
    facilities: [
      {
        title: 'SMT Production Line',
        description: 'Advanced surface-mount technology for motherboard assembly with high precision.',
        image: '/assets/factory/facility.jpg',
        features: ['High-speed placement', 'Multi-layer PCB support', 'Automated inspection']
      },
      {
        title: 'Assembly & Testing',
        description: 'Complete assembly lines with comprehensive testing and quality assurance.',
        image: '/assets/home/banners/banner-2.jpg',
        features: ['Burn-in testing', 'Thermal testing', 'Functional verification']
      },
      {
        title: 'Customization Center',
        description: 'Flexible OEM/ODM services for custom configurations and branding.',
        image: '/assets/factory/production-line.jpg',
        features: ['Custom branding', 'Port configuration', 'Logo printing']
      }
    ],
    certifications: [
      { name: 'ISO 9001', description: 'Quality Management' },
      { name: 'ISO 14001', description: 'Environmental Management' },
      { name: 'CE', description: 'European Conformity' },
      { name: 'FCC', description: 'US Certification' },
      { name: 'RoHS', description: 'Hazardous Substances' },
      { name: 'CCC', description: 'China Compulsory' }
    ],
    capabilities: {
      title: 'Our Capabilities',
      items: [
        { icon: Cpu, title: 'Intel Platform', desc: 'Support Intel N-series, 13th/14th Gen Core processors' },
        { icon: Zap, title: 'Multi-Port Design', desc: 'Up to 2.5GbE/10GbE network ports, 4G/5G modules' },
        { icon: Shield, title: 'Fanless Design', desc: 'Industrial-grade fanless cooling solutions' },
        { icon: Package, title: 'OEM/ODM Service', desc: 'Flexible customization from samples to mass production' }
      ]
    }
  },
  fr: {
    hero: {
      title: 'Notre Usine',
      subtitle: 'Fabrication Professionnelle de Mini PC et Informatique Industrielle'
    },
    overview: {
      title: 'Excellence de Fabrication',
      content: 'Nos installations de fabrication se spécialisent dans la production de mini PC de haute qualité, ordinateurs industriels et solutions informatiques embarquées. Avec des lignes de production avancées et des systèmes stricts de contrôle qualité, nous livrons des produits fiables répondant aux normes industrielles.'
    },
    stats: [
      { value: '5,000+', label: 'm² Zone de Production' },
      { value: '50-100', label: 'Employés' },
      { value: '1000+', label: 'Unités/Jour' },
      { value: '99.5%', label: 'Taux de Qualité' }
    ],
    facilities: [
      {
        title: 'Ligne de Production SMT',
        description: 'Technologie de montage en surface avancée pour l\'assemblage de cartes mères avec haute précision.',
        image: '/assets/factory/facility.jpg',
        features: ['Placement haute vitesse', 'Support PCB multi-couches', 'Inspection automatisée']
      },
      {
        title: 'Assemblage & Test',
        description: 'Lignes d\'assemblage complètes avec tests complets et assurance qualité.',
        image: '/assets/home/banners/banner-2.jpg',
        features: ['Test burn-in', 'Test thermique', 'Vérification fonctionnelle']
      },
      {
        title: 'Centre de Personnalisation',
        description: 'Services OEM/ODM flexibles pour configurations personnalisées et marquage.',
        image: '/assets/factory/production-line.jpg',
        features: ['Marquage personnalisé', 'Configuration ports', 'Impression logo']
      }
    ],
    certifications: [
      { name: 'ISO 9001', description: 'Management Qualité' },
      { name: 'ISO 14001', description: 'Management Environnemental' },
      { name: 'CE', description: 'Conformité Européenne' },
      { name: 'FCC', description: 'Certification US' },
      { name: 'RoHS', description: 'Substances Dangereuses' },
      { name: 'CCC', description: 'Chine Obligatoire' }
    ],
    capabilities: {
      title: 'Nos Capacités',
      items: [
        { icon: Cpu, title: 'Plateforme Intel', desc: 'Support processeurs Intel série N, 13e/14e Gen Core' },
        { icon: Zap, title: 'Design Multi-Port', desc: 'Jusqu\'à 2.5GbE/10GbE ports réseau, modules 4G/5G' },
        { icon: Shield, title: 'Design Sans Ventilateur', desc: 'Solutions de refroidissement industriel sans ventilateur' },
        { icon: Package, title: 'Service OEM/ODM', desc: 'Personnalisation flexible des échantillons à la production' }
      ]
    }
  },
  de: {
    hero: {
      title: 'Unsere Fabrik',
      subtitle: 'Professionelle Fertigung für Mini-PCs und Industrie-Computing'
    },
    overview: {
      title: 'Fertigungsexzellenz',
      content: 'Unsere Fertigungsanlagen sind auf die Produktion hochwertiger Mini-PCs, Industriecomputer und Embedded-Computing-Lösungen spezialisiert. Mit fortschrittlichen Produktionslinien und strengen Qualitätskontrollsystemen liefern wir zuverlässige Produkte, die industriellen Standards entsprechen.'
    },
    stats: [
      { value: '5,000+', label: 'm² Produktionsfläche' },
      { value: '50-100', label: 'Mitarbeiter' },
      { value: '1000+', label: 'Einheiten/Tag' },
      { value: '99.5%', label: 'Qualitätsrate' }
    ],
    facilities: [
      {
        title: 'SMT Produktionslinie',
        description: 'Fortschrittliche Oberflächenmontagetechnologie für Mainboard-Montage mit hoher Präzision.',
        image: '/assets/factory/facility.jpg',
        features: ['Hochgeschwindigkeitsplatzierung', 'Mehrlagen-PCB-Unterstützung', 'Automatisierte Inspektion']
      },
      {
        title: 'Montage & Test',
        description: 'Komplette Montagelinien mit umfassenden Tests und Qualitätssicherung.',
        image: '/assets/home/banners/banner-2.jpg',
        features: ['Burn-in-Test', 'Thermotest', 'Funktionsverifikation']
      },
      {
        title: 'Anpassungszentrum',
        description: 'Flexible OEM/ODM-Dienste für kundenspezifische Konfigurationen und Branding.',
        image: '/assets/factory/production-line.jpg',
        features: ['Individuelles Branding', 'Port-Konfiguration', 'Logodruck']
      }
    ],
    certifications: [
      { name: 'ISO 9001', description: 'Qualitätsmanagement' },
      { name: 'ISO 14001', description: 'Umweltmanagement' },
      { name: 'CE', description: 'Europäische Konformität' },
      { name: 'FCC', description: 'US-Zertifizierung' },
      { name: 'RoHS', description: 'Gefährliche Stoffe' },
      { name: 'CCC', description: 'China Zwang' }
    ],
    capabilities: {
      title: 'Unsere Fähigkeiten',
      items: [
        { icon: Cpu, title: 'Intel Plattform', desc: 'Unterstützung Intel N-Serie, 13./14. Gen Core Prozessoren' },
        { icon: Zap, title: 'Multi-Port Design', desc: 'Bis zu 2.5GbE/10GbE Netzwerkports, 4G/5G Module' },
        { icon: Shield, title: 'Lüfterloses Design', desc: 'Industrietaugliche lüfterlose Kühlungslösungen' },
        { icon: Package, title: 'OEM/ODM Service', desc: 'Flexible Anpassung von Mustern bis Massenproduktion' }
      ]
    }
  },
  it: {
    hero: {
      title: 'La Nostra Fabbrica',
      subtitle: 'Produzione Professionale di Mini PC e Informatica Industriale'
    },
    overview: {
      title: 'Eccellenza nella Produzione',
      content: 'Le nostre strutture di produzione sono specializzate nella produzione di mini PC di alta qualità, computer industriali e soluzioni di embedded computing. Con linee di produzione avanzate e sistemi rigorosi di controllo qualità, consegniamo prodotti affidabili che soddisfano gli standard industriali.'
    },
    stats: [
      { value: '5,000+', label: 'mq Area di Produzione' },
      { value: '50-100', label: 'Dipendenti' },
      { value: '1000+', label: 'Unità/Giorno' },
      { value: '99.5%', label: 'Tasso di Qualità' }
    ],
    facilities: [
      {
        title: 'Linea di Produzione SMT',
        description: 'Tecnologia avanzata di montaggio superficiale per l\'assemblaggio di schede madre con alta precisione.',
        image: '/assets/factory/facility.jpg',
        features: ['Posizionamento ad alta velocità', 'Supporto PCB multistrato', 'Ispezione automatizzata']
      },
      {
        title: 'Assemblaggio & Test',
        description: 'Linee di assemblaggio complete con test completi e assicurazione qualità.',
        image: '/assets/home/banners/banner-2.jpg',
        features: ['Test burn-in', 'Test termico', 'Verifica funzionale']
      },
      {
        title: 'Centro di Personalizzazione',
        description: 'Servizi OEM/ODM flessibili per configurazioni personalizzate e branding.',
        image: '/assets/factory/production-line.jpg',
        features: ['Branding personalizzato', 'Configurazione porte', 'Stampa logo']
      }
    ],
    certifications: [
      { name: 'ISO 9001', description: 'Gestione Qualità' },
      { name: 'ISO 14001', description: 'Gestione Ambientale' },
      { name: 'CE', description: 'Conformità Europea' },
      { name: 'FCC', description: 'Certificazione US' },
      { name: 'RoHS', description: 'Sostanze Pericolose' },
      { name: 'CCC', description: 'Cina Obbligatorio' }
    ],
    capabilities: {
      title: 'Le Nostre Capacità',
      items: [
        { icon: Cpu, title: 'Piattaforma Intel', desc: 'Supporto processori Intel serie N, Core 13a/14a Gen' },
        { icon: Zap, title: 'Design Multi-Porta', desc: 'Fino a 2.5GbE/10GbE porte di rete, moduli 4G/5G' },
        { icon: Shield, title: 'Design Senza Ventola', desc: 'Soluzioni di raffreddamento industriale senza ventola' },
        { icon: Package, title: 'Servizio OEM/ODM', desc: 'Personalizzazione flessibile dai campioni alla produzione' }
      ]
    }
  },
  es: {
    hero: {
      title: 'Nuestra Fábrica',
      subtitle: 'Fabricación Profesional de Mini PC e Informática Industrial'
    },
    overview: {
      title: 'Excelencia en Manufactura',
      content: 'Nuestras instalaciones de fabricación se especializan en la producción de mini PC de alta calidad, computadoras industriales y soluciones de computación integrada. Con líneas de producción avanzadas y sistemas estrictos de control de calidad, entregamos productos confiables que cumplen con los estándares industriales.'
    },
    stats: [
      { value: '5,000+', label: 'm² Área de Producción' },
      { value: '50-100', label: 'Empleados' },
      { value: '1000+', label: 'Unidades/Día' },
      { value: '99.5%', label: 'Tasa de Calidad' }
    ],
    facilities: [
      {
        title: 'Línea de Producción SMT',
        description: 'Tecnología avanzada de montaje superficial para ensamblaje de placas base con alta precisión.',
        image: '/assets/factory/facility.jpg',
        features: ['Colocación de alta velocidad', 'Soporte PCB multicapa', 'Inspección automatizada']
      },
      {
        title: 'Ensamblaje & Prueba',
        description: 'Líneas de ensamblaje completas con pruebas integrales y aseguramiento de calidad.',
        image: '/assets/home/banners/banner-2.jpg',
        features: ['Prueba burn-in', 'Prueba térmica', 'Verificación funcional']
      },
      {
        title: 'Centro de Personalización',
        description: 'Servicios OEM/ODM flexibles para configuraciones personalizadas y branding.',
        image: '/assets/factory/production-line.jpg',
        features: ['Branding personalizado', 'Configuración de puertos', 'Impresión de logo']
      }
    ],
    certifications: [
      { name: 'ISO 9001', description: 'Gestión de Calidad' },
      { name: 'ISO 14001', description: 'Gestión Ambiental' },
      { name: 'CE', description: 'Conformidad Europea' },
      { name: 'FCC', description: 'Certificación US' },
      { name: 'RoHS', description: 'Sustancias Peligrosas' },
      { name: 'CCC', description: 'China Obligatorio' }
    ],
    capabilities: {
      title: 'Nuestras Capacidades',
      items: [
        { icon: Cpu, title: 'Plataforma Intel', desc: 'Soporte procesadores Intel serie N, Core 13a/14a Gen' },
        { icon: Zap, title: 'Diseño Multi-Puerto', desc: 'Hasta 2.5GbE/10GbE puertos de red, módulos 4G/5G' },
        { icon: Shield, title: 'Diseño Sin Ventilador', desc: 'Soluciones de enfriamiento industrial sin ventilador' },
        { icon: Package, title: 'Servicio OEM/ODM', desc: 'Personalización flexible desde muestras hasta producción' }
      ]
    }
  }
};

export default function FactoryPage() {
  const { t, language } = useLanguage();
  const dataLanguage = (factoryData as any)[language] ? language : 'en';
  const data = (factoryData as any)[dataLanguage];

  return (
    <div className="min-h-screen bg-[#f3f7f5] text-slate-950">
      <section className="relative isolate flex min-h-[600px] items-end overflow-hidden text-white md:min-h-[680px]">
        <img src="/assets/factory/facility.jpg" alt={data.hero.title} className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b1424]/95 via-[#0b1424]/75 to-blue-950/35" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#0b1424] via-transparent to-transparent" />
        <div className="mx-auto w-full max-w-7xl px-4 pb-24 sm:px-6 md:pb-28 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="mb-7 h-px w-24 bg-gradient-to-r from-amber-400 to-transparent" />
            <h1 className="text-5xl font-bold tracking-tight md:text-7xl">{data.hero.title}</h1>
            <p className="mt-6 max-w-2xl text-xl leading-relaxed text-slate-200 md:text-2xl">{data.hero.subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="relative z-10 -mt-10 px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mx-auto grid max-w-7xl overflow-hidden rounded-3xl bg-white shadow-2xl shadow-slate-900/10 ring-1 ring-slate-200 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="p-8 md:p-12 lg:p-14">
            <h2 className="text-3xl font-bold leading-tight md:text-5xl">{data.overview.title}</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">{data.overview.content}</p>
          </div>
          <div className="grid grid-cols-2 gap-px bg-slate-200">
            {data.stats.map((stat: any, index: number) => (
              <motion.div key={index} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: index * 0.08 }} className="flex min-h-40 flex-col justify-center bg-[#f7faf9] p-6 md:p-8">
                <div className="text-3xl font-bold text-amber-600 md:text-4xl">{stat.value}</div>
                <div className="mt-2 text-sm leading-relaxed text-slate-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full border border-blue-200/60" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="max-w-3xl text-3xl font-bold md:text-5xl">{data.capabilities.title}</motion.h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {data.capabilities.items.map((item: any, index: number) => (
              <motion.article key={index} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.55, delay: index * 0.08 }} className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-950 text-white transition-colors group-hover:bg-blue-700"><item.icon className="h-6 w-6" /></div>
                <h3 className="mt-8 text-xl font-bold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{item.desc}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-3xl font-bold md:text-5xl">{t.factory?.ourFacilities || 'Our Facilities'}</motion.h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-12">
            {data.facilities.map((facility: any, index: number) => (
              <motion.article key={index} initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-80px' }} transition={{ duration: 0.65, delay: index * 0.1 }} className={`group relative isolate min-h-[420px] overflow-hidden rounded-3xl bg-slate-900 text-white shadow-lg ${index === 0 ? 'lg:col-span-7 lg:row-span-2 lg:min-h-[620px]' : 'lg:col-span-5 lg:min-h-[297px]'}`}>
                <img src={facility.image} alt={facility.title} className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950 via-slate-950/55 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                  <h3 className="text-2xl font-bold md:text-3xl">{facility.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-6 text-slate-200">{facility.description}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {facility.features.map((feature: any, idx: number) => (
                      <li key={idx} className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs text-white backdrop-blur-sm">
                        <CheckCircle className="h-3.5 w-3.5 text-amber-300" />{feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#101827] py-24 text-white md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(37,99,235,0.28),transparent_34%)]" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-3xl font-bold md:text-5xl">{t.factory?.certifications || 'Certifications'}</motion.h2>
          <motion.p initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="mx-auto mt-5 max-w-2xl text-center leading-7 text-slate-300">{t.factory?.certificationsSubtitle || 'Our products meet international quality and safety standards'}</motion.p>
          <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl bg-white/10 md:grid-cols-3 lg:grid-cols-6">
            {data.certifications.map((cert: any, index: number) => (
              <motion.div key={index} initial={{ opacity: 0, scale: 0.88 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.06 }} className="bg-white/[0.055] p-6 text-center transition-colors hover:bg-white/10">
                <Award className="mx-auto h-8 w-8 text-amber-300" />
                <div className="mt-4 font-semibold">{cert.name}</div>
                <div className="mt-2 text-xs leading-5 text-slate-400">{cert.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}