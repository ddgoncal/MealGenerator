import type { Meal } from '../../types/meal';

export function parseMealResponse(response: string): Meal {
  try {
    // Try to extract JSON from the response
    const jsonMatch = response.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error('No valid JSON found in response');
    }

    const mealData = JSON.parse(jsonMatch[0]);

    // Validate required fields
    const requiredFields = ['name', 'description', 'category', 'difficulty', 'timeInMinutes'];
    for (const field of requiredFields) {
      if (!mealData[field]) {
        throw new Error(`Missing required field: ${field}`);
      }
    }

    // Validate category and difficulty
    const validCategories = ['breakfast', 'lunch', 'dinner', 'snack'];
    const validDifficulties = ['easy', 'medium', 'hard'];

    if (!validCategories.includes(mealData.category)) {
      throw new Error('Invalid category');
    }

    if (!validDifficulties.includes(mealData.difficulty)) {
      throw new Error('Invalid difficulty');
    }

    return {
      ...mealData,
      id: crypto.randomUUID(),
    };
  } catch (error) {
    console.error('Failed to parse meal response:', error);
    throw new Error('Failed to parse LLM response');
  }
}