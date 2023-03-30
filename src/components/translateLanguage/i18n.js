import i18n from "i18next"
import {initReactI18next} from "react-i18next"

// import resources
import translationEN from "./translationEN.json"
import translationAM from "./translationAM.json"
import translationRU from "./translationRU.json"

export const resources = {
  en: {
    translation: translationEN
  },
  ru: {
    translation: translationRU
  },
  am: {
    translation: translationAM
  }
}

i18n.use(initReactI18next).init({
  lng: "am",
  resources,
  interpolation: {
    escapeValue: true
  }
})

export default i18n