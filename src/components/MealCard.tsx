import React from 'react';
import { Clock, ChefHat, Tag } from 'lucide-react';
import { Meal } from '../types/meal';

interface MealCardProps {
  meal: Meal;
}

export const MealCard: React.FC<MealCardProps> = ({ meal }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-transform hover:scale-[1.02]">
      <div className="space-y-4">
        <h3 className="text-2xl font-bold text-gray-900">{meal.name}</h3>
        
        <p className="text-gray-600 leading-relaxed">{meal.description}</p>
        
        <div className="flex flex-wrap gap-4 items-center justify-center text-sm pt-4">
          <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
            <Clock size={18} className="text-gray-500" />
            <span>{meal.timeInMinutes} mins</span>
          </div>
          
          <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
            <ChefHat size={18} className="text-gray-500" />
            <span className="capitalize">{meal.difficulty}</span>
          </div>
          
          <div className="flex items-center gap-2 bg-gray-50 px-3 py-2 rounded-lg">
            <Tag size={18} className="text-gray-500" />
            <span className="capitalize">{meal.category}</span>
          </div>
        </div>
      </div>
    </div>
  );
};