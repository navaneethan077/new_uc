'use client'

import { useState } from 'react'
import { Star, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n/context'
import { translations } from '@/lib/i18n/translations'

export function TourismMediaSection() {
  const [currentVideo, setCurrentVideo] = useState(0)
  const { language } = useLanguage()

  const home = translations[language].home
  const media = home.tourism.media
  const videos = media.videos
  const t = translations[language]

  const handleVideoSelect = (index: number) => setCurrentVideo(index)

  const attractions = [
    {
      name: "Mannar Fort",
      description:
        "Historic Portuguese and Dutch fort built in 1560, offering panoramic views of the coastline and rich colonial history.",
      category: "Historical Site",
      rating: 4.5,
      image: "/historic-fort-mannar-sri-lanka-colonial-architectu.jpg",
    },
    {
      name: "Adam's Bridge (Rama Setu)",
      description:
        "Legendary chain of limestone shoals connecting Mannar Island to Pamban Island in India, steeped in mythology and natural beauty.",
      category: "Natural Wonder",
      rating: 4.8,
      image: "/adams-bridge-rama-setu-mannar-natural-limestone-fo.jpg",
    },
    {
      name: "Mannar Island",
      description:
        "Pristine island paradise with beautiful beaches, diverse wildlife, and traditional fishing communities.",
      category: "Natural Beauty",
      rating: 4.6,
      image: "/mannar-island-beaches-sri-lanka-pristine-coastline.jpg",
    },
    {
      name: "Baobab Tree",
      description:
        "Ancient African baobab trees, unique to this region in Sri Lanka, creating a distinctive landscape.",
      category: "Natural Wonder",
      rating: 4.3,
      image: "/baobab-trees-mannar-sri-lanka-ancient-african-tree.jpg",
    },
    {
      name: "St. Sebastian's Church",
      description:
        "Beautiful Catholic church showcasing colonial architecture and serving as an important pilgrimage site.",
      category: "Religious Site",
      rating: 4.4,
      image: "/st-sebastian-church-mannar-catholic-colonial-archi.jpg",
    },
    {
      name: "Mannar Lighthouse",
      description:
        "Historic lighthouse offering spectacular views of the surrounding waters and serving as a maritime landmark.",
      category: "Historical Site",
      rating: 4.2,
      image: "/mannar-lighthouse-sri-lanka-historic-maritime-land.jpg",
    },
  ]

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            {home.tourism.title}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            {home.tourism.description}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main video + About */}
          <div className="lg:col-span-3 space-y-6">
            {/* Video Player */}
            <div className="rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video transition-all duration-300 hover:shadow-3xl">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${videos[currentVideo].id}?rel=0&autoplay=1&mute=1&modestbranding=1&playsinline=1`}
                title={videos[currentVideo].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Video Title & Description */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {videos[currentVideo].title}
              </h3>
              <p className="text-gray-600 leading-relaxed">{videos[currentVideo].description}</p>
            </div>

            {/* About Mannar Section */}
            <div className="p-6 bg-white rounded-xl shadow-md border border-gray-100">
              <h3 className="text-xl font-semibold text-primary mb-4">
                {media.about.title}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">{media.about.para1}</p>
              <p className="text-gray-700 leading-relaxed">{media.about.para2}</p>
            </div>

            {/* Travel Tips */}
            <div className="p-6 bg-gradient-to-r from-primary/5 to-blue-50 rounded-xl border border-primary/20">
              <h3 className="text-lg font-semibold text-primary mb-4 flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L1 21h22L12 2zm0 4l7.5 13h-15L12 6z"/>
                  <path d="M11 10h2v5h-2zm0 6h2v2h-2z"/>
                </svg>
                {media.travelTips.title}
              </h3>
              <ul className="text-gray-700 space-y-3">
                {[media.travelTips.tip1, media.travelTips.tip2, media.travelTips.tip3].map(
                  (tip, idx) => (
                    <li key={idx} className="flex items-start group">
                      <span className="text-primary mr-3 mt-1 flex-shrink-0">•</span>
                      <span className="group-hover:text-primary transition-colors duration-200">
                        {tip}
                      </span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Video Suggestions Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* More Videos */}
            <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
                </svg>
                {media.moreVideos}
              </h3>
              <div className="space-y-3">
                {videos.map((video, index) => (
                  <div
                    key={video.id}
                    className={`flex gap-3 bg-gray-50 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 group hover:bg-white hover:shadow-md ${
                      currentVideo === index 
                        ? 'ring-2 ring-primary bg-primary/5 shadow-md' 
                        : 'border border-gray-200'
                    }`}
                    onClick={() => handleVideoSelect(index)}
                  >
                    <div className="relative w-1/3 min-w-[100px] flex-shrink-0">
                      <img
                        src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                        alt={video.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                          currentVideo === index 
                            ? 'bg-primary' 
                            : 'bg-white/90 group-hover:bg-primary group-hover:scale-110'
                        }`}>
                          <svg
                            className={`w-4 h-4 transition-colors duration-300 ${
                              currentVideo === index ? 'text-white' : 'text-gray-800 group-hover:text-white'
                            }`}
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-3 flex-1 min-w-0">
                      <h4 className={`text-sm font-medium line-clamp-2 transition-colors duration-300 ${
                        currentVideo === index ? 'text-primary' : 'text-gray-800 group-hover:text-primary'
                      }`}>
                        {video.title}
                      </h4>
                      <div className="flex items-center mt-1 text-xs text-gray-500">
                        <span>YouTube</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tourism Places */}
            <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-primary flex items-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Tourism Places
                </h3>
              </div>
              <div className="space-y-4">
                {attractions.slice(0, 2).map((attraction, index) => (
                  <div
                    key={index}
                    className="group cursor-pointer overflow-hidden rounded-lg bg-gray-50 hover:bg-white transition-all duration-300 hover:shadow-md border border-gray-200"
                    role="article"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={attraction.image || "/placeholder.svg"}
                        alt={attraction.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3">
                      <div className="flex items-center justify-between mb-2">
                        <span className="inline-block px-2 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                          {attraction.category}
                        </span>
                        <div className="flex items-center gap-1">
                          <Star
                            className="w-3 h-3 text-yellow-400 fill-current"
                            aria-hidden="true"
                          />
                          <span className="text-xs font-medium text-gray-700">{attraction.rating}</span>
                        </div>
                      </div>
                      <h4 className="text-sm font-semibold text-primary mb-1 line-clamp-1 group-hover:text-primary/80 transition-colors duration-200">
                        {attraction.name}
                      </h4>
                      <p className="text-gray-600 text-xs leading-relaxed line-clamp-2">
                        {attraction.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* View All Button */}
              <div className="mt-6 text-center">
                <Link
                  href="/info/tourism"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                >
                  {t.common.viewAll} Tourism Places
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}