import { useEffect, useState } from 'react';
import { useStripe } from '@stripe/react-stripe-js';

const PaymentCompletion = () => {
  const stripe = useStripe();
  const [status, setStatus] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!stripe) {
      return;
    }

    // Retrieve the "payment_intent_client_secret" query parameter from the URL
    const clientSecret = new URLSearchParams(window.location.search).get(
      'payment_intent_client_secret'
    );

    if (!clientSecret) {
      return;
    }

    // Retrieve payment intent status
    stripe.retrievePaymentIntent(clientSecret).then(({ paymentIntent }) => {
      switch (paymentIntent.status) {
        case 'succeeded':
          setStatus('success');
          setMessage('Payment successful!');
          break;
        case 'processing':
          setStatus('processing');
          setMessage('Your payment is processing.');
          break;
        case 'requires_payment_method':
          setStatus('failed');
          setMessage('Your payment was not successful, please try again.');
          break;
        default:
          setStatus('failed');
          setMessage('Something went wrong.');
          break;
      }
    });
  }, [stripe]);

  return (
    <div>
      <h2>Payment Status</h2>
      {status && (
        <div className={`status ${status}`}>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default PaymentCompletion;