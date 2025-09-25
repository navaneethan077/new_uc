export interface SubService {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode; // Changed from string to React.ReactNode
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode; // Changed from string to React.ReactNode
  color: string;
  subServices: SubService[];
}

export type ServiceCategories = ServiceCategory[];