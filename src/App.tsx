import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { Layout } from './components/Layout';
import { HomePage } from './pages/HomePage';
import { QuizPage } from './pages/QuizPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ProfilePage } from './pages/ProfilePage';
import { SettingsPage } from './pages/SettingsPage';
import { StoredRecipesPage } from './pages/StoredRecipesPage';
import { FoodTrackingPage } from './pages/FoodTrackingPage';
import PaymentCompletion from './components/stripe/PaymentCompletion';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { env } from './config/env';

function App() {
  const [clientSecret, setClientSecret] = useState('');
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  return (
    <GoogleOAuthProvider clientId={env.VITE_REACT_APP_GOOGLE_CLIENT_ID}>
      <AuthProvider>
        <Router>
          <Layout>
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
              <Route path="/stored-recipes" element={
                <ProtectedRoute>
                  <StoredRecipesPage />
                </ProtectedRoute>
              } />
              <Route path="/food-tracking" element={
                <ProtectedRoute>
                  <FoodTrackingPage />
                </ProtectedRoute>
              } />
              <Route path="/auth/google/callback" element={
                <HomePage
                  clientSecret={clientSecret}
                  setIsPaymentModalOpen={setIsPaymentModalOpen}
                  isPaymentModalOpen={isPaymentModalOpen}
                />
              } />
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
          </Layout>
        </Router>
      </AuthProvider>
    </GoogleOAuthProvider>
  );
}

export default App;