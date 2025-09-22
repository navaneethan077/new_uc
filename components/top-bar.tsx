"use client"

import { useState, useEffect } from "react"
import { Phone, Mail, Globe } from "lucide-react"
import { LanguageSwitcher } from "./language-switcher"
import { useLanguage } from "@/lib/i18n/context"

export function TopBar() {
  const { t } = useLanguage()
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      )
    }

    updateTime()
    const interval = setInterval(updateTime, 60000) // Update every minute

    return () => clearInterval(interval)
  }, [])


  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container-x flex items-center justify-between py-2 text-xs md:text-sm">
        <div className="flex items-center">
          <span>{currentTime}</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4">
            <a href="tel:+94112345678" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Phone className="w-3 h-3" />
              <span>+94 11 234 5678</span>
            </a>
            <a
              href="mailto:info@municipal.gov.lk"
              className="flex items-center gap-1 hover:opacity-80 transition-opacity"
            >
              <Mail className="w-3 h-3" />
              <span>info@municipal.gov.lk</span>
            </a>
          </div>

          <LanguageSwitcher />
        </div>
      </div>
    </div>
  )
}
