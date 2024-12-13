import React, { Dispatch, SetStateAction } from 'react';
import { ChefHat } from 'lucide-react';
import { Generator } from '../components/Generator';
import PaymentForm from './../components/stripe/PaymentForm';
import {PaymentModal} from './../components/stripe/PaymentModal';

// Define the prop types for your component
interface HomePageProps {
  isPaymentModalOpen: boolean;
  clientSecret: string;
  setIsPaymentModalOpen : Dispatch<SetStateAction<boolean>>;
}

export const HomePage: React.FC<HomePageProps> = ({clientSecret,isPaymentModalOpen,setIsPaymentModalOpen }) => {
  return (
    <>
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <div className="inline-block p-2 bg-green-50 rounded-full mb-4">
          <ChefHat className="text-green-600" size={32} />
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Need inspiration for your next meal?
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Get instant, creative meal ideas tailored to your preferences. 
          Subscribe to unlock personalized recipes, nutritional information, and more!
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Generator />
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        {[
          {
            title: 'Quick & Easy',
            description: 'Get instant meal ideas with just one click',
            icon: '🚀',
          },
          {
            title: 'Personalized',
            description: 'Recipes tailored to your dietary preferences',
            icon: '✨',
          },
          {
            title: 'Diverse Options',
            description: 'From quick snacks to gourmet dinners',
            icon: '🍳',
          },
        ].map((feature) => (
          <div key={feature.title} className="bg-white rounded-xl p-6 shadow-sm">
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}

        <PaymentModal
            isOpen={isPaymentModalOpen}
            onClose={() => setIsPaymentModalOpen(false)}
            amount={1000} // $10.00
            currency="usd"
            clientSecret={clientSecret}
          />
          <PaymentForm clientSecret={clientSecret}/>
      </div>
    </>
  );
};