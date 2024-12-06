import React from 'react';
import { Utensils } from 'lucide-react';
import { Generator } from './components/Generator';
import { SubscriptionButton } from './components/SubscriptionButton';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Utensils className="text-green-600" size={32} />
              <h1 className="text-2xl font-bold text-gray-900">Meal Idea Generator</h1>
            </div>
            <SubscriptionButton />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Need inspiration for your next meal?
          </h2>
          <p className="text-lg text-gray-600">
            Click the button below to get a random meal idea. Subscribe to unlock more recipes!
          </p>
        </div>

        <Generator />
      </main>

      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 py-6 text-center text-gray-600">
          © {new Date().getFullYear()} Meal Idea Generator. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;