// src/api/authApi.ts
import apiClient from './apiClient';

const API_BASE = process.env.REACT_APP_API_BASE_URL;
const AuthEndpoints = {
  LOGIN: `${API_BASE}/login`,
  PROFILE: `${API_BASE}/profile`,
  // Add more endpoints here
};

export const loginUser = async (email: string, password: string) => {
  const response = await apiClient.post(AuthEndpoints.LOGIN, { email, password });
  return response.data; // always return just .data
};

// export const getUserProfile = async () => {
//   const response = await apiClient.get(AuthEndpoints.PROFILE);
//   return response.data;
// };