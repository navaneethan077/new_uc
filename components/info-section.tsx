"use client"
import {  ArrowRight  } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"
import { serviceCategories } from '@/lib/data/services';
import { useState } from 'react';
import Link from 'next/link';


export function InfoSection() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  return (
    <section id="info" className="section-x py-16 bg-gradient-to-b from-white to-blue-50"> {/* Changed from bg-primary to bg-white */}
      <div className="container-x">
        {/* Main Heading — Now uses #111827 (foreground) on white */}
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

      

        {/* Bottom CTA — Now uses foreground color instead of primary */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
          <a
            href="/info/services"
            className="btn-outline text-foreground hover:text-primary hover:bg-primary/5 transition-colors"
          >
            {t.common.viewAll}
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  )
}