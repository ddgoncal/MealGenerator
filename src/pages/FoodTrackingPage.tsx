import React from 'react';
import { LineChart, PieChart, Calendar, Plus } from 'lucide-react';

interface NutritionData {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
}

const todayNutrition: NutritionData = {
  calories: 1850,
  protein: 85,
  carbs: 220,
  fat: 65,
};

const dailyGoals: NutritionData = {
  calories: 2000,
  protein: 100,
  carbs: 250,
  fat: 70,
};

export const FoodTrackingPage: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <LineChart className="text-green-600" />
          Food Tracking
        </h1>
        
        <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
          <Plus size={20} />
          Add Meal
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Daily Summary */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">Today's Summary</h2>
          <div className="space-y-4">
            {Object.entries(todayNutrition).map(([nutrient, value]) => {
              const goal = dailyGoals[nutrient as keyof NutritionData];
              const percentage = (value / goal) * 100;
              
              return (
                <div key={nutrient} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="capitalize">{nutrient}</span>
                    <span>{value} / {goal}{nutrient === 'calories' ? 'kcal' : 'g'}</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-600 rounded-full"
                      style={{ width: `${Math.min(percentage, 100)}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Weekly Overview */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-lg font-semibold mb-4">Weekly Overview</h2>
          <div className="h-48 flex items-center justify-center text-gray-500">
            Chart placeholder
          </div>
        </div>

        {/* Recent Meals */}
        <div className="bg-white p-6 rounded-xl shadow-md md:col-span-2">
          <h2 className="text-lg font-semibold mb-4">Recent Meals</h2>
          <div className="space-y-4">
            {[
              { time: 'Breakfast', meal: 'Oatmeal with Berries', calories: 350 },
              { time: 'Lunch', meal: 'Chicken Salad', calories: 450 },
              { time: 'Snack', meal: 'Greek Yogurt', calories: 150 },
            ].map((meal, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b last:border-0">
                <div>
                  <p className="font-medium">{meal.time}</p>
                  <p className="text-sm text-gray-600">{meal.meal}</p>
                </div>
                <span className="text-sm text-gray-600">{meal.calories} kcal</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};