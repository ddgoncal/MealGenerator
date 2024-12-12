import React from 'react';
import { Utensils, ChefHat } from 'lucide-react';
import { Generator } from './components/Generator';
import { SubscriptionButton } from './components/SubscriptionButton';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-green-50 p-2 rounded-lg">
                <Utensils className="text-green-600" size={28} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 text-transparent bg-clip-text">
                Meal Idea Generator
              </h1>
            </div>
            <SubscriptionButton />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="inline-block p-2 bg-green-50 rounded-full mb-4">
            <ChefHat className="text-green-600" size={32} />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Need inspiration for your next meal?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Get instant, creative meal ideas tailored to your preferences. 
            Subscribe to unlock personalized recipes, nutritional information, and more!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Generator />
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: 'Quick & Easy',
              description: 'Get instant meal ideas with just one click',
              icon: '🚀',
            },
            {
              title: 'Personalized',
              description: 'Recipes tailored to your dietary preferences',
              icon: '✨',
            },
            {
              title: 'Diverse Options',
              description: 'From quick snacks to gourmet dinners',
              icon: '🍳',
            },
          ].map((feature) => (
            <div key={feature.title} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="bg-white border-t mt-16">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Utensils className="text-green-600" size={20} />
              <span className="text-gray-600">© {new Date().getFullYear()} Meal Idea Generator</span>
            </div>
            <div className="flex gap-6 text-gray-500">
              <a href="#" className="hover:text-gray-900 transition-colors">Terms</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;