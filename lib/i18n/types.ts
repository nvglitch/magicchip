export interface TranslationSchema {
  // SEO Metadata
  seo: {
    // Page titles
    pageTitle: {
      home: string;
      products: string;
      about: string;
      contact: string;
      documents: string;
      downloads: string;
      news: string;
      factory: string;
      company: string;
      techDocs: string;
    };
    // Meta descriptions
    metaDescription: {
      home: string;
      products: string;
      about: string;
      contact: string;
      documents: string;
      downloads: string;
      news: string;
      factory: string;
      company: string;
      techDocs: string;
    };
    altTexts: {
      hero: string;
      featuredProduct: string;
      logo: string;
      socialProof: string;
      company: string;
      factory: string;
      team: string;
      products: string;
      documents: string;
    };
  };
  // Open Graph
  og: {
    title: string;
    description: string;
    image: string;
    url: string;
  };
  nav: {
    home: string;
    products: string;
    solutions: string;
    services: string;
    aboutUs: string;
    documents: string;
    contact: string;
    searchPlaceholder: string;
    searchAriaLabel: string;
    languageAriaLabel: string;
    menuAriaLabel: string;
  };
  navDropdown: {
    products: {
      industrialMiniPC: string;
      industrialMiniPCDesc: string;
      firewallMiniPC: string;
      firewallMiniPCDesc: string;
      desktopMiniPC: string;
      desktopMiniPCDesc: string;
      firewallServer: string;
      firewallServerDesc: string;
      viewAll: string;
    };
    solutions: {
      dataCenter: string;
      dataCenterDesc: string;
      cloudComputing: string;
      cloudComputingDesc: string;
      edgeComputing: string;
      edgeComputingDesc: string;
      aiML: string;
      aiMLDesc: string;
      viewAll: string;
    };
    services: {
      consulting: string;
      consultingDesc: string;
      implementation: string;
      implementationDesc: string;
      training: string;
      trainingDesc: string;
      support: string;
      supportDesc: string;
      viewAll: string;
    };
    about: {
      ourCompany: string;
      ourCompanyDesc: string;
      ourFactory: string;
      ourFactoryDesc: string;
      contactUs: string;
      contactUsDesc: string;
    };
    documents: {
      news: string;
      newsDesc: string;
      downloads: string;
      downloadsDesc: string;
      techDocs: string;
      techDocsDesc: string;
    };
    contact: {
      email: string;
      emailDesc: string;
      phone: string;
      phoneDesc: string;
      whatsapp: string;
      whatsappDesc: string;
    };
  };
  hero: {
    slide1: {
      title: string;
      subtitle: string;
      cta: string;
    };
    slide2: {
      title: string;
      subtitle: string;
      cta: string;
    };
    slide3: {
      title: string;
      subtitle: string;
      cta: string;
    };
    dragHint: string;
    previousSlide: string;
    nextSlide: string;
    pauseSlideshow: string;
    playSlideshow: string;
    goToSlide: string;
  };
  products: {
    title: string;
    subtitle: string;
    categories: {
      processors: {
        title: string;
        description: string;
      };
      ai: {
        title: string;
        description: string;
      };
      network: {
        title: string;
        description: string;
      };
      security: {
        title: string;
        description: string;
      };
    };
    learnMore: string;
    backToProducts: string;
    viewDetails: string;
    ctaTitle: string;
    ctaDescription: string;
    ctaButton: string;
    viewOnAlibaba: string;
  };
  productDetail: {
    productNotFound: string;
    backToProducts: string;
    backToCategory: string;
    productGallery: string;
    exploreProduct: string;
    galleryDescription: string;
    enlargeMainView: string;
    enlargeView: string;
    technicalSpecifications: string;
    industrialConfigDetails: string;
    specificationMatrix: string;
    hardwareParameters: string;
    operatingRange: string;
    industrialRated: string;
    productAdvantages: string;
    advantagesHeading: string;
    enlargeImage: string;
    interestedIn: string;
    contactPrompt: string;
    contactSales: string;
    viewOnAlibaba: string;
    closeEnlargedImage: string;
    enlargedProductView: string;
  };
  company: {
    valuesTitle: string;
    timelineTitle: string;
    locationTitle: string;
  };
  about: {
    learnMore: string;
  };
  news: {
    backToList: string;
    placeholderContent: string;
  };
  contactPage: {
    invalidEmail: string;
  };
  techDocs: {
    heroTitle: string;
    heroSubtitle: string;
    updatedLabel: string;
    pagesLabel: string;
    viewButton: string;
  };
  documentsPage: {
    viewButton: string;
  };
  featured: {
    badge: string;
    title: string;
    description: string;
    features: string[];
    cta: string;
  };
  services: {
    title: string;
    subtitle: string;
    items: {
      industrySolutions: {
        title: string;
        description: string;
      };
      oemOdm: {
        title: string;
        description: string;
      };
      rapidProduction: {
        title: string;
        description: string;
      };
      globalSupply: {
        title: string;
        description: string;
      };
      technicalSupport: {
        title: string;
        description: string;
      };
      lifecycleManagement: {
        title: string;
        description: string;
      };
    };
    cta: string;
    customPackage: string;
  };
  social: {
    title: string;
    subtitle: string;
    quote: string;
    author: string;
    role: string;
    stats: {
      rating: string;
      ratingLabel: string;
      factorySize: string;
      factorySizeUnit: string;
      factorySizeLabel: string;
      responseTime: string;
      responseTimeLabel: string;
      globalReach: string;
      globalReachLabel: string;
    };
    caseStudy: string;
  };
  lead: {
    badge: string;
    title: string;
    description: string;
    benefits: string[];
    form: {
      title: string;
      subtitle: string;
      name: string;
      email: string;
      company: string;
      cta: string;
      privacy: string;
      successTitle: string;
      successMessage: string;
    };
  };
  footer: {
    newsletter: {
      title: string;
      subtitle: string;
      placeholder: string;
      button: string;
    };
    links: {
      about: string;
      support: string;
      contact: string;
    };
    about: string[];
    support: string[];
    contact: string[];
    copyright: string;
    privacy: string;
    terms: string;
  };
  language: {
    title: string;
    en: string;
    fr: string;
    de: string;
    it: string;
    es: string;
  };
  downloads: {
    title: string;
    subtitle: string;
    table: {
      document: string;
      category: string;
      format: string;
      size: string;
      download: string;
    };
  };
  factory: {
    hero: {
      title: string;
      subtitle: string;
    };
    overview: {
      title: string;
      description: string;
    };
    capabilities: {
      title: string;
      subtitle: string;
    };
    quality: {
      title: string;
      subtitle: string;
    };
    ourFacilities: string;
    certifications: string;
    certificationsSubtitle: string;
    stats: {
      energyReduction: string;
      waterRecycled: string;
      wasteToLandfill: string;
      carbonNeutral: string;
    };
  };
  chat: {
    scrollToTop: string;
    fab: {
      tooltip: string;
    };
    header: {
      greeting: string;
      close: string;
    };
    tabs: {
      whatsapp: string;
      message: string;
    };
    whatsapp: {
      title: string;
      subtitle: string;
      number: string;
      label: string;
      copyButton: string;
      copied: string;
      startChat: string;
    };
    form: {
      title: string;
      subtitle: string;
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
      submitButton: string;
      submitting: string;
      successTitle: string;
      successMessage: string;
    };
  };
}
