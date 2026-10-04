import React from 'react';

interface LegalModalProps {
  isOpen: boolean;
  onAccept: () => void;
  onDisagree: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ isOpen, onAccept, onDisagree }) => {
  if (!isOpen) return null;

  return (
    <div className="zphc-modal-overlay" role="dialog" aria-modal="true" aria-labelledby="legal-notice-title">
      <div className="zphc-modal-backdrop" onClick={onAccept} />
      <div className="zphc-modal-card">
        {/* Panda Logo */}
        <div className="zphc-modal-logo">
          <img
            src="/images/globe-panda.png"
            alt="ZPHC Globe Panda"
            width={180}
            height={150}
          />
        </div>

        {/* Title */}
        <h2 className="zphc-modal-title" id="legal-notice-title">
          Terms &amp; Conditions Disclaimer
        </h2>
        <p className="zphc-modal-subtitle">
          PLEASE READ THIS TEXT CAREFULLY IN ITS ENTIRETY. IT AFFECTS YOUR LEGAL RIGHTS AND OBLIGATIONS.
        </p>

        <div className="zphc-modal-divider" />

        {/* Scrollable Terms Content */}
        <div className="zphc-modal-scroll-area">
          <p className="zphc-modal-lead">
            The information provided on this website is for general information, brand presentation, product
            presentation and educational purposes only.
          </p>
          <p>
            Visitors and users of this website agree to access and use ZPHC<sup>&reg;</sup> content at their
            own discretion and risk. ZPHC<sup>&reg;</sup>, their owners, operators, contributors, affiliated
            parties, service providers and representatives do not guarantee that any information, image, product
            reference, team media, external reference, article or communication is complete, current,
            error-free, suitable for a specific purpose, legally available in a particular jurisdiction, or
            appropriate for any personal, commercial, medical, training or regulatory decision.
          </p>
          <p>
            By entering this website, you confirm and agree that you are responsible for complying with the
            laws, rules and regulations applicable in your country, region, sport federation, workplace,
            profession and personal circumstances. This website does not invite, encourage or authorize unlawful
            activity, prohibited conduct, unsafe training, medical self-treatment, misuse of products,
            unauthorized distribution, infringement of third-party rights, or reliance on informal information
            where professional advice is required.
          </p>

          <ol className="zphc-modal-list">
            <li>
              You are at least twenty-one (21) years of age, or you are of the legal age required to access this
              type of content in your jurisdiction, whichever is higher.
            </li>
            <li>
              You are not accessing the website from a jurisdiction, organization, network or situation where such
              access, viewing, communication or use is restricted, unlawful, prohibited or otherwise inappropriate.
            </li>
            <li>
              You have not previously been suspended, removed, blocked or restricted from this website or related
              online services.
            </li>
            <li>
              You agree that your use of this website and any communication with ZPHC<sup>&reg;</sup> must comply
              with applicable law, intellectual-property rules, data-protection rules, sport rules and platform
              rules.
            </li>
            <li>
              You accept that all ZPHC<sup>&reg;</sup> names, logos, graphics, photographs, videos, product
              images, page layouts, written content, icons, code, design elements and related materials are
              protected to the fullest extent permitted by law. ZPHC<sup>&reg;</sup> is a registered trademark
              and has been registered for many years.
            </li>
            <li>
              You must not copy, scrape, republish, sell, reverse engineer, misuse, attack, overload, bypass,
              impersonate, misrepresent, defame, tamper with, or otherwise damage any part of this website, its
              systems, its data, its media, its contact form, its legal notices or its protected materials.
            </li>
            <li>
              You understand that health, training, rehabilitation, nutrition, anti-doping and product
              information on this website is educational only and is not medical advice, legal advice, commercial
              specification, professional diagnosis, treatment, prescription, guarantee, invitation or regulatory
              clearance.
            </li>
          </ol>

          <p className="zphc-modal-agree-note">
            By clicking &ldquo;Agree&rdquo; and entering this website, you confirm that you have read,
            understood and accepted these terms, the disclaimer, the privacy policy, the cookie policy and the
            other legal notices provided on this website.
          </p>
        </div>

        <p className="zphc-modal-warning">
          IF YOU DISAGREE WITH ANYTHING STATED ABOVE, PLEASE LEAVE IMMEDIATELY!
        </p>

        <div className="zphc-modal-divider" />

        {/* Action Buttons */}
        <div className="zphc-modal-actions">
          <button
            type="button"
            className="zphc-btn-pill zphc-btn-agree"
            onClick={onAccept}
          >
            <span>Agree</span>
          </button>

          <p className="zphc-choice-txt">The choice is yours</p>

          <button
            type="button"
            className="zphc-btn-pill zphc-btn-disagree"
            onClick={onDisagree}
          >
            <span>Disagree</span>
          </button>
        </div>
      </div>
    </div>
  );
};
