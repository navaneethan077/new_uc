// // data/services.ts
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
import { FaRecycle, FaWater, FaTree, FaLightbulb } from "react-icons/fa";

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
        mainImage: "/images/services/beach-main.jpg",
        beforeImage: "/images/services/beach-before.jpg",
        afterImage: "/images/services/beach-after.jpg",
        gallery: [
          "/images/services/beach1.jpg",
          "/images/services/beach2.jpg",
          "/images/services/beach3.jpg",
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
    ],
  },

  {
    id: "infrastructure",
    title: "Infrastructure Development",
    description:
      "Projects aimed at improving public infrastructure and urban planning within Mannar.",
    icon: FaLightbulb,
    subServices: [
      {
        id: "street-light-maintenance",
        title: "Street Light Maintenance",
        description:
          "Repair and installation of public street lights across all divisions for citizen safety.",
        longDescription:
          "Street light maintenance is a key service to ensure public safety and proper illumination across Mannar. Our teams conduct monthly checks and attend to any reported light failures promptly.",
        mainImage: "/images/services/light-main.jpg",
        beforeImage: "/images/services/light-before.jpg",
        afterImage: "/images/services/light-after.jpg",
        gallery: [
          "/images/services/light1.jpg",
          "/images/services/light2.jpg",
          "/images/services/light3.jpg",
        ],
        type: "Infrastructure Maintenance",
        authority: "Electrical Division - Mannar UC",
        dateCreated: "2023-12-20",
        serviceDate: "As Required",
        status: "Active",
        location: {
          district: "Mannar",
          division: "Erukkalampiddy",
          gsDivision: "West Sector",
        },
        contact: {
          person: "Mr. P. Suthakaran",
          phone: "+94 71 998 7765",
          email: "lights@mannaruc.gov.lk",
        },
      },
    ],
  },

  {
    id: "water-services",
    title: "Water & Sanitation",
    description:
      "Reliable water supply and sanitation facilities ensuring health and hygiene for all residents.",
    icon: FaWater,
    subServices: [
      {
        id: "drainage-cleaning",
        title: "Drainage Cleaning Project",
        description:
          "Scheduled drainage cleaning to prevent waterlogging during monsoon seasons.",
        longDescription:
          "This service is carried out quarterly to maintain proper flow in drainage systems, reducing mosquito breeding grounds and preventing floods.",
        mainImage: "/images/services/drainage-main.jpg",
        beforeImage: "/images/services/drainage-before.jpg",
        afterImage: "/images/services/drainage-after.jpg",
        gallery: [
          "/images/services/drain1.jpg",
          "/images/services/drain2.jpg",
          "/images/services/drain3.jpg",
        ],
        type: "Public Sanitation Service",
        authority: "Public Works Department",
        dateCreated: "2024-06-15",
        serviceDate: "Quarterly",
        status: "Scheduled",
        location: {
          district: "Mannar",
          division: "Pesalai",
          gsDivision: "Pesalai East",
        },
        contact: {
          person: "Mr. T. Jeyakumar",
          phone: "+94 77 345 0987",
          email: "drainage@mannaruc.gov.lk",
        },
      },
    ],
  },
];
