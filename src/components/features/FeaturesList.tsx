import React from 'react';
import { Clock, Brain, Leaf } from 'lucide-react';
import { FeatureCard } from './FeatureCard';

const features = [
  {
    title: 'Save Precious Time',
    description: 'No more endless recipe browsing. Get instant meal ideas that match your schedule, whether it\'s a quick 15-minute dinner or a leisurely weekend feast.',
    bulletPoints: [
      'Quick decision making',
      'Efficient meal planning',
      'Ready-to-cook instructions'
    ],
    icon: Clock,
    iconBgColor: 'bg-blue-50',
    iconColor: 'text-blue-600',
    dotColor: 'bg-blue-600',
    image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?auto=format&fit=crop&q=80&w=2070&h=1200'
  },
  {
    title: 'Perfectly Personalized',
    description: 'Every suggestion is tailored to your unique preferences, dietary requirements, and cooking skill level. Your perfect meal is just one click away.',
    bulletPoints: [
      'Dietary preferences respected',
      'Skill-level appropriate',
      'Taste profile matching'
    ],
    icon: Brain,
    iconBgColor: 'bg-purple-50',
    iconColor: 'text-purple-600',
    dotColor: 'bg-purple-600',
    image: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?auto=format&fit=crop&q=80&w=2070&h=1200'
  },
  {
    title: 'Endless Variety',
    description: 'Discover a world of culinary possibilities with our diverse recipe collection. From quick snacks to gourmet dinners, never get bored with your meals again.',
    bulletPoints: [
      'Global cuisine options',
      'Seasonal suggestions',
      'Trending recipes included'
    ],
    icon: Leaf,
    iconBgColor: 'bg-green-50',
    iconColor: 'text-green-600',
    dotColor: 'bg-green-600',
    image: 'https://images.unsplash.com/photo-1547592180-2fa98b293d2a?auto=format&fit=crop&q=80&w=2070&h=1200'
  }
];

export const FeaturesList: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4">
      <h3 className="text-3xl font-bold text-center mb-12">
        Why Choose Our Meal Generator?
      </h3>
      
      <div className="space-y-16">
        {features.map((feature, index) => (
          <FeatureCard
            key={feature.title}
            feature={feature}
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};