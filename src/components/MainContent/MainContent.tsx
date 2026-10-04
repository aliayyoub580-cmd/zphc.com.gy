import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const MainContent: React.FC = () => {
  const { t } = useLanguage();

  return (
    <main className="zphc-main-content">
      <div className="zphc-content-container">
        {/* Main Title */}
        <h2 className="zphc-slogan-title">
          {t.main.sloganTitle}
        </h2>

        {/* Subtitle */}
        <p className="zphc-main-subtitle">
          {t.main.subtitle}
        </p>

        <p className="zphc-category-tags">
          {t.main.categoryTags}
        </p>

        {/* Quote Card */}
        <div className="zphc-quote-box">
          <p className="zphc-quote-text">
            {t.main.quote}
          </p>
        </div>

        {/* Divider */}
        <div className="zphc-divider" />

        {/* Body Paragraphs */}
        <div className="zphc-prose">
          <p>{t.main.p1}</p>
          <p>{t.main.p2}</p>
          <p>{t.main.p3}</p>
          <p>{t.main.p4}</p>

          <p className="zphc-privacy-link-row">
            {t.main.privacyPrompt}{' '}
            <a href="/privacy-policy/" className="zphc-link">
              {t.main.privacyLink}
            </a>
            .
          </p>
        </div>

        {/* Panda Globe Logo Slogan */}
        <div className="zphc-panda-slogan">
          <a href="/" className="zphc-panda-link">
            <img
              src="/images/globe-panda.png"
              alt="ZPHC® globe panda logo"
              className="zphc-globe-panda-img"
              width={260}
              height={215}
            />
          </a>
          <p className="zphc-panda-caption">
            {t.main.pandaCaption}
          </p>
        </div>
      </div>
    </main>
  );
};
