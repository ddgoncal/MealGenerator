import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { HomePage } from './pages/HomePage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { QuizPage } from './pages/QuizPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { LoginPage } from './pages/LoginPage';
import PaymentCompletion from './components/stripe/PaymentCompletion';
import { RegisterPage } from './pages/RegisterPage';
import { ProfilePage } from './pages/ProfilePage';
import { SettingsPage } from './pages/SettingsPage';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { env } from './config/env';
import { Home } from 'lucide-react';

function App() {
  const [clientSecret, setClientSecret] = useState('');
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  return (
    <GoogleOAuthProvider clientId={env.VITE_REACT_APP_GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <Router>
          <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-200 to-indigo-500">
            <Header
              setClientSecret={setClientSecret}
              setIsPaymentModalOpen={setIsPaymentModalOpen}
            />

            <main className="flex-grow max-w-7xl mx-auto px-4 py-12 w-full">
              <Routes>
                <Route path="/" element={
                  <HomePage
                    clientSecret={clientSecret}
                    setIsPaymentModalOpen={setIsPaymentModalOpen}
                    isPaymentModalOpen={isPaymentModalOpen}
                  />
                } />
                <Route path="/quiz" element={
                  <ProtectedRoute>
                    <QuizPage />
                  </ProtectedRoute>
                } />
                <Route path="/auth/google/callback" element={<HomePage
                    clientSecret={clientSecret}
                    setIsPaymentModalOpen={setIsPaymentModalOpen}
                    isPaymentModalOpen={isPaymentModalOpen}
                  />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/blog/:id" element={<BlogPostPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/payment-completion" element={<PaymentCompletion />} />
                <Route path="/profile" element={
                  <ProtectedRoute>
                    <ProfilePage />
                  </ProtectedRoute>
                } />
                <Route path="/settings" element={
                  <ProtectedRoute>
                    <SettingsPage />
                  </ProtectedRoute>
                } />
              </Routes>
            </main>

            <Footer />
          </div>
        </Router>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;