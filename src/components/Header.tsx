import React, { Dispatch, SetStateAction } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Utensils, User, BookOpen, BrainCircuit } from 'lucide-react';
import { SubscriptionButton } from './SubscriptionButton';

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link
      to={to}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
        ${isActive 
          ? 'bg-green-50 text-green-700' 
          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
    >
      {children}
    </Link>
  );
};

// Define the prop types for your component
interface HeaderProps {
  setClientSecret: Dispatch<SetStateAction<string>>;
  setIsPaymentModalOpen : Dispatch<SetStateAction<boolean>>;
}

export const Header: React.FC<HeaderProps> = ({setClientSecret, setIsPaymentModalOpen}) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-green-50 p-2 rounded-lg">
                <Utensils className="text-green-600" size={28} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">
                Meal Idea Generator
              </h1>
            </Link>
          </div>

          <nav className="hidden md:flex items-center gap-4">
            <NavLink to="/blog">
              <BookOpen size={20} />
              Blog
            </NavLink>
            <NavLink to="/quiz">
              <BrainCircuit size={20} />
              Food Quiz
            </NavLink>
            <NavLink to="/login">
              <User size={20} />
              Login
            </NavLink>
            <SubscriptionButton setClientSecret={setClientSecret} setIsPaymentModalOpen={setIsPaymentModalOpen}/>
          </nav>

          {/* Mobile menu button - you can implement a mobile menu later */}
          <button className="md:hidden p-2">
            <User size={24} className="text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};