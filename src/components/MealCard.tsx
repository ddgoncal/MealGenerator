import React from 'react';
import { Clock, ChefHat } from 'lucide-react';
import { Meal } from '../types/meal';

interface MealCardProps {
  meal: Meal;
}

export const MealCard: React.FC<MealCardProps> = ({ meal }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105">
      <h3 className="text-xl font-semibold mb-2">{meal.name}</h3>
      <p className="text-gray-600 mb-4">{meal.description}</p>
      
      <div className="flex items-center justify-between text-sm text-gray-500">
        <div className="flex items-center gap-1">
          <Clock size={16} />
          <span>{meal.timeInMinutes} mins</span>
        </div>
        <div className="flex items-center gap-1">
          <ChefHat size={16} />
          <span className="capitalize">{meal.difficulty}</span>
        </div>
      </div>
      
      <div className="mt-4">
        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
          {meal.category}
        </span>
      </div>
    </div>
  );
};