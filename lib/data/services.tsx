// data/services.ts
// import { ServiceCategories } from '@/lib/data/service';
// import { FaGraduationCap, FaHardHat, FaShieldAlt, FaHeartbeat } from 'react-icons/fa';

// export const serviceCategories: ServiceCategories = [
//   {
//     id: 'education-welfare',
//     title: 'Education & Welfare',
//     description: 'Programs focused on education, welfare, and community development',
//     icon: <FaGraduationCap className="text-primary" />,
//     color: 'bg-primary/5 border-primary/20',
//     subServices: [
//       {
//         id: 'education-program',
//         title: 'Education Program',
//         description: 'Comprehensive educational initiatives for all age groups'
//       },
//       {
//         id: 'education-poor',
//         title: 'Education Program for the Poor',
//         description: 'Special educational support for underprivileged communities'
//       },
//       {
//         id: 'elderly-care',
//         title: 'Elderly Care and Protection',
//         description: 'Support and protection services for senior citizens'
//       },
//       {
//         id: 'sports-clubs',
//         title: 'Sports Clubs Operational Program',
//         description: 'Development and management of community sports facilities'
//       }
//     ]
//   },
//   {
//     id: 'infrastructure-development',
//     title: 'Infrastructure & Development',
//     description: 'Urban and rural infrastructure development projects',
//     icon: <FaHardHat className="text-primary" />,
//     color: 'bg-primary/5 border-primary/20',
//     subServices: [
//       {
//         id: 'road-renovation',
//         title: 'Road Renovation',
//         description: 'Maintenance and improvement of road infrastructure'
//       },
//       {
//         id: 'street-light-renovation',
//         title: 'Street Light Renovation',
//         description: 'Upgrading and maintaining public lighting systems'
//       },
//       {
//         id: 'ponds-development',
//         title: 'Construction/Development of Ponds',
//         description: 'Water conservation and pond development projects'
//       },
//       {
//         id: 'parking-fee',
//         title: 'Three-Wheeler Parking Fee Development Program',
//         description: 'Parking management and fee structure development'
//       },
//       {
//         id: 'fisheries-development',
//         title: 'Fisheries/Marine Development Activities',
//         description: 'Support for fisheries and marine resource development'
//       },
//       {
//         id: 'livestock-development',
//         title: 'Livestock Development Program',
//         description: 'Animal husbandry and livestock management programs'
//       },
//       {
//         id: 'temple-contribution',
//         title: 'Temple Contribution Renovation',
//         description: 'Restoration and maintenance of religious sites'
//       },
//       {
//         id: 'hospital-maintenance',
//         title: 'Public Hospital Maintenance',
//         description: 'Healthcare facility maintenance and improvement'
//       }
//     ]
//   },
//   {
//     id: 'safety-protection',
//     title: 'Safety & Protection',
//     description: 'Community safety and protection services',
//     icon: <FaShieldAlt className="text-primary" />,
//     color: 'bg-primary/5 border-primary/20',
//     subServices: [
//       {
//         id: 'alcohol-prohibition',
//         title: 'Alcohol Prohibition',
//         description: 'Initiatives to control and prohibit alcohol consumption'
//       },
//       {
//         id: 'womens-safety',
//         title: 'Women\'s Safety',
//         description: 'Programs ensuring safety and empowerment of women'
//       },
//       {
//         id: 'child-safety',
//         title: 'Child Safety',
//         description: 'Child protection and safety initiatives'
//       },
//       {
//         id: 'abandoned-persons',
//         title: 'Protection of Abandoned Persons',
//         description: 'Support for abandoned and homeless individuals'
//       },
//       {
//         id: 'land-settlement',
//         title: 'Land Settlement',
//         description: 'Land dispute resolution and settlement services'
//       }
//     ]
//   },
//   {
//     id: 'health-environment',
//     title: 'Health & Environment',
//     description: 'Healthcare and environmental conservation programs',
//     icon: <FaHeartbeat className="text-primary" />,
//     color: 'bg-primary/5 border-primary/20',
//     subServices: [
//       {
//         id: 'sanitation',
//         title: 'Sanitation',
//         description: 'Public sanitation and hygiene programs'
//       },
//       {
//         id: 'mineral-prevention',
//         title: 'Mineral Resource Excavation Prevention Program',
//         description: 'Conservation of natural resources and prevention of illegal mining'
//       },
//       {
//         id: 'public-toilets',
//         title: 'Maintenance of Public Toilets',
//         description: 'Public toilet maintenance and hygiene management'
//       }
//     ]
//   }
// ];

