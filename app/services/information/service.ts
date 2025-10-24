// lib/data/services.ts
import apiClient from './app/servives/apiclient';
export interface ServiceContact {
    person: string;
    phone: string;
    email: string;
  }
  
  export interface ServiceLocation {
    district: string;
    division: string;
    gsDivision: string;
  }
  
  export interface SubService {
    id: string;
    title: string;
    description: string;
    longDescription?: string;
    type: string;
    authority: string;
    dateCreated: string;
    serviceDate: string;
    status: 'active' | 'upcoming' | 'completed';
    mainImage: string;
    beforeImage: string;
    afterImage: string;
    gallery: string[];
    contact: ServiceContact;
    location: ServiceLocation;
  }
  
  export interface ServiceCategory {
    id: string;
    title: string;
    description: string;
    icon: string;
    color: string;
    subServices: SubService[];
  }
  
  export const serviceCategories: ServiceCategory[] = [
    {
      id: "cleanliness",
      title: "Cleanliness Services",
      description: "Waste management, street cleaning, and public sanitation services",
      icon: "🧹",
      color: "bg-green-100 border-green-200",
      subServices: [
        {
          id: "waste-collection",
          title: "Household Waste Collection",
          description: "Regular door-to-door waste collection service for residential areas",
          longDescription: "Our household waste collection service ensures proper disposal of domestic waste through scheduled collection routes. We provide segregated waste collection to promote recycling and environmental sustainability.",
          type: "Regular Service",
          authority: "Municipal Council",
          dateCreated: "2023-01-15",
          serviceDate: "Weekly - Monday & Thursday",
          status: "active",
          mainImage: "/images/services/waste-main.jpg",
          beforeImage: "/images/services/waste-before.jpg",
          afterImage: "/images/services/waste-after.jpg",
          gallery: [
            "/images/services/waste-gallery1.jpg",
            "/images/services/waste-gallery2.jpg",
            "/images/services/waste-gallery3.jpg"
          ],
          contact: {
            person: "Mr. Sanjay Perera",
            phone: "+94 11 234 5678",
            email: "waste@municipal.gov.lk"
          },
          location: {
            district: "Colombo",
            division: "Colombo Municipal",
            gsDivision: "Colombo 01"
          }
        },
        {
          id: "street-cleaning",
          title: "Street Cleaning",
          description: "Public street and road cleaning services",
          longDescription: "Comprehensive street cleaning services including sweeping, waste removal, and maintenance of public spaces. Our teams work round the clock to keep the streets clean and hygienic.",
          type: "Public Service",
          authority: "Municipal Council",
          dateCreated: "2023-02-20",
          serviceDate: "Daily - 6:00 AM to 6:00 PM",
          status: "active",
          mainImage: "/images/services/street-main.jpg",
          beforeImage: "/images/services/street-before.jpg",
          afterImage: "/images/services/street-after.jpg",
          gallery: [
            "/images/services/street-gallery1.jpg",
            "/images/services/street-gallery2.jpg"
          ],
          contact: {
            person: "Ms. Anoma Silva",
            phone: "+94 11 234 5679",
            email: "cleaning@municipal.gov.lk"
          },
          location: {
            district: "Colombo",
            division: "Colombo Municipal",
            gsDivision: "Colombo 03"
          }
        }
      ]
    },
    {
      id: "infrastructure",
      title: "Infrastructure Development",
      description: "Road construction, building maintenance, and public works",
      icon: "🏗️",
      color: "bg-blue-100 border-blue-200",
      subServices: [
        {
          id: "road-repair",
          title: "Road Repair & Maintenance",
          description: "Pothole repair and road resurfacing services",
          longDescription: "Our road maintenance team addresses road damage promptly to ensure safe transportation. Services include pothole filling, resurfacing, and regular road condition assessments.",
          type: "Maintenance Service",
          authority: "Road Development Authority",
          dateCreated: "2023-03-10",
          serviceDate: "24/7 Emergency Service",
          status: "active",
          mainImage: "/images/services/road-main.jpg",
          beforeImage: "/images/services/road-before.jpg",
          afterImage: "/images/services/road-after.jpg",
          gallery: [
            "/images/services/road-gallery1.jpg",
            "/images/services/road-gallery2.jpg",
            "/images/services/road-gallery3.jpg"
          ],
          contact: {
            person: "Eng. Kamal Fernando",
            phone: "+94 11 234 5680",
            email: "roads@municipal.gov.lk"
          },
          location: {
            district: "Colombo",
            division: "Colombo Municipal",
            gsDivision: "Colombo 05"
          }
        }
      ]
    },
    {
      id: "water-supply",
      title: "Water Supply",
      description: "Clean water distribution and pipeline maintenance",
      icon: "💧",
      color: "bg-cyan-100 border-cyan-200",
      subServices: [
        {
          id: "water-connection",
          title: "New Water Connection",
          description: "Apply for new domestic water supply connections",
          longDescription: "Get your new water connection installed with our streamlined process. We handle everything from application to installation with minimal disruption.",
          type: "Utility Service",
          authority: "National Water Board",
          dateCreated: "2023-04-05",
          serviceDate: "Monday to Friday - 8:00 AM to 4:00 PM",
          status: "active",
          mainImage: "/images/services/water-main.jpg",
          beforeImage: "/images/services/water-before.jpg",
          afterImage: "/images/services/water-after.jpg",
          gallery: [
            "/images/services/water-gallery1.jpg",
            "/images/services/water-gallery2.jpg"
          ],
          contact: {
            person: "Mrs. Nirmala Rathnayake",
            phone: "+94 11 234 5681",
            email: "water@municipal.gov.lk"
          },
          location: {
            district: "Colombo",
            division: "Colombo Municipal",
            gsDivision: "Colombo 07"
          }
        }
      ]
    },
    {
      id: "electricity",
      title: "Electricity Services",
      description: "Power supply, connections, and electrical maintenance",
      icon: "⚡",
      color: "bg-yellow-100 border-yellow-200",
      subServices: [
        {
          id: "new-connection",
          title: "New Electricity Connection",
          description: "Apply for new electricity connections for residential and commercial use",
          longDescription: "We provide efficient electricity connection services with safety as our top priority. Our certified electricians ensure proper installation and compliance with national standards.",
          type: "Utility Service",
          authority: "CEB",
          dateCreated: "2023-05-12",
          serviceDate: "Weekdays - 8:30 AM to 3:30 PM",
          status: "active",
          mainImage: "/images/services/electricity-main.jpg",
          beforeImage: "/images/services/electricity-before.jpg",
          afterImage: "/images/services/electricity-after.jpg",
          gallery: [
            "/images/services/electricity-gallery1.jpg",
            "/images/services/electricity-gallery2.jpg"
          ],
          contact: {
            person: "Mr. Rohan De Silva",
            phone: "+94 11 234 5682",
            email: "electricity@municipal.gov.lk"
          },
          location: {
            district: "Colombo",
            division: "Colombo Municipal",
            gsDivision: "Colombo 02"
          }
        }
      ]
    },
    {
      id: "healthcare",
      title: "Healthcare Services",
      description: "Public health clinics, vaccination, and medical camps",
      icon: "🏥",
      color: "bg-red-100 border-red-200",
      subServices: [
        {
          id: "health-clinic",
          title: "Public Health Clinic",
          description: "Free medical checkups and basic healthcare services",
          longDescription: "Our public health clinics provide accessible healthcare services including general checkups, vaccinations, and health education programs for the community.",
          type: "Healthcare Service",
          authority: "Ministry of Health",
          dateCreated: "2023-06-18",
          serviceDate: "Monday to Saturday - 8:00 AM to 4:00 PM",
          status: "active",
          mainImage: "/images/services/health-main.jpg",
          beforeImage: "/images/services/health-before.jpg",
          afterImage: "/images/services/health-after.jpg",
          gallery: [
            "/images/services/health-gallery1.jpg",
            "/images/services/health-gallery2.jpg"
          ],
          contact: {
            person: "Dr. Priya Weerasinghe",
            phone: "+94 11 234 5683",
            email: "health@municipal.gov.lk"
          },
          location: {
            district: "Colombo",
            division: "Colombo Municipal",
            gsDivision: "Colombo 08"
          }
        }
      ]
    },
    {
      id: "education",
      title: "Education Support",
      description: "School facilities, scholarships, and educational programs",
      icon: "📚",
      color: "bg-purple-100 border-purple-200",
      subServices: [
        {
          id: "scholarship-program",
          title: "Student Scholarship Program",
          description: "Financial assistance for deserving students",
          longDescription: "Our scholarship program supports academically talented students from low-income families. We provide financial assistance for school fees, books, and other educational expenses.",
          type: "Educational Support",
          authority: "Ministry of Education",
          dateCreated: "2023-07-22",
          serviceDate: "Annual Application - January to March",
          status: "active",
          mainImage: "/images/services/education-main.jpg",
          beforeImage: "/images/services/education-before.jpg",
          afterImage: "/images/services/education-after.jpg",
          gallery: [
            "/images/services/education-gallery1.jpg",
            "/images/services/education-gallery2.jpg"
          ],
          contact: {
            person: "Mrs. Chathuri Gunawardena",
            phone: "+94 11 234 5684",
            email: "education@municipal.gov.lk"
          },
          location: {
            district: "Colombo",
            division: "Colombo Municipal",
            gsDivision: "Colombo 06"
          }
        }
      ]
    },
    {
      id: "public-safety",
      title: "Public Safety",
      description: "Emergency services, fire safety, and public security",
      icon: "🚨",
      color: "bg-orange-100 border-orange-200",
      subServices: [
        {
          id: "fire-safety",
          title: "Fire Safety Inspection",
          description: "Building fire safety compliance inspections",
          longDescription: "Our fire safety team conducts regular inspections of commercial and residential buildings to ensure compliance with fire safety regulations and prevent fire hazards.",
          type: "Safety Service",
          authority: "Fire Department",
          dateCreated: "2023-08-30",
          serviceDate: "Scheduled Inspections",
          status: "active",
          mainImage: "/images/services/fire-main.jpg",
          beforeImage: "/images/services/fire-before.jpg",
          afterImage: "/images/services/fire-after.jpg",
          gallery: [
            "/images/services/fire-gallery1.jpg",
            "/images/services/fire-gallery2.jpg"
          ],
          contact: {
            person: "Chief Fire Officer Malaka Bandara",
            phone: "+94 11 234 5685",
            email: "firesafety@municipal.gov.lk"
          },
          location: {
            district: "Colombo",
            division: "Colombo Municipal",
            gsDivision: "Colombo 04"
          }
        }
      ]
    },
    {
      id: "recreation",
      title: "Recreation & Parks",
      description: "Public parks, playgrounds, and recreational facilities",
      icon: "🌳",
      color: "bg-emerald-100 border-emerald-200",
      subServices: [
        {
          id: "park-maintenance",
          title: "Public Park Maintenance",
          description: "Maintenance and upkeep of public parks and gardens",
          longDescription: "We maintain public parks and recreational spaces to provide clean, safe, and beautiful environments for community activities and family recreation.",
          type: "Maintenance Service",
          authority: "Parks Department",
          dateCreated: "2023-09-14",
          serviceDate: "Daily Maintenance",
          status: "active",
          mainImage: "/images/services/park-main.jpg",
          beforeImage: "/images/services/park-before.jpg",
          afterImage: "/images/services/park-after.jpg",
          gallery: [
            "/images/services/park-gallery1.jpg",
            "/images/services/park-gallery2.jpg"
          ],
          contact: {
            person: "Mr. Sunil Jayasuriya",
            phone: "+94 11 234 5686",
            email: "parks@municipal.gov.lk"
          },
          location: {
            district: "Colombo",
            division: "Colombo Municipal",
            gsDivision: "Colombo 09"
          }
        }
      ]
    }
  ];
  
  // Helper functions
  export const getCategoryById = (id: string): ServiceCategory | undefined => {
    return serviceCategories.find(category => category.id === id);
  };
  
  export const getSubService = (categoryId: string, subServiceId: string): SubService | undefined => {
    const category = getCategoryById(categoryId);
    return category?.subServices.find(subService => subService.id === subServiceId);
  };
  
  export const getAllSubServices = (): SubService[] => {
    return serviceCategories.flatMap(category => category.subServices);
  };
  
  export const getServicesByStatus = (status: SubService['status']): SubService[] => {
    return getAllSubServices().filter(service => service.status === status);
  };