import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

interface VerificationPageProps {
  onNavigateHome: () => void;
}

export const VerificationPage: React.FC<VerificationPageProps> = ({ onNavigateHome }) => {
  const { t, isRtl } = useLanguage();

  return (
    <main className={`tmpl-home trust-main zphc-verification-page ${isRtl ? 'is-rtl' : ''}`} id="main-content">
      {/* Breadcrumb Header Bar */}
      <div className="zphc-breadcrumb-wrapper">
        <div className="container breadcrumb__container">
          <div className="page-title">
            Validation &amp; Authenticity
          </div>
          <div className="breadcrumb">
            <a
              href="/"
              className="breadcrumb__link"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
              }}
            >
              {t.nav.home}
            </a>{' '}
            /{' '}
            <span className="breadcrumb__active">Validation &amp; Authenticity</span>
          </div>
        </div>
      </div>

      {/* Main Verification Document Article */}
      <article className="container document-style z-trust-page">
        <h1 className="zphc-trust-page-heading">
          ZPHC<span className="reg-mark">&reg;</span> Validation &amp; Authenticity
        </h1>

        {/* Section 1: New Validation System Card */}
        <section className="z-trust-card z-trust-new">
          <figure className="article-visual">
            <img
              src="/images/new-verification.jpg"
              alt="ZPHC validation code under silver scratch-off coating"
              className="z-trust-card-img"
              width={784}
              height={396}
              loading="eager"
            />
          </figure>

          <p>
            Please carefully scratch off this silver coating from the back of Your product. Under the silver coating You will find the validation code which may consists of letters, special symbols and numbers looking like that &ldquo;<span>8@MNZ8X@8DW</span>&rdquo;, please proceed here:
          </p>

          <div className="product-detail-actions">
            <button
              type="button"
              className="z-cta-link"
              onClick={(e) => {
                e.preventDefault();
              }}
              aria-label="ZPHC® New Validation System"
            >
              NEW VALIDATION SYSTEM
            </button>
          </div>

          <p>
            Opens the official ZPHC<span className="reg-mark">&reg;</span> validation system at validation.zphc.com in a new tab.
          </p>
          <p>
            This system works until 2031–2032.
          </p>
        </section>

        {/* Middle Column: Breathing Panda Globe */}
        <div className="verify-globe">
          <img
            src="/images/globe-panda.png"
            alt="ZPHC® globe panda logo"
            className="verify-globe__img"
            width={700}
            height={581}
            loading="lazy"
          />
          <p className="verify-globe__line">
            We strive continuously to serve you better
          </p>
        </div>

        {/* Section 2: Old Anti-Counterfeiting System Card */}
        <section className="z-trust-card z-trust-old">
          <figure className="article-visual">
            <img
              src="/images/old-verification.jpg"
              alt="ZPHC serial number on tamper-evident packaging seal"
              className="z-trust-card-img"
              width={477}
              height={208}
              loading="lazy"
            />
          </figure>

          <p>
            Please find the serial number under a scratch line.<br />
            If it looks, for example like &ldquo;<span>5XTC-S35E-N2TA-68HN</span>&rdquo; in capital letters only, please follow this link:
          </p>

          <div className="product-detail-actions">
            <button
              type="button"
              className="z-cta-link"
              onClick={(e) => {
                e.preventDefault();
              }}
              aria-label="ZPHC® Old Anti-Counterfeiting System"
            >
              OLD ANTI-COUNTERFEITING SYSTEM
            </button>
          </div>

          <p>
            Opens the official ZPHC<span className="reg-mark">&reg;</span> anti-counterfeiting system at anticounterfeiting.zphc.com in a new tab.
          </p>
          <p>
            This system works until 2029.
          </p>
        </section>
      </article>
    </main>
  );
};
