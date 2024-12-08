import Replicate from 'replicate';
import { env, isConfigured } from '../config/env';
import type { Meal } from '../types/meal';
import { meals } from '../data/meals';

const replicate = new Replicate({
  auth: env.VITE_REPLICATE_API_TOKEN,
});

const SYSTEM_PROMPT = `You are a helpful cooking assistant that generates creative meal ideas. 
Generate a single meal idea that includes a name, description, category (breakfast/lunch/dinner/snack), 
difficulty level (easy/medium/hard), and estimated preparation time in minutes. 
Respond in JSON format matching the following TypeScript interface:

interface Meal {
  name: string;
  description: string;
  category: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  difficulty: 'easy' | 'medium' | 'hard';
  timeInMinutes: number;
}`;

export async function generateMealIdea(): Promise<Meal> {
  // If Replicate API token is not configured, return a random meal from our static data
  if (!isConfigured.replicate()) {
    const randomIndex = Math.floor(Math.random() * meals.length);
    return meals[randomIndex];
  }

  try {
    // Using Llama 2 model from Replicate
    const output = await replicate.run(
      "meta/meta-llama-3-8b",
      {
        input: {
          prompt: SYSTEM_PROMPT + "\n\nUser: Generate a creative meal idea.",
          temperature: 0.8,
          max_length: 500,
          top_p: 0.9,
        }
      }
    );

    // The output is an array of strings, we need to join them and parse the JSON
    const content = Array.isArray(output) ? output.join('') : output;

    // Extract JSON from the response (it might be wrapped in markdown or other text)
    const jsonMatch = content.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('No valid JSON found in response');

    const mealData = JSON.parse(jsonMatch[0]);
    return {
      ...mealData,
      id: crypto.randomUUID(), // Add an ID to match our Meal type
    };
  } catch (error) {
    console.error('Error generating meal idea:', error);
    throw new Error('Failed to generate meal idea');
  }
}