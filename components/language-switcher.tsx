"use client"

import { useState, useRef, useEffect } from "react"
import { Globe } from "lucide-react"
import { useLanguage } from "@/lib/i18n/context"
import { Language } from "@/lib/i18n/types"

const languages = [
  { code: 'en' as Language, name: 'English', nativeName: 'English' },
  { code: 'ta' as Language, name: 'Tamil', nativeName: 'தமிழ்' },
  { code: 'si' as Language, name: 'Sinhala', nativeName: 'සිංහල' },
]

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const currentLanguage = languages.find(lang => lang.code === language) || languages[0]

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode)
    setIsOpen(false)
  }

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Mobile view (dropdown) */}
      <div className="sm:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-white text-sm font-medium"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-label="Select language"
        >
          <Globe className="w-4 h-4" />
          <span>{currentLanguage.nativeName}</span>
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 w-full z-50 overflow-hidden">
            <div className="py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full text-left px-4 py-2.5 text-sm hover:bg-gray-50 transition-colors flex items-center justify-between ${
                    language === lang.code ? 'bg-blue-50 text-blue-600 font-medium' : 'text-gray-700'
                  }`}
                  role="option"
                  aria-selected={language === lang.code}
                >
                  <div>
                    <div className="font-medium">{lang.nativeName}</div>
                    <div className="text-xs text-gray-500">{lang.name}</div>
                  </div>
                  {language === lang.code && (
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Desktop view (horizontal buttons) */}
      <div className="hidden sm:flex items-center bg-white/10 backdrop-blur-sm rounded-lg p-1">
        <Globe className="w-4 h-4 mx-2 text-white" />
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
              language === lang.code 
                ? 'bg-white text-blue-600 shadow-sm' 
                : 'text-white/80 hover:text-white hover:bg-white/20'
            }`}
            aria-label={`Switch to ${lang.name}`}
          >
            {lang.nativeName}
          </button>
        ))}
      </div>
    </div>
  )
}