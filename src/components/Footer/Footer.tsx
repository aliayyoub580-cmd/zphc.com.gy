import React from 'react';

const FOOTER_LINKS = [
  { name: 'Welcome', href: '/' },
  { name: 'Products', href: '/products/' },
  { name: 'Verification', href: '/verificationsystems/' },
  { name: 'ZPHC® Team', href: '/zphc-team/' },
  { name: 'Anti-Doping', href: '/anti-doping/' },
  { name: 'ZPHC® Tools', href: '/tools/' },
  { name: 'Blog', href: '/blog/' },
  { name: 'Contact', href: '/contact/' },
  { name: 'Privacy Policy', href: '/privacy-policy/' },
  { name: 'Cookie Policy', href: '/cookie-policy/' },
  { name: 'GDPR & Data Rights', href: '/gdpr-policy/' },
  { name: 'Terms', href: '/terms/' },
  { name: 'Disclaimer', href: '/disclaimer/' },
  { name: 'Editorial Standards', href: '/editorial-standards/' },
  { name: 'Accessibility', href: '/accessibility/' },
  { name: 'Official Domains & Authenticity', href: '/official-domains-authenticity/' },
];

const SOCIAL_LINKS = [
  { name: 'Facebook', href: 'https://www.facebook.com/zphcisnumerouno', icon: '/images/icons/fb-icon.svg' },
  { name: 'Twitter / X', href: 'https://twitter.com/clubzphc', icon: '/images/icons/tw-icon.svg' },
  { name: 'YouTube', href: 'https://www.youtube.com/channel/UCDWHvDY1v61duSzkUJsF7ww', icon: '/images/icons/yt-icon.svg' },
  { name: 'Instagram', href: 'https://www.instagram.com/clubzphc/', icon: '/images/icons/ig-icon.svg' },
  { name: 'Reddit', href: 'https://www.reddit.com/r/zphc/', icon: '/images/icons/re-icon.svg' },
  { name: 'VK', href: 'https://vk.com/clubzphc', icon: '/images/icons/vk-icon.svg' },
  { name: 'Tumblr', href: 'https://clubzphc.tumblr.com/', icon: '/images/icons/t-icon.svg' },
  { name: 'Telegram', href: 'https://t.me/clubzp', icon: '/images/icons/te-icon.svg' },
  { name: 'Contact', href: '/contact/', icon: '/images/icons/convert-icon.svg' },
];

interface FooterProps {
  onOpenLegalNotice?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegalNotice }) => {
  return (
    <footer className="zphc-footer">
      <div className="zphc-footer-container">
        {/* Stickers Row */}
        <div className="zphc-stickers-row">
          <span className="zphc-stickers-label">
            Official ZPHC<span className="reg-mark">&reg;</span> stickers
          </span>
          <a
            href="https://t.me/addstickers/ZPHCD"
            target="_blank"
            rel="noopener noreferrer"
            className="zphc-sticker-link"
          >
            Telegram &mdash; ZPHC<span className="reg-mark">&reg;</span>
          </a>
          <a
            href="https://t.me/addstickers/zphcpanda"
            target="_blank"
            rel="noopener noreferrer"
            className="zphc-sticker-link"
          >
            Telegram &mdash; ZPHC<span className="reg-mark">&reg;</span> Panda
          </a>
          <a
            href="https://signal.art/addstickers#pack_id=8a82ce6038c878c6943463da9f7b8830&pack_key=0123991c57c4989b86cbff5ed91d64295df26584a14edeff25d6481f173f6cac"
            target="_blank"
            rel="noopener noreferrer"
            className="zphc-sticker-link"
          >
            Signal &mdash; ZPHC<span className="reg-mark">&reg;</span> Panda
          </a>
          <a
            href="https://signal.art/addstickers/#pack_id=67cdf2fea6db53baa2b27e4bd67ddf91&pack_key=3c294d2e9eb6ded6bb96965deeb184c7da6f2d8ae061c04e4b9a23f0bb7b7601"
            target="_blank"
            rel="noopener noreferrer"
            className="zphc-sticker-link"
          >
            Signal &mdash; ZPHC<span className="reg-mark">&reg;</span> Duck
          </a>
        </div>

        {/* Footer Logo */}
        <div className="zphc-footer-logo-wrap">
          <a href="/" title="ZPHC Home">
            <img
              src="/images/logo-footer.svg"
              alt="ZPHC® footer logo"
              className="zphc-footer-logo-img"
              width={151}
              height={26}
            />
          </a>
        </div>

        {/* Navigation Links */}
        <nav aria-label="Footer navigation" className="zphc-footer-nav">
          <ul className="zphc-footer-links-list">
            {FOOTER_LINKS.map((link) => (
              <li key={link.name} className="zphc-footer-nav-item">
                <a
                  href={link.href}
                  className="zphc-footer-link"
                  onClick={(e) => {
                    if (link.name === 'Terms' || link.name === 'Cookie Policy') {
                      if (onOpenLegalNotice) {
                        e.preventDefault();
                        onOpenLegalNotice();
                      }
                    }
                  }}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Icons */}
        <div className="zphc-social-icons-row">
          {SOCIAL_LINKS.map((soc) => (
            <a
              key={soc.name}
              href={soc.href}
              target="_blank"
              rel="noopener noreferrer"
              className="zphc-social-btn"
              title={`ZPHC on ${soc.name}`}
              aria-label={soc.name}
            >
              <img
                src={soc.icon}
                alt={soc.name}
                className="zphc-social-icon"
                width={35}
                height={35}
              />
            </a>
          ))}
        </div>

        {/* Disclaimer Text */}
        <div className="zphc-footer-disclaimer">
          <p>
            Educational content only. No article, tool, image or product reference is professional
            advice or a guarantee of results. See the{' '}
            <a href="/disclaimer/" className="zphc-footer-disclaimer-link">
              full disclaimer
            </a>
            .
          </p>
        </div>

        {/* Panda Emblem */}
        <div className="zphc-footer-panda-wrap">
          <img
            src="/images/globe-panda.png"
            alt="ZPHC Panda Globe"
            className="zphc-footer-panda-img"
            width={48}
            height={40}
          />
        </div>

        {/* Copyright & Version */}
        <div className="zphc-footer-copy">
          <p className="zphc-copy-text">1972-2026 ZPHC<span className="reg-mark">&reg;</span>. All rights reserved.</p>
          <p className="zphc-edition-text">Edition 1.0.16</p>
        </div>
      </div>
    </footer>
  );
};
