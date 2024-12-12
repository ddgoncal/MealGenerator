import React from 'react';
import { Check } from 'lucide-react';
import type { SubscriptionPlan } from '../../services/stripe/types';

interface PlanCardProps {
  plan: SubscriptionPlan;
  onSelect: (plan: SubscriptionPlan) => void;
  isPopular?: boolean;
}

export const PlanCard: React.FC<PlanCardProps> = ({ plan, onSelect, isPopular }) => {
  return (
    <div className={`relative bg-white rounded-lg shadow-lg p-6 flex flex-col
      ${isPopular ? 'border-2 border-purple-500' : 'border border-gray-200'}`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm">
            Most Popular
          </span>
        </div>
      )}
      
      <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
      <p className="text-gray-600 mb-4">{plan.description}</p>
      
      <div className="mb-6">
        <span className="text-3xl font-bold">${plan.price}</span>
        <span className="text-gray-600">/{plan.interval}</span>
      </div>
      
      <ul className="space-y-3 mb-8 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check className="text-green-500" size={20} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      <button
        onClick={() => onSelect(plan)}
        className={`w-full py-2 px-4 rounded-lg font-medium transition-colors
          ${isPopular 
            ? 'bg-purple-600 text-white hover:bg-purple-700' 
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
      >
        Select Plan
      </button>
    </div>
  );
}