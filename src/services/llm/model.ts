import * as webllm from '@mlc-ai/web-llm';
import { MODEL_CONFIG } from './config';
import type { GenerationConfig, GenerationProgress } from './types';

class LLMService {
  private static instance: LLMService;
  private chat: webllm.ChatWorker | null = null;
  private isInitialized = false;

  private constructor() {}

  static getInstance(): LLMService {
    if (!LLMService.instance) {
      LLMService.instance = new LLMService();
    }
    return LLMService.instance;
  }

  async init(progressCallback?: (progress: GenerationProgress) => void): Promise<void> {
    if (this.isInitialized) return;

    try {
      this.chat = new webllm.ChatWorker();
      await this.chat.reload(MODEL_CONFIG.modelUrl, progressCallback);
      this.isInitialized = true;
    } catch (error) {
      console.error('Failed to initialize LLM:', error);
      throw new Error('Failed to initialize LLM service');
    }
  }

  async generate(prompt: string): Promise<string> {
    if (!this.chat || !this.isInitialized) {
      throw new Error('LLM not initialized');
    }

    try {
      const response = await this.chat.generate(prompt, MODEL_CONFIG.generation);
      return response;
    } catch (error) {
      console.error('Failed to generate response:', error);
      throw new Error('Failed to generate response from LLM');
    }
  }

  isReady(): boolean {
    return this.isInitialized;
  }
}

export const llmService = LLMService.getInstance();