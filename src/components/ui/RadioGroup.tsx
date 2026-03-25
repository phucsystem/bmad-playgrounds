import React from 'react';

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  label: string;
  name: string;
  options: RadioOption[];
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export const RadioGroup: React.FC<RadioGroupProps> = ({
  label,
  name,
  options,
  value,
  onChange,
  required,
}) => {
  return (
    <div className="form-group">
      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <div className="flex gap-3 flex-wrap">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg cursor-pointer transition-all hover:border-primary hover:bg-blue-50"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange(e.target.value)}
              className="w-auto"
            />
            {option.label}
          </label>
        ))}
      </div>
    </div>
  );
};
