// types/service.ts
export interface SubService {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
  subServices: SubService[];
}

export type ServiceCategories = ServiceCategory[];