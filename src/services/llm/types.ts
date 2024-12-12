export interface GenerationProgress {
  progress: number;
}

export interface GenerationConfig {
  temperature: number;
  max_tokens: number;
  top_p: number;
}