"use client";

import React, { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import { Search, X, Grid3X3, List, Filter } from "lucide-react";
import { TopBar } from "@/components/top-bar";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Breadcrumbs } from "@/components/breadcrumbs";

type Category = "for-sale" | "services" | "jobs" | "notices";

type Ad = {
  id: number;
  title: string;
  category: Category;
  description: string;
  image?: string;
  featured?: boolean;
  contact?: string;
  date: string;
};

const DEFAULT_IMAGE = "/ads.jpg";

const INITIAL_ADS: Ad[] = [
  { id: 1, title: "Bicycle — Good condition", category: "for-sale", description: "Well-maintained bicycle, 21-speed. Contact: 077-1234567", image: "/bicycle.webp", featured: true, contact: "077-1234567", date: "2025-10-12" },
  { id: 2, title: "Math Tutor Available", category: "services", description: "Experienced tutor for grade 6-11. Call 077-9876543", image: "/tutor.jpeg", featured: false, contact: "077-9876543", date: "2025-10-10" },
  { id: 3, title: "Housekeeping Job", category: "jobs", description: "Part-time, 3 days a week. Contact via SMS", featured: false, date: "2025-10-09" },
  { id: 4, title: "Community Meeting Notice", category: "notices", description: "Town hall meeting on Oct 20 at 6pm.", featured: true, date: "2025-10-08" },
  { id: 5, title: "Used Mobile Phone", category: "for-sale", description: "Phone in working order, small scratch. Price negotiable.", image: "/phone.avif", featured: false, date: "2025-10-07" },
];

const formatDate = (iso: string) => {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString();
  } catch {
    return iso;
  }
};

