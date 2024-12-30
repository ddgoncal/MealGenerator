import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Sidebar } from './sidebar/Sidebar';
import { useAuthContext } from '../contexts/AuthContext';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { isAuthenticated } = useAuthContext();

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <div className="flex flex-1">
        {isAuthenticated && <Sidebar />}
        <main className={`flex-1 ${isAuthenticated ? 'md:ml-64' : ''}`}>
          <div className="max-w-7xl mx-auto px-4 py-12 w-full">
            {children}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};