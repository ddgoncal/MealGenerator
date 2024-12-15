import { httpClient } from '../httpClient';
import { ENDPOINTS } from '../config';

export const generatorActions = {
  /**
   * Create a payment intent
   * @param {Object} paymentData
   * @param {string} paymentData.currency - Currency code (e.g., 'usd')
   */
  generate: async (promptData) => {
    try {
      const response = await httpClient.post(
        ENDPOINTS.GENERATOR.MEAL_GENERATE,
        promptData
      );
      return response;
    } catch (error) {
      console.error('Error generating meal:', error);
      throw error;
    }
  },
};