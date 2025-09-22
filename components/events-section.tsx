"use client"

import Image from "next/image"
import { Calendar, Clock, MapPin, AlertTriangle, Megaphone, ArrowRight } from "lucide-react"
import Link from "next/link"
// import { events } from "@/lib/data/events"
import { useLanguage } from "@/lib/i18n/context"
import { translations } from "@/lib/i18n/translations"

export function EventsSection() {
  const { t, language } = useLanguage()
  
  // Get translated notices and announcements
  const notices = translations[language].eventsPage.notice
   const announcements = translations[language].eventsPage.announcement
  const events = translations[language].eventsPage.event


//   const announcements = [
//   {
//     id: 1,
//     title: "Chairman’s Address on Economic Growth",
//     date: "March 30, 2025",
//     icon: <Megaphone className="w-5 h-5 text-primary" />,
//     description: "Watch the Chairman’s latest address on revitalizing Mannar’s local economy.",
//   },
//   {
//     id: 2,
//     title: "Emergency Alert: Storm Preparedness",
//     date: "March 28, 2025",
//     icon: <AlertTriangle className="w-5 h-5 text-destructive" />,
//     description: "Residents advised to prepare for incoming monsoon conditions. Emergency kits available.",
//   },
//   {
//     id: 3,
//     title: "New Public Transport Routes Announced",
//     date: "March 25, 2025",
//     icon: <MapPin className="w-5 h-5 text-primary" />,
//     description: "Three new bus routes to improve connectivity across Mannar Island starting May 1.",
//   },
// ]

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

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left - Events Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {events.map((event) => (
                <Link
                  key={event.id}
                  href={`/events/${event.slug}`}
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
                        <span>{event.time}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
                      <MapPin className="w-4 h-4" />
                      <span className="truncate max-w-[180px]">{event.location}</span>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                      {event.description}
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

          {/* Right Sidebar - Announcements & Notices */}
          <div className="space-y-6">
            {/* Announcements Panel */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-lg font-bold text-primary">{t.home.events.announcements}</h3>
              </div>
              <div className="space-y-4">
                {announcements.map((item) => (
                  <div
                    key={item.id}
                    className="flex gap-3 pb-4 border-b border-gray-100 last:border-b-0 last:pb-0 group"
                  >
                    <div className="flex-shrink-0 pt-1">
                      {item.icon === "megaphone" ? (
                        <Megaphone className="w-5 h-5 text-primary" />
                      ) : item.icon === "alert" ? (
                        <AlertTriangle className="w-5 h-5 text-destructive" />
                      ) : (
                        <MapPin className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 text-sm mb-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-1">{item.date}</p>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link
                  href="/events/announcements"
                  className="inline-flex items-center text-primary font-medium text-sm hover:gap-1 transition-all"
                >
                  {t.common.viewAll} {t.nav.announcements}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Notices Panel */}
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="text-lg font-bold text-primary">{t.home.events.notices}</h3>
              </div>
              <div className="space-y-4">
                {notices.map((notice) => (
                  <div
                    key={notice.id}
                    className="flex gap-3 pb-4 border-b border-gray-100 last:border-b-0 last:pb-0 group"
                  >
                    <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 border border-gray-200">
                      <Image
                        src={notice.image}
                        alt={notice.title}
                        width={48}
                        height={48}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-gray-800 text-sm mb-1 group-hover:text-primary transition-colors">
                        {notice.title}
                      </h4>
                      <p className="text-xs text-muted-foreground mb-1">{notice.date}</p>
                      <p className="text-sm text-gray-600 leading-relaxed line-clamp-2">
                        {notice.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <Link
                  href="/events/notices"
                  className="inline-flex items-center text-primary font-medium text-sm hover:gap-1 transition-all"
                >
                  {t.common.viewAll} {t.nav.notices}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-full hover:bg-primary/90 transition-all shadow-md hover:shadow-lg"
          >
            {t.common.viewAll} {t.nav.events}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}