import React, { Dispatch, SetStateAction } from 'react';
import { ChefHat } from 'lucide-react';
import { Generator } from '../components/Generator';
import { FeaturesList } from '../components/features/FeaturesList';
import { PaymentModal } from '../components/stripe/PaymentModal';

interface HomePageProps {
  isPaymentModalOpen: boolean;
  clientSecret: string;
  setIsPaymentModalOpen: Dispatch<SetStateAction<boolean>>;
}

export const HomePage: React.FC<HomePageProps> = ({
  clientSecret,
  isPaymentModalOpen,
  setIsPaymentModalOpen
}) => {
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

      <div className="max-w-2xl mx-auto mb-20">
        <Generator />
      </div>

      <FeaturesList />

      <PaymentModal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        amount={1000}
        currency="usd"
        clientSecret={clientSecret}
      />
    </>
  );
};