import { env, isConfigured } from '../../config/env';
import type { SubscriptionPlan } from './../stripe/types';

export async function createCheckoutSession(plan: SubscriptionPlan): Promise<string> {
  try {

    if (!isConfigured.api_url()) {
      throw new Error('Failed to create checkout session');
    }
    const response = await fetch(`${env.VITE_API_URL}/api/create-checkout-session`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ priceId: plan.id }),
    });

    if (!response.ok) {
      throw new Error('Failed to create checkout session');
    }

    const { url } = await response.json();
    return url;
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw error;
  }
}