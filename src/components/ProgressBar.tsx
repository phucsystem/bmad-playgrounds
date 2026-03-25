import React from 'react';

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  steps: string[];
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep, totalSteps, steps }) => {
  return (
    <div className="flex justify-between px-6 py-6 bg-gray-50 border-b border-gray-200">
      {steps.map((stepLabel, index) => {
        const stepNumber = index + 1;
        const isActive = stepNumber === currentStep;
        const isCompleted = stepNumber < currentStep;

        return (
          <div key={stepNumber} className="flex flex-col items-center flex-1 relative">
            {index < totalSteps - 1 && (
              <div
                className={`absolute top-4 left-[60%] w-[80%] h-0.5 ${
                  isCompleted || isActive ? 'bg-primary' : 'bg-gray-300'
                }`}
              />
            )}
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm relative z-10 transition-all ${
                isActive
                  ? 'bg-primary text-white'
                  : isCompleted
                  ? 'bg-green-500 text-white'
                  : 'bg-gray-300 text-gray-600'
              }`}
            >
              {stepNumber}
            </div>
            <div
              className={`text-xs mt-2 text-center ${
                isActive ? 'text-primary font-semibold' : 'text-gray-600'
              }`}
            >
              {stepLabel}
            </div>
          </div>
        );
      })}
    </div>
  );
};
