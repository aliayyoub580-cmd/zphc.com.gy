import React, { useState, useEffect } from 'react';
import {
  Home,
  Box,
  Users,
  ShieldCheck,
  Wrench,
  Book,
  Send,
  CheckCircle,
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

interface TopNavProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export const TopNav: React.FC<TopNavProps> = ({ currentPath = '/', onNavigate }) => {
  const { t } = useLanguage();
  const [activeId, setActiveId] = useState<string>(() =>
    currentPath.includes('contact')
      ? 'contact'
      : currentPath.includes('verification')
      ? 'verification'
      : 'home'
  );

  useEffect(() => {
    if (currentPath.includes('contact')) {
      setActiveId('contact');
    } else if (currentPath.includes('verification')) {
      setActiveId('verification');
    } else if (currentPath === '/' || currentPath === '') {
      setActiveId('home');
    }
  }, [currentPath]);

  const navItems = [
    { id: 'home', name: t.nav.home, href: '/', icon: <Home size={19} strokeWidth={2} /> },
    { id: 'products', name: t.nav.products, href: '/products/', icon: <Box size={19} strokeWidth={2} /> },
    { id: 'verification', name: t.nav.verification, href: '/verificationsystems/', icon: <Users size={19} strokeWidth={2} /> },
    { id: 'team', name: t.nav.team, href: '/zphc-team/', icon: <ShieldCheck size={19} strokeWidth={2} /> },
    { id: 'anti-doping', name: t.nav.antiDoping, href: '/anti-doping/', icon: <Wrench size={19} strokeWidth={2} /> },
    { id: 'tools', name: t.nav.tools, href: '/tools/', icon: <Book size={19} strokeWidth={2} /> },
    { id: 'blog', name: t.nav.blog, href: '/blog/', icon: <Send size={19} strokeWidth={2} /> },
    { id: 'contact', name: t.nav.contact, href: '/contact/', icon: <CheckCircle size={19} strokeWidth={2} /> },
  ];

  const handleItemClick = (e: React.MouseEvent, item: { id: string; href: string }) => {
    setActiveId(item.id);
    if (item.id === 'contact' && onNavigate) {
      e.preventDefault();
      onNavigate('/contact/');
    } else if (item.id === 'verification' && onNavigate) {
      e.preventDefault();
      onNavigate('/verificationsystems/');
    } else if (item.id === 'home' && onNavigate) {
      e.preventDefault();
      onNavigate('/');
    } else if (item.href === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="zphc-navbar-pill" aria-label="Primary navigation">
      <ul className="zphc-nav-list">
        {navItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li key={item.id} className="zphc-nav-item">
              <a
                href={item.href}
                className={`zphc-nav-link ${isActive ? 'is-active' : ''}`}
                onClick={(e) => handleItemClick(e, item)}
              >
                <span className="zphc-nav-icon">{item.icon}</span>
                <span className="zphc-nav-label">{item.name}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
