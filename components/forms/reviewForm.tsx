'use client';

import { ComplaintFormData } from '@/lib/data/complaint';
import { SERVICE_CATEGORIES, SUBMISSION_TYPES } from '@/lib/data/complaint';

interface ReviewFormProps {
  data: ComplaintFormData;
  updateData: (data: Partial<ComplaintFormData>) => void;
  onSubmit: () => void;
  onBack: () => void;
}

const ReviewForm = ({ data, updateData, onSubmit, onBack }: ReviewFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  const submissionTypeLabel = SUBMISSION_TYPES.find(
    type => type.value === data.submissionType
  )?.label;

  const serviceCategoryLabel = SERVICE_CATEGORIES.find(
    cat => cat.id === data.serviceDetails.category
  )?.label;

  return (
    <form onSubmit={handleSubmit} className="space-y-6 px-4 sm:px-0">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Review Your Submission</h2>
        <p className="text-gray-600 mb-6">Please review all information before submitting</p>

        <div className="bg-gray-50 rounded-lg p-6 space-y-6">
          {/* Submission Type */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Submission Type</h3>
            <p className="text-gray-600">{submissionTypeLabel}</p>
          </div>

          {/* Personal Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Personal Information</h3>
            <div className="grid md:grid-cols-2 gap-4 text-gray-600">
              <div>
                <strong>Name:</strong> {data.personalInfo.name}
              </div>
              <div>
                <strong>Phone:</strong> {data.personalInfo.phone}
              </div>
              <div className="md:col-span-2">
                <strong>Address:</strong> {data.personalInfo.address}
              </div>
              <div>
                <strong>NIC:</strong> {data.personalInfo.nic || 'Not provided'}
              </div>
              <div>
                <strong>Grama Division:</strong> {data.personalInfo.gramaDivision || 'Not provided'}
              </div>
            </div>
          </div>

          {/* Service Details */}
          <div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Service Details</h3>
            <div className="space-y-2 text-gray-600">
              <div>
                <strong>Category:</strong> {serviceCategoryLabel}
              </div>
              <div>
                <strong>Specific Service:</strong> {data.serviceDetails.specificService}
              </div>
              <div>
                <strong>Location Details:</strong> {data.serviceDetails.location}
              </div>
              {data.serviceDetails.additionalDetails && (
                <div>
                  <strong>Additional Details:</strong> {data.serviceDetails.additionalDetails}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Confirmation */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-3 mt-6 p-4 bg-[var(--primary)]/10 rounded-lg">
          <input
            type="checkbox"
            id="confirmation"
            checked={data.confirmation}
            onChange={(e) => updateData({ confirmation: e.target.checked })}
            className="mt-1 text-[var(--primary)] focus:ring-[var(--primary)]"
            required
          />
          <label htmlFor="confirmation" className="text-sm text-gray-700">
            I confirm that all the information provided above is true and accurate to the best of my knowledge.
          </label>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row justify-between pt-6 border-t gap-3">
        <button
          type="button"
          onClick={onBack}
          className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
        >
          Back
        </button>
        <button
          type="submit"
          disabled={!data.confirmation}
          className="bg-[var(--primary)] text-white px-6 py-2 rounded-lg hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 transition-all disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          Submit Complaint
        </button>
      </div>
    </form>
  );
};

export default ReviewForm;
