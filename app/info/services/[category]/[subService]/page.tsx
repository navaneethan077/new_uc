// app/services/[category]/[subService]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import { serviceCategories } from '@/lib/data/services';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { TopBar } from "@/components/top-bar";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function SubServiceDetailPage() {
  const params = useParams();
  const categoryId = params.category as string;
  const subServiceId = params.subService as string;

  const category = serviceCategories.find(cat => cat.id === categoryId);
  const subService = category?.subServices.find(sub => sub.id === subServiceId);

  if (!category || !subService) {
    notFound();
  }

  return (
     <div className="min-h-screen flex flex-col">
          <TopBar />
          <Navigation />
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                Home
              </Link>
            </li>
            <li>
              <svg className="flex-shrink-0 h-4 w-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li>
              <Link href="/services" className="text-gray-500 hover:text-gray-700">
                Services
              </Link>
            </li>
            <li>
              <svg className="flex-shrink-0 h-4 w-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li>
              <Link href={`/info/services/${category.id}`} className="text-gray-500 hover:text-gray-700">
                {category.title}
              </Link>
            </li>
            <li>
              <svg className="flex-shrink-0 h-4 w-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li>
              <span className="text-gray-700 font-medium">{subService.title}</span>
            </li>
          </ol>
        </nav>

        {/* Sub Service Header */}
        <div className={`rounded-lg p-8 mb-8 ${category.color}`}>
          <div className="flex items-center mb-4">
            <span className="text-4xl mr-4">{category.icon}</span>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{subService.title}</h1>
              <p className="text-gray-600 mt-2">{subService.description}</p>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Program Details</h2>
          
          <div className="prose prose-lg max-w-none">
            <p>
              This program focuses on delivering comprehensive services and support 
              to achieve its objectives. Our team works diligently to ensure successful 
              implementation and maximum community impact.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Key Features</h3>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Community-driven approach</li>
              <li>Sustainable implementation strategies</li>
              <li>Regular monitoring and evaluation</li>
              <li>Stakeholder engagement programs</li>
              <li>Transparent reporting mechanisms</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-4">Eligibility Criteria</h3>
            <p className="text-gray-600">
              This service is available to all community members who meet the 
              specific requirements outlined in the program guidelines.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200">
            Apply for Service
          </button>
          <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
            Download Brochure
          </button>
          <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200">
            Contact Coordinator
          </button>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t border-gray-200">
          <Link 
            href={`/info/services/${category.id}`}
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to {category.title}
          </Link>
          <Link 
            href="/services"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            View All Services →
          </Link>
        </div>
      </div>
    </div>
    <Footer />
        </div>
  );
}