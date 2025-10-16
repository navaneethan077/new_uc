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
  ArrowRight,
  Download,
  FileText
} from "lucide-react"
import { useRouter } from "next/navigation"

import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"

import { announcements } from "@/data/announcements"
import { notices } from "@/data/notices"

export default function NoticesPage() {
  const router = useRouter()
  const [timeFilter, setTimeFilter] = useState<"all" | "weekly" | "monthly" | "yearly">("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [showFilters, setShowFilters] = useState(false)
  const [page, setPage] = useState(1)
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const pageSize = 6

  // categories are derived from notices (left/main column)
  const categories = useMemo(() => {
    return Array.from(new Set(notices.map((n) => n.category)))
  }, [])

  // helper for announcement priority visuals (used in right column)
  const getPriorityColor = (priority: string | undefined) => {
    switch (priority) {
      case "urgent":
        return "bg-red-100 text-red-800 border-red-200"
      case "high":
        return "bg-orange-100 text-orange-800 border-orange-200"
      default:
        return "bg-blue-100 text-blue-800 border-blue-200"
    }
  }

  const getPriorityIcon = (priority: string | undefined) => {
    return priority === "urgent" || priority === "high" ? AlertTriangle : Megaphone
  }

  // --- Filter, search, sort notices (main content) ---
  const filteredAndSortedNotices = useMemo(() => {
    const now = new Date()
    const limitDays =
      timeFilter === "weekly" ? 7 : timeFilter === "monthly" ? 30 : timeFilter === "yearly" ? 365 : 0

    const filtered = notices.filter((n) => {
      // time filter using dateIssued
      if (limitDays !== 0) {
        const diffDays = Math.floor(
          (now.getTime() - new Date(n.dateIssued).getTime()) / (1000 * 60 * 60 * 24)
        )
        if (diffDays > limitDays) return false
      }

      // search filter (title, body, category)
      if (searchTerm.trim() !== "") {
        const q = searchTerm.toLowerCase()
        if (
          !n.title.toLowerCase().includes(q) &&
          !n.body.toLowerCase().includes(q) &&
          !n.category.toLowerCase().includes(q)
        )
          return false
      }

      // category filter
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(n.category)
      return matchesCategory
    })

    // newest first by dateIssued
    filtered.sort((a, b) => new Date(b.dateIssued).getTime() - new Date(a.dateIssued).getTime())
    return filtered
  }, [timeFilter, searchTerm, selectedCategories])

  const totalPages = Math.max(1, Math.ceil(filteredAndSortedNotices.length / pageSize))
  const start = (page - 1) * pageSize
  const visibleNotices = filteredAndSortedNotices.slice(start, start + pageSize)

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

  const handleAnnouncementClick = (announcementId: string) => {
    router.push(`/events/announcements?id=${announcementId}`)
  }

  const viewAllAnnouncements = () => {
    router.push("/events/announcements")
  }

  // --- Right column: high-priority announcements (urgent/high) ---
  const highPriorityAnnouncements = announcements
    .filter((a) => a.priority === "urgent" || a.priority === "high")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5)

  // Format date to show full date with time
  const formatFullDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    })
  }

  // Format date without time
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  // Handle attachment download
  const handleDownload = (attachment: string, title: string) => {
    const link = document.createElement('a')
    link.href = attachment
    link.download = `${title.replace(/\s+/g, '_')}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <TopBar />
      <Navigation />

      {/* Breadcrumbs */}
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          // { label: "Events", href: "/events" },
          { label: "Notices" },
        ]}
      />

      {/* Page Hero (focused on Notices) */}
      <section
        className="relative py-12 md:py-16 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0,0,0,0.35), rgba(0,0,0,0.15)), url('https://images.unsplash.com/photo-1532009324734-20a7a5813719?auto=format&fit=crop&w=2000&q=60')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="flex items-center justify-center mb-4 md:mb-6">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
              <FileText className="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-center">Official Notices</h1>
          <p className="max-w-2xl text-lg text-gray-100/90 text-center mx-auto">
            Latest official notices from Mannar Urban Council. View deadlines, issuing departments and attachments.
          </p>
        </div>
      </section>

      {/* Search & Filter Section (controls notices view) */}
      <section className="sticky top-16 z-10 bg-white shadow-sm py-4 md:py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-2/5">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search notices by title, category, or body..."
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

            <div className="flex flex-col sm:flex-row gap-2 md:gap-3 w-full md:w-auto items-center">
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

          {/* Category Filters (expandable) */}
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

      {/* Main Content: Left = Notices (col-span-9). Right = High Announcements (col-span-3) */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8">
            {/* Left - Notices (col-span-9) */}
            <div className="lg:col-span-9 space-y-6">
              {visibleNotices.length === 0 ? (
                <div className="text-center py-12 md:py-16">
                  <AlertTriangle className="w-12 h-12 md:w-16 md:h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg md:text-xl font-medium text-gray-700 mb-2">No notices found</h3>
                  <p className="text-gray-500 mb-6 text-sm md:text-base">Try adjusting your search or filter criteria</p>
                  <button
                    onClick={clearFilters}
                    className="px-4 py-2.5 md:px-6 md:py-3 bg-[oklch(0.2_0.08_250)] text-white rounded-lg hover:bg-[oklch(0.2_0.08_250)]/90 transition-colors font-medium text-sm md:text-base"
                  >
                    Clear all filters
                  </button>
                </div>
              ) : (
                <div className="space-y-4 md:space-y-6">
                  {visibleNotices.map((notice) => (
                    <article
                      key={notice.id}
                      className="bg-white border border-gray-200 rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="p-4 md:p-6">
                        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-3 md:mb-4">
                          <div className="flex-1">
                            <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">{notice.title}</h3>
                            <div className="text-xs md:text-sm text-gray-500 flex flex-wrap gap-2 md:gap-3 mb-3">
                              <span className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-full">
                                <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                                Issued: {formatFullDate(notice.dateIssued)}
                              </span>
                              {notice.deadline && (
                                <span className="flex items-center gap-1 bg-red-50 px-2 py-1 rounded-full">
                                  <Clock className="w-3 h-3 md:w-4 md:h-4" />
                                  Deadline: {formatFullDate(notice.deadline)}
                                </span>
                              )}
                            </div>
                            <div className="flex flex-wrap gap-2 text-xs md:text-sm text-gray-600">
                              <span className="bg-gray-100 px-2 py-1 rounded-full">By {notice.issuedBy}</span>
                              <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">{notice.category}</span>
                              {notice.refNo && (
                                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">Ref: {notice.refNo}</span>
                              )}
                            </div>
                          </div>

                          <div className="flex flex-col items-start lg:items-end gap-2">
                            {notice.attachment && (
                              <button
                                onClick={() => handleDownload(notice.attachment!, notice.title)}
                                className="flex items-center gap-2 px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors text-sm font-medium"
                              >
                                <Download className="w-4 h-4" />
                                <span>Download</span>
                              </button>
                            )}
                            
                          </div>
                        </div>

                        <p className="text-gray-600 text-sm md:text-base mb-4 leading-relaxed">{notice.body}</p>

                        {notice.attachment && (
                          <div className="mt-3 flex items-center gap-2 text-sm text-gray-500">
                            <FileText className="w-4 h-4" />
                            <span>Attachment available: </span>
                            <button
                              onClick={() => handleDownload(notice.attachment!, notice.title)}
                              className="text-[oklch(0.2_0.08_250)] hover:underline font-medium"
                            >
                              Download PDF
                            </button>
                          </div>
                        )}
                      </div>
                    </article>
                  ))}
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

            {/* Right - High Priority Announcements (col-span-3) */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl md:rounded-2xl shadow-lg p-4 md:p-6 sticky top-28 md:top-32">
                <div className="flex items-center justify-between mb-4 md:mb-6">
                  <h2 className="text-xl md:text-2xl font-bold text-[oklch(0.2_0.08_250)] flex items-center gap-2">
                    <Megaphone className="w-5 h-5 md:w-6 md:h-6 text-[oklch(0.2_0.08_250)]" />
                    High Priority
                  </h2>
                  <button
                    onClick={viewAllAnnouncements}
                    className="text-xs md:text-sm text-[oklch(0.2_0.08_250)] hover:underline font-medium"
                  >
                    View All
                  </button>
                </div>

                <div className="space-y-3 md:space-y-4">
                  {highPriorityAnnouncements.length === 0 ? (
                    <p className="text-sm text-gray-500 text-center py-4">No high priority announcements at the moment.</p>
                  ) : (
                    highPriorityAnnouncements.map((a) => {
                      const PriorityIcon = getPriorityIcon(a.priority)
                      return (
                        <div
                          key={a.id}
                          onClick={() => handleAnnouncementClick(a.id)}
                          className="border border-gray-200 rounded-lg md:rounded-xl p-3 md:p-4 hover:shadow-sm transition-all cursor-pointer hover:border-[oklch(0.2_0.08_250)]/30 group"
                        >
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1">
                              <h4 className="font-semibold text-gray-800 mb-1 line-clamp-2 text-sm md:text-base group-hover:text-[oklch(0.2_0.08_250)]">
                                {a.title}
                              </h4>
                              <div className="text-xs text-gray-500 flex items-center gap-2 mb-2">
                                <PriorityIcon className="w-3 h-3 md:w-4 md:h-4" />
                                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(a.priority)}`}>
                                  {a.priority?.toUpperCase() ?? "INFO"}
                                </span>
                                <span>{formatDate(a.date)}</span>
                              </div>
                              <p className="text-xs md:text-sm text-gray-600 line-clamp-2">{a.description}</p>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 transition-transform flex-shrink-0" />
                          </div>
                        </div>
                      )
                    })
                  )}
                </div>

                {/* View All Button for Mobile */}
                <button
                  onClick={viewAllAnnouncements}
                  className="w-full mt-4 md:hidden flex items-center justify-center gap-2 px-4 py-2.5 bg-[oklch(0.2_0.08_250)] text-white rounded-lg hover:bg-[oklch(0.2_0.08_250)]/90 transition-colors font-medium text-sm"
                >
                  View All Announcements
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