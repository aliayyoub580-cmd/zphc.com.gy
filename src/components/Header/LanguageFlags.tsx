import React from 'react';

export interface CountryFlagItem {
  code: string;
  name: string;
  lang: string;
  path: string;
}

const COUNTRIES: CountryFlagItem[] = [
  // Row 1
  { code: 'GB', name: 'English', lang: 'en', path: '/' },
  { code: 'RU', name: 'Русский', lang: 'ru', path: '/ru/' },
  { code: 'DE', name: 'Deutsch', lang: 'de', path: '/de/' },
  { code: 'FR', name: 'Français', lang: 'fr', path: '/fr/' },
  { code: 'IT', name: 'Italiano', lang: 'it', path: '/it/' },
  { code: 'ES', name: 'Español', lang: 'es', path: '/es/' },
  { code: 'MX', name: 'Español LATAM', lang: 'es-419', path: '/es-419/' },
  // Row 2
  { code: 'BR', name: 'Português BR', lang: 'pt-br', path: '/pt-br/' },
  { code: 'TR', name: 'Türkçe', lang: 'tr', path: '/tr/' },
  { code: 'UZ', name: 'O‘zbekcha', lang: 'uz', path: '/uz/' },
  { code: 'SA', name: 'العربية', lang: 'ar', path: '/ar/' },
  { code: 'IR', name: 'فارسی', lang: 'fa', path: '/fa/' },
  { code: 'IL', name: 'עברית', lang: 'he', path: '/he/' },
  { code: 'IN', name: 'हिन्दी', lang: 'hi', path: '/hi/' },
  // Row 3
  { code: 'PK', name: 'اردو', lang: 'ur', path: '/ur/' },
  { code: 'JP', name: '日本語', lang: 'ja', path: '/ja/' },
  { code: 'KR', name: '한국어', lang: 'ko', path: '/ko/' },
  { code: 'ID', name: 'Indonesia', lang: 'id', path: '/id/' },
  { code: 'MY', name: 'Melayu', lang: 'ms', path: '/ms/' },
  { code: 'PL', name: 'Polski', lang: 'pl', path: '/pl/' },
  { code: 'KE', name: 'Kiswahili', lang: 'sw', path: '/sw/' },
];

import { useLanguage } from '../../context/LanguageContext';

export const LanguageFlags: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="zphc-country-grid" role="group" aria-label="Choose website language">
      {COUNTRIES.map((item) => {
        const isActive = language === item.lang;
        return (
          <button
            key={item.code}
            type="button"
            className={`zphc-country-circle ${isActive ? 'is-active' : ''}`}
            title={`${item.code} - ${item.name}`}
            aria-label={`${item.code} - ${item.name}`}
            onClick={() => setLanguage(item.lang)}
          >
            <img
              src={`/images/flags/${item.code.toLowerCase()}.svg`}
              alt={item.name}
              className="zphc-flag-img"
              width={28}
              height={28}
              loading="lazy"
            />
          </button>
        );
      })}
    </div>
  );
};
