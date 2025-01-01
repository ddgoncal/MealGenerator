import React, { useState } from 'react';
import { Plus, X } from 'lucide-react';

interface IngredientsListProps {
  ingredients: string[];
  setIngredients: (ingredients: string[]) => void;
}

export const IngredientsList: React.FC<IngredientsListProps> = ({
  ingredients,
  setIngredients,
}) => {
  const [newIngredient, setNewIngredient] = useState('');

  const addIngredient = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newIngredient.trim()) return;
    
    setIngredients([...ingredients, newIngredient.trim()]);
    setNewIngredient('');
  };

  const removeIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  return (
    <div className="space-y-4">
      <form onSubmit={addIngredient} className="flex gap-2">
        <input
          type="text"
          value={newIngredient}
          onChange={(e) => setNewIngredient(e.target.value)}
          placeholder="Add ingredient..."
          className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 
            focus:border-transparent"
        />
        <button
          type="submit"
          className="p-2 bg-green-600 text-white rounded-lg hover:bg-green-700 
            transition-colors"
        >
          <Plus size={20} />
        </button>
      </form>

      <div className="flex flex-wrap gap-2">
        {ingredients.map((ingredient, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full"
          >
            <span className="text-sm">{ingredient}</span>
            <button
              onClick={() => removeIngredient(index)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={14} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};