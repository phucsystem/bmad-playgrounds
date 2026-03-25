import React from 'react';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, ...props }) => {
  return (
    <label className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg cursor-pointer transition-all hover:border-primary hover:bg-blue-50">
      <input type="checkbox" {...props} className="w-auto" />
      {label}
    </label>
  );
};
