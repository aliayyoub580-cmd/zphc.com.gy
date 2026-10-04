import React, { useState } from 'react';
import {
  Home,
  Box,
  Users,
  ShieldCheck,
  Wrench,
  Book,
  Send,
  CheckCircle,
  Menu,
  X,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export const TopNav: React.FC = () => {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string>('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: 'home', name: t.nav.home, href: '/', icon: <Home size={20} strokeWidth={2} /> },
    { id: 'products', name: t.nav.products, href: '/products/', icon: <Box size={20} strokeWidth={2} /> },
    { id: 'verification', name: t.nav.verification, href: '/verificationsystems/', icon: <Users size={20} strokeWidth={2} /> },
    { id: 'team', name: t.nav.team, href: '/zphc-team/', icon: <ShieldCheck size={20} strokeWidth={2} /> },
    { id: 'anti-doping', name: t.nav.antiDoping, href: '/anti-doping/', icon: <Wrench size={20} strokeWidth={2} /> },
    { id: 'tools', name: t.nav.tools, href: '/tools/', icon: <Book size={20} strokeWidth={2} /> },
    { id: 'blog', name: t.nav.blog, href: '/blog/', icon: <Send size={20} strokeWidth={2} /> },
    { id: 'contact', name: t.nav.contact, href: '/contact/', icon: <CheckCircle size={20} strokeWidth={2} /> },
  ];

  return (
    <>
      {/* Desktop Navigation Pill Bar */}
      <nav className="zphc-navbar-pill" aria-label="Primary navigation">
        <ul className="zphc-nav-list">
          {navItems.map((item) => {
            const isActive = activeId === item.id;
            return (
              <li key={item.id} className="zphc-nav-item">
                <a
                  href={item.href}
                  className={`zphc-nav-link ${isActive ? 'is-active' : ''}`}
                  onClick={(e) => {
                    setActiveId(item.id);
                    if (item.href === '/') {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  }}
                >
                  <span className="zphc-nav-icon">{item.icon}</span>
                  <span className="zphc-nav-label">{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Mobile Toggle Button */}
      <button
        type="button"
        className="zphc-mobile-menu-toggle"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Open menu"
      >
        <Menu size={18} />
        <span>{t.nav.menu}</span>
      </button>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="zphc-mobile-drawer" onClick={() => setMobileOpen(false)}>
          <div className="zphc-mobile-drawer-content" onClick={(e) => e.stopPropagation()}>
            <div className="zphc-mobile-drawer-header">
              <img src="/images/z-logo.svg" alt="ZPHC Logo" className="zphc-mobile-logo" />
              <button
                type="button"
                className="zphc-mobile-close-btn"
                onClick={() => setMobileOpen(false)}
              >
                <X size={22} />
              </button>
            </div>
            <ul className="zphc-mobile-nav-list">
              {navItems.map((item) => {
                const isActive = activeId === item.id;
                return (
                  <li key={item.id}>
                    <a
                      href={item.href}
                      className={`zphc-mobile-nav-link ${isActive ? 'is-active' : ''}`}
                      onClick={() => {
                        setActiveId(item.id);
                        setMobileOpen(false);
                      }}
                    >
                      <span className="zphc-mobile-nav-icon">{item.icon}</span>
                      <span>{item.name}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
