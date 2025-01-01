import { useState } from 'react';
import type { Recipe } from '../types/recipe';

export function useRecipeGeneration() {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const generateRecipe = async (ingredients: string[]) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/generate-recipe`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ingredients }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to generate recipe');
      }

      const data = await response.json();
      setRecipe(data);
    } catch (err) {
      setError('Failed to generate recipe. Please try again.');
      console.error('Recipe generation error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  return { generateRecipe, recipe, isLoading, error };
}