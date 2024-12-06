import { Meal } from '../types/meal';

export const meals: Meal[] = [
  {
    id: '1',
    name: 'Avocado Toast with Poached Eggs',
    description: 'Creamy avocado spread on toasted sourdough, topped with perfectly poached eggs.',
    category: 'breakfast',
    difficulty: 'easy',
    timeInMinutes: 15
  },
  {
    id: '2',
    name: 'Quinoa Buddha Bowl',
    description: 'Nutritious bowl with quinoa, roasted vegetables, and tahini dressing.',
    category: 'lunch',
    difficulty: 'medium',
    timeInMinutes: 30
  },
  {
    id: '3',
    name: 'Grilled Salmon with Asparagus',
    description: 'Fresh salmon fillet with grilled asparagus and lemon butter sauce.',
    category: 'dinner',
    difficulty: 'medium',
    timeInMinutes: 25
  }
];