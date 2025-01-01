import React, { useState } from 'react';
import { IngredientInput } from './IngredientInput';
import { RecipeDisplay } from './RecipeDisplay';
import { useRecipeGeneration } from '../../hooks/useRecipeGenerator';

export const FridgeRecipeGenerator: React.FC = () => {
  const [ingredients, setIngredients] = useState<string[]>([]);
  const { generateRecipe, recipe, isLoading, error } = useRecipeGeneration();

  const handleGenerateRecipe = () => {
    if (ingredients.length > 0) {
      generateRecipe(ingredients);
    }
  };

  return (
    <div className="grid md:grid-cols-2 gap-8">
      <IngredientInput
        ingredients={ingredients}
        setIngredients={setIngredients}
        onGenerate={handleGenerateRecipe}
        isLoading={isLoading}
      />
      
      <RecipeDisplay
        recipe={recipe}
        isLoading={isLoading}
        error={error}
      />
    </div>
  );
};