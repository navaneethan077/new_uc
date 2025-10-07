"use client"

import { useMemo, useState } from "react"
import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import {
  Megaphone,
  Filter,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Download,
  Eye,
  Share2,
  Bell,
  Bookmark,
  Calendar,
  MapPin,
  Clock,
  AlertTriangle
} from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"

// Sample ads data
const sampleAds = [
  {
    id: "1",
    title: "Public Tender for Road Construction",
    description: "Invitation for bids for the construction of Main Street road development project. All interested contractors are welcome to apply.",
    category: "Tenders",
    date: "2024-01-15",
    views: 245,
    downloads: 89,
    priority: "high",
    location: "Main Street, Mannar",
    validUntil: "2024-02-15",
    contactInfo: "Tender Board - 025-1234567",
    time: "10:00 AM"
  },
  {
    id: "2",
    title: "Community Health Camp",
    description: "Free health checkup camp organized by Mannar UC in collaboration with District Hospital.",
    category: "Health",
    date: "2024-01-12",
    views: 189,
    downloads: 45,
    priority: "normal",
    location: "Urban Council Grounds",
    validUntil: "2024-01-20",
    contactInfo: "Health Dept - 025-1234568",
    time: "8:00 AM - 4:00 PM"
  },
  {
    id: "3",
    title: "Job Vacancies - Office Staff",
    description: "Applications are invited for various administrative positions in the Urban Council office.",
    category: "Jobs",
    date: "2024-01-10",
    views: 567,
    downloads: 234,
    priority: "urgent",
    location: "Mannar UC Office",
    validUntil: "2024-01-25",
    contactInfo: "HR Department - 025-1234569",
    time: "9:00 AM - 3:00 PM"
  },
  {
    id: "4",
    title: "Water Supply Interruption Notice",
    description: "Temporary water supply interruption in Zone 4 for pipeline maintenance work.",
    category: "Public Notices",
    date: "2024-01-08",
    views: 345,
    downloads: 123,
    priority: "high",
    location: "Zone 4, Mannar",
    validUntil: "2024-01-09",
    contactInfo: "Water Supply Dept - 025-1234570",
    time: "8:00 AM - 5:00 PM"
  },
  {
    id: "5",
    title: "Cleanliness Awareness Program",
    description: "Community program to promote cleanliness and waste management practices.",
    category: "Community Programs",
    date: "2024-01-05",
    views: 156,
    downloads: 67,
    priority: "normal",
    location: "All Wards",
    validUntil: "2024-01-30",
    contactInfo: "Environment Dept - 025-1234571",
    time: "2:00 PM"
  },
  {
    id: "6",
    title: "Cultural Festival 2024",
    description: "Annual cultural festival celebrating the heritage and traditions of Mannar.",
    category: "Events",
    date: "2024-01-03",
    views: 278,
    downloads: 98,
    priority: "normal",
    location: "Town Hall",
    validUntil: "2024-01-10",
    contactInfo: "Cultural Affairs - 025-1234572",
    time: "6:00 PM"
  },
  {
    id: "7",
    title: "Tax Collection Schedule",
    description: "Updated schedule for property tax collection for the first quarter of 2024.",
    category: "Public Notices",
    date: "2024-01-02",
    views: 432,
    downloads: 187,
    priority: "high",
    location: "Mannar UC Office",
    validUntil: "2024-03-31",
    contactInfo: "Revenue Dept - 025-1234573",
    time: "8:30 AM - 3:30 PM"
  },
  {
    id: "8",
    title: "Tender for Waste Management",
    description: "Bids invited for comprehensive waste management services in urban areas.",
    category: "Tenders",
    date: "2024-01-01",
    views: 198,
    downloads: 76,
    priority: "urgent",
    location: "Mannar Municipality",
    validUntil: "2024-01-31",
    contactInfo: "Tender Board - 025-1234574",
    time: "11:00 AM"
  }
]

