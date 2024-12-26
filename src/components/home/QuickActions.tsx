import React from 'react';
import { Link } from 'react-router-dom';
import { ChefHat, Book, BrainCircuit, Settings } from 'lucide-react';

const actions = [
  {
    title: 'Generate Meal',
    description: 'Get a new meal suggestion',
    icon: ChefHat,
    color: 'text-green-600',
    bgColor: 'bg-green-50',
    link: '/generate'
  },
  {
    title: 'Food Quiz',
    description: 'Update your preferences',
    icon: BrainCircuit,
    color: 'text-purple-600',
    bgColor: 'bg-purple-50',
    link: '/quiz'
  },
  {
    title: 'Recipe Blog',
    description: 'Explore new recipes',
    icon: Book,
    color: 'text-blue-600',
    bgColor: 'bg-blue-50',
    link: '/blog'
  },
  {
    title: 'Settings',
    description: 'Manage your account',
    icon: Settings,
    color: 'text-gray-600',
    bgColor: 'bg-gray-50',
    link: '/settings'
  }
];

export const QuickActions: React.FC = () => {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {actions.map((action) => (
        <Link
          key={action.title}
          to={action.link}
          className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
        >
          <div className={`${action.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
            <action.icon className={`${action.color}`} size={24} />
          </div>
          <h3 className="font-semibold mb-1">{action.title}</h3>
          <p className="text-sm text-gray-600">{action.description}</p>
        </Link>
      ))}
    </div>
  );
};