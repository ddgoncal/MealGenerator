import React, { useState } from 'react';
import { Shuffle, Loader2 } from 'lucide-react';
import { meals } from '../data/meals';
import { MealCard } from './MealCard';
import type { Meal } from '../types/meal';
import { generateMealIdea } from '../services/llm';

export const Generator: React.FC = () => {
  const [currentMeal, setCurrentMeal] = useState<Meal | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateMeal = async () =>{
    try {
    setIsLoading(true);
    setError(null);
    const meal = await generateMealIdea();
    setCurrentMeal(meal);
    } catch (err) {
      setError('Failed to generate meal idea. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
    //const randomIndex = Math.floor(Math.random() * meals.length);
    //setCurrentMeal(meals[randomIndex]);
  };

  return (
    <div className="w-full max-w-2xl mx-auto text-center">
      <button
        onClick={generateMeal}
        className="mb-8 bg-green-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 mx-auto
          hover:bg-green-700 transition-colors duration-200"
      >
        {isLoading ? (
          <Loader2 className="animate-spin" size={20} />
        ) : (
          <Shuffle size={20} />
        )}
        Generate Meal Idea
      </button>

      {error && (
        <div className="text-red-600 mb-4">
          {error}
        </div>
      )}

      {currentMeal && (
        <div className="animate-fade-in">
          <MealCard meal={currentMeal} />
        </div>
      )}
    </div>
  );
};