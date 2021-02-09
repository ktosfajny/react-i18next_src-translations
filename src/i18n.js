import i18n from "i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

import translateEN from "./translations/en/translation.json";
import translateCHI from "./translations/chi/translation.json";
import translateKO from "./translations/ko/translation.json";

// object with imported translations
const resources = {
  en: {
    translation: translateEN,
  },
  chi: {
    translation: translateCHI,
  },
  ko: {
    translation: translateKO,
  },
};

const fallbackLng = ["en"];
const availableLanguages = ["en", "ko", "chi"];

const options = {
  // order and from where user language should be detected
  order: ["navigator", "htmlTag", "path", "subdomain"],

  // keys or params to lookup language from
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ["localStorage", "cookie"],
  excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)

  // optional expire and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: "myDomain", // domain

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,

  // only detect languages that are in the whitelist
  checkWhitelist: true,
};

i18n
  .use(Backend) // load translation using xhr -> see /public/locales. We will add locales in the next step

  .use(LanguageDetector) // detect user language

  .use(initReactI18next) // pass the i18n instance to react-i18next.

  .init({
    fallbackLng, // if user computer language is not on the list of available languages, than we will be using the fallback language specified earlier
    whitelist: availableLanguages, // whitelist is a list of languages that i18n will check if user uses one of it
    detection: options,
    resources, // object with imported files with translations
    // saveMissing: true, // if set to true - will send not translated keys to endpoint, default is false
    // debug: true, // if set to true it will console log all informations in console needed to debug, default is false
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
