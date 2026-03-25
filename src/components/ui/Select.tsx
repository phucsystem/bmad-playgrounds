import React from 'react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  required?: boolean;
  options: { value: string; label: string }[];
}

export const Select: React.FC<SelectProps> = ({ label, required, options, ...props }) => {
  return (
    <div className="form-group">
      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <select
        {...props}
        className="w-full px-3 py-3 border border-gray-300 rounded-lg text-base transition-all focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
