"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Filter, Calendar, Shield, X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useLanguage } from "@/lib/i18n/context";
import { translations } from "@/lib/i18n/translations";

interface Ad {
  id: number;
  title: string;
  description: string;
  image: string;
  link: string;
  category: string;
  date: string;
  urgent: boolean;
}

export function AdsSection() {
  const { language } = useLanguage();
  const t = translations[language].AdsSectionTranslations;
  const [activeAd, setActiveAd] = useState(0);
  const [showAllAds, setShowAllAds] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", "Important Notice", "Tender", "Event", "Public Notice"];

  // Sample ads data
  const ads: Ad[] = [
    {
      id: 1,
      title: "Property Tax Payment Deadline",
      description: "Last date for property tax payment is 31st December 2024. Pay online to avoid penalties.",
      image: "/ads/tax-deadline.jpg",
      link: "/tax-payment",
      category: "Important Notice",
      date: "2024-12-15",
      urgent: true
    },
    {
      id: 2,
      title: "Public Tender - Road Construction",
      description: "Bids invited for road construction project in Mannar town area. Submission deadline: 15th January 2025.",
      image: "/ads/tender-notice.jpg",
      link: "/tenders/road-construction",
      category: "Tender",
      date: "2024-12-10",
      urgent: false
    },
    {
      id: 3,
      title: "Cultural Festival 2024",
      description: "Annual Mannar Cultural Festival from 25th-30th December 2024 at Mannar Public Ground.",
      image: "/ads/festival.jpg",
      link: "/events/cultural-festival",
      category: "Event",
      date: "2024-12-05",
      urgent: false
    },
    {
      id: 4,
      title: "Water Supply Maintenance",
      description: "Water supply will be interrupted on 20th December 2024 for maintenance work.",
      image: "/ads/water-maintenance.jpg",
      link: "/notices/water-maintenance",
      category: "Public Notice",
      date: "2024-12-01",
      urgent: false
    },
    {
      id: 5,
      title: "New Business Registration",
      description: "Streamlined business registration process now available online for Mannar residents.",
      image: "/ads/business-reg.jpg",
      link: "/services/business-registration",
      category: "Important Notice",
      date: "2024-11-28",
      urgent: false
    },
    {
      id: 6,
      title: "Cleanliness Drive",
      description: "Join the city cleanliness drive on 18th December 2024. Volunteers welcome.",
      image: "/ads/cleanliness.jpg",
      link: "/events/cleanliness-drive",
      category: "Event",
      date: "2024-11-25",
      urgent: false
    }
  ];

  const filteredAds = ads.filter(ad => 
    ad.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (selectedCategory === "all" || ad.category === selectedCategory)
  );

  const displayedAds = filteredAds.slice(0, 3);
  const hasMoreAds = filteredAds.length > 3;

  const nextAd = () => {
    setActiveAd((prev) => (prev + 1) % displayedAds.length);
  };

  const prevAd = () => {
    setActiveAd((prev) => (prev - 1 + displayedAds.length) % displayedAds.length);
  };

  // Auto-rotate ads every 5 seconds
  useEffect(() => {
    if (displayedAds.length > 1) {
      const interval = setInterval(nextAd, 5000);
      return () => clearInterval(interval);
    }
  }, [displayedAds.length]);

  return (
    <>
      {/* Top Announcement Bar */}
      <div className="bg-primary text-primary-foreground py-3 px-4 border-b border-primary/20">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">{t.topBar.title}</span>
          </div>
          <button 
            onClick={() => setShowAllAds(true)}
            className="text-sm hover:underline flex items-center transition-all"
          >
            {t.topBar.viewAll} <ExternalLink className="w-3 h-3 ml-1" />
          </button>
        </div>
      </div>

      {/* Main Ads Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
            <Shield className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">{t.title}</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">{t.subtitle}</p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            <div className="flex-1 w-full relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder={t.searchPlaceholder}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category === "all" ? t.allCategories : category}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Ads Display */}
        {displayedAds.length > 0 ? (
          <>
            {/* Desktop Grid */}
            <div className="hidden lg:grid lg:grid-cols-3 gap-6 mb-8">
              {displayedAds.map((ad, index) => (
                <AdCard key={ad.id} ad={ad} isFeatured={index === 0} />
              ))}
            </div>

            {/* Mobile Carousel */}
            <div className="lg:hidden relative bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="relative h-80">
                {displayedAds.map((ad, index) => (
                  <div
                    key={ad.id}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === activeAd ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                  >
                    <MobileAdCard ad={ad} />
                  </div>
                ))}
              </div>
              
              {/* Carousel Controls */}
              {displayedAds.length > 1 && (
                <>
                  <button
                    onClick={prevAd}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                  >
                    <ChevronLeft className="w-5 h-5 text-primary" />
                  </button>
                  <button
                    onClick={nextAd}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition-all"
                  >
                    <ChevronRight className="w-5 h-5 text-primary" />
                  </button>
                  
                  {/* Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {displayedAds.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveAd(index)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          index === activeAd ? 'bg-primary' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* View More Button */}
            {hasMoreAds && (
              <div className="text-center mt-8">
                <button
                  onClick={() => setShowAllAds(true)}
                  className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-all font-medium inline-flex items-center"
                >
                  {t.viewAll} ({filteredAds.length} {t.notices})
                </button>
              </div>
            )}
          </>
        ) : (
          /* No Results */
          <div className="text-center py-12 bg-gray-50 rounded-xl">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-700 mb-2">{t.noResults.title}</h3>
            <p className="text-gray-500">{t.noResults.description}</p>
          </div>
        )}
      </section>

      {/* Full Ads Modal */}
      {showAllAds && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col">
            {/* Modal Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">{t.modal.title}</h3>
                <p className="text-gray-600 mt-1">{t.modal.subtitle}</p>
              </div>
              <button
                onClick={() => setShowAllAds(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-all"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAds.map((ad) => (
                  <AdCard key={ad.id} ad={ad} />
                ))}
              </div>
              
              {filteredAds.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">{t.noResults.title}</h3>
                  <p className="text-gray-500">{t.noResults.description}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function AdCard({ ad, isFeatured = false }: { ad: Ad; isFeatured?: boolean }) {
  const { language } = useLanguage();
  const t = translations[language].AdsSectionTranslations;

  return (
    <div className={`bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg group ${
      isFeatured ? 'lg:col-span-1' : ''
    }`}>
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200">
        <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-all" />
        {ad.urgent && (
          <span className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
            {t.urgent}
          </span>
        )}
        <span className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
          {ad.category}
        </span>
        <div className="absolute bottom-3 left-3 flex items-center text-gray-600 text-xs bg-white/90 px-2 py-1 rounded">
          <Calendar className="w-3 h-3 mr-1" />
          {ad.date}
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 text-lg leading-tight">
          {ad.title}
        </h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3 leading-relaxed">
          {ad.description}
        </p>
        <Link 
          href={ad.link}
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm transition-all group/link"
        >
          {t.readMore}
          <ExternalLink className="w-4 h-4 ml-1 transform group-hover/link:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}

function MobileAdCard({ ad }: { ad: Ad }) {
  const { language } = useLanguage();
  const t = translations[language].AdsSectionTranslations;

  return (
    <div className="h-full flex flex-col">
      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex-shrink-0">
        {ad.urgent && (
          <span className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
            {t.urgent}
          </span>
        )}
        <span className="absolute top-3 right-3 bg-primary text-white px-3 py-1 rounded-full text-xs font-medium">
          {ad.category}
        </span>
      </div>
      
      <div className="flex-1 p-5">
        <div className="flex items-center text-gray-500 text-xs mb-2">
          <Calendar className="w-3 h-3 mr-1" />
          {ad.date}
        </div>
        <h3 className="font-bold text-gray-900 mb-2 text-lg">{ad.title}</h3>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {ad.description}
        </p>
        <Link 
          href={ad.link}
          className="inline-flex items-center text-primary hover:text-primary/80 font-medium text-sm"
        >
          {t.readMore}
          <ExternalLink className="w-4 h-4 ml-1" />
        </Link>
      </div>
    </div>
  );
}