// app/services/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { serviceCategories } from '@/lib/data/services';
import { ServiceCategory } from '@/lib/data/service';
import { TopBar } from "@/components/top-bar";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <TopBar />
      <Navigation />
      
      <div className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Our Services
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive range of community development programs 
              and services designed to improve quality of life for all citizens.
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {serviceCategories.map((category) => (
              <Link key={category.id} href={`/info/services/${category.id}`} className="block">
                <div
                  className="p-6 rounded-lg border-2 transition-all duration-300 hover:shadow-lg hover:scale-105 cursor-pointer flex flex-col justify-between min-h-[320px] bg-card border-border hover:border-primary/50"
                  onMouseEnter={() => setSelectedCategory(category.id)}
                  onMouseLeave={() => setSelectedCategory(null)}
                >
                  <div className="text-4xl mb-4 text-primary">{category.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{category.title}</h3>
                    <p className="text-muted-foreground text-sm">{category.description}</p>
                  </div>
                  <div className="mt-4 flex items-center text-primary font-medium">
                    View Services
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Quick Stats */}
          <div className="bg-card rounded-lg shadow-sm p-6 mb-12 border border-border">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-muted-foreground">Active Programs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">50K+</div>
                <div className="text-muted-foreground">Beneficiaries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">15+</div>
                <div className="text-muted-foreground">Communities Served</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">99%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="bg-gradient-to-r from-primary to-primary/80 rounded-xl p-8 text-primary-foreground text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help Finding a Service?</h2>
            <p className="mb-6 opacity-90 max-w-2xl mx-auto">
              Our dedicated support team is here to help you navigate our services and find exactly what you need.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-primary-foreground text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground/90 transition-colors"
              >
                Contact Support
              </Link>
              <Link 
                href="/faq" 
                className="border-2 border-primary-foreground text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary-foreground/10 transition-colors"
              >
                View FAQ
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}