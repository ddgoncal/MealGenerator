import React from 'react';
import { Clock } from 'lucide-react';

export const RecentMeals: React.FC = () => {
  const recentMeals = [
    { name: 'Quinoa Buddha Bowl', date: '2 days ago' },
    { name: 'Grilled Salmon', date: '3 days ago' },
    { name: 'Avocado Toast', date: '5 days ago' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Recent Meals</h2>
      <div className="space-y-4">
        {recentMeals.map((meal, index) => (
          <div key={index} className="flex items-center gap-3">
            <Clock className="text-gray-400" size={16} />
            <div>
              <div className="font-medium">{meal.name}</div>
              <div className="text-sm text-gray-600">{meal.date}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};