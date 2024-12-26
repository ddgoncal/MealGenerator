import React from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { AuthenticatedHome } from '../components/home/AuthenticatedHome';
import { PublicHome } from '../components/home/PublicHome';

interface HomePageProps {
  clientSecret: string;
  isPaymentModalOpen: boolean;
  setIsPaymentModalOpen: (isOpen: boolean) => void;
}

export const HomePage: React.FC<HomePageProps> = (props) => {
  const { isAuthenticated } = useAuthContext();

  return isAuthenticated ? <AuthenticatedHome /> : <PublicHome {...props} />;
};