// lib/data/services.ts
// import { FaRecycle, FaWater, FaTree, FaLightbulb } from "react-icons/fa";

// export const serviceCategories = [
//   {
//     id: "environmental-services",
//     title: "Environmental Services",
//     description:
//       "Protecting and improving the environment across Mannar through sustainable and community-driven initiatives.",
//     icon: FaTree,
//     subServices: [
//       {
//         id: "solid-waste-management",
//         title: "Solid Waste Management",
//         description:
//           "Our Solid Waste Management program ensures the efficient collection, segregation, recycling, and safe disposal of waste across all divisions. Through organized operations and public awareness, we aim to reduce pollution, promote sustainability, and maintain a clean, healthy environment for the people of Mannar.",
//         longDescription: `
// Our Solid Waste Management Program is designed to create a cleaner, healthier, and more sustainable environment for the people of Mannar. The initiative focuses on the systematic collection, segregation, transportation, recycling, and safe disposal of household, commercial, and institutional waste — reducing pollution and improving community well-being.

// We operate with a strong emphasis on environmental responsibility and community participation. Every neighborhood is encouraged to practice waste segregation at the source — separating biodegradable, recyclable, and hazardous materials. This simple act helps us minimize the amount of waste sent to landfills and enhances recycling efficiency.

// Our dedicated team ensures regular waste collection, efficient route management, and the use of eco-friendly disposal methods. Collected organic waste is converted into compost or biofertilizer, while plastics, metals, and glass are sent for recycling to reduce environmental impact. Hazardous and non-recyclable waste is handled according to approved safety standards to protect both workers and the public.

// We also conduct awareness campaigns, school workshops, and community cleanup programs to educate citizens about the importance of responsible waste disposal and sustainable living practices. Through these combined efforts, we aim to build a culture of environmental stewardship across all urban and rural divisions of Mannar.

// Our ultimate goal is to transform waste into a resource, empower citizens to act responsibly, and ensure that our region remains clean, green, and thriving for generations to come.
//   `,
//         mainImage: "/beach-main.jpg",
//         beforeImage: "/befor.jpg",
//         afterImage: "/after.jpg",
//         gallery: [
//           "/after.jpg",
//           "/beach2.jpg",
//           "/beach3.jpg",
//           "/beach4.jpg",
//           "/beach5.jpg",
//           "/beach6.jpg",
//         ],
//         type: "Public Cleaning Service",
//         authority: "Mannar Urban Council",
//         dateCreated: "2024-03-10",
//         serviceDate: "Every Monday & Thursday",
//         status: "Active",
//         location: {
//           district: "Mannar",
//           division: "Mannar Town",
//           gsDivision: "Thoddaveli",
//         },
//         contact: {
//           person: "Mr. S. Ranjan",
//           phone: "+94 77 123 4567",
//           email: "waste@mannaruc.gov.lk",
//         },
//       },
//       {
//         id: "beach-cleanup",
//         title: "Beach Cleanup Program",
//         description:
//           "Monthly coastal cleanup initiative involving local volunteers and school students.",
//         longDescription:
//           "The Beach Cleanup Program focuses on removing plastic and other waste materials from coastal areas. It promotes community awareness on marine conservation and environmental responsibility.",
//         mainImage: "/images/services/beach-main.jpg",
//         beforeImage: "/images/services/beach-before.jpg",
//         afterImage: "/images/services/beach-after.jpg",
//         gallery: [
//           "/images/services/beach1.jpg",
//           "/images/services/beach2.jpg",
//           "/images/services/beach3.jpg",
//         ],
//         type: "Environmental Awareness",
//         authority: "Mannar Environmental Unit",
//         dateCreated: "2024-01-05",
//         serviceDate: "Last Saturday of Every Month",
//         status: "Ongoing",
//         location: {
//           district: "Mannar",
//           division: "Pallimunai",
//           gsDivision: "Beachside Zone",
//         },
//         contact: {
//           person: "Ms. N. Fathima",
//           phone: "+94 76 234 7890",
//           email: "environment@mannaruc.gov.lk",
//         },
//       },
//     ],
//   },

