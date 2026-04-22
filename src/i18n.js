import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ar from '../public/locales/ar.json'
import en from '../public/locales/en.json'

i18n.use(initReactI18next).init({
  resources: {
    ar: { translation: ar },
    en: { translation: en },
  },
  lng: localStorage.getItem('ayat_lang') || 'ar',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
})

export default i18n