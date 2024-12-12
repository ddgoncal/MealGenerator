import type { GenerationConfig } from './types';

export const MODEL_CONFIG = {
  modelUrl: "https://huggingface.co/mlc-ai/Llama-2-7b-chat-hf-q4f32_1/resolve/main/",
  generation: {
    temperature: 0.7,
    max_tokens: 800,
    top_p: 0.95,
  } satisfies GenerationConfig,
};

export const SYSTEM_PROMPT = `You are a helpful cooking assistant that generates creative meal ideas. 
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