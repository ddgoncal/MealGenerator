import { z } from 'zod';

const envSchema = z.object({
  VITE_STRIPE_PUBLIC_KEY: z.string().optional().default(''),
  VITE_API_URL: z.string().optional().default('http://localhost:3000/api'),
  VITE_REPLICATE_API_TOKEN: z.string().optional().default(''),
});

// Parse environment variables with fallbacks
export const env = envSchema.parse({
  VITE_STRIPE_PUBLIC_KEY: import.meta.env.VITE_STRIPE_PUBLIC_KEY,
  VITE_API_URL: import.meta.env.VITE_API_URL,
  VITE_REPLICATE_API_TOKEN: import.meta.env.VITE_REPLICATE_API_TOKEN,
});

// Helper functions to check if specific features are configured
export const isConfigured = {
  stripe: () => Boolean(env.VITE_STRIPE_PUBLIC_KEY),
  replicate: () => Boolean(env.VITE_REPLICATE_API_TOKEN),
  api: () => Boolean(env.VITE_API_URL && env.VITE_API_URL !== 'http://localhost:3000/api'),
};