import { env } from "../config/env";

// API configuration
const API_BASE_URL = env.VITE_API_URL || 'http://localhost:3000/api';

export const ENDPOINTS = {
  PAYMENTS: {
    CREATE_INTENT: '/payments/create-payment-intent',
    GET_STATUS: (paymentId) => `/payments/status/${paymentId}`,
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