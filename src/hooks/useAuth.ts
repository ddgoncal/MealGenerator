import { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import type { LoginCredentials, RegisterCredentials, User } from '../types/auth';
import { jwtDecode } from 'jwt-decode'
import { sessionManager } from '../services/auth/sessionManager';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const login = useCallback(async (credentials: LoginCredentials) => {
    try {
      setIsLoading(true);
      setError(null);
      // TODO: Implement actual login logic
      const mockUser: User = {
        id: '1',
        email: credentials.email,
        name: 'John Doe',
        provider: 'email',
      };
      setUser(mockUser);
      navigate('/');
    } catch (err) {
      setError('Invalid email or password');
    } finally {
      setIsLoading(false);
    }
  }, [navigate]);

  const register = useCallback(async (credentials: RegisterCredentials) => {
    try {
      setIsLoading(true);
      setError(null);
      // TODO: Implement actual registration logic
      const mockUser: User = {
        id: '1',
        email: credentials.email,
        name: credentials.name,
        provider: 'email',
      };
      setUser(mockUser);
      navigate('/');
    } catch (err) {
      setError('Registration failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  }, [navigate]);

  const loginWithGoogleSucess = (response) => {
    const decoded = jwtDecode(response.credential);
    const user: User = {
      id: decoded.sub as string,
      email: decoded.email as string,
      name: decoded.name as string,
      provider: 'google'
    };
    sessionManager.createSession(user, decoded.jti);
    setUser(user);
    console.log("Success:", decoded)
  }
  const loginWithGoogleFailure = (error) => {
    console.error('Google sign-in error:', error);
  }

  const loginWithFacebook = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      // TODO: Implement Facebook login
      console.log('Facebook login');
    } catch (err) {
      setError('Facebook login failed');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    sessionManager.destroySession();
    window.location.href = '/';
  }, []);

  return {
    user,
    error,
    isLoading,
    login,
    register,
    loginWithGoogleSucess,
    loginWithGoogleFailure,
    loginWithFacebook,
    logout,
  };
};