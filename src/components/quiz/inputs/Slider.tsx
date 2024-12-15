import React from 'react';

interface SliderProps {
  min: number;
  max: number;
  value: number;
  onChange: (value: number) => void;
}

export const Slider: React.FC<SliderProps> = ({ min, max, value, onChange }) => {
  return (
    <div className="space-y-2">
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer
          accent-green-600"
      />
      <div className="flex justify-between text-sm text-gray-600">
        <span>{value}</span>
        <span>{max}</span>
      </div>
    </div>
  );
};