import { parseMealResponse } from './parser';
import { SYSTEM_PROMPT } from './config';
import type { Meal } from '../../types/meal';
import { meals } from '../../data/meals';
import type { GenerationProgress } from './types';
import { generatorActions } from '../../api/actions/generator.actions';


export async function generateMealIdea(
  onProgress?: (progress: number) => void
): Promise<Meal> {
  try {

    const response = await generatorActions.generate({
      prompt: SYSTEM_PROMPT + "\n\nUser: Generate a creative meal idea.",
    });

    if (!response.ok) {
      throw new Error('Failed to generate meal idea from backend');
    }

    const data = await response.json();
    return parseMealResponse(data);
  } catch (error) {
    console.error('Error generating meal idea from backend:', error);
    // Fallback to static meals if anything fails
    const randomIndex = Math.floor(Math.random() * meals.length);
    return meals[randomIndex];
  }
}