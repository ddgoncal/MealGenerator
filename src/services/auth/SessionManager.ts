import { User } from '../../types/auth';
import { tokenStorage } from './tokenStorage';
import { authApi } from '../../api/actions/auth.actions.ts';

export const sessionManager = {
  async initialize() {
    const token = tokenStorage.get();
    if (!token) return null;

    try {
      //const { user } = await authApi.verifyToken(token);
      const user = { id: 1, name: 'John Doe', email: 'blabla@gmail.com'};
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