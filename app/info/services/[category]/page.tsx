// app/services/[category]/page.tsx
'use client';

import { useParams, useRouter } from 'next/navigation';
import { serviceCategories } from '@/lib/data/services';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { TopBar } from "@/components/top-bar";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";


export default function CategoryDetailPage() {
  const params = useParams();
  const router = useRouter();
  const categoryId = params.category as string;

  const category = serviceCategories.find(cat => cat.id === categoryId);

  if (!category) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
          <TopBar />
          <Navigation />
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                Home
              </Link>
            </li>
            <li>
              <svg className="flex-shrink-0 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li>
              <Link href="/services" className="text-gray-500 hover:text-gray-700">
                Services
              </Link>
            </li>
            <li>
              <svg className="flex-shrink-0 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </li>
            <li>
              <span className="text-gray-700 font-medium">{category.title}</span>
            </li>
          </ol>
        </nav>

        {/* Category Header */}
        <div className={`rounded-lg p-8 mb-8 ${category.color}`}>
          <div className="flex items-center mb-4">
            <span className="text-5xl mr-4">{category.icon}</span>
            <div>
              <h1 className="text-4xl font-bold text-gray-900">{category.title}</h1>
              <p className="text-lg text-gray-600 mt-2">{category.description}</p>
            </div>
          </div>
        </div>

        {/* Sub Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {category.subServices.map((subService, index) => (
            <div
              key={subService.id}
              className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  {subService.title}
                </h3>
                <span className="text-2xl text-gray-400">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </div>
              <p className="text-gray-600 mb-6">{subService.description}</p>
              <button
                onClick={() => router.push(`/info/services/${category.id}/${subService.id}`)}
                className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200"
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>

        {/* Related Categories */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Other Service Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serviceCategories
              .filter(cat => cat.id !== categoryId)
              .map(cat => (
                <Link
                  key={cat.id}
                  href={`/info/services/${cat.id}`}
                  className="text-center p-4 rounded-lg border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-colors duration-200"
                >
                  <div className="text-2xl mb-2">{cat.icon}</div>
                  <div className="text-sm font-medium text-gray-900">{cat.title}</div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
    <Footer />
        </div>
  );
}