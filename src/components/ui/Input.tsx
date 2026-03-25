import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  helperText?: string;
}

export const Input: React.FC<InputProps> = ({ label, required, helperText, ...props }) => {
  return (
    <div className="form-group">
      <label className="block text-sm font-medium text-gray-700 mb-1.5">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <input
        {...props}
        className="w-full px-3 py-3 border border-gray-300 rounded-lg text-base transition-all focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20"
      />
      {helperText && <div className="text-xs text-gray-600 mt-1">{helperText}</div>}
    </div>
  );
};
