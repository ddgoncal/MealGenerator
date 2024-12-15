import React from 'react';
import { QuizQuestion as QuizQuestionType, QuizAnswer } from '../../types/quiz';
import { Checkbox } from './inputs/Checkbox';
import { Slider } from './inputs/Slider';

interface QuizQuestionProps {
  question: QuizQuestionType;
  value: any;
  onChange: (value: any) => void;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  value,
  onChange,
}) => {
  const renderQuestion = () => {
    switch (question.type) {
      case 'multiple':
        return (
          <div className="space-y-3">
            {question.answers?.map((answer) => (
              <Checkbox
                key={answer.id}
                label={answer.text}
                checked={value?.includes(answer.value)}
                onChange={(checked) => {
                  const newValue = checked
                    ? [...(value || []), answer.value]
                    : (value || []).filter((v: string) => v !== answer.value);
                  onChange(newValue);
                }}
              />
            ))}
          </div>
        );
      case 'slider':
        return (
          <Slider
            min={question.min || 0}
            max={question.max || 100}
            value={value || question.min || 0}
            onChange={onChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <h3 className="text-xl font-semibold mb-2">{question.title}</h3>
      {question.description && (
        <p className="text-gray-600 mb-4">{question.description}</p>
      )}
      {renderQuestion()}
    </div>
  );
};