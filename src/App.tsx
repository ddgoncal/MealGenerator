import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuizPage } from './pages/QuizPage';

function App() {
  const [clientSecret, setClientSecret] = useState('');
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-200 to-indigo-500">
        <Header setClientSecret={setClientSecret} setIsPaymentModalOpen={setIsPaymentModalOpen}/>

        <main className="flex-grow max-w-7xl mx-auto px-4 py-12 w-full">
          <Routes>
            <Route path="/" element={
              <HomePage
                clientSecret={clientSecret}
                setIsPaymentModalOpen={setIsPaymentModalOpen}
                isPaymentModalOpen={isPaymentModalOpen}
                />
              }
              />
              <Route path="/quiz" element={<QuizPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;