import React from 'react';
import { Trophy, Flame, Heart } from 'lucide-react';

export const UserStats: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Your Stats</h2>
      <div className="grid grid-cols-3 gap-4">
        <div className="text-center">
          <div className="bg-yellow-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
            <Trophy className="text-yellow-600" size={24} />
          </div>
          <div className="font-semibold">12</div>
          <div className="text-sm text-gray-600">Meals Created</div>
        </div>
        <div className="text-center">
          <div className="bg-red-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
            <Flame className="text-red-600" size={24} />
          </div>
          <div className="font-semibold">5</div>
          <div className="text-sm text-gray-600">Day Streak</div>
        </div>
        <div className="text-center">
          <div className="bg-pink-50 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
            <Heart className="text-pink-600" size={24} />
          </div>
          <div className="font-semibold">8</div>
          <div className="text-sm text-gray-600">Saved Recipes</div>
        </div>
      </div>
    </div>
  );
};