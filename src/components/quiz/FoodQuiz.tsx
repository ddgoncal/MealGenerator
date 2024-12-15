import React, { useState } from 'react';
import { quizQuestions } from '../../data/quizQuestions';
import { QuizQuestion } from './QuizQuestion';
import { UserPreferences } from '../../types/quiz';
import { ArrowRight, ArrowLeft } from 'lucide-react';

interface FoodQuizProps {
  onComplete: (preferences: UserPreferences) => void;
}

export const FoodQuiz: React.FC<FoodQuizProps> = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, any>>({});

  const handleNext = () => {
    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      const preferences: UserPreferences = {
        dietaryRestrictions: answers.dietary || [],
        cuisinePreferences: answers.cuisine || [],
        cookingSkill: answers.skill || 1,
        prepTime: answers.time || 30,
        spiceLevel: answers.spice || 1,
        servingSize: answers.servings || 2,
      };
      onComplete(preferences);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentQuestion = quizQuestions[currentStep];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-8">
        <div className="h-2 bg-gray-200 rounded-full">
          <div
            className="h-full bg-green-600 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / quizQuestions.length) * 100}%` }}
          />
        </div>
      </div>

      <QuizQuestion
        question={currentQuestion}
        value={answers[currentQuestion.id]}
        onChange={(value) =>
          setAnswers((prev) => ({ ...prev, [currentQuestion.id]: value }))
        }
      />

      <div className="flex justify-between mt-8">
        <button
          onClick={handlePrevious}
          disabled={currentStep === 0}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg transition-colors
            ${currentStep === 0
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
        >
          <ArrowLeft size={20} />
          Previous
        </button>

        <button
          onClick={handleNext}
          className="flex items-center gap-2 px-6 py-3 rounded-lg bg-green-600 text-white
            hover:bg-green-700 transition-colors"
        >
          {currentStep === quizQuestions.length - 1 ? 'Complete' : 'Next'}
          <ArrowRight size={20} />
        </button>
      </div>
    </div>
  );
};