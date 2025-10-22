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
      ads: "ads",
      socialWork: "Social Work",
      complaints: "Complaints",
      aboutUs: "About Us",
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
        description:
          "Access essential services and stay informed about municipal programs and initiatives",
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
          description:
            "Programs for youth, elders, health clinics, and public welfare initiatives.",
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
        description:
          "We’d love to hear from you. Please fill out the form below.",
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
        description:
          "Discover the beauty and heritage of Mannar through our curated collection of images",
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
        description:
          "Discover Mannar's unique attractions, culture, and natural beauty.",
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
      },
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
      copyright:
        "© 2025Mannar Urban Council. All rights reserved. Built with dedication for our community.",
      builtWith: "Built with dedication for our community",
    },
    contactPage: {
      title: "Contact Directory",
      description:
        "Quickly and efficiently find the right contact at the Mannar Municipal Council.",
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
    },
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
          description:
            "Skills development and career guidance workshop for young residents aged 16-25.",
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
      NewsEventPage:[
        {
      id: 1,
      title: "New Water Treatment Plant Inaugurated",
      excerpt: "The Mannar Urban Council officially opened a state-of-the-art water treatment facility to serve 15,000 residents with clean, safe drinking water.",
      content: `In a significant milestone for public health infrastructure, the Mannar Urban Council inaugurated its new water treatment plant yesterday. 
The facility, built with a budget of Rs. 45 million, incorporates advanced filtration and purification technologies, including reverse osmosis, UV sterilization, and sedimentation processes, ensuring clean and safe water for all residents. 

Mayor Mr. S. Perera highlighted that this project will not only improve water quality but also significantly reduce waterborne diseases in the region. He emphasized the council's commitment to sustainable development and modern infrastructure.

The plant has a capacity to process up to 10,000 liters of water per hour, catering to households, schools, and local businesses. In addition, the facility includes an automated monitoring system to ensure continuous quality checks and maintenance alerts.

Environmental experts praised the project for integrating energy-efficient systems, including solar-powered pumps and rainwater harvesting mechanisms. Local community leaders expressed appreciation for the council's efforts in prioritizing public health and long-term sustainability.

Residents attending the inauguration ceremony were given guided tours of the plant and educational sessions on water conservation practices. The council has also planned workshops for schools in Mannar to raise awareness on responsible water usage.

This development is expected to serve as a model for other municipalities looking to upgrade their water treatment infrastructure while maintaining environmental and operational efficiency.`,
      author: "Municipal Communications",
      date: "2024-01-15",
      readTime: "8:00 PM",
      image: "/new.png",
      category: "Infrastructure",
      slug: "new-water-treatment-plant-inaugurated",
    },
    {
      id: 2,
      title: "Digital Services Portal Launched",
      excerpt: "Citizens can now access municipal services online through our new digital platform, reducing wait times and improving efficiency.",
      content: "The Mannar Urban Council has launched its comprehensive digital services portal, marking a significant step towards modernizing municipal operations. Citizens can now apply for certificates, pay taxes, and access various services online through a user-friendly interface available 24/7. The platform includes features for tracking application status, receiving digital approvals, and making secure online payments. This initiative aims to reduce paperwork, minimize physical visits to municipal offices, and provide greater transparency in service delivery.",
      author: "IT Department",
      date: "2024-01-12",
      readTime: "8:00 PM",
      image: "/new.png",
      category: "Technology",
      slug: "digital-services-portal-launched",
    },
    {
      id: 3,
      title: "Community Garden Project Success",
      excerpt: "The pilot community garden project has yielded impressive results, with plans to expand to five more locations across the municipality.",
      content: "The community garden initiative launched six months ago has exceeded expectations. Located in the heart of Ward 3, the garden has produced over 500kg of fresh vegetables, distributed among participating families and local community kitchens. The project has not only provided fresh produce but also fostered community bonding and environmental awareness. Based on this success, the council has approved expansion to five additional locations, creating more green spaces and promoting urban agriculture.",
      author: "Environmental Division",
      date: "2024-01-10",
      readTime: "8:00 PM",
      image: "/new.png",
      category: "Environment",
      slug: "community-garden-project-success",
    },
      ]

      ,
      notice: [
        {
          id: 1,
          title: "Water Supply Maintenance",
          date: "April 5, 2025",
          image: "/mannar-lighthouse-sri-lanka-historic-maritime-land.jpg",
          description:
            "Scheduled maintenance will affect water supply in Zone A from 9 AM to 3 PM.",
        },
        {
          id: 2,
          title: "Road Closure Notice",
          date: "April 3, 2025",
          image: "/historic-fort-mannar-sri-lanka-colonial-architectu.jpg",
          description:
            "Main Street closed for repaving. Detour signs posted. Expected completion: April 10.",
        },
        {
          id: 3,
          title: "New Recycling Schedule",
          date: "April 1, 2025",
          image: "/baobab-trees-mannar-sri-lanka-ancient-african-tree.jpg",
          description:
            "Recycling collection days updated. New bins distributed starting April 7.",
        },
      ],
      announcement: [
        {
          id: 1,
          title: "Chairman’s Address on Economic Growth",
          date: "March 30, 2025",
          icon: "megaphone",
          description:
            "Watch the Chairman’s latest address on revitalizing Mannar’s local economy.",
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
          description:
            "Three new bus routes to improve connectivity across Mannar Island starting May 1.",
        },
      ],
    },
    ChairmanPage: {
      hero: {
        name: "Hon. Rajesh Perera",
        cta: "Contact the Chairman",
      },
      messageSection: {
        title: "Chairman’s Message",
        welcome: "A warm welcome to all our valued citizens, partners, and team members.",
        mission: "Our mission is to lead with vision, build with integrity, and deliver innovation that matters.",
        unity: "Together, we are shaping the future of our community with transparency and purpose.",
      },
      profile: {
        title: "Chairman’s Profile",
        education: {
          title: "Education",
          content: "MBA in Business Leadership – Oxford University",
        },
        experience: {
          title: "Experience",
          content: "20+ Years in Corporate Leadership and Innovation",
        },
        awards: {
          title: "Awards",
          content: "Best Business Leader (2021), Visionary Entrepreneur (2023)",
        },
        years: {
          title: "Years of Service",
          content: "15 years as Chairman & Founder of DEAL PARTNER",
        },
        vision: {
          title: "Vision",
          quote: "Empowering teams to deliver excellence with passion and purpose.",
        },
      },
      goals: {
        title: "Future Goals",
        para: "Our goal is to continue leading innovation, expand global reach, and ensure sustainable growth.",
        list: [
          "Strengthen digital transformation initiatives",
          "Foster eco-friendly and sustainable business models",
          "Develop global partnerships for innovation",
        ],
        quote: "Our goal is to inspire change and empower every citizen to succeed.",
      },
      values: {
        title: "Values & Philosophy",
        items: [
          { title: "Integrity", desc: "We believe honesty builds trust and lasting partnerships." },
          { title: "Innovation", desc: "We embrace creativity and cutting-edge solutions." },
          { title: "Teamwork", desc: "Collaboration fuels our success and growth." },
          { title: "Growth", desc: "We strive for continuous learning and excellence." },
        ],
      },
    },
    galleryPage: {
      title: "Event Gallery",
      description:
        "Explore moments from Mannar's vibrant community events and initiatives.",
      heroImage:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4000&q=80",
      searchPlaceholder: "Search events by title, location, or category...",
      sortBy: "Sort by",
      sortOptions: {
        newest: "Newest First",
        oldest: "Oldest First",
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
        business: "Business",
      },
      photos: [
        {
          title: "Community Clean-up Drive 2024",
          dateLabel: "January 15, 2024",
          location: "Central Park, Mannar",
          participants: "200+ volunteers",
          description:
            "Annual community clean-up initiative bringing together residents for environmental conservation.",
        },
        {
          title: "Youth Leadership Workshop",
          dateLabel: "January 10, 2024",
          location: "Community Center",
          participants: "50 young leaders",
          description:
            "Empowering young minds with leadership skills and civic responsibility training.",
        },
        {
          title: "New Year Cultural Festival",
          dateLabel: "January 1, 2024",
          location: "Town Square",
          participants: "1000+ attendees",
          description:
            "Celebrating the New Year with traditional music, dance, and cultural performances.",
        },
        {
          title: "Council Budget Meeting",
          dateLabel: "December 20, 2023",
          location: "Council Chambers",
          participants: "Council members & public",
          description:
            "Annual budget presentation and public consultation meeting.",
        },
        {
          title: "Senior Citizens Health Fair",
          dateLabel: "December 15, 2023",
          location: "Municipal Hall",
          participants: "150 seniors",
          description:
            "Free health screenings and wellness programs for senior community members.",
        },
        {
          title: "Tree Planting Campaign",
          dateLabel: "December 10, 2023",
          location: "Various locations",
          participants: "300+ volunteers",
          description:
            "Community-wide tree planting initiative to enhance green spaces and combat climate change.",
        },
        {
          title: "Beach Restoration Project",
          dateLabel: "November 25, 2023",
          location: "Mannar Beach",
          participants: "150+ volunteers",
          description:
            "Community effort to restore and preserve the beautiful beaches of Mannar.",
        },
        {
          title: "Annual Sports Festival",
          dateLabel: "November 15, 2023",
          location: "City Stadium",
          participants: "500+ participants",
          description:
            "Annual sports competition featuring various games and activities for all ages.",
        },
        {
          title: "Local Business Expo",
          dateLabel: "October 30, 2023",
          location: "Convention Center",
          participants: "75+ local businesses",
          description:
            "Showcasing local businesses and entrepreneurs to promote economic growth.",
        },
      ],
    },
    AdsSectionTranslations: {
      topBar: {
        title: "Official Notices & Announcements",
        viewAll: "View All",
      },
      title: "Public Notices & Announcements",
      subtitle:
        "Stay updated with the latest news and important information from Mannar Urban Council",
      searchPlaceholder: "Search notices, tenders, events...",
      allCategories: "All Categories",
      viewAll: "View All Notices",
      notices: "notices",
      urgent: "URGENT",
      readMore: "Read Details",
      noResults: {
        title: "No notices found",
        description: "Try adjusting your search or filter criteria",
      },
      modal: {
        title: "All Public Notices",
        subtitle: "Official announcements from Mannar Urban Council",
      },
    },
    //news
    news: {
      breadcrumb: "News",
      hero: {
        title: "Municipal News",
        description:
          "Stay informed with the latest updates, developments, and achievements from the Mannar Urban Council.",
      },
      search: {
        placeholder: "Search news by title, category, or author...",
      },
      sort: {
        label: "Sort by",
        newest: "Newest First",
        oldest: "Oldest First",
      },
      filters: {
        button: "Filters",
        clearAll: "Clear All",
        category: "Filter by Category",
        time: {
          label: "Filter by Time",
          all: "All Time",
          day: "Last 24 Hours",
          week: "Past Week",
          month: "Past Month",
          year: "Past Year",
        },
      },
      noResults: "No articles found. Try adjusting your search or filters.",
      learnMore: "Learn More",
      readTime: "8:00 PM",
      pagination: {
        previous: "Previous",
        next: "Next",
      },
      categories: {
        infrastructure: "Infrastructure",
        technology: "Technology",
        environment: "Environment",
        transport: "Transport",
        youthPrograms: "Youth Programs",
        communityOutreach: "Community Outreach",
        publicSafety: "Public Safety",
        education: "Education",
        economicDevelopment: "Economic Development",
        parksRecreation: "Parks & Recreation",
      },
      articles: {
        waterTreatment: {
          title: "New Water Treatment Plant Inaugurated",
          excerpt:
            "The Mannar Urban Council officially opened a state-of-the-art water treatment facility to serve 15,000 residents with clean, safe drinking water.",
          content:
            "In a significant milestone for public health infrastructure, the Mannar Urban Council inaugurated its new water treatment plant yesterday. The facility, built with a budget of Rs. 45 million, incorporates advanced filtration and purification technologies to ensure the highest quality drinking water for our community. This project represents our commitment to improving public health and living standards across Mannar.",
          author: "Municipal Communications",
        },
        digitalPortal: {
          title: "Digital Services Portal Launched",
          excerpt:
            "Citizens can now access municipal services online through our new digital platform, reducing wait times and improving efficiency.",
          content:
            "The Mannar Urban Council has launched its comprehensive digital services portal, marking a significant step towards modernizing municipal operations. Citizens can now apply for certificates, pay taxes, and access various services online from the comfort of their homes. The platform features secure payment processing, real-time application tracking, and automated notifications to keep residents informed throughout the process.",
          author: "IT Department",
        },
        communityGarden: {
          title: "Community Garden Project Success",
          excerpt:
            "The pilot community garden project has yielded impressive results, with plans to expand to five more locations across the municipality.",
          content:
            "The community garden initiative launched six months ago has exceeded expectations. Located in the heart of Ward 3, the garden has produced over 500kg of fresh vegetables, distributed among participating families. The project has not only provided fresh produce but also fostered community spirit and environmental awareness. Due to its success, we are expanding to five additional locations next quarter.",
          author: "Environmental Division",
        },
        transportRoutes: {
          title: "New Public Transport Routes Announced",
          excerpt:
            "Three new bus routes will connect underserved neighborhoods starting next month, improving accessibility for 8,000 residents.",
          content:
            "To enhance public transportation access across Mannar, three new bus routes will commence operations starting next month. These routes specifically target previously underserved neighborhoods, connecting them to essential services, markets, and employment centers. The expansion is expected to benefit approximately 8,000 residents and reduce average commute times by 30% in these areas.",
          author: "Transport Department",
        },
        youthCouncil: {
          title: "Youth Council Elections Conclude",
          excerpt:
            "Over 2,000 young voters participated in the first-ever Youth Council elections, marking a milestone in civic engagement.",
          content:
            "In a historic moment for youth participation in local governance, over 2,000 young voters aged 16-24 participated in the inaugural Youth Council elections. The newly elected Youth Council will work alongside municipal leadership to represent the interests and ideas of Mannar's younger generation, focusing on education, employment, and recreational opportunities.",
          author: "Youth Affairs",
        },
        floodPrevention: {
          title: "Flood Prevention System Upgrade",
          excerpt:
            "The council has allocated Rs. 30 million to upgrade drainage systems in flood-prone areas ahead of monsoon season.",
          content:
            "In preparation for the upcoming monsoon season, the Municipal Council has approved Rs. 30 million for comprehensive upgrades to drainage systems in historically flood-prone areas. The project includes installing larger capacity drains, clearing existing waterways, and implementing smart water level monitoring systems to provide early flood warnings to residents.",
          author: "Public Works",
        },
        wellnessCenter: {
          title: "Senior Wellness Center Opens",
          excerpt:
            "The new center offers free health screenings, yoga classes, and social activities for Mannar's senior population.",
          content:
            "The newly opened Senior Wellness Center provides comprehensive services for our elderly residents, including free health screenings, medication management support, yoga and exercise classes, and various social activities. The center aims to promote active aging and provide a welcoming community space for seniors to connect, learn, and maintain their health and wellbeing.",
          author: "Health Department",
        },
        recyclingInitiative: {
          title: "Recycling Initiative Surpasses Targets",
          excerpt:
            "The city's recycling program collected 40% more materials than projected, thanks to community participation.",
          content:
            "Mannar's municipal recycling program has achieved remarkable success, collecting 40% more recyclable materials than initially projected in its first year. This achievement reflects strong community participation and environmental awareness. The program has diverted over 150 tons of waste from landfills, contributing to our sustainability goals and creating new opportunities in the green economy.",
          author: "Environmental Division",
        },
        roadSafety: {
          title: "Road Safety Campaign Launched",
          excerpt:
            "A new road safety awareness campaign aims to reduce accidents by 25% through education and improved signage.",
          content:
            "The Municipal Council has launched a comprehensive road safety campaign targeting both drivers and pedestrians. The initiative includes educational programs in schools and communities, installation of new reflective signage at high-risk intersections, and enhanced traffic law enforcement. The campaign aims to reduce road accidents by 25% over the next year through these coordinated efforts.",
          author: "Public Safety",
        },
        libraryExpansion: {
          title: "Library Expansion Completed",
          excerpt:
            "The municipal library has doubled its capacity with new study rooms and a digital learning center.",
          content:
            "The Municipal Library expansion project has been successfully completed, doubling the facility's capacity and introducing state-of-the-art amenities. New features include quiet study rooms, a digital learning center with computer workstations, a children's reading area, and an expanded collection of both physical and digital resources. The upgraded library now serves as a modern community learning hub.",
          author: "Education Department",
        },
        businessGrant: {
          title: "Local Business Grant Program",
          excerpt:
            "Small businesses can now apply for grants up to Rs. 500,000 through the new economic development initiative.",
          content:
            "To stimulate local economic growth and support entrepreneurship, the Municipal Council has launched a new business grant program offering up to Rs. 500,000 for qualifying small businesses. The program targets startups and existing small enterprises in key sectors including retail, services, and manufacturing. Applications are now open, with priority given to businesses that create local employment opportunities.",
          author: "Economic Development",
        },
        parkRenovation: {
          title: "Park Renovation Project Begins",
          excerpt:
            "The central park will receive new playground equipment, walking paths, and lighting in a 3-month renovation project.",
          content:
            "The Central Park renovation project has commenced, bringing comprehensive upgrades to one of Mannar's most beloved public spaces. The 3-month project includes installation of modern, safe playground equipment, construction of new walking and jogging paths, enhanced landscape design, and improved lighting for evening use. The renovated park will provide enhanced recreational opportunities for families and fitness enthusiasts alike.",
          author: "Parks & Recreation",
        },
      },
    },
    //gallery
    GallerylodingPage: {
      breadcrumb: "Gallery",
      hero: {
        title: "Photo Gallery",
        description:
          "Discover the breathtaking beauty, rich culture, and unique heritage of Mannar through our carefully curated albums",
      },
      search: {
        albums: "Search albums by title, location, or category...",
        media: "Search media in this album...",
      },
      sort: {
        label: "Sort by",
        newest: "Newest",
        popular: "Most Popular",
        name: "Alphabetical",
      },
      filters: {
        button: "Categories",
        clearAll: "Clear All",
        category: "Filter by Category",
      },
      viewMode: {
        grid: "Grid View",
        masonry: "Masonry View",
      },
      pagination: {
        previous: "Previous",
        next: "Next",
      },
      albums: {
        resultsCount: "Showing {count} of {total} curated albums",
        noResults: {
          title: "No albums found",
          description:
            "We couldn't find any albums matching your criteria. Try adjusting your search or filters.",
          clearFilters: "Clear All Filters",
        },
        viewAlbum: "View Album",
        items: "items",
        tags: "Tags",
        mediaCount: "Total Media",
        photoCount: "Photos",
        videoCount: "Videos",
      },
      albumDetail: {
        backToAlbums: "Back to Albums",
        mediaItems: "media items in",
        viewPhoto: "View Photo",
        viewVideo: "View Video",
        photo: "Photo",
        video: "Video",
        likes: "Likes",
        views: "Views",
        downloads: "Downloads",
      },
      categories: {
        environment: "Environment",
        heritage: "Heritage",
        wildlife: "Wildlife",
        culture: "Culture",
        community: "Community",
        landmarks: "Landmarks",
      },
      albumsData: [
        {
          id: "coastal-beauty",
          title: "Coastal Beauty",
          description:
            "Stunning coastline views and pristine beaches of Mannar Island",
          location: "Mannar Coastline",
          category: "Environment",
          tags: ["Beaches", "Sunset", "Waves", "Nature"],
        },
        {
          id: "historical-heritage",
          title: "Historical Heritage",
          description: "Ancient forts, churches, and colonial architecture",
          location: "Mannar Town",
          category: "Heritage",
          tags: ["Fort", "Church", "Architecture", "History"],
        },
        {
          id: "wildlife-nature",
          title: "Wildlife & Nature",
          description: "Flora, fauna, and natural landscapes of Mannar",
          location: "Mannar Region",
          category: "Wildlife",
          tags: ["Birds", "Donkeys", "Baobab", "Nature"],
        },
        {
          id: "cultural-events",
          title: "Cultural Events",
          description: "Festivals, traditions, and community celebrations",
          location: "Mannar Town Center",
          category: "Culture",
          tags: ["Festival", "Dance", "Music", "Community"],
        },
        {
          id: "local-life",
          title: "Local Life",
          description: "Daily life, markets, and traditional activities",
          location: "Mannar Villages",
          category: "Community",
          tags: ["Market", "Fishing", "Culture", "People"],
        },
        {
          id: "landmarks",
          title: "Landmarks",
          description: "Iconic landmarks and significant locations",
          location: "Mannar District",
          category: "Landmarks",
          tags: ["Lighthouse", "Monuments", "Significant"],
        },
      ],
      mediaItems: [
        {
          id: "1",
          title: "Mannar Island Beaches",
          description:
            "Pristine coastline of Mannar Island showcasing beautiful beaches with crystal clear waters and golden sands",
          location: "Mannar Coastline",
          category: "Environment",
        },
        {
          id: "2",
          title: "Historic Fort Mannar Tour",
          description:
            "Guided tour through the colonial architecture and historical significance of Mannar Fort",
          location: "Mannar Fort",
          category: "Heritage",
        },
      ],
    },

    NewsLabels: {
      backToAllNews: "Back to All News",
      relatedNews: "Related News",
      publishedBy: "Published by Mannar Urban Council",
      lastUpdated: "Last updated",
      shareThisArticle: "Share this article",
      copyLink: "Copy Link",
      articleSaved: "Article saved to your collection",
      saved: "Saved",
      save: "Save",
      print: "Print",
      readMore: "Read More",
    },
    TeamContent: {
      hero: {
    title: "Meet Our Team",
    description: "Get to know the dedicated professionals serving the Mannar Municipal Council. Our team is committed to excellence in governance and public service for the community."
  },
  members: {
    title: "Key Members of Our Council",
    commissioner: {
      name: "Mr. A.B. Perera",
      position: "Municipal Commissioner",
      description: "Mr. Perera leads the municipal council, ensuring smooth governance and effective implementation of policies."
    },
    deputyCommissioner: {
      name: "Ms. S.T. Fernando",
      position: "Deputy Commissioner",
      description: "Ms. Fernando supports the commissioner in administrative duties and supervises council operations."
    },
    adminOfficer: {
      name: "Mr. R.S. Jayasinghe",
      position: "Chief Administrative Officer",
      description: "Mr. Jayasinghe manages all administrative functions and coordinates between departments."
    },
    hrManager: {
      name: "Mrs. L.M. Silva",
      position: "Human Resources Manager",
      description: "Mrs. Silva oversees HR policies, employee welfare, and recruitment for the municipal council."
    },
    cfo: {
      name: "Mr. K.L. Bandara",
      position: "Chief Financial Officer",
      description: "Mr. Bandara manages the council's finances, budgeting, and financial reporting."
    },
    chiefEngineer: {
      name: "Mr. W.A.S. Kumara",
      position: "Chief Engineer",
      description: "Mr. Kumara supervises municipal infrastructure projects and engineering works."
    },
    medicalOfficer: {
      name: "Dr. S.M. Fonseka",
      position: "Chief Medical Officer",
      description: "Dr. Fonseka leads public health initiatives and medical services across the municipality."
    },
    townPlanner: {
      name: "Mr. P.G. Amarasinghe",
      position: "Town Planner",
      description: "Mr. Amarasinghe is responsible for urban planning, zoning, and sustainable city development."
    }
  }
      
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
      ads: "விளம்பரங்கள்",
      socialWork: "சமூக வேலை",
      complaints: "புகார்கள்",
      aboutUs: "எங்களை பற்றி",
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
          description:
            "உங்கள் பகுதியில் குப்பை மேலாண்மை திட்டங்களைப் பற்றி அறிந்து கொள்ளுங்கள்.",
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
            answer: "குப்பை சேகரிப்பு அட்டவணை பகுதிகளின் அடிப்படையில் மாறும்.",
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
        description:
          "மன்னாரின் தனித்துவமான ஈர்ப்புகள், பண்பாடு மற்றும் இயற்கை அழகைக் கண்டறியுங்கள்.",
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
      description:
        "மன்னார் நகர சபையில் சரியான தொடர்பை விரைவாகவும் திறமையாகவும் கண்டறியுங்கள்.",
      directory: "தொடர்பு அடைவு",
      name: "பெயர்",
      position: "பதவி",
      telephone: "தொலைபேசி",
      fax: "ஃபேக்ஸ்",
      email: "மின்னஞ்சல்",
      division: "பிரிவு",
      searchPlaceholder:
        "பெயர், பதவி, தொலைபேசி அல்லது மின்னஞ்சல் மூலம் தேடுங்கள்...",
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
          description:
            "16-25 வயதுடைய இளைஞர்களுக்கான திறன் மேம்பாடு மற்றும் தொழில் வழிகாட்டல் பட்டறை.",
        },
        {
          id: 4,
          title: "மூத்த குடிமக்கள் சுகாதார கண்காட்சி",
          slug: "senior-citizens-health-fair",
          date: "மார்ச் 30, 2024",
          time: "காலை 10:00",
          location: "மாநகர மண்டபம்",
          image: "/mannar-lighthouse-sri-lanka-historic-maritime-land.jpg",
          description:
            "மூத்த குடிமக்களுக்கான இலவச சுகாதார பரிசோதனைகள், நல ஆலோசனைகள் மற்றும் சுகாதார கல்வி.",
        },
      ],
      NewsEventPage:[
       {
      id: 1,
      title: "புதிய நீர் சுத்திகரிப்பு ஆலை திறப்பு",
      excerpt: "மன்னார் நகராட்சி 15,000 குடிமக்களுக்கு சுத்தமான, பாதுகாப்பான குடிநீரை வழங்கும் நவீன நீர் சுத்திகரிப்பு வசதியை அதிகாரப்பூர்வமாக திறந்தது.",
      content: `பொது சுகாதார உள்கட்டமைப்புக்கான முக்கிய மைல்கல்லாக, மன்னார் நகராட்சி நேற்று தனது புதிய நீர் சுத்திகரிப்பு ஆலையை திறந்து வைத்தது. 
ரூ. 45 மில்லியன் பட்ஜெட்டில் கட்டப்பட்ட இந்த வசதி, தலைகீழ் ஊடுருவல், UV கிருமி நீக்கம் மற்றும் வண்டல் செயல்முறைகள் உட்பட மேம்பட்ட வடித்தல் மற்றும் சுத்திகரிப்பு தொழில்நுட்பங்களை உள்ளடக்கியது, இது அனைத்து குடிமக்களுக்கும் சுத்தமான மற்றும் பாதுகாப்பான நீரை உறுதி செய்கிறது.

தலைவர் திரு. எஸ். பேரேரா இந்த திட்டம் நீரின் தரத்தை மேம்படுத்துவது மட்டுமல்லாமல், இப்பகுதியில் நீர்ப்பாங்கான நோய்களை கணிசமாக குறைக்கும் என்று வலியுறுத்தினார். நிலையான வளர்ச்சி மற்றும் நவீன உள்கட்டமைப்புக்கான கவுன்சிலின் உறுதிப்பாட்டை அவர் வலியுறுத்தினார்.

இந்த ஆலை ஒரு மணி நேரத்திற்கு 10,000 லிட்டர் வரை நீரை செயல்படுத்தும் திறன் கொண்டது, இது வீடுகள், பள்ளிகள் மற்றும் உள்ளூர் வணிகங்களுக்கு சேவை செய்கிறது. கூடுதலாக, இந்த வசதி தொடர்ச்சியான தரச் சோதனைகள் மற்றும் பராமரிப்பு எச்சரிக்கைகளை உறுதி செய்ய ஒரு தானியங்கி கண்காணிப்பு அமைப்பை உள்ளடக்கியது.

சூரிய ஆற்றல் இயக்கப்பட்ட பம்புகள் மற்றும் மழைநீர் அறுவடை வழிமுறைகள் உட்பட ஆற்றல் திறன் அமைப்புகளை ஒருங்கிணைத்ததற்காக இந்த திட்டத்தை சுற்றுச்சூழல் நிபுணர்கள் பாராட்டினர். பொது சுகாதாரம் மற்றும் நீண்ட கால நிலைத்தன்மையை முன்னுரிமையாகக் கொண்ட கவுன்சிலின் முயற்சிகளுக்கு உள்ளூர் சமூக தலைவர்கள் பாராட்டுத் தெரிவித்தனர்.

திறப்பு விழாவில் கலந்து கொண்ட குடிமக்கள் ஆலையின் வழிகாட்டப்பட்ட சுற்றுப்பயணங்கள் மற்றும் நீர் பாதுகாப்பு நடைமுறைகள் குறித்த கல்வி அமர்வுகளைப் பெற்றனர். மன்னாரில் உள்ள பள்ளிகளுக்கு பொறுப்பான நீர் பயன்பாடு குறித்த விழிப்புணர்வை ஏற்படுத்த கவுன்சில் பட்டறைகளையும் திட்டமிட்டுள்ளது.

சுற்றுச்சூழல் மற்றும் செயல்பாட்டு திறனை பராமரிக்கும் போது தங்கள் நீர் சுத்திகரிப்பு உள்கட்டமைப்பை மேம்படுத்த விரும்பும் பிற நகராட்சிகளுக்கு இந்த வளர்ச்சி ஒரு மாதிரியாக செயல்படும் என எதிர்பார்க்கப்படுகிறது.`,
      author: "நகராட்சி தகவல்தொடர்புகள்",
      date: "2024-01-15",
      readTime: "8:00 PM",
      image: "/new.png",
      category: "உள்கட்டமைப்பு",
      slug: "new-water-treatment-plant-inaugurated",
    },
    {
      id: 2,
      title: "டிஜிட்டல் சேவைகள் போர்டல் தொடக்கம்",
      excerpt: "குடிமக்கள் இப்போது எங்கள் புதிய டிஜிட்டல் தளத்தின் மூலம் நகராட்சி சேவைகளை ஆன்லைனில் அணுகலாம், காத்திருக்கும் நேரத்தைக் குறைத்து, திறனை மேம்படுத்தும்.",
      content: "மன்னார் நகராட்சி அதன் விரிவான டிஜிட்டல் சேவைகள் போர்டலைத் தொடங்கியது, இது நகராட்சி செயல்பாடுகளை நவீனமயமாக்குவதில் குறிப்பிடத்தக்க படியாகும். குடிமக்கள் இப்போது சான்றிதழ்களுக்கு விண்ணப்பிக்கலாம், வரிகளைச் செலுத்தலாம் மற்றும் பல்வேறு சேவைகளை ஆன்லைனில் அணுகலாம். இந்த தளம் 24/7 கிடைக்கும் பயனர்-நட்பு இடைமுகத்தைக் கொண்டுள்ளது, விண்ணப்ப நிலையைக் கண்காணிக்கும், டிஜிட்டல் அனுமதிகளைப் பெறும் மற்றும் பாதுகாப்பான ஆன்லைன் கட்டணங்களைச் செலுத்தும் வசதிகளை உள்ளடக்கியது.",
      author: "தகவல் தொழில்நுட்பத் துறை",
      date: "2024-01-12",
      readTime: "8:00 PM",
      image: "/new.png",
      category: "தொழில்நுட்பம்",
      slug: "digital-services-portal-launched",
    },
    {
      id: 3,
      title: "சமூக தோட்டம் திட்டம் வெற்றி",
      excerpt: "முன்னோடி சமூக தோட்ட திட்டம் குறிப்பிடத்தக்க முடிவுகளைத் தந்துள்ளது, நகராட்சி முழுவதும் ஐந்து கூடுதல் இடங்களுக்கு விரிவாக்க திட்டங்கள் உள்ளன.",
      content: "ஆறு மாதங்களுக்கு முன்பு தொடங்கப்பட்ட சமூக தோட்ட முயற்சி எதிர்பார்ப்புகளை மீறியுள்ளது. வார்டு 3 இன் இதயத்தில் அமைந்துள்ள இந்த தோட்டம் 500 கிலோவுக்கும் அதிகமான புதிய காய்கறிகளை உற்பத்தி செய்துள்ளது, இது பங்கேற்கும் குடும்பங்கள் மற்றும் உள்ளூர் சமூக சமையலறைகளுக்கு விநியோகிக்கப்பட்டுள்ளது. இந்த திட்டம் புதிய பொருட்களை வழங்கியது மட்டுமல்லாமல், சமூக பிணைப்பு மற்றும் சுற்றுச்சூழல் விழிப்புணர்வையும் ஊக்குவித்தது. இந்த வெற்றியின் அடிப்படையில், கூடுதல் பசுமை இடங்களை உருவாக்கவும் நகர்ப்புற வேளாண்மையை ஊக்குவிக்கவும் ஐந்து கூடுதல் இடங்களுக்கு விரிவாக்கம் அங்கீகரிக்கப்பட்டுள்ளது.",
      author: "சுற்றுச்சூழல் பிரிவு",
      date: "2024-01-10",
      readTime: "8:00 PM",
      image: "/new.png",
      category: "சுற்றுச்சூழல்",
      slug: "community-garden-project-success",
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
          description:
            "மே 1 முதல் மன்னார் தீவின் முழுவதும் இணைப்பை மேம்படுத்த மூன்று புதிய பேருந்து வழிகள்.",
        },
      ],
    },

    ChairmanPage: {
      hero: {
        name: "மாண்புமிகு ராஜேஷ் பெரேரா",
        cta: "தலைவரை தொடர்பு கொள்ளவும்",
      },
      messageSection: {
        title: "தலைவரின் உரை",
        welcome: "எங்கள் மதிப்புமிக்க குடிமக்கள், பங்குதாரர்கள் மற்றும் குழு உறுப்பினர்களுக்கு இதயம் கனிந்த வரவேற்பு.",
        mission: "தெளிவான நோக்கத்துடன் வழிநடத்தி, நேர்மையுடன் உருவாக்கி, புதுமையுடன் வழங்குவதே எங்கள் பணி.",
        unity: "ஒன்றிணைந்து, நம் சமூகத்தின் எதிர்காலத்தை நோக்கத்துடனும் திறந்த மனதுடனும் வடிவமைக்கிறோம்.",
      },
      profile: {
        title: "தலைவரின் சுயவிவரம்",
        education: {
          title: "கல்வி",
          content: "வணிகத் தலைமைத்துவத்தில் எம்பிஏ – ஆக்ஸ்போர்டு பல்கலைக்கழகம்",
        },
        experience: {
          title: "அனுபவம்",
          content: "நிறுவனத் தலைமைத்துவம் மற்றும் புதுமையில் 20+ ஆண்டுகள் அனுபவம்",
        },
        awards: {
          title: "விருதுகள்",
          content: "சிறந்த வணிகத் தலைவர் (2021), நோக்கமுள்ள தொழில் முனைவோர் (2023)",
        },
        years: {
          title: "சேவை ஆண்டுகள்",
          content: "15 ஆண்டுகள் DEAL PARTNER நிறுவனத்தின் தலைவர் மற்றும் நிறுவனர்",
        },
        vision: {
          title: "தொழில்நோக்கு",
          quote: "அணி ஒருங்கிணைப்பை ஊக்குவித்து, சிறப்பை உறுதியாக வழங்குவது எங்கள் நோக்கம்.",
        },
      },
      goals: {
        title: "எதிர்கால இலக்குகள்",
        para: "புதுமையை முன்னெடுத்து, உலகளாவிய விரிவாக்கத்தை உறுதிசெய்து, நிலையான வளர்ச்சியை அடைவதே எங்கள் இலக்கு.",
        list: [
          "டிஜிட்டல் மாற்ற முயற்சிகளை வலுப்படுத்துதல்",
          "சூழலுக்கு உகந்த, நிலையான வணிக மாதிரிகளை ஊக்குவித்தல்",
          "புதுமைக்கு உலகளாவிய கூட்டாண்மைகளை மேம்படுத்துதல்",
        ],
        quote: "மாற்றத்தைக் கவர்ந்து, ஒவ்வொரு குடிமகனையும் வெற்றியடையச் செய்வதே எங்கள் குறிக்கோள்.",
      },
      values: {
        title: "மதிப்புகள் மற்றும் தத்துவம்",
        items: [
          { title: "நேர்மை", desc: "நேர்மையே நம்பிக்கையையும் நீடித்த உறவுகளையும் உருவாக்கும்." },
          { title: "புதுமை", desc: "புதிய சிந்தனைகளையும் தீர்வுகளையும் எங்கள் பணியில் ஏற்றுக்கொள்கிறோம்." },
          { title: "குழுப்பணி", desc: "ஒற்றுமை மற்றும் ஒத்துழைப்பே எங்கள் வெற்றியின் அடிப்படை." },
          { title: "வளர்ச்சி", desc: "தொடர்ந்த கற்றல் மற்றும் சிறப்பை நோக்கி செயல்படுகிறோம்." },
        ],
      },
    
    },
    galleryPage: {
      title: "நிகழ்வு கேலரி",
      description:
        "மன்னாரின் துடிப்பான சமூக நிகழ்வுகள் மற்றும் முன்முயற்சிகளின் தருணங்களை ஆராயுங்கள்.",
      heroImage:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4000&q=80",
      searchPlaceholder:
        "தலைப்பு, இடம் அல்லது வகையின்படி நிகழ்வுகளைத் தேடுங்கள்...",
      sortBy: "வரிசைப்படுத்து",
      sortOptions: {
        newest: "புதியது முதல்",
        oldest: "பழையது முதல்",
      },
      filters: "வடிப்பான்கள்",
      clearFilters: "அனைத்தையும் அழி",
      filterByCategory: "வகையின்படி வடிகட்டு",
      showing: "{total} நிகழ்வுகளில் {count} காட்டப்படுகிறது",
      noEvents: "நிகழ்வுகள் எதுவும் கிடைக்கவில்லை",
      tryAdjusting:
        "உங்கள் தேடல் அல்லது வடிகட்டல் அளவுகோல்களை சரிசெய்ய முயற்சிக்கவும்",
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
        business: "வணிகம்",
      },
      photos: [
        {
          title: "சமூக சுத்தம் இயக்கம் 2024",
          dateLabel: "ஜனவரி 15, 2024",
          location: "மைய பூங்கா, மன்னார்",
          participants: "200+ தன்னார்வலர்கள்",
          description:
            "சூழல் பாதுகாப்பிற்காக குடியிருப்பாளர்களை ஒன்றிணைக்கும் வருடாந்திர சமூக சுத்தம் முன்முயற்சி.",
        },
        {
          title: "இளைஞர் தலைமைப் பட்டறை",
          dateLabel: "ஜனவரி 10, 2024",
          location: "சமூக மையம்",
          participants: "50 இளைஞர் தலைவர்கள்",
          description:
            "தலைமைத்துவ திறன்கள் மற்றும் குடிமைப் பொறுப்பு பயிற்சியுடன் இளைஞர் மனதை சக்திவாய்ந்ததாக்குதல்.",
        },
        {
          title: "புத்தாண்டு கலாச்சார திருவிழா",
          dateLabel: "ஜனவரி 1, 2024",
          location: "நகர சதுக்கம்",
          participants: "1000+ பங்கேற்பாளர்கள்",
          description:
            "பாரம்பரிய இசை, நடனம் மற்றும் கலாச்சார நிகழ்ச்சிகளுடன் புத்தாண்டைக் கொண்டாடுதல்.",
        },
        {
          title: "கவுன்சில் பட்ஜெட் கூட்டம்",
          dateLabel: "டிசம்பர் 20, 2023",
          location: "கவுன்சில் அறை",
          participants: "கவுன்சில் உறுப்பினர்கள் & பொது மக்கள்",
          description:
            "வருடாந்திர பட்ஜெட் விளக்கக்காட்சி மற்றும் பொது கலந்தாய்வு கூட்டம்.",
        },
        {
          title: "மூத்த குடிமக்கள் சுகாதார கண்காட்சி",
          dateLabel: "டிசம்பர் 15, 2023",
          location: "நகராட்சி மண்டபம்",
          participants: "150 மூத்தவர்கள்",
          description:
            "மூத்த சமூக உறுப்பினர்களுக்கான இலவச சுகாதார பரிசோதனைகள் மற்றும் ஆரோக்கியத் திட்டங்கள்.",
        },
        {
          title: "மரம் நடும் பிரச்சாரம்",
          dateLabel: "டிசம்பர் 10, 2023",
          location: "பல்வேறு இடங்கள்",
          participants: "300+ தன்னார்வலர்கள்",
          description:
            "பசுமை இடங்களை மேம்படுத்தவும் காலநிலை மாற்றத்தை எதிர்த்துப் போராடவும் சமூகம் தழுவிய மரம் நடும் முன்முயற்சி.",
        },
        {
          title: "கடற்கரை மீட்டெடுப்புத் திட்டம்",
          dateLabel: "நவம்பர் 25, 2023",
          location: "மன்னார் கடற்கரை",
          participants: "150+ தன்னார்வலர்கள்",
          description:
            "மன்னாரின் அழகான கடற்கரைகளை மீட்டெடுக்கவும் பாதுகாக்கவும் சமூக முயற்சி.",
        },
        {
          title: "வருடாந்திர விளையாட்டு திருவிழா",
          dateLabel: "நவம்பர் 15, 2023",
          location: "நகர அரங்கம்",
          participants: "500+ பங்கேற்பாளர்கள்",
          description:
            "அனைத்து வயதினருக்கும் பல்வேறு விளையாட்டுகள் மற்றும் செயல்பாடுகளைக் கொண்ட வருடாந்திர விளையாட்டுப் போட்டி.",
        },
        {
          title: "உள்ளூர் வணிக கண்காட்சி",
          dateLabel: "அக்டோபர் 30, 2023",
          location: "மாநாட்டு மையம்",
          participants: "75+ உள்ளூர் வணிகங்கள்",
          description:
            "பொருளாதார வளர்ச்சியை ஊக்குவிக்க உள்ளூர் வணிகங்கள் மற்றும் தொழில்முனைவோரைக் காட்சிப்படுத்துதல்.",
        },
      ],
    },
    AdsSectionTranslations: {
      topBar: {
        title: "அதிகாரப்பூர்வ அறிவிப்புகள்",
        viewAll: "அனைத்தையும் பார்க்க",
      },
      title: "பொது அறிவிப்புகள்",
      subtitle:
        "மன்னார் நகராட்சியின் சமீபத்திய செய்திகள் முக்கிய தகவல்களுடன் தொடர்பு கொள்ளுங்கள்",
      searchPlaceholder: "அறிவிப்புகள், டெண்டர்கள், நிகழ்வுகள்...",
      allCategories: "அனைத்து வகைகள்",
      viewAll: "அனைத்து அறிவிப்புகள்",
      notices: "அறிவிப்புகள்",
      urgent: "அவசரம்",
      readMore: "மேலும் வாசிக்க",
      noResults: {
        title: "அறிவிப்புகள் எதுவும் கிடைக்கவில்லை",
        description:
          "உங்கள் தேடல் அல்லது வடிகட்டல் அளவுகோல்களை சரிசெய்ய முயற்சிக்கவும்",
      },
      modal: {
        title: "அனைத்து பொது அறிவிப்புகள்",
        subtitle: "மன்னார் நகராட்சியின் அதிகாரப்பூர்வ அறிவிப்புகள்",
      },
    },
    //news
    news: {
      breadcrumb: "செய்திகள்",
      hero: {
        title: "நகராட்சி செய்திகள்",
        description:
          "மன்னார் நகராட்சியிடமிருந்து சமீபத்திய புதுப்பிப்புகள், முன்னேற்றங்கள் மற்றும் சாதனைகள் பற்றி அறிந்திருங்கள்.",
      },
      search: {
        placeholder: "தலைப்பு, வகை அல்லது ஆசிரியர் மூலம் செய்திகள் தேடவும்...",
      },
      sort: {
        label: "முறையேற்க",
        newest: "புதியவை முதலில்",
        oldest: "பழையவை முதலில்",
      },
      filters: {
        button: "வடிகட்டிகள்",
        clearAll: "எல்லாவற்றையும் அழி",
        category: "வகை மூலம் வடிகட்டி",
        time: {
          label: "கால அளவு மூலம் வடிகட்டி",
          all: "எல்லா காலத்தும்",
          day: "கடைசி 24 மணிநேரம்",
          week: "கடந்த வாரம்",
          month: "கடந்த மாதம்",
          year: "கடந்த ஆண்டு",
        },
      },
      noResults:
        "எந்த கட்டுரைகளும் காணப்படவில்லை. தேடல் அல்லது வடிகட்டிகளை சரிசெய்ய முயற்சிக்கவும்.",
      learnMore: "மேலும் படிக்கவும்",
      readTime: "மாலை 8:00",
      pagination: {
        previous: "முந்தையது",
        next: "அடுத்தது",
      },
      categories: {
        infrastructure: "பண்பாட்டமைப்பு",
        technology: "தொழில்நுட்பம்",
        environment: "சூழல்",
        transport: "போக்குவரத்து",
        youthPrograms: "இளைஞர் திட்டங்கள்",
        communityOutreach: "சமுதாய சேவை",
        publicSafety: "பொது பாதுகாப்பு",
        education: "கல்வி",
        economicDevelopment: "பொருளாதார மேம்பாடு",
        parksRecreation: "பார்க்கள் & تفریح",
      },
      articles: {
        waterTreatment: {
          title: "புதிய குடிநீர் சுத்திகரிப்பு நிலையம் திறப்பு",
          excerpt:
            "மன்னார் நகராட்சி 15,000 குடிமக்களுக்கு சுத்தமான குடிநீரை வழங்க புதிய உயர் தரமான சுத்திகரிப்பு நிலையத்தை திறந்துள்ளது.",
          content:
            "பொது சுகாதார கட்டமைப்பில் ஒரு முக்கிய முன்னேற்றமாக, மன்னார் நகராட்சி நேற்று புதிய குடிநீர் சுத்திகரிப்பு நிலையத்தை திறந்துள்ளது. ரூ. 45 மில்லியன் பட்ஜெட்டில் கட்டப்பட்ட இந்த நிலையம், அதிக தரமான குடிநீர் வழங்க முன்னேற்றமான வடிகட்டி மற்றும் சுத்திகரிப்பு தொழில்நுட்பங்களை கொண்டுள்ளது. இந்த திட்டம், மன்னாரில் பொதுச் சுகாதார மற்றும் வாழ்க்கை தரத்தை மேம்படுத்தும் நமது உறுதியை பிரதிபலிக்கிறது.",
          author: "நகராட்சி தகவல் தொடர்பு",
        },
        digitalPortal: {
          title: "டிஜிட்டல் சேவை போர்டல் அறிமுகம்",
          excerpt:
            "பணியாளர்கள் புதிய டிஜிட்டல் தளத்தின் மூலம் ஆன்லைனில் நகராட்சித் சேவைகளை அணுகலாம், காத்திருக்கும் நேரத்தை குறைத்து செயல்திறனை மேம்படுத்துகிறது.",
          content:
            "மன்னார் நகராட்சியினால் அதன் முழுமையான டிஜிட்டல் சேவை போர்டல் அறிமுகப்படுத்தப்பட்டுள்ளது. குடிமக்கள் தற்போது வீட்டிலிருந்தே சான்றிதழ் விண்ணப்பிக்க, வரி செலுத்த, மற்றும் பல்வேறு சேவைகளை ஆன்லைனில் பயன்படுத்த முடியும். தளம் பாதுகாப்பான கட்டண செயலாக்கம், நேரடி விண்ணப்ப கண்காணிப்பு மற்றும் தானாக அறிவிப்புகளை வழங்குகிறது.",
          author: "ஐடி துறை",
        },
        communityGarden: {
          title: "சமூக தோட்ட திட்டம் வெற்றி",
          excerpt:
            "திட்டமிட்ட சமூக தோட்ட முயற்சி அதிசயமான விளைவுகளை வழங்கியுள்ளது, மேலும் ஐந்து இடங்களில் விரிவாக்கம் செய்ய திட்டமிடப்பட்டுள்ளது.",
          content:
            "ஆறு மாதங்களுக்கு முன் தொடங்கிய சமூக தோட்ட முயற்சி எதிர்பார்ப்பை மீறியுள்ளது. வார்டு 3 மையத்தில் அமைந்துள்ள தோட்டம் 500 கிலோ புதிய காய்கறிகள் உற்பத்தி செய்துள்ளது, பங்கேற்ற குடும்பங்களுக்கு பகிரப்பட்டது. இந்த திட்டம் சத்தான பொருளை மட்டுமல்ல, சமூக உறவையும் மற்றும் சுற்றுச்சூழல் விழிப்புணர்வையும் ஊக்குவித்துள்ளது. வெற்றியால், அடுத்த காலாண்டில் ஐந்து கூடுதல் இடங்களில் விரிவாக்கம் செய்ய திட்டமிடப்பட்டுள்ளது.",
          author: "சூழல் பிரிவு",
        },
        transportRoutes: {
          title: "புதிய பொது போக்குவரத்து வழிகள் அறிவிப்பு",
          excerpt:
            "மூன்று புதிய பேருந்து வழிகள் அடுத்த மாதம் குறைந்த சேவை பெற்ற பகுதிகளை இணைக்கின்றன, 8,000 குடிமக்களுக்கு அணுகலை மேம்படுத்துகின்றன.",
          content:
            "மன்னாரில் பொதுப் போக்குவரத்து அணுகலை மேம்படுத்த, மூன்று புதிய பேருந்து வழிகள் அடுத்த மாதம் இயங்க தொடங்குகின்றன. இந்த வழிகள் குறிப்பாக முன்னர் குறைந்த சேவை பெற்ற பகுதிகளை அடைகின்றன மற்றும் அவற்றை முக்கிய சேவைகள், சந்தைகள் மற்றும் வேலை வாய்ப்புகளுடன் இணைக்கின்றன. இந்த விரிவாக்கம் சுமார் 8,000 குடிமக்களுக்கு பயனுள்ளதாக இருக்கும் மற்றும் சராசரி பயண நேரத்தை 30% குறைக்கும்.",
          author: "போக்குவரத்து துறை",
        },
        youthCouncil: {
          title: "இளைஞர் கவுன்சில் தேர்தல்கள் முடிவடைந்தது",
          excerpt:
            "2,000 க்கும் மேலான இளைஞர் வாக்காளர்கள் முதல் இளைஞர் கவுன்சில் தேர்தலில் பங்கேற்றனர், இது சிட்டிசன் பங்குபற்றலில் ஒரு மைல் கல்.",
          content:
            "உள்ளூர் ஆட்சியில் இளைஞர் பங்குபற்றலுக்கான வரலாற்று நிகழ்வில், 16-24 வயதுள்ள 2,000 க்கும் மேற்பட்ட இளைஞர் வாக்காளர்கள் முதல் இளைஞர் கவுன்சில் தேர்தலில் பங்கேற்றனர். புதிய தேர்தல் பெற்ற இளைஞர் கவுன்சில் நகரத்தின் இளம் தலைமுறையின் ஆர்வங்களையும் யோசனைகளையும் பிரதிநிதித்துவம் செய்யும், கல்வி, வேலை வாய்ப்புகள் மற்றும் பொழுதுபோக்கு வாய்ப்புகளை கவனிக்கும்.",
          author: "இளைஞர் விவகாரங்கள்",
        },
        floodPrevention: {
          title: "பெருக்குநீர் தடுப்பு அமைப்பு மேம்பாடு",
          excerpt:
            "மாநகர சபை மழை காலத்திற்கு முன்னர் سیரங்குநீர் பாதிக்கப்பட்ட பகுதிகளில் வடிகால் அமைப்புகளை மேம்படுத்த ரூ. 30 மில்லியன் ஒதுக்கியுள்ளது.",
          content:
            "எதிர்வரும் மழை பருவத்திற்கு முன்னதாக, நகராட்சியினால் சீர் செய்யப்பட்ட பகுதிகளில் முழுமையான வடிகால் மேம்பாடுகளுக்கு ரூ. 30 மில்லியன் ஒதுக்கப்பட்டுள்ளது. திட்டம் அதிக அளவிலான வடிகால் நிறுவல், உள்ளமைந்த நீர்வழிகளை சுத்தம் செய்யல், மற்றும் முன்னேற்றமான நீர்மட்ட கண்காணிப்பு அமைப்புகளை உள்ளடக்கியுள்ளது, குடிமக்களுக்கு முன்னாள் வெள்ள எச்சரிக்கைகளை வழங்க.",
          author: "பொது வேலைப்பாடுகள்",
        },
        wellnessCenter: {
          title: "மூத்த நலக்கூடம் திறப்பு",
          excerpt:
            "புதிய மையம் மன்னாரின் மூத்த குடிமக்களுக்கு இலவச மருத்துவ சோதனை, யோகா வகைகள் மற்றும் சமூக செயல்பாடுகளை வழங்குகிறது.",
          content:
            "புதிய மூத்த நலக்கூடம் நமது மூத்த குடிமக்களுக்கு முழுமையான சேவைகளை வழங்குகிறது, அதில் இலவச மருத்துவ சோதனை, மருந்து மேலாண்மை ஆதரவு, யோகா மற்றும் உடற்பயிற்சி வகைகள், மற்றும் பல சமூக செயல்பாடுகள் அடங்கும். மையம் செயலில் இருப்பதை ஊக்குவிக்கும் மற்றும் மூத்தவர்களுக்கு சமூக உறவுகளை உருவாக்க ஒரு இடமாக அமைகிறது.",
          author: "சுகாதார துறை",
        },
        recyclingInitiative: {
          title: "மீளச்சுழற்சி முயற்சி இலக்குகளை மீறியது",
          excerpt:
            "நகரத்தின் மீளச்சுழற்சி திட்டம் முன்கூட்டியே திட்டமிட்டதைவிட 40% கூடுதல் பொருட்களை சேகரித்துள்ளது, சமூக பங்குபற்றலால்.",
          content:
            "மன்னாரின் நகராட்சி மீளச்சுழற்சி திட்டம் அதிசய வெற்றியை அடைந்துள்ளது, ஆரம்ப ஆண்டில் முன்கூட்டியே திட்டமிட்டதைவிட 40% கூடுதல் பொருட்களை சேகரித்துள்ளது. இந்த வெற்றி வலுவான சமூக பங்குபற்றலும் சுற்றுச்சூழல் விழிப்புணர்வையும் பிரதிபலிக்கிறது. திட்டம் 150 டன் கழிவுகளை நிலத்தடி கழிவில் இருந்து மாற்றி நமது நிலைத்தன்மை இலக்குகளை முன்னெடுத்துள்ளது.",
          author: "சூழல் பிரிவு",
        },
        roadSafety: {
          title: "சாலை பாதுகாப்பு பிரச்சாரத்தொடு தொடங்கப்பட்டது",
          excerpt:
            "புதிய சாலை பாதுகாப்பு விழிப்புணர்வு பிரச்சாரம் கல்வி மற்றும் சின்னச்சுடர் மேம்பாட்டின் மூலம் விபத்துகளை 25% குறைக்க முனைக்கிறது.",
          content:
            "நகராட்சி சபை வாகன ஓட்டுநர்களுக்கும் நடர்துறை பயணிகளுக்கும் குறி வைத்து முழுமையான சாலை பாதுகாப்பு பிரச்சாரத்தை தொடங்கியுள்ளது. திட்டம் பள்ளிகள் மற்றும் சமூகங்களில் கல்வித் திட்டங்களை, உயர் அபாயம் கொண்ட சந்திப்புகளில் புதிய பிரதிபலிக்கும் அடையாளங்களை நிறுவல் மற்றும் சாலை சட்டங்களை வலுப்படுத்தல் ஆகியவற்றை உள்ளடக்கியுள்ளது. இந்த முயற்சி வரும் ஆண்டில் சாலை விபத்துகளை 25% குறைக்க இலக்காகக் கொண்டுள்ளது.",
          author: "பொது பாதுகாப்பு",
        },
        libraryExpansion: {
          title: "நூலக விரிவாக்கம் முடிந்தது",
          excerpt:
            "நகர நூலகம் புதிய படிப்பு அறைகள் மற்றும் டிஜிட்டல் கற்றல் மையத்துடன் அதன் திறனை இரட்டிப்பு செய்துள்ளது.",
          content:
            "நகர நூலக விரிவாக்கம் திட்டம் வெற்றிகரமாக முடிந்துள்ளது, அமைப்பின் திறனை இரட்டிப்பு செய்து புதிய வசதிகளை அறிமுகப்படுத்தியுள்ளது. புதிய அம்சங்களில் அமைதியான படிப்பு அறைகள், கணினி நிலையங்கள் கொண்ட டிஜிட்டல் கற்றல் மையம், குழந்தைகள் படிப்பு பகுதி மற்றும் விரிவடைந்த புத்தகக் கச்சேரி அடங்கும். மேம்படுத்தப்பட்ட நூலகம் நவீன சமுதாய கற்றல் மையமாக அமைகிறது.",
          author: "கல்வி துறை",
        },
        businessGrant: {
          title: "உள்ளூர் வணிக மானியம் திட்டம்",
          excerpt:
            "சிறு வணிகங்கள் புதிய பொருளாதார மேம்பாட்டு முயற்சியில் ரூ. 500,000 வரை மானியத்திற்குத் தகுதி பெறலாம்.",
          content:
            "உள்ளூர் பொருளாதார வளர்ச்சியை ஊக்குவிக்க மற்றும் தொழில்முனைவோர்களுக்கு ஆதரவு அளிக்க, நகராட்சி புதிய வணிக மானியம் திட்டத்தை அறிமுகப்படுத்தியுள்ளது, தகுதி வாய்ந்த சிறு வணிகங்களுக்கு ரூ. 500,000 வரை வழங்குகிறது. திட்டம் முக்கியத் துறைகளில் உள்ள ஸ்டார்ட்அப்கள் மற்றும் தற்போதைய சிறு நிறுவனங்களை குறிக்கின்றது. விண்ணப்பங்கள் தற்போது திறந்திருக்கும், குறிப்பாக உள்ளூர் வேலை வாய்ப்புகளை உருவாக்கும் வணிகங்களுக்கு முன்னுரிமை வழங்கப்படுகிறது.",
          author: "பொருளாதார மேம்பாட்டு துறை",
        },
        parkRenovation: {
          title: "பார்க் புதுப்பிப்பு திட்டம் தொடங்கியது",
          excerpt:
            "மையப் பூங்கா புதிய விளையாட்டு உபகரணங்கள், நடைபாதைகள் மற்றும் விளக்குகள் பெற்று 3 மாத புதுப்பிப்பு திட்டத்தில் இருக்கும்.",
          content:
            "மன்னாரின் மிகவும் பிரியமான பொது இடங்களில் ஒன்றான மையப் பூங்காவிற்கு விரிவான மேம்பாடுகளை கொண்ட பார்க் புதுப்பிப்பு திட்டம் தொடங்கியுள்ளது. 3 மாத திட்டத்தில் நவீன மற்றும் பாதுகாப்பான விளையாட்டு உபகரணங்கள் நிறுவல், புதிய நடைபாதைகள் மற்றும் ஜாக்கிங் பாதைகள், மேம்பட்ட நிலக்கலை வடிவமைப்பு மற்றும் மாலை நேர பயன்பாட்டிற்கு விளக்குகள் மேம்படுத்தப்படுகின்றன. புதுப்பிக்கப்பட்ட பூங்கா குடும்பங்களுக்கும் உடற்பயிற்சி ஆர்வலர்களுக்கும் மேம்பட்ட பொழுதுபோக்கு வாய்ப்புகளை வழங்கும்.",
          author: "பார்க்கள் & تفریح",
        },
      },
    },
    //gallery
    GallerylodingPage: {
      breadcrumb: "படக்காட்சியகம்",
      hero: {
        title: "புகைப்பட காட்சியகம்",
        description:
          "மன்னாரின் கண்கவர் அழகு, செறிவுள்ள கலாச்சாரம் மற்றும் தனித்துவமான பாரம்பரியத்தை எங்கள் கவனத்துடன் தேர்ந்தெடுத்த ஆல்பங்கள் மூலம் கண்டறியவும்",
      },
      search: {
        albums: "தலைப்பு, இடம் அல்லது வகை மூலம் ஆல்பங்களைத் தேடுங்கள்...",
        media: "இந்த ஆல்பத்தில் ஊடகங்களைத் தேடுங்கள்...",
      },
      sort: {
        label: "வரிசைப்படுத்து",
        newest: "புதியது",
        popular: "மிகவும் பிரபலமானது",
        name: "அகரவரிசை",
      },
      filters: {
        button: "வகைகள்",
        clearAll: "அனைத்தையும் அகற்று",
        category: "வகை மூலம் வடிகட்டு",
      },
      viewMode: {
        grid: "கட்ட அமைப்பு",
        masonry: "கற்றை அமைப்பு",
      },
      pagination: {
        previous: "முந்தையது",
        next: "அடுத்தது",
      },
      albums: {
        resultsCount:
          "மொத்தம் {total} தேர்ந்தெடுக்கப்பட்ட ஆல்பங்களில் {count} காட்டப்படுகிறது",
        noResults: {
          title: "ஆல்பங்கள் எதுவும் கிடைக்கவில்லை",
          description:
            "உங்கள் தேடலுடன் பொருந்தக்கூடிய ஆல்பங்கள் எதுவும் கிடைக்கவில்லை. உங்கள் தேடல் அல்லது வடிகட்டல்களை சரிசெய்ய முயற்சிக்கவும்.",
          clearFilters: "அனைத்து வடிகட்டல்களையும் அகற்று",
        },
        viewAlbum: "ஆல்பைக் காண்க",
        items: "உருப்படிகள்",
        tags: "குறிச்சொற்கள்",
        mediaCount: "மொத்த ஊடகங்கள்",
        photoCount: "புகைப்படங்கள்",
        videoCount: "வீடியோக்கள்",
      },
      albumDetail: {
        backToAlbums: "ஆல்பங்களுக்குத் திரும்புக",
        mediaItems: "ஊடக உருப்படிகள்",
        viewPhoto: "புகைப்படத்தைக் காண்க",
        viewVideo: "வீடியோவைக் காண்க",
        photo: "புகைப்படம்",
        video: "வீடியோ",
        likes: "விருப்பங்கள்",
        views: "பார்வைகள்",
        downloads: "பதிவிறக்கங்கள்",
      },
      categories: {
        environment: "சுற்றுச்சூழல்",
        heritage: "பாரம்பரியம்",
        wildlife: "வனவிலங்குகள்",
        culture: "கலாச்சாரம்",
        community: "சமூகம்",
        landmarks: "முக்கிய இடங்கள்",
      },
      albumsData: [
        {
          id: "coastal-beauty",
          title: "கடற்கரை அழகு",
          description:
            "மன்னார் தீவின் கண்கவர் கடற்கரைக் காட்சிகள் மற்றும் கற்பனைக்கு எட்டாத கடற்கரைகள்",
          location: "மன்னார் கடற்கரை",
          category: "சுற்றுச்சூழல்",
          tags: ["கடற்கரைகள்", "சூரிய அஸ்தமனம்", "அலைகள்", "இயற்கை"],
        },
        {
          id: "historical-heritage",
          title: "வரலாற்று பாரம்பரியம்",
          description:
            "பண்டைய கோட்டைகள், தேவாலயங்கள் மற்றும் காலனி கட்டிடக்கலை",
          location: "மன்னார் நகரம்",
          category: "பாரம்பரியம்",
          tags: ["கோட்டை", "தேவாலயம்", "கட்டிடக்கலை", "வரலாறு"],
        },
        {
          id: "wildlife-nature",
          title: "வனவிலங்குகள் & இயற்கை",
          description:
            "மன்னாரின் தாவரங்கள், விலங்குகள் மற்றும் இயற்கை காட்சிகள்",
          location: "மன்னார் பகுதி",
          category: "வனவிலங்குகள்",
          tags: ["பறவைகள்", "கழுதைகள்", "ஆலிவரச்சி", "இயற்கை"],
        },
        {
          id: "cultural-events",
          title: "கலாச்சார நிகழ்வுகள்",
          description:
            "திருவிழாக்கள், பாரம்பரியங்கள் மற்றும் சமூக கொண்டாட்டங்கள்",
          location: "மன்னார் நகர மையம்",
          category: "கலாச்சாரம்",
          tags: ["திருவிழா", "நடனம்", "இசை", "சமூகம்"],
        },
        {
          id: "local-life",
          title: "உள்ளூர் வாழ்க்கை",
          description:
            "தினசரி வாழ்க்கை, சந்தைகள் மற்றும் பாரம்பரிய செயல்பாடுகள்",
          location: "மன்னார் கிராமங்கள்",
          category: "சமூகம்",
          tags: ["சந்தை", "மீன்பிடித்தல்", "கலாச்சாரம்", "மக்கள்"],
        },
        {
          id: "landmarks",
          title: "முக்கிய இடங்கள்",
          description: "சின்னமான முக்கிய இடங்கள் மற்றும் முக்கியமான இடங்கள்",
          location: "மன்னார் மாவட்டம்",
          category: "முக்கிய இடங்கள்",
          tags: ["கலங்கரை விளக்கம்", "நினைவுச்சின்னங்கள்", "முக்கியத்துவம்"],
        },
      ],
      mediaItems: [
        {
          id: "1",
          title: "மன்னார் தீவு கடற்கரைகள்",
          description:
            "மன்னார் தீவின் கற்பனைக்கு எட்டாத கடற்கரை, பளிங்கு போன்ற தெளிந்த நீர் மற்றும் பொன் மணல் காட்சிகள்",
          location: "மன்னார் கடற்கரை",
          category: "சுற்றுச்சூழல்",
        },
        {
          id: "2",
          title: "வரலாற்று மன்னார் கோட்டை சுற்றுப்பயணம்",
          description:
            "மன்னார் கோட்டையின் காலனி கட்டிடக்கலை மற்றும் வரலாற்று முக்கியத்துவம் வழிகாட்டப்பட்ட சுற்றுப்பயணம்",
          location: "மன்னார் கோட்டை",
          category: "பாரம்பரியம்",
        },
      ],
    },
     NewsLabels: {
      backToAllNews: "அனைத்து செய்திகளுக்கு மீண்டும்",
      relatedNews: "தொடர்புடைய செய்திகள்",
      publishedBy: "மதுரை நகராட்சியால் வெளியிடப்பட்டது",
      lastUpdated: "சமீபத்தில் புதுப்பிக்கப்பட்டது",
      shareThisArticle: "இந்த கட்டுரையை பகிர்",
      copyLink: "இணைப்பு நகல்",
      articleSaved: "கட்டுரை உங்கள் சேமிப்பில் சேமிக்கப்பட்டுள்ளது",
      saved: "சேமிக்கப்பட்டது",
      save: "சேமி",
      print: "அச்சிடு",
      readMore: "மேலும் படிக்க",
    },
     TeamContent: {
      hero: {
    title: "எங்கள் குழுவை சந்திக்கவும்",
    description: "மன்னார் முனிசிபல் கவுன்சிலில் பணியாற்றும் அர்ப்பணிப்பான வல்லுநர்களை அறிந்து கொள்ளுங்கள். சமூகத்திற்கான ஆட்சி மற்றும் பொது சேவையில் சிறந்து விளங்க எங்கள் குழு உறுதிபூண்டுள்ளது."
  },
  members: {
    title: "எங்கள் கவுன்சிலின் முக்கிய உறுப்பினர்கள்",
    commissioner: {
      name: "திரு. ஏ.பி. பெரேரா",
      position: "முனிசிபல் கமிஷனர்",
      description: "திரு. பெரேரா முனிசிபல் கவுன்சிலை வழிநடத்துகிறார், மென்மையான ஆட்சி மற்றும் கொள்கைகளின் பயனுள்ள அமலாக்கத்தை உறுதி செய்கிறார்."
    },
    deputyCommissioner: {
      name: "திருமதி. எஸ்.டி. ஃபெர்னாண்டோ",
      position: "துணை ஆணையர்",
      description: "திருமதி. ஃபெர்னாண்டோ நிர்வாக கடமைகளில் கமிஷனருக்கு ஆதரவாகவும், கவுன்சில் செயல்பாடுகளை மேற்பார்வையிடவும் உள்ளார்."
    },
    adminOfficer: {
      name: "திரு. ஆர்.எஸ். ஜயசிங்க",
      position: "தலைமை நிர்வாக அதிகாரி",
      description: "திரு. ஜயசிங்க அனைத்து நிர்வாக செயல்பாடுகளையும் நிர்வகிக்கிறார் மற்றும் துறைகளுக்கு இடையே ஒருங்கிணைக்கிறார்."
    },
    hrManager: {
      name: "திருமதி. எல்.எம். சில்வா",
      position: "மனிதவள மேலாளர்",
      description: "திருமதி. சில்வா முனிசிபல் கவுன்சிலுக்கான மனிதவளக் கொள்கைகள், பணியாளர் நலன் மற்றும் ஆட்சேர்ப்பை மேற்பார்வையிடுகிறார்."
    },
    cfo: {
      name: "திரு. கே.எல். பண்டார",
      position: "தலைமை நிதி அதிகாரி",
      description: "திரு. பண்டாரா கவுன்சிலின் நிதி, பட்ஜெட் மற்றும் நிதி அறிக்கையிடலை நிர்வகிக்கிறார்."
    },
    chiefEngineer: {
      name: "திரு. டபிள்யூ.ஏ.எஸ். குமார",
      position: "தலைமை பொறியாளர்",
      description: "திரு. குமாரா முனிசிபல் உள்கட்டமைப்புத் திட்டங்கள் மற்றும் பொறியியல் பணிகளை மேற்பார்வையிடுகிறார்."
    },
    medicalOfficer: {
      name: "டாக்டர். எஸ்.எம். ஃபோன்சேகா",
      position: "தலைமை மருத்துவ அதிகாரி",
      description: "டாக்டர். ஃபோன்சேகா நகராட்சி முழுவதும் பொது சுகாதார முயற்சிகள் மற்றும் மருத்துவ சேவைகளை வழிநடத்துகிறார்."
    },
    townPlanner: {
      name: "திரு. பி.ஜி. அமரசிங்க",
      position: "நகர திட்டமிடுபவர்",
      description: "திரு. அமரசிங்க நகரத் திட்டமிடல், மண்டலமயமாக்கல் மற்றும் நிலையான நகர வளர்ச்சிக்கு பொறுப்பாக உள்ளார்."
    }
  }
      
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
      ads: "ප්‍රචාරණ",
      socialWork: "සමාජ සේවය",
      complaints: "පැමිණිලි",
      aboutUs: "අප ගැන",
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
        description:
          "අත්‍යවශ්‍ය සේවා වලට ප්‍රවේශ වී නාගරික වැඩසටහන් සහ මුලපිරීම් ගැන දැනගන්න",
        garbageCollection: {
          title: "කසළ එකතු කිරීම",
          description:
            "ඔබේ ප්‍රදේශයේ අපද්‍රව්‍ය කළමනාකරණ වැඩසටහන් ගැන දැනගන්න.",
        },
        certificates: {
          title: "සහතික සහ අවසර පත්‍ර",
          description:
            "ජන්ම සහතික, විවාහ සහතික සහ අනෙකුත් නිල නාගරික ලේඛන සඳහා අන්තර්ජාලයෙන් අයදුම් කරන්න.",
        },
        publicNotices: {
          title: "පොදු දැනුම්දීම්",
          description:
            "නවතම නාගරික නිවේදන, ප්‍රතිපත්ති වෙනස්කම් සහ ප්‍රජා යාවත්කාලීන සමඟ දැනුවත්ව සිටින්න.",
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
          description:
            "තරුණ, වැඩිහිටි, සෞඛ්‍ය සායන සහ පොදු සුභසාධන මුලපිරීම් සඳහා වැඩසටහන්.",
        },
      },
      events: {
        title: "සිදුවීම් සහ යාවත්කාලීන",
        description:
          "මන්නාර නගර සභාවේ ඉදිරියට එන සිදුවීම්, පොදු දැනුම්දීම් සහ නිල නිවේදන ගැන දැනගන්න.",
        announcements: "නිවේදන",
        notices: "දැනුම්දීම්",
      },
      contact: {
        title: "අප අමතන්න",
        getInTouch: "අමතා සම්බන්ධ වන්න",
        description:
          "ඔබගෙන් ප්‍රතිචාර ලබා ගැනීමට අපි සතුටු වෙමු. කරුණාකර පහත පෝරමය පුරවන්න.",
        quickContact: "ක්ෂණික සම්බන්ධතා",
        findUs: "අපව සොයන්න",
        faqsTitle: "සාමාන්‍යයෙන් අසන ප්‍රශ්න",
        faqs: [
          {
            question: "කොන්ත්‍රාත් සේවාවන් සඳහා කාර්යාල වේලාවන් කවදාද?",
            answer:
              "අපගේ ප්‍රධාන කාර්යාලය සඳුදා සිට සිකුරාදා දක්වා පෙ.ව. 8:00 සිට ප.ව. 4:30 දක්වා විවෘත වේ. හදිසි සේවාවන් 24/7 ලබා ගත හැකිය.",
          },
          {
            question: "ගොඩනැගිලි අනුමැතිය සඳහා මට කෙසේ ඉල්ලිය හැකිද?",
            answer:
              "ගොඩනැගිලි අනුමැතිය සඳහා අපගේ E-Services පෝර්ටලය හරහා හෝ සැලසුම් දෙපාර්තමේන්තුවෙන් ඉල්ලීම කළ හැකිය.",
          },
          {
            question: "මගේ ප්‍රදේශයේ කුණු රැස් කිරීම කවදාද?",
            answer:
              "කුණු රැස් කිරීමේ වේලාවන් කලාප අනුව වෙනස් වේ. ඔබේ ලිපිනය ඇතුළත් කර ඔබේ කුණු රැස් කිරීමේ දිනය පරීක්ෂා කරන්න.",
          },
          {
            question: "මම නාගරික ගැටළුවක් හෝ පැමිණිල්ලක් කෙසේ වාර්තා කරමි?",
            answer:
              "ඔබ මෙම පෝරමය හරහා, අපගේ හෝට්ලයින් හරහා, හෝ 24/7 ලබාගත හැකි පැමිණිල්ල පෝර්ටලය භාවිතා කර ගැටළු වාර්තා කළ හැකිය.",
          },
        ],
      },
      gallery: {
        visualShowcase: "දෘශ්‍ය ප්‍රදර්ශනය",
        title: "අපගේ රූපශාලාව සොයාගන්න",
        description:
          "මන්නාරම්ගේ සිරස්තල සහ උරුමය අපගේ තෝරාගත් රූප එකතුවේ මගින් සොයාගන්න",
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
        description:
          "මන්නාරමයේ විශේෂ ආකර්ෂණ, සංස්කෘතිය සහ ස්වභාවික සොඳුරුකම සොයා බලන්න.",
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
              description: "අපූරු වෙරළතීර, විඥානය සහ විශේෂිත වනාන්තර සොයාගන්න.",
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
              description: "දමිළ සහ ගෝලීය බලපෑම් මිශ්‍ර වූ විශේෂ දර්ශන නරඹන්න.",
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
      copyright:
        "© 2025මන්නාර නගර සභාව. සියලුම අයිතිවාසිකම් ඇවිරිණි. අපගේ ප්‍රජාව සඳහා කැපවීමෙන් ගොඩනගා ඇත.",
      builtWith: "අපගේ ප්‍රජාව සඳහා කැපවීමෙන් ගොඩනගා ඇත",
    },
    contactPage: {
      title: "සම්බන්ධතා නාමාවලිය",
      description:
        "අගමැති කාර්යාලයේ නිවැරදි සම්බන්ධතාව ඉක්මනින් සහ කාර්යක්ෂමව සොයා ගන්න.",
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
       NewsEventPage:[
       {
      id: 1,
      title: "නව ජල පිරිසිදු කිරීමේ කර්මාන්ත ශාලාව විවෘත කිරීම",
      excerpt: "මන්නාරම් නගර සභාව නවීන ජල පිරිසිදු කිරීමේ පහසුකමක් නිල වශයෙන් විවෘත කරමින් සිටින්නේ පුරවැසියන් 15,000කට පිරිසිදු, ආරක්ෂිත පානීය ජලය සපයනු පිණිසයි.",
      content: `පොදු සෞඛ්‍ය යටිතල පහසුකම් සඳහා වන සුවිශේෂී මංසලකුණක් ලෙස, මන්නාරම් නගර සභාව ඊයේ දිනයේ එහි නව ජල පිරිසිදු කිරීමේ කර්මාන්ත ශාලාව විවෘත කළේය. 
රු. මිලියන 45ක අයවැයක් මගින් ඉදිකරන ලද මෙම පහසුකම, ප්‍රතිලෝම පාරගමනය, UV අස්ත්‍රීකරණය සහ අවසන්දාන ක්‍රියාවලි ඇතුළු උසස් පෙරීමේ හා පිරිසිදු කිරීමේ තාක්ෂණයන් ඇතුළත් කර ගනිමින් සියලුම පුරවැසියන් සඳහා පිරිසිදු හා ආරක්ෂිත ජලය සහතික කරයි.

මහ නගරාධිපති එස්. පෙරේරා මහතා අවධාරණය කළේ මෙම ව්‍යාපෘතිය ජල ගුණාත්මකභාවය වැඩි දියුණු කිරීමට පමණක් නොව, කලාපයේ ජලය මගින් පැතිරෙන රෝග සැලකිය යුතු ලෙස අඩු කරන බවයි. තිරසාර සංවර්ධනයට හා නවීන යටිතල පහසුකම් සඳහා වන සභාවේ ප්‍රතිඥාව ඔහු අවධාරණය කළේය.

කර්මාන්ත ශාලාවට පැයකට ලීටර් 10,000ක් දක්වා ජලය සැකසීමේ ධාරිතාවක් ඇති අතර, ගෘහ, පාසල් සහ ප්‍රාදේශීය ව්‍යාපාර සඳහා සේවා සපයයි. ඊට අමතරව, මෙම පහසුකම අඛණ්ඩ ගුණාත්මකභාව පරීක්ෂා සහ නඩත්තු ඇඟවීම් සහතික කිරීම සඳහා ස්වයංක්‍රීය නිරීක්ෂණ පද්ධතියක් ඇතුළත් කරයි.

සූර්ය බලයෙන් ක්‍රියාත්මක වන පොම්ප සහ වැසි ජලය රැස් කිරීමේ යාන්ත්‍රණ ඇතුළු ශක්ති කාර්යක්ෂම පද්ධති ඒකාබද්ධ කිරීම සඳහා පරිසර විශේෂඥයින් මෙම ව්‍යාපෘතිය ප්‍රශංසා කළහ. පොදු සෞඛ්‍යය හා දිගුකාලීන තිරසාර බවට ප්‍රමුඛත්වය දුන් සභාවේ උත්සාහයන් සඳහා ප්‍රාදේශීය සමාජ නායකයින් කෘතඥතාව පළ කළහ.

විවෘත කිරීමේ උත්සවයට සහභාගී වූ පුරවැසියන්ට කර්මාන්ත ශාලාවේ මඟ පෙන්වන සංචාර සහ ජල සංරක්ෂණ පිළිවෙත් පිළිබඳ අධ්‍යාපනික සැසි ලබා දෙන ලදී. වගකිවයුතු ජල භාවිතය පිළිබඳ දැනුවත් කිරීම සඳහා මන්නාරමේ පාසල් සඳහා කම්කරු ශිබිරු සැලසුම් කර ඇත.

පාරිසරික හා ක්‍රියාකාරී කාර්යක්ෂමතාව පවත්වා ගනිමින් ඔවුන්ගේ ජල පිරිසිදු කිරීමේ යටිතල පහසුකම් උසස් කිරීමට අපේක්ෂා කරන වෙනත් නගර සභා සඳහා මෙම සංවර්ධනය ආදර්ශනයක් ලෙස සේවය කරනු ඇතැයි අපේක්ෂා කෙරේ.`,
      author: "නගර සභා සන්නිවේදන",
      date: "2024-01-15",
      readTime: "8:00 PM",
      image: "/new.png",
      category: "යටිතල පහසුකම්",
      slug: "new-water-treatment-plant-inaugurated",
    },
    {
      id: 2,
      title: "ඩිජිටල් සේවා ද්වාරය අරඹන ලදී",
      excerpt: "පුරවැසියන්ට දැන් අපගේ නව ඩිජිටල් වේදිකාව හරහා නගර සභා සේවා අන්තර්ජාලයෙන් ප්‍රවේශ විය හැකිය, රැඳී සිටින වේලාව අඩු කර කාර්යක්ෂමතාව වැඩි දියුණු කරයි.",
      content: "මන්නාරම් නගර සභාව එහි සවිස්තරාත්මක ඩිජිටල් සේවා ද්වාරය අරඹන ලදී, එය නගර සභා ක්‍රියාකාරකම් නවීනකරණය කිරීමේ දීශාවට ගත් සුවිශේෂී පියවරකි. පුරවැසියන්ට දැන් සහතිකපත් සඳහා අයදුම් කළ හැකිය, බදු ගෙවිය හැකිය සහ විවිධ සේවා අන්තර්ජාලය හරහා ප්‍රවේශ විය හැකිය. මෙම වේදිකාව 24/7 ලබා ගත හැකි පරිශීලක-හිතකාමී අතුරු මුහුණතක්, අයදුම්පත් තත්ත්වය නිරීක්ෂණය කිරීම, ඩිජිටල් අනුමත කිරීම් ලබා ගැනීම සහ ආරක්ෂිත අන්තර්ජාල ගෙවීම් සිදු කිරීම සඳහා වන විශේෂාංග ඇතුළත් වේ.",
      author: "තොරතුරු තාක්ෂණ දෙපාර්තමේන්තුව",
      date: "2024-01-12",
      readTime: "8:00 PM",
      image: "/new.png",
      category: "තාක්ෂණය",
      slug: "digital-services-portal-launched",
    },
    {
      id: 3,
      title: "සමාජ ගෙවතු ව්‍යාපෘතිය සාර්ථකත්වය",
      excerpt: "පර්යේෂණාත්මක සමාජ ගෙවතු ව්‍යාපෘතිය ආකර්ෂණීය ප්‍රතිඵල ලබා දී ඇති අතර, නගර සභාව පුරා තවත් ස්ථාන පහකට ව්‍යාප්ත කිරීමේ සැලැස්මක් ඇත.",
      content: "මාස හයකට පෙර ආරම්භ කරන ලද සමාජ ගෙවතු මුලපිරීම අපේක්ෂාවන් ඉක්මවා ඇත. 3 වන වෝර්ඩයේ හදවතේ පිහිටා ඇති මෙම ගෙවතුව කිලෝග්‍රෑම් 500කට අධික නැවුම් එළවළු නිෂ්පාදනය කර ඇති අතර, එය සහභාගී වන පවුල් සහ ප්‍රාදේශීය සමාජ අවන්හල් අතර බෙදා හරින ලදී. මෙම ව්‍යාපෘතිය නැවුම් ඵල දර්ශන ලබා දීමට පමණක් නොව, සමාජ බැඳීම් සහ පාරිසරික දැනුවත් කිරීම් ද ඇති කර ඇත. මෙම සාර්ථකත්වය මත, අතිරේක හරිත අවකාශයන් නිර්මාණය කිරීමට සහ නාගරික කෘෂිකර්මාන්තය ප්‍රවර්ධනය කිරීමට අතිරේක ස්ථාන පහකට ව්‍යාප්ත කිරීම අනුමත කර ඇත.",
      author: "පාරිසරික අංශය",
      date: "2024-01-10",
      readTime: "8:00 PM",
      image: "/new.png",
      category: "පරිසරය",
      slug: "community-garden-project-success",
    },
      ],
      notice: [
        {
          id: 1,
          title: "ජල සැපයුම් නඩත්තු කිරීම",
          date: "2025 අප්‍රේල් 5",
          image: "/mannar-lighthouse-sri-lanka-historic-maritime-land.jpg",
          description:
            "සැලසුම් කළ නඩත්තු කිරීම 9 පෙ.ව. සිට ප.ව. 3 දක්වා කලාපය A හි ජල සැපයුමට බලපායි.",
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
          description:
            "මන්නාරයේ දේශීය ආර්ථිකය නැවත සජීවී කර ගැනීම පිළිබඳ සභාපතිගේ නවතම කතාබහ බලන්න.",
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
          description:
            "මන්නාර දිවයින පුරා සම්බන්ධතාවය වැඩි දියුණු කිරීමට මැයි 1 සිට නව බස් මාර්ග තුනක්.",
        },
      ],
    },
    ChairmanPage: {
      hero: {
        name: "මානනීය රාජේෂ් පෙරේරා",
        cta: "සභාපතිව අමතන්න",
      },
      messageSection: {
        title: "සභාපතිගේ පණිවුඩය",
        welcome: "අපගේ අගනුවර පුරවැසියන්ට, හවුල්කරුවන්ට සහ කණ්ඩායම් සාමාජිකයින්ට උණුසුම් පිළිගැනීමක්.",
        mission: "දැක්මක් සහිතව නායකත්වය දියත් කරමින්, විශ්වාසය සහ නවෝත්පාදනය මගින් ගොඩනගා ගැනීම.",
        unity: "එක්ව, අපගේ සමාජයේ අනාගතය විවෘතව හා අරමුණකින් මග පෙන්වමු.",
      },
      profile: {
        title: "සභාපතිගේ විස්තරය",
        education: {
          title: "අධ්‍යාපනය",
          content: "ව්‍යාපාර නායකත්ව MBA – ඔක්ස්ෆර්ඩ් විශ්වවිද්‍යාලය",
        },
        experience: {
          title: "අත්දැකීම්",
          content: "පොදු නායකත්වය සහ නවෝත්පාදනයේ වසර 20 කට වැඩි අත්දැකීම්",
        },
        awards: {
          title: "සම්මාන",
          content: "වෙළඳ නායක (2021), දැක්මක් ඇති ව්‍යාපාරික (2023)",
        },
        years: {
          title: "සේවා වසර",
          content: "DEAL PARTNER සභාපති ලෙස වසර 15 ක සේවය",
        },
        vision: {
          title: "දැක්ම",
          quote: "ජනතාවට උනන්දුවෙන් සහ අරමුණකින් පරිපූර්ණතාව ලබාදීම අපගේ දැක්මයි.",
        },
      },
      goals: {
        title: "අනාගත අරමුණු",
        para: "අපගේ අරමුණ වන්නේ නවෝත්පාදනය නායකත්වය දියත් කරමින්, විශ්ව පරාසය විහිදුවා, තිරසාර වර්ධනයක් ලබාදීමයි.",
        list: [
          "ඩිජිටල් පරිවර්තන වැඩපිළිවෙළ ශක්තිමත් කිරීම",
          "පාරිසරිකව හිතකාමී ව්‍යාපාර ආකෘති ප්‍රවර්ධනය කිරීම",
          "නවෝත්පාදනය සඳහා ගෝලීය හවුල්කාරිත්වයන් සංවර්ධනය කිරීම",
        ],
        quote: "අපගේ අරමුණ වන්නේ වෙනසක් ප්‍රේරණය කරමින්, සියලු පුරවැසියන්ට සාර්ථකත්වය ලබාදීමයි.",
      },
      values: {
        title: "ගුණාංග සහ දර්ශනය",
        items: [
          { title: "ආචාරශීලීත්වය", desc: "ආදර්ශය විශ්වාසය සහ ශක්තිමත් සම්බන්ධතා ගොඩනගයි." },
          { title: "නවෝත්පාදනය", desc: "අප නව සෙවීම සහ නිර්මාණශීලීත්වය පිළිගන්නෙමු." },
          { title: "සමූහ වැඩ", desc: "සහයෝගය අපගේ වර්ධනයේ මූලිකයයි." },
          { title: "වර්ධනය", desc: "අප නිරන්තර අධ්‍යාපනය සහ උසස්භාවය සඳහා උත්සාහ කරමු." },
        ],
      },
    },
    
    galleryPage: {
      title: "සිදුවීම් ගැලරිය",
      description:
        "මන්නාරමේ ජීවන්ත සමාජ සිදුවීම් සහ මුල්යම් ක්ෂණික ගවේෂණය කරන්න.",
      heroImage:
        "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=4000&q=80",
      searchPlaceholder: "ශීර්ෂකය, ස්ථානය හෝ කාණ්ඩය අනුව සිදුවීම් සොයන්න...",
      sortBy: "වර්ග කරන්න",
      sortOptions: {
        newest: "නවතම මුලින්ම",
        oldest: "පැරණිතම මුලින්ම",
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
        business: "ව්යාපාර",
      },
      photos: [
        {
          title: "ප්රජා පිරිසිදු කිරීමේ ව්යාපාරය 2024",
          dateLabel: "ජනවාරි 15, 2024",
          location: "මධ්යම උද්යානය, මන්නාරම",
          participants: "200+ ස්වේච්ඡා සේවකයින්",
          description:
            "පාරිසරික සංරක්ෂණය සඳහා වැසියන් එක් කරන වාර්ෂික ප්රජා පිරිසිදු කිරීමේ මුල්යම්.",
        },
        {
          title: "තරුණ නායකත්ව වැඩමුළුව",
          dateLabel: "ජනවාරි 10, 2024",
          location: "ප්රජා මධ්යස්ථානය",
          participants: "50 තරුණ නායකයින්",
          description:
            "නායකත්ව කුසලතා සහ පුරවැසි වගකීම් පුහුණුව සමඟ තරුණ මනස බලගන්වනු ලැබේ.",
        },
        {
          title: "අලුත් අවුරුදු සංස්කෘතික උත්සවය",
          dateLabel: "ජනවාරි 1, 2024",
          location: "නගර චතුරශ්රය",
          participants: "1000+ සහභාගීවන්නන්",
          description:
            "සම්ප්රදායික සංගීතය, නර්තනය සහ සංස්කෘතික ක්රියාකාරකම් සමඟ අලුත් අවුරුදු සමරනු ලැබේ.",
        },
        {
          title: "සභා අයවැය රැස්වීම",
          dateLabel: "දෙසැම්බර් 20, 2023",
          location: "සභා කාමරය",
          participants: "සභා සාමාජිකයින් සහ මහජනතාව",
          description: "වාර්ෂික අයවැය ඉදිරිපත් කිරීම සහ මහජන සාකච්ඡා රැස්වීම.",
        },
        {
          title: "වැඩිහිටි පුරවැසියන්ගේ සෞඛ්ය මැළියම",
          dateLabel: "දෙසැම්බර් 15, 2023",
          location: "නගර සභා ශාලාව",
          participants: "150 වැඩිහිටියන්",
          description:
            "වැඩිහිටි සමාජ සාමාජිකයින් සඳහා නොමිලේ සෞඛ්ය පරීක්ෂණ සහ සෞඛ්ය උපදේශන.",
        },
        {
          title: "කොන්ත්‍රාත් සේවකයින් සඳහා පුහුණුව",
          dateLabel: "දෙසැම්බර් 5, 2023",
          location: "සභා කාර්යාලය",
          participants: "30 කොන්ත්‍රාත් සේවකයින්",
          description: "සේවා ප්රමිතීන් සහ පාරිභෝගික සේවා පිළිබඳ පුහුණුව.",
        },
      ],
    },
    AdsSectionTranslations: {
      topBar: {
        title: "නිල නිවේදන සහ ප්රකාශන",
        viewAll: "සියල්ල බලන්න",
      },
      title: "පොදු නිවේදන",
      subtitle:
        "මන්නාරම් නගර සභාවේ නවතම ප්රකාශන සහ වැදගත් තොරතුරු සමඟ යාවත්කාලීනව රැඳෙන්න",
      searchPlaceholder: "නිවේදන, ඇමතුම්පත්, උත්සව...",
      allCategories: "සියලුම කාණ්ඩ",
      viewAll: "සියලු නිවේදන බලන්න",
      notices: "නිවේදන",
      urgent: "හදිසි",
      readMore: "විස්තර වෙත යන්න",
      noResults: {
        title: "නිවේදන නැත",
        description: "ඔබේ සෙවුම හෝ පෙරහන් නිර්ණායක සකස් කරන්න",
      },
      modal: {
        title: "සියලු පොදු නිවේදන",
        subtitle: "මන්නාරම් නගර සභාවේ නිල ප්රකාශන",
      },
    },
    //news
    news: {
      breadcrumb: "පුවත්",
      hero: {
        title: "නගර සභා පුවත්",
        description:
          "මන්නාරම නගර සභාවෙන් අවසන් යාවත්කාලීන, සංවර්ධන සහ ජයග්‍රහණ ගැන දැනගන්න.",
      },
      search: {
        placeholder: "ශීර්ෂය, වර්ගය හෝ රචකයා අනුව පුවත් සෙවීම...",
      },
      sort: {
        label: "වර්ගීකරණය",
        newest: "නවතම ප්‍රථම",
        oldest: "පැරණිතම ප්‍රථම",
      },
      filters: {
        button: "පෙරහන්",
        clearAll: "සියල්ල මකා දමන්න",
        category: "වර්ග අනුව පෙරහන් කරන්න",
        time: {
          label: "කාලය අනුව පෙරහන් කරන්න",
          all: "සියලු කාලය",
          day: "අවසන් 24 පැය",
          week: "පසුගිය සතිය",
          month: "පසුගිය මාසය",
          year: "පසුගිය වසර",
        },
      },
      noResults: "කිසිදු ලිපියක් සොයාගත නොහැක. සෙවුම් හෝ පෙරහන් වෙනස් කරන්න.",
      learnMore: "වැඩි විස්තර කියවන්න",
      readTime: "සන්ධ්‍යාව 8:00",
      pagination: {
        previous: "පෙර",
        next: "ඊළඟ",
      },
      categories: {
        infrastructure: "අවමංගල ව්‍යවස්ථා",
        technology: "තාක්ෂණය",
        environment: "පරිසරය",
        transport: "ප්‍රවාහන",
        youthPrograms: "තරුණ වැඩසටහන්",
        communityOutreach: "සමාජ සේවාව",
        publicSafety: "සාමූහික ආරක්ෂාව",
        education: "අධ්‍යාපන",
        economicDevelopment: "ආර්ථික සංවර්ධනය",
        parksRecreation: " උයන සහ විනෝද",
      },
      articles: {
        waterTreatment: {
          title: "නව ජල සැකසුම් කඳවුර විවෘත කරයි",
          excerpt:
            "මන්නාරම නගර සභාව 15,000 නේවාසිකයන්ට පිරිසිදු, ආරක්ෂිත පානය කළ හැකි ජලය ලබා දීමට නව උසස් තාක්ෂණ ජල සැකසුම් කඳවුර විවෘත කර ඇත.",
          content:
            "ජන සෞඛ්‍ය අධිස්ථාන සඳහා වැදගත් සංඛ්‍යාතයකි. මන්නාරම නගර සභාව ඊයේ නව ජල සැකසුම් කඳවුර විවෘත කර ඇත. රු. මිලියන් 45 ක අයවැයෙන් ඉදි කරන ලද මෙම පහසුකම උසස් තාක්ෂණික ෆිල්ටරින් සහ පිරිසිදු කිරීමේ ක්‍රමවේදයන් සමඟ පැවැත්වෙන අතර, නගරයේ නේවාසිකයින්ට ඉහළම තත්ත්වයේ ජලය ලබා දීමට කැපවී ඇත. මෙම ව්‍යාපෘතිය මන්නාරයේ ජන සෞඛ්‍ය සහ ජීවන තත්ත්වය උසස් කරගැනීමට අපේ කැපවීම නිරූපණය කරයි.",
          author: "නගර සභා සන්නිවේදන",
        },
        digitalPortal: {
          title: "ඩිජිටල් සේවා පෝටල් ආරම්භ",
          excerpt:
            "නගර සභා සේවාවන් දැන් නේවාසිකයින්ට ඔන්ලයින්ව ලබා ගත හැකි අතර, බලා සිටින කාලය අඩු කර කාර්යක්ෂමතාව වැඩි කරයි.",
          content:
            "මන්නාරම නගර සභාව සියලුම ඩිජිටල් සේවා පෝටලය ආරම්භ කර ඇත. නගර සභා සේවාවන් දැන් නේවාසිකයින්ට නිවසේ සිටම සහතිකපත් අයදුම් කිරීම්, බද්ද ගෙවීම් සහ විවිධ සේවා ලබා ගැනීමේ හැකියාව සලසා ඇත. මෙම පෝටලය ආරක්ෂිත ගෙවීම්, සජීවී අයදුම් නිරීක්ෂණ සහ ස්වයංක්‍රීය දැනුම්දීම් ඇතුළත් කර ඇත.",
          author: "තොරතුරු තාක්ෂණ දෙපාර්තමේන්තුව",
        },
        communityGarden: {
          title: "සමාජ උයන ව්‍යාපෘතියේ සාර්ථකත්වය",
          excerpt:
            "පෙරහුරු සමාජ උයන ව්‍යාපෘතිය අපේක්ෂා කරන ලද ප්‍රතිඵල ලබාදී ඇත, නගරය පුරා තවත් ස්ථාන 5 කට විවෘත කිරීමට සැලසුම් කර ඇත.",
          content:
            "මාස 6කට පෙර ආරම්භ කළ සමාජ උයන ව්‍යාපෘතිය අපේක්ෂාවන් ඉක්මවා ගොස් ඇත. වාර්ඩ් 3 මධ්‍යයේ පිහිටි උයනෙහි 500kg තවත් නිවසේ කාබනික එළවළු නිපදවා, සහභාගි වූ පවුල් වෙත බෙදා දී ඇත. මෙම ව්‍යාපෘතිය තවත් පිරිසිදු ආහාරයක් ලබා දීම පමණක් නොව, සමාජ ආත්මය සහ පරිසර ව්‍යාපාරිකතාව උදව් කරයි. එහි සාර්ථකත්වය නිසා, එය තවත් ස්ථාන 5ක් සඳහා විවෘත කිරීමට සැලසුම් කර ඇත.",
          author: "පරිසර අංශය",
        },
        transportRoutes: {
          title: "නව පොදු ප්‍රවාහන මාර්ග නිවේදනය",
          excerpt:
            "අඟහරුම් ප්‍රදේශයන්ට සම්බන්ධ වීමට තවත් නව බස් මාර්ග 3 ක් ලබන මාසයේ ආරම්භ වන අතර, 8,000 නේවාසිකයින්ට පහසුව සපයයි.",
          content:
            "මන්නාරම නගරය පුරා පොදු ප්‍රවාහන පහසුකම වැඩි දියුණු කිරීම සඳහා, අඩු සේවා ලැබූ ප්‍රදේශයන් සම්බන්ධ කරන නව බස් මාර්ග 3 ක් ලබන මාසයේ ආරම්භ වේ. මෙම විස්තාරය 8,000 නේවාසිකයින්ට ප්‍රයෝජනවත් වන අතර, මෙම ප්‍රදේශවල සාමාන්‍ය ගමන් කාලය 30% කින් අඩු වේ.",
          author: "ප්‍රවාහන දෙපාර්තමේන්තුව",
        },
        youthCouncil: {
          title: "තරුණ සභා මැතිවරණය අවසන්",
          excerpt:
            "2,000කට අධික තරුණ මතය දෙන පිරිස පළමු තරුණ සභා මැතිවරණයට සහභාගීවී, නාගරික සම්බන්ධීකරණයේ මග පෙන්වමින් සිටී.",
          content:
            "දේශීය ආණ්ඩුකාරකත්වයේ තරුණ පරිශීලනය සඳහා ඉතිහාසගත අවස්ථාවකදී, වයස 16-24 අතර 2,000කට අධික තරුණ මැතිවරණයට සහභාගීවී ඇත. නව තේරීම් ලැබූ තරුණ සභාව, මන්නාරයේ තරුණ පරපුරේ අදහස් සහ යෝජනා නියෝජනය කරන අතර, අධ්‍යාපන, රැකියා සහ විනෝද අවස්ථා වලට අවධානය යොමු කරයි.",
          author: "තරුණ කටයුතු",
        },
        floodPrevention: {
          title: "වර්ෂා වාරය පෙර سیරංජ ව්‍යාපෘති නවීකරණය",
          excerpt:
            "මහනගර සභාව මුළු ව්‍යාපෘතිය සඳහා රු. 30 මිලියන වෙන් කර ඇත, වර්ෂා කාලයට පෙර වර්ෂාවට මූලාශ්‍ර වූ ප්‍රදේශවල නාලාවන් නවීකරණය කිරීමට.",
          content:
            "ඊළඟ වර්ෂා කාලයට සූදානම් වීම සඳහා, නගර සභාව වර්ෂා කාලයට පූර්වව වර්ෂාවට මූලාශ්‍ර වූ ප්‍රදේශවල නාලා පද්ධති නවීකරණ සඳහා රු. 30 මිලියන වෙන් කර ඇත. ව්‍යාපෘතියේ අන්තර්ගතය: විශාල නාලා ස්ථාපනය, පවතින ජල මාර්ග පිරිසිදු කිරීම, නාලා මට්ටම් මෝනිටරින් ක්‍රමවේදයන් ස්ථාපනය කිරීම සහ නේවාසිකයින්ට පෙර වර්ෂා අනතුරු ඇඟවීම් ලබා දීම.",
          author: "පොදු වැඩ",
        },
        wellnessCenter: {
          title: "ජ්‍යේෂ්ඨ සුභසාධන මධ්‍යස්ථානය විවෘත",
          excerpt:
            "නව මධ්‍යස්ථානය මන්නාරයේ ජ්‍යේෂ්ඨ ජනතාව සඳහා නොමිලේ සෞඛ්‍ය පරීක්ෂණ, යෝගා පන්තිය සහ සමාජ ක්‍රියාකාරකම් ලබා දෙයි.",
          content:
            "නව විවෘත ජ්‍යේෂ්ඨ සුභසාධන මධ්‍යස්ථානය අපේ ජ්‍යේෂ්ඨ නේවාසිකයින් සඳහා සම්පූර්ණ සේවාවන් ලබා දෙයි, ඒ අතර නොමිලේ සෞඛ්‍ය පරීක්ෂණ, ඖෂධ කළමනාකරණ සහාය, යෝගා හා ව්‍යායාම පන්තියන්, විවිධ සමාජ ක්‍රියාකාරකම් ඇතුළත් වේ. මධ්‍යස්ථානය ක්‍රියාශීලී වයස්ගතවීම උත්තේජනය කරයි, සමාජ සම්බන්ධතා ඇති කිරීමේ ස්ථානයක් සැපයීමේ අරමුණ ඇත.",
          author: "සෞඛ්‍ය දෙපාර්තමේන්තුව",
        },
        recyclingInitiative: {
          title: "නවීන පුනර්විනිමය ව්‍යාපෘතිය ඉලක්කය ඉක්මවා ගියේය",
          excerpt:
            "නගරයේ පුනර්විනිමය වැඩසටහන මුල්කාලයෙහිදී අපේක්ෂා කරන ලද ද්‍රව්‍ය 40% කින් වැඩි ලෙස සංග්‍රහ කර ඇත, සමාජ සහභාගීත්වය නිසා.",
          content:
            "මන්නාරමේ නගර සභාවේ පුනර්විනිමය වැඩසටහන විශිෂ්ට සාර්ථකත්වයක් ලබා ඇති අතර, මුල් වසරේදී අපේක්ෂා කරන ද්‍රව්‍ය 40% කින් වැඩි ලෙස සංග්‍රහ කර ඇත. මෙම සාර්ථකත්වය ශක්තිමත් සමාජ සහභාගීත්වය සහ පරිසරවල සැනසිල්ලේ දැක්ම නිරූපණය කරයි. වැඩසටහන 150 ටොන් අපද්‍රව්‍ය තැනිතලා වලින් පිටත ගෙන යාමට සහාය විය.",
          author: "පරිසර අංශය",
        },
        roadSafety: {
          title: "මාර්ග ආරක්ෂා වැඩසටහන ආරම්භ",
          excerpt:
            "නව මාර්ග ආරක්ෂා අධ්‍යාපන වැඩසටහන සහ සලකුණු වැඩි කිරීම මඟින් අනතුරු 25% කින් අඩු කිරීමට අදහස් කරයි.",
          content:
            "නගර සභාව මාර්ග ආරක්ෂාව පිළිබඳ පුළුල් වැඩසටහනක් ආරම්භ කර ඇත. මෙම වැඩසටහනේ අන්තර්ගතය: පාසල් සහ සමාජයේ අධ්‍යාපන වැඩසටහන්, ඉහළ අවදානම් තැන්වල නව ප්‍රතිබිම්බ සලකුණු, සහ මාර්ග නීති වඩාත් ක්‍රියාත්මක කිරීම. මෙම වැඩසටහන ලබන වසර තුළ මාර්ග අනතුරු 25% කින් අඩු කිරීමේ අරමුණ ඇත.",
          author: "පොදු ආරක්ෂාව",
        },
        libraryExpansion: {
          title: "පුස්තකාලය පුළුල් කළා",
          excerpt:
            "නගර පුස්තකාලය නව අධ්‍යයන කාමර සහ ඩිජිටල් ඉගෙනුම් මධ්‍යස්ථානය සමඟ එහි හැකියාව දෙගුණ කළා.",
          content:
            "නගර පුස්තකාලය පුළුල් කිරීමේ ව්‍යාපෘතිය සාර්ථකව නිම කළ අතර, පහසුකම් දෙගුණ කිරීමට සහ නව පහසුකම් හඳුන්වා දීමට සමත් විය. නව පහසුකම් අතර: නිශ්ශබ්ද අධ්‍යයන කාමර, පරිගණක කාර්යාල සහිත ඩිජිටල් ඉගෙනුම් මධ්‍යස්ථානය, ළමා පාඨක කලාපය, පුස්තකාල ද්‍රව්‍ය එකතු කිරීමේ විශාලන සහ විදුලි පොදු පහසුකම් ඇතුළත් වේ. පුළුල් කළ පුස්තකාලය නවීන සමාජ ඉගෙනුම් මධ්‍යස්ථානයක් ලෙස ක්‍රියාත්මක වේ.",
          author: "අධ්‍යාපන දෙපාර්තමේන්තුව",
        },
        businessGrant: {
          title: "දේශීය ව්‍යාපාර මාර්ගෝපදේශන වැඩසටහන",
          excerpt:
            "සුළු ව්‍යාපාර දැන් රු. 500,000 දක්වා මාර්ගෝපදේශන සඳහා අයදුම් කළ හැක.",
          content:
            "දේශීය ආර්ථික වර්ධනය සහ ව්‍යාපාරිකත්වය පිළිබඳ සහාය සපයන්න, නගර සභාව රු. 500,000 දක්වා සුළු ව්‍යාපාර සඳහා මාර්ගෝපදේශන වැඩසටහන ආරම්භ කර ඇත. මෙම වැඩසටහන ආරම්භක සහ පවතින සුළු ව්‍යාපාරවලට සලකුණු කර ඇත, විශේෂයෙන් තැනැත්තාත්මක රැකියා අවස්ථා ඇති කරන ව්‍යාපාරවලට ප්‍රමුඛතා දක්වයි.",
          author: "ආර්ථික සංවර්ධන දෙපාර්තමේන්තුව",
        },
        parkRenovation: {
          title: "උයන පුනර්නර්මාණ වැඩසටහන ආරම්භ",
          excerpt:
            "මධ්‍යම උයන 3 මසක පුනර්නර්මාණ වැඩසටහනකදී නව ක්‍රීඩා උපකරණ, සැරසිලි මාර්ග සහ ආලෝකය ලබා ගනී.",
          content:
            "මන්නාරයේ ජනප්‍රියතම පොදු ඉඩමක් වන මධ්‍යම උයන සඳහා පුළුල් නවීකරණ වැඩසටහන ආරම්භ කර ඇත. 3 මසක ව්‍යාපෘතියේ නව, ආරක්ෂිත ක්‍රීඩා උපකරණ, නව සැරසිලි සහ ජොග් මාර්ග, නවීන භූපරිසර සැලසුම් සහ සන්ධ්‍යා වේලාවේ භාවිතයට උත්සන්න ආලෝකය ඇතුළත් වේ. පුනර්නර්මාණය කළ උයන පවුල් සහ ක්‍රීඩා ආසිකයින් සඳහා වඩාත් සුවිශේෂී විනෝද අවස්ථා ලබා දෙයි.",
          author: "උයන සහ විනෝද",
        },
      },
    },
    //gallery
    GallerylodingPage: {
      breadcrumb: "ගැලරිය",
      hero: {
        title: "ඡායාරූප ගැලරිය",
        description:
          "මන්නාරමේ අතිමනෝහර සුන්දරත්වය, සමෘද්ධ සංස්කෘතිය සහ අද්විතීය උරුමය අපගේ පරිශීලනය කළ ඇල්බම හරහා සොයා ගන්න",
      },
      search: {
        albums: "ශීර්ෂකය, ස්ථානය හෝ කාණ්ඩය අනුව ඇල්බම සොයන්න...",
        media: "මෙම ඇල්බමයේ මාධ්‍ය සොයන්න...",
      },
      sort: {
        label: "වර්ග කරන්න",
        newest: "නවතම",
        popular: "වඩාත් ජනප්‍රිය",
        name: "වර්ණමාලා ක්‍රමය",
      },
      filters: {
        button: "කාණ්ඩ",
        clearAll: "සියල්ල මකන්න",
        category: "කාණ්ඩය අනුව පෙරහන්",
      },
      viewMode: {
        grid: "ග්‍රිඩ් දර්ශනය",
        masonry: "Masonry දර්ශනය",
      },
      pagination: {
        previous: "පෙර",
        next: "ඊළඟ",
      },
      albums: {
        resultsCount: "සම්පූර්ණ {total} විසිතුරු ඇල්බම වලින් {count} පෙන්වයි",
        noResults: {
          title: "ඇල්බම හමු නොවීය",
          description:
            "ඔබගේ නිර්ණායක සමඟ ගැලපෙන ඇල්බම කිසිවක් සොයාගත නොහැකි විය. ඔබගේ සෙවුම හෝ පෙරහන් සකස් කිරීමට උත්සාහ කරන්න.",
          clearFilters: "සියලුම පෙරහන් මකන්න",
        },
        viewAlbum: "ඇල්බමය බලන්න",
        items: "අයිතම",
        tags: "ටැග්",
        mediaCount: "සම්පූර්ණ මාධ්‍ය",
        photoCount: "ඡායාරූප",
        videoCount: "වීඩියෝ",
      },
      albumDetail: {
        backToAlbums: "ඇල්බම වෙත ආපසු",
        mediaItems: "මාධ්‍ය අයිතම",
        viewPhoto: "ඡායාරූපය බලන්න",
        viewVideo: "වීඩියෝව බලන්න",
        photo: "ඡායාරූපය",
        video: "වීඩියෝව",
        likes: "කැමති",
        views: "දර්ශන",
        downloads: "බාගත කිරීම්",
      },
      categories: {
        environment: "පරිසරය",
        heritage: "උරුමය",
        wildlife: "වනජීවි",
        culture: "සංස්කෘතිය",
        community: "ප්‍රජාව",
        landmarks: "සංකේතාංක",
      },
      albumsData: [
        {
          id: "coastal-beauty",
          title: "වෙරළාසන්න සුන්දරත්වය",
          description:
            "මන්නාරම් දිවයිනේ අතිමනෝහර වෙරළාසන්න දර්ශන සහ පිරිසුදු වෙරළ",
          location: "මන්නාරම් වෙරළාසන්න",
          category: "පරිසරය",
          tags: ["වෙරළ", "සූර්යාස්තමානය", "තරංග", "පරිසරය"],
        },
        {
          id: "historical-heritage",
          title: "Historical Heritage",
          description: "පුරාතන කොටු, පල්ලි සහ යටත්විජිත වාස්තුවිද්‍යාව",
          location: "මන්නාරම් නගරය",
          category: "Heritage",
          tags: ["කොටුව", "පල්ලිය", "වාස්තුවිද්‍යාව", "ඉතිහාසය"],
        },
        {
          id: "wildlife-nature",
          title: "වනජීවි සහ පරිසරය",
          description: "මන්නාරමේ වනසතු, වනජීවි සහ ස්වාභාවික භූ දර්ශන",
          location: "මන්නාරම් කලාපය",
          category: "වනජීවි",
          tags: ["පක්ෂීන්", "බූරුවන්", "Baobab", "පරිසරය"],
        },
        {
          id: "cultural-events",
          title: "සංස්කෘතික උත්සව",
          description: "පෙරහැර, සම්ප්‍රදායන් සහ ප්‍රජා උත්සව",
          location: "මන්නාරම් නගර මධ්‍යස්ථානය",
          category: "සංස්කෘතිය",
          tags: ["පෙරහැර", "නර්තන", "සංගීතය", "ප්‍රජාව"],
        },
        {
          id: "local-life",
          title: "Local Life",
          description: "දෛනික ජීවිතය, වෙළඳපල සහ සම්ප්‍රදායික ක්‍රියාකාරකම්",
          location: "මන්නාරම් ගම්මාන",
          category: "ප්‍රජාව",
          tags: ["වෙළඳපල", "මාළු ඇල්ලීම", "සංස්කෘතිය", "මිනිසුන්"],
        },
        {
          id: "landmarks",
          title: "Landmarks",
          description: "සංකේතාත්මක සංකේත සහ වැදගත් ස්ථාන",
          location: "මන්නාරම් දිස්ත්‍රික්කය",
          category: "සංකේතාංක",
          tags: ["ප්‍රදීපාගාරය", "ස්මාරක", "වැදගත්කම"],
        },
      ],
      mediaItems: [
        {
          id: "1",
          title: "මන්නාරම් දිවයින වෙරළ",
          description:
            "මන්නාරම් දිවයිනේ පිරිසුදු වෙරළාසන්න, ස්පටික පැහැති ජලය සහ ස්වර්ණමය වැලි පෙන්වයි",
          location: "මන්නාරම් වෙරළාසන්න",
          category: "පරිසරය",
        },
        {
          id: "2",
          title: "Historical Mannar Fort Tour",
          description:
            "මන්නාරම් කොටුවේ යටත්විජිත වාස්තුවිද්‍යාව සහ ඓතිහාසික වැදගත්කම හරහා මඟ පෙන්වීම",
          location: "මන්නාරම් කොටුව",
          category: "Heritage",
        },
      ],
    },
     NewsLabels: {
       backToAllNews: "සියලු පුවත් වෙත නැවත",
      relatedNews: "සම්බන්ධ පුවත්",
      publishedBy: "මන්නාරම නගර සභාව විසින් ප්‍රකාශිතය",
      lastUpdated: "අවසානයේ යාවත්කාලීන කරන ලදි",
      shareThisArticle: "මෙම ලිපිය බෙදාහරින්න",
      copyLink: "සබැඳිය පිටපත් කරන්න",
      articleSaved: "ලිපිය ඔබගේ සැමවීමේ සංග්‍රහයට සුරක්‍ෂිත කරන ලදි",
      saved: "සුරකිණි",
      save: "සුරකින්න",
      print: " මුද්‍රණය ",
      readMore: "වැඩිදුර කියවන්න",
    },
     TeamContent: {
      hero: {
    title: "අපගේ කණ්ඩායම හමුවන්න",
    description: "මන්නාරම් නගර සභාවේ සේවය කරන කැපවූ වෘත්තිකයින් හමුවන්න. අපගේ කණ්ඩායම ප්‍රජාව සඳහා පාලනය සහ පොදු සේවාවේ උසස් තත්ත්වයට කැපවී සිටී."
  },
  members: {
    title: "අපගේ සභාවේ ප්‍රධාන සාමාජිකයන්",
    commissioner: {
      name: "ශ්‍රීමත් ඒ.බී. පෙරේරා",
      position: "නගරාධිකාරී",
      description: "ශ්‍රීමත් පෙරේරා නගර සභාව මෙහෙයවන අතර, සුමට පාලනය සහ ප්‍රතිපත්තිවල ඵලදායී ක්‍රියාත්මක කිරීම සහතික කරයි."
    },
    deputyCommissioner: {
      name: "කුමාරි එස්.ටී. ප්‍රනාන්දු",
      position: "උප නගරාධිකාරී",
      description: "කුමාරි ප්‍රනාන්දු පරිපාලන රාජකාරිවලදී නගරාධිකාරීවරයාට සහාය වන අතර සභා ක්‍රියාකාරකම් පරීක්ෂා කරයි."
    },
    adminOfficer: {
      name: "ශ්‍රීමත් ආර්.එස්. ජයසිංහ",
      position: "ප්‍රධාන පරිපාලන නිලධාරී",
      description: "ශ්‍රීමත් ජයසිංහ සියලුම පරිපාලන කාර්යයන් කළමනාකරණය කරන අතර දෙපාර්තමේන්තු අතර සම්බන්ධීකරණය කරයි."
    },
    hrManager: {
      name: "ශ්‍රීමත් එල්.එම්. සිල්වා",
      position: "මානව සම්පත් කළමනාකරු",
      description: "ශ්‍රීමත් සිල්වා නගර සභාව සඳහා මානව සම්පත් ප්‍රතිපත්ති, සේවක යහපත සහ පත්වීම් පරීක්ෂා කරයි."
    },
    cfo: {
      name: "ශ්‍රීමත් කේ.එල්. බණ්ඩාර",
      position: "ප්‍රධාන මූල්ය නිලධාරී",
      description: "ශ්‍රීමත් බණ්ඩාර සභාවේ මූල්ය, අයවැය සහ මූල්ය වාර්තාකරණය කළමනාකරණය කරයි."
    },
    chiefEngineer: {
      name: "ශ්‍රීමත් ඩබ්ලිව්.ඒ.එස්. කුමාර",
      position: "ප්‍රධාන ඉංජිනේරු",
      description: "ශ්‍රීමත් කුමාර නගර යටිතල පහසුකම් ව්‍යාපෘති සහ ඉංජිනේරු කටයුතු පරීක්ෂා කරයි."
    },
    medicalOfficer: {
      name: "බෞද්ධ එස්.එම්. ෆොන්සේකා",
      position: "ප්‍රධාන වෛද්ය නිලධාරී",
      description: "බෞද්ධ ෆොන්සේකා නගර සභාව පුරාම පොදු සෞඛ්‍ය මූලිකත්වයන් සහ වෛද්ය සේවා මෙහෙයවයි."
    },
    townPlanner: {
      name: "ශ්‍රීමත් පී.ජී. අමරසිංහ",
      position: "නගර සැලසුම්කරු",
      description: "ශ්‍රීමත් අමරසිංහ නගර සැලසුම්කරණය, කලාපගත කිරීම සහ තිරසාර නගර සංවර්ධනය සඳහා වගකිව යුතුය."
    }
  }
      
    }
   
  },
};
