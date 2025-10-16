"use client"

import { useState, useEffect, useRef } from "react"
import { usePathname } from 'next/navigation'
import { Menu, X, ChevronDown, AlertCircle } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/context"

export function Navigation() {
  const { t } = useLanguage()
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)
  const closeTimer = useRef<NodeJS.Timeout | null>(null)

  const go = (href: string) => {
    try {
      setOpenDropdown(null)
      if (typeof window !== "undefined") {
        window.location.assign(href)
      }
    } catch (_) {}
  }

  // Cleanup timer on unmount
  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current)
    }
  }, [])

  const handleDropdownEnter = (dropdownName: string) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
    setOpenDropdown(dropdownName)
  }

  const handleDropdownLeave = () => {
    closeTimer.current = setTimeout(() => {
      setOpenDropdown(null)
    }, 300)
  }

  const isActive = (href: string) => {
    if (href === "/") return pathname === href
    return pathname.startsWith(href)
  }

  const baseItems = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.chairman, href: "/chairman" },
  ]

  const eventsDropdown = [
    { name: t.nav.gallery, href: "/events/gallery" },
    { name: t.nav.news, href: "/events/news" },
    { name: t.nav.announcements, href: "/events/announcements" },
    { name: t.nav.notices, href: "/events/notices" },
  ]

  const infoDropdown = [
    { name: t.nav.services, href: "/info/services" },
    { name: t.nav.tourism, href: "/info/tourism" },
    { name: t.nav.ads, href: "/info/ads" },
    { name: t.nav.socialWork, href: "/info/social-work" },
  ]

  const isEventsActive = eventsDropdown.some(item => isActive(item.href))
  const isInfoActive = infoDropdown.some(item => isActive(item.href))

  // Theme colors - using your main blue theme
  const themeColor = "#1C2B78"
  const themeLight = "#f0f4ff" // Light blue background
  const themeHover = "#15225c" // Darker blue for hover

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="container-x flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
            <Image
              src="/logo.png"
              alt="Municipal Council Logo"
              width={32}
              height={32}
              className="rounded"
            />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-lg font-semibold text-primary">Mannar Urban Council</h1>
            <p className="text-xs text-muted-foreground">Official Website</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-4 relative">
          {baseItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`font-medium hover:underline underline-offset-4 transition-all px-3 py-2 rounded flex items-center gap-1 ${
                isActive(item.href)
                  ? 'bg-[#1C2B78] text-white'
                  : 'text-primary hover:text-primary hover:bg-gray-50'
              }`}
              onClick={() => setOpenDropdown(null)}
            >
              {item.name}
            </a>
          ))}

          {/* Events & Updates dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleDropdownEnter("events")}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              className={`inline-flex items-center gap-1 font-medium hover:underline underline-offset-4 px-3 py-2 rounded transition-colors ${
                openDropdown === "events" || isEventsActive
                  ? 'bg-[#1C2B78] text-white'
                  : 'text-primary hover:bg-gray-50'
              }`}
              aria-haspopup="menu"
              aria-expanded={openDropdown === "events"}
              onClick={() => setOpenDropdown(openDropdown === "events" ? null : "events")}
            >
              {t.nav.events}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  openDropdown === "events" ? "rotate-180" : "group-hover:rotate-180"
                }`}
              />
            </button>
            {openDropdown === "events" && (
              <div
                className="absolute left-0 mt-2 bg-white shadow-lg rounded-xl border border-gray-200 w-48 py-2 z-50"
                role="menu"
                aria-label="Events & Updates"
                onMouseEnter={() => {
                  if (closeTimer.current) clearTimeout(closeTimer.current)
                }}
                onMouseLeave={handleDropdownLeave}
              >
                {eventsDropdown.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    role="menuitem"
                    className={`block px-4 py-2 font-medium ${
                      isActive(item.href)
                        ? 'bg-[#1C2B78] text-white'
                        : 'text-primary hover:bg-gray-50'
                    }`}
                    onMouseDown={(e) => {
                      e.preventDefault()
                      go(item.href)
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Information dropdown */}
          <div
            className="relative group"
            onMouseEnter={() => handleDropdownEnter("info")}
            onMouseLeave={handleDropdownLeave}
          >
            <button
              className={`inline-flex items-center gap-1 font-medium hover:underline underline-offset-4 px-3 py-2 rounded transition-colors ${
                openDropdown === "info" || isInfoActive
                  ? 'bg-[#1C2B78] text-white'
                  : 'text-primary hover:bg-gray-50'
              }`}
              aria-haspopup="menu"
              aria-expanded={openDropdown === "info"}
              onClick={() => setOpenDropdown(openDropdown === "info" ? null : "info")}
            >
              {t.nav.information}
              <ChevronDown
                className={`w-4 h-4 transition-transform ${
                  openDropdown === "info" ? "rotate-180" : "group-hover:rotate-180"
                }`}
              />
            </button>
            {openDropdown === "info" && (
              <div
                className="absolute left-0 mt-2 bg-white shadow-lg rounded-xl border border-gray-200 w-64 py-2 z-50"
                role="menu"
                aria-label="Information"
                onMouseEnter={() => {
                  if (closeTimer.current) clearTimeout(closeTimer.current)
                }}
                onMouseLeave={handleDropdownLeave}
              >
                {infoDropdown.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    role="menuitem"
                    className={`block px-4 py-2 font-medium ${
                      isActive(item.href)
                        ? 'bg-[#1C2B78] text-white'
                        : 'text-primary hover:bg-gray-50'
                    }`}
                    onMouseDown={(e) => {
                      e.preventDefault()
                      go(item.href)
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a
            href="/contact"
            className={`font-medium hover:underline underline-offset-4 transition-all px-3 py-2 rounded ${
              isActive("/contact")
                ? 'bg-[#1C2B78] text-white'
                : 'text-primary hover:text-primary hover:bg-gray-50'
            }`}
            onClick={() => setOpenDropdown(null)}
          >
            {t.nav.contact}
          </a>

          {/* Complaints - Updated with theme colors */}
<a
  href="/complaints"
  className={`relative font-bold py-2 px-6 rounded-2xl flex items-center gap-3 overflow-hidden transition-transform duration-300 hover:scale-110 ${
    isActive("/complaints")
      ? 'bg-[#1C2B78] shadow-xl'
      : 'bg-[#f0f4ff] text-[#1C2B78] hover:bg-[#1C2B78] hover:text-white'
  }`}
  onClick={() => setOpenDropdown(null)}
>
  {/* Moving Spotlight */}
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute w-24 h-24 rounded-full bg-[#FACC15] opacity-40 blur-4xl animate-spotlight" />
  </div>

  {/* Text with Moving Light */}
  <span className={`${isActive("/complaints") ? 'animate-text-light' : 'text-[#1C2B78]'}`}>
    {t.nav.complaints}
  </span>

  {/* Big Glowing Dot */}
  <span className="absolute -top-3 -right-3">
    <span className="relative flex h-5 w-5">
      <span className="animate-pulse-scale absolute inline-flex h-full w-full rounded-full bg-[#FACC15] opacity-80"></span>
      <span className="relative inline-flex rounded-full h-5 w-5 bg-[#FACC15]"></span>
    </span>
  </span>
</a>





        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={t.common.menu}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container-x py-4 space-y-3">
            {baseItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`block font-medium py-3 px-4 rounded-lg transition-colors ${
                  isActive(item.href)
                    ? 'bg-[#1C2B78] text-white'
                    : 'text-primary hover:bg-gray-50'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}

            <details className="group border rounded-lg">
              <summary
                className={`flex justify-between items-center py-3 px-4 cursor-pointer font-medium rounded-lg transition-colors ${
                  isEventsActive ? 'bg-[#1C2B78] text-white' : 'text-primary hover:bg-gray-50'
                }`}
              >
                {t.nav.events}
                <span className="group-open:rotate-180 transition-transform">
                  <ChevronDown className="w-4 h-4" />
                </span>
              </summary>
              <div className="pl-4 pb-2 space-y-2">
                {eventsDropdown.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block py-2 px-3 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? 'bg-[#1C2B78] text-white font-medium'
                        : 'text-primary hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </details>

            <details className="group border rounded-lg">
              <summary
                className={`flex justify-between items-center py-3 px-4 cursor-pointer font-medium rounded-lg transition-colors ${
                  isInfoActive ? 'bg-[#1C2B78] text-white' : 'text-primary hover:bg-gray-50'
                }`}
              >
                {t.nav.information}
                <span className="group-open:rotate-180 transition-transform">
                  <ChevronDown className="w-4 h-4" />
                </span>
              </summary>
              <div className="pl-4 pb-2 space-y-2">
                {infoDropdown.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block py-2 px-3 rounded-lg transition-colors ${
                      isActive(item.href)
                        ? 'bg-[#1C2B78] text-white font-medium'
                        : 'text-primary hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </details>

            <a
              href="/contact"
              className={`block font-medium py-3 px-4 rounded-lg transition-colors ${
                isActive("/contact")
                  ? 'bg-[#1C2B78] text-white'
                  : 'text-primary hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {t.nav.contact}
            </a>

            {/* Complaints - Mobile version with theme colors */}
            <a
              href="/complaints"
              className={`relative block font-medium py-3 px-4 rounded-lg flex items-center gap-2 transition-colors border-2 ${
                isActive("/complaints")
                  ? 'bg-[#1C2B78] text-white border-[#1C2B78] shadow-md'
                  : 'text-[#1C2B78] border-[#1C2B78] bg-[#f0f4ff] hover:bg-[#1C2B78] hover:text-white'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
             
              {t.nav.complaints}

              {/* Active indicator for mobile */}
              {isActive("/complaints") && (
                <span className="absolute -top-1 -right-1">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-70"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                </span>
              )}
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}