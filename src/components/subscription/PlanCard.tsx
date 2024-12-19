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
    <div className={`relative bg-white rounded-2xl shadow-lg p-6 flex flex-col h-full
      ${isPopular ? 'border-2 border-purple-500 scale-105 lg:scale-110' : 'border border-gray-200'}`}>
      {/* Popular Badge */}
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      {/* Plan Header */}
      <div className="text-center mb-6 pt-4">
        <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
        <p className="text-gray-600 text-sm mb-4 h-12">{plan.description}</p>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold">${plan.price}</span>
          <span className="text-gray-600">/{plan.interval}</span>
        </div>
      </div>
      
      {/* Features List */}
      <ul className="space-y-4 mb-8 flex-grow">
        {plan.features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="mt-1">
              <Check className={`${isPopular ? 'text-purple-500' : 'text-green-500'}`} size={16} />
            </div>
            <span className="text-gray-600 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      {/* CTA Button */}
      <button
        onClick={() => onSelect(plan)}
        className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-200
          ${isPopular 
            ? 'bg-purple-600 text-white hover:bg-purple-700 hover:shadow-lg' 
            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
      >
        {isPopular ? 'Get Started' : 'Select Plan'}
      </button>
    </div>
  );
};