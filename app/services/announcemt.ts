import apiClient from './apiClient';
import { Announcement, AnnouncementResponse, Notice, NoticeResponse } from '@/types/announcement';

export const announcementService = {
  // Announcement endpoints
  async createAnnouncement(announcement: Omit<Announcement, 'id' | 'createdAt' | 'updatedAt'>): Promise<AnnouncementResponse> {
    try {
      const response = await apiClient.post('/announcements', announcement);
      return response.data;
    } catch (error) {
      console.error('Error creating announcement:', error);
      throw error;
    }
  },

  async getAllAnnouncements(): Promise<AnnouncementResponse> {
    try {
      const response = await apiClient.get('/announcements');
      return response.data;
    } catch (error) {
      console.error('Error fetching announcements:', error);
      throw error;
    }
  },

  async getAnnouncementById(id: string): Promise<AnnouncementResponse> {
    try {
      const response = await apiClient.get(`/announcements/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching announcement with id ${id}:`, error);
      throw error;
    }
  },

  async updateAnnouncement(id: string, announcement: Partial<Omit<Announcement, 'id' | 'createdAt' | 'updatedAt'>>): Promise<AnnouncementResponse> {
    try {
      const response = await apiClient.put(`/announcements/${id}`, announcement);
      return response.data;
    } catch (error) {
      console.error(`Error updating announcement with id ${id}:`, error);
      throw error;
    }
  },

  async deleteAnnouncement(id: string): Promise<AnnouncementResponse> {
    try {
      const response = await apiClient.delete(`/announcements/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting announcement with id ${id}:`, error);
      throw error;
    }
  },

  // Notice endpoints
  async createNotice(notice: Omit<Notice, 'id' | 'createdAt' | 'updatedAt'>): Promise<NoticeResponse> {
    try {
      const response = await apiClient.post('/notices', notice);
      return response.data;
    } catch (error) {
      console.error('Error creating notice:', error);
      throw error;
    }
  },

  async getAllNotices(): Promise<NoticeResponse> {
    try {
      const response = await apiClient.get('/notices');
      return response.data;
    } catch (error) {
      console.error('Error fetching notices:', error);
      throw error;
    }
  },

  async getNoticeById(id: string): Promise<NoticeResponse> {
    try {
      const response = await apiClient.get(`/notices/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching notice with id ${id}:`, error);
      throw error;
    }
  },

  async updateNotice(id: string, notice: Partial<Omit<Notice, 'id' | 'createdAt' | 'updatedAt'>>): Promise<NoticeResponse> {
    try {
      const response = await apiClient.put(`/notices/${id}`, notice);
      return response.data;
    } catch (error) {
      console.error(`Error updating notice with id ${id}:`, error);
      throw error;
    }
  },

  async deleteNotice(id: string): Promise<NoticeResponse> {
    try {
      const response = await apiClient.delete(`/notices/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting notice with id ${id}:`, error);
      throw error;
    }
  }
};