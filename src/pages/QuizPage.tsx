import React from 'react';
import { FoodQuiz } from '../components/quiz/FoodQuiz';
import { UserPreferences } from '../types/quiz';
import { useNavigate } from 'react-router-dom';

export const QuizPage: React.FC = () => {
  const navigate = useNavigate();

  const handleQuizComplete = (preferences: UserPreferences) => {
    // Save preferences to localStorage or state management
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
    // Navigate back to home
    navigate('/');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold mb-4">
          Let's Personalize Your Recipe Experience
        </h1>
        <p className="text-gray-600">
          Answer a few questions to help us generate recipes that match your preferences.
        </p>
      </div>

      <FoodQuiz onComplete={handleQuizComplete} />
    </div>
  );
};