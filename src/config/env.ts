import { z } from 'zod';

const envSchema = z.object({
  VITE_STRIPE_PUBLIC_KEY: z.string().min(1),
  VITE_API_URL: z.string().url(),
  VITE_REPLICATE_API_TOKEN: z.string().optional().default(''),
});

export const env = envSchema.parse({
  VITE_STRIPE_PUBLIC_KEY: import.meta.env.VITE_STRIPE_PUBLIC_KEY,
  VITE_API_URL: import.meta.env.VITE_API_URL,
  VITE_REPLICATE_API_TOKEN: import.meta.env.VITE_REPLICATE_API_TOKEN,
});

// Helper function to check if required env vars are set
export const isConfigured = {
  stripe: () => Boolean(env.VITE_STRIPE_PUBLIC_KEY),
  replicate: () => Boolean(env.VITE_REPLICATE_API_TOKEN),
  api_url: () => Boolean(env.VITE_API_URL),
};