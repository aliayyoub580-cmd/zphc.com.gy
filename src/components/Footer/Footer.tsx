import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

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
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLegalNotice, onNavigate }) => {
  const { t } = useLanguage();

  const footerLinks = [
    { name: t.footer.links.welcome || 'Welcome', href: '/' },
    { name: t.footer.links.products || 'Products', href: '/products/' },
    { name: t.footer.links.verification || 'Verification', href: '/verificationsystems/' },
    { name: t.footer.links.team || 'ZPHC® Team', href: '/zphc-team/' },
    { name: t.footer.links.antiDoping || 'Anti-Doping', href: '/anti-doping/' },
    { name: t.footer.links.tools || 'ZPHC® Tools', href: '/tools/' },
    { name: t.footer.links.blog || 'Blog', href: '/blog/' },
    { name: t.footer.links.contact || 'Contact', href: '/contact/' },
    { name: t.footer.links.privacyPolicy || 'Privacy Policy', href: '/privacy-policy/' },
    { name: t.footer.links.cookiePolicy || 'Cookie Policy', href: '/cookie-policy/' },
    { name: t.footer.links.gdpr || 'GDPR & Data Rights', href: '/gdpr-policy/' },
    { name: t.footer.links.terms || 'Terms', href: '/terms/' },
    { name: t.footer.links.disclaimer || 'Disclaimer', href: '/disclaimer/' },
    { name: t.footer.links.editorialStandards || 'Editorial Standards', href: '/editorial-standards/' },
    { name: t.footer.links.accessibility || 'Accessibility', href: '/accessibility/' },
    { name: t.footer.links.officialDomains || 'Official Domains & Authenticity', href: '/official-domains-authenticity/' },
  ];

  return (
    <footer className="zphc-footer">
      <div className="zphc-footer-container">
        {/* Stickers Row */}
        <div className="zphc-stickers-row">
          <span className="zphc-stickers-label">
            {t.footer.officialStickers || 'Official ZPHC® stickers'}
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
          <a
            href="/"
            title="ZPHC Home"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('/');
              }
            }}
          >
            <img
              src="/images/logo-footer.svg"
              alt="ZPHC® footer logo"
              className="zphc-footer-logo-img"
              width={140}
              height={26}
            />
          </a>
        </div>

        {/* Navigation Links */}
        <nav aria-label="Footer navigation" className="zphc-footer-nav">
          <ul className="zphc-footer-links-list">
            {footerLinks.map((link) => (
              <li key={link.href} className="zphc-footer-nav-item">
                <a
                  href={link.href}
                  className="zphc-footer-link"
                  onClick={(e) => {
                    if (link.href === '/contact/' && onNavigate) {
                      e.preventDefault();
                      onNavigate('/contact/');
                    } else if (link.href === '/verificationsystems/' && onNavigate) {
                      e.preventDefault();
                      onNavigate('/verificationsystems/');
                    } else if (link.href === '/' && onNavigate) {
                      e.preventDefault();
                      onNavigate('/');
                    } else if (link.href === '/terms/' || link.href === '/cookie-policy/') {
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
              target={soc.href.startsWith('http') ? '_blank' : '_self'}
              rel="noopener noreferrer"
              className="zphc-social-btn"
              title={`ZPHC on ${soc.name}`}
              aria-label={soc.name}
              onClick={(e) => {
                if (soc.href === '/contact/' && onNavigate) {
                  e.preventDefault();
                  onNavigate('/contact/');
                }
              }}
            >
              <img
                src={soc.icon}
                alt={soc.name}
                className="zphc-social-icon"
                width={24}
                height={24}
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
            width={44}
            height={36}
          />
        </div>

        {/* Copyright & Version */}
        <div className="zphc-footer-copy">
          <p className="zphc-copy-text">1972-2026 ZPHC<span className="reg-mark">&reg;</span>. All rights reserved.</p>
          <p className="zphc-edition-text">Edition 1.0.20</p>
        </div>
      </div>
    </footer>
  );
};
