import { httpClient } from '../httpClient';
import { ENDPOINTS } from '../config';

export const testActions = {
  /**
   * Create a test payment
   */
  createTestPayment: async () => {
    try {
      const response = await httpClient.post(ENDPOINTS.TEST.CREATE_TEST_PAYMENT);
      return response;
    } catch (error) {
      console.error('Error creating test payment:', error);
      throw error;
    }
  },

  /**
   * Test Stripe connection
   */
  checkStripeConnection: async () => {
    try {
      const response = await httpClient.get(ENDPOINTS.TEST.CHECK_CONNECTION);
      return response;
    } catch (error) {
      console.error('Error checking Stripe connection:', error);
      throw error;
    }
  },
};