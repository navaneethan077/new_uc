'use client';

interface ProgressBarProps {
  currentStep: number;
}

const ProgressBar = ({ currentStep }: ProgressBarProps) => {
  const steps = [
    { number: 1, label: 'Complaint Type' },
    { number: 2, label: 'Personal Details' },
    { number: 3, label: 'Service Details' },
    { number: 4, label: 'Review & Submit' },
  ];

  return (
    <div className="mb-8 px-4 sm:px-0">
      <div className="flex justify-between relative items-center">
        {/* Progress line */}
        <div className="absolute top-4 left-0 right-0 h-1 bg-gray-200 -z-10 rounded-full">
          <div
            className="h-1 rounded-full transition-all duration-300"
            style={{
              width: `${((currentStep - 1) / (steps.length - 1)) * 100}%`,
              background: "var(--primary)",
            }}
          />
        </div>

        {steps.map((step) => (
          <div key={step.number} className="flex flex-col items-center text-center w-1/4">
            <div
              className={`
                w-8 h-8 rounded-full flex items-center justify-center font-semibold text-sm
                transition-colors duration-300
              `}
              style={{
                background: currentStep >= step.number ? "var(--primary)" : "#e5e7eb", // gray-200
                color: currentStep >= step.number ? "#fff" : "#6b7280", // gray-500
              }}
            >
              {step.number}
            </div>
            <span
              className={`text-xs mt-2 transition-colors duration-300`}
              style={{
                color: currentStep >= step.number ? "var(--primary)" : "#6b7280",
                fontWeight: currentStep >= step.number ? 500 : 400,
              }}
            >
              {step.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
