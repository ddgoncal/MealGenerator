import { loadStripe } from '@stripe/stripe-js';
import { env, isConfigured } from '../../config/env';

export const stripePromise = isConfigured.stripe() 
  ? loadStripe(env.VITE_STRIPE_PUBLIC_KEY) 
  : null;

export const SUBSCRIPTION_PRICES = {
  MONTHLY: 'price_monthly_id', // Replace with your Stripe price ID
  YEARLY: 'price_yearly_id',   // Replace with your Stripe price ID
};