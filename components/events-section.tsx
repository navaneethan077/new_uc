"use client"

import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react"
import { useMemo } from "react"
import { useLanguage } from "@/lib/i18n/context"
import { translations } from "@/lib/i18n/translations"
import { announcements as allAnnouncements } from "@/data/announcements"
import { notices as allNotices } from "@/data/notices"

// Types
export type Announcement = {
  id: number
  title: string
  description: string
  category: string
  date: string
  eventDate?: string
  priority: "normal" | "high" | "urgent"
  location?: string
  publishedBy: string
  image?: string
}

export type Notice = {
  id: number
  title: string
  body: string
  category: string
  dateIssued: string
  deadline?: string
  issuedBy: string
  refNo?: string
  attachment?: string
}

export function EventsSection() {
  const { t, language } = useLanguage()
  const newsContent = translations[language].news

  // Prepare news articles
  const newsArticles = useMemo(
    () =>
      [
        newsContent.articles.waterTreatment,
        newsContent.articles.digitalPortal,
        newsContent.articles.communityGarden,
        newsContent.articles.transportRoutes,
        newsContent.articles.youthCouncil,
        newsContent.articles.floodPrevention,
        newsContent.articles.wellnessCenter,
        newsContent.articles.recyclingInitiative,
        newsContent.articles.roadSafety,
        newsContent.articles.libraryExpansion,
        newsContent.articles.businessGrant,
        newsContent.articles.parkRenovation,
      ].map((article, idx) => ({
        id: idx + 1,
        title: article.title,
        excerpt: article.excerpt,
        content: article.content,
        author: article.author,
        date: article.date || "2024-01-01",
        readTime: newsContent.readTime,
        image: article.image || "/new.png",
        category: article.category,
        slug: article.slug,
      })),
    [newsContent]
  )

  // Take only last 5 announcements & notices
  const announcements = useMemo(() => allAnnouncements.slice(-3).reverse(), [])
  const notices = useMemo(() => allNotices.slice(-3).reverse(), [])

  return (
    <section id="events" className="section-x py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container-x">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
            {t.home.events.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t.home.events.description}
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* News Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {newsArticles.slice(-4).map((event) => (
                <Link
                  key={event.id}
                  href={`/events/news/${event.slug}`}
                  className="group block bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 hover:border-primary/30"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <Image
                      src={event.image || "/placeholder.svg"}
                      alt={event.title}
                      width={400}
                      height={225}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-primary mb-2 group-hover:text-blue-600 transition-colors">
                      {event.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{event.readTime}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                      <MapPin className="w-4 h-4" />
                      <span className="truncate max-w-[180px]">{event.content}
                         
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {event.excerpt}
                    </p>
                    <div className="flex items-center text-primary font-medium text-sm hover:underline underline-offset-4 transition-all group-hover:gap-2">
                      {t.common.learnMore}
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Announcements */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-primary mb-4">{t.home.events.announcements}</h3>
              <div className="space-y-4">
                {announcements.map((item) => (
                  <div key={item.id} className="flex flex-col gap-1 pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                    <h4 className="font-semibold text-gray-800 text-sm">{item.title}</h4>
                    <p className="text-xs text-muted-foreground">{item.date}</p>
                    <p className="text-sm text-gray-600 line-clamp-2">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link href="/events/announcements" className="inline-flex items-center text-primary font-medium text-sm hover:gap-1 transition-all">
                  {t.common.viewAll} {t.nav.announcements}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Notices */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-lg font-bold text-primary mb-4">{t.home.events.notices}</h3>
              <div className="space-y-4">
                {notices.map((notice) => (
                  <div key={notice.id} className="flex flex-col gap-1 pb-4 border-b border-gray-100 last:border-b-0 last:pb-0">
                    <h4 className="font-semibold text-gray-800 text-sm">{notice.title}</h4>
                    <p className="text-xs text-muted-foreground">{notice.dateIssued}</p>
                    <p className="text-sm text-gray-600 line-clamp-2">{notice.body}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link href="/events/notices" className="inline-flex items-center text-primary font-medium text-sm hover:gap-1 transition-all">
                  {t.common.viewAll} {t.nav.notices}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        {/* <div className="mt-12 text-center">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
          >
            {t.common.viewAll} {t.nav.events}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div> */}
      </div>
    </section>
  )
}
