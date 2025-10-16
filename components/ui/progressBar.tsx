'use client';

interface ProgressBarProps {
  currentStep: number;
}

const ProgressBar = ({ currentStep }: ProgressBarProps) => {
  const steps = [
    { number: 1, label: 'Complaint Type' },
    { number: 2, label: 'Personal Details' },
    { number: 3, label: 'Service Details' },
    { number: 4, label: 'Review & Submit' }
  ];

  return (
    <div className="mb-8">
      <div className="flex justify-between relative">
        {/* Progress line */}
        <div className="absolute top-4 left-0 right-0 h-1 bg-gray-200 -z-10">
          <div 
            className="h-1 bg-blue-600 transition-all duration-300"
            style={{ width: `${((currentStep - 1) / (steps.length - 1)) * 100}%` }}
          />
        </div>
        
        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center">
            <div className={`
              w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm
              ${currentStep >= step.number 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-500'
              }
            `}>
              {step.number}
            </div>
            <span className={`
              text-xs mt-2 text-center
              ${currentStep >= step.number ? 'text-blue-600 font-medium' : 'text-gray-500'}
            `}>
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;