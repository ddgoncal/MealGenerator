import { env } from "../config/env";

// API configuration
const API_BASE_URL = env.VITE_API_URL || 'http://localhost:3000/api';

export const ENDPOINTS = {
  GENERATOR:{
    MEAL_GENERATE: 'generator/generate-text',
  },
  PAYMENTS: {
    CREATE_INTENT: '/payments/create-payment-intent',
    GET_STATUS: (paymentId) => `/payments/status/${paymentId}`,
  },
  AUTH: {
    LOGIN: '/auth/login',
    GOOGLE_LOGIN: '/auth/google-login',
    REGISTER: '/auth/register',
    VERIFY_TOKEN: '/auth/verify-token',
  },
  TEST: {
    CREATE_TEST_PAYMENT: '/test/create-test-payment',
    CHECK_CONNECTION: '/test/stripe-connection',
  }
};

export const API_CONFIG = {
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
};