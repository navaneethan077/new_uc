// app/services/[category]/[subService]/page.tsx
'use client';

import { useParams } from 'next/navigation';
import { serviceCategories } from '@/lib/data/services';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { TopBar } from "@/components/top-bar";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import Image from 'next/image';
import { useState } from 'react';

export default function SubServiceDetailPage() {
  const params = useParams();
  const categoryId = params.category as string;
  const subServiceId = params.subService as string;

  const category = serviceCategories.find(cat => cat.id === categoryId);
  const subService = category?.subServices.find(sub => sub.id === subServiceId);

  if (!category || !subService) {
    notFound();
  }

  const eventData = {
    title: "Cooperative School Shop Opening – Jan 2025",
    date: "January 15, 2025",
    bannerImage: "/hero1.png",
    description: "The UC Chairman inaugurated a cooperative school shop in Mannar to provide affordable books, stationery, and uniforms for students. This program ensures that every child has access to quality education resources.",
    impactStats: [
      { icon: "👨‍🎓", value: "500+", label: "students benefited" },
      { icon: "📚", value: "1,000+", label: "books supplied" },
      { icon: "💰", value: "40%", label: "cost reduction on school materials" }
    ],
    gallery: [
      { image: "/serv1.png", caption: "UC Chairman inaugurating the shop" },
      { image: "/serv2.png", caption: "Students exploring the new shop" },
      { image: "/serv1.png", caption: "Affordable stationery display" },
      { image: "/serv2.png", caption: "Community members attending the event" }
    ],
    testimonial: {
      text: "This school shop has made education affordable for our family. My children can now get all their school needs without financial burden.",
      author: "Parent from Mannar",
      role: "Local Community Member"
    }
  };

  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (imageKey: string) => {
    setImageErrors(prev => ({ ...prev, [imageKey]: true }));
  };

  const FallbackImage = ({ alt, className = "h-48" }: { alt: string; className?: string }) => (
    <div className={`bg-gray-200 flex items-center justify-center rounded-lg ${className}`}>
      <div className="text-center p-4">
        <div className="text-4xl mb-2">📷</div>
        <span className="text-gray-500 text-sm">{alt}</span>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col" style={{ "--primary": "oklch(0.2 0.08 250)" } as React.CSSProperties}>
      <TopBar />
      <Navigation />

      <div className="min-h-screen bg-gray-50 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="flex mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm flex-wrap">
              <li>
                <Link href="/" className="text-gray-500 hover:text-gray-700 transition-colors">
                  Home
                </Link>
              </li>
              <li className="flex items-center">
                <svg className="flex-shrink-0 h-4 w-4 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <Link href="/services" className="text-gray-500 hover:text-gray-700 transition-colors">
                  Services
                </Link>
              </li>
              <li className="flex items-center">
                <svg className="flex-shrink-0 h-4 w-4 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <Link href={`/info/services/${category.id}`} className="text-gray-500 hover:text-gray-700 transition-colors">
                  {category.title}
                </Link>
              </li>
              <li className="flex items-center">
                <svg className="flex-shrink-0 h-4 w-4 text-gray-400 mx-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
                <span className="font-medium" style={{ color: "var(--primary)" }}>{subService.title}</span>
              </li>
            </ol>
          </nav>

          {/* Banner Image */}
          <div className="relative h-80 md:h-96 rounded-xl overflow-hidden mb-8">
            {imageErrors.banner ? (
              <FallbackImage alt="School Shop Opening" className="w-full h-full" />
            ) : (
              <Image
                src={eventData.bannerImage}
                alt="School Shop Opening"
                fill
                className="object-cover"
                priority
                onError={() => handleImageError('banner')}
              />
            )}
            <div className="absolute inset-0  bg-opacity-25 flex items-end">
              <div className="p-6 text-white">
                <span className="px-3 py-1 rounded-full text-sm font-medium mb-2 inline-block" style={{ backgroundColor: "var(--primary)" }}>
                  {eventData.date}
                </span>
                <h1 className="text-3xl md:text-4xl font-bold mb-2" style={{ color: "var(--primary)" }}>
                  {eventData.title}
                </h1>
              </div>
            </div>
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                <h2 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)" }}>About the Initiative</h2>
                <p className="text-gray-700 text-lg leading-relaxed">{eventData.description}</p>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 mb-6">
                <h3 className="text-xl font-bold mb-6 text-center" style={{ color: "var(--primary)" }}>Program Impact</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {eventData.impactStats.map((stat, index) => (
                    <div key={index} className="text-center p-4">
                      <div className="text-3xl mb-2">{stat.icon}</div>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <div className="text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-2xl font-bold mb-6" style={{ color: "var(--primary)" }}>Event Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {eventData.gallery.map((photo, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div className="relative h-48 rounded-lg overflow-hidden mb-2">
                        {imageErrors[`gallery-${index}`] ? (
                          <FallbackImage alt={photo.caption} />
                        ) : (
                          <Image
                            src={photo.image}
                            alt={photo.caption}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-300"
                            onError={() => handleImageError(`gallery-${index}`)}
                          />
                        )}
                      </div>
                      <p className="text-sm text-gray-600 text-center">{photo.caption}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="text-yellow-400 text-4xl mb-4">"</div>
                <blockquote className="text-gray-700 italic mb-4">"{eventData.testimonial.text}"</blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold">{eventData.testimonial.author}</div>
                  <div className="text-sm text-gray-600">{eventData.testimonial.role}</div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h4 className="font-bold mb-4" style={{ color: "var(--primary)" }}>Get Involved</h4>
                <div className="space-y-3">
                  <button className="w-full px-4 py-3 rounded-lg font-medium flex items-center justify-center" style={{ backgroundColor: "var(--primary)", color: "#fff" }}>
                    Support This Program
                  </button>
                  <button className="w-full border border-gray-300 text-gray-700 px-4 py-3 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200">
                    Volunteer Opportunity
                  </button>
                  <button className="w-full border border-gray-300 text-gray-700 px-4 py-3 rounded-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200">
                    Download Report
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <h4 className="font-bold mb-3" style={{ color: "var(--primary)" }}>Contact Information</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>📞 (094) 123-4567</p>
                  <p>✉️ education@mannar.gov</p>
                  <p>📍 Mannar Education Center</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="bg-white rounded-xl shadow-sm p-6 mt-8">
            <h3 className="text-2xl font-bold mb-4" style={{ color: "var(--primary)" }}>Program Benefits</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2" style={{ color: "var(--primary)" }}>For Students</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Affordable educational materials</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Quality books and stationery</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Convenient access in the community</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2" style={{ color: "var(--primary)" }}>For Community</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Economic empowerment</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Job creation opportunities</li>
                  <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Sustainable education support</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-col sm:flex-row justify-between items-center pt-8 mt-8 border-t border-gray-200">
            <Link 
              href={`/info/services/${category.id}`}
              className="flex items-center font-medium mb-4 sm:mb-0"
              style={{ color: "var(--primary)" }}
            >
              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              Back to {category.title}
            </Link>
            <Link 
              href="/services"
              className="flex items-center font-medium"
              style={{ color: "var(--primary)" }}
            >
              View All Services
              <svg className="w-4 h-4 ml-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
