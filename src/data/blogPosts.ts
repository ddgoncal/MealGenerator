import { BlogPost, BlogCategory } from '../types/blog';

export const blogCategories: BlogCategory[] = [
  {
    id: 'nutrition',
    name: 'Nutrition',
    description: 'Learn about balanced diets and healthy eating habits',
  },
  {
    id: 'health',
    name: 'Health & Wellness',
    description: 'Tips for maintaining a healthy lifestyle',
  },
  {
    id: 'cooking-tips',
    name: 'Cooking Tips',
    description: 'Improve your cooking skills with expert advice',
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle',
    description: 'Healthy living and wellness practices',
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Power of Plant-Based Proteins',
    excerpt: 'Discover how plant-based proteins can provide all the nutrients you need while being environmentally friendly.',
    content: `Plant-based proteins are becoming increasingly popular, and for good reason. They're not just for vegetarians and vegans – they can be a healthy addition to any diet...`,
    author: {
      name: 'Dr. Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
    },
    coverImage: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=2070&h=1200',
    category: 'nutrition',
    tags: ['protein', 'plant-based', 'nutrition', 'health'],
    publishedAt: '2024-03-15',
    readTime: 5,
  },
  {
    id: '2',
    title: 'Understanding Macro and Micronutrients',
    excerpt: 'A comprehensive guide to understanding the essential nutrients your body needs for optimal health.',
    content: `Nutrients are compounds in foods essential to life and health, providing us with energy, the building blocks for repair and growth, and substances necessary to regulate chemical processes...`,
    author: {
      name: 'Prof. Michael Roberts',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
    },
    coverImage: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=2070&h=1200',
    category: 'nutrition',
    tags: ['nutrition', 'health', 'diet', 'wellness'],
    publishedAt: '2024-03-10',
    readTime: 8,
  },
  {
    id: '3',
    title: 'Mindful Eating: A Path to Better Health',
    excerpt: 'Learn how practicing mindful eating can improve your relationship with food and overall well-being.',
    content: `Mindful eating is about using mindfulness to reach a state of full attention to your experiences, cravings, and physical cues when eating...`,
    author: {
      name: 'Emma Thompson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
    },
    coverImage: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&q=80&w=2070&h=1200',
    category: 'health',
    tags: ['mindfulness', 'health', 'wellness', 'lifestyle'],
    publishedAt: '2024-03-05',
    readTime: 6,
  },
];