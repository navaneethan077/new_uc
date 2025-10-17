'use client';

import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { serviceCategories } from '@/lib/data/services';
import { useState } from 'react';
import Link from 'next/link';

export function InfoSection() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section
      id="info"
      className="section-x py-20 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden"
    >
      <div className="container-x text-center mb-16">
        {/* Decorative subtle background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/40 via-transparent to-blue-200/30 blur-3xl -z-10" />

        {/* Top heading section */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#1C2B78] mb-4">
          Our Services
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Explore our comprehensive range of community development programs and
          services designed to improve the quality of life for all citizens.
        </p>
      </div>

      <div className="container-x">
        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {serviceCategories.map((category) => (
            <Link key={category.id} href={`/info/services/${category.id}`} className="block group">
              <div
                className={`p-8 rounded-2xl border-2 bg-white shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-500 flex flex-col justify-between min-h-[320px] border-gray-200 hover:border-[#1C2B78]/50`}
                onMouseEnter={() => setSelectedCategory(category.id)}
                onMouseLeave={() => setSelectedCategory(null)}
              >
                <div className="text-5xl mb-6 text-[#1C2B78] flex justify-center">
                  {category.icon}
                </div>

                <div className="flex-1 text-center">
                  <h3 className="text-xl font-semibold text-[#111827] mb-2 group-hover:text-[#1C2B78] transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div className="mt-6 flex justify-center items-center text-[#1C2B78] font-medium group-hover:gap-2 transition-all">
                  View Services
                  <svg
                    className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div
          className="text-center mt-10 animate-fade-in-up"
          style={{ animationDelay: '0.8s' }}
        >
          <a
            href="/info/services"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-[#1C2B78] text-[#1C2B78] font-medium hover:bg-[#1C2B78] hover:text-white transition-all duration-300"
          >
            {t.common.viewAll || 'View All Services'}
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
