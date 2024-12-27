import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User, Settings, LogOut } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';

interface UserMenuProps {
  mobile?: boolean;
  onClose?: () => void;
}

export const UserMenu: React.FC<UserMenuProps> = ({ mobile, onClose }) => {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    if (onClose) onClose();
  };

  if (mobile) {
    return (
      <div className="flex flex-col items-center gap-2">
        <div className="text-lg font-medium">{user?.name}</div>
        <Link
          to="/settings"
          onClick={onClose}
          className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-50"
        >
          <Settings size={20} />
          Settings
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 rounded-lg text-red-600 hover:bg-red-50"
        >
          <LogOut size={20} />
          Sign Out
        </button>
      </div>
    );
  }

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-50"
      >
        <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-indigo-600" />
        </div>
        <span className="font-medium">{user?.name?.split(' ')[0]}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg py-2 border">
          <div className="px-4 py-2 border-b">
            <div className="font-medium">{user?.name}</div>
            <div className="text-sm text-gray-600">{user?.email}</div>
          </div>
          <Link
            to="/settings"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50"
          >
            <Settings size={18} />
            Settings
          </Link>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 w-full"
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};