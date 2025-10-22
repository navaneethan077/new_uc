'use client';

import { useParams, useRouter } from 'next/navigation';
import { serviceCategories } from '@/lib/data/services';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { TopBar } from "@/components/top-bar";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { useState, useMemo } from 'react';

export default function CategoryDetailPage() {
  const params = useParams();
  const router = useRouter();
  const categoryId = params.category as string;

  const category = serviceCategories.find(cat => cat.id === categoryId);
  if (!category) notFound();

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filterOptions = ['All', 'Active', 'Upcoming', 'Completed'];

  const filteredSubServices = useMemo(() => {
    return category.subServices.filter((subService: any) => {
      const matchesSearch =
        subService.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        subService.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesFilter =
        selectedFilter === 'all' ||
        (subService.status && subService.status.toLowerCase() === selectedFilter.toLowerCase());

      return matchesSearch && matchesFilter;
    });
  }, [category.subServices, searchTerm, selectedFilter]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <TopBar />
      <Navigation />

      <main className="flex-1 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex mb-8 text-sm text-gray-600" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="hover:text-gray-800">Home</Link>
              </li>
              <li>›</li>
              <li>
                <Link href="/services" className="hover:text-gray-800">Services</Link>
              </li>
              <li>›</li>
              <li className="font-medium text-gray-900">{category.title}</li>
            </ol>
          </nav>

          {/* Category Header */}
          <div className={`rounded-lg p-8 mb-10 ${category.color}`}>
            <div className="flex items-center mb-4">
              <span className="text-5xl mr-4">{category.icon}</span>
              <div>
                <h1 className="text-4xl font-bold text-gray-900">{category.title}</h1>
                <p className="text-lg text-gray-700 mt-2">{category.description}</p>
              </div>
            </div>
          </div>

          {/* Main Grid (9 + 3 layout) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column - Sub Services */}
            <div className="lg:col-span-9">
              {/* Search & Filter */}
              <div className="bg-white border border-gray-200 rounded-lg shadow-sm p-6 mb-8">
                <div className="flex flex-col md:flex-row gap-4">
                  <input
                    type="text"
                    placeholder="Search sub-services..."
                    className="w-full md:flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 outline-none"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                 
                </div>
              </div>

              {/* Filtered Sub Services */}
              {filteredSubServices.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredSubServices.map((subService: any, index: number) => (
                    <div
                      key={subService.id}
                      className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-all duration-300"
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
                        onClick={() =>
                          router.push(`/info/services/${category.id}/${subService.id}`)
                        }
                        className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-200"
                      >
                        Learn More →
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500">
                  <p className="text-lg">No sub-services found matching your criteria.</p>
                </div>
              )}
            </div>

            {/* Right Column - Other Categories */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">
                  Other Service Categories
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-3">
                  {serviceCategories
                    .filter((cat) => cat.id !== categoryId)
                    .map((cat) => (
                      <Link
                        key={cat.id}
                        href={`/info/services/${cat.id}`}
                        className="flex flex-col items-center justify-center text-center p-4 border border-gray-200 rounded-lg hover:bg-blue-50 hover:border-blue-300 transition-all duration-200"
                      >
                        <div className="text-3xl mb-2">{cat.icon}</div>
                        <div className="text-sm font-medium text-gray-900">{cat.title}</div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
