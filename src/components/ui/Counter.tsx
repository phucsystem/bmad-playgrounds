import React from 'react';

interface CounterProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export const Counter: React.FC<CounterProps> = ({ label, value, onChange, min = 0, max = 9 }) => {
  const handleDecrement = () => {
    if (value > min) {
      onChange(value - 1);
    }
  };

  const handleIncrement = () => {
    if (value < max) {
      onChange(value + 1);
    }
  };

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-gray-700">{label}</span>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={handleDecrement}
          className="w-9 h-9 border border-gray-300 rounded-lg bg-white text-lg hover:border-primary hover:bg-primary hover:text-white transition-all"
        >
          -
        </button>
        <span className="text-lg font-semibold min-w-[30px] text-center">{value}</span>
        <button
          type="button"
          onClick={handleIncrement}
          className="w-9 h-9 border border-gray-300 rounded-lg bg-white text-lg hover:border-primary hover:bg-primary hover:text-white transition-all"
        >
          +
        </button>
      </div>
    </div>
  );
};
