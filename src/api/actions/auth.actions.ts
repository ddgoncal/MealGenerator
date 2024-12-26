import { LoginCredentials, RegisterCredentials, User } from '../../types/auth';
import { httpClient } from '../httpClient';
import { ENDPOINTS } from '../config';

export const authApi = {
  login: async (credentials: LoginCredentials) => {
    const response = await httpClient.post(ENDPOINTS.AUTH.LOGIN, credentials);
    return response.data as { user: User; token: string };
  },

  googleLogin: async (tokenId: string) => {
    const response = await httpClient.post(ENDPOINTS.AUTH.GOOGLE_LOGIN, { tokenId });
    return response.data as { user: User; token: string };
  },

  register: async (credentials: RegisterCredentials) => {
    const response = await httpClient.post(ENDPOINTS.AUTH.REGISTER, credentials);
    return response.data as { user: User; token: string };
  },

  verifyToken: async (token: string) => {
    const response = await httpClient.get(ENDPOINTS.AUTH.VERIFY_TOKEN, {
      headers: { Authorization: `Bearer ${token}` }
    });
    return response.data as { user: User };
  }
};