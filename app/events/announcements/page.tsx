"use client"

import { useMemo, useState } from "react"
import {
  Megaphone,
  AlertTriangle,
  Clock,
  MapPin,
  Calendar,
  Filter,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowRight
} from "lucide-react"
import { useRouter } from "next/navigation"

import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"

import { announcements } from "@/data/announcements"
import { notices } from "@/data/notices"

export default function AnnouncementsPage() {
  const router = useRouter()
  const [timeFilter, setTimeFilter] = useState<"all" | "weekly" | "monthly" | "yearly">("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [page, setPage] = useState(1)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const pageSize = 6

  const categories = useMemo(() => {
    return Array.from(new Set(announcements.map((item) => item.category)))
  }, [])

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

  const getPriorityIcon = (priority: string) => {
    return priority === "urgent" || priority === "high" ? AlertTriangle : Megaphone
  }

  const filteredAndSorted = useMemo(() => {
    const now = new Date()
    const limitDays =
      timeFilter === "weekly" ? 7 : timeFilter === "monthly" ? 30 : timeFilter === "yearly" ? 365 : 0

    const filtered = announcements.filter((a) => {
      // time filter
      if (limitDays !== 0) {
        const diffDays = Math.floor(
          (now.getTime() - new Date(a.date).getTime()) / (1000 * 60 * 60 * 24)
        )
        if (diffDays > limitDays) return false
      }

      // search filter
      if (searchTerm.trim() !== "") {
        const q = searchTerm.toLowerCase()
        if (
          !a.title.toLowerCase().includes(q) &&
          !a.description.toLowerCase().includes(q) &&
          !a.category.toLowerCase().includes(q)
        )
          return false
      }

      // category filter
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(a.category)
      return matchesCategory
    })

    // Sort by date (newest first)
    filtered.sort((a, b) => b.date.localeCompare(a.date))
    return filtered
  }, [timeFilter, searchTerm, selectedCategories])

  const totalPages = Math.ceil(filteredAndSorted.length / pageSize)
  const start = (page - 1) * pageSize
  const visibleItems = filteredAndSorted.slice(start, start + pageSize)

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    )
    setPage(1)
  }

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategories([])
    setTimeFilter("all")
    setPage(1)
  }

  const handleNoticeClick = (noticeId: string) => {
    router.push(`/events/notices?id=${noticeId}`)
  }

  const viewAllNotices = () => {
    router.push("/events/notices")
  }

  const lastFiveNotices = [...notices]
    .sort((a, b) => new Date(b.dateIssued).getTime() - new Date(a.dateIssued).getTime())
    .slice(0, 5)

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Navigation />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Events", href: "/events" },
          { label: "Announcements" },
        ]}
      />

      {/* Hero Section */}
      <section
        className="relative py-16 md:py-20 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1584824486539-53bb4646bdbc?auto=format&fit=crop&w=4000&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center mb-4 md:mb-6">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-[oklch(0.2_0.08_250)]/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <Megaphone className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Public Announcements</h1>
          <p className="text-lg md:text-xl text-gray-100 max-w-2xl mx-auto px-4">
            Stay informed about urgent updates, service changes, and community notices from Mannar Urban Council.
          </p>
        </div>
      </section>

      {/* Search & Filter Section */}
      <section className="sticky top-16 z-10 bg-white shadow-sm py-4 md:py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-2/5">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search announcements..."
                value={searchTerm}
                onChange={(e) => {
                  setSearchTerm(e.target.value)
                  setPage(1)
                }}
                className="w-full pl-10 pr-8 md:pr-4 py-2.5 md:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[oklch(0.2_0.08_250)] focus:border-[oklch(0.2_0.08_250)] focus:outline-none text-sm md:text-base"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4 md:w-5 md:h-5" />
                </button>
              )}
            </div>

            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 w-full md:w-auto">
              {/* Time Filter */}
              <div className="flex items-center gap-2 bg-gray-100 rounded-lg px-3 md:px-4 py-2 md:py-2.5">
                <span className="text-gray-700 font-medium whitespace-nowrap text-sm md:text-base">Time:</span>
                <select
                  value={timeFilter}
                  onChange={(e) => {
                    setTimeFilter(e.target.value as "all" | "weekly" | "monthly" | "yearly")
                    setPage(1)
                  }}
                  className="bg-transparent border-none focus:ring-0 focus:outline-none text-sm md:text-base"
                >
                  <option value="all">All Time</option>
                  <option value="weekly">This Week</option>
                  <option value="monthly">This Month</option>
                  <option value="yearly">This Year</option>
                </select>
              </div>

              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 bg-[oklch(0.2_0.08_250)]/10 hover:bg-[oklch(0.2_0.08_250)]/20 text-[oklch(0.2_0.08_250)] rounded-lg transition-colors font-medium text-sm md:text-base"
              >
                <Filter className="w-4 h-4 md:w-5 md:h-5" />
                <span>Categories</span>
                {selectedCategories.length > 0 && (
                  <span className="bg-[oklch(0.2_0.08_250)] text-white text-xs md:text-sm rounded-full h-5 w-5 md:h-6 md:w-6 flex items-center justify-center">
                    {selectedCategories.length}
                  </span>
                )}
              </button>

              {/* Clear Filters */}
              {(searchTerm || selectedCategories.length > 0 || timeFilter !== "all") && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 px-3 md:px-4 py-2 md:py-2.5 text-gray-600 hover:text-[oklch(0.2_0.08_250)] transition-colors font-medium text-sm md:text-base"
                >
                  <X className="w-4 h-4 md:w-5 md:h-5" />
                  <span>Clear All</span>
                </button>
              )}
            </div>
          </div>

          {/* Category Filters */}
          {showFilters && (
            <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-gray-200">
              <h3 className="text-base md:text-lg font-medium text-gray-700 mb-3 md:mb-4">Filter by Category</h3>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className={`px-3 py-1.5 md:px-4 md:py-2 rounded-full font-medium transition-all text-sm md:text-base ${
                      selectedCategories.includes(category)
                        ? "bg-[oklch(0.2_0.08_250)] text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            {/* Left - Announcements col-span-9 */}
            <div className="lg:col-span-9 space-y-6">
              {visibleItems.length === 0 ? (
                <div className="text-center py-12 md:py-16">
                  <Megaphone className="w-12 h-12 md:w-16 md:h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg md:text-xl font-medium text-gray-700 mb-2">No announcements found</h3>
                  <p className="text-gray-500 mb-6 text-sm md:text-base">Try adjusting your search or filter criteria</p>
                  <button
                    onClick={clearFilters}
                    className="px-4 py-2.5 md:px-6 md:py-3 bg-[oklch(0.2_0.08_250)] text-white rounded-lg hover:bg-[oklch(0.2_0.08_250)]/90 transition-colors font-medium text-sm md:text-base"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {visibleItems.map((announcement) => {
                    const PriorityIcon = getPriorityIcon(announcement.priority)
                    return (
                      <div
                        key={announcement.id}
                        className="bg-white border border-gray-200 rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                      >
                        {announcement.image && (
                          <img
                            src={announcement.image}
                            alt={announcement.title}
                            className="w-full h-48 md:h-56 object-cover"
                          />
                        )}
                        <div className="p-4 md:p-6">
                          <div className="flex flex-wrap items-center gap-2 md:gap-3 mb-3">
                            <span
                              className={`px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium border ${getPriorityColor(
                                announcement.priority
                              )}`}
                            >
                              <PriorityIcon className="inline-block w-3 h-3 md:w-4 md:h-4 mr-1 -mt-0.5" />
                              {announcement.priority.toUpperCase()}
                            </span>
                            <span className="text-xs md:text-sm text-gray-500 flex items-center gap-1">
                              <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                              {new Date(announcement.date).toLocaleDateString()}
                            </span>
                          </div>
                          <h3 className="text-base md:text-lg font-semibold text-gray-800 mb-2 line-clamp-2">
                            {announcement.title}
                          </h3>
                          <p className="text-gray-600 text-xs md:text-sm mb-3 md:mb-4 line-clamp-3">
                            {announcement.description}
                          </p>

                          <div className="flex flex-wrap gap-2 md:gap-3 text-xs text-gray-500">
                            {announcement.location && (
                              <span className="flex items-center gap-1">
                                <MapPin className="w-3 h-3 md:w-4 md:h-4" />
                                <span className="truncate max-w-[120px] md:max-w-none">{announcement.location}</span>
                              </span>
                            )}
                            {announcement.eventDate && (
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3 md:w-4 md:h-4" />
                                {new Date(announcement.eventDate).toLocaleDateString()}
                              </span>
                            )}
                            <span className="truncate">By {announcement.publishedBy}</span>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 md:gap-3 mt-8 md:mt-12">
                  <button
                    className="flex items-center gap-1 md:gap-2 px-3 py-2 md:px-5 md:py-2.5 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-sm md:text-base"
                    disabled={page === 1}
                    onClick={() => setPage((p) => Math.max(1, p - 1))}
                  >
                    <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                    <span className="hidden sm:inline">Previous</span>
                  </button>

                  <div className="flex gap-1 md:gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                      <button
                        key={p}
                        onClick={() => setPage(p)}
                        className={`px-3 py-1.5 md:px-4 md:py-2 rounded-lg border font-medium text-sm md:text-base ${
                          p === page
                            ? "bg-[oklch(0.2_0.08_250)] text-white border-[oklch(0.2_0.08_250)] shadow-md"
                            : "border-gray-300 hover:bg-gray-50"
                        }`}
                      >
                        {p}
                      </button>
                    ))}
                  </div>

                  <button
                    className="flex items-center gap-1 md:gap-2 px-3 py-2 md:px-5 md:py-2.5 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed font-medium text-sm md:text-base"
                    disabled={page === totalPages}
                    onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Right - Important Notices Sidebar */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 sticky top-28 md:top-32">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <h2 className="text-xl md:text-2xl font-bold text-[oklch(0.2_0.08_250)] flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 md:w-6 md:h-6 text-red-500" />
                    Important Notices
                  </h2>
                  <button
                    onClick={viewAllNotices}
                    className="text-xs md:text-sm text-[oklch(0.2_0.08_250)] hover:underline font-medium"
                  >
                    View All
                  </button>
                </div>
                
                <div className="space-y-3 md:space-y-4">
                  {lastFiveNotices.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => handleNoticeClick(item.id)}
                      className="border border-gray-200 rounded-lg md:rounded-xl p-3 md:p-4 hover:shadow-sm transition-all cursor-pointer hover:border-[oklch(0.2_0.08_250)]/30 group"
                    >
                      <h4 className="font-semibold text-gray-800 mb-1 line-clamp-2 text-sm md:text-base group-hover:text-[oklch(0.2_0.08_250)]">
                        {item.title}
                      </h4>
                      <p className="text-xs md:text-sm text-gray-600 line-clamp-2 mb-2">
                        {item.body}
                      </p>
                      <div className="flex justify-between items-center text-xs text-gray-500">
                        <span>{new Date(item.dateIssued).toLocaleDateString()}</span>
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* View All Button for Mobile */}
                <button
                  onClick={viewAllNotices}
                  className="w-full mt-4 md:hidden flex items-center justify-center gap-2 px-4 py-2.5 bg-[oklch(0.2_0.08_250)] text-white rounded-lg hover:bg-[oklch(0.2_0.08_250)]/90 transition-colors font-medium text-sm"
                >
                  View All Notices
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}