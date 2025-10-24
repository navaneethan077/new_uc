"use client";

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
  Loader2,
  AlertCircle
} from "lucide-react"
import { newsService, NewsArticle, NewsFilters } from "@/app/services/news"

export default function NewsPage() {
  const [hydrated, setHydrated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([])
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 9,
    total: 0,
    pages: 0
  })

  useEffect(() => setHydrated(true), [])

  const { t, language } = useLanguage();
  const newsContent = translations[language].news;
  const navContent = translations[language].nav;

  const [filters, setFilters] = useState<NewsFilters>({
    search: "",
    category: [],
    timeFilter: "all",
    sort: "latest",
    page: 1,
    limit: 9
  })
  
  const [showFilters, setShowFilters] = useState(false)

  // Fetch news articles
  const fetchNews = async (filters: NewsFilters) => {
    try {
      setLoading(true)
      setError(null)
      const response = await newsService.getAllNews(filters)
      
      if (response.success) {
        setNewsArticles(Array.isArray(response.data) ? response.data : [response.data])
        setPagination(response.pagination || {
          page: filters.page || 1,
          limit: filters.limit || 9,
          total: Array.isArray(response.data) ? response.data.length : 1,
          pages: 1
        })
      } else {
        setError(response.message || 'Failed to fetch news')
      }
    } catch (err) {
      setError('An error occurred while fetching news')
      console.error('Error fetching news:', err)
    } finally {
      setLoading(false)
    }
  }

  // Fetch news when filters change
  useEffect(() => {
    if (hydrated) {
      fetchNews(filters)
    }
  }, [hydrated, filters])

  const categories = useMemo(
    () => Array.from(new Set(newsArticles.map((article) => article.category || '').filter(Boolean))),
    [newsArticles]
  )

  const timeFilterLabels = {
    all: newsContent.filters.time.all,
    day: newsContent.filters.time.day,
    week: newsContent.filters.time.week,
    month: newsContent.filters.time.month,
    year: newsContent.filters.time.year,
  }

  const handleFilterChange = (newFilters: Partial<NewsFilters>) => {
    setFilters(prev => ({ ...prev, ...newFilters, page: 1 }))
  }

  const toggleCategory = (category: string) => {
    const currentCategories = filters.category || []
    const newCategories = currentCategories.includes(category) 
      ? currentCategories.filter((c) => c !== category)
      : [...currentCategories, category]
    
    handleFilterChange({ category: newCategories })
  }

  const clearFilters = () => {
    setFilters({
      search: "",
      category: [],
      timeFilter: "all",
      sort: "latest",
      page: 1,
      limit: 9
    })
  }

  const handlePageChange = (newPage: number) => {
    setFilters(prev => ({ ...prev, page: newPage }))
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (!hydrated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    )
  }

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
                value={filters.search || ''}
                onChange={(e) => handleFilterChange({ search: e.target.value })}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-input focus:ring-2 focus:ring-primary focus:border-primary bg-background text-foreground"
              />
              {filters.search && (
                <button
                  onClick={() => handleFilterChange({ search: '' })}
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
                  value={filters.sort}
                  onChange={(e) => handleFilterChange({ sort: e.target.value as 'latest' | 'oldest' })}
                  className="appearance-none bg-transparent border-none focus:ring-0 focus:outline-none text-foreground font-medium cursor-pointer pr-8"
                >
                  <option value="latest" className="bg-background text-foreground">
                    {newsContent.sort.newest}
                  </option>
                  <option value="oldest" className="bg-background text-foreground">
                    {newsContent.sort.oldest}
                  </option>
                </select>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute right-4 w-4 h-4 text-primary pointer-events-none"
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

              {(filters.search || (filters.category && filters.category.length > 0) || filters.timeFilter !== 'all' || filters.sort !== 'latest') && (
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
            <div className="m-6 p-6 border-t border-border">
              <h3 className="text-lg font-medium text-foreground mb-4">
                {newsContent.filters.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => toggleCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-all border ${
                      filters.category?.includes(category)
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
                {(['all', 'day', 'week', 'month', 'year'] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => handleFilterChange({ timeFilter: f })}
                    className={`px-4 py-2 rounded-full font-medium transition-all border ${
                      filters.timeFilter === f
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
          {loading && (
            <div className="flex justify-center items-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary" />
            </div>
          )}

          {error && (
            <div className="flex items-center justify-center gap-2 py-12 text-destructive">
              <AlertCircle className="w-5 h-5" />
              <span>{error}</span>
            </div>
          )}

          {!loading && !error && newsArticles.length === 0 && (
            <p className="text-muted-foreground mt-2 text-center py-12">
              {newsContent.noResults}
            </p>
          )}

          {!loading && !error && newsArticles.length > 0 && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {newsArticles.map((article) => (
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
                          <Calendar className="w-4 h-4" /> 
                          <span>{new Date(article.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" /> 
                          <span>{article.readTime || '5 min read'}</span>
                        </div>
                      </div>
                      {article.category && (
                        <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                          <MapPin className="w-4 h-4" /> 
                          <span className="truncate max-w-[180px]">{article.category}</span>
                        </div>
                      )}
                      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center text-primary font-medium text-sm hover:underline underline-offset-4 transition-all group-hover:gap-2">
                        {newsContent.learnMore}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {/* Pagination */}
              {pagination.pages > 1 && (
                <div className="flex items-center justify-center gap-3 mt-12">
                  <button
                    className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed font-medium text-foreground transition-colors"
                    disabled={pagination.page === 1}
                    onClick={() => handlePageChange(pagination.page - 1)}
                  >
                    <ChevronLeft className="w-5 h-5" /> {newsContent.pagination.previous}
                  </button>

                  <div className="flex gap-2">
                    {Array.from({ length: pagination.pages }, (_, i) => i + 1).map((p) => (
                      <button
                        key={p}
                        onClick={() => handlePageChange(p)}
                        className={`px-4 py-2 rounded-lg border font-medium transition-colors ${
                          p === pagination.page
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
                    disabled={pagination.page === pagination.pages}
                    onClick={() => handlePageChange(pagination.page + 1)}
                  >
                    {newsContent.pagination.next}
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  )
}