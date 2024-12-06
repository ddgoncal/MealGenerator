export interface Meal {
  id: string;
  name: string;
  description: string;
  category: 'breakfast' | 'lunch' | 'dinner' | 'snack';
  difficulty: 'easy' | 'medium' | 'hard';
  timeInMinutes: number;
}