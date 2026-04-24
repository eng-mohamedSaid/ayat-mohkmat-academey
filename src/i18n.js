import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ar from '../public/locales/ar.json'
import en from '../public/locales/en.json'

const getInitialLanguage = () => {
  const path = window.location.pathname
  if (path === '/en' || path.startsWith('/en/')) return 'en'
  return localStorage.getItem('ayat_lang') || 'ar'
}

i18n.use(initReactI18next).init({
  resources: {
    ar: { translation: ar },
    en: { translation: en },
  },
  lng: getInitialLanguage(),
  fallbackLng: 'ar',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n