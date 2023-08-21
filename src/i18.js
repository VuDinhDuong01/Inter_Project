import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import viTranslations from './lang/vi/vi.json'
import enTranslations from './lang/en/en.json'

const resources = {
  en: {
    translation: enTranslations
  },
  vi: {
    translation: viTranslations
  }
}

i18n
  .use(initReactI18next) 
  .init({
    resources,
    supportedLngs: ['en', 'vi'],
    lng: 'vi', 
    interpolation: {
      escapeValue: false
    }
  })

export default i18n