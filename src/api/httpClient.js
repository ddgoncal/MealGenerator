import { API_CONFIG } from "./config";

/**
 * Centralized HTTP client for making API requests
 */
const handleResponse = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || 'An error occurred');
  }
  return response.json();
};

export const httpClient = {
  get: async (url) => {
    const response = await fetch(`${API_CONFIG.baseURL}${url}`, {
      method: 'GET',
      headers: API_CONFIG.headers,
    });
    return handleResponse(response);
  },

  post: async (url, data) => {
    const response = await fetch(`${API_CONFIG.baseURL}${url}`, {
      method: 'POST',
      headers: API_CONFIG.headers,
      body: JSON.stringify(data),
    });
    return handleResponse(response);
  },
};