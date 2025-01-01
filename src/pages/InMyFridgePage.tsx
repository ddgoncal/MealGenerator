import React from 'react';
import { List } from 'lucide-react';
import { FridgeRecipeGenerator } from '../components/fridge/FridgeRecipeGenerator';

export const InMyFridgePage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-3">
          <List className="text-green-600" />
          In My Fridge
        </h1>
        <p className="text-gray-600 mt-2">
          Generate recipes from ingredients you have at home. Add ingredients manually or scan them with your camera.
        </p>
      </div>

      <FridgeRecipeGenerator />
    </div>
  );
};