"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import {
  ArrowRight,
  Calendar,
  Clock,
  Filter,
  Search,
  X,
  ChevronLeft,
  ChevronRight,
  MapPin,
} from "lucide-react"

export default function NewsPage() {
  const [timeFilter, setTimeFilter] = useState<"all" | "day" | "week" | "month" | "year">("all")
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState<"latest" | "oldest">("latest")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)
  const [page, setPage] = useState(1)
  const itemsPerPage = 9

   const newsArticles = [
    {
      id: 1,
      title: "New Water Treatment Plant Inaugurated",
      excerpt:
        "The Mannar Urban Council officially opened a state-of-the-art water treatment facility to serve 15,000 residents with clean, safe drinking water.",
      content:
        "In a significant milestone for public health infrastructure, the Mannar Urban Council inaugurated its new water treatment plant yesterday. The facility, built with a budget of Rs. 45 million, incorporates advanced filtration and purification technologies...",
      author: "Municipal Communications",
      date: "2024-01-15",
      readTime: "8:00 PM",
      image: "/new.png",
      category: "Infrastructure",
      slug: "new-water-treatment-plant-inaugurated"
    },
    {
      id: 2,
      title: "Digital Services Portal Launched",
      excerpt:
        "Citizens can now access municipal services online through our new digital platform, reducing wait times and improving efficiency.",
      content:
        "The Mannar Urban Council has launched its comprehensive digital services portal, marking a significant step towards modernizing municipal operations. Citizens can now apply for certificates, pay taxes, and access various services online...",
      author: "IT Department",
      date: "2024-01-12",
      readTime: "8:00 PM",
      image:"/new.png",
      category: "Technology",
      slug: "digital-services-portal-launched"
    },
    {
      id: 3,
      title: "Community Garden Project Success",
      excerpt:
        "The pilot community garden project has yielded impressive results, with plans to expand to five more locations across the municipality.",
      content:
        "The community garden initiative launched six months ago has exceeded expectations. Located in the heart of Ward 3, the garden has produced over 500kg of fresh vegetables, distributed among participating families...",
      author: "Environmental Division",
      date: "2024-01-10",
      readTime: "8:00 PM",
      image: "/new.png",
      category: "Environment",
      slug: "community-garden-project-success"
    },
    {
      id: 4,
      title: "New Public Transport Routes Announced",
      excerpt:
        "Three new bus routes will connect underserved neighborhoods starting next month, improving accessibility for 8,000 residents.",
      content: "Details...",
      author: "Transport Department",
      date: "2024-01-08",
      readTime: "8:00 PM",
      image: "/new.png",
      category: "Transport",
      slug: "new-public-transport-routes-announced"
    },
    {
      id: 5,
      title: "Youth Council Elections Conclude",
      excerpt:
        "Over 2,000 young voters participated in the first-ever Youth Council elections, marking a milestone in civic engagement.",
      content: "Details...",
      author: "Youth Affairs",
      date: "2024-01-05",
      readTime: "8:00 PM",
      image:"/new.png",
      category: "Youth Programs",
      slug: "youth-council-elections-conclude"
    },
    {
      id: 6,
      title: "Flood Prevention System Upgrade",
      excerpt:
        "The council has allocated Rs. 30 million to upgrade drainage systems in flood-prone areas ahead of monsoon season.",
      content: "Details...",
      author: "Public Works",
      date: "2024-01-03",
      readTime: "8:00 PM",
      image:"/new.png",
      category: "Infrastructure",
      slug: "flood-prevention-system-upgrade"
    },
    {
      id: 7,
      title: "Senior Wellness Center Opens",
      excerpt:
        "The new center offers free health screenings, yoga classes, and social activities for Mannar's senior population.",
      content: "Details...",
      author: "Health Department",
      date: "2023-12-28",
      readTime: "8:00 PM",
      image:"/new.png",
      category: "Community Outreach",
      slug: "senior-wellness-center-opens"
      
    },
    {
      id: 8,
      title: "Recycling Initiative Surpasses Targets",
      excerpt:
        "The city's recycling program collected 40% more materials than projected, thanks to community participation.",
      content: "Details...",
      author: "Environmental Division",
      date: "2023-12-20",
      readTime: "8:00 PM",
      image:"/new.png",
      category: "Environment",
      slug: "recycling-initiative-surpasses-targets"
    },
    {
      id: 9,
      title: "Road Safety Campaign Launched",
      excerpt:
        "A new road safety awareness campaign aims to reduce accidents by 25% through education and improved signage.",
      content: "Details...",
      author: "Public Safety",
      date: "2023-12-15",
      readTime: "8:00 PM",
      image:"/new.png",
      category: "Public Safety",
      slug: "road-safety-campaign-launched"
    },
    {
      id: 10,
      title: "Library Expansion Completed",
      excerpt:
        "The municipal library has doubled its capacity with new study rooms and a digital learning center.",
      content: "Details...",
      author: "Education Department",
      date: "2023-12-10",
      readTime: "8:00 PM",
      image: "/new.png",
      category: "Education",
      slug: "library-expansion-completed"
    },
    {
      id: 11,
      title: "Local Business Grant Program",
      excerpt:
        "Small businesses can now apply for grants up to Rs. 500,000 through the new economic development initiative.",
      content: "Details...",
      author: "Economic Development",
      date: "2023-12-05",
      readTime: "8:00 PM",
      image: "/new.png",
      category: "Economic Development",
      slug: "local-business-grant-program"
    },
    {
      id: 12,
      title: "Park Renovation Project Begins",
      excerpt:
        "The central park will receive new playground equipment, walking paths, and lighting in a 3-month renovation project.",
      content: "Details...",
      author: "Parks & Recreation",
      date: "2023-11-28",
      readTime: "8:00 PM",
      image: "/new.png",
      category: "Parks & Recreation",
      slug: "park-renovation-project-begins"
    },
  ]

  const categories = useMemo(
    () => Array.from(new Set(newsArticles.map((article) => article.category))),
    [newsArticles]
  )

  const filtered = useMemo(() => {
    const now = new Date()
    let result = newsArticles.filter((a) => {
      const q = search.toLowerCase()
      const matchesSearch =
        a.title.toLowerCase().includes(q) ||
        a.excerpt.toLowerCase().includes(q) ||
        a.category.toLowerCase().includes(q)

      const d = new Date(a.date)
      const diffDays = Math.floor((now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24))
      let matchesFilter = true
      if (timeFilter === "day") matchesFilter = diffDays <= 1
      else if (timeFilter === "week") matchesFilter = diffDays <= 7
      else if (timeFilter === "month") matchesFilter = diffDays <= 30
      else if (timeFilter === "year") matchesFilter = diffDays <= 365

      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(a.category)
      return matchesSearch && matchesFilter && matchesCategory
    })

    result.sort((a, b) => {
      if (sort === "latest") return new Date(b.date).getTime() - new Date(a.date).getTime()
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    })

    return result
  }, [newsArticles, search, timeFilter, selectedCategories, sort])

  const totalPages = Math.ceil(filtered.length / itemsPerPage)
  const startIndex = (page - 1) * itemsPerPage
  const paginatedItems = filtered.slice(startIndex, startIndex + itemsPerPage)

  const timeFilterLabels = {
    all: "All Time",
    day: "Last 24 Hours",
    week: "Past Week",
    month: "Past Month",
    year: "Past Year",
  }

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
    )
    setPage(1)
  }

  const clearFilters = () => {
    setSearch("")
    setSelectedCategories([])
    setTimeFilter("all")
    setSort("latest")
    setPage(1)
  }

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navigation />

      <main className="relative pt-6">
        <div className="container-x py-4">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "News" }]} />
        </div>

        <section className="bg-gradient-to-br from-primary to-primary/80 relative py-16">
          <div className="container-x text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Municipal News</h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Stay informed with the latest updates, developments, and achievements from the Mannar Urban Council.
            </p>
          </div>
        </section>

        <section className="sticky top-16 z-10 bg-card shadow-sm py-6 border-b border-border">
          <div className="container-x flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-2/5">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search news by title, category, or author..."
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value)
                  setPage(1)
                }}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-input focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground"
              />
              {search && (
                <button onClick={() => setSearch("")} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Sort & Filters */}
            <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
              <div className="flex items-center gap-2 bg-muted rounded-lg px-4 py-2.5">
                <span className="text-foreground font-medium whitespace-nowrap">Sort by:</span>
                <select
                  value={sort}
                  onChange={(e) => {
                    setSort(e.target.value as "latest" | "oldest")
                    setPage(1)
                  }}
                  className="bg-transparent border-none focus:ring-0 focus:outline-none text-foreground"
                >
                  <option value="latest">Newest First</option>
                  <option value="oldest">Oldest First</option>
                </select>
              </div>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors font-medium border border-primary/20"
              >
                <Filter className="w-5 h-5" />
                <span>Filters</span>
              </button>

              {(search || selectedCategories.length > 0 || timeFilter !== "all" || sort !== "latest") && (
                <button onClick={clearFilters} className="flex items-center gap-2 px-4 py-2.5 text-muted-foreground hover:text-primary font-medium">
                  <X className="w-5 h-5" /> Clear All
                </button>
              )}
            </div>
          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <div className="mt-6 pt-6 border-t border-border">
              <h3 className="text-lg font-medium text-foreground mb-4">Filter by Category</h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-all border ${
                      selectedCategories.includes(category)
                        ? "bg-primary text-primary-foreground border-primary shadow-sm"
                        : "bg-muted text-foreground border-border hover:bg-muted/80"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <h4 className="text-md font-medium text-foreground mt-4 mb-3">Filter by Time</h4>
              <div className="flex flex-wrap gap-3">
                {(["all", "day", "week", "month", "year"] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => {
                      setTimeFilter(f)
                      setPage(1)
                    }}
                    className={`px-4 py-2 rounded-full font-medium transition-all border ${
                      timeFilter === f
                        ? "bg-primary text-primary-foreground border-primary shadow-sm"
                        : "bg-muted text-foreground border-border hover:bg-muted/80"
                    }`}
                  >
                    {timeFilterLabels[f]}
                  </button>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* News Grid */}
        <div className="container-x py-8">
          {filtered.length === 0 && (
            <p className="text-muted-foreground mt-2 text-center">No articles found. Try adjusting your search or filters.</p>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {paginatedItems.map((article) => (
              <Link
                key={article.id}
                href={`/events/news/${article.slug}`}
                className="group block bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 hover:border-primary/30"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    width={400}
                    height={225}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" /> <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> <span>{article.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4" /> <span className="truncate max-w-[180px]">{article.category}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center text-primary font-medium text-sm hover:underline underline-offset-4 transition-all group-hover:gap-2">
                    Learn More
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-3 mt-12">
              <button
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed font-medium text-foreground transition-colors"
                disabled={page === 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
              >
                <ChevronLeft className="w-5 h-5" /> Previous
              </button>

              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`px-4 py-2 rounded-lg border font-medium transition-colors ${
                      p === page
                        ? "bg-primary text-primary-foreground border-primary shadow-sm"
                        : "border-border hover:bg-muted text-foreground"
                    }`}
                  >
                    {p}
                  </button>
                ))}
              </div>

              <button
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed font-medium text-foreground transition-colors"
                disabled={page === totalPages}
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              >
                Next
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}
