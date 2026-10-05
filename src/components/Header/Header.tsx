import React from 'react';
import { LanguageFlags } from './LanguageFlags';
import { TopNav } from './TopNav';
import { WorldClocks } from './WorldClocks';
import { VisitorStatus } from './VisitorStatus';

interface HeaderProps {
  currentPath?: string;
  onNavigate?: (path: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath = '/', onNavigate }) => {
  return (
    <header className="zphc-header">
      <div className="zphc-header-container">
        {/* Brand: Logo & 21 Country Flags Grid */}
        <div className="zphc-header-left">
          <a
            href="/"
            className="zphc-logo-link"
            title="ZPHC Official Site"
            onClick={(e) => {
              if (onNavigate) {
                e.preventDefault();
                onNavigate('/');
              }
            }}
          >
            <img
              src="/images/z-logo.svg"
              alt="ZPHC® protected trademark logo"
              className="zphc-brand-logo"
              width={200}
              height={38}
            />
          </a>
          <LanguageFlags />
        </div>

        {/* Center: Main Navigation Pill */}
        <div className="zphc-header-center">
          <TopNav currentPath={currentPath} onNavigate={onNavigate} />
        </div>

        {/* Right: 9 World Clocks Widget */}
        <div className="zphc-header-right">
          <WorldClocks />
        </div>

        {/* Status: Visitor Status Lines */}
        <div className="zphc-header-status">
          <VisitorStatus />
        </div>
      </div>
    </header>
  );
};
