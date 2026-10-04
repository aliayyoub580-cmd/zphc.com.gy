import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS, TranslationSchema, RTL_LANGUAGES } from '../i18n/translations';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: TranslationSchema;
  isRtl: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<string>(() => {
    try {
      // 1. Check pathname (e.g., /ru/, /de/)
      const path = window.location.pathname;
      const match = path.match(/^\/([a-z]{2}(?:-[a-z0-9]+)?)\/?/i);
      if (match && TRANSLATIONS[match[1].toLowerCase()]) {
        return match[1].toLowerCase();
      }
      // 2. Check localStorage
      const saved = localStorage.getItem('zphc_lang');
      if (saved && TRANSLATIONS[saved]) {
        return saved;
      }
    } catch {}
    return 'en';
  });

  const setLanguage = (lang: string) => {
    const validLang = TRANSLATIONS[lang] ? lang : 'en';
    setLanguageState(validLang);
    try {
      localStorage.setItem('zphc_lang', validLang);
    } catch {}
  };

  const isRtl = RTL_LANGUAGES.includes(language);
  const t = TRANSLATIONS[language] || TRANSLATIONS.en;

  useEffect(() => {
    // Update document attributes
    document.documentElement.lang = language;
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    if (isRtl) {
      document.body.classList.add('is-rtl');
    } else {
      document.body.classList.remove('is-rtl');
    }
  }, [language, isRtl]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRtl }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
