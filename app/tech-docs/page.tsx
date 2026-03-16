'use client';

import { useLanguage } from '@/lib/i18n/LanguageContext';
import { motion } from 'framer-motion';
import { FileCode, BookOpen, Settings, Cpu, Database, Lock, Search, ChevronRight, ExternalLink } from 'lucide-react';

const techDocsData = {
  en: {
    categories: [
      { 
        id: 'processors', 
        name: 'Processors', 
        icon: Cpu,
        description: 'CPU and processor documentation'
      },
      { 
        id: 'network', 
        name: 'Networking', 
        icon: Database,
        description: 'Network chip and connectivity docs'
      },
      { 
        id: 'security', 
        name: 'Security', 
        icon: Lock,
        description: 'Security module documentation'
      },
      { 
        id: 'api', 
        name: 'API Reference', 
        icon: Settings,
        description: 'Developer APIs and SDKs'
      },
      { 
        id: 'guides', 
        name: 'User Guides', 
        icon: BookOpen,
        description: 'Installation and setup guides'
      },
    ],
    documents: [
      {
        id: 1,
        title: 'MC-Pro X1 Series Programming Guide',
        description: 'Complete programming manual for MC-Pro X1 processor series including architecture overview, instruction set, and optimization techniques.',
        category: 'processors',
        updated: '2026-03-01',
        pages: 245
      },
      {
        id: 2,
        title: 'Processor Thermal Management',
        description: 'Thermal design guide for optimal cooling solutions and heat dissipation strategies.',
        category: 'processors',
        updated: '2026-02-15',
        pages: 89
      },
      {
        id: 3,
        title: 'MC-Network 10G Configuration Guide',
        description: 'Step-by-step configuration instructions for network chips including VLAN, QoS, and bonding settings.',
        category: 'network',
        updated: '2026-02-28',
        pages: 156
      },
      {
        id: 4,
        title: 'Network Performance Tuning',
        description: 'Advanced tuning parameters for maximizing network throughput and reducing latency.',
        category: 'network',
        updated: '2026-01-20',
        pages: 78
      },
      {
        id: 5,
        title: 'Security Module Integration Guide',
        description: 'Integration documentation for hardware security modules including key management and encryption APIs.',
        category: 'security',
        updated: '2026-02-10',
        pages: 112
      },
      {
        id: 6,
        title: 'Secure Boot Implementation',
        description: 'Implementation guide for secure boot chain and firmware validation.',
        category: 'security',
        updated: '2026-01-15',
        pages: 65
      },
      {
        id: 7,
        title: 'MagicChip REST API v2.0',
        description: 'Complete REST API reference for cloud management and monitoring platform.',
        category: 'api',
        updated: '2026-03-05',
        pages: 320
      },
      {
        id: 8,
        title: 'SDK Installation & Getting Started',
        description: 'Software development kit installation guide and quick start tutorial.',
        category: 'api',
        updated: '2026-02-20',
        pages: 45
      },
      {
        id: 9,
        title: 'Hardware Installation Manual',
        description: 'Complete hardware installation guide for rack mounting and initial setup.',
        category: 'guides',
        updated: '2026-01-10',
        pages: 34
      },
      {
        id: 10,
        title: 'System Administration Guide',
        description: 'Comprehensive system administration documentation including monitoring, backup, and recovery procedures.',
        category: 'guides',
        updated: '2026-02-01',
        pages: 189
      }
    ]
  },
  fr: {
    categories: [
      { 
        id: 'processors', 
        name: 'Processeurs', 
        icon: Cpu,
        description: 'Documentation CPU et processeurs'
      },
      { 
        id: 'network', 
        name: 'Réseau', 
        icon: Database,
        description: 'Documentation puces réseau et connectivité'
      },
      { 
        id: 'security', 
        name: 'Sécurité', 
        icon: Lock,
        description: 'Documentation modules de sécurité'
      },
      { 
        id: 'api', 
        name: 'Référence API', 
        icon: Settings,
        description: 'APIs développeur et SDKs'
      },
      { 
        id: 'guides', 
        name: 'Guides Utilisateur', 
        icon: BookOpen,
        description: 'Guides d\'installation et configuration'
      },
    ],
    documents: [
      {
        id: 1,
        title: 'Guide de Programmation MC-Pro X1',
        description: 'Manuel de programmation complet pour la série de processeurs MC-Pro X1 incluant vue d\'architecture, jeu d\'instructions et techniques d\'optimisation.',
        category: 'processors',
        updated: '2026-03-01',
        pages: 245
      },
      {
        id: 2,
        title: 'Gestion Thermique des Processeurs',
        description: 'Guide de conception thermique pour des solutions de refroidissement optimales et stratégies de dissipation de chaleur.',
        category: 'processors',
        updated: '2026-02-15',
        pages: 89
      },
      {
        id: 3,
        title: 'Guide de Configuration MC-Network 10G',
        description: 'Instructions de configuration paso à paso pour les puces réseau incluant paramètres VLAN, QoS et bonding.',
        category: 'network',
        updated: '2026-02-28',
        pages: 156
      },
      {
        id: 4,
        title: 'Optimisation Performance Réseau',
        description: 'Paramètres d\'optimisation avancés pour maximiser le débit réseau et réduire la latence.',
        category: 'network',
        updated: '2026-01-20',
        pages: 78
      },
      {
        id: 5,
        title: 'Guide d\'Intégration Module Sécurité',
        description: 'Documentation d\'intégration pour les modules de sécurité matérielle incluant gestion des clés et APIs de chiffrement.',
        category: 'security',
        updated: '2026-02-10',
        pages: 112
      },
      {
        id: 6,
        title: 'Implémentation Secure Boot',
        description: 'Guide d\'implémentation pour la chaîne de boot sécurisé et validation du firmware.',
        category: 'security',
        updated: '2026-01-15',
        pages: 65
      },
      {
        id: 7,
        title: 'API REST MagicChip v2.0',
        description: 'Référence API REST complète pour la plateforme de gestion et monitoring cloud.',
        category: 'api',
        updated: '2026-03-05',
        pages: 320
      },
      {
        id: 8,
        title: 'Installation SDK & Démarrage',
        description: 'Guide d\'installation du kit de développement logiciel et tutoriel de démarrage rapide.',
        category: 'api',
        updated: '2026-02-20',
        pages: 45
      },
      {
        id: 9,
        title: 'Manuel d\'Installation Matériel',
        description: 'Guide complet d\'installation matérielle pour le montage en rack et configuration initiale.',
        category: 'guides',
        updated: '2026-01-10',
        pages: 34
      },
      {
        id: 10,
        title: 'Guide d\'Administration Système',
        description: 'Documentation complète d\'administration système incluant procédures de monitoring, sauvegarde et récupération.',
        category: 'guides',
        updated: '2026-02-01',
        pages: 189
      }
    ]
  },
  de: {
    categories: [
      { 
        id: 'processors', 
        name: 'Prozessoren', 
        icon: Cpu,
        description: 'CPU und Prozessordokumentation'
      },
      { 
        id: 'network', 
        name: 'Netzwerk', 
        icon: Database,
        description: 'Netzwerkchip- und Konnektivitätsdokumente'
      },
      { 
        id: 'security', 
        name: 'Sicherheit', 
        icon: Lock,
        description: 'Sicherheitsmoduldokumentation'
      },
      { 
        id: 'api', 
        name: 'API-Referenz', 
        icon: Settings,
        description: 'Entwickler-APIs und SDKs'
      },
      { 
        id: 'guides', 
        name: 'Benutzerhandbücher', 
        icon: BookOpen,
        description: 'Installations- und Einrichtungsanleitungen'
      },
    ],
    documents: [
      {
        id: 1,
        title: 'MC-Pro X1 Serie Programmierhandbuch',
        description: 'Vollständiges Programmierhandbuch für die MC-Pro X1 Prozessorserie mit Architekturübersicht, Befehlssatz und Optimierungstechniken.',
        category: 'processors',
        updated: '2026-03-01',
        pages: 245
      },
      {
        id: 2,
        title: 'Prozessor-Wärmemanagement',
        description: 'Thermisches Designhandbuch für optimale Kühllösungen und Wärmeableitungsstrategien.',
        category: 'processors',
        updated: '2026-02-15',
        pages: 89
      },
      {
        id: 3,
        title: 'MC-Network 10G Konfigurationshandbuch',
        description: 'Schritt-für-Schritt Konfigurationsanweisungen für Netzwerkchips einschließlich VLAN-, QoS- und Bonding-Einstellungen.',
        category: 'network',
        updated: '2026-02-28',
        pages: 156
      },
      {
        id: 4,
        title: 'Netzwerk-Performance-Optimierung',
        description: 'Erweiterte Optimierungsparameter zur Maximierung des Netzwerkdurchsatzes und Reduzierung der Latenz.',
        category: 'network',
        updated: '2026-01-20',
        pages: 78
      },
      {
        id: 5,
        title: 'Sicherheitsmodul-Integrationshandbuch',
        description: 'Integrationsdokumentation für Hardware-Sicherheitsmodule einschließlich Schlüsselverwaltung und Verschlüsselungs-APIs.',
        category: 'security',
        updated: '2026-02-10',
        pages: 112
      },
      {
        id: 6,
        title: 'Secure Boot Implementierung',
        description: 'Implementierungshandbuch für sichere Boot-Kette und Firmware-Validierung.',
        category: 'security',
        updated: '2026-01-15',
        pages: 65
      },
      {
        id: 7,
        title: 'MagicChip REST API v2.0',
        description: 'Vollständige REST-API-Referenz für Cloud-Management- und Monitoring-Plattform.',
        category: 'api',
        updated: '2026-03-05',
        pages: 320
      },
      {
        id: 8,
        title: 'SDK Installation & Erste Schritte',
        description: 'Installationsanleitung für das Software Development Kit und Schnellstart-Tutorial.',
        category: 'api',
        updated: '2026-02-20',
        pages: 45
      },
      {
        id: 9,
        title: 'Hardware-Installationshandbuch',
        description: 'Vollständiges Hardware-Installationshandbuch für Rackmontage und Ersteinrichtung.',
        category: 'guides',
        updated: '2026-01-10',
        pages: 34
      },
      {
        id: 10,
        title: 'Systemverwaltungshandbuch',
        description: 'Umfassende Systemverwaltungsdokumentation einschließlich Monitoring-, Backup- und Wiederherstellungsverfahren.',
        category: 'guides',
        updated: '2026-02-01',
        pages: 189
      }
    ]
  },
  it: {
    categories: [
      { 
        id: 'processors', 
        name: 'Processori', 
        icon: Cpu,
        description: 'Documentazione CPU e processori'
      },
      { 
        id: 'network', 
        name: 'Rete', 
        icon: Database,
        description: 'Documentazione chip di rete e connettività'
      },
      { 
        id: 'security', 
        name: 'Sicurezza', 
        icon: Lock,
        description: 'Documentazione moduli di sicurezza'
      },
      { 
        id: 'api', 
        name: 'Riferimento API', 
        icon: Settings,
        description: 'API developer e SDK'
      },
      { 
        id: 'guides', 
        name: 'Guide Utente', 
        icon: BookOpen,
        description: 'Guide di installazione e configurazione'
      },
    ],
    documents: [
      {
        id: 1,
        title: 'Guida alla Programmazione MC-Pro X1',
        description: 'Manuale di programmazione completo per la serie di processori MC-Pro X1 inclusi panoramica dell\'architettura, set di istruzioni e tecniche di ottimizzazione.',
        category: 'processors',
        updated: '2026-03-01',
        pages: 245
      },
      {
        id: 2,
        title: 'Gestione Termica del Processore',
        description: 'Guida alla progettazione termica per soluzioni di raffreddamento ottimali e strategie di dissipazione del calore.',
        category: 'processors',
        updated: '2026-02-15',
        pages: 89
      },
      {
        id: 3,
        title: 'Guida alla Configurazione MC-Network 10G',
        description: 'Istruzioni di configurazione passo per passo per i chip di rete incluse impostazioni VLAN, QoS e bonding.',
        category: 'network',
        updated: '2026-02-28',
        pages: 156
      },
      {
        id: 4,
        title: 'Ottimizzazione Performance di Rete',
        description: 'Parametri di ottimizzazione avanzati per massimizzare il throughput di rete e ridurre la latenza.',
        category: 'network',
        updated: '2026-01-20',
        pages: 78
      },
      {
        id: 5,
        title: 'Guida all\'Integrazione Modulo Sicurezza',
        description: 'Documentazione di integrazione per moduli di sicurezza hardware inclusa gestione delle chiavi e API di crittografia.',
        category: 'security',
        updated: '2026-02-10',
        pages: 112
      },
      {
        id: 6,
        title: 'Implementazione Secure Boot',
        description: 'Guida all\'implementazione per catena di boot sicuro e validazione del firmware.',
        category: 'security',
        updated: '2026-01-15',
        pages: 65
      },
      {
        id: 7,
        title: 'MagicChip REST API v2.0',
        description: 'Riferimento API REST completo per piattaforma di gestione e monitoraggio cloud.',
        category: 'api',
        updated: '2026-03-05',
        pages: 320
      },
      {
        id: 8,
        title: 'Installazione SDK & Guida Introduttiva',
        description: 'Guida all\'installazione del kit di sviluppo software e tutorial di avvio rapido.',
        category: 'api',
        updated: '2026-02-20',
        pages: 45
      },
      {
        id: 9,
        title: 'Manuale di Installazione Hardware',
        description: 'Guida completa all\'installazione hardware per montaggio in rack e configurazione iniziale.',
        category: 'guides',
        updated: '2026-01-10',
        pages: 34
      },
      {
        id: 10,
        title: 'Guida all\'Amministrazione di Sistema',
        description: 'Documentazione completa di amministrazione di sistema incluse procedure di monitoraggio, backup e ripristino.',
        category: 'guides',
        updated: '2026-02-01',
        pages: 189
      }
    ]
  },
  es: {
    categories: [
      { 
        id: 'processors', 
        name: 'Procesadores', 
        icon: Cpu,
        description: 'Documentación de CPU y procesadores'
      },
      { 
        id: 'network', 
        name: 'Redes', 
        icon: Database,
        description: 'Documentación de chips de red y conectividad'
      },
      { 
        id: 'security', 
        name: 'Seguridad', 
        icon: Lock,
        description: 'Documentación de módulos de seguridad'
      },
      { 
        id: 'api', 
        name: 'Referencia API', 
        icon: Settings,
        description: 'APIs de desarrollador y SDKs'
      },
      { 
        id: 'guides', 
        name: 'Guías de Usuario', 
        icon: BookOpen,
        description: 'Guías de instalación y configuración'
      },
    ],
    documents: [
      {
        id: 1,
        title: 'Guía de Programación MC-Pro X1',
        description: 'Manual de programación completo para la serie de procesadores MC-Pro X1 incluyendo visión general de la arquitectura, conjunto de instrucciones y técnicas de optimización.',
        category: 'processors',
        updated: '2026-03-01',
        pages: 245
      },
      {
        id: 2,
        title: 'Gestión Térmica del Procesador',
        description: 'Guía de diseño térmico para soluciones de refrigeración óptimas y estrategias de disipación de calor.',
        category: 'processors',
        updated: '2026-02-15',
        pages: 89
      },
      {
        id: 3,
        title: 'Guía de Configuración MC-Network 10G',
        description: 'Instrucciones de configuración paso a paso para chips de red incluyendo ajustes de VLAN, QoS y bonding.',
        category: 'network',
        updated: '2026-02-28',
        pages: 156
      },
      {
        id: 4,
        title: 'Optimización de Rendimiento de Red',
        description: 'Parámetros de optimización avanzados para maximizar el rendimiento de red y reducir la latencia.',
        category: 'network',
        updated: '2026-01-20',
        pages: 78
      },
      {
        id: 5,
        title: 'Guía de Integración de Módulo de Seguridad',
        description: 'Documentación de integración para módulos de seguridad de hardware incluyendo gestión de claves y APIs de cifrado.',
        category: 'security',
        updated: '2026-02-10',
        pages: 112
      },
      {
        id: 6,
        title: 'Implementación de Secure Boot',
        description: 'Guía de implementación para cadena de arranque seguro y validación de firmware.',
        category: 'security',
        updated: '2026-01-15',
        pages: 65
      },
      {
        id: 7,
        title: 'MagicChip REST API v2.0',
        description: 'Referencia completa de API REST para plataforma de gestión y monitoreo en la nube.',
        category: 'api',
        updated: '2026-03-05',
        pages: 320
      },
      {
        id: 8,
        title: 'Instalación SDK y Primeros Pasos',
        description: 'Guía de instalación del kit de desarrollo de software y tutorial de inicio rápido.',
        category: 'api',
        updated: '2026-02-20',
        pages: 45
      },
      {
        id: 9,
        title: 'Manual de Instalación de Hardware',
        description: 'Guía completa de instalación de hardware para montaje en rack y configuración inicial.',
        category: 'guides',
        updated: '2026-01-10',
        pages: 34
      },
      {
        id: 10,
        title: 'Guía de Administración del Sistema',
        description: 'Documentación completa de administración del sistema incluyendo procedimientos de monitoreo, respaldo y recuperación.',
        category: 'guides',
        updated: '2026-02-01',
        pages: 189
      }
    ]
  }
};