//   {
//     id: "infrastructure",
//     title: "Infrastructure Development",
//     description:
//       "Projects aimed at improving public infrastructure and urban planning within Mannar.",
//     icon: FaLightbulb,
//     subServices: [
//       {
//         id: "street-light-maintenance",
//         title: "Street Light Maintenance",
//         description:
//           "Repair and installation of public street lights across all divisions for citizen safety.",
//         longDescription:
//           "Street light maintenance is a key service to ensure public safety and proper illumination across Mannar. Our teams conduct monthly checks and attend to any reported light failures promptly.",
//         mainImage: "/images/services/light-main.jpg",
//         beforeImage: "/images/services/light-before.jpg",
//         afterImage: "/images/services/light-after.jpg",
//         gallery: [
//           "/images/services/light1.jpg",
//           "/images/services/light2.jpg",
//           "/images/services/light3.jpg",
//         ],
//         type: "Infrastructure Maintenance",
//         authority: "Electrical Division - Mannar UC",
//         dateCreated: "2023-12-20",
//         serviceDate: "As Required",
//         status: "Active",
//         location: {
//           district: "Mannar",
//           division: "Erukkalampiddy",
//           gsDivision: "West Sector",
//         },
//         contact: {
//           person: "Mr. P. Suthakaran",
//           phone: "+94 71 998 7765",
//           email: "lights@mannaruc.gov.lk",
//         },
//       },
//     ],
//   },

//   {
//     id: "water-services",
//     title: "Water & Sanitation",
//     description:
//       "Reliable water supply and sanitation facilities ensuring health and hygiene for all residents.",
//     icon: FaWater,
//     subServices: [
//       {
//         id: "drainage-cleaning",
//         title: "Drainage Cleaning Project",
//         description:
//           "Scheduled drainage cleaning to prevent waterlogging during monsoon seasons.",
//         longDescription:
//           "This service is carried out quarterly to maintain proper flow in drainage systems, reducing mosquito breeding grounds and preventing floods.",
//         mainImage: "/images/services/drainage-main.jpg",
//         beforeImage: "/images/services/drainage-before.jpg",
//         afterImage: "/images/services/drainage-after.jpg",
//         gallery: [
//           "/images/services/drain1.jpg",
//           "/images/services/drain2.jpg",
//           "/images/services/drain3.jpg",
//         ],
//         type: "Public Sanitation Service",
//         authority: "Public Works Department",
//         dateCreated: "2024-06-15",
//         serviceDate: "Quarterly",
//         status: "Scheduled",
//         location: {
//           district: "Mannar",
//           division: "Pesalai",
//           gsDivision: "Pesalai East",
//         },
//         contact: {
//           person: "Mr. T. Jeyakumar",
//           phone: "+94 77 345 0987",
//           email: "drainage@mannaruc.gov.lk",
//         },
//       },
//     ],
//   },
// ];



import { FaRecycle, FaWater, FaTree, FaLightbulb, FaGraduationCap, FaHardHat, FaShieldAlt, FaHeartbeat } from "react-icons/fa";

