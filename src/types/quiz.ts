export interface QuizAnswer {
  id: string;
  text: string;
  value: string | number | string[];
}

export interface QuizQuestion {
  id: string;
  title: string;
  description?: string;
  type: 'single' | 'multiple' | 'slider' | 'text';
  answers?: QuizAnswer[];
  min?: number;
  max?: number;
}

export interface UserPreferences {
  dietaryRestrictions: string[];
  cuisinePreferences: string[];
  cookingSkill: number;
  prepTime: number;
  spiceLevel: number;
  servingSize: number;
}