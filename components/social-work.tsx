'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"

interface Initiative {
  description: string
  date: string
  image: string
}

interface Ad {
  id: number
  title: string
  category: string
  description: string
  image?: string
  featured?: boolean
  contact?: string
  date: string
}

// Social Work Initiatives
const initiatives: Initiative[] = [
  { description: "A youth-driven mission across Mannar’s beaches — from Pesalai to Talaimannar — focused on cleaning shorelines and educating fishermen and students on marine conservation and plastic reduction.", date: "August 12, 2025", image: "/mannar-coast.jpg" },
  { description: "A social entrepreneurship project empowering Mannar’s women to preserve traditional weaving and handloom artistry, promoting self-employment through skill training and digital marketing support.", date: "July 22, 2025", image: "/mannar-handloom.jpg" },
  { description: "An awareness and support campaign providing safety gear, financial literacy training, and sustainable fishing practices for Mannar’s coastal fishing communities.", date: "June 30, 2025", image: "/mannar-coast.jpg" },
  { description: "A digital literacy and career guidance program helping Mannar’s rural youth gain coding, design, and language skills through weekend bootcamps and mentoring sessions.", date: "May 18, 2025", image: "/mannar-youth.jpg" },
  { description: "A community-led effort restoring Mannar’s vital mangroves, combining local fisherman knowledge with environmental science to protect coastlines and biodiversity.", date: "April 10, 2025", image: "/mannar-coast.jpg" },
  { description: "Mobile clinics and awareness drives offering free checkups, blood pressure screenings, and maternal health care in remote areas such as Erukkalampiddy and Nanattan.", date: "March 25, 2025", image: "/mannar-handloom.jpg" },
]

// Community Ads
const INITIAL_ADS: Ad[] = [
  { id: 1, title: "Bicycle — Good condition", category: "for-sale", description: "Well-maintained bicycle, 21-speed. Contact: 077-1234567", image: "/bicycle.webp", featured: true, contact: "077-1234567", date: "2025-10-12" },
  { id: 2, title: "Math Tutor Available", category: "services", description: "Experienced tutor for grade 6-11. Call 077-9876543", image: "/tutor.jpeg", featured: false, contact: "077-9876543", date: "2025-10-10" },
  { id: 3, title: "Housekeeping Job", category: "jobs", description: "Part-time, 3 days a week. Contact via SMS", featured: false, date: "2025-10-09" },
]

export function SocialWorkPage() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [selectedAd, setSelectedAd] = useState<Ad | null>(null)

  const toggleExpand = (index: number) => setExpandedIndex(expandedIndex === index ? null : index)
  const openAd = (ad: Ad) => setSelectedAd(ad)

  const getCategoryLabel = (category: string) => {
    switch (category) {
      case "for-sale": return "For Sale"
      case "services": return "Services"
      case "jobs": return "Jobs"
      case "notices": return "Notices"
      default: return category
    }
  }

  const formatDate = (date: string) => {
    const d = new Date(date)
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  // Only show the last 6 initiatives and last 3 ads
  const latestInitiatives = initiatives.slice(-6).reverse()
  const latestAds = INITIAL_ADS.slice(-3).reverse()

  return (
    <section className="py-16 px-4 md:px-8 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        {/* Hero Section */}
  <div className="text-center mb-12">
    <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
      How can we help you today?
    </h1>
    <p className="text-xl md:text-2xl text-gray-600 mb-6 max-w-2xl mx-auto">
      Choose the type of submission that best fits your needs
    </p>

    {/* Updated Button Style */}
    <Link
      href="/complaints"
      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
    >
      Start Your Submission
      <ArrowRight className="w-5 h-5" />
    </Link>

    <p className="mt-4 text-gray-500">
      Simple 4-step process • Average completion time: 5 minutes
    </p>
  </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

{/* Social Work Initiatives Section */}
<div className="lg:col-span-9">
  <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
    <h2 className="text-2xl font-bold text-primary mb-6">Social Work Initiatives</h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 flex-1">
      {latestInitiatives.map((item, idx) => {
        const expanded = expandedIndex === idx
        return (
          <div
            key={idx}
            className="bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
          >
            <div className="relative aspect-video overflow-hidden">
              <Image
                src={item.image || "/placeholder.svg"}
                alt="Initiative"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5 flex flex-col flex-1">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                <Calendar className="w-4 h-4 text-primary" />
                <span>{item.date}</span>
              </div>
              <p className={`text-gray-700 leading-relaxed ${expanded ? "line-clamp-none" : "line-clamp-4"} transition-all duration-300 flex-1`}>
                {item.description}
              </p>
              <button
                onClick={() => toggleExpand(idx)}
                className="mt-3 text-primary font-medium hover:underline text-sm self-start"
              >
                {expanded ? "Show less" : "Read more"}
              </button>
            </div>
          </div>
        )
      })}
    </div>

    {/* View All Button (Your Style) */}
    <div className="mt-12 text-center">
      <Link
        href="/info/social-work"
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
      >
        View All Initiatives
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  </div>
</div>

{/* Community Ads Section */}
<div className="lg:col-span-3">
  <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col">
    <h3 className="text-xl font-bold text-primary mb-4">Community Ads</h3>
    <div className="space-y-4 flex-1">
      {latestAds.map((ad) => (
        <article
          key={ad.id}
          className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
        >
          <button onClick={() => openAd(ad)} className="w-full text-left">
            <div className="h-36 bg-gray-100 overflow-hidden relative">
              <Image
                src={ad.image ?? "/placeholder.svg"}
                alt={ad.title}
                fill
                className="object-cover"
              />
              {ad.featured && (
                <span className="absolute top-2 left-2 bg-yellow-500 text-white px-2 py-1 rounded text-xs font-medium">
                  Featured
                </span>
              )}
            </div>
            <div className="p-3">
              <h4 className="font-semibold text-gray-900 text-sm leading-tight">{ad.title}</h4>
              <p className="text-xs text-gray-600 mt-1 line-clamp-2">{ad.description}</p>
              <div className="mt-2 flex items-center justify-between text-xs text-gray-500">
                <span className="bg-gray-100 px-2 py-1 rounded capitalize">{getCategoryLabel(ad.category)}</span>
                <span>{formatDate(ad.date)}</span>
              </div>
            </div>
          </button>
        </article>
      ))}
    </div>

    {/* View All Button (Your Style) */}
    <div className="mt-12 text-center">
      <Link
        href="/info/ads"
        className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
      >
        View All Ads
        <ArrowRight className="w-5 h-5" />
      </Link>
    </div>
  </div>
</div>


        </div>
      </div>
    </section>
  )
}
