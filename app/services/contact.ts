// contact.ts
import apiClient from './app/servives/apiclient';

export interface Contact {
  id: string;
  name: string;
  position: string;
  email: string;
  tel: string;
  profile: string;
  description: string;
  department?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ContactResponse {
  success: boolean;
  data: Contact | Contact[];
  message?: string;
}

export interface CreateContactData {
  name: string;
  position: string;
  email: string;
  tel: string;
  profile?: string;
  description: string;
  department?: string;
}

export interface UpdateContactData {
  name?: string;
  position?: string;
  email?: string;
  tel?: string;
  profile?: string;
  description?: string;
  department?: string;
}

export const contactService = {
  async createContact(contact: CreateContactData): Promise<ContactResponse> {
    try {
      const response = await apiClient.post('/contacts', contact);
      return response.data;
    } catch (error) {
      console.error('Error creating contact:', error);
      throw error;
    }
  },

  async getAllContacts(): Promise<ContactResponse> {
    try {
      const response = await apiClient.get('/contacts');
      return response.data;
    } catch (error) {
      console.error('Error fetching contacts:', error);
      throw error;
    }
  },

  async getContactById(id: string): Promise<ContactResponse> {
    try {
      const response = await apiClient.get(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching contact with id ${id}:`, error);
      throw error;
    }
  },

  async updateContact(id: string, contact: UpdateContactData): Promise<ContactResponse> {
    try {
      const response = await apiClient.put(`/contacts/${id}`, contact);
      return response.data;
    } catch (error) {
      console.error(`Error updating contact with id ${id}:`, error);
      throw error;
    }
  },

  async deleteContact(id: string): Promise<ContactResponse> {
    try {
      const response = await apiClient.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error deleting contact with id ${id}:`, error);
      throw error;
    }
  },

  async getContactsByDepartment(department: string): Promise<ContactResponse> {
    try {
      const response = await apiClient.get(`/contacts/department/${department}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching contacts for department ${department}:`, error);
      throw error;
    }
  }
};