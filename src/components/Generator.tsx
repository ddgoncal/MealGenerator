import React, { useState } from 'react';
import { Shuffle } from 'lucide-react';
import { meals } from '../data/meals';
import { MealCard } from './MealCard';
import type { Meal } from '../types/meal';

export const Generator: React.FC = () => {
  const [currentMeal, setCurrentMeal] = useState<Meal | null>(null);

  const generateMeal = () => {
    const randomIndex = Math.floor(Math.random() * meals.length);
    setCurrentMeal(meals[randomIndex]);
  };

  return (
    <div className="w-full max-w-2xl mx-auto text-center">
      <button
        onClick={generateMeal}
        className="mb-8 bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto
          hover:bg-green-700 transition-colors duration-200"
      >
        <Shuffle size={20} />
        Generate Meal Idea
      </button>

      {currentMeal && (
        <div className="animate-fade-in">
          <MealCard meal={currentMeal} />
        </div>
      )}
    </div>
  );
};