export default function AdsPage() {
  const [timeFilter, setTimeFilter] = useState<"all" | "24h" | "week" | "month" | "year">("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [sortBy, setSortBy] = useState<"newest" | "oldest">("newest")
  const [page, setPage] = useState(1)
  const [selectedAd, setSelectedAd] = useState<string | null>(null)
  const pageSize = 6

  const categories = [
    "All Categories",
    "Public Notices",
    "Events",
    "Tenders",
    "Health",
    "Community Programs",
    "Jobs"
  ]

  const featuredAds = sampleAds.filter(ad => ad.priority === "urgent" || ad.priority === "high").slice(0, 3)

  const filteredAndSorted = useMemo(() => {
    const now = new Date()
    let filtered = [...sampleAds]

    // Time filter
    if (timeFilter !== "all") {
      filtered = filtered.filter(ad => {
        const adDate = new Date(ad.date)
        const diffTime = now.getTime() - adDate.getTime()
        const diffDays = diffTime / (1000 * 60 * 60 * 24)

        switch (timeFilter) {
          case "24h":
            return diffDays <= 1
          case "week":
            return diffDays <= 7
          case "month":
            return diffDays <= 30
          case "year":
            return diffDays <= 365
          default:
            return true
        }
      })
    }

    // Category filter
    if (selectedCategory !== "all") {
      filtered = filtered.filter(ad => ad.category === selectedCategory)
    }

    // Search filter
    if (searchTerm.trim() !== "") {
      const q = searchTerm.toLowerCase()
      filtered = filtered.filter(ad =>
        ad.title.toLowerCase().includes(q) ||
        ad.description.toLowerCase().includes(q) ||
        ad.category.toLowerCase().includes(q)
      )
    }

    // Sort
    if (sortBy === "newest") {
      filtered.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    } else {
      filtered.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    }

    return filtered
  }, [timeFilter, selectedCategory, searchTerm, sortBy])

  const totalPages = Math.ceil(filteredAndSorted.length / pageSize)
  const start = (page - 1) * pageSize
  const visibleItems = filteredAndSorted.slice(start, start + pageSize)

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("all")
    setTimeFilter("all")
    setSortBy("newest")
    setPage(1)
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "urgent":
        return "bg-red-100 text-red-800 border-red-200"
      case "high":
        return "bg-orange-100 text-orange-800 border-orange-200"
      default:
        return "bg-blue-100 text-blue-800 border-blue-200"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Navigation />

      {/* Breadcrumbs */}
      <div className="container-x py-4">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Advertisements" },
          ]}
        />
      </div>

      {/* Hero Section */}
      <section className="relative py-16 bg-[oklch(0.2_0.08_250)]">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container-x text-center relative z-10">
          <div className="flex items-center justify-center mb-6">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Megaphone className="w-10 h-10 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Advertisements
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-2">
            Stay updated with the latest announcements, public notices, and events from the Mannar Urban Council.
          </p>
          <div className="flex justify-center gap-4 text-white/80 text-lg">
            <span>දැන්වීම්</span>
            <span>•</span>
            <span>விளம்பரங்கள்</span>
          </div>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="sticky top-16 z-10 bg-white shadow-sm py-6 border-b border-gray-200">
        <div className="container-x">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-2/5">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search ads by title, category, or date..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setPage(1)
                }}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[oklch(0.2_0.08_250)] focus:border-[oklch(0.2_0.08_250)] focus:outline-none bg-white text-gray-900"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value)
                  setPage(1)
                }}
                className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[oklch(0.2_0.08_250)] focus:border-[oklch(0.2_0.08_250)] focus:outline-none bg-white text-gray-900"
              >
                {categories.map(category => (
                  <option key={category} value={category === "All Categories" ? "all" : category}>
                    {category}
                  </option>
                ))}
              </select>

              {/* Time Filter */}
              <select
                value={timeFilter}
                onChange={(e) => {
                  setTimeFilter(e.target.value as "all" | "24h" | "week" | "month" | "year")
                  setPage(1)
                }}
                className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[oklch(0.2_0.08_250)] focus:border-[oklch(0.2_0.08_250)] focus:outline-none bg-white text-gray-900"
              >
                <option value="all">All Time</option>
                <option value="24h">Last 24 Hours</option>
                <option value="week">Past Week</option>
                <option value="month">Past Month</option>
                <option value="year">Past Year</option>
              </select>

              {/* Sort By */}
              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value as "newest" | "oldest")
                  setPage(1)
                }}
                className="px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[oklch(0.2_0.08_250)] focus:border-[oklch(0.2_0.08_250)] focus:outline-none bg-white text-gray-900"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
              </select>

              {/* Clear Filters */}
              {(searchTerm || selectedCategory !== "all" || timeFilter !== "all") && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-4 py-3 text-gray-600 hover:text-[oklch(0.2_0.08_250)] transition-colors font-medium border border-gray-300 rounded-lg hover:border-[oklch(0.2_0.08_250)]"
                >
                  <X className="w-5 h-5" />
                  <span>Clear Filters</span>
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Ads */}
      {featuredAds.length > 0 && (
        <section className="py-8 bg-orange-50 border-b border-orange-200">
          <div className="container-x">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
              Featured Ads
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {featuredAds.map((ad) => (
                <div
                  key={ad.id}
                  className="bg-white rounded-xl shadow-md border-l-4 border-l-orange-500 p-6 cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => setSelectedAd(ad.id)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getPriorityColor(ad.priority)} border`}>
                      {ad.priority.toUpperCase()}
                    </span>
                    <span className="text-sm text-gray-500">
                      {new Date(ad.date).toLocaleDateString()}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2">
                    {ad.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {ad.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span className="bg-gray-100 px-2 py-1 rounded">
                      {ad.category}
                    </span>
                    <button className="text-[oklch(0.2_0.08_250)] hover:text-[oklch(0.3_0.08_250)] font-medium flex items-center gap-1">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="py-8">
        <div className="container-x">
          {/* Results Count */}
          <div className="mb-6 flex justify-between items-center">
            <p className="text-gray-600">
              Showing {Math.min(filteredAndSorted.length, start + 1)}-{Math.min(filteredAndSorted.length, start + pageSize)} of {filteredAndSorted.length} advertisements
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Ads Listing */}
            <div className="lg:col-span-3">
              {visibleItems.length === 0 ? (
                <div className="text-center py-16 bg-white rounded-xl shadow-sm">
                  <Megaphone className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-xl font-medium text-gray-900 mb-2">No advertisements found</h3>
                  <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
                  <button
                    onClick={clearFilters}
                    className="px-6 py-3 bg-[oklch(0.2_0.08_250)] text-white rounded-lg hover:bg-[oklch(0.3_0.08_250)] transition-colors font-medium"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <>
                  {/* Ads Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {visibleItems.map((ad) => (
                      <div
                        key={ad.id}
                        className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300"
                      >
                        <div className="p-6">
                          <div className="flex items-start justify-between mb-3">
                            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                              {ad.category}
                            </span>
                            <span className="text-sm text-gray-500 flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {new Date(ad.date).toLocaleDateString()}
                            </span>
                          </div>

                          <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                            {ad.title}
                          </h3>

                          <p className="text-gray-600 mb-4 line-clamp-3">
                            {ad.description}
                          </p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <div className="flex items-center gap-1">
                                <Eye className="w-4 h-4" />
                                <span>{ad.views} views</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Download className="w-4 h-4" />
                                <span>{ad.downloads} downloads</span>
                              </div>
                            </div>

                            <button
                              onClick={() => setSelectedAd(ad.id)}
                              className="flex items-center gap-2 px-4 py-2 bg-[oklch(0.2_0.08_250)] text-white rounded-lg hover:bg-[oklch(0.3_0.08_250)] transition-colors font-medium"
                            >
                              Learn More
                              <ArrowRight className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-3 mt-12">
                      <button
                        className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-gray-700 transition-colors"
                        disabled={page === 1}
                        onClick={() => setPage((p) => Math.max(1, p - 1))}
                      >
                        <ChevronLeft className="w-5 h-5" />
                        Previous
                      </button>

                      <div className="flex gap-2">
                        {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                          <button
                            key={p}
                            onClick={() => setPage(p)}
                            className={`px-4 py-2 rounded-lg border font-medium transition-colors ${
                              p === page
                                ? "bg-[oklch(0.2_0.08_250)] text-white border-[oklch(0.2_0.08_250)] shadow-sm"
                                : "border-gray-300 hover:bg-gray-50 text-gray-700"
                            }`}
                          >
                            {p}
                          </button>
                        ))}
                      </div>

                      <button
                        className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-gray-700 transition-colors"
                        disabled={page === totalPages}
                        onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                      >
                        Next
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Quick Stats */}
              <div className="bg-white rounded-xl shadow-sm p-6 sticky top-32">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Advertisement Stats</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total Ads</span>
                    <span className="font-bold text-gray-900">{sampleAds.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">This Month</span>
                    <span className="font-bold text-gray-900">
                      {sampleAds.filter(ad => {
                        const now = new Date()
                        const adDate = new Date(ad.date)
                        return now.getMonth() === adDate.getMonth() && 
                               now.getFullYear() === adDate.getFullYear()
                      }).length}
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Urgent Ads</span>
                    <span className="font-bold text-red-600">
                      {sampleAds.filter(ad => ad.priority === "urgent").length}
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="#" className="flex items-center gap-3 p-2 text-gray-700 hover:text-[oklch(0.2_0.08_250)] hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="w-8 h-8 bg-[oklch(0.2_0.08_250)]/10 rounded-lg flex items-center justify-center">
                          <Bell className="w-4 h-4 text-[oklch(0.2_0.08_250)]" />
                        </div>
                        <span>Subscribe to Updates</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center gap-3 p-2 text-gray-700 hover:text-[oklch(0.2_0.08_250)] hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="w-8 h-8 bg-[oklch(0.2_0.08_250)]/10 rounded-lg flex items-center justify-center">
                          <Download className="w-4 h-4 text-[oklch(0.2_0.08_250)]" />
                        </div>
                        <span>Download Catalog</span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="flex items-center gap-3 p-2 text-gray-700 hover:text-[oklch(0.2_0.08_250)] hover:bg-gray-50 rounded-lg transition-colors">
                        <div className="w-8 h-8 bg-[oklch(0.2_0.08_250)]/10 rounded-lg flex items-center justify-center">
                          <ArrowRight className="w-4 h-4 text-[oklch(0.2_0.08_250)]" />
                        </div>
                        <span>Archived Ads</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.slice(1).map(category => (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category)
                        setPage(1)
                      }}
                      className={`block w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        selectedCategory === category
                          ? "bg-[oklch(0.2_0.08_250)]/10 text-[oklch(0.2_0.08_250)] font-medium"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}