export default function TechDocsPage() {
  const { language } = useLanguage();
  const dataLanguage = (techDocsData as any)[language] ? language : 'en';
  const data = (techDocsData as any)[dataLanguage];
  const pageTitle = 'Technical Documentation';
  const pageSubtitle = 'Comprehensive technical resources for developers and engineers';

  return (
    <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{pageTitle}</h1>
              <p className="text-xl text-blue-100 max-w-2xl">{pageSubtitle}</p>
            </motion.div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-12 bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {data.categories.map((category: any, index: number) => (
                <motion.a
                  key={category.id}
                  href={`#${category.id}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex flex-col items-center p-6 bg-gray-50 rounded-md hover:bg-blue-50 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-md flex items-center justify-center mb-3 group-hover:bg-blue-600 transition-colors">
                    <category.icon className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                  </div>
                  <span className="font-medium text-gray-900 text-center">{category.name}</span>
                  <span className="text-xs text-gray-500 text-center mt-1">{category.description}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Documents List */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {data.categories.map((category: any) => {
                const categoryDocs = data.documents.filter((doc: any) => doc.category === category.id);
                if (categoryDocs.length === 0) return null;
                
                return (
                  <div key={category.id} id={category.id}>
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-blue-100 rounded-md flex items-center justify-center mr-3">
                        <category.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900">{category.name}</h2>
                    </div>
                    
                    <div className="grid gap-4">
                      {categoryDocs.map((doc: any, index: number) => (
                        <motion.div
                          key={doc.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className="bg-white p-6 rounded-md shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                        >
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center">
                                <FileCode className="w-5 h-5 text-blue-600 mr-2" />
                                {doc.title}
                              </h3>
                              <p className="text-gray-600 text-sm mb-3">{doc.description}</p>
                              <div className="flex items-center gap-4 text-xs text-gray-500">
                                <span>Updated: {doc.updated}</span>
                                <span>{doc.pages} pages</span>
                              </div>
                            </div>
                            <a 
                              href="#"
                              className="ml-4 flex items-center px-4 py-2 bg-gray-100 hover:bg-blue-600 hover:text-white rounded-md transition-colors"
                            >
                              <ExternalLink className="w-4 h-4 mr-2" />
                              <span>View</span>
                              <ChevronRight className="w-4 h-4 ml-1" />
                            </a>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
    </div>
  );
}
