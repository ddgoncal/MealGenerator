import React from 'react';
import { BookmarkIcon, Search, Filter } from 'lucide-react';

interface StoredRecipe {
  id: string;
  name: string;
  image: string;
  category: string;
  savedAt: string;
  cookingTime: string;
}

const mockRecipes: StoredRecipe[] = [
  {
    id: '1',
    name: 'Mediterranean Quinoa Bowl',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=500',
    category: 'Lunch',
    savedAt: '2024-03-15',
    cookingTime: '25 mins'
  },
  {
    id: '2',
    name: 'Grilled Salmon with Asparagus',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?auto=format&fit=crop&q=80&w=500',
    category: 'Dinner',
    savedAt: '2024-03-14',
    cookingTime: '30 mins'
  },
  {
    id: '3',
    name: 'Berry Smoothie Bowl',
    image: 'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&q=80&w=500',
    category: 'Breakfast',
    savedAt: '2024-03-13',
    cookingTime: '10 mins'
  }
];

export const StoredRecipesPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <BookmarkIcon className="text-green-600" />
          Stored Recipes
        </h1>
        
        <div className="flex gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search recipes..."
              className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
          </div>
          
          <button className="flex items-center gap-2 px-4 py-2 border rounded-lg hover:bg-gray-50">
            <Filter size={20} />
            Filter
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockRecipes.map((recipe) => (
          <div key={recipe.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="aspect-video relative">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-full h-full object-cover"
              />
              <button className="absolute top-2 right-2 p-1.5 bg-white/90 rounded-full hover:bg-white">
                <BookmarkIcon className="text-green-600" size={16} />
              </button>
            </div>
            
            <div className="p-4">
              <h3 className="font-semibold mb-2">{recipe.name}</h3>
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>{recipe.category}</span>
                <span>{recipe.cookingTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};