import React from 'react';
import { Check } from 'lucide-react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer group">
      <div className={`w-5 h-5 rounded border transition-colors
        ${checked 
          ? 'bg-green-600 border-green-600' 
          : 'border-gray-300 group-hover:border-green-400'}`}>
        {checked && <Check className="text-white" size={20} />}
      </div>
      <span className="text-gray-700">{label}</span>
    </label>
  );
};