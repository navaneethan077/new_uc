'use client';

import { ComplaintFormData } from '@/lib/data/complaint';
import { SUBMISSION_TYPES } from '@/lib/data/complaint';

interface ComplaintFormProps {
  data: ComplaintFormData;
  updateData: (data: Partial<ComplaintFormData>) => void;
  onNext: () => void;
}

const ComplaintForm = ({ data, updateData, onNext }: ComplaintFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 px-4 sm:px-0">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Type of Submission</h2>
        <p className="text-gray-600 mb-6">
          What would you like to submit to the Municipal Council?
        </p>

        <div className="space-y-3">
          {SUBMISSION_TYPES.map((type) => (
            <label
              key={type.value}
              className="flex items-start space-x-3 cursor-pointer"
            >
              <input
                type="radio"
                name="submissionType"
                value={type.value}
                checked={data.submissionType === type.value}
                onChange={(e) =>
                  updateData({ submissionType: e.target.value as any })
                }
                className="mt-1 focus:ring-2 focus:ring-offset-2 transition-colors"
                style={{
                  accentColor: "var(--primary)", // <-- uses theme color
                }}
                required
              />
              <span className="text-gray-700">{type.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-end pt-6 border-t">
        <button
          type="submit"
          className="bg-[var(--primary)] text-white px-6 py-2 rounded-lg hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary)] transition-all"
        >
          Next: Personal Details
        </button>
      </div>
    </form>
  );
};

export default ComplaintForm;
