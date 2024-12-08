import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { env } from '../config/env';

const stripePromise = loadStripe(env.VITE_STRIPE_PUBLIC_KEY);

export const SubscriptionButton: React.FC = () => {
  const handleSubscribe = async () => {
    try {
      const stripe = await stripePromise;
      if (!stripe) throw new Error('Stripe failed to load');

      // Here you would typically make an API call to your backend
      // to create a Stripe Checkout Session and redirect to it
      alert('In a real app, this would redirect to Stripe Checkout');
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <button
      onClick={handleSubscribe}
      className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium px-6 py-3 rounded-lg
        hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg
        hover:shadow-xl transform hover:-translate-y-0.5"
    >
      Subscribe for More Recipes
    </button>
  );
};