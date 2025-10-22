'use client';

import { useState } from 'react';
import { ComplaintFormData } from '@/lib/data/complaint';
import { SERVICE_CATEGORIES } from '@/lib/data/complaint';

interface ServiceFormProps {
  data: ComplaintFormData;
  updateData: (data: Partial<ComplaintFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const ServiceForm = ({ data, updateData, onNext, onBack }: ServiceFormProps) => {
  const [selectedCategory, setSelectedCategory] = useState(data.serviceDetails.category);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const updateServiceDetails = (field: string, value: string) => {
    updateData({
      serviceDetails: {
        ...data.serviceDetails,
        [field]: value
      }
    });
  };

  const handleCategoryChange = (categoryId: string) => {
    setSelectedCategory(categoryId);
    updateServiceDetails('category', categoryId);
    updateServiceDetails('specificService', ''); // Reset specific service when category changes
  };

  const currentCategory = SERVICE_CATEGORIES.find(cat => cat.id === selectedCategory);

  return (
    <form onSubmit={handleSubmit} className="space-y-6 px-4 sm:px-0">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Service Details</h2>
        <p className="text-gray-600 mb-6">Select the service you need assistance with</p>

        {/* Service Category */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Service Category *
          </label>
          <select
            required
            value={selectedCategory}
            onChange={(e) => handleCategoryChange(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
          >
            <option value="">Select a category</option>
            {SERVICE_CATEGORIES.map((category) => (
              <option key={category.id} value={category.id}>
                {category.label}
              </option>
            ))}
          </select>
        </div>

        {/* Specific Service */}
        {currentCategory && (
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Specific Service *
            </label>
            <div className="space-y-2">
              {currentCategory.services.map((service) => (
                <label key={service} className="flex items-start space-x-3 cursor-pointer">
                  <input
                    type="radio"
                    name="specificService"
                    value={service}
                    checked={data.serviceDetails.specificService === service}
                    onChange={(e) => updateServiceDetails('specificService', e.target.value)}
                    className="mt-1 text-[var(--primary)] focus:ring-[var(--primary)]"
                    required
                  />
                  <span className="text-gray-700">{service}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Location Details */}
        <div className="mb-6">
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
            Exact Location or Details *
          </label>
          <textarea
            id="location"
            required
            rows={3}
            value={data.serviceDetails.location}
            onChange={(e) => updateServiceDetails('location', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
            placeholder="Please provide specific details about the location or issue you are referring to..."
          />
        </div>

        {/* Additional Details */}
        <div>
          <label htmlFor="additionalDetails" className="block text-sm font-medium text-gray-700 mb-2">
            Additional Details & Feedback
          </label>
          <textarea
            id="additionalDetails"
            rows={4}
            value={data.serviceDetails.additionalDetails}
            onChange={(e) => updateServiceDetails('additionalDetails', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
            placeholder="Please provide any additional information that might help us address your concern..."
          />
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
          className="bg-[var(--primary)] text-white px-6 py-2 rounded-lg hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:ring-offset-2 transition-all"
        >
          Next: Review & Submit
        </button>
      </div>
    </form>
  );
};

export default ServiceForm;
