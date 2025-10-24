import apiClient from './app/servives/apiclient';
// services/noticeService.ts

export interface Notice {
    id: string;
    title: string;
    body: string;
    category: string;
    dateIssued: string;
    deadline?: string;
    issuedBy: string;
    refNo?: string;
    attachment?: string;
  }
  
  export interface NoticeFilters {
    category?: string;
    timeFilter?: TimeFilter;
    searchTerm?: string;
    page?: number;
    pageSize?: number;
  }
  
  export interface NoticesResponse {
    success: boolean;
    data: Notice | Notice[];
    message?: string;
    pagination?: {
      page: number;
      pageSize: number;
      total: number;
      totalPages: number;
    };
  }
  
  export type TimeFilter = "all" | "weekly" | "monthly" | "yearly";
  
  // Mock data for development
  const mockNotices: Notice[] = [
    {
      id: "1",
      title: "Water Supply Interruption",
      body: "There will be a temporary water supply interruption in the central area due to maintenance work. Residents are advised to store adequate water for their needs during this period.",
      category: "Public Utilities",
      dateIssued: "2024-01-15T10:00:00Z",
      deadline: "2024-01-20T18:00:00Z",
      issuedBy: "Water Department",
      refNo: "MUC/WTR/2024/001",
      attachment: "/notices/water-interruption.pdf"
    },
    {
      id: "2",
      title: "Tax Payment Deadline Extension",
      body: "The deadline for property tax payments has been extended until the end of the month. Please ensure your payments are made before the new deadline to avoid penalties.",
      category: "Taxation",
      dateIssued: "2024-01-10T09:30:00Z",
      issuedBy: "Revenue Department",
      refNo: "MUC/TAX/2024/015"
    },
    {
      id: "3",
      title: "Road Construction Notice",
      body: "Main Street will be closed for road construction from next Monday. Alternative routes have been designated. Commuters are advised to plan their journeys accordingly.",
      category: "Infrastructure",
      dateIssued: "2024-01-12T14:00:00Z",
      deadline: "2024-02-12T17:00:00Z",
      issuedBy: "Public Works Department",
      refNo: "MUC/PWD/2024/008",
      attachment: "/notices/road-construction.pdf"
    },
    {
      id: "4",
      title: "Public Health Advisory",
      body: "Due to increasing cases of seasonal flu, residents are advised to take necessary precautions and visit health centers if symptoms persist.",
      category: "Health",
      dateIssued: "2024-01-08T11:00:00Z",
      issuedBy: "Health Department",
      refNo: "MUC/HLT/2024/003"
    },
    {
      id: "5",
      title: "Community Cleanup Program",
      body: "Join the monthly community cleanup program this Saturday. Volunteers will receive certificates of appreciation.",
      category: "Community Events",
      dateIssued: "2024-01-05T08:00:00Z",
      deadline: "2024-01-13T16:00:00Z",
      issuedBy: "Community Development Department",
      refNo: "MUC/CDD/2024/005"
    }
  ];
  
  export const noticeService = {
    /**
     * Create a new notice
     */
    async createNotice(notice: Omit<Notice, 'id'>): Promise<NoticesResponse> {
      try {
        const response = await fetch('/api/notices', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(notice),
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
      } catch (error) {
        console.error('Error creating notice:', error);
        
        // Fallback to mock response in development
        if (process.env.NODE_ENV === 'development') {
          console.warn('Using mock response for createNotice');
          const newNotice: Notice = {
            ...notice,
            id: Date.now().toString()
          };
          return {
            success: true,
            data: newNotice,
            message: 'Notice created successfully'
          };
        }
        
        throw error;
      }
    },
  
    /**
     * Get all notices with optional filtering and pagination
     */
    async getAllNotices(filters?: NoticeFilters): Promise<NoticesResponse> {
      try {
        // Build query parameters
        const params = new URLSearchParams();
        if (filters?.category) params.append('category', filters.category);
        if (filters?.timeFilter && filters.timeFilter !== 'all') params.append('timeFilter', filters.timeFilter);
        if (filters?.searchTerm) params.append('search', filters.searchTerm);
        if (filters?.page) params.append('page', filters.page.toString());
        if (filters?.pageSize) params.append('pageSize', filters.pageSize.toString());
  
        const queryString = params.toString();
        const url = queryString ? `/api/notices?${queryString}` : '/api/notices';
  
        const response = await fetch(url);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
      } catch (error) {
        console.error('Error fetching notices:', error);
        
        // Fallback to mock data in development
        if (process.env.NODE_ENV === 'development') {
          console.warn('Using mock data for getAllNotices');
          return this.getMockNotices(filters);
        }
        
        throw error;
      }
    },
  
    /**
     * Get notice by ID
     */
    async getNoticeById(id: string): Promise<NoticesResponse> {
      try {
        const response = await fetch(`/api/notices/${id}`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
      } catch (error) {
        console.error(`Error fetching notice with id ${id}:`, error);
        
        // Fallback to mock data in development
        if (process.env.NODE_ENV === 'development') {
          console.warn('Using mock data for getNoticeById');
          const notice = mockNotices.find(n => n.id === id);
          return {
            success: !!notice,
            data: notice || null,
            message: notice ? 'Notice found' : 'Notice not found'
          };
        }
        
        throw error;
      }
    },
  
    /**
     * Update a notice
     */
    async updateNotice(id: string, notice: Partial<Omit<Notice, 'id'>>): Promise<NoticesResponse> {
      try {
        const response = await fetch(`/api/notices/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(notice),
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
      } catch (error) {
        console.error(`Error updating notice with id ${id}:`, error);
        
        // Fallback to mock response in development
        if (process.env.NODE_ENV === 'development') {
          console.warn('Using mock response for updateNotice');
          const existingNotice = mockNotices.find(n => n.id === id);
          const updatedNotice = existingNotice ? { ...existingNotice, ...notice } : null;
          return {
            success: !!updatedNotice,
            data: updatedNotice,
            message: updatedNotice ? 'Notice updated successfully' : 'Notice not found'
          };
        }
        
        throw error;
      }
    },
  
    /**
     * Delete a notice
     */
    async deleteNotice(id: string): Promise<NoticesResponse> {
      try {
        const response = await fetch(`/api/notices/${id}`, {
          method: 'DELETE',
        });
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
      } catch (error) {
        console.error(`Error deleting notice with id ${id}:`, error);
        
        // Fallback to mock response in development
        if (process.env.NODE_ENV === 'development') {
          console.warn('Using mock response for deleteNotice');
          const noticeExists = mockNotices.some(n => n.id === id);
          return {
            success: noticeExists,
            data: null,
            message: noticeExists ? 'Notice deleted successfully' : 'Notice not found'
          };
        }
        
        throw error;
      }
    },
  
    /**
     * Get all available categories
     */
    async getCategories(): Promise<string[]> {
      try {
        const response = await fetch('/api/notices/categories');
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const data = await response.json();
        return data.categories || [];
      } catch (error) {
        console.error('Error fetching categories:', error);
        
        // Fallback to mock categories in development
        if (process.env.NODE_ENV === 'development') {
          console.warn('Using mock categories');
          return Array.from(new Set(mockNotices.map(n => n.category)));
        }
        
        throw error;
      }
    },
  
    /**
     * Download notice attachment
     */
    async downloadAttachment(attachmentUrl: string, fileName: string): Promise<void> {
      try {
        const response = await fetch(attachmentUrl);
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Error downloading attachment:', error);
        throw error;
      }
    },
  
    /**
     * Get notices by category
     */
    async getNoticesByCategory(category: string, filters?: Omit<NoticeFilters, 'category'>): Promise<NoticesResponse> {
      return this.getAllNotices({ ...filters, category });
    },
  
    /**
     * Search notices by keyword
     */
    async searchNotices(searchTerm: string, filters?: Omit<NoticeFilters, 'searchTerm'>): Promise<NoticesResponse> {
      return this.getAllNotices({ ...filters, searchTerm });
    },
  
    /**
     * Get urgent notices (with deadlines within 3 days)
     */
    async getUrgentNotices(filters?: Omit<NoticeFilters, 'timeFilter'>): Promise<NoticesResponse> {
      try {
        const response = await this.getAllNotices(filters);
        if (response.success && Array.isArray(response.data)) {
          const now = new Date();
          const urgentNotices = response.data.filter(notice => {
            if (!notice.deadline) return false;
            const deadline = new Date(notice.deadline);
            const diffTime = deadline.getTime() - now.getTime();
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays <= 3 && diffDays >= 0;
          });
          
          return {
            ...response,
            data: urgentNotices
          };
        }
        return response;
      } catch (error) {
        console.error('Error fetching urgent notices:', error);
        throw error;
      }
    },
  
    /**
     * Mock data service for development
     */
    getMockNotices(filters?: NoticeFilters): NoticesResponse {
      let filteredNotices = [...mockNotices];
  
      // Apply time filter
      if (filters?.timeFilter && filters.timeFilter !== 'all') {
        const now = new Date();
        const limitDays = filters.timeFilter === 'weekly' ? 7 : 
                         filters.timeFilter === 'monthly' ? 30 : 365;
  
        filteredNotices = filteredNotices.filter(notice => {
          const diffDays = Math.floor(
            (now.getTime() - new Date(notice.dateIssued).getTime()) / (1000 * 60 * 60 * 24)
          );
          return diffDays <= limitDays;
        });
      }
  
      // Apply category filter
      if (filters?.category) {
        filteredNotices = filteredNotices.filter(notice => 
          notice.category === filters.category
        );
      }
  
      // Apply search filter
      if (filters?.searchTerm) {
        const searchTerm = filters.searchTerm.toLowerCase();
        filteredNotices = filteredNotices.filter(notice =>
          notice.title.toLowerCase().includes(searchTerm) ||
          notice.body.toLowerCase().includes(searchTerm) ||
          notice.category.toLowerCase().includes(searchTerm) ||
          notice.issuedBy.toLowerCase().includes(searchTerm) ||
          (notice.refNo && notice.refNo.toLowerCase().includes(searchTerm))
        );
      }
  
      // Sort by date (newest first)
      filteredNotices.sort((a, b) => 
        new Date(b.dateIssued).getTime() - new Date(a.dateIssued).getTime()
      );
  
      // Apply pagination
      const page = filters?.page || 1;
      const pageSize = filters?.pageSize || 10;
      const startIndex = (page - 1) * pageSize;
      const endIndex = startIndex + pageSize;
      const paginatedNotices = filteredNotices.slice(startIndex, endIndex);
  
      return {
        success: true,
        data: paginatedNotices,
        pagination: {
          page,
          pageSize,
          total: filteredNotices.length,
          totalPages: Math.ceil(filteredNotices.length / pageSize)
        }
      };
    }
  };
  
  // Utility functions for notice operations
  export const noticeUtils = {
    /**
     * Format notice date for display
     */
    formatNoticeDate(dateString: string, includeTime: boolean = false): string {
      const date = new Date(dateString);
      if (includeTime) {
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });
      }
      return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    },
  
    /**
     * Check if notice has expired based on deadline
     */
    isNoticeExpired(notice: Notice): boolean {
      if (!notice.deadline) return false;
      return new Date(notice.deadline) < new Date();
    },
  
    /**
     * Get days remaining until deadline
     */
    getDaysUntilDeadline(notice: Notice): number | null {
      if (!notice.deadline) return null;
      
      const now = new Date();
      const deadline = new Date(notice.deadline);
      const diffTime = deadline.getTime() - now.getTime();
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      return diffDays;
    },
  
    /**
     * Filter notices by urgency
     */
    filterUrgentNotices(notices: Notice[]): Notice[] {
      return notices.filter(notice => {
        const daysRemaining = this.getDaysUntilDeadline(notice);
        return daysRemaining !== null && daysRemaining <= 3; // 3 days or less is urgent
      });
    },
  
    /**
     * Search notices by multiple criteria
     */
    searchNotices(notices: Notice[], searchTerm: string): Notice[] {
      const term = searchTerm.toLowerCase();
      return notices.filter(notice =>
        notice.title.toLowerCase().includes(term) ||
        notice.body.toLowerCase().includes(term) ||
        notice.category.toLowerCase().includes(term) ||
        notice.issuedBy.toLowerCase().includes(term) ||
        (notice.refNo && notice.refNo.toLowerCase().includes(term))
      );
    },
  
    /**
     * Group notices by category
     */
    groupNoticesByCategory(notices: Notice[]): Record<string, Notice[]> {
      return notices.reduce((groups, notice) => {
        const category = notice.category;
        if (!groups[category]) {
          groups[category] = [];
        }
        groups[category].push(notice);
        return groups;
      }, {} as Record<string, Notice[]>);
    },
  
    /**
     * Validate notice data before creation/update
     */
    validateNotice(notice: Partial<Notice>): { isValid: boolean; errors: string[] } {
      const errors: string[] = [];
  
      if (!notice.title || notice.title.trim().length === 0) {
        errors.push('Title is required');
      }
  
      if (!notice.body || notice.body.trim().length === 0) {
        errors.push('Body is required');
      }
  
      if (!notice.category || notice.category.trim().length === 0) {
        errors.push('Category is required');
      }
  
      if (!notice.dateIssued) {
        errors.push('Date issued is required');
      }
  
      if (!notice.issuedBy || notice.issuedBy.trim().length === 0) {
        errors.push('Issued by is required');
      }
  
      if (notice.deadline && new Date(notice.deadline) < new Date(notice.dateIssued)) {
        errors.push('Deadline cannot be before date issued');
      }
  
      return {
        isValid: errors.length === 0,
        errors
      };
    }
  };
  
  // Export types for convenience
  export type { NoticeFilters, TimeFilter, NoticesResponse };
  
  export default noticeService;