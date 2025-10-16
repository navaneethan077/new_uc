export interface ComplaintFormData {
  submissionType: 'complaint' | 'request' | 'recommendation' | 'development' | 'information' | 'other';
  personalInfo: {
    name: string;
    address: string;
    phone: string;
    nic: string;
    gramaDivision: string;
  };
  serviceDetails: {
    category: string;
    specificService: string;
    location: string;
    additionalDetails: string;
  };
  confirmation: boolean;
}

export interface ServiceCategory {
  id: string;
  label: string;
  services: string[];
}
export const SERVICE_CATEGORIES = [
  {
    id: 'property',
    label: 'Property Rights & Documentation',
    services: [
      'Property title deed',
      'Property name change',
      'Land Subdivision / Land Consolidation',
      'Private land size allowed',
      'Other'
    ]
  },
  {
    id: 'building',
    label: 'Building Permits & Certificates',
    services: [
      'Building permit application',
      'Extension of time for building permit',
      'Occupancy Certificate / Establishment Certificate / Composition Certificate',
      'Road boundary certificate',
      'Certificate of Acceptance',
      'Permission to cut roads',
      'Other'
    ]
  },
  {
    id: 'environmental',
    label: 'Environmental Protection Permit',
    services: [
      'New application',
      'Renewal',
      'Other'
    ]
  },
  {
    id: 'rental',
    label: 'Renting vehicles and mechanical equipment',
    services: [
      'JCB',
      'Roller',
      'Fire extinguisher',
      'Other'
    ]
  },
  {
    id: 'water',
    label: 'Water Supply & Sanitation',
    services: [
      'Drinking water supply / water supply',
      'Liquid excretion',
      'Other'
    ]
  },
  {
    id: 'payments',
    label: 'Payments for municipal council fees',
    services: [
      'Business license',
      'Advertising permission',
      'Entertainment tax',
      'Property tax',
      'Ticket sales tax',
      'Business tax',
      'Handicraft tax',
      'Other'
    ]
  },
  {
    id: 'events',
    label: 'Events & Exhibitions',
    services: [
      'Organizing events and exhibitions',
      'Permission to use public cemetery',
      'Use of cologne',
      'Providing a menu for pet dogs',
      'Obtaining license plates for two-wheelers',
      'Rent and lease collection for municipal properties',
      'Rental of venues for public events',
      'Other'
    ]
  },
  {
    id: 'library',
    label: 'Library service',
    services: [
      'Library membership',
      'Library Membership Renewal',
      'Library book loss',
      'Conducting research in the library',
      'Getting information and communication services at the library',
      'eLibrary Facilities',
      'Other'
    ]
  },
  {
    id: 'sanitation',
    label: 'Sanitation and Public Health',
    services: [
      'There is a need',
      'Proper time interval is required',
      'Following the correct grading system',
      'Behavior of health workers',
      'Environmental protection',
      'Maintaining a green environment',
      'Dengue fever',
      'Maintenance of public toilets',
      'Other'
    ]
  },
  {
    id: 'street-lights',
    label: 'Street lights',
    services: [
      'Need for installation of new street lights',
      'Street lighting repair',
      'Other'
    ]
  },
  {
    id: 'road-maintenance',
    label: 'Municipal Council Road Maintenance',
    services: [
      'Road repair',
      'Flood drain cleaning',
      'Khans cleaning',
      'Complaint regarding the encroachment of roads',
      'Engraving / Editing of Inscription Pipes',
      'Other'
    ]
  },
  {
    id: 'other',
    label: 'Other Services',
    services: [
      'Other service not listed'
    ]
  }
];

export const SUBMISSION_TYPES = [
  { value: 'complaint', label: 'Submitting a complaint' },
  { value: 'request', label: 'Request' },
  { value: 'recommendation', label: 'Recommendation' },
  { value: 'development', label: 'Development-related request' },
  { value: 'information', label: 'Requesting further information' },
  { value: 'other', label: 'Other' }
];