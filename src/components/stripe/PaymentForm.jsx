import { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { env, isConfigured } from '../../config/env';
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const stripe = isConfigured.stripe() ? loadStripe(env.VITE_STRIPE_PUBLIC_KEY) : null;

// Checkout Form Component
const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [errorMessage, setErrorMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    // Confirm the payment
    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/payment-completion`,
      },
    });

    if (error) {
      setErrorMessage(error.message);
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <button disabled={!stripe || isProcessing}>
        {isProcessing ? 'Processing...' : 'Pay now'}
      </button>
      {errorMessage && <div className="error">{errorMessage}</div>}
    </form>
  );
};

// Payment Form Container
const PaymentForm = ({clientSecret}) => {
  return (
    <div>
      {clientSecret && (
        <Elements stripe={stripe} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
};

export default PaymentForm;