export const serviceCategories = [
  {
    id: "environmental-services",
    title: "Environmental Services",
    description:
      "Protecting and improving the environment across Mannar through sustainable and community-driven initiatives.",
    icon: FaTree,
    subServices: [
      {
        id: "solid-waste-management",
        title: "Solid Waste Management",
        description:
          "Our Solid Waste Management program ensures the efficient collection, segregation, recycling, and safe disposal of waste across all divisions. Through organized operations and public awareness, we aim to reduce pollution, promote sustainability, and maintain a clean, healthy environment for the people of Mannar.",
        longDescription: `
Our Solid Waste Management Program is designed to create a cleaner, healthier, and more sustainable environment for the people of Mannar. The initiative focuses on the systematic collection, segregation, transportation, recycling, and safe disposal of household, commercial, and institutional waste — reducing pollution and improving community well-being.

We operate with a strong emphasis on environmental responsibility and community participation. Every neighborhood is encouraged to practice waste segregation at the source — separating biodegradable, recyclable, and hazardous materials. This simple act helps us minimize the amount of waste sent to landfills and enhances recycling efficiency.

Our dedicated team ensures regular waste collection, efficient route management, and the use of eco-friendly disposal methods. Collected organic waste is converted into compost or biofertilizer, while plastics, metals, and glass are sent for recycling to reduce environmental impact. Hazardous and non-recyclable waste is handled according to approved safety standards to protect both workers and the public.

We also conduct awareness campaigns, school workshops, and community cleanup programs to educate citizens about the importance of responsible waste disposal and sustainable living practices. Through these combined efforts, we aim to build a culture of environmental stewardship across all urban and rural divisions of Mannar.

Our ultimate goal is to transform waste into a resource, empower citizens to act responsibly, and ensure that our region remains clean, green, and thriving for generations to come.
  `,
        mainImage: "/beach-main.jpg",
        beforeImage: "/befor.jpg",
        afterImage: "/after.jpg",
        gallery: [
          "/after.jpg",
          "/beach2.jpg",
          "/beach3.jpg",
          "/beach4.jpg",
          "/beach5.jpg",
          "/beach6.jpg",
        ],
        type: "Public Cleaning Service",
        authority: "Mannar Urban Council",
        dateCreated: "2024-03-10",
        serviceDate: "Every Monday & Thursday",
        status: "Active",
        location: {
          district: "Mannar",
          division: "Mannar Town",
          gsDivision: "Thoddaveli",
        },
        contact: {
          person: "Mr. S. Ranjan",
          phone: "+94 77 123 4567",
          email: "waste@mannaruc.gov.lk",
        },
      },
      {
        id: "beach-cleanup",
        title: "Beach Cleanup Program",
        description:
          "Monthly coastal cleanup initiative involving local volunteers and school students.",
        longDescription:
          "The Beach Cleanup Program focuses on removing plastic and other waste materials from coastal areas. It promotes community awareness on marine conservation and environmental responsibility.",
        mainImage: "/beach-main.jpg",
        beforeImage: "/befor.jpg",
        afterImage: "/after.jpg",
        gallery: [
          "/after.jpg",
          "/beach2.jpg",
          "/beach3.jpg",
          "/beach4.jpg",
          "/beach5.jpg",
          "/beach6.jpg",
        ],
        type: "Environmental Awareness",
        authority: "Mannar Environmental Unit",
        dateCreated: "2024-01-05",
        serviceDate: "Last Saturday of Every Month",
        status: "Ongoing",
        location: {
          district: "Mannar",
          division: "Pallimunai",
          gsDivision: "Beachside Zone",
        },
        contact: {
          person: "Ms. N. Fathima",
          phone: "+94 76 234 7890",
          email: "environment@mannaruc.gov.lk",
        },
      },
    
  
      {
        id: "education-poor",
        title: "Education Program for the Poor",
        description: "Special educational support for underprivileged communities",
        longDescription: "This initiative provides targeted educational support for underprivileged communities, including scholarship programs, free tuition classes, and school supply distribution to ensure equal access to quality education.",
        mainImage: "/beach-main.jpg",
        beforeImage: "/befor.jpg",
        afterImage: "/after.jpg",
        gallery: [
          "/after.jpg",
          "/beach2.jpg",
          "/beach3.jpg",
          "/beach4.jpg",
          "/beach5.jpg",
          "/beach6.jpg",
        ],
        type: "Social Welfare Service",
        authority: "Social Services Department",
        dateCreated: "2024-02-01",
        serviceDate: "Ongoing",
        status: "Active",
        location: {
          district: "Mannar",
          division: "All Divisions",
          gsDivision: "Various",
        },
        contact: {
          person: "Mr. K. Kumar",
          phone: "+94 76 777 8888",
          email: "welfare@mannaruc.gov.lk",
        },
      },
      {
        id: "elderly-care",
        title: "Elderly Care and Protection",
        description: "Support and protection services for senior citizens",
        longDescription: "Our Elderly Care program provides comprehensive support for senior citizens including healthcare services, social activities, financial assistance, and protection from abuse and neglect.",
         mainImage: "/beach-main.jpg",
        beforeImage: "/befor.jpg",
        afterImage: "/after.jpg",
        gallery: [
          "/after.jpg",
          "/beach2.jpg",
          "/beach3.jpg",
          "/beach4.jpg",
          "/beach5.jpg",
          "/beach6.jpg",
        ],
        type: "Social Welfare Service",
        authority: "Social Services Department",
        dateCreated: "2024-01-20",
        serviceDate: "Monthly",
        status: "Active",
        location: {
          district: "Mannar",
          division: "Mannar Town",
          gsDivision: "Senior Citizen Center",
        },
        contact: {
          person: "Mrs. S. Nalliah",
          phone: "+94 75 666 7777",
          email: "elderly@mannaruc.gov.lk",
        },
      },
      {
        id: "sports-clubs",
        title: "Sports Clubs Operational Program",
        description: "Development and management of community sports facilities",
        longDescription: "This program focuses on developing and maintaining community sports facilities, organizing tournaments, and promoting physical fitness and teamwork among youth and adults across Mannar.",
        mainImage: "/beach-main.jpg",
        beforeImage: "/befor.jpg",
        afterImage: "/after.jpg",
        gallery: [
          "/after.jpg",
          "/beach2.jpg",
          "/beach3.jpg",
          "/beach4.jpg",
          "/beach5.jpg",
          "/beach6.jpg",
        ],
        type: "Community Development",
        authority: "Sports Development Authority",
        dateCreated: "2024-03-01",
        serviceDate: "Weekly",
        status: "Active",
        location: {
          district: "Mannar",
          division: "All Divisions",
          gsDivision: "Various Sports Grounds",
        },
        contact: {
          person: "Mr. A. Fernando",
          phone: "+94 74 555 6666",
          email: "sports@mannaruc.gov.lk",
        },
      }
    ],
  },
  {
    id: "infrastructure-development",
    title: "Infrastructure & Development",
    description: "Urban and rural infrastructure development projects",
    icon: FaHardHat,
    color: "bg-primary/5 border-primary/20",
    subServices: [
      {
        id: "road-renovation",
        title: "Road Renovation",
        description: "Maintenance and improvement of road infrastructure",
        longDescription: "Comprehensive road maintenance and improvement program including asphalt laying, pothole repairs, and drainage system upgrades to ensure safe and efficient transportation across Mannar.",
        mainImage: "/beach-main.jpg",
        beforeImage: "/befor.jpg",
        afterImage: "/after.jpg",
        gallery: [
          "/after.jpg",
          "/beach2.jpg",
          "/beach3.jpg",
          "/beach4.jpg",
          "/beach5.jpg",
          "/beach6.jpg",
        ],
        type: "Infrastructure Maintenance",
        authority: "Public Works Department",
        dateCreated: "2024-02-15",
        serviceDate: "As Required",
        status: "Active",
        location: {
          district: "Mannar",
          division: "All Divisions",
          gsDivision: "Various",
        },
        contact: {
          person: "Mr. R. Manoharan",
          phone: "+94 77 444 5555",
          email: "roads@mannaruc.gov.lk",
        },
      },
      {
        id: "street-light-renovation",
        title: "Street Light Renovation",
        description: "Upgrading and maintaining public lighting systems",
        longDescription: "Systematic upgrade and maintenance of public street lighting infrastructure including installation of energy-efficient LED lights and smart lighting systems for enhanced public safety.",
        mainImage: "/beach-main.jpg",
        beforeImage: "/befor.jpg",
        afterImage: "/after.jpg",
        gallery: [
          "/after.jpg",
          "/beach2.jpg",
          "/beach3.jpg",
          "/beach4.jpg",
          "/beach5.jpg",
          "/beach6.jpg",
        ],
        type: "Infrastructure Upgrade",
        authority: "Electrical Division - Mannar UC",
        dateCreated: "2024-03-01",
        serviceDate: "Phased Implementation",
        status: "In Progress",
        location: {
          district: "Mannar",
          division: "Mannar Town",
          gsDivision: "Central Business District",
        },
        contact: {
          person: "Mr. P. Suthakaran",
          phone: "+94 71 998 7765",
          email: "lights@mannaruc.gov.lk",
        },
      },
      {
        id: "ponds-development",
        title: "Construction/Development of Ponds",
        description: "Water conservation and pond development projects",
        longDescription: "Sustainable water conservation through construction and rehabilitation of ponds, improving water availability for agriculture and domestic use while enhancing local ecosystems.",
         mainImage: "/beach-main.jpg",
        beforeImage: "/befor.jpg",
        afterImage: "/after.jpg",
        gallery: [
          "/after.jpg",
          "/beach2.jpg",
          "/beach3.jpg",
          "/beach4.jpg",
          "/beach5.jpg",
          "/beach6.jpg",
        ],
        type: "Water Conservation",
        authority: "Irrigation Department",
        dateCreated: "2024-01-10",
        serviceDate: "Project-based",
        status: "Active",
        location: {
          district: "Mannar",
          division: "Rural Areas",
          gsDivision: "Agricultural Zones",
        },
        contact: {
          person: "Mr. T. Jeyakumar",
          phone: "+94 77 345 0987",
          email: "water@mannaruc.gov.lk",
        },
      },
      {
        id: "parking-fee",
        title: "Three-Wheeler Parking Fee Development Program",
        description: "Parking management and fee structure development",
        longDescription: "Development of organized parking systems for three-wheelers with regulated fee structures to reduce traffic congestion and generate municipal revenue.",
         mainImage: "/beach-main.jpg",
        beforeImage: "/befor.jpg",
        afterImage: "/after.jpg",
        gallery: [
          "/after.jpg",
          "/beach2.jpg",
          "/beach3.jpg",
          "/beach4.jpg",
          "/beach5.jpg",
          "/beach6.jpg",
        ],
        type: "Urban Management",
        authority: "Mannar Urban Council",
        dateCreated: "2024-04-01",
        serviceDate: "Daily",
        status: "Active",
        location: {
          district: "Mannar",
          division: "Mannar Town",
          gsDivision: "Commercial Areas",
        },
        contact: {
          person: "Mr. S. Ranjan",
          phone: "+94 77 123 4567",
          email: "parking@mannaruc.gov.lk",
        },
      },
      {
        id: "fisheries-development",
        title: "Fisheries/Marine Development Activities",
        description: "Support for fisheries and marine resource development",
        longDescription: "Comprehensive support program for local fishermen including harbor maintenance, boat repair facilities, cold storage development, and sustainable fishing practices training.",
        mainImage: "/beach-main.jpg",
        beforeImage: "/befor.jpg",
        afterImage: "/after.jpg",
        gallery: [
          "/after.jpg",
          "/beach2.jpg",
          "/beach3.jpg",
          "/beach4.jpg",
          "/beach5.jpg",
          "/beach6.jpg",
        ],
        type: "Economic Development",
        authority: "Fisheries Department",
        dateCreated: "2024-02-20",
        serviceDate: "Ongoing",
        status: "Active",
        location: {
          district: "Mannar",
          division: "Coastal Areas",
          gsDivision: "Fishing Harbors",
        },
        contact: {
          person: "Mr. M. Niyas",
          phone: "+94 76 234 5678",
          email: "fisheries@mannaruc.gov.lk",
        },
      },
      {
        id: "livestock-development",
        title: "Livestock Development Program",
        description: "Animal husbandry and livestock management programs",
        longDescription: "Support for livestock farmers through veterinary services, breeding programs, feed subsidies, and training in modern animal husbandry practices.",
        mainImage: "/beach-main.jpg",
        beforeImage: "/befor.jpg",
        afterImage: "/after.jpg",
        gallery: [
          "/after.jpg",
          "/beach2.jpg",
          "/beach3.jpg",
          "/beach4.jpg",
          "/beach5.jpg",
          "/beach6.jpg",
        ],e: "Agricultural Development",
        authority: "Animal Production Department",
        dateCreated: "2024-01-30",
        serviceDate: "Monthly",
        status: "Active",
        location: {
          district: "Mannar",
          division: "Rural Divisions",
          gsDivision: "Farming Communities",
        },
        contact: {
          person: "Dr. V. Rajendran",
          phone: "+94 75 876 5432",
          email: "livestock@mannaruc.gov.lk",
        },
      },
      {
        id: "temple-contribution",
        title: "Temple Contribution Renovation",
        description: "Restoration and maintenance of religious sites",
        longDescription: "Preservation and restoration of religious and cultural heritage sites including temples, ensuring their structural integrity and cultural significance for future generations.",
       mainImage: "/beach-main.jpg",
        beforeImage: "/befor.jpg",
        afterImage: "/after.jpg",
        gallery: [
          "/after.jpg",
          "/beach2.jpg",
          "/beach3.jpg",
          "/beach4.jpg",
          "/beach5.jpg",
          "/beach6.jpg",
        ],
        type: "Cultural Preservation",
        authority: "Cultural Affairs Department",
        dateCreated: "2024-03-15",
        serviceDate: "Project-based",
        status: "In Progress",
        location: {
          district: "Mannar",
          division: "Various",
          gsDivision: "Religious Sites",
        },
        contact: {
          person: "Mr. K. Sivarajah",
          phone: "+94 77 987 6543",
          email: "culture@mannaruc.gov.lk",
        },
      },
      {
        id: "hospital-maintenance",
        title: "Public Hospital Maintenance",
        description: "Healthcare facility maintenance and improvement",
        longDescription: "Comprehensive maintenance and upgrade program for public healthcare facilities including infrastructure repairs, equipment maintenance, and sanitation improvements.",
         mainImage: "/beach-main.jpg",
        beforeImage: "/befor.jpg",
        afterImage: "/after.jpg",
        gallery: [
          "/after.jpg",
          "/beach2.jpg",
          "/beach3.jpg",
          "/beach4.jpg",
          "/beach5.jpg",
          "/beach6.jpg",
        ],
        type: "Healthcare Infrastructure",
        authority: "Health Department",
        dateCreated: "2024-02-10",
        serviceDate: "Continuous",
        status: "Active",
        location: {
          district: "Mannar",
          division: "Mannar Town",
          gsDivision: "Mannar Hospital Complex",
        },
        contact: {
          person: "Ms. A. De Silva",
          phone: "+94 76 543 2109",
          email: "health@mannaruc.gov.lk",
        },
      }
    ],
  },
  {
    id: "safety-protection",
    title: "Safety & Protection",
    description: "Community safety and protection services",
    icon: FaShieldAlt,
    color: "bg-primary/5 border-primary/20",
    subServices: [
      {
        id: "alcohol-prohibition",
        title: "Alcohol Prohibition",
        description: "Initiatives to control and prohibit alcohol consumption",
        longDescription: "Community-based initiatives to control alcohol consumption through awareness campaigns, regulatory enforcement, and support programs for affected individuals and families.",
        mainImage: "/beach-main.jpg",
        beforeImage: "/befor.jpg",
        afterImage: "/after.jpg",
        gallery: [
          "/after.jpg",
          "/beach2.jpg",
          "/beach3.jpg",
          "/beach4.jpg",
          "/beach5.jpg",
          "/beach6.jpg",
        ],
        type: "Social Regulation",
        authority: "Mannar Urban Council",
        dateCreated: "2024-01-25",
        serviceDate: "Ongoing",
        status: "Active",
        location: {
          district: "Mannar",
          division: "All Divisions",
          gsDivision: "Various",
        },
        contact: {
          person: "Mr. R. Krishnan",
          phone: "+94 77 321 0987",
          email: "social@mannaruc.gov.lk",
        },
      },
      {
        id: "womens-safety",
        title: "Women's Safety",
        description: "Programs ensuring safety and empowerment of women",
        longDescription: "Comprehensive women's safety program including emergency helplines, self-defense training, legal aid services, and awareness campaigns against gender-based violence.",
        mainImage: "/beach-main.jpg",
        beforeImage: "/befor.jpg",
        afterImage: "/after.jpg",
        gallery: [
          "/after.jpg",
          "/beach2.jpg",
          "/beach3.jpg",
          "/beach4.jpg",
          "/beach5.jpg",
          "/beach6.jpg",
        ],
        type: "Social Protection",
        authority: "Women's Affairs Office",
        dateCreated: "2024-02-05",
        serviceDate: "24/7 Helpline",
        status: "Active",
        location: {
          district: "Mannar",
          division: "All Divisions",
          gsDivision: "Various",
        },
        contact: {
          person: "Ms. L. Niranjani",
          phone: "+94 76 890 1234",
          email: "women@mannaruc.gov.lk",
        },
      },
      {
        id: "child-safety",
        title: "Child Safety",
        description: "Child protection and safety initiatives",
        longDescription: "Child protection program focusing on prevention of abuse, educational awareness, counseling services, and rehabilitation support for vulnerable children.",
         mainImage: "/beach-main.jpg",
        beforeImage: "/befor.jpg",
        afterImage: "/after.jpg",
        gallery: [
          "/after.jpg",
          "/beach2.jpg",
          "/beach3.jpg",
          "/beach4.jpg",
          "/beach5.jpg",
          "/beach6.jpg",
        ],
        type: "Child Protection",
        authority: "Child Protection Authority",
        dateCreated: "2024-01-15",
        serviceDate: "Ongoing",
        status: "Active",
        location: {
          district: "Mannar",
          division: "All Divisions",
          gsDivision: "Various",
        },
        contact: {
          person: "Mrs. S. Karunawathi",
          phone: "+94 75 678 9012",
          email: "child@mannaruc.gov.lk",
        },
      },
      {
        id: "abandoned-persons",
        title: "Protection of Abandoned Persons",
        description: "Support for abandoned and homeless individuals",
        longDescription: "Comprehensive support system for abandoned and homeless individuals including shelter provision, rehabilitation services, skills training, and social integration programs.",
        mainImage: "/beach-main.jpg",
        beforeImage: "/befor.jpg",
        afterImage: "/after.jpg",
        gallery: [
          "/after.jpg",
          "/beach2.jpg",
          "/beach3.jpg",
          "/beach4.jpg",
          "/beach5.jpg",
          "/beach6.jpg",
        ],
        type: "Social Welfare",
        authority: "Social Services Department",
        dateCreated: "2024-03-01",
        serviceDate: "24/7 Service",
        status: "Active",
        location: {
          district: "Mannar",
          division: "Mannar Town",
          gsDivision: "Shelter Center",
        },
        contact: {
          person: "Mr. K. Premaratne",
          phone: "+94 77 456 7890",
          email: "shelter@mannaruc.gov.lk",
        },
      },
      {
        id: "land-settlement",
        title: "Land Settlement",
        description: "Land dispute resolution and settlement services",
        longDescription: "Legal and administrative support for land dispute resolution, property documentation, and settlement of land-related conflicts through mediation and legal processes.",
        mainImage: "/beach-main.jpg",
        beforeImage: "/befor.jpg",
        afterImage: "/after.jpg",
        gallery: [
          "/after.jpg",
          "/beach2.jpg",
          "/beach3.jpg",
          "/beach4.jpg",
          "/beach5.jpg",
          "/beach6.jpg",
        ],
        type: "Legal Services",
        authority: "Land Settlement Department",
        dateCreated: "2024-02-20",
        serviceDate: "Weekdays",
        status: "Active",
        location: {
          district: "Mannar",
          division: "Mannar Town",
          gsDivision: "Land Office",
        },
        contact: {
          person: "Mr. S. Wijesinghe",
          phone: "+94 76 234 8901",
          email: "land@mannaruc.gov.lk",
        },
      }
    ],
  },
  {
    id: "health-environment",
    title: "Health & Environment",
    description: "Healthcare and environmental conservation programs",
    icon: FaHeartbeat,
    color: "bg-primary/5 border-primary/20",
    subServices: [
      {
        id: "sanitation",
        title: "Sanitation",
        description: "Public sanitation and hygiene programs",
        longDescription: "Comprehensive public sanitation program including waste management, public toilet maintenance, hygiene awareness campaigns, and community clean-up initiatives.",
       mainImage: "/beach-main.jpg",
        beforeImage: "/befor.jpg",
        afterImage: "/after.jpg",
        gallery: [
          "/after.jpg",
          "/beach2.jpg",
          "/beach3.jpg",
          "/beach4.jpg",
          "/beach5.jpg",
          "/beach6.jpg",
        ],
        type: "Public Health",
        authority: "Public Health Department",
        dateCreated: "2024-01-10",
        serviceDate: "Weekly",
        status: "Active",
        location: {
          district: "Mannar",
          division: "All Divisions",
          gsDivision: "Various",
        },
        contact: {
          person: "Dr. M. Fonseka",
          phone: "+94 77 567 4321",
          email: "sanitation@mannaruc.gov.lk",
        },
      },
      {
        id: "mineral-prevention",
        title: "Mineral Resource Excavation Prevention Program",
        description: "Conservation of natural resources and prevention of illegal mining",
        longDescription: "Environmental conservation program focused on preventing illegal mineral excavation, protecting natural resources, and promoting sustainable land use practices.",
        mainImage: "/beach-main.jpg",
        beforeImage: "/befor.jpg",
        afterImage: "/after.jpg",
        gallery: [
          "/after.jpg",
          "/beach2.jpg",
          "/beach3.jpg",
          "/beach4.jpg",
          "/beach5.jpg",
          "/beach6.jpg",
        ],
        type: "Environmental Protection",
        authority: "Environmental Unit",
        dateCreated: "2024-03-05",
        serviceDate: "Monitoring 24/7",
        status: "Active",
        location: {
          district: "Mannar",
          division: "Rural Areas",
          gsDivision: "Protected Zones",
        },
        contact: {
          person: "Ms. N. Fathima",
          phone: "+94 76 234 7890",
          email: "environment@mannaruc.gov.lk",
        },
      },
      {
        id: "public-toilets",
        title: "Maintenance of Public Toilets",
        description: "Public toilet maintenance and hygiene management",
        longDescription: "Regular maintenance and cleaning program for public toilets across Mannar, ensuring hygienic facilities with proper water supply and waste disposal systems.",
        mainImage: "/beach-main.jpg",
        beforeImage: "/befor.jpg",
        afterImage: "/after.jpg",
        gallery: [
          "/after.jpg",
          "/beach2.jpg",
          "/beach3.jpg",
          "/beach4.jpg",
          "/beach5.jpg",
          "/beach6.jpg",
        ],
        type: "Public Facility Maintenance",
        authority: "Public Works Department",
        dateCreated: "2024-02-01",
        serviceDate: "Daily",
        status: "Active",
        location: {
          district: "Mannar",
          division: "All Divisions",
          gsDivision: "Public Areas",
        },
        contact: {
          person: "Mr. T. Jeyakumar",
          phone: "+94 77 345 0987",
          email: "facilities@mannaruc.gov.lk",
        },
      }
    ],
  }
];
