import React from 'react';
import { Clock, Users } from 'lucide-react';
import type { Recipe } from '../../types/recipe';

interface RecipeDisplayProps {
  recipe: Recipe | null;
  isLoading: boolean;
  error: string | null;
}

export const RecipeDisplay: React.FC<RecipeDisplayProps> = ({
  recipe,
  isLoading,
  error
}) => {
  if (error) {
    return (
      <div className="bg-red-50 text-red-600 p-6 rounded-xl">
        {error}
      </div>
    );
  }

  if (!recipe && !isLoading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center min-h-[300px]">
        <p className="text-gray-500">
          Add ingredients and generate a recipe to see the results here
        </p>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-6 flex items-center justify-center min-h-[300px]">
        <div className="animate-pulse space-y-4 w-full">
          <div className="h-6 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-2">{recipe.name}</h2>
      <p className="text-gray-600 mb-4">{recipe.description}</p>

      <div className="flex gap-4 mb-6">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Clock size={16} />
          {recipe.prepTime + recipe.cookTime} mins
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Users size={16} />
          {recipe.servings} servings
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <h3 className="font-medium mb-2">Ingredients</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-1">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient.name} Quantity: {ingredient.quantity}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-medium mb-2">Instructions</h3>
          <ol className="list-decimal list-inside text-gray-600 space-y-2">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};