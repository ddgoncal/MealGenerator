import { User } from '../../types/auth';
import { tokenStorage } from './tokenStorage';
import { authApi } from '../api/auth';

export const sessionManager = {
  async initialize() {
    const token = tokenStorage.get();
    if (!token) return null;

    try {
      const { user } = await authApi.verifyToken(token);
      return user;
    } catch (error) {
      tokenStorage.remove();
      return null;
    }
  },

  async createSession(user: User, token: string) {
    tokenStorage.set(token);
    return user;
  },

  destroySession() {
    tokenStorage.remove();
  }
};