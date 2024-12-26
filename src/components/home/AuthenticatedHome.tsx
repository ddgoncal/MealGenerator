import React from 'react';
import { useAuthContext } from '../../contexts/AuthContext';
import { RecentMeals } from './RecentMeals';
import { QuickActions } from './QuickActions';
import { UserStats } from './UserStats';
import { SavedRecipes } from './SavedRecipes';

export const AuthenticatedHome: React.FC = () => {
  const { user } = useAuthContext();

  return (
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h1 className="text-3xl font-bold mb-2">
          Welcome back, {user?.name?.split(' ')[0]}! 👋
        </h1>
        <p className="text-gray-600">
          Ready to discover your next favorite meal?
        </p>
      </div>

      {/* Quick Actions Grid */}
      <QuickActions />

      {/* Stats and Recent Activity */}
      <div className="grid md:grid-cols-2 gap-8">
        <UserStats />
        <RecentMeals />
      </div>

      {/* Saved Recipes */}
      <SavedRecipes />
    </div>
  );
};