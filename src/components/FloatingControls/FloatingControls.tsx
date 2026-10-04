import React, { useState, useEffect } from 'react';
import { ChevronUp, Send } from 'lucide-react';

export const FloatingControls: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 250);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="zphc-floating-controls">
      {/* Floating Telegram Action Button */}
      <a
        href="https://t.me/zphcd"
        target="_blank"
        rel="noopener noreferrer"
        className="zphc-fab-telegram"
        title="Chat on Telegram"
        aria-label="Chat on Telegram"
      >
        <Send size={22} className="zphc-fab-telegram-icon" />
      </a>

      {/* Floating Go Up Scroll Button */}
      <button
        type="button"
        className={`zphc-fab-go-up ${showScrollTop ? 'is-visible' : ''}`}
        onClick={scrollToTop}
        title="Back to top"
        aria-label="Back to top"
      >
        <ChevronUp size={24} />
      </button>
    </div>
  );
};
