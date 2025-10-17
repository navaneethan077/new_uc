'use client';

import { useState } from 'react';
import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import ProgressBar from '@/components/ui/progressBar';
import ComplaintForm from '@/components/forms/complaintForm';
import PersonalInfoForm from '@/components/forms/personalInfoForm';
import ServiceForm from '@/components/forms/serviceForm';
import ReviewForm from '@/components/forms/reviewForm';
import { serviceCategories } from '@/lib/data/services';

import { ComplaintFormData } from '@/lib/data/complaint';
import { 
  FaExclamationTriangle, 
  FaClipboardList, 
  FaLightbulb, 
  FaHardHat,
  FaFileAlt,
  FaEdit,
  FaRocket,
  FaBullhorn,
  FaUser,
  FaBuilding,
  FaCheckCircle,
  FaPhone,
  FaFax,
  FaEnvelope,
  FaClock,
  FaHome,
  FaTint,
  FaFileContract,
  FaArrowLeft,
  FaTimes,
  FaMapMarkerAlt,
  FaIdCard,
  FaListAlt,FaExclamationCircle 
} from 'react-icons/fa';

const ComplaintsPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState<ComplaintFormData>({
    submissionType: 'complaint',
    personalInfo: {
      name: '',
      address: '',
      phone: '',
      nic: '',
      gramaDivision: ''
    },
    serviceDetails: {
      category: '',
      specificService: '',
      location: '',
      additionalDetails: ''
    },
    confirmation: false
  });

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const updateFormData = (data: Partial<ComplaintFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const handleSubmit = async () => {
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your submission! Your complaint has been received and will be processed soon.');
    
    // Reset form
    setFormData({
      submissionType: 'complaint',
      personalInfo: {
        name: '',
        address: '',
        phone: '',
        nic: '',
        gramaDivision: ''
      },
      serviceDetails: {
        category: '',
        specificService: '',
        location: '',
        additionalDetails: ''
      },
      confirmation: false
    });
    setCurrentStep(1);
    setShowForm(false);
  };

  const startNewComplaint = () => {
    setShowForm(true);
    setCurrentStep(1);
    setFormData({
      submissionType: 'complaint',
      personalInfo: {
        name: '',
        address: '',
        phone: '',
        nic: '',
        gramaDivision: ''
      },
      serviceDetails: {
        category: '',
        specificService: '',
        location: '',
        additionalDetails: ''
      },
      confirmation: false
    });
  };

  const submissionTypes = [
    {
      type: 'complaint',
      icon: FaExclamationTriangle,
      title: 'Complaint',
      description: 'Report an issue or problem that needs resolution'
    },
    {
      type: 'request',
      icon: FaClipboardList,
      title: 'Service Request',
      description: 'Request for specific municipal services'
    },
    {
      type: 'recommendation',
      icon: FaLightbulb,
      title: 'Recommendation',
      description: 'Suggest improvements or new initiatives'
    },
    {
      type: 'development',
      icon: FaHardHat,
      title: 'Development Request',
      description: 'Infrastructure or development related requests'
    },
    {
      type: 'information',
      icon: FaFileAlt,
      title: 'Information Request',
      description: 'Request official documents or information'
    },
    {
      type: 'other',
      icon: FaEdit,
      title: 'Other Feedback',
      description: 'General feedback or other submissions'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <TopBar />
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="bg-primary relative py-16">
          <div className="container-x text-center">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6 mx-auto">
              <FaBullhorn className="text-3xl text-white" />
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Public <span className="text-white/90">Complaints</span> & Feedback
            </h1>

            {/* Description */}
            <p className="text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Your voice matters. Help us serve you better by sharing your concerns, 
              suggestions, and feedback with our municipal council.
            </p>
          </div>
        </section>

        {/* Quick Actions */}
        {!showForm && (
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  How can we help you today?
                </h2>
                <p className="text-gray-600">
                  Choose the type of submission that best fits your needs
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {submissionTypes.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <button
                      key={item.type}
                      onClick={startNewComplaint}
                      className="bg-white hover:bg-primary/5 border border-gray-200 rounded-xl p-4 text-left transition-all duration-300 hover:border-primary/30 hover:shadow-md group"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                          <IconComponent className="text-xl text-primary group-hover:scale-110 transition-transform duration-300" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 group-hover:text-primary">
                            {item.title}
                          </h3>
                          <p className="text-sm text-gray-500 mt-1">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="text-center">
                <button
                  onClick={startNewComplaint}
                  className="bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-8 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-3 mx-auto"
                >
                  <FaExclamationCircle className="text-lg" />
                  Start Your Submission
                </button>
                <p className="text-gray-500 mt-3 text-sm">
                  Simple 4-step process • Average completion time: 5 minutes
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Process Guide */}
        {!showForm && (
          <div className="max-w-6xl mx-auto mb-12">
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
              <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
                Simple 4-Step Process
              </h2>
              <p className="text-center text-gray-600 mb-8">
                Follow these easy steps to submit your complaint or feedback
              </p>

              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    step: 1,
                    icon: FaListAlt,
                    title: 'Choose Type',
                    description: 'Select what you want to submit',
                    details: ['Complaint', 'Service Request', 'Recommendation', 'Other feedback']
                  },
                  {
                    step: 2,
                    icon: FaUser,
                    title: 'Your Details',
                    description: 'Provide contact information',
                    details: ['Name & Address', 'Phone Number', 'NIC', 'Grama Division']
                  },
                  {
                    step: 3,
                    icon: FaBuilding,
                    title: 'Service Details',
                    description: 'Describe the issue or request',
                    details: ['Service Category', 'Specific Details', 'Location', 'Additional Info']
                  },
                  {
                    step: 4,
                    icon: FaCheckCircle,
                    title: 'Review & Submit',
                    description: 'Verify and send your submission',
                    details: ['Review Information', 'Confirm Accuracy', 'Final Submission']
                  }
                ].map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={item.step} className="relative">
                      {index < 3 && (
                        <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-primary/20 -z-10" />
                      )}
                      <div className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                        <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4 shadow-lg">
                          <IconComponent className="text-2xl" />
                        </div>
                        <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-3 shadow-md">
                          {item.step}
                        </div>
                        <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                        <p className="text-sm text-primary font-medium mb-3">{item.description}</p>
                        <ul className="text-xs text-gray-500 space-y-1">
                          {item.details.map((detail, idx) => (
                            <li key={idx}>• {detail}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Form Section */}
        {showForm && (
          <div className="max-w-4xl mx-auto">
            {/* Progress Header */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-200">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {currentStep === 1 && 'Choose Submission Type'}
                    {currentStep === 2 && 'Your Information'}
                    {currentStep === 3 && 'Service Details'}
                    {currentStep === 4 && 'Review & Submit'}
                  </h2>
                  <p className="text-gray-600 text-sm">
                    Step {currentStep} of 4 • Almost there!
                  </p>
                </div>
                <button
                  onClick={() => setShowForm(false)}
                  className="text-gray-400 hover:text-gray-600 transition-colors duration-300 p-2 hover:bg-gray-100 rounded-lg"
                >
                  <FaTimes className="text-xl" />
                </button>
              </div>
              <ProgressBar currentStep={currentStep} />
            </div>

            {/* Form Content */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-6 border border-gray-200">
              {currentStep === 1 && (
                <ComplaintForm 
                  data={formData}
                  updateData={updateFormData}
                  onNext={nextStep}
                />
              )}
              
              {currentStep === 2 && (
                <PersonalInfoForm
                  data={formData}
                  updateData={updateFormData}
                  onNext={nextStep}
                  onBack={prevStep}
                />
              )}
              
              {currentStep === 3 && (
                <ServiceForm
                  data={formData}
                  updateData={updateFormData}
                  onNext={nextStep}
                  onBack={prevStep}
                />
              )}
              
              {currentStep === 4 && (
                <ReviewForm
                  data={formData}
                  updateData={updateFormData}
                  onSubmit={handleSubmit}
                  onBack={prevStep}
                />
              )}
            </div>

            {/* Quick Actions */}
            <div className="text-center">
              <button
                onClick={() => setShowForm(false)}
                className="text-gray-600 hover:text-gray-800 font-medium transition-colors duration-300 flex items-center justify-center gap-2 mx-auto"
              >
                <FaArrowLeft />
                Back to main menu
              </button>
            </div>
          </div>
        )}

        {/* Information Sections */}
        {!showForm && (
          <div className="max-w-6xl mx-auto space-y-8">
            {/* What to Expect */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* After You Submit Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-primary/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <FaClipboardList className="text-xl text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">After You Submit</h3>
                </div>
                <div className="space-y-3">
                  {[
                    { icon: FaFileAlt, text: 'Immediate confirmation with tracking number' },
                    { icon: FaUser, text: 'Assignment to relevant department' },
                    { icon: FaPhone, text: 'Possible follow-up for additional details' },
                    { icon: FaCheckCircle, text: 'Regular status updates on progress' },
                    { icon: FaClipboardList, text: 'Final resolution notification' }
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className="flex items-center space-x-3">
                        <IconComponent className="text-primary text-lg" />
                        <span className="text-gray-700">{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Contact Information Card */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-primary/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <FaPhone className="text-xl text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Contact Us</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { icon: FaPhone, label: 'Telephone', value: '023 222 2285' },
                    { icon: FaFax, label: 'Fax', value: '023 222 2275' },
                    { icon: FaEnvelope, label: 'Email', value: 'mannaruc154@yahoo.com' },
                    { icon: FaClock, label: 'Office Hours', value: 'Mon-Fri 8:30 AM - 4:30 PM' }
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <div key={index} className="flex items-center justify-between p-3 bg-primary/5 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <IconComponent className="text-primary" />
                          <span className="font-medium text-gray-700">{item.label}</span>
                        </div>
                        <span className="text-gray-900 font-semibold">{item.value}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Services Overview */}
            <div className="bg-primary/5 rounded-2xl p-8 border border-primary/10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Services We Provide
                </h2>
                <p className="text-gray-600">
                  Comprehensive municipal services for our community
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {serviceCategories.map((category) => {
                  return (
                    <div key={category.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                          {category.icon}
                        </div>
                        <h3 className="font-bold text-gray-900 text-lg">{category.title}</h3>
                      </div>
                      <ul className="space-y-2">
                        {category.subServices.map((service) => (
                          <li key={service.id} className="flex items-center text-gray-700">
                            <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                            {service.title}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ComplaintsPage;