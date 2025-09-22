import { Language } from './types'

export function getLanguageDirection(language: Language): 'ltr' | 'rtl' {
  // Tamil and Sinhala are left-to-right languages
  return 'ltr'
}

export function getLanguageFont(language: Language): string {
  switch (language) {
    case 'ta':
      return 'font-tamil'
    case 'si':
      return 'font-sinhala'
    default:
      return 'font-sans'
  }
}

export function formatDate(date: string | Date, language: Language): string {
  const dateObj = typeof date === 'string' ? new Date(date) : date
  
  switch (language) {
    case 'ta':
      return dateObj.toLocaleDateString('ta-LK')
    case 'si':
      return dateObj.toLocaleDateString('si-LK')
    default:
      return dateObj.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
  }
}