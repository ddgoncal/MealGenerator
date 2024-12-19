import React, { Dispatch, SetStateAction, useState, useRef, useEffect } from 'react';
import { stripePromise } from '../services/stripe/config';
import { SubscriptionPlans } from './subscription/SubscriptionPlans';
import type { SubscriptionPlan } from '../services/stripe/types';
import { paymentActions } from '../api/actions/payment.actions';

interface SubscriptionButtonProps {
  setClientSecret: Dispatch<SetStateAction<string>>;
  setIsPaymentModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const SubscriptionButton: React.FC<SubscriptionButtonProps> = ({
  setClientSecret,
  setIsPaymentModalOpen
}) => {
  const [showPlans, setShowPlans] = useState(false);
  const plansRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (plansRef.current && !plansRef.current.contains(event.target as Node)) {
        setShowPlans(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubscribe = async (plan: SubscriptionPlan) => {
    try {
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripe failed to load');
      }

      const { clientSecret: secret } = await paymentActions.createPaymentIntent({
        amount: plan.price * 100, // Convert to cents
        currency: 'eur',
      });

      setClientSecret(secret);
      setIsPaymentModalOpen(true);
      setShowPlans(false);
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to start subscription process. Please try again.');
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowPlans(!showPlans)}
        className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium 
          px-6 py-3 rounded-lg hover:from-purple-700 hover:to-blue-700 
          transition-all duration-200 shadow-lg hover:shadow-xl 
          transform hover:-translate-y-0.5"
      >
        Subscribe for More Recipes
      </button>

      {showPlans && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div
            ref={plansRef}
            className="bg-gradient-to-b from-gray-50 to-white rounded-3xl shadow-2xl 
              w-full max-w-6xl max-h-[90vh] overflow-y-auto"
          >
            <SubscriptionPlans onSelectPlan={handleSubscribe} />
          </div>
        </div>
      )}
    </div>
  );
};