import React from 'react';
import { AuthLayout } from '../components/auth/AuthLayout';
import { RegisterForm } from '../components/auth/RegisterForm';

export const RegisterPage: React.FC = () => {
  return (
    <AuthLayout
      title="Create an account"
      subtitle="Join us to get personalized recipe recommendations"
    >
      <RegisterForm />
    </AuthLayout>
  );
};