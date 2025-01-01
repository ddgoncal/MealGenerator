import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  BookOpen,
  BrainCircuit,
  ChefHat,
  Settings,
  User,
  BookmarkIcon,
  LineChart,
  Home,
  List
} from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Stored Recipes', href: '/stored-recipes', icon: BookmarkIcon },
  { name: 'Food Tracking', href: '/food-tracking', icon: LineChart },
  { name: 'In My Fridge', href: '/fridge', icon: List },
  { name: 'Generate Meal', href: '/generate', icon: ChefHat },
  { name: 'Food Quiz', href: '/quiz', icon: BrainCircuit },
  { name: 'Blog', href: '/blog', icon: BookOpen },
];

const userLinks = [
  { name: 'Profile', href: '/profile', icon: User },
  { name: 'Settings', href: '/settings', icon: Settings },
];

export const Sidebar: React.FC = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <aside className="hidden md:flex flex-col w-64 bg-white border-r min-h-screen p-4">
      <div className="flex items-center gap-2 px-2 mb-8">
        <div className="bg-green-50 p-2 rounded-lg">
          <ChefHat className="text-green-600" size={24} />
        </div>
        <span className="font-bold text-xl">MealGen</span>
      </div>

      <nav className="flex-1 space-y-1">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
              ${isActive(item.href)
                ? 'bg-green-50 text-green-700'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
          >
            <item.icon size={20} />
            {item.name}
          </Link>
        ))}
      </nav>

      <div className="border-t pt-4 mt-4">
        {userLinks.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors
              ${isActive(item.href)
                ? 'bg-green-50 text-green-700'
                : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
          >
            <item.icon size={20} />
            {item.name}
          </Link>
        ))}
      </div>
    </aside>
  );
};