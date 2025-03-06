import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        searchPlaceholder: "I'm shopping for...",
        SEARCH: "Search",
        Login: "Login",
        Language: "Language",
        Home: "Home",
        "Shop All": "Shop All",
        Anklets: "Anklets",
        Bracelets: "Bracelets",
        Earrings: "Earrings",
        Necklace: "Necklace",
        "Contact us": "Contact Us",
        "About us": "About Us",
      },
    },
    hi: {
      translation: {
        searchPlaceholder: "मैं खरीदारी कर रहा हूँ...",
        SEARCH: "खोजें",
        Login: "लॉगिन",
        Language: "भाषा",
        Home: "होम",
        "Shop All": "सभी खरीदें",
        Anklets: "पायल",
        Bracelets: "कंगन",
        Earrings: "कान की बाली",
        Necklace: "हार",
        "Contact us": "संपर्क करें",
        "About us": "हमारे बारे में",
      },
    },
  },
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
