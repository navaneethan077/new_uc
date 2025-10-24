import axios from 'axios';

export const API_BASE_URL = 'https://inquiry-management-be-production.up.railway.app/api/v1';
//export const API_BASE_URL = 'http://localhost:5000/api/v1';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    // Ensure headers object exists
    config.headers = config.headers || {};
    
    // Set Content-Type if not already set
    if (!config.headers['Content-Type']) {
      config.headers['Content-Type'] = 'application/json';
    }

    if (token) {
      // Set Authorization header with Bearer token
      config.headers['Authorization'] = `Bearer ${token}`;
      // Set X-Admin-Auth header for admin operations
      config.headers['X-Admin-Auth'] = 'true';
    } else {
      console.warn('No authentication token found - proceeding without authentication');
    }

    // Log request details for debugging
    console.log('Request config:', {
      url: config.url,
      method: config.method,
      headers: config.headers,
      data: config.data
    });

    return config;
  },
  (error) => {
    console.error('Request interceptor error:', error);
    return Promise.reject(error);
  }
);

// Response interceptor
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Log the raw error object for debugging
    console.error('[API Response Error - Raw]', error);
    // Log the full error details
    console.error('[API Response Error]', {
      message: error?.message || 'No message',
      status: error?.response?.status || 'No status',
      data: error?.response?.data || 'No data',
      config: error.config,
      url: error.config?.url,
      baseURL: error.config?.baseURL
    });

    // Handle network errors
    if (!error.response) {
      if (error.message === 'Network Error') {
        console.error('Network Error Details:', {
          url: error.config?.url,
          baseURL: error.config?.baseURL,
          fullUrl: `${error.config?.baseURL}${error.config?.url}`
        });
        return Promise.reject(new Error('Unable to connect to the server. Please check your internet connection and try again.'));
      }
      return Promise.reject(new Error('A network error occurred. Please try again.'));
    }

    // Handle specific HTTP status codes
    if (error.response.status === 401) {
      // Clear token and user data
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      return Promise.reject(new Error('Your session has expired. Please log in again.'));
    }

    if (error.response.status === 403) {
      return Promise.reject(new Error('You don\'t have permission to perform this action.'));
    }

    if (error.response.status === 404) {
      return Promise.reject(new Error('The requested resource was not found.'));
    }

    if (error.response.status === 500) {
      return Promise.reject(new Error('Server error. Please try again later.'));
    }

    // Handle validation errors
    if (error.response.status === 400) {
      const errorMessage = error.response.data?.message || 'Invalid request data';
      console.error('Validation Error:', {
        message: errorMessage,
        data: error.response.data,
        request: error.config?.data
      });
      return Promise.reject(new Error(errorMessage));
    }

    return Promise.reject(error);
  }
);

export default apiClient;