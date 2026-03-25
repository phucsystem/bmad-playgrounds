import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  className = '',
  ...props
}) => {
  const baseClasses = 'px-6 py-3 rounded-lg text-base font-medium cursor-pointer transition-all';
  const variantClasses = variant === 'primary'
    ? 'bg-gradient-primary text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40'
    : 'bg-gray-200 text-gray-700 hover:bg-gray-300';

  return (
    <button
      {...props}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
};
