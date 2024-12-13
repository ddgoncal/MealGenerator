import React, { Dispatch, SetStateAction, useState } from 'react';
import { stripePromise } from '../services/stripe/config';
import { SubscriptionPlans } from './subscription/SubscriptionPlans';
import type { SubscriptionPlan } from '../services/stripe/types';
import { paymentActions } from '../api/actions/payment.actions';

// Define the prop types for your component
interface SubscriptionButtonProps {
  setClientSecret: Dispatch<SetStateAction<string>>;
  setIsPaymentModalOpen : Dispatch<SetStateAction<boolean>>;
}

export const SubscriptionButton: React.FC<SubscriptionButtonProps> = ({setClientSecret, setIsPaymentModalOpen}) => {
  const [showPlans, setShowPlans] = useState(false);

  const handleSubscribe = async (plan: SubscriptionPlan) => {
    try {
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripe failed to load');
      }

      const { clientSecret: secret } = await paymentActions.createPaymentIntent({
        amount: plan.price, // $10.00
        currency: 'eur',
      });

      setClientSecret(secret);
      setIsPaymentModalOpen(true);

    } catch (error) {
      console.error('Error:', error);
      alert('Failed to start subscription process. Please try again.');
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowPlans(!showPlans)}
        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium px-6 py-3 rounded-lg
          hover:from-purple-700 hover:to-blue-700 transition-all duration-200 shadow-lg
          hover:shadow-xl transform hover:-translate-y-0.5"
      >
        Subscribe for More Recipes
      </button>

      {showPlans && (
        <div className="absolute right-0 mt-4 w-screen max-w-3xl transform translate-x-8">
          <div className="bg-white rounded-xl shadow-2xl p-6 border border-gray-200">
            <h2 className="text-2xl font-bold text-center mb-8">
              Choose Your Subscription Plan
            </h2>
            <SubscriptionPlans onSelectPlan={handleSubscribe} />
          </div>
        </div>
      )}
    </div>
  );
};