"use client"

import { useLanguage } from "@/lib/i18n/context"
import { getLanguageDirection, getLanguageFont } from "@/lib/i18n/utils"

interface LanguageAwareWrapperProps {
  children: React.ReactNode
  className?: string
}

export function LanguageAwareWrapper({ children, className = "" }: LanguageAwareWrapperProps) {
  const { language, isLoading } = useLanguage()

  if (isLoading) {
    return (
      <div className={`${className} animate-pulse`}>
        {children}
      </div>
    )
  }

  const direction = getLanguageDirection(language)
  const fontClass = getLanguageFont(language)

  return (
    <div 
      className={`${className} ${fontClass}`}
      dir={direction}
      lang={language}
    >
      {children}
    </div>
  )
}