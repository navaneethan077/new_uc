import { TranslationData } from "./types";

export const translations: Record<string, TranslationData> = {
  en: {
    nav: {
      home: "Home",
      chairman: "Chairman",
      events: "Events & Updates",
      information: "Information",
      contact: "Contact Us",
      gallery: "Gallery",
      news: "News",
      announcements: "Announcements",
      notices: "Notices",
      services: "Services",
      tourism: "Tourism",
    },
    common: {
      readMore: "Read More",
      learnMore: "Learn More",
      viewAll: "View All",
      contact: "Contact",
      download: "Download",
      search: "Search",
      filter: "Filter",
      clear: "Clear",
      submit: "Submit",
      loading: "Loading",
      error: "Error",
      success: "Success",
      back: "Back",
      next: "Next",
      previous: "Previous",
      close: "Close",
      menu: "Menu",
    },
    home: {
      hero: {
        title: "Building a Better",
        subtitle: "Community Together",
        description:
          "Dedicated to serving our residents with transparency, innovation, and excellence in local governance.",
        exploreServices: "Explore Our Services",
        contactUs: "Contact Us",
      },
      vision: {
        title: "Vision",
        content: "An independent, sovereign and prosperous Mannar.",
      },
      mission: {
        title: "Mission",
        content:
          "To provide the leadership for an excellent municipal mechanism with good governance and effective coordination between agencies to improve residents' quality of life.",
      },
      chairman: {
        title: "Chairman's Message",
        name: "Hon. Rajesh Perera",
        position: "Chairman, Municipal Council",
        message:
          "Dear Citizens, it is my honor to serve as your Chairman and work alongside our dedicated team to build a stronger, more prosperous community for all residents.",
        paragraph1:
          "Our administration is committed to transparency, sustainable development, and ensuring that every voice in our community is heard. Together, we are implementing innovative solutions to improve infrastructure, enhance public services, and create opportunities for economic growth.",
        paragraph2:
          "I encourage you to actively participate in our community initiatives and share your valuable feedback as we continue to work towards our shared vision of excellence.",

        readFullMessage: "Read Full Message",
      },
      services: {
        title: "Municipal Services & Information",
        subtitle: "Municipal Services & Information",
        description: "Access essential services and stay informed about municipal programs and initiatives",
        garbageCollection: {
          title: "Garbage Collection",
          description:
            "Schedule pickup, report missed collections, and learn about waste management programs in your area.",
        },
        certificates: {
          title: "Certificates & Permits",
          description:
            "Apply for birth certificates, marriage certificates, and other official municipal documents online.",
        },
        publicNotices: {
          title: "Public Notices",
          description:
            "Stay informed with the latest municipal announcements, policy changes, and community updates.",
        },
        eServices: {
          title: "E-Services",
          description:
            "Access digital services including online payments, permit applications, and service requests.",
        },
        tourism: {
          title: "Tourism",
          description:
            "Presents information about local tourist attractions, cultural events, historical sites, and natural beauty spots within Mannar.",
        },
        communityServices: {
          title: "Community Services",
          description: "Programs for youth, elders, health clinics, and public welfare initiatives.",
        },
      },
      events: {
        title: "Events & Updates",
        description:
          "Stay informed about upcoming events, public notices, and official announcements from Mannar Urban Council.",
        announcements: "ANNOUNCEMENTS",
        notices: "NOTICES",
      },
      contact: {
        title: "Contact Us",
        getInTouch: "Get in Touch",
        description: "We’d love to hear from you. Please fill out the form below.",
        quickContact: "Quick Contact",
        findUs: "Find Us",
        faqsTitle: "Frequently Asked Questions",
        faqs: [
          {
            question: "What are the office hours for municipal services?",
            answer:
              "Our main office is open Monday to Friday from 8:00 AM to 4:30 PM. Emergency services are available 24/7.",
          },
          {
            question: "How can I apply for building permits?",
            answer:
              "Building permits can be applied online through our E-Services portal or at our Planning Department.",
          },
          {
            question: "When is garbage collection in my area?",
            answer:
              "Garbage collection schedules vary by zone. Check your collection day by entering your address online.",
          },
          {
            question: "How do I report a municipal issue or complaint?",
            answer:
              "You can report issues through this form, call our hotline, or use our complaint portal available 24/7.",
          },
        ],
      },
      gallery: {
        visualShowcase: "Visual Showcase",
        title: "Explore Our Gallery",
        description: "Discover the beauty and heritage of Mannar through our curated collection of images",
        carouselView: "Carousel View",
        gridView: "Grid View",
        clickToView: "Click to view full size",
        active: "Active",
        viewAllImages: "View All Images",
        seeCollection: "See our complete collection",
        exploreFullGallery: "Explore Full Gallery",
        imageCount: "Image {current} of {total}",
        ariaLabels: {
          carousel: "Image gallery carousel",
          previous: "Previous image",
          next: "Next image",
          goToSlide: "Go to slide",
          view: "View",
          viewMore: "View more images",
          close: "Close lightbox",
        },
        images: {
          beaches: {
            alt: "Mannar Island Beaches",
          },
          fort: {
            alt: "Mannar Fort",
          },
          baobab: {
            alt: "Baobab Trees",
          },
          lighthouse: {
            alt: "Mannar Lighthouse",
          },
          church: {
            alt: "St. Sebastian's Church",
          },
        },
      },
      tourism: {
        title: "Tourism",
        description: "Discover Mannar's unique attractions, culture, and natural beauty.",
        media: {
          title: "Discover Mannar's Beauty",
          description:
            "Explore the hidden gem of Sri Lanka through these captivating videos showcasing Mannar's unique landscapes, culture, and attractions.",
          moreVideos: "More Videos",
          about: {
            title: "About Mannar, Sri Lanka",
            para1:
              "Located in Sri Lanka's Northern Province, Mannar is an island district known for its pristine beaches, rich cultural heritage, and unique biodiversity. The region features historic sites like the Mannar Fort, ancient Baobab trees believed to be over 700 years old, and the famous Adam's Bridge—a chain of limestone shoals connecting Sri Lanka to India.",
            para2:
              "Mannar is a birdwatcher's paradise with numerous migratory species, and its economy is primarily based on fishing, agriculture, and salt production. The district offers a glimpse into authentic Sri Lankan life away from the usual tourist trails, making it an ideal destination for travelers seeking unique experiences.",
          },
          travelTips: {
            title: "Travel Tips",
            tip1: "Best time to visit: December to March for bird watching",
            tip2: "Don't miss: The Baobab tree, Mannar Fort, and Talaimannar Pier",
            tip3: "Try local delicacies like fresh seafood and palmyrah products",
          },
          videos: [
            {
              id: "YWCMA2G22A8", // <-- YouTube ID
              title: "Mannar Sri Lanka - Exploring the Hidden Gem",
              description:
                "Discover the untouched beauty of Mannar with its pristine beaches, historic sites, and unique wildlife in this comprehensive tour.",
            },
            {
              id: "qRcIv8PJTG8", // <-- YouTube ID
              title: "Discover Mannar - Sri Lanka's Untouched Paradise",
              description:
                "Experience the serene landscapes and rich cultural heritage that make Mannar a truly special destination in Sri Lanka.",
            },
            {
              id: "tL2qrDNBLzQ", // <-- YouTube ID
              title: "Mannar Island - Cultural Heritage & Natural Beauty",
              description:
                "Explore the fascinating blend of Tamil and colonial influences alongside breathtaking natural attractions on Mannar Island.",
            },
            {
              id: "LRAL62axdmE", // <-- YouTube ID
              title: "Mannar Tourism - Beaches, History & Wildlife",
              description:
                "From the famous Baobab trees to migratory bird watching, Mannar offers diverse experiences for every type of traveler.",
            },
          ],
        },
      }
    },
    footer: {
      about: "Mannar Urban Council",
      aboutDescription:
        "Serving the vibrant community of Mannar with transparency, efficiency, and dedication since 1987. Building a sustainable and prosperous future together through quality municipal services.",
      quickLinks: "Quick Links",
      contactInfo: "Contact Information",
      address: "Main Street, Mannar 41000, Sri Lanka",
      phone: "+94 23 223 5678",
      email: "info@mannaruc.gov.lk",
      copyright: "© 2025Mannar Urban Council. All rights reserved. Built with dedication for our community.",
      builtWith: "Built with dedication for our community",
    },
    contactPage: {
      title: "Contact Directory",
      description: "Quickly and efficiently find the right contact at the Mannar Municipal Council.",
      directory: "Contact Directory",
      name: "Name",
      position: "Position",
      telephone: "Telephone",
      fax: "Fax",
      email: "Email",
      division: "Division",
      searchPlaceholder: "Search by name, position, telephone, or email...",
      filterByDivision: "Filter by Division",
      allDivisions: "All Divisions",
      export: "Export",
      copy: "Copy",
      directoryInfo: "Directory Information",
      totalDivisions: "Total Divisions",
      totalContacts: "Total Contacts",
      lastUpdated: "Last Updated",
      quickActions: "Quick Actions",
      emailMainOffice: "Email Main Office",
      downloadDirectory: "Download Directory",
      printDirectory: "Print Directory",
      mostContacted: "Most Contacted",
    }
    ,
    eventsPage: {
      event: [
        {
          id: 1,
          title: "Community Clean-Up Drive",
          slug: "community-clean-up-drive",
          date: "March 15, 2024",
          time: "8:00 AM",
          location: "Central Park",
          image: "/mannar-island-beaches-sri-lanka-pristine-coastline.jpg",
          description:
            "Join us for our monthly community clean-up initiative to keep our neighborhoods beautiful and sustainable.",
        },
        {
          id: 2,
          title: "Public Budget Meeting",
          slug: "public-budget-meeting",
          date: "March 20, 2024",
          time: "7:00 PM",
          location: "Council Chambers",
          image: "/historic-fort-mannar-sri-lanka-colonial-architectu.jpg",
          description:
            "Annual budget presentation and public consultation session. Your input matters for our community's future.",
        },
        {
          id: 3,
          title: "Youth Development Workshop",
          slug: "youth-development-workshop",
          date: "March 25, 2024",
          time: "2:00 PM",
          location: "Community Center",
          image: "/baobab-trees-mannar-sri-lanka-ancient-african-tree.jpg",
          description: "Skills development and career guidance workshop for young residents aged 16-25.",
        },
        {
          id: 4,
          title: "Senior Citizens Health Fair",
          slug: "senior-citizens-health-fair",
          date: "March 30, 2024",
          time: "10:00 AM",
          location: "Municipal Hall",
          image: "/mannar-lighthouse-sri-lanka-historic-maritime-land.jpg",
          description:
            "Free health screenings, wellness consultations, and health education for our senior community members.",
        },
      ],
      notice: [
        {
          id: 1,
          title: "Water Supply Maintenance",
          date: "April 5, 2025",
          image: "/mannar-lighthouse-sri-lanka-historic-maritime-land.jpg",
          description: "Scheduled maintenance will affect water supply in Zone A from 9 AM to 3 PM.",
        },
        {
          id: 2,
          title: "Road Closure Notice",
          date: "April 3, 2025",
          image: "/historic-fort-mannar-sri-lanka-colonial-architectu.jpg",
          description: "Main Street closed for repaving. Detour signs posted. Expected completion: April 10.",
        },
        {
          id: 3,
          title: "New Recycling Schedule",
          date: "April 1, 2025",
          image: "/baobab-trees-mannar-sri-lanka-ancient-african-tree.jpg",
          description: "Recycling collection days updated. New bins distributed starting April 7.",
        },
      ],
      announcement: [
        {
          id: 1,
          title: "Chairman’s Address on Economic Growth",
          date: "March 30, 2025",
          icon: "megaphone",
          description: "Watch the Chairman’s latest address on revitalizing Mannar’s local economy.",
        },
        {
          id: 2,
          title: "Emergency Alert: Storm Preparedness",
          date: "March 28, 2025",
          icon: "alert",
          description:
            "Residents advised to prepare for incoming monsoon conditions. Emergency kits available.",
        },
        {
          id: 3,
          title: "New Public Transport Routes Announced",
          date: "March 25, 2025",
          icon: "map-pin",
          description: "Three new bus routes to improve connectivity across Mannar Island starting May 1.",
        },
      ],
    },
   ChairmanPage : {
  hero: {
    name: "Balen Shah",
    description: "Engineer, Rapper, and Mayor of Kathmandu. Champion of urban reform and transparent governance.",
    cta: "Get Involved"
  },
  whoIsBalen: {
    title: "Who is Balen?",
    paragraphs: [
      "Balen Shah (Balendra Shah) is a prominent figure in Nepal, known for his roles as an engineer, rapper, and politician. He gained widespread recognition as an independent candidate and was elected the mayor of Kathmandu in May 2022. His unexpected victory, without the backing of any political party, was a landmark event in Nepalese politics, signaling a shift towards more independent leadership.",
      "Before entering politics, Balen was already well-known in Nepal's hip-hop community as a rapper and lyricist. He is also a civil engineer by profession. As mayor, he has been vocal about issues like urban planning, waste management, and corruption, and has earned praise for his straightforward approach to addressing challenges in the capital city.",
      "Balen has also become a polarizing figure due to his unconventional style of governance and willingness to challenge the status quo, which has sparked both admiration and criticism."
    ]
  },
  academics: {
    title: "Academics & Qualifications",
    imageAlt: "Balen Shah - Engineer and Politician",
    qualifications: [
      {
        degree: "Master of Science (Mechanical Engineering, Production Technology)",
        institution: "Magdeburg Technical School & Otto-Von-Guericke University Magdeburg, Germany"
      },
      {
        degree: "Certificate in Senior Management",
        institution: "Kenya Institute of Management, Kenya"
      },
      {
        degree: "Certificate in Standardization & Quality Control",
        institution: "University of Denver, Colorado, USA"
      },
      {
        degree: "Certificate in Establishment of Natural Physical Standards",
        institution: "National Bureau of Standards & Technology, Gaithersburg, MD, USA"
      },
      {
        degree: "Certificate in Standards Specification Writing",
        institution: "British Standards Institution (BSI Group)"
      }
    ]
  },
  awards: {
    title: "Honours, Awards & Publications",
    imageAlt: "Balen Shah's awards and publications",
    items: [
      {
        title: "Greater Good Award",
        details: "Mazari Africa, Istanbul, Kenya, May 2021"
      },
      {
        title: "Doctor Of Sciences (Honoris Causa)",
        details: "Jurumegh Opriga Obriga University of Science & Technology, Siyap, Kenya, December 2010"
      },
      {
        title: "The Quest For Nationhood Roadmap To Our Future",
        details: "Nairobi Mountainsho Publishers, 2017"
      },
      {
        title: "The Flame of Freedom",
        details: "Nairobi Mountainsho Publishers, 2019"
      },
      {
        title: "Doctorate of Leadership in Social Development (Honoris Causa)",
        details: "Lambalong University of Creative Technology, Kuala Lumpur, July 2012"
      },
      {
        title: "Honorary Doctorate",
        details: "Florida Agricultural Mechanical University, USA, 2009"
      },
      {
        title: "Doctor of Laws (LLD) (Honoris Causa)",
        details: "The University of Nairobi, Kenya, October 2008"
      }
    ]
  },
  leadership: {
    title: "Leadership & Impact",
    mayorSection: {
      title: "As Mayor of Kathmandu",
      description: "Since being elected in 2022, Balen Shah has focused on critical urban issues including:",
      initiatives: [
        "Urban planning and development",
        "Waste management solutions",
        "Anti-corruption initiatives",
        "Infrastructure improvement",
        "Cultural preservation"
      ]
    },
    cultureSection: {
      title: "Cultural Influence",
      description: "Before entering politics, Balen was already well-known in Nepal's hip-hop community as a rapper and lyricist. His music often addresses social issues, which aligns with his political approach of challenging the status quo and advocating for transparency.",
      quote: "Balen has become a polarizing figure due to his unconventional style of governance and willingness to challenge established systems, sparking both admiration and criticism."
    }
  }

  },
  galleryPage: {
      title: "Event Gallery",
      description: "Explore moments from Mannar's vibrant community events and initiatives.",
      heroImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4000&q=80",
      searchPlaceholder: "Search events by title, location, or category...",
      sortBy: "Sort by",
      sortOptions: {
        newest: "Newest First",
        oldest: "Oldest First"
      },
      filters: "Filters",
      clearFilters: "Clear All",
      filterByCategory: "Filter by Category",
      showing: "Showing {count} of {total} events",
      noEvents: "No events found",
      tryAdjusting: "Try adjusting your search or filter criteria",
      clearAllFilters: "Clear all filters",
      viewDetails: "View Details",
      previous: "Previous",
      next: "Next",
      categories: {
        environment: "Environment",
        youth: "Youth Programs",
        events: "Public Events",
        council: "Council Ceremonies",
        community: "Community Outreach",
        business: "Business"
      },
      photos: [
        {
          title: "Community Clean-up Drive 2024",
          dateLabel: "January 15, 2024",
          location: "Central Park, Mannar",
          participants: "200+ volunteers",
          description: "Annual community clean-up initiative bringing together residents for environmental conservation."
        },
        {
          title: "Youth Leadership Workshop",
          dateLabel: "January 10, 2024",
          location: "Community Center",
          participants: "50 young leaders",
          description: "Empowering young minds with leadership skills and civic responsibility training."
        },
        {
          title: "New Year Cultural Festival",
          dateLabel: "January 1, 2024",
          location: "Town Square",
          participants: "1000+ attendees",
          description: "Celebrating the New Year with traditional music, dance, and cultural performances."
        },
        {
          title: "Council Budget Meeting",
          dateLabel: "December 20, 2023",
          location: "Council Chambers",
          participants: "Council members & public",
          description: "Annual budget presentation and public consultation meeting."
        },
        {
          title: "Senior Citizens Health Fair",
          dateLabel: "December 15, 2023",
          location: "Municipal Hall",
          participants: "150 seniors",
          description: "Free health screenings and wellness programs for senior community members."
        },
        {
          title: "Tree Planting Campaign",
          dateLabel: "December 10, 2023",
          location: "Various locations",
          participants: "300+ volunteers",
          description: "Community-wide tree planting initiative to enhance green spaces and combat climate change."
        },
        {
          title: "Beach Restoration Project",
          dateLabel: "November 25, 2023",
          location: "Mannar Beach",
          participants: "150+ volunteers",
          description: "Community effort to restore and preserve the beautiful beaches of Mannar."
        },
        {
          title: "Annual Sports Festival",
          dateLabel: "November 15, 2023",
          location: "City Stadium",
          participants: "500+ participants",
          description: "Annual sports competition featuring various games and activities for all ages."
        },
        {
          title: "Local Business Expo",
          dateLabel: "October 30, 2023",
          location: "Convention Center",
          participants: "75+ local businesses",
          description: "Showcasing local businesses and entrepreneurs to promote economic growth."
        }
      ]
    }
  
},

  ta: {
    nav: {
      home: "முகப்பு",
      chairman: "தலைவர்",
      events: "நிகழ்வுகள் & புதுப்பிப்புகள்",
      information: "தகவல்",
      contact: "தொடர்பு கொள்ளுங்கள்",
      gallery: "படத்தொகுப்பு",
      news: "செய்திகள்",
      announcements: "அறிவிப்புகள்",
      notices: "அறிவிப்புகள்",
      services: "சேவைகள்",
      tourism: "சுற்றுலா",
    },
    common: {
      readMore: "மேலும் படிக்க",
      learnMore: "மேலும் அறிய",
      viewAll: "அனைத்தையும் பார்க்க",
      contact: "தொடர்பு",
      download: "பதிவிறக்க",
      search: "தேடல்",
      filter: "வடிகட்டி",
      clear: "அழிக்க",
      submit: "சமர்ப்பிக்க",
      loading: "ஏற்றுகிறது",
      error: "பிழை",
      success: "வெற்றி",
      back: "பின்",
      next: "அடுத்து",
      previous: "முந்தைய",
      close: "மூடு",
      menu: "மெனு",
    },
    home: {
      hero: {
        title: "ஒரு சிறந்த",
        subtitle: "சமுதாயத்தை ஒன்றாக கட்டமைத்தல்",
        description:
          "வெளிப்படைத்தன்மை, புதுமை மற்றும் உள்ளூர் நிர்வாகத்தில் சிறப்புடன் எங்கள் குடியிருப்பாளர்களுக்கு சேவை செய்வதில் அர்ப்பணிப்பு.",
        exploreServices: "எங்கள் சேவைகளை ஆராயுங்கள்",
        contactUs: "எங்களை தொடர்பு கொள்ளுங்கள்",
      },
      vision: {
        title: "நோக்கம்",
        content: "ஒரு சுதந்திரமான, இறையாண்மை மற்றும் செழிப்பான மன்னார்.",
      },
      mission: {
        title: "பணி",
        content:
          "குடியிருப்பாளர்களின் வாழ்க்கைத் தரத்தை மேம்படுத்த நல்ல நிர்வாகம் மற்றும் நிறுவனங்களுக்கிடையே பயனுள்ள ஒருங்கிணைப்புடன் சிறந்த நகராட்சி பொறிமுறைக்கான தலைமையை வழங்குதல்.",
      },
      chairman: {
        title: "தலைவரின் செய்தி",
        name: "மாண். ராஜேஷ் பெரேரா",
        position: "தலைவர், நகர சபை",
        message:
          "அன்புள்ள குடிமக்களே, உங்கள் தலைவராக சேவை செய்வதும், எங்கள் அர்ப்பணிப்புள்ள குழுவுடன் இணைந்து அனைத்து குடியிருப்பாளர்களுக்கும் வலுவான, மேலும் செழிப்பான சமுதாயத்தை கட்டமைப்பதும் எனது பெருமை.",
        paragraph1:
          "எங்கள் நிர்வாகம் வெளிப்படைத்தன்மை, நிலையான வளர்ச்சி மற்றும் எங்கள் சமூகத்தில் உள்ள ஒவ்வொரு குரலும் கேட்கப்படுவதை உறுதி செய்வதில் உறுதிபூண்டுள்ளது. ஒன்றாக, உள்கட்டமைப்பை மேம்படுத்த, பொது சேவைகளை மேம்படுத்த மற்றும் பொருளாதார வளர்ச்சிக்கான வாய்ப்புகளை உருவாக்க புதுமையான தீர்வுகளை நாங்கள் செயல்படுத்துகிறோம்.",
        paragraph2:
          "சிறந்து விளங்கும் எங்கள் பகிரப்பட்ட தரVisionக்கு நாங்கள் தொடர்ந்து பணியாற்றும் போது எங்கள் சமூக முன்முயற்சிகளில் தீவிரமாக பங்கேற்று உங்கள் மதிப்புமிக்க கருத்துக்களைப் பகிர்ந்து கொள்ள உங்களை ஊக்குவிக்கிறேன்.",
        readFullMessage: "முழு செய்தியைப் படிக்கவும்",
      },
      services: {
        title: "நகராட்சி சேவைகள் & தகவல்",
        subtitle: "நகராட்சி சேவைகள் & தகவல்",
        description:
          "அத்தியாவசிய சேவைகளை அணுகி நகராட்சி திட்டங்கள் மற்றும் முன்முயற்சிகள் பற்றி அறிந்து கொள்ளுங்கள்",
        garbageCollection: {
          title: "குப்பை சேகரிப்பு",
          description: "உங்கள் பகுதியில் குப்பை மேலாண்மை திட்டங்களைப் பற்றி அறிந்து கொள்ளுங்கள்.",
        },
        certificates: {
          title: "சான்றிதழ்கள் & அனுமதிகள்",
          description:
            "பிறப்பு சான்றிதழ்கள், திருமண சான்றிதழ்கள் மற்றும் பிற அதிகாரப்பூர்வ நகராட்சி ஆவணங்களுக்கு ஆன்லைனில் விண்ணப்பிக்கவும்.",
        },
        publicNotices: {
          title: "பொது அறிவிப்புகள்",
          description:
            "சமீபத்திய நகராட்சி அறிவிப்புகள், கொள்கை மாற்றங்கள் மற்றும் சமுதாய புதுப்பிப்புகளுடன் தகவலறிந்த நிலையில் இருங்கள்.",
        },
        eServices: {
          title: "மின்-சேவைகள்",
          description:
            "ஆன்லைன் கொடுப்பனவுகள், அனுமதி விண்ணப்பங்கள் மற்றும் சேவை கோரிக்கைகள் உட்பட டிஜிட்டல் சேவைகளை அணுகவும்.",
        },
        tourism: {
          title: "சுற்றுலா",
          description:
            "மன்னாரில் உள்ள உள்ளூர் சுற்றுலா இடங்கள், கலாச்சார நிகழ்வுகள், வரலாற்று தளங்கள் மற்றும் இயற்கை அழகு இடங்கள் பற்றிய தகவல்களை வழங்குகிறது.",
        },
        communityServices: {
          title: "சமுதாய சேவைகள்",
          description:
            "இளைஞர்கள், முதியவர்கள், சுகாதார கிளினிக்குகள் மற்றும் பொது நல முன்முயற்சிகளுக்கான திட்டங்கள்.",
        },
      },
      events: {
        title: "நிகழ்வுகள் & புதுப்பிப்புகள்",
        description:
          "மன்னார் நகர சபையின் வரவிருக்கும் நிகழ்வுகள், பொது அறிவிப்புகள் மற்றும் அதிகாரப்பூர்வ அறிவிப்புகள் பற்றி தகவலறிந்த நிலையில் இருங்கள்.",
        announcements: "அறிவிப்புகள்",
        notices: "அறிவிப்புகள்",
      },
      contact: {
        title: "எங்களை தொடர்புகொள்ளவும்",
        getInTouch: "எங்களை அணுகவும்",
        description: "உங்களிடம் இருந்து கேட்பதில் எங்களுக்கு மகிழ்ச்சி.",
        quickContact: "விரைவு தொடர்பு",
        findUs: "எங்களை கண்டுபிடிக்கவும்",
        faqsTitle: "அடிக்கடி கேட்கப்படும் கேள்விகள்",
        faqs: [
          {
            question: "அலுவலக நேரங்கள் என்ன?",
            answer:
              "எங்கள் அலுவலகம் திங்கள் முதல் வெள்ளி வரை காலை 8:00 முதல் மாலை 4:30 வரை திறந்திருக்கும்.",
          },
          {
            question: "கட்டிட அனுமதியை எவ்வாறு பெறலாம்?",
            answer:
              "நீங்கள் ஆன்லைன் அல்லது திட்டப்பிரிவில் நேரடியாக விண்ணப்பிக்கலாம்.",
          },
          {
            question: "என் பகுதியில் குப்பை சேகரிப்பு எப்போது?",
            answer:
              "குப்பை சேகரிப்பு அட்டவணை பகுதிகளின் அடிப்படையில் மாறும்.",
          },
          {
            question: "புகார் செய்வது எப்படி?",
            answer:
              "இந்த படிவம், ஹாட்லைன் அல்லது ஆன்லைன் வழியாக புகாரளிக்கலாம்.",
          },
        ],
      },
      gallery: {
        visualShowcase: "கண்ணுக்கு விருந்து",
        title: "எங்கள் காட்சியகத்தை ஆராயுங்கள்",
        description:
          "மன்னாரின் அழகு மற்றும் பாரம்பரியத்தை எங்கள் தேர்ந்தெடுக்கப்பட்ட படத் தொகுப்பின் மூலம் கண்டறியுங்கள்",
        carouselView: "கரூசல் காட்சி",
        gridView: "கட்டம் காட்சி",
        clickToView: "முழு அளவில் காண கிளிக் செய்யவும்",
        active: "செயலில்",
        viewAllImages: "அனைத்து படங்களையும் காண்க",
        seeCollection: "எங்கள் முழுமையான தொகுப்பைப் பாருங்கள்",
        exploreFullGallery: "முழு காட்சியகத்தை ஆராயுங்கள்",
        imageCount: "படம் {current} / {total}",
        ariaLabels: {
          carousel: "பட காட்சியக கரூசல்",
          previous: "முந்தைய படம்",
          next: "அடுத்த படம்",
          goToSlide: "ஸ்லைடுக்கு செல்லவும்",
          view: "பார்க்க",
          viewMore: "மேலும் படங்களை காண்க",
          close: "லைட்பாக்ஸ் மூடு",
        },
        images: {
          beaches: {
            alt: "மன்னார் தீவுக் கடற்கரைகள்",
          },
          fort: {
            alt: "மன்னார் கோட்டை",
          },
          baobab: {
            alt: "போபாப் மரங்கள்",
          },
          lighthouse: {
            alt: "மன்னார் விளக்ககம்",
          },
          church: {
            alt: "செயின்ட் செபாஸ்டியன் தேவாலயம்",
          },
        },
      },
      tourism: {
        title: "சுற்றுலா",
        description: "மன்னாரின் தனித்துவமான ஈர்ப்புகள், பண்பாடு மற்றும் இயற்கை அழகைக் கண்டறியுங்கள்.",
        media: {
          title: "மன்னாரின் அழகை கண்டறியுங்கள்",
          description:
            "இலங்கையின் மறைக்கப்பட்ட மணியை கண்டறியுங்கள், மன்னாரின் இயற்கை அழகு, பண்பாடு மற்றும் தனித்துவமான ஈர்ப்புகளை வெளிப்படுத்தும் இந்தக் கவர்ச்சிகரமான வீடியோக்கள் மூலம்.",
          moreVideos: "மேலும் வீடியோக்கள்",
          about: {
            title: "மன்னார் பற்றி",
            para1:
              "இலங்கையின் வடக்கு மாகாணத்தில் அமைந்துள்ள மன்னார், தூய்மையான கடற்கரை, செழுமையான பண்பாட்டு பாரம்பரியம் மற்றும் தனித்துவமான உயிரின வளம் கொண்ட ஒரு தீவுப் பிரதேசமாகும்...",
            para2:
              "பறவைகளை விரும்புவோருக்கான சொர்க்கமாக விளங்கும் மன்னார், மீன்பிடி, வேளாண்மை மற்றும் உப்பு உற்பத்தியை அடிப்படையாகக் கொண்டது...",
          },
          travelTips: {
            title: "பயண குறிப்புகள்",
            tip1: "சிறந்த நேரம்: பறவைகளை பார்க்க டிசம்பர் முதல் மார்ச் வரை",
            tip2: "கண்டிப்பாக பாருங்கள்: பவோபாப் மரம், மன்னார் கோட்டை, தாலைமன்னார் துறைமுகம்",
            tip3: "உள்ளூர் கடல் உணவுகள் மற்றும் பனைப்பொருட்களை சுவையுங்கள்",
          },
          videos: [
            {
              id: "YWCMA2G22A8",
              title: "மன்னார் இலங்கை - மறைக்கப்பட்ட அழகை ஆராயுங்கள்",
              description:
                "தூய்மையான கடற்கரை, வரலாற்றுச் சின்னங்கள் மற்றும் விலங்குகள் கொண்ட மன்னாரின் அழகை கண்டறியுங்கள்.",
            },
            {
              id: "qRcIv8PJTG8",
              title: "மன்னார் - தொடாத சொர்க்கம்",
              description:
                "அழகிய இயற்கை காட்சிகள் மற்றும் பண்பாட்டு பாரம்பரியத்துடன் மன்னார்.",
            },
            {
              id: "tL2qrDNBLzQ",
              title: "மன்னார் தீவு - பாரம்பரியம் மற்றும் இயற்கை அழகு",
              description:
                "தமிழ் மற்றும் காலனித்துவ கலாச்சாரத்தின் கலவையை ஆராயுங்கள் மற்றும் இயற்கை அழகுகளை அனுபவிக்கவும்.",
            },
            {
              id: "LRAL62axdmE",
              title: "மன்னார் சுற்றுலா - கடற்கரை, வரலாறு மற்றும் பறவைகள்",
              description:
                "பவோபாப் மரம் முதல் பறவைகள் வரை பல்வேறு அனுபவங்களை வழங்குகிறது.",
            },
          ],
        },
      },
    },
    footer: {
      about: "மன்னார் நகர சபை",
      aboutDescription:
        "1987 முதல் வெளிப்படைத்தன்மை, திறன் மற்றும் அர்ப்பணிப்புடன் மன்னாரின் துடிப்பான சமுதாயத்திற்கு சேவை செய்து வருகிறது. தரமான நகராட்சி சேவைகள் மூலம் ஒன்றாக நிலையான மற்றும் செழிப்பான எதிர்காலத்தை கட்டமைத்தல்.",
      quickLinks: "விரைவு இணைப்புகள்",
      contactInfo: "தொடர்பு தகவல்",
      address: "பிரதான வீதி, மன்னார் 41000, இலங்கை",
      phone: "+94 23 223 5678",
      email: "info@mannaruc.gov.lk",
      copyright:
        "© 2025மன்னார் நகர சபை. அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை. எங்கள் சமுதாயத்திற்கான அர்ப்பணிப்புடன் கட்டமைக்கப்பட்டது.",
      builtWith: "எங்கள் சமுதாயத்திற்கான அர்ப்பணிப்புடன் கட்டமைக்கப்பட்டது",
    },
    contactPage: {
      title: "தொடர்பு அடைவு",
      description: "மன்னார் நகர சபையில் சரியான தொடர்பை விரைவாகவும் திறமையாகவும் கண்டறியுங்கள்.",
      directory: "தொடர்பு அடைவு",
      name: "பெயர்",
      position: "பதவி",
      telephone: "தொலைபேசி",
      fax: "ஃபேக்ஸ்",
      email: "மின்னஞ்சல்",
      division: "பிரிவு",
      searchPlaceholder: "பெயர், பதவி, தொலைபேசி அல்லது மின்னஞ்சல் மூலம் தேடுங்கள்...",
      filterByDivision: "பிரிவு மூலம் வடிகட்டவும்",
      allDivisions: "அனைத்து பிரிவுகள்",
      export: "ஏற்றுமதி",
      copy: "நகல்",
      directoryInfo: "அடைவு தகவல்",
      totalDivisions: "மொத்த பிரிவுகள்",
      totalContacts: "மொத்த தொடர்புகள்",
      lastUpdated: "கடைசியாக புதுப்பிக்கப்பட்டது",
      quickActions: "விரைவு செயல்கள்",
      emailMainOffice: "பிரதான அலுவலகத்திற்கு மின்னஞ்சல்",
      downloadDirectory: "அடைவு பதிவிறக்கம்",
      printDirectory: "அடைவு அச்சிடுதல்",
      mostContacted: "அதிகம் தொடர்பு கொண்டவர்கள்",
    },
    eventsPage: {
      event: [
        {
          id: 1,
          title: "சமூக தூய்மை இயக்கம்",
          slug: "community-clean-up-drive",
          date: "மார்ச் 15, 2024",
          time: "காலை 8:00",
          location: "மத்திய பூங்கா",
          image: "/mannar-island-beaches-sri-lanka-pristine-coastline.jpg",
          description:
            "எங்கள் பகுதிகளை அழகாகவும் நிலைத்தன்மையுடனும் வைத்திருக்க மாதாந்திர சமூக தூய்மை முயற்சியில் சேருங்கள்.",
        },
        {
          id: 2,
          title: "பொது பட்ஜெட் கூட்டம்",
          slug: "public-budget-meeting",
          date: "மார்ச் 20, 2024",
          time: "மாலை 7:00",
          location: "சபை அரங்கம்",
          image: "/historic-fort-mannar-sri-lanka-colonial-architectu.jpg",
          description:
            "ஆண்டிறுதி பட்ஜெட் அறிக்கை மற்றும் பொது ஆலோசனை அமர்வு. நமது சமூகத்தின் எதிர்காலத்திற்கு உங்கள் பங்களிப்பு முக்கியம்.",
        },
        {
          id: 3,
          title: "இளைஞர் மேம்பாட்டு பட்டறை",
          slug: "youth-development-workshop",
          date: "மார்ச் 25, 2024",
          time: "மதியம் 2:00",
          location: "சமூக மையம்",
          image: "/baobab-trees-mannar-sri-lanka-ancient-african-tree.jpg",
          description: "16-25 வயதுடைய இளைஞர்களுக்கான திறன் மேம்பாடு மற்றும் தொழில் வழிகாட்டல் பட்டறை.",
        },
        {
          id: 4,
          title: "மூத்த குடிமக்கள் சுகாதார கண்காட்சி",
          slug: "senior-citizens-health-fair",
          date: "மார்ச் 30, 2024",
          time: "காலை 10:00",
          location: "மாநகர மண்டபம்",
          image: "/mannar-lighthouse-sri-lanka-historic-maritime-land.jpg",
          description: "மூத்த குடிமக்களுக்கான இலவச சுகாதார பரிசோதனைகள், நல ஆலோசனைகள் மற்றும் சுகாதார கல்வி.",
        },
      ],
      notice: [
        {
          id: 1,
          title: "தண்ணீர் வழங்கல் பராமரிப்பு",
          date: "ஏப்ரல் 5, 2025",
          image: "/mannar-lighthouse-sri-lanka-historic-maritime-land.jpg",
          description:
            "திட்டமிடப்பட்ட பராமரிப்பு ஏப்ரல் 5 அன்று காலை 9 மணி முதல் மாலை 3 மணி வரை மண்டலம் A இல் தண்ணீர் வழங்கலை பாதிக்கும்.",
        },
        {
          id: 2,
          title: "சாலை மூடல் அறிவிப்பு",
          date: "ஏப்ரல் 3, 2025",
          image: "/historic-fort-mannar-sri-lanka-colonial-architectu.jpg",
          description:
            "முதன்மை வீதி மறுசீரமைப்புக்காக மூடப்பட்டுள்ளது. வழித்தடக் குறியீடுகள் இடப்பட்டுள்ளன. எதிர்பார்க்கப்படும் நிறைவு: ஏப்ரல் 10.",
        },
        {
          id: 3,
          title: "புதிய மறுசுழற்சி அட்டவணை",
          date: "ஏப்ரல் 1, 2025",
          image: "/baobab-trees-mannar-sri-lanka-ancient-african-tree.jpg",
          description:
            "மறுசுழற்சி சேகரிப்பு நாட்கள் புதுப்பிக்கப்பட்டது. புதிய பின்கள் ஏப்ரல் 7 முதல் விநியோகிக்கப்படும்.",
        },
      ],
      announcement: [
        {
          id: 1,
          title: "பொருளாதார வளர்ச்சியைக் குறித்த தலைவரின் உரை",
          date: "மார்ச் 30, 2025",
          icon: "megaphone",
          description:
            "மன்னாரின் உள்ளூர் பொருளாதாரத்தை மீட்டெடுக்கும் தொடர்பான தலைவரின் சமீபத்திய உரையைப் பாருங்கள்.",
        },
        {
          id: 2,
          title: "அவசர எச்சரிக்கை: புயல் தயாராகுதல்",
          date: "மார்ச் 28, 2025",
          icon: "alert",
          description:
            "வரவிருக்கும் மழைக்கால நிலைகளுக்கு குடியிருப்பாளர்கள் தயாராக அறிவுறுத்தப்படுகிறார்கள். அவசர கிட்கள் கிடைக்கின்றன.",
        },
        {
          id: 3,
          title: "புதிய பொது போக்குவரத்து வழிகள் அறிவிக்கப்பட்டன",
          date: "மார்ச் 25, 2025",
          icon: "map-pin",
          description: "மே 1 முதல் மன்னார் தீவின் முழுவதும் இணைப்பை மேம்படுத்த மூன்று புதிய பேருந்து வழிகள்.",
        },
      ],
    },

    ChairmanPage: {
  hero: {
    name: "பாலென் ஷா",
    description: "இன்ஜினீயர், ராப்பர் மற்றும் காத்த்மாண்டு மேயர். நகர அபிவிருத்தி மற்றும் திறந்த நிர்வாகத்தின் முன்னோடி.",
    cta: "பங்கேற்கவும்"
  },
  whoIsBalen: {
    title: "பாலென் யார்?",
    paragraphs: [
      "பாலென் ஷா (பாலென்றா ஷா) நேபாளில் ஒரு புகழ்பெற்ற நபர், இன்ஜினீயர், ராப்பர் மற்றும் அரசியல்வாதியாகப் பரிச்சயமானவர். அவர் சுதந்திர வேட்பாளராக வெற்றி பெற்றபோது, 2022 மே மாதத்தில் காத்த்மாண்டு மேயராக தேர்வாயினர். எந்த அரசியல் கட்சியின் ஆதரவும் இல்லாமல் வந்த இந்த எதிர்பாராத வெற்றி, நேபாள அரசியலில் ஒரு முக்கியமான நிகழ்வாகும், சுயாதீன தலைமையின் மாற்றத்தை வெளிப்படுத்தியது.",
      "அரசியலில் நுழைந்ததற்கு முன், பாலென் நேபாள ஹிப்-ஹாப் சமூகத்தில் ராப்பர் மற்றும் கவிஞராகப் பிரபலமாக இருந்தார். அவர் ஒரு சிவில் இன்ஜினீயராகவும் உள்ளார். மேயராக இருக்கையில், நகர திட்டமிடல், கழிவு மேலாண்மை மற்றும் ஊழல் போன்ற பிரச்சினைகள் தொடர்பில் அவர் வெளிப்படையாக கருத்து கூறியுள்ளார்.",
      "பாலென் அவரது வழக்கத்திற்கு மாறான நிர்வாக பாணியாலும் நிலையான முறைகளுக்கு எதிராக முன்வந்ததாலும், புகழும் விமர்சனமும் இரண்டும் பெற்றுள்ளார்."
    ]
  },
  academics: {
    title: "கல்வி & தகுதிகள்",
    imageAlt: "பாலென் ஷா - இன்ஜினீயர் மற்றும் அரசியல்வாதி",
    qualifications: [
      {
        degree: "மெக்கானிக்கல் இன்ஜினீயரிங், தயாரிப்பு தொழில்நுட்பம் - எம்.எஸ்.",
        institution: "Magdeburg தொழில்நுட்ப பள்ளி & Otto-Von-Guericke பல்கலைக்கழகம், ஜெர்மனி"
      },
      {
        degree: "சீனியர் மேலாண்மை சான்றிதழ்",
        institution: "Kenya மேலாண்மை நிறுவனம், கென்யா"
      },
      {
        degree: "தரநிலை & தர கட்டுப்பாடு சான்றிதழ்",
        institution: "University of Denver, கொலராடோ, அமெரிக்கா"
      },
      {
        degree: "இயற்கை உடல் தரநிலைகள் நிறுவல் சான்றிதழ்",
        institution: "National Bureau of Standards & Technology, Gaithersburg, MD, USA"
      },
      {
        degree: "தர விவரக்குறிப்பு எழுதும் சான்றிதழ்",
        institution: "British Standards Institution (BSI Group)"
      }
    ]
  },
  awards: {
    title: "பட்டங்கள், விருதுகள் & பதிப்புரைகள்",
    imageAlt: "பாலென் ஷாவின் விருதுகள் மற்றும் பதிப்புரைகள்",
    items: [
      {
        title: "மிகச்சிறந்த நன்மை விருது",
        details: "Mazari Africa, Istanbul, கென்யா, மே 2021"
      },
      {
        title: "அறிவியல் டாக்டர் (மாண்புமிகு) (Honoris Causa)",
        details: "Jurumegh Opriga Obriga University of Science & Technology, Siyap, கென்யா, டிசம்பர் 2010"
      },
      {
        title: "தேசியத்தின் பாதை: எங்கள் எதிர்கால திட்டம்",
        details: "Nairobi Mountainsho Publishers, 2017"
      },
      {
        title: "சுதந்திரத்தின் தீ",
        details: "Nairobi Mountainsho Publishers, 2019"
      },
      {
        title: "சமூக மேம்பாட்டில் தலைமைக் கல்வி டாக்டர் (Honoris Causa)",
        details: "Lambalong University of Creative Technology, குவாலாலம்பூர், ஜூலை 2012"
      },
      {
        title: "கௌரவ பட்டம்",
        details: "Florida Agricultural Mechanical University, USA, 2009"
      },
      {
        title: "சட்டங்களில் டாக்டர் (LLD) (Honoris Causa)",
        details: "The University of Nairobi, கென்யா, அக்டோபர் 2008"
      }
    ]
  },
  leadership: {
    title: "நிர்வாகம் & தாக்கம்",
    mayorSection: {
      title: "காத்த்மாண்டு மேயராக",
      description: "2022ல் தேர்வாய்ந்தபின்னர், பாலென் ஷா முக்கிய நகர பிரச்சினைகளில் கவனம் செலுத்தியுள்ளார்:",
      initiatives: [
        "நகர திட்டமிடல் மற்றும் அபிவிருத்தி",
        "கழிவு மேலாண்மை தீர்வுகள்",
        "ஊழல் எதிர்ப்பு முயற்சிகள்",
        "அமைப்பு மேம்பாடு",
        "கலை மற்றும் பண்பாட்டு பாதுகாப்பு"
      ]
    },
    cultureSection: {
      title: "பண்பாட்டு தாக்கம்",
      description: "அரசியலில் நுழைந்ததற்கு முன், பாலென் நேபாள ஹிப்-ஹாப் சமூகத்தில் ராப்பர் மற்றும் கவிஞராக பிரபலமாக இருந்தார். அவரது இசை சமூக பிரச்சினைகளை அடிக்கடி உரைக்கும், இது அரசியல் முறையின் வெளிப்படையான அணுகுமுறையுடன் இணைக்கப்பட்டுள்ளது.",
      quote: "பாலென் அவரது வழக்கத்திற்கு மாறான நிர்வாக பாணியால் மற்றும் நிலையான முறைகளை சவால் செய்வதில் முன்வந்ததனால், புகழும் விமர்சனமும் இரண்டும் பெற்றுள்ளார்."
    }
  }
    },
    galleryPage: {
      title: "நிகழ்வு கேலரி",
      description: "மன்னாரின் துடிப்பான சமூக நிகழ்வுகள் மற்றும் முன்முயற்சிகளின் தருணங்களை ஆராயுங்கள்.",
      heroImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4000&q=80",
      searchPlaceholder: "தலைப்பு, இடம் அல்லது வகையின்படி நிகழ்வுகளைத் தேடுங்கள்...",
      sortBy: "வரிசைப்படுத்து",
      sortOptions: {
        newest: "புதியது முதல்",
        oldest: "பழையது முதல்"
      },
      filters: "வடிப்பான்கள்",
      clearFilters: "அனைத்தையும் அழி",
      filterByCategory: "வகையின்படி வடிகட்டு",
      showing: "{total} நிகழ்வுகளில் {count} காட்டப்படுகிறது",
      noEvents: "நிகழ்வுகள் எதுவும் கிடைக்கவில்லை",
      tryAdjusting: "உங்கள் தேடல் அல்லது வடிகட்டல் அளவுகோல்களை சரிசெய்ய முயற்சிக்கவும்",
      clearAllFilters: "அனைத்து வடிப்பான்களையும் அழி",
      viewDetails: "விவரங்களைக் காண்க",
      previous: "முந்தைய",
      next: "அடுத்தது",
      categories: {
        environment: "சூழல்",
        youth: "இளைஞர் திட்டங்கள்",
        events: "பொது நிகழ்வுகள்",
        council: "கவுன்சில் சடங்குகள்",
        community: "சமூக வெளிப்பாடு",
        business: "வணிகம்"
      },
      photos: [
        {
          title: "சமூக சுத்தம் இயக்கம் 2024",
          dateLabel: "ஜனவரி 15, 2024",
          location: "மைய பூங்கா, மன்னார்",
          participants: "200+ தன்னார்வலர்கள்",
          description: "சூழல் பாதுகாப்பிற்காக குடியிருப்பாளர்களை ஒன்றிணைக்கும் வருடாந்திர சமூக சுத்தம் முன்முயற்சி."
        },
        {
          title: "இளைஞர் தலைமைப் பட்டறை",
          dateLabel: "ஜனவரி 10, 2024",
          location: "சமூக மையம்",
          participants: "50 இளைஞர் தலைவர்கள்",
          description: "தலைமைத்துவ திறன்கள் மற்றும் குடிமைப் பொறுப்பு பயிற்சியுடன் இளைஞர் மனதை சக்திவாய்ந்ததாக்குதல்."
        },
        {
          title: "புத்தாண்டு கலாச்சார திருவிழா",
          dateLabel: "ஜனவரி 1, 2024",
          location: "நகர சதுக்கம்",
          participants: "1000+ பங்கேற்பாளர்கள்",
          description: "பாரம்பரிய இசை, நடனம் மற்றும் கலாச்சார நிகழ்ச்சிகளுடன் புத்தாண்டைக் கொண்டாடுதல்."
        },
        {
          title: "கவுன்சில் பட்ஜெட் கூட்டம்",
          dateLabel: "டிசம்பர் 20, 2023",
          location: "கவுன்சில் அறை",
          participants: "கவுன்சில் உறுப்பினர்கள் & பொது மக்கள்",
          description: "வருடாந்திர பட்ஜெட் விளக்கக்காட்சி மற்றும் பொது கலந்தாய்வு கூட்டம்."
        },
        {
          title: "மூத்த குடிமக்கள் சுகாதார கண்காட்சி",
          dateLabel: "டிசம்பர் 15, 2023",
          location: "நகராட்சி மண்டபம்",
          participants: "150 மூத்தவர்கள்",
          description: "மூத்த சமூக உறுப்பினர்களுக்கான இலவச சுகாதார பரிசோதனைகள் மற்றும் ஆரோக்கியத் திட்டங்கள்."
        },
        {
          title: "மரம் நடும் பிரச்சாரம்",
          dateLabel: "டிசம்பர் 10, 2023",
          location: "பல்வேறு இடங்கள்",
          participants: "300+ தன்னார்வலர்கள்",
          description: "பசுமை இடங்களை மேம்படுத்தவும் காலநிலை மாற்றத்தை எதிர்த்துப் போராடவும் சமூகம் தழுவிய மரம் நடும் முன்முயற்சி."
        },
        {
          title: "கடற்கரை மீட்டெடுப்புத் திட்டம்",
          dateLabel: "நவம்பர் 25, 2023",
          location: "மன்னார் கடற்கரை",
          participants: "150+ தன்னார்வலர்கள்",
          description: "மன்னாரின் அழகான கடற்கரைகளை மீட்டெடுக்கவும் பாதுகாக்கவும் சமூக முயற்சி."
        },
        {
          title: "வருடாந்திர விளையாட்டு திருவிழா",
          dateLabel: "நவம்பர் 15, 2023",
          location: "நகர அரங்கம்",
          participants: "500+ பங்கேற்பாளர்கள்",
          description: "அனைத்து வயதினருக்கும் பல்வேறு விளையாட்டுகள் மற்றும் செயல்பாடுகளைக் கொண்ட வருடாந்திர விளையாட்டுப் போட்டி."
        },
        {
          title: "உள்ளூர் வணிக கண்காட்சி",
          dateLabel: "அக்டோபர் 30, 2023",
          location: "மாநாட்டு மையம்",
          participants: "75+ உள்ளூர் வணிகங்கள்",
          description: "பொருளாதார வளர்ச்சியை ஊக்குவிக்க உள்ளூர் வணிகங்கள் மற்றும் தொழில்முனைவோரைக் காட்சிப்படுத்துதல்."
        }
      ]
    }

 

},

  si: {
    nav: {
      home: "මුල් පිටුව",
      chairman: "සභාපති",
      events: "සිදුවීම් සහ යාවත්කාලීන",
      information: "තොරතුරු",
      contact: "අප හා සම්බන්ධ වන්න",
      gallery: "ගැලරිය",
      news: "ප්‍රවෘත්ති",
      announcements: "නිවේදන",
      notices: "දැනුම්දීම්",
      services: "සේවා",
      tourism: "සංචාරක",
    },
    common: {
      readMore: "තව කියවන්න",
      learnMore: "තව දැනගන්න",
      viewAll: "සියල්ල බලන්න",
      contact: "සම්බන්ධතාව",
      download: "බාගන්න",
      search: "සොයන්න",
      filter: "පෙරහන",
      clear: "ඉවත් කරන්න",
      submit: "ඉදිරිපත් කරන්න",
      loading: "පූරණය වෙමින්",
      error: "දෝෂය",
      success: "සාර්ථකත්වය",
      back: "ආපසු",
      next: "ඊළඟ",
      previous: "පෙර",
      close: "වසන්න",
      menu: "මෙනුව",
    },
    home: {
      hero: {
        title: "වඩා හොඳ",
        subtitle: "ප්‍රජාවක් එකට ගොඩනැගීම",
        description:
          "පාරදෘශ්‍යතාව, නවෝත්පාදනය සහ ප්‍රාදේශීය පාලනයේ විශිෂ්ටත්වයෙන් අපගේ පදිංචිකරුවන්ට සේවය කිරීමට කැපවී සිටිමු.",
        exploreServices: "අපගේ සේවා ගවේෂණය කරන්න",
        contactUs: "අප හා සම්බන්ධ වන්න",
      },
      vision: {
        title: "දැක්ම",
        content: "ස්වාධීන, ස්වෛරී සහ සමෘද්ධිමත් මන්නාරමක්.",
      },
      mission: {
        title: "මෙහෙවර",
        content:
          "පදිංචිකරුවන්ගේ ජීවන තත්ත්වය වැඩිදියුණු කිරීම සඳහා හොඳ පාලනයක් සහ ආයතන අතර ඵලදායී සම්බන්ධීකරණයක් සහිත විශිෂ්ට නාගරික යාන්ත්‍රණයක් සඳහා නායකත්වය ලබා දීම.",
      },
      chairman: {
        title: "සභාපතිගේ පණිවිඩය",
        name: "ගරු. රාජේෂ් පෙරේරා",
        position: "සභාපති, නගර සභාව",
        message:
          "ආදරණීය පුරවැසියන්, ඔබගේ සභාපති ලෙස සේවය කිරීම සහ අපගේ කැපවූ කණ්ඩායම සමඟ එක්ව සියලුම පදිංචිකරුවන් සඳහා ශක්තිමත්, වඩාත් සමෘද්ධිමත් ප්‍රජාවක් ගොඩනැගීම මගේ ගෞරවයයි.",
        paragraph1:
          "අපගේ පරිපාලනය පාරදෘශ්‍යතාවයට, තිරසාර සංවර්ධනයට සහ අපගේ ප්‍රජාව තුළ ඇති සෑම හඬක්ම ඇසෙන බවට වග බලා ගැනීමට කැපවී සිටී. එක්ව, යටිතල පහසුකම් වැඩිදියුණු කිරීම, රාජකාරී සේවා වැඩිදියුණු කිරීම සහ ආර්ථික වර්ධනය සඳහා අවස්ථා නිර්මාණය කිරීම සඳහා නව්‍ය විසඳුම් ක්‍රියාත්මක කරනු ලැබේ.",
        paragraph2:
          "අපගේ පොදු අභිලාෂය වන උසස් බව අත්කර ගැනීම සඳහා අපි දිගටම වැඩ කරන විට, අපගේ ප්‍රජා අභිප්‍රාරයන්හි සක්‍රියව සහභාගී වීමට සහ ඔබගේ වටිනා ප්‍රතිපෝෂණ බෙදාගැනීමට මම ඔබව පොළඹවයි.",
        readFullMessage: "සම්පූර්ණ පණිවිඩය කියවන්න",
      },
      services: {
        title: "නාගරික සේවා සහ තොරතුරු",
        subtitle: "නාගරික සේවා සහ තොරතුරු",
        description: "අත්‍යවශ්‍ය සේවා වලට ප්‍රවේශ වී නාගරික වැඩසටහන් සහ මුලපිරීම් ගැන දැනගන්න",
        garbageCollection: {
          title: "කසළ එකතු කිරීම",
          description: "ඔබේ ප්‍රදේශයේ අපද්‍රව්‍ය කළමනාකරණ වැඩසටහන් ගැන දැනගන්න.",
        },
        certificates: {
          title: "සහතික සහ අවසර පත්‍ර",
          description: "ජන්ම සහතික, විවාහ සහතික සහ අනෙකුත් නිල නාගරික ලේඛන සඳහා අන්තර්ජාලයෙන් අයදුම් කරන්න.",
        },
        publicNotices: {
          title: "පොදු දැනුම්දීම්",
          description: "නවතම නාගරික නිවේදන, ප්‍රතිපත්ති වෙනස්කම් සහ ප්‍රජා යාවත්කාලීන සමඟ දැනුවත්ව සිටින්න.",
        },
        eServices: {
          title: "ඊ-සේවා",
          description:
            "අන්තර්ජාල ගෙවීම්, අවසර අයදුම්පත් සහ සේවා ඉල්ලීම් ඇතුළු ඩිජිටල් සේවා වලට ප්‍රවේශ වන්න.",
        },
        tourism: {
          title: "සංචාරක",
          description:
            "මන්නාරය තුළ ප්‍රාදේශීය සංචාරක ආකර්ෂණ, සංස්කෘතික සිදුවීම්, ඓතිහාසික ස්ථාන සහ ස්වභාවික සුන්දරත්ව ස්ථාන පිළිබඳ තොරතුරු ඉදිරිපත් කරයි.",
        },
        communityServices: {
          title: "ප්‍රජා සේවා",
          description: "තරුණ, වැඩිහිටි, සෞඛ්‍ය සායන සහ පොදු සුභසාධන මුලපිරීම් සඳහා වැඩසටහන්.",
        },
      },
      events: {
        title: "සිදුවීම් සහ යාවත්කාලීන",
        description: "මන්නාර නගර සභාවේ ඉදිරියට එන සිදුවීම්, පොදු දැනුම්දීම් සහ නිල නිවේදන ගැන දැනගන්න.",
        announcements: "නිවේදන",
        notices: "දැනුම්දීම්",
      },
      contact: {
        title: "අප අමතන්න",
        getInTouch: "අමතා සම්බන්ධ වන්න",
        description: "ඔබගෙන් ප්‍රතිචාර ලබා ගැනීමට අපි සතුටු වෙමු. කරුණාකර පහත පෝරමය පුරවන්න.",
        quickContact: "ක්ෂණික සම්බන්ධතා",
        findUs: "අපව සොයන්න",
        faqsTitle: "සාමාන්‍යයෙන් අසන ප්‍රශ්න",
        faqs: [
          {
            question: "කොන්ත්‍රාත් සේවාවන් සඳහා කාර්යාල වේලාවන් කවදාද?",
            answer: "අපගේ ප්‍රධාන කාර්යාලය සඳුදා සිට සිකුරාදා දක්වා පෙ.ව. 8:00 සිට ප.ව. 4:30 දක්වා විවෘත වේ. හදිසි සේවාවන් 24/7 ලබා ගත හැකිය.",
          },
          {
            question: "ගොඩනැගිලි අනුමැතිය සඳහා මට කෙසේ ඉල්ලිය හැකිද?",
            answer: "ගොඩනැගිලි අනුමැතිය සඳහා අපගේ E-Services පෝර්ටලය හරහා හෝ සැලසුම් දෙපාර්තමේන්තුවෙන් ඉල්ලීම කළ හැකිය.",
          },
          {
            question: "මගේ ප්‍රදේශයේ කුණු රැස් කිරීම කවදාද?",
            answer: "කුණු රැස් කිරීමේ වේලාවන් කලාප අනුව වෙනස් වේ. ඔබේ ලිපිනය ඇතුළත් කර ඔබේ කුණු රැස් කිරීමේ දිනය පරීක්ෂා කරන්න.",
          },
          {
            question: "මම නාගරික ගැටළුවක් හෝ පැමිණිල්ලක් කෙසේ වාර්තා කරමි?",
            answer: "ඔබ මෙම පෝරමය හරහා, අපගේ හෝට්ලයින් හරහා, හෝ 24/7 ලබාගත හැකි පැමිණිල්ල පෝර්ටලය භාවිතා කර ගැටළු වාර්තා කළ හැකිය.",
          },
        ],
      },
      gallery: {
        visualShowcase: "දෘශ්‍ය ප්‍රදර්ශනය",
        title: "අපගේ රූපශාලාව සොයාගන්න",
        description: "මන්නාරම්ගේ සිරස්තල සහ උරුමය අපගේ තෝරාගත් රූප එකතුවේ මගින් සොයාගන්න",
        carouselView: "කරූසල් දසුන",
        gridView: "ග්‍රිඩ් දසුන",
        clickToView: "සම්පූර්ණ ප්‍රමාණයෙන් බැලීමට ක්ලික් කරන්න",
        active: "සක්‍රියයි",
        viewAllImages: "සියලු රූප බලන්න",
        seeCollection: "අපගේ සම්පූර්ණ එකතුව බලන්න",
        exploreFullGallery: "සම්පූර්ණ රූපශාලාව සොයාගන්න",
        imageCount: "රූපය {current} / {total}",
        ariaLabels: {
          carousel: "රූපශාලා කරූසල්",
          previous: "පෙර රූපය",
          next: "ඊළඟ රූපය",
          goToSlide: "ස්ලයිඩ් වෙත යන්න",
          view: "බලන්න",
          viewMore: "තවත් රූප බලන්න",
          close: "ලයිට්බොක්ස් වැසන්න",
        },
        images: {
          beaches: {
            alt: "මන්නාරම් දූපත් වෙරළ",
          },
          fort: {
            alt: "මන්නාරම් කොටුව",
          },
          baobab: {
            alt: "බාඔබාබ් ගස්",
          },
          lighthouse: {
            alt: "මන්නාරම් ලයිට්හවුස්",
          },
          church: {
            alt: "ශාන්ත සෙබස්තියන් දේවස්ථානය",
          },
        },
      },
      tourism: {
        title: "සංචාරක",
        description: "මන්නාරමයේ විශේෂ ආකර්ෂණ, සංස්කෘතිය සහ ස්වභාවික සොඳුරුකම සොයා බලන්න.",
        media: {
          title: "මන්නාරමයේ සිරිමත් රූපය සොයාගන්න",
          description:
            "ශ්‍රී ලංකාවේ සඟවා තිබෙන මැණික වූ මන්නාරම, එහි සොඳුරු දර්ශන, සංස්කෘතික උරුමය සහ විශේෂ දර්ශනීය ස්ථාන නරඹන්න.",
          moreVideos: "තවත් වීඩියෝ",
          about: {
            title: "මන්නාරම, ශ්‍රී ලංකාව ගැන",
            para1:
              "ශ්‍රී ලංකාවේ උතුරු පළාතේ පිහිටි මන්නාරම, නිවන් ගන්නා ලස්සන වෙරළතීර, සම්ප්‍රදායික උරුමය සහ ජෛව විවිධත්වය සඳහා ප්‍රසිද්ධ දිස්ත්‍රික්කයකි...",
            para2:
              "මන්නාරම පිටසර පක්ෂීන්ට දර්ශනය කිරීමට උතුම් ස්ථානයක් වන අතර, එහි ආර්ථිකය මූලිකව මත්ස්‍යබන්ධනය, කෘෂිකර්මය සහ ලුණු නිෂ්පාදනය මත පදනම් වී ඇත...",
          },
          travelTips: {
            title: "ගමන් උපදෙස්",
            tip1: "මනෝහර පක්ෂීන් දකින සුදුසු කාලය: දෙසැම්බර් සිට මාර්තු දක්වා",
            tip2: "අනිවාර්යයෙන්ම බලන්න: බාඔබාබ් ගස, මන්නාරම බලකොටුව, තලයිමන්නාරම් තොටුපොළ",
            tip3: "ප්‍රාදේශීය මසුන් සහ පනා නිෂ්පාදන රසවිඳින්න",
          },
          videos: [
            {
              id: "YWCMA2G22A8",
              title: "මන්නාරම - සඟවා තිබෙන රූපය සොයා",
              description:
                "අපූරු වෙරළතීර, විඥානය සහ විශේෂිත වනාන්තර සොයාගන්න.",
            },
            {
              id: "qRcIv8PJTG8",
              title: "මන්නාරම - නොමැකුණු සුරක්ෂිත ස්වර්ගය",
              description:
                "මන්නාරමයේ ගොඩනැගීම් සහ සන්සුන් භූ දර්ශන අත්විඳින්න.",
            },
            {
              id: "tL2qrDNBLzQ",
              title: "මන්නාරම් දූපත - උරුමය සහ ස්වභාවික රූපය",
              description:
                "දමිළ සහ ගෝලීය බලපෑම් මිශ්‍ර වූ විශේෂ දර්ශන නරඹන්න.",
            },
            {
              id: "LRAL62axdmE",
              title: "මන්නාරම් සංචාරක - වෙරළතීර, ඉතිහාසය සහ පක්ෂීන්",
              description:
                "බාඔබාබ් ගස සිට පිටසර පක්ෂීන් දක්වා විවිධ අත්දැකීම්.",
            },
          ],
        },
      },
    },
    footer: {
      about: "මන්නාර නගර සභාව",
      aboutDescription:
        "1987 සිට පාරදෘශ්‍යතාව, කාර්යක්ෂමතාව සහ කැපවීමෙන් මන්නාරයේ ජීවන්ත ප්‍රජාවට සේවය කරමින්. ගුණාත්මක නාගරික සේවා හරහා එකට තිරසාර සහ සමෘද්ධිමත් අනාගතයක් ගොඩනැගීම.",
      quickLinks: "ඉක්මන් සබැඳි",
      contactInfo: "සම්බන්ධතා තොරතුරු",
      address: "ප්‍රධාන වීදිය, මන්නාරම 41000, ශ්‍රී ලංකාව",
      phone: "+94 23 223 5678",
      email: "info@mannaruc.gov.lk",
      copyright: "© 2025මන්නාර නගර සභාව. සියලුම අයිතිවාසිකම් ඇවිරිණි. අපගේ ප්‍රජාව සඳහා කැපවීමෙන් ගොඩනගා ඇත.",
      builtWith: "අපගේ ප්‍රජාව සඳහා කැපවීමෙන් ගොඩනගා ඇත",
    },
    contactPage: {
      title: "සම්බන්ධතා නාමාවලිය",
      description: "අගමැති කාර්යාලයේ නිවැරදි සම්බන්ධතාව ඉක්මනින් සහ කාර්යක්ෂමව සොයා ගන්න.",
      directory: "සම්බන්ධතා නාමාවලිය",
      name: "නම",
      position: "තනතුර",
      telephone: "දුරකථනය",
      fax: "ෆැක්ස්",
      email: "ඊමේල්",
      division: "අංශය",
      searchPlaceholder: "නම, තනතුර, දුරකථනය හෝ ඊමේල් අනුව සොයන්න...",
      filterByDivision: "අංශය අනුව පෙරහන",
      allDivisions: "සියලුම අංශ",
      export: "නිර්යාත",
      copy: "පිටපත්",
      directoryInfo: "නාමාවලි තොරතුරු",
      totalDivisions: "මුළු අංශ",
      totalContacts: "මුළු සම්බන්ධතා",
      lastUpdated: "අවසන් යාවත්කාලීන",
      quickActions: "ඉක්මන් ක්‍රියා",
      emailMainOffice: "ප්‍රධාන කාර්යාලයට ඊමේල්",
      downloadDirectory: "නාමාවලිය බාගන්න",
      printDirectory: "නාමාවලිය මුද්‍රණය",
      mostContacted: "වැඩිපුරම සම්බන්ධ වූ",
    },
    eventsPage: {
      event: [
        {
          id: 1,
          title: "සමූහ පිරිසිදු කිරීමේ මෙහෙයුම",
          slug: "community-clean-up-drive",
          date: "2025මාර්තු 15",
          time: "පෙ.ව. 8:00",
          location: "මධ්‍යම උයන",
          image: "/mannar-island-beaches-sri-lanka-pristine-coastline.jpg",
          description:
            "අපගේ පරිශ්‍රයන් ලස්සන සහ තිරසාරව තබා ගැනීමට අපගේ මාසික සමූහ පිරිසිදු කිරීමේ උත්සාහයට එක්වන්න.",
        },
        {
          id: 2,
          title: "පොදු බජට් රැස්වීම",
          slug: "public-budget-meeting",
          date: "2025මාර්තු 20",
          time: "ප.ව. 7:00",
          location: "සභා කාමරය",
          image: "/historic-fort-mannar-sri-lanka-colonial-architectu.jpg",
          description:
            "වාර්ෂික බජට් ඉදිරිපත් කිරීම සහ පොදු උපදේශන සැසිය. අපගේ ප්‍රජාවේ අනාගතය සඳහා ඔබගේ දායකත්වය වැදගත් වේ.",
        },
        {
          id: 3,
          title: "තරුණ සංවර්ධන වැඩමුළුව",
          slug: "youth-development-workshop",
          date: "2025මාර්තු 25",
          time: "ප.ව. 2:00",
          location: "ප්‍රජා මධ්‍යස්ථානය",
          image: "/baobab-trees-mannar-sri-lanka-ancient-african-tree.jpg",
          description:
            "වයස අවුරුදු 16-25 අතර තරුණ පදිංචිකරුවන් සඳහා කුසලතා සංවර්ධන සහ වෘත්තීය මාර්ගෝපදේශන වැඩමුළුව.",
        },
        {
          id: 4,
          title: "වැඩිහිටි පුරවැසියන් සෞඛ්‍ය සාදය",
          slug: "senior-citizens-health-fair",
          date: "2025මාර්තු 30",
          time: "පෙ.ව. 10:00",
          location: "නගර ශාලාව",
          image: "/mannar-lighthouse-sri-lanka-historic-maritime-land.jpg",
          description:
            "අපගේ වැඩිහිටි ප්‍රජා සාමාජිකයන් සඳහා නොමිලේ සෞඛ්‍ය පරීක්ෂණ, සුභසාධන උපදේශන සහ සෞඛ්‍ය අධ්‍යාපනය.",
        },
      ],
      notice: [
        {
          id: 1,
          title: "ජල සැපයුම් නඩත්තු කිරීම",
          date: "2025 අප්‍රේල් 5",
          image: "/mannar-lighthouse-sri-lanka-historic-maritime-land.jpg",
          description: "සැලසුම් කළ නඩත්තු කිරීම 9 පෙ.ව. සිට ප.ව. 3 දක්වා කලාපය A හි ජල සැපයුමට බලපායි.",
        },
        {
          id: 2,
          title: "මාර්ග වසා දැමීමේ දැනුම්දීම",
          date: "2025 අප්‍රේල් 3",
          image: "/historic-fort-mannar-sri-lanka-colonial-architectu.jpg",
          description:
            "ප්‍රධාන වීදිය නැවත පිරිසිදු කිරීම සඳහා වසා ඇත. මාර්ග සංඥා තබා ඇත. අපේක්ෂිත නිමාව: අප්‍රේල් 10.",
        },
        {
          id: 3,
          title: "නව ප්‍රතිචක්‍රීකරණ කාලසටහන",
          date: "2025 අප්‍රේල් 1",
          image: "/baobab-trees-mannar-sri-lanka-ancient-african-tree.jpg",
          description:
            "ප්‍රතිචක්‍රීකරණ එකතු කිරීමේ දින යාවත්කාලීන කර ඇත. නව බිම් අප්‍රේල් 7 සිට බෙදා හැරීමට ඇත.",
        },
      ],
      announcement: [
        {
          id: 1,
          title: "ආර්ථික වර්ධනය පිළිබඳ සභාපතිගේ කතාබහ",
          date: "2025 මාර්තු 30",
          icon: "megaphone",
          description: "මන්නාරයේ දේශීය ආර්ථිකය නැවත සජීවී කර ගැනීම පිළිබඳ සභාපතිගේ නවතම කතාබහ බලන්න.",
        },
        {
          id: 2,
          title: "අවශ්‍ය අනතුරු ඇඟවීම: කුණාටු සූදානම් වීම",
          date: "2025 මාර්තු 28",
          icon: "alert",
          description:
            "ආසන්න මොන්සූන් තත්ත්ව සඳහා පුරවැසියන්ට සූදානම් වීමට උපදෙස් දෙනු ලැබේ. හදිසි කට්ටල ලබා ගත හැක.",
        },
        {
          id: 3,
          title: "නව පොදු ප්‍රවාහන මාර්ග ප්‍රකාශයට පත් කර ඇත",
          date: "2025 මාර්තු 25",
          icon: "map-pin",
          description: "මන්නාර දිවයින පුරා සම්බන්ධතාවය වැඩි දියුණු කිරීමට මැයි 1 සිට නව බස් මාර්ග තුනක්.",
        },
      ],
    },
    ChairmanPage: {
  hero: {
    name: "බාලෙන් ෂා",
    description: "ඉංජිනේරු, රැප් ගායකයෙකු සහ කට්මණ්ඩු නගරයේ මහමැති. නගර සංවර්ධනය සහ විවෘත පාලනය පිළිබඳ පුරෝගාමී.",
    cta: "ඇතුළු වන්න"
  },
  whoIsBalen: {
    title: "බාලෙන් කවුරුද?",
    paragraphs: [
      "බාලෙන් ෂා (බාලෙන්ද්‍ර ෂා) නෙපාලයේ ප්‍රසිද්ධ පුද්ගලයෙකි, ඉංජිනේරු, රැප් ගායක සහ රාජ්‍ය නිලධාරියා ලෙස හැඳින්වෙයි. ඔහු ස්වාධීන අපේක්ෂකයෙකු ලෙස ජනප්‍රියත්වය ලැබූ අතර 2022 මැයි මාසයේ කට්මණ්ඩු නගරයේ මහමැති ලෙස විභාගයට ලක්විය. ඕනෑම දේශපාලන පක්ෂයක ආධාරයක් නොමැතිව ලැබූ මේ අනපේක්ෂිත ජයග්‍රහණය නෙපාල රාජ්‍ය විද්‍යාවේ ලක්ෂ්‍යමය සිදුවීමක් වන අතර ස්වාධීන නායකත්වයට පිවිසීමේ මාර්ගයක් සලසයි.",
      "රාජ්‍ය සේවයට පිවිසීමට පෙර, බාලෙන් නෙපාලයේ හිප්-හොප් සමාජයේ ප්‍රසිද්ධ රැප් ගායකයෙකු සහ ගායන ලේඛකයෙකු ලෙස නම් දායකව තිබුණි. ඔහු පුරවැසි ඉංජිනේරුවරයෙකු ලෙසද කටයුතු කරයි. මහමැති ලෙස, නගර සැලසුම් කිරීම, අපද්‍රව්‍ය කළමනාකරණය සහ අධිෂ්ඨානික කටයුතු පිළිබඳව ඔහු විවෘතව කතා කරමින් ඇත.",
      "ඔහුගේ අමුතු පාලන රීතිය සහ සම්ප්‍රදායික ක්‍රමවලට අභියෝග දැක්වීම නිසා බාලෙන් අගය හා විවේචන දෙකටම ලක්වී ඇත."
    ]
  },
  academics: {
    title: "අධ්‍යාපන සහ සුදුසුකම්",
    imageAlt: "බාලෙන් ෂා - ඉංජිනේරු සහ රාජ්‍ය නිලධාරියා",
    qualifications: [
      {
        degree: "සංයුක්ත විද්‍යාත්මක පීඨය (මැකැනිකල් ඉංජිනේරු, නිෂ්පාදන තාක්ෂණය)",
        institution: "Magdeburg තාක්ෂණ පාසල සහ Otto-Von-Guericke විශ්ව විද්‍යාලය, ජර්මනිය"
      },
      {
        degree: "ජ්‍යේෂ්ඨ කළමනාකරණ සහතිකය",
        institution: "Kenya කළමනාකරණ ආයතනය, කෙන්යා"
      },
      {
        degree: "සම්මතීකරණ සහ ගුණාත්මක පාලන සහතිකය",
        institution: "Denver විශ්ව විද්‍යාලය, කොලරැඩෝ, ඇමරිකාව"
      },
      {
        degree: "ස්වාභාවික භෞතික සම්මතයන් පිහිටුවීමේ සහතිකය",
        institution: "ජාතික සම්මත හා තාක්ෂණ කාර්යාලය, Gaithersburg, MD, ඇමරිකාව"
      },
      {
        degree: "සම්මත විශේෂණ ලිවීමේ සහතිකය",
        institution: "බ්‍රිතාන්‍ය සම්මත ආයතනය (BSI Group)"
      }
    ]
  },
  awards: {
    title: "ගෞරව, සම්මාන සහ ප්‍රකාශන",
    imageAlt: "බාලෙන් ෂාගේ සම්මාන සහ ප්‍රකාශන",
    items: [
      {
        title: "ග්‍රීටර් ගුඩ් සම්මාන",
        details: "Mazari Africa, Istanbul, කෙන්යා, මැයි 2021"
      },
      {
        title: "විද්‍යා ඩොක්ටරේට් (ගෞරවමාන)",
        details: "Jurumegh Opriga Obriga විද්‍යා සහ තාක්ෂණ විශ්ව විද්‍යාලය, Siyap, කෙන්යා, දෙසැම්බර් 2010"
      },
      {
        title: "ජාතිකත්වය සඳහා පසුබැසීමේ මාර්ගය",
        details: "Nairobi Mountainsho Publishers, 2017"
      },
      {
        title: "සැහැල්ලු නිදහස් ඇගිලි",
        details: "Nairobi Mountainsho Publishers, 2019"
      },
      {
        title: "සමාජ සංවර්ධනයේ නායකත්ව ඩොක්ටරේට් (ගෞරවමාන)",
        details: "Lambalong Creative Technology විශ්ව විද්‍යාලය, Kuala Lumpur, ජූලි 2012"
      },
      {
        title: "ගෞරවමාන ඩොක්ටරේට්",
        details: "Florida Agricultural Mechanical University, USA, 2009"
      },
      {
        title: "නීති ඩොක්ටරේට් (LLD) (ගෞරවමාන)",
        details: "නෙරොබි විශ්ව විද්‍යාලය, කෙන්යා, ඔක්තෝබර් 2008"
      }
    ]
  },
  leadership: {
    title: "නායකත්වය සහ බලපෑම්",
    mayorSection: {
      title: "කට්මණ්ඩු මහමැති ලෙස",
      description: "2022 තේරීම් වුනා පසු, බාලෙන් ෂා අවධානය යොමු කළ ප්‍රධාන නගර ගැටළු:",
      initiatives: [
        "නගර සැලසුම් කිරීම සහ සංවර්ධනය",
        "අපද්‍රව්‍ය කළමනාකරණ විසඳුම්",
        "අධිෂ්ඨානික කටයුතු මර්දන උත්සාහ",
        "ආධාර හා ව්‍යූහ මධ්‍යමගීකරණය",
        "සංස්කෘතික හා උරුම සංරක්ෂණය"
      ]
    },
    cultureSection: {
      title: "සංස්කෘතික බලපෑම්",
      description: "රාජ්‍ය සේවයට පිවිසීමට පෙර, බාලෙන් නෙපාලයේ හිප්-හොප් සමාජයේ ප්‍රසිද්ධ රැප් ගායකයෙකු සහ ගායන ලේඛකයෙකු ලෙස හිටියා. ඔහුගේ සංගීතය සාමාජික ගැටලු කතා කරයි, එය ඔහුගේ රාජ්‍ය ක්‍රමවේදයේ විවෘත සහිතත්වය සමඟ සම්බන්ධ වේ.",
      quote: "ඔහුගේ අමුතු පාලන රීතිය සහ සම්ප්‍රදායික ක්‍රමවලට අභියෝග දැක්වීම නිසා, බාලෙන් අගය සහ විවේචන දෙකටම ලක්වී ඇත."
    }
  }
    },
    galleryPage: {
      title: "සිදුවීම් ගැලරිය",
      description: "මන්නාරමේ ජීවන්ත සමාජ සිදුවීම් සහ මුල්යම් ක්ෂණික ගවේෂණය කරන්න.",
      heroImage: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4000&q=80",
      searchPlaceholder: "ශීර්ෂකය, ස්ථානය හෝ කාණ්ඩය අනුව සිදුවීම් සොයන්න...",
      sortBy: "වර්ග කරන්න",
      sortOptions: {
        newest: "නවතම මුලින්ම",
        oldest: "පැරණිතම මුලින්ම"
      },
      filters: "පෙරහන්",
      clearFilters: "සියල්ම මකන්න",
      filterByCategory: "කාණ්ඩය අනුව පෙරහන්",
      showing: "{total} සිදුවීම් වලින් {count} පෙන්වයි",
      noEvents: "සිදුවීම් හමු නොවීය",
      tryAdjusting: "ඔබේ සෙවුම් හෝ පෙරහන් නිර්ණායක සකස් කිරීමට උත්සාහ කරන්න",
      clearAllFilters: "සියලුම පෙරහන් මකන්න",
      viewDetails: "විස්තර බලන්න",
      previous: "පෙර",
      next: "ඊළඟ",
      categories: {
        environment: "පරිසරය",
        youth: "තරුණ වැඩසටහන්",
        events: "පොදු සිදුවීම්",
        council: "සභා උත්සව",
        community: "සමාජ ප්රචාරය",
        business: "ව්යාපාර"
      },
      photos: [
        {
          title: "ප්රජා පිරිසිදු කිරීමේ ව්යාපාරය 2024",
          dateLabel: "ජනවාරි 15, 2024",
          location: "මධ්යම උද්යානය, මන්නාරම",
          participants: "200+ ස්වේච්ඡා සේවකයින්",
          description: "පාරිසරික සංරක්ෂණය සඳහා වැසියන් එක් කරන වාර්ෂික ප්රජා පිරිසිදු කිරීමේ මුල්යම්."
        },
        {
          title: "තරුණ නායකත්ව වැඩමුළුව",
          dateLabel: "ජනවාරි 10, 2024",
          location: "ප්රජා මධ්යස්ථානය",
          participants: "50 තරුණ නායකයින්",
          description: "නායකත්ව කුසලතා සහ පුරවැසි වගකීම් පුහුණුව සමඟ තරුණ මනස බලගන්වනු ලැබේ."
        },
        {
          title: "අලුත් අවුරුදු සංස්කෘතික උත්සවය",
          dateLabel: "ජනවාරි 1, 2024",
          location: "නගර චතුරශ්රය",
          participants: "1000+ සහභාගීවන්නන්",
          description: "සම්ප්රදායික සංගීතය, නර්තනය සහ සංස්කෘතික ක්රියාකාරකම් සමඟ අලුත් අවුරුදු සමරනු ලැබේ."
        },
        {
          title: "සභා අයවැය රැස්වීම",
          dateLabel: "දෙසැම්බර් 20, 2023",
          location: "සභා කාමරය",
          participants: "සභා සාමාජිකයින් සහ මහජනතාව",
          description: "වාර්ෂික අයවැය ඉදිරිපත් කිරීම සහ මහජන සාකච්ඡා රැස්වීම."
        },
        {
          title: "වැඩිහිටි පුරවැසියන්ගේ සෞඛ්ය මැළියම",
          dateLabel: "දෙසැම්බර් 15, 2023",
          location: "නගර සභා ශාලාව",
          participants: "150 වැඩිහිටියන්",
          description: "වැඩිහිටි සමාජ සාමාජිකයින් සඳහා නොමිලේ සෞඛ්ය පරීක්ෂණ සහ සෞඛ්ය උපදේශන."
        },
        {
          title: "කොන්ත්‍රාත් සේවකයින් සඳහා පුහුණුව",
          dateLabel: "දෙසැම්බර් 5, 2023",
          location: "සභා කාර්යාලය",
          participants: "30 කොන්ත්‍රාත් සේවකයින්",
          description: "සේවා ප්රමිතීන් සහ පාරිභෝගික සේවා පිළිබඳ පුහුණුව."
          
        }
      ]
    }
},
};

    

  
  
 

    


