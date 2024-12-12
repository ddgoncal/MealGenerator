import { llmService } from './model';
import { parseMealResponse } from './parser';
import { SYSTEM_PROMPT } from './config';
import type { Meal } from '../../types/meal';
import { meals } from '../../data/meals';
import type { GenerationProgress } from './types';

export async function generateMealIdea(
  onProgress?: (progress: number) => void
): Promise<Meal> {
  try {
    // Initialize LLM if not already done
    if (!llmService.isReady()) {
      await llmService.init((report: GenerationProgress) => {
        const progress = (report.progress || 0) * 100;
        onProgress?.(progress);
      });
    }

    const prompt = `${SYSTEM_PROMPT}\n\nUser: Generate a creative meal idea.`;
    const response = await llmService.generate(prompt);
    return parseMealResponse(response);
  } catch (error) {
    console.error('Error generating meal idea:', error);
    // Fallback to static meals if anything fails
    const randomIndex = Math.floor(Math.random() * meals.length);
    return meals[randomIndex];
  }
}