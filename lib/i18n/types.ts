export interface TranslationSchema {
  nav: {
    home: string;
    products: string;
    solutions: string;
    services: string;
    aboutUs: string;
    searchPlaceholder: string;
  };
  navDropdown: {
    products: {
      enterpriseCPUs: string;
      enterpriseCPUsDesc: string;
      aiAccelerators: string;
      aiAcceleratorsDesc: string;
      networkChips: string;
      networkChipsDesc: string;
      securityModules: string;
      securityModulesDesc: string;
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
      ourStory: string;
      ourStoryDesc: string;
      leadership: string;
      leadershipDesc: string;
      careers: string;
      careersDesc: string;
      press: string;
      pressDesc: string;
      contactUs: string;
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
      consulting: {
        title: string;
        description: string;
      };
      engineering: {
        title: string;
        description: string;
      };
      deployment: {
        title: string;
        description: string;
      };
      support: {
        title: string;
        description: string;
      };
      training: {
        title: string;
        description: string;
      };
      lifecycle: {
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
      performance: string;
      energy: string;
      uptime: string;
      roi: string;
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
      cta: string;
      privacy: string;
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
}