export default function AdsPage(): JSX.Element {
  const [ads, setAds] = useState<Ad[]>(INITIAL_ADS);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<Category[]>([]);
  const [sortBy, setSortBy] = useState("all");
  const [page, setPage] = useState(1);
  const [viewMode, setViewMode] = useState<"grid" | "masonry">("grid");
  const [showFilters, setShowFilters] = useState(false);
  
  const PAGE_SIZE = 6;

  const [activeAd, setActiveAd] = useState<Ad | null>(null);
  const [showModal, setShowModal] = useState(false);

  const [posting, setPosting] = useState(false);
  const [message, setMessage] = useState("");

  // Available categories for filtering
  const categories: Category[] = ["for-sale", "services", "jobs", "notices"];

  const toggleCategory = (category: Category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
    setPage(1);
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setSortBy("all");
    setPage(1);
  };

  const filtered = useMemo(() => {
    let result = ads.filter(ad => {
      // Search filter
      const matchesSearch = searchTerm === "" || 
        `${ad.title} ${ad.description}`.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Category filter
      const matchesCategory = selectedCategories.length === 0 || 
        selectedCategories.includes(ad.category);
      
      return matchesSearch && matchesCategory;
    });

    // Sort filter
    if (sortBy === "rating") {
      // For ads, we can use featured as a proxy for "rating"
      result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
    } else if (sortBy === "name") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }
    // "all" keeps original order (by date)

    return result;
  }, [ads, searchTerm, selectedCategories, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const pageItems = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    return filtered.slice(start, start + PAGE_SIZE);
  }, [filtered, page]);

  useEffect(() => {
    if (page > totalPages) setPage(1);
  }, [totalPages]);

  const openAd = (ad: Ad) => {
    setActiveAd(ad);
    setShowModal(true);
  };

  const closeModal = () => {
    setActiveAd(null);
    setShowModal(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setPosting(true);
    setMessage("");
    const fd = new FormData(e.currentTarget);
    const newAd: Ad = {
      id: Date.now(),
      title: (fd.get("title") as string) || "Untitled",
      category: (fd.get("category") as Category) || "for-sale",
      description: (fd.get("description") as string) || "",
      image: (fd.get("imageUrl") as string) || undefined,
      contact: (fd.get("contact") as string) || undefined,
      featured: false,
      date: new Date().toISOString().slice(0, 10),
    };

    setTimeout(() => {
      setAds((prev) => [newAd, ...prev]);
      setPosting(false);
      setMessage("Thanks — your ad has been submitted for review.");
      (e.target as HTMLFormElement).reset();
      setPage(1);
    }, 600);
  };

  const getCategoryLabel = (category: Category): string => {
    const labels = {
      "for-sale": "For Sale",
      "services": "Services", 
      "jobs": "Jobs",
      "notices": "Notices"
    };
    return labels[category];
  };

  return (
    <div className="min-h-screen">
      <TopBar />
      <Navigation />

      <main>
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Community Ads" }]} />

        {/* Hero Section */}
        <section className="section-x relative from-primary">
          <div className="absolute inset-0">
            <img
              src="/social-hero.jpg"
              alt="Mannar Community Marketplace"
              className="w-full h-full object-cover opacity-90"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          <div className="relative text-center z-10 py-20 px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Mannar Community Marketplace
            </h1>
            <p className="text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed">
              Buy, sell, find services, and connect with your neighbors. A trusted platform for Mannar residents to share opportunities and build community.
            </p>
          </div>
        </section>

        {/* Enhanced Sticky Filter Section */}
        <section className="sticky top-16 z-10 bg-white shadow-sm py-6">
          <div className="container-x mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
              {/* Search */}
              <div className="relative w-full md:w-2/5">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" aria-hidden="true" />
                <input
                  type="text"
                  placeholder="Search ads by title, description, or contact..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setPage(1);
                  }}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-shadow"
                  aria-label="Search ads"
                />
                {searchTerm && (
                  <button
                    onClick={() => setSearchTerm("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    aria-label="Clear search"
                  >
                    <X className="w-5 h-5" />
                  </button>
                )}
              </div>

              <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
                {/* View Toggle */}
                <div className="flex bg-gray-100 rounded-lg p-1.5 border border-gray-200">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded-md transition-all duration-300 ${
                      viewMode === "grid" ? "bg-white shadow-sm border border-gray-300" : "hover:bg-gray-200"
                    }`}
                    title="Grid View"
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("masonry")}
                    className={`p-2 rounded-md transition-all duration-300 ${
                      viewMode === "masonry" ? "bg-white shadow-sm border border-gray-300" : "hover:bg-gray-200"
                    }`}
                    title="Masonry View"
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>

                {/* Sort Filter */}
                <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-4 py-2.5">
                  <span className="text-gray-700 font-medium whitespace-nowrap">Sort By:</span>
                  <select
                    value={sortBy}
                    onChange={(e) => {
                      setSortBy(e.target.value);
                      setPage(1);
                    }}
                    className="bg-transparent border-none focus:ring-0 focus:outline-none"
                    aria-label="Sort ads"
                  >
                    <option value="all">Newest First</option>
                    <option value="rating">Featured</option>
                    <option value="name">Title (A-Z)</option>
                  </select>
                </div>

                {/* Filter Toggle */}
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2 px-4 py-2.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors font-medium"
                  aria-expanded={showFilters}
                  aria-controls="category-filters"
                >
                  <Filter className="w-5 h-5" aria-hidden="true" />
                  <span>Categories</span>
                  {selectedCategories.length > 0 && (
                    <span className="bg-primary text-white text-sm rounded-full h-6 w-6 flex items-center justify-center">
                      {selectedCategories.length}
                    </span>
                  )}
                </button>

                {/* Clear Filters */}
                {(searchTerm || selectedCategories.length > 0 || sortBy !== "all") && (
                  <button
                    onClick={clearFilters}
                    className="flex items-center gap-2 px-4 py-2.5 text-gray-600 hover:text-primary transition-colors font-medium"
                    aria-label="Clear all filters"
                  >
                    <X className="w-5 h-5" />
                    <span>Clear All</span>
                  </button>
                )}
              </div>
            </div>

            {/* Category Filters */}
            {showFilters && (
              <div id="category-filters" className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-medium text-gray-700 mb-4">Filter by Category</h3>
                <div className="flex flex-wrap gap-3">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => toggleCategory(category)}
                      className={`px-4 py-2 rounded-full font-medium transition-all ${
                        selectedCategories.includes(category)
                          ? "bg-primary text-white shadow-md"
                          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                      }`}
                      aria-pressed={selectedCategories.includes(category)}
                    >
                      {getCategoryLabel(category)}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Main Content */}
        <div className="px-4 py-8 container-x">
          {/* Results Count */}
          <div className="mb-6 text-gray-600">
            Showing {pageItems.length} of {filtered.length} ads
            {(searchTerm || selectedCategories.length > 0) && (
              <span className="text-sm text-gray-500 ml-2">
                (filtered from {ads.length} total)
              </span>
            )}
          </div>

          {/* Ads Grid */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className={`grid ${viewMode === "grid" ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"} gap-6`}>
                {pageItems.length === 0 && (
                  <div className="col-span-full bg-white p-8 rounded-2xl shadow text-center border border-gray-200">
                    <p className="text-gray-500 text-lg">No ads found matching your criteria.</p>
                    {(searchTerm || selectedCategories.length > 0) && (
                      <button
                        onClick={clearFilters}
                        className="mt-3 text-primary hover:underline"
                      >
                        Clear filters to see all ads
                      </button>
                    )}
                  </div>
                )}
                {pageItems.map((ad) => (
                  <article key={ad.id} className="bg-white rounded-2xl shadow overflow-hidden border border-gray-200 hover:shadow-md transition-shadow">
                    <button onClick={() => openAd(ad)} className="w-full text-left">
                      <div className="h-44 bg-gray-100 overflow-hidden relative">
                        <Image 
                          src={ad.image ?? DEFAULT_IMAGE} 
                          alt={ad.title} 
                          fill 
                          className="object-cover"
                        />
                        {ad.featured && (
                          <div className="absolute top-3 left-3 bg-yellow-500 text-white px-2 py-1 rounded text-xs font-medium">
                            Featured
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-gray-900">{ad.title}</h3>
                        <p className="text-sm text-gray-600 mt-2">
                          {ad.description.slice(0, 120)}{ad.description.length > 120 ? '...' : ''}
                        </p>
                        <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                          <span className="capitalize bg-gray-100 px-2 py-1 rounded">
                            {getCategoryLabel(ad.category)}
                          </span>
                          <span>{formatDate(ad.date)}</span>
                        </div>
                      </div>
                    </button>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-8 flex justify-center">
                  <nav className="inline-flex items-center gap-2">
                    {Array.from({ length: totalPages }).map((_, i) => (
                      <button 
                        key={i} 
                        onClick={() => setPage(i + 1)} 
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          page === i + 1 
                            ? 'bg-primary text-white shadow-md' 
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-300'
                        }`}
                      >
                        {i + 1}
                      </button>
                    ))}
                  </nav>
                </div>
              )}
            </div>

            <aside className="space-y-6">
              <div className="bg-white p-6 rounded-2xl shadow border border-gray-200">
                <h4 className="font-semibold text-gray-900 text-lg mb-3">Advert Guidelines</h4>
                <ol className="text-sm text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    Keep text clear & truthful
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    No illegal or harmful content
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    Prefer local contact info
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary font-bold mr-2">•</span>
                    All ads are reviewed before publishing
                  </li>
                </ol>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow border border-gray-200 text-center">
                <h4 className="font-semibold text-gray-900 text-lg mb-2">Need help?</h4>
                <p className="text-sm text-gray-600 mb-4">Our community team is here to assist you</p>
                <p className="text-primary font-medium mb-4">Call: +94 76 482 2492</p>
                <button 
                  onClick={() => document.getElementById("post-form")?.scrollIntoView({ behavior: 'smooth' })} 
                  className="w-full px-4 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
                >
                  Post an Ad
                </button>
              </div>
            </aside>
          </section>

          {/* Post Form Section - Uncomment when needed */}
          {/* <section id="post-form" className="max-w-3xl mx-auto mt-12">
            ... your post form code ...
          </section> */}
        </div>
      </main>

      <Footer />

      {/* Ad Detail Modal */}
      {showModal && activeAd && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="max-w-3xl w-full bg-white rounded-2xl shadow-lg p-6 relative">
            <button 
              onClick={closeModal} 
              className="absolute top-4 right-4 p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1">
                <div className="relative h-64 w-full">
                  <Image 
                    src={activeAd.image ?? DEFAULT_IMAGE} 
                    alt={activeAd.title} 
                    fill
                    className="object-cover rounded-lg"
                  />
                  {activeAd.featured && (
                    <div className="absolute top-3 left-3 bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </div>
                  )}
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-semibold text-gray-900">{activeAd.title}</h3>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm capitalize">
                    {getCategoryLabel(activeAd.category)}
                  </span>
                </div>
                <p className="text-gray-600 mt-4 leading-relaxed">{activeAd.description}</p>
                {activeAd.contact && (
                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-500">Contact Information</p>
                    <p className="text-lg font-medium text-gray-900 mt-1">{activeAd.contact}</p>
                  </div>
                )}
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm text-gray-500">Posted: {formatDate(activeAd.date)}</p>
                  <div className="flex gap-3">
                    {activeAd.contact && (
                      <a 
                        href={`tel:${activeAd.contact}`} 
                        className="px-6 py-2 rounded-lg bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
                      >
                        Call Now
                      </a>
                    )}
                    <button 
                      onClick={() => { 
                        if (navigator.share) {
                          navigator.share({ 
                            title: activeAd.title, 
                            text: activeAd.description,
                            url: window.location.href
                          }); 
                        } else {
                          navigator.clipboard.writeText(window.location.href);
                          alert('Ad link copied to clipboard!');
                        }
                      }} 
                      className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-50 transition-colors"
                    >
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}