import React from 'react';
import { Utensils } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <Utensils className="text-green-600" size={20} />
            <span className="text-gray-600">© {new Date().getFullYear()} Meal Idea Generator</span>
          </div>
          <div className="flex gap-6 text-gray-500">
            <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};