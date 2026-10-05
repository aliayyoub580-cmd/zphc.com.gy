import React, { useState } from 'react';

interface LegalModalProps {
  isOpen: boolean;
  onAccept: () => void;
  onDisagree?: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onAccept }) => {
  const [isAgeConfirmed, setIsAgeConfirmed] = useState(false);
  const [showFullNotice, setShowFullNotice] = useState(false);
  const [showCookiePrefs, setShowCookiePrefs] = useState(false);
  const [optionalCookies, setOptionalCookies] = useState(false);

  if (!isOpen) return null;

  const handleAccept = () => {
    onAccept();
  };

  const handleSaveCookiePrefs = () => {
    localStorage.setItem('zphc_optional_cookies', optionalCookies ? 'true' : 'false');
    onAccept();
  };

  return (
    <div
      className="z-legal-gate-overlay"
      role="dialog"
      aria-modal="true"
      aria-labelledby="z-legal-notice-heading"
    >
      <div className="z-legal-gate-backdrop" onClick={(e) => e.stopPropagation()} />
      <div className="z-legal-gate-card">
        {/* Panda Globe Logo */}
        <div className="z-legal-logo-wrap">
          <img
            src="/images/globe-panda.png"
            alt="ZPHC Globe Panda"
            className="z-legal-logo-img"
            width={120}
            height={100}
          />
        </div>

        {/* Title */}
        <h2 className="z-legal-heading" id="z-legal-notice-heading">
          Legal Notice &amp; Cookie Preferences
        </h2>

        {/* Primary notice text */}
        <p className="z-legal-notice-p">
          ZPHC<sup>&reg;</sup> uses this notice to provide required legal, privacy, age-confirmation, and cookie-related information. By continuing, you confirm that you meet the applicable age and jurisdictional requirements, agree to the website access terms, and understand that this website provides informational, brand, product, educational, training, and community-related content only.
        </p>

        {/* Optional cookies note */}
        <p className="z-legal-notice-p">
          Optional cookies are disabled unless you choose to enable them. You may manage or reject non-essential cookies at any time.
        </p>

        {/* Quick links row */}
        <div className="z-legal-links-row">
          <button
            type="button"
            className="z-legal-link-btn"
            onClick={() => {
              setShowFullNotice(true);
              setShowCookiePrefs(false);
            }}
          >
            Terms
          </button>
          <button
            type="button"
            className="z-legal-link-btn"
            onClick={() => {
              setShowFullNotice(true);
              setShowCookiePrefs(false);
            }}
          >
            Privacy Policy
          </button>
          <button
            type="button"
            className="z-legal-link-btn"
            onClick={() => {
              setShowCookiePrefs(true);
              setShowFullNotice(false);
            }}
          >
            Cookie Policy
          </button>
          <button
            type="button"
            className="z-legal-link-btn"
            onClick={() => {
              setShowFullNotice(true);
              setShowCookiePrefs(false);
            }}
          >
            GDPR &amp; Data Rights
          </button>
          <button
            type="button"
            className="z-legal-link-btn"
            onClick={() => {
              setShowFullNotice(true);
              setShowCookiePrefs(false);
            }}
          >
            Disclaimer
          </button>
        </div>

        {/* Expandable Full Legal Notice Section */}
        {showFullNotice && (
          <div className="z-legal-expandable-box">
            <h3 className="z-legal-subhead">Terms &amp; Conditions Disclaimer</h3>
            <p className="z-legal-expandable-text">
              The information provided on this website is for general information, brand presentation, product presentation and educational purposes only.
            </p>
            <p className="z-legal-expandable-text">
              Visitors and users of this website agree to access and use ZPHC<sup>&reg;</sup> content at their own discretion and risk. ZPHC<sup>&reg;</sup> does not guarantee that any information, image, product reference, team media, external reference, article or communication is complete, current, error-free, suitable for a specific purpose, or appropriate for any personal, commercial, medical, training or regulatory decision.
            </p>
            <ol className="z-legal-expandable-list">
              <li>You are at least twenty-one (21) years of age, or you are of the legal age required to access this type of content in your jurisdiction, whichever is higher.</li>
              <li>You are not accessing the website from a jurisdiction or network where such access or use is restricted, unlawful, or prohibited.</li>
              <li>You accept that all ZPHC<sup>&reg;</sup> names, logos, graphics, photographs, product images and design elements are protected registered trademarks and copyrighted material.</li>
              <li>You understand that health, training, rehabilitation, nutrition, and anti-doping information on this website is educational only and is not medical advice, prescription, or regulatory clearance.</li>
            </ol>
            <button
              type="button"
              className="z-legal-collapse-btn"
              onClick={() => setShowFullNotice(false)}
            >
              Hide Full Notice
            </button>
          </div>
        )}

        {/* Expandable Cookie Preferences Section */}
        {showCookiePrefs && (
          <div className="z-legal-expandable-box">
            <h3 className="z-legal-subhead">Cookie Preferences</h3>
            <div className="z-cookie-pref-row">
              <div>
                <strong>Essential Website Cookies</strong>
                <p>Required for security, navigation, language routing and verification.</p>
              </div>
              <span className="z-cookie-status-badge">Always Active</span>
            </div>
            <div className="z-cookie-pref-row">
              <div>
                <strong>Performance &amp; Analytics Cookies</strong>
                <p>Anonymized telemetry to help us measure site performance.</p>
              </div>
              <label className="z-cookie-switch-label">
                <input
                  type="checkbox"
                  checked={optionalCookies}
                  onChange={(e) => setOptionalCookies(e.target.checked)}
                />
                <span className="z-cookie-switch-text">{optionalCookies ? 'Enabled' : 'Disabled'}</span>
              </label>
            </div>
            <div className="z-cookie-pref-actions">
              <button
                type="button"
                className="z-cookie-save-btn"
                onClick={handleSaveCookiePrefs}
              >
                Save Preferences
              </button>
              <button
                type="button"
                className="z-legal-collapse-btn"
                onClick={() => setShowCookiePrefs(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Age & Jurisdiction Confirmation Checkbox Card */}
        <div
          className={`z-legal-confirm-card ${isAgeConfirmed ? 'is-checked' : ''}`}
          onClick={() => setIsAgeConfirmed(!isAgeConfirmed)}
        >
          <input
            type="checkbox"
            id="z-legal-age-checkbox"
            className="z-legal-checkbox"
            checked={isAgeConfirmed}
            onChange={(e) => setIsAgeConfirmed(e.target.checked)}
            onClick={(e) => e.stopPropagation()}
            aria-label="Confirm age requirement"
          />
          <label
            htmlFor="z-legal-age-checkbox"
            className="z-legal-confirm-label"
            onClick={(e) => e.stopPropagation()}
          >
            I confirm that I meet the applicable age requirement and that I am permitted to access this website under the laws and regulations of my jurisdiction.
          </label>
        </div>

        {/* Action Buttons Stack */}
        <div className="z-legal-actions-stack">
          {/* 1. Primary Red Pill Button */}
          <button
            type="button"
            className="z-legal-btn-primary"
            onClick={handleAccept}
          >
            Accept Required Terms and Continue
          </button>

          {/* 2. Secondary Blue Pill: Manage Cookies */}
          <button
            type="button"
            className="z-legal-btn-secondary"
            onClick={() => {
              setShowCookiePrefs(!showCookiePrefs);
              setShowFullNotice(false);
            }}
          >
            Manage Cookies
          </button>

          {/* 3. Secondary Blue Pill: Read Full Legal Notice */}
          <button
            type="button"
            className="z-legal-btn-secondary"
            onClick={() => {
              setShowFullNotice(!showFullNotice);
              setShowCookiePrefs(false);
            }}
          >
            {showFullNotice ? 'Close Legal Notice' : 'Read Full Legal Notice'}
          </button>
        </div>
      </div>
    </div>
  );
};
