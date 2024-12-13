import React, { useState } from 'react';
import { Utensils } from 'lucide-react';
import { SubscriptionButton } from './components/SubscriptionButton';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';

function App() {
  const [clientSecret, setClientSecret] = useState('');
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  return (
    <Router>
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
              <SubscriptionButton setClientSecret={setClientSecret} setIsPaymentModalOpen={setIsPaymentModalOpen}/>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto px-4 py-12">
          <Routes>
            <Route path="/" element={
              <HomePage
                setClientSecret={setClientSecret}  
                setIsPaymentModalOpen={setIsPaymentModalOpen}
                isPaymentModalOpen={isPaymentModalOpen}
                />
              }
              />
          </Routes>
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
    </Router>
  );
}

export default App;