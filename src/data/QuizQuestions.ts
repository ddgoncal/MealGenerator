import { QuizQuestion } from '../types/quiz';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 'dietary',
    title: 'Do you have any dietary restrictions?',
    description: 'Select all that apply',
    type: 'multiple',
    answers: [
      { id: 'vegetarian', text: 'Vegetarian', value: 'vegetarian' },
      { id: 'vegan', text: 'Vegan', value: 'vegan' },
      { id: 'gluten-free', text: 'Gluten-free', value: 'gluten-free' },
      { id: 'dairy-free', text: 'Dairy-free', value: 'dairy-free' },
      { id: 'keto', text: 'Keto', value: 'keto' },
      { id: 'none', text: 'No restrictions', value: 'none' },
    ],
  },
  {
    id: 'cuisine',
    title: 'What cuisines do you enjoy?',
    description: 'Select your favorite cuisines',
    type: 'multiple',
    answers: [
      { id: 'italian', text: 'Italian', value: 'italian' },
      { id: 'asian', text: 'Asian', value: 'asian' },
      { id: 'mexican', text: 'Mexican', value: 'mexican' },
      { id: 'mediterranean', text: 'Mediterranean', value: 'mediterranean' },
      { id: 'american', text: 'American', value: 'american' },
      { id: 'indian', text: 'Indian', value: 'indian' },
    ],
  },
  {
    id: 'skill',
    title: 'What\'s your cooking skill level?',
    type: 'slider',
    min: 1,
    max: 5,
  },
  {
    id: 'time',
    title: 'How much time do you have for cooking?',
    description: 'Maximum preparation time in minutes',
    type: 'slider',
    min: 15,
    max: 120,
  },
  {
    id: 'spice',
    title: 'How spicy do you like your food?',
    type: 'slider',
    min: 1,
    max: 5,
  },
  {
    id: 'servings',
    title: 'How many servings do you typically need?',
    type: 'slider',
    min: 1,
    max: 8,
  },
];