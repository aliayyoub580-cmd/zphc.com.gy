import React from 'react';
import { LanguageFlags } from './LanguageFlags';
import { TopNav } from './TopNav';
import { WorldClocks } from './WorldClocks';
import { VisitorStatus } from './VisitorStatus';

export const Header: React.FC = () => {
  return (
    <header className="zphc-header">
      <div className="zphc-header-container">
        {/* Left: Brand Logo & 21 Country Flags Grid */}
        <div className="zphc-header-left">
          <a href="/" className="zphc-logo-link" title="ZPHC Official Site">
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

        {/* Center: Main Navigation Pill & Visitor Status Line */}
        <div className="zphc-header-center">
          <TopNav />
          <VisitorStatus />
        </div>

        {/* Right: 9 World Clocks Widget */}
        <div className="zphc-header-right">
          <WorldClocks />
        </div>
      </div>
    </header>
  );
};
