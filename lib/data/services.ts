// data/services.ts
import { ServiceCategories } from '@/lib/data/service';

export const serviceCategories: ServiceCategories = [
  {
    id: 'education-welfare',
    title: 'Education & Welfare',
    description: 'Programs focused on education, welfare, and community development',
    icon: '🎓',
    color: 'bg-blue-50 border-blue-200',
    subServices: [
      {
        id: 'education-program',
        title: 'Education Program',
        description: 'Comprehensive educational initiatives for all age groups'
      },
      {
        id: 'education-poor',
        title: 'Education Program for the Poor',
        description: 'Special educational support for underprivileged communities'
      },
      {
        id: 'elderly-care',
        title: 'Elderly Care and Protection',
        description: 'Support and protection services for senior citizens'
      },
      {
        id: 'sports-clubs',
        title: 'Sports Clubs Operational Program',
        description: 'Development and management of community sports facilities'
      }
    ]
  },
  {
    id: 'infrastructure-development',
    title: 'Infrastructure & Development',
    description: 'Urban and rural infrastructure development projects',
    icon: '🏗️',
    color: 'bg-green-50 border-green-200',
    subServices: [
      {
        id: 'road-renovation',
        title: 'Road Renovation',
        description: 'Maintenance and improvement of road infrastructure'
      },
      {
        id: 'street-light-renovation',
        title: 'Street Light Renovation',
        description: 'Upgrading and maintaining public lighting systems'
      },
      {
        id: 'ponds-development',
        title: 'Construction/Development of Ponds',
        description: 'Water conservation and pond development projects'
      },
      {
        id: 'parking-fee',
        title: 'Three-Wheeler Parking Fee Development Program',
        description: 'Parking management and fee structure development'
      },
      {
        id: 'fisheries-development',
        title: 'Fisheries/Marine Development Activities',
        description: 'Support for fisheries and marine resource development'
      },
      {
        id: 'livestock-development',
        title: 'Livestock Development Program',
        description: 'Animal husbandry and livestock management programs'
      },
      {
        id: 'temple-contribution',
        title: 'Temple Contribution Renovation',
        description: 'Restoration and maintenance of religious sites'
      },
      {
        id: 'hospital-maintenance',
        title: 'Public Hospital Maintenance',
        description: 'Healthcare facility maintenance and improvement'
      }
    ]
  },
  {
    id: 'safety-protection',
    title: 'Safety & Protection',
    description: 'Community safety and protection services',
    icon: '🛡️',
    color: 'bg-red-50 border-red-200',
    subServices: [
      {
        id: 'alcohol-prohibition',
        title: 'Alcohol Prohibition',
        description: 'Initiatives to control and prohibit alcohol consumption'
      },
      {
        id: 'womens-safety',
        title: 'Women\'s Safety',
        description: 'Programs ensuring safety and empowerment of women'
      },
      {
        id: 'child-safety',
        title: 'Child Safety',
        description: 'Child protection and safety initiatives'
      },
      {
        id: 'abandoned-persons',
        title: 'Protection of Abandoned Persons',
        description: 'Support for abandoned and homeless individuals'
      },
      {
        id: 'land-settlement',
        title: 'Land Settlement',
        description: 'Land dispute resolution and settlement services'
      }
    ]
  },
  {
    id: 'health-environment',
    title: 'Health & Environment',
    description: 'Healthcare and environmental conservation programs',
    icon: '🌿',
    color: 'bg-teal-50 border-teal-200',
    subServices: [
      {
        id: 'sanitation',
        title: 'Sanitation',
        description: 'Public sanitation and hygiene programs'
      },
      {
        id: 'mineral-prevention',
        title: 'Mineral Resource Excavation Prevention Program',
        description: 'Conservation of natural resources and prevention of illegal mining'
      },
      {
        id: 'public-toilets',
        title: 'Maintenance of Public Toilets',
        description: 'Public toilet maintenance and hygiene management'
      }
    ]
  }
];