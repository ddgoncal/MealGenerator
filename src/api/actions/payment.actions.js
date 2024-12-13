import { httpClient } from '../httpClient';
import { ENDPOINTS } from '../config';

export const paymentActions = {
  /**
   * Create a payment intent
   * @param {Object} paymentData
   * @param {number} paymentData.amount - Amount in cents
   * @param {string} paymentData.currency - Currency code (e.g., 'usd')
   */
  createPaymentIntent: async (paymentData) => {
    try {
      const response = await httpClient.post(
        ENDPOINTS.PAYMENTS.CREATE_INTENT,
        paymentData
      );
      return response;
    } catch (error) {
      console.error('Error creating payment intent:', error);
      throw error;
    }
  },

  /**
   * Get payment status
   * @param {string} paymentId - The Stripe payment intent ID
   */
  getPaymentStatus: async (paymentId) => {
    try {
      const response = await httpClient.get(
        ENDPOINTS.PAYMENTS.GET_STATUS(paymentId)
      );
      return response;
    } catch (error) {
      console.error('Error getting payment status:', error);
      throw error;
    }
  },
};