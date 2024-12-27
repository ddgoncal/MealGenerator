import React, { Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Utensils, User, BookOpen, BrainCircuit, Menu } from 'lucide-react';
import { SubscriptionButton } from './SubscriptionButton';
import { useAuthContext } from '../contexts/AuthContext';
import { UserMenu } from './menu/UserMenu';

const NavLink: React.FC<{
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}> = ({ to, children, onClick, className }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  const baseClassName = `flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
  ${isActive
    ? 'bg-green-50 text-green-700'
    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`;

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`${baseClassName} ${className || ''}`}
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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { isAuthenticated } = useAuthContext();
  const menuRef = useRef<HTMLDivElement>(null) // Ref for the menu element

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

    // Close menu when clicked outside
    useEffect(() => {
      function handleClickOutside(event: MouseEvent) {
        if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
            setIsMobileMenuOpen(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [menuRef]);

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

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4">
            <NavLink to="/blog">
              <BookOpen size={20} />
              Blog
            </NavLink>
            <NavLink to="/quiz">
              <BrainCircuit size={20} />
              Food Quiz
            </NavLink>
            {isAuthenticated ? (
              <UserMenu/>
            ) : (
              <NavLink to="/login">
                <User size={20} />
                Login
              </NavLink>
            )}
            <SubscriptionButton setClientSecret={setClientSecret} setIsPaymentModalOpen={setIsPaymentModalOpen}/>
          </nav>

       {/* Mobile menu button */}
       <button onClick={toggleMobileMenu} className="md:hidden p-2">
            <Menu size={24} className="text-gray-600" />
          </button>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div ref={menuRef} // Attach the ref
                className={`fixed inset-0 bg-white/90 z-20 flex flex-col items-center justify-center transition-all duration-300 ease-in-out
                  ${isMobileMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
                  style={{pointerEvents: isMobileMenuOpen ? "auto" : "none"}}
                  >
                {/* Close button */}
                <button
                  onClick={toggleMobileMenu}
                  className="absolute top-4 right-4 text-gray-700 p-2"
                >
                  Close
                </button>
              <nav className="flex flex-col items-center gap-4">
                <NavLink
                  to="/blog"
                  onClick={toggleMobileMenu}
                  className="p-2 flex items-center gap-2 text-lg"
                  >
                  <BookOpen size={20} />
                  Blog
                </NavLink>
                <NavLink
                  to="/quiz"
                  onClick={toggleMobileMenu}
                  className="p-2 flex items-center gap-2 text-lg"
                  >
                  <BrainCircuit size={20} />
                  Food Quiz
                </NavLink>

                {isAuthenticated ? (
                  <UserMenu mobile onClose={() => setIsMobileMenuOpen(false)} />
                ) : (
                  <NavLink
                    to="/login"
                    onClick={toggleMobileMenu}
                    className="p-2 flex items-center gap-2 text-lg"
                  >
                    <User size={20} />
                    Login
                  </NavLink>
                )}
                  <div className='p-2'><SubscriptionButton setClientSecret={setClientSecret} setIsPaymentModalOpen={setIsPaymentModalOpen}/></div>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};