import i18n from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from "./locales/en/translation.json"
import translationUA from "./locales/ua/translation.json"
import {initReactI18next} from "react-i18next";



const resources = {
    en: {
        translation: translationEN
    },
    ua: {
        translation: translationUA
    }
}


i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: "ua",

        keySeparator: false,

        interpolation: {
            escapeValue: false
        }
    });


export default i18n;