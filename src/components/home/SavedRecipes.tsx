import React from 'react';
import { Heart } from 'lucide-react';

export const SavedRecipes: React.FC = () => {
  const savedRecipes = [
    {
      name: 'Mediterranean Quinoa Bowl',
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=500',
      category: 'Lunch'
    },
    {
      name: 'Grilled Salmon with Asparagus',
      image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=500',
      category: 'Dinner'
    },
    {
      name: 'Berry Smoothie Bowl',
      image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&q=80&w=500',
      category: 'Breakfast'
    }
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Saved Recipes</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {savedRecipes.map((recipe, index) => (
          <div key={index} className="relative group">
            <div className="aspect-[4/3] rounded-lg overflow-hidden">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg">
              <div className="absolute bottom-0 p-4">
                <div className="text-white font-medium">{recipe.name}</div>
                <div className="text-white/80 text-sm">{recipe.category}</div>
              </div>
            </div>
            <button className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <Heart className="text-red-500" size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};