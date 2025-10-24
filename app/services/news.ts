// services/newsService.ts
import apiClient from '.@/app/servives/apiclient';

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime?: string;
  image?: string;
  category?: string;
  slug: string;
  shares?: number;
  publishedAt: string;
  updatedAt: string;
  status: 'published' | 'draft';
}

export interface NewsResponse {
  success: boolean;
  data: NewsArticle | NewsArticle[];
  message?: string;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

export interface NewsFilters {
  search?: string;
  category?: string[];
  timeFilter?: 'all' | 'day' | 'week' | 'month' | 'year';
  sort?: 'latest' | 'oldest';
  page?: number;
  limit?: number;
}

export const newsService = {
  async createNews(news: Omit<NewsArticle, 'id' | 'createdAt' | 'updatedAt'>): Promise<NewsResponse> {
    try {
      const response = await apiClient.post('/news', news);
      return response.data;
    } catch (error) {
      console.error('Error creating news:', error);
      throw error;
    }
  },

  async getAllNews(filters?: NewsFilters): Promise<NewsResponse> {
    try {
      const params = new URLSearchParams();
      
      if (filters?.search) params.append('search', filters.search);
      if (filters?.category?.length) params.append('categories', filters.category.join(','));
      if (filters?.timeFilter && filters.timeFilter !== 'all') params.append('timeFilter', filters.timeFilter);
      if (filters?.sort) params.append('sort', filters.sort);
      if (filters?.page) params.append('page', filters.page.toString());
      if (filters?.limit) params.append('limit', filters.limit.toString());

      const response = await apiClient.get(`/news?${params.toString()}`);
      return response.data;
    } catch (error) {
      console.error('Error fetching news:', error);
      throw error;
    }
  },

  async getNewsBySlug(slug: string): Promise<NewsResponse> {
    try {
      const response = await apiClient.get(`/news/slug/${slug}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching news with slug ${slug}:`, error);
      throw error;
    }
  },

  async getNewsById(id: string): Promise<NewsResponse> {
    try {
      const response = await apiClient.get(`/news/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching news with id ${id}:`, error);
      throw error;
    }
  },

  async updateNews(id: string, news: Partial<NewsArticle>): Promise<NewsResponse> {
    try {
      const response = await apiClient.put(`/news/${id}`, news);
      return response.data;
    } catch (error) {
      console.error(`Error updating news with id ${id}:`, error);
      throw error;
    }
  },

  async deleteNews(id: string): Promise<NewsResponse> {
    try {
      const response = await apiClient.delete(`/news/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting news with id ${id}:`, error);
      throw error;
    }
  },

  async incrementShares(id: string): Promise<NewsResponse> {
    try {
      const response = await apiClient.patch(`/news/${id}/shares`);
      return response.data;
    } catch (error) {
      console.error(`Error incrementing shares for news ${id}:`, error);
      throw error;
    }
  }
};