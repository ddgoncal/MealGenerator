import React from 'react';
import { PlanCard } from './PlanCard';
import type { SubscriptionPlan } from '../../services/stripe/types';

const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'price_monthly_id', // Replace with your Stripe price ID
    name: 'Monthly Plan',
    description: 'Perfect for trying out our premium features',
    price: 9,
    interval: 'month',
    features: [
      'Unlimited meal ideas',
      'Custom dietary preferences',
      'Weekly meal planning',
      'Shopping list generation'
    ]
  },
  {
    id: 'price_yearly_id', // Replace with your Stripe price ID
    name: 'Yearly Plan',
    description: 'Best value for dedicated home chefs',
    price: 99,
    interval: 'year',
    features: [
      'All Monthly Plan features',
      'Recipe scaling tools',
      'Nutritional information',
      'Priority support',
      '2 months free'
    ]
  }
];

interface SubscriptionPlansProps {
  onSelectPlan: (plan: SubscriptionPlan) => void;
}

export const SubscriptionPlans: React.FC<SubscriptionPlansProps> = ({ onSelectPlan }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {SUBSCRIPTION_PLANS.map((plan, index) => (
        <PlanCard
          key={plan.id}
          plan={plan}
          onSelect={onSelectPlan}
          isPopular={index === 1}
        />
      ))}
    </div>
  );
}