"use client"

import { useMemo, useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { TopBar } from "@/components/top-bar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { useLanguage } from "@/lib/i18n/context"
import { translations } from "@/lib/i18n/translations"
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
  const [hydrated, setHydrated] = useState(false)
  useEffect(() => setHydrated(true), [])

  const { t, language } = useLanguage();
  const newsContent = translations[language].news;
  const navContent = translations[language].nav;

  const [timeFilter, setTimeFilter] = useState<"all" | "day" | "week" | "month" | "year">("all")
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState<"latest" | "oldest">("latest")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)
  const [page, setPage] = useState(1)
  const itemsPerPage = 9

  const newsArticles = useMemo(
    () => [
      {
        id: 1,
        title: newsContent.articles.waterTreatment.title,
        excerpt: newsContent.articles.waterTreatment.excerpt,
        content: newsContent.articles.waterTreatment.content,
        author: newsContent.articles.waterTreatment.author,
        date: "2024-01-15",
        readTime: newsContent.readTime,
        image: "/new.png",
        category: newsContent.categories.infrastructure,
        slug: "new-water-treatment-plant-inaugurated"
      },
      {
        id: 2,
        title: newsContent.articles.digitalPortal.title,
        excerpt: newsContent.articles.digitalPortal.excerpt,
        content: newsContent.articles.digitalPortal.content,
        author: newsContent.articles.digitalPortal.author,
        date: "2024-01-12",
        readTime: newsContent.readTime,
        image:"/new.png",
        category: newsContent.categories.technology,
        slug: "digital-services-portal-launched"
      },
      {
        id: 3,
        title: newsContent.articles.communityGarden.title,
        excerpt: newsContent.articles.communityGarden.excerpt,
        content: newsContent.articles.communityGarden.content,
        author: newsContent.articles.communityGarden.author,
        date: "2024-01-10",
        readTime: newsContent.readTime,
        image: "/new.png",
        category: newsContent.categories.environment,
        slug: "community-garden-project-success"
      },
      {
        id: 4,
        title: newsContent.articles.transportRoutes.title,
        excerpt: newsContent.articles.transportRoutes.excerpt,
        content: newsContent.articles.transportRoutes.content,
        author: newsContent.articles.transportRoutes.author,
        date: "2024-01-08",
        readTime: newsContent.readTime,
        image: "/new.png",
        category: newsContent.categories.transport,
        slug: "new-public-transport-routes-announced"
      },
      {
        id: 5,
        title: newsContent.articles.youthCouncil.title,
        excerpt: newsContent.articles.youthCouncil.excerpt,
        content: newsContent.articles.youthCouncil.content,
        author: newsContent.articles.youthCouncil.author,
        date: "2024-01-05",
        readTime: newsContent.readTime,
        image:"/new.png",
        category: newsContent.categories.youthPrograms,
        slug: "youth-council-elections-conclude"
      },
      {
        id: 6,
        title: newsContent.articles.floodPrevention.title,
        excerpt: newsContent.articles.floodPrevention.excerpt,
        content: newsContent.articles.floodPrevention.content,
        author: newsContent.articles.floodPrevention.author,
        date: "2024-01-03",
        readTime: newsContent.readTime,
        image:"/new.png",
        category: newsContent.categories.infrastructure,
        slug: "flood-prevention-system-upgrade"
      },
      {
        id: 7,
        title: newsContent.articles.wellnessCenter.title,
        excerpt: newsContent.articles.wellnessCenter.excerpt,
        content: newsContent.articles.wellnessCenter.content,
        author: newsContent.articles.wellnessCenter.author,
        date: "2023-12-28",
        readTime: newsContent.readTime,
        image:"/new.png",
        category: newsContent.categories.communityOutreach,
        slug: "senior-wellness-center-opens"
      },
      {
        id: 8,
        title: newsContent.articles.recyclingInitiative.title,
        excerpt: newsContent.articles.recyclingInitiative.excerpt,
        content: newsContent.articles.recyclingInitiative.content,
        author: newsContent.articles.recyclingInitiative.author,
        date: "2023-12-20",
        readTime: newsContent.readTime,
        image:"/new.png",
        category: newsContent.categories.environment,
        slug: "recycling-initiative-surpasses-targets"
      },
      {
        id: 9,
        title: newsContent.articles.roadSafety.title,
        excerpt: newsContent.articles.roadSafety.excerpt,
        content: newsContent.articles.roadSafety.content,
        author: newsContent.articles.roadSafety.author,
        date: "2023-12-15",
        readTime: newsContent.readTime,
        image:"/new.png",
        category: newsContent.categories.publicSafety,
        slug: "road-safety-campaign-launched"
      },
      {
        id: 10,
        title: newsContent.articles.libraryExpansion.title,
        excerpt: newsContent.articles.libraryExpansion.excerpt,
        content: newsContent.articles.libraryExpansion.content,
        author: newsContent.articles.libraryExpansion.author,
        date: "2023-12-10",
        readTime: newsContent.readTime,
        image: "/new.png",
        category: newsContent.categories.education,
        slug: "library-expansion-completed"
      },
      {
        id: 11,
        title: newsContent.articles.businessGrant.title,
        excerpt: newsContent.articles.businessGrant.excerpt,
        content: newsContent.articles.businessGrant.content,
        author: newsContent.articles.businessGrant.author,
        date: "2023-12-05",
        readTime: newsContent.readTime,
        image: "/new.png",
        category: newsContent.categories.economicDevelopment,
        slug: "local-business-grant-program"
      },
      {
        id: 12,
        title: newsContent.articles.parkRenovation.title,
        excerpt: newsContent.articles.parkRenovation.excerpt,
        content: newsContent.articles.parkRenovation.content,
        author: newsContent.articles.parkRenovation.author,
        date: "2023-11-28",
        readTime: newsContent.readTime,
        image: "/new.png",
        category: newsContent.categories.parksRecreation,
        slug: "park-renovation-project-begins"
      },
    ],
    [newsContent]
  )

  const categories = useMemo(
    () => Array.from(new Set(newsArticles.map((article) => article.category))),
    [newsArticles]
  )

  const filtered = useMemo(() => {
    if (!hydrated) return newsArticles

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

      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(a.category)
      return matchesSearch && matchesFilter && matchesCategory
    })

    result.sort((a, b) => {
      if (sort === "latest") return new Date(b.date).getTime() - new Date(a.date).getTime()
      return new Date(a.date).getTime() - new Date(b.date).getTime()
    })

    return result
  }, [hydrated, newsArticles, search, timeFilter, selectedCategories, sort])

  const totalPages = Math.ceil(filtered.length / itemsPerPage)
  const startIndex = (page - 1) * itemsPerPage
  const paginatedItems = filtered.slice(startIndex, startIndex + itemsPerPage)

  const timeFilterLabels = {
    all: newsContent.filters.time.all,
    day: newsContent.filters.time.day,
    week: newsContent.filters.time.week,
    month: newsContent.filters.time.month,
    year: newsContent.filters.time.year,
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

  if (!hydrated) return null

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navigation />

      <main className="relative pt-6">
        <div className="container-x py-4">
          <Breadcrumbs items={[
            { label: navContent.home, href: "/" }, 
            { label: newsContent.breadcrumb }
          ]} />
        </div>

        <section className="bg-gradient-to-br from-primary to-primary/80 relative py-16">
          <div className="container-x text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              {newsContent.hero.title}
            </h1>
            <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              {newsContent.hero.description}
            </p>
          </div>
        </section>

        {/* Filters & Search */}
        <section className="sticky top-16 z-10 bg-card shadow-sm py-6 border-b border-border">
          <div className="container-x flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-2/5">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder={newsContent.search.placeholder}
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value)
                  setPage(1)
                }}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-input focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground"
              />
              {search && (
                <button
                  onClick={() => setSearch("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Sort & Filters */}
       <div className="flex flex-col md:flex-row gap-3 w-full md:w-auto">
  <div className="relative flex items-center gap-2 bg-muted/60 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-primary/20 hover:border-primary/40 transition-all shadow-sm">
    <span className="text-foreground font-medium whitespace-nowrap">
      {newsContent.sort.label}:
    </span>

    <select
      value={sort}
      onChange={(e) => {
        setSort(e.target.value as "latest" | "oldest")
        setPage(1)
      }}
      className="appearance-none bg-transparent border-none focus:ring-0 focus:outline-none text-foreground font-medium cursor-pointer pr-8"
    >
      <option
        value="latest"
        className="bg-background text-foreground hover:bg-primary/10 cursor-pointer"
      >
        {newsContent.sort.newest}
      </option>
      <option
        value="oldest"
        className="bg-background text-foreground hover:bg-primary/10 cursor-pointer"
      >
        {newsContent.sort.oldest}
      </option>
    </select>

    {/* custom dropdown arrow */}
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute right-4 w-4 h-4 text-primary pointer-events-none transition-transform duration-200"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </div>

  <button
    onClick={() => setShowFilters(!showFilters)}
    className="flex items-center gap-2 px-4 py-2.5 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-colors font-medium border border-primary/20"
  >
    <Filter className="w-5 h-5" />
    <span>{newsContent.filters.button}</span>
  </button>

  {(search || selectedCategories.length > 0 || timeFilter !== "all" || sort !== "latest") && (
    <button
      onClick={clearFilters}
      className="flex items-center gap-2 px-4 py-2.5 text-muted-foreground hover:text-primary font-medium"
    >
      <X className="w-5 h-5" /> {newsContent.filters.clearAll}
    </button>
  )}
</div>


          </div>

          {/* Expanded Filters */}
          {showFilters && (
            <div className="m-6 p-6 border-t border-border ">
              <h3 className="text-lg font-medium text-foreground mb-4">
                {newsContent.filters.category}
              </h3>
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

              <h4 className="text-md font-medium text-foreground mt-4 mb-3">
                {newsContent.filters.time.label}
              </h4>
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
            <p className="text-muted-foreground mt-2 text-center">
              {newsContent.noResults}
            </p>
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
                      <Calendar className="w-4 h-4" /> <span>{article.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" /> <span>{article.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4" />{" "}
                    <span className="truncate max-w-[180px]">{article.category}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center text-primary font-medium text-sm hover:underline underline-offset-4 transition-all group-hover:gap-2">
                    {newsContent.learnMore}
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
                <ChevronLeft className="w-5 h-5" /> {newsContent.pagination.previous}
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
                {newsContent.pagination.next}
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