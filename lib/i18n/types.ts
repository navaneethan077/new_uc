export type Language = "en" | "ta" | "si";

export interface TranslationData {
  // Navigation
  nav: {
    home: string;
    chairman: string;
    events: string;
    information: string;
    contact: string;
    gallery: string;
    news: string;
    announcements: string;
    notices: string;
    services: string;
    tourism: string;
    ads: string;
    socialWork: string;
    complaints: string;
    
  };

  // Common
  common: {
    readMore: string;
    learnMore: string;
    viewAll: string;
    contact: string;
    download: string;
    search: string;
    filter: string;
    clear: string;
    submit: string;
    loading: string;
    error: string;
    success: string;
    back: string;
    next: string;
    previous: string;
    close: string;
    menu: string;
  };

  // Home page
  home: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
      exploreServices: string;
      contactUs: string;
    };
    vision: {
      title: string;
      content: string;
    };
    mission: {
      title: string;
      content: string;
    };
    chairman: {
      title: string;
      name: string;
      position: string;
      message: string;
      paragraph1: string;
      paragraph2: string;
      readFullMessage: string;
    };
    services: {
      title: string;
      subtitle: string;
      description: string;
      garbageCollection: {
        title: string;
        description: string;
      };
      certificates: {
        title: string;
        description: string;
      };
      publicNotices: {
        title: string;
        description: string;
      };
      eServices: {
        title: string;
        description: string;
      };
      tourism: {
        title: string;
        description: string;
      };
      communityServices: {
        title: string;
        description: string;
      };
    };
    events: {
      title: string;
      description: string;
      announcements: string;
      notices: string;
    };
    contact: {
      title: string;
      description: string;
      getInTouch: string;
      quickContact: string;
      findUs: string;
      faqsTitle: string;
      faqs: {
        question: string;
        answer: string;
      }[];
    };
    gallery: {
      visualShowcase: string;
      title: string;
      description: string;
      carouselView: string;
      gridView: string;
      clickToView: string;
      active: string;
      viewAllImages: string;
      seeCollection: string;
      exploreFullGallery: string;
      imageCount: string;
      ariaLabels: {
        carousel: string;
        previous: string;
        next: string;
        goToSlide: string;
        view: string;
        viewMore: string;
        close: string;
      };
      images: {
        beaches: {
          alt: string;
        };
        fort: {
          alt: string;
        };
        baobab: {
          alt: string;
        };
        lighthouse: {
          alt: string;
        };
        church: {
          alt: string;
        };
      };
    };
    tourism: {
      title: string;
      description: string;
      media: {
        title: string;
        description: string;
        moreVideos: string;
        about: {
          title: string;
          para1: string;
          para2: string;
        };
        travelTips: {
          title: string;
          tip1: string;
          tip2: string;
          tip3: string;
        };
        videos: Array<{
          id: string;
          title: string;
          description: string;
        }>;
      };
    };
  };

  // Footer
  footer: {
    about: string;
    aboutDescription: string;
    quickLinks: string;
    contactInfo: string;
    address: string;
    phone: string;
    email: string;
    copyright: string;
    builtWith: string;
  };

  // Contact page
  contactPage: {
    title: string;
    description: string;
    directory: string;
    name: string;
    position: string;
    telephone: string;
    fax: string;
    email: string;
    division: string;
    searchPlaceholder: string;
    filterByDivision: string;
    allDivisions: string;
    export: string;
    copy: string;
    directoryInfo: string;
    totalDivisions: string;
    totalContacts: string;
    lastUpdated: string;
    quickActions: string;
    emailMainOffice: string;
    downloadDirectory: string;
    printDirectory: string;
    mostContacted: string;
  };

  //events page
  // notices
  // Events page
  eventsPage: {
    event: Array<{
      id: number;
      title: string;
      slug: string;
      date: string;
      time: string;
      location: string;
      image?: string;
      description: string;
    }>;
    NewsEventPage: Array<{
      id: number;
      title: string;
      excerpt: string;
      content: string;
      author: string;
      date: string; // You can also use Date if you parse it later
      readTime: string;
      image: string;
      category: string;
      slug: string;
    }>;

    notice: Array<{
      id: number;
      title: string;
      date: string;
      image: string;
      description: string;
    }>;

    announcement: Array<{
      id: number;
      title: string;
      date: string;
      icon: string;
      description: string;
    }>;
  };
  ChairmanPage: {
    hero: {
      name: string;
      description: string;
      cta: string;
    };
    whoIsBalen: {
      title: string;
      paragraphs: string[];
    };
    academics: {
      title: string;
      imageAlt: string;
      qualifications: Array<{
        degree: string;
        institution: string;
      }>;
    };
    awards: {
      title: string;
      imageAlt: string;
      items: Array<{
        title: string;
        details: string;
      }>;
    };
    leadership: {
      title: string;
      mayorSection: {
        title: string;
        description: string;
        initiatives: string[];
      };
      cultureSection: {
        title: string;
        description: string;
        quote: string;
      };
    };
  };
  galleryPage: {
    title: string;
    description: string;
    heroImage: string;
    searchPlaceholder: string;
    sortBy: string;
    sortOptions: {
      newest: string;
      oldest: string;
    };
    filters: string;
    clearFilters: string;
    filterByCategory: string;
    showing: string;
    noEvents: string;
    tryAdjusting: string;
    clearAllFilters: string;
    viewDetails: string;
    previous: string;
    next: string;
    categories: {
      environment: string;
      youth: string;
      events: string;
      council: string;
      community: string;
      business: string;
    };
    photos: Array<{
      title: string;
      dateLabel: string;
      location: string;
      participants: string;
      description: string;
    }>;
  };

  //ad
  AdsSectionTranslations: {
    topBar: {
      title: string;
      viewAll: string;
    };
    title: string;
    subtitle: string;
    searchPlaceholder: string;
    allCategories: string;
    viewAll: string;
    notices: string;
    urgent: string;
    readMore: string;
    noResults: {
      title: string;
      description: string;
    };
    modal: {
      title: string;
      subtitle: string;
    };
  };
  news: {
    breadcrumb: string;
    hero: {
      title: string;
      description: string;
    };
    search: {
      placeholder: string;
    };
    sort: {
      label: string;
      newest: string;
      oldest: string;
    };
    filters: {
      button: string;
      clearAll: string;
      category: string;
      time: {
        label: string;
        all: string;
        day: string;
        week: string;
        month: string;
        year: string;
      };
    };
    noResults: string;
    learnMore: string;
    readTime: string;
    pagination: {
      previous: string;
      next: string;
    };
    categories: {
      infrastructure: string;
      technology: string;
      environment: string;
      transport: string;
      youthPrograms: string;
      communityOutreach: string;
      publicSafety: string;
      education: string;
      economicDevelopment: string;
      parksRecreation: string;
    };
    articles: {
      waterTreatment: {
        title: string;
        excerpt: string;
        content: string;
        author: string;
      };
      digitalPortal: {
        title: string;
        excerpt: string;
        content: string;
        author: string;
      };
      communityGarden: {
        title: string;
        excerpt: string;
        content: string;
        author: string;
      };
      transportRoutes: {
        title: string;
        excerpt: string;
        content: string;
        author: string;
      };
      youthCouncil: {
        title: string;
        excerpt: string;
        content: string;
        author: string;
      };
      floodPrevention: {
        title: string;
        excerpt: string;
        content: string;
        author: string;
      };
      wellnessCenter: {
        title: string;
        excerpt: string;
        content: string;
        author: string;
      };
      recyclingInitiative: {
        title: string;
        excerpt: string;
        content: string;
        author: string;
      };
      roadSafety: {
        title: string;
        excerpt: string;
        content: string;
        author: string;
      };
      libraryExpansion: {
        title: string;
        excerpt: string;
        content: string;
        author: string;
      };
      businessGrant: {
        title: string;
        excerpt: string;
        content: string;
        author: string;
      };
      parkRenovation: {
        title: string;
        excerpt: string;
        content: string;
        author: string;
      };
    };
  };

  GallerylodingPage: {
    breadcrumb: string;
    hero: {
      title: string;
      description: string;
    };
    search: {
      albums: string;
      media: string;
    };
    sort: {
      label: string;
      newest: string;
      popular: string;
      name: string;
    };
    filters: {
      button: string;
      clearAll: string;
      category: string;
    };
    viewMode: {
      grid: string;
      masonry: string;
    };
    pagination: {
      previous: string;
      next: string;
    };
    albums: {
      resultsCount: string;
      noResults: {
        title: string;
        description: string;
        clearFilters: string;
      };
      viewAlbum: string;
      items: string;
      tags: string;
      mediaCount: string;
      photoCount: string;
      videoCount: string;
    };
    albumDetail: {
      backToAlbums: string;
      mediaItems: string;
      viewPhoto: string;
      viewVideo: string;
      photo: string;
      video: string;
      likes: string;
      views: string;
      downloads: string;
    };
    categories: {
      environment: string;
      heritage: string;
      wildlife: string;
      culture: string;
      community: string;
      landmarks: string;
    };
    albumsData: Array<{
      id: string;
      title: string;
      description: string;
      location: string;
      category: string;
      tags: string[];
    }>;
    mediaItems: Array<{
      id: string;
      title: string;
      description: string;
      location: string;
      category: string;
    }>;
  };

  // NewsEvent

  NewsLabels: {
    backToAllNews: string;
    relatedNews: string;
    publishedBy: string;
    lastUpdated: string;
    shareThisArticle: string;
    copyLink: string;
    articleSaved: string;
    saved: string;
    save: string;
    print: string;
    readMore: string;
  };
}
