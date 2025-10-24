// lib/services/galleryService.ts
import apiClient from '"@/app/services/apiClient";
export interface MediaItem {
  id: string;
  title: string;
  description: string;
  image: string;
  dateLabel: string;
  dateISO: string;
  location: string;
  category: string;
  participants: string;
  likes: number;
  downloads: number;
  views: number;
  type: 'photo' | 'video';
  duration?: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Album {
  id: string;
  title: string;
  description: string;
  coverImage: string;
  mediaCount: number;
  photoCount: number;
  videoCount: number;
  dateLabel: string;
  dateISO: string;
  location: string;
  category: string;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface GalleryResponse {
  success: boolean;
  data: Album | Album[] | MediaItem | MediaItem[];
  message?: string;
  pagination?: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}

export interface GalleryFilters {
  search?: string;
  categories?: string[];
  sort?: 'latest' | 'popular' | 'name';
  page?: number;
  pageSize?: number;
}

export const galleryService = {
  // Albums endpoints
  async createAlbum(album: Omit<Album, 'id' | 'createdAt' | 'updatedAt'>): Promise<GalleryResponse> {
    try {
      const response = await apiClient.post('/albums', album);
      return response.data;
    } catch (error) {
      console.error('Error creating album:', error);
      throw error;
    }
  },

  async getAllAlbums(filters?: GalleryFilters): Promise<GalleryResponse> {
    try {
      const response = await apiClient.get('/albums', { params: filters });
      return response.data;
    } catch (error) {
      console.error('Error fetching albums:', error);
      throw error;
    }
  },

  async getAlbumById(id: string): Promise<GalleryResponse> {
    try {
      const response = await apiClient.get(`/albums/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching album with id ${id}:`, error);
      throw error;
    }
  },

  async updateAlbum(id: string, album: Partial<Omit<Album, 'id' | 'createdAt' | 'updatedAt'>>): Promise<GalleryResponse> {
    try {
      const response = await apiClient.put(`/albums/${id}`, album);
      return response.data;
    } catch (error) {
      console.error(`Error updating album with id ${id}:`, error);
      throw error;
    }
  },

  async deleteAlbum(id: string): Promise<GalleryResponse> {
    try {
      const response = await apiClient.delete(`/albums/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting album with id ${id}:`, error);
      throw error;
    }
  },

  // Media items endpoints
  async createMediaItem(media: Omit<MediaItem, 'id' | 'createdAt' | 'updatedAt'>): Promise<GalleryResponse> {
    try {
      const response = await apiClient.post('/media', media);
      return response.data;
    } catch (error) {
      console.error('Error creating media item:', error);
      throw error;
    }
  },

  async getAllMediaItems(filters?: GalleryFilters): Promise<GalleryResponse> {
    try {
      const response = await apiClient.get('/media', { params: filters });
      return response.data;
    } catch (error) {
      console.error('Error fetching media items:', error);
      throw error;
    }
  },

  async getMediaItemById(id: string): Promise<GalleryResponse> {
    try {
      const response = await apiClient.get(`/media/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching media item with id ${id}:`, error);
      throw error;
    }
  },

  async updateMediaItem(id: string, media: Partial<Omit<MediaItem, 'id' | 'createdAt' | 'updatedAt'>>): Promise<GalleryResponse> {
    try {
      const response = await apiClient.put(`/media/${id}`, media);
      return response.data;
    } catch (error) {
      console.error(`Error updating media item with id ${id}:`, error);
      throw error;
    }
  },

  async deleteMediaItem(id: string): Promise<GalleryResponse> {
    try {
      const response = await apiClient.delete(`/media/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting media item with id ${id}:`, error);
      throw error;
    }
  },

  // Album media management
  async addMediaToAlbum(albumId: string, mediaId: string): Promise<GalleryResponse> {
    try {
      const response = await apiClient.post(`/albums/${albumId}/media`, { mediaId });
      return response.data;
    } catch (error) {
      console.error(`Error adding media to album ${albumId}:`, error);
      throw error;
    }
  },

  async removeMediaFromAlbum(albumId: string, mediaId: string): Promise<GalleryResponse> {
    try {
      const response = await apiClient.delete(`/albums/${albumId}/media/${mediaId}`);
      return response.data;
    } catch (error) {
      console.error(`Error removing media from album ${albumId}:`, error);
      throw error;
    }
  },

  async getAlbumMedia(albumId: string, filters?: GalleryFilters): Promise<GalleryResponse> {
    try {
      const response = await apiClient.get(`/albums/${albumId}/media`, { params: filters });
      return response.data;
    } catch (error) {
      console.error(`Error fetching media for album ${albumId}:`, error);
      throw error;
    }
  },

  // Stats and analytics
  async getGalleryStats(): Promise<GalleryResponse> {
    try {
      const response = await apiClient.get('/gallery/stats');
      return response.data;
    } catch (error) {
      console.error('Error fetching gallery stats:', error);
      throw error;
    }
  },

  // Like/Download tracking
  async likeMediaItem(id: string): Promise<GalleryResponse> {
    try {
      const response = await apiClient.post(`/media/${id}/like`);
      return response.data;
    } catch (error) {
      console.error(`Error liking media item ${id}:`, error);
      throw error;
    }
  },

  async trackDownload(id: string): Promise<GalleryResponse> {
    try {
      const response = await apiClient.post(`/media/${id}/download`);
      return response.data;
    } catch (error) {
      console.error(`Error tracking download for media item ${id}:`, error);
      throw error;
    }
  }
};