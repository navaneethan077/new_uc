'use client';

import { ComplaintFormData } from '@/lib/data/complaint';


interface PersonalInfoFormProps {
  data: ComplaintFormData;
  updateData: (data: Partial<ComplaintFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

const PersonalInfoForm = ({ data, updateData, onNext, onBack }: PersonalInfoFormProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const updatePersonalInfo = (field: string, value: string) => {
    updateData({
      personalInfo: {
        ...data.personalInfo,
        [field]: value
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Personal Information</h2>
        <p className="text-gray-600 mb-6">Please provide your contact details</p>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              required
              value={data.personalInfo.name}
              onChange={(e) => updatePersonalInfo('name', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={data.personalInfo.phone}
              onChange={(e) => updatePersonalInfo('phone', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your phone number"
            />
          </div>

          <div className="md:col-span-2">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Address *
            </label>
            <textarea
              id="address"
              required
              rows={3}
              value={data.personalInfo.address}
              onChange={(e) => updatePersonalInfo('address', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your complete address"
            />
          </div>

          <div>
            <label htmlFor="nic" className="block text-sm font-medium text-gray-700 mb-1">
              National Identity Card Number
            </label>
            <input
              type="text"
              id="nic"
              value={data.personalInfo.nic}
              onChange={(e) => updatePersonalInfo('nic', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your NIC number"
            />
          </div>

          <div>
            <label htmlFor="gramaDivision" className="block text-sm font-medium text-gray-700 mb-1">
              Grama Niladhari Division
            </label>
            <input
              type="text"
              id="gramaDivision"
              value={data.personalInfo.gramaDivision}
              onChange={(e) => updatePersonalInfo('gramaDivision', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your Grama Niladhari Division"
            />
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-6 border-t">
        <button
          type="button"
          onClick={onBack}
          className="bg-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
        >
          Back
        </button>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
        >
          Next: Service Details
        </button>
      </div>
    </form>
  );
};

export default PersonalInfoForm;