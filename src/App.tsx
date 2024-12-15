import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuizPage } from './pages/QuizPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';

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
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:id" element={<BlogPostPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;