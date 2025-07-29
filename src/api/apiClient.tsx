// src/api/apiClient.ts
import axios from 'axios';
// import type { AxiosRequestConfig } from 'axios';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL, // Set in .env file
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request Interceptor: Attach token
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
      };
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response Interceptor: Handle errors globally
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      console.error('Unauthorized - Redirecting to login...');
      // Optionally redirect or logout user
      // window.location.href = '/login';
    }

    return Promise.reject(error);
  }
);

export default apiClient;
