import React from 'react';
import { PlanCard } from './PlanCard';
import type { SubscriptionPlan } from '../../services/stripe/types';

const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'price_monthly_id',
    name: 'Monthly Plan',
    description: 'Perfect for trying out our premium features',
    price: 9,
    interval: 'month',
    features: [
      'Unlimited meal ideas',
      'Custom dietary preferences',
      'Weekly meal planning',
      'Shopping list generation',
      'Email support'
    ]
  },
  {
    id: 'price_yearly_id',
    name: 'Yearly Plan',
    description: 'Best value for dedicated home chefs',
    price: 89,
    interval: 'year',
    features: [
      'All Monthly Plan features',
      'Recipe scaling tools',
      'Nutritional information',
      'Priority support',
      '2 months free',
      'Early access to new features'
    ]
  },
  {
    id: 'price_lifetime_id',
    name: 'Lifetime Access',
    description: 'One-time payment for unlimited access',
    price: 299,
    interval: 'lifetime',
    features: [
      'All Yearly Plan features',
      'Lifetime updates',
      'Premium recipe collection',
      'Personal recipe storage',
      'AI meal planning',
      'VIP support'
    ]
  }
];

interface SubscriptionPlansProps {
  onSelectPlan: (plan: SubscriptionPlan) => void;
}

export const SubscriptionPlans: React.FC<SubscriptionPlansProps> = ({ onSelectPlan }) => {
  return (
    <div className="w-full px-4 py-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
        <p className="text-gray-600">
          Select the perfect plan for your cooking journey. Upgrade or downgrade anytime.
        </p>
      </div>

      {/* Plans Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {SUBSCRIPTION_PLANS.map((plan, index) => (
            <div key={plan.id} className="flex justify-center">
              <div className="w-full max-w-md">
                <PlanCard
                  plan={plan}
                  onSelect={onSelectPlan}
                  isPopular={index === 1}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Money-back Guarantee */}
      <div className="text-center mt-12 text-sm text-gray-600">
        <p>30-day money-back guarantee • Cancel anytime • Secure payment</p>
      </div>
    </div>
  );
};