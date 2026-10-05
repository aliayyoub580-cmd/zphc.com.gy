import React, { useState, useEffect } from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { MainContent } from './components/MainContent/MainContent';
import { ContactPage } from './components/Contact/ContactPage';
import { VerificationPage } from './components/Verification/VerificationPage';
import { Footer } from './components/Footer/Footer';
import { FloatingControls } from './components/FloatingControls/FloatingControls';
import { LegalModal } from './components/LegalModal/LegalModal';

import { LanguageProvider } from './context/LanguageContext';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  const [legalModalOpen, setLegalModalOpen] = useState<boolean>(() => {
    try {
      const accepted = localStorage.getItem('zphc_legal_accepted');
      return !accepted;
    } catch {
      return true;
    }
  });

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (window.location.pathname !== path) {
      window.history.pushState(null, '', path);
    }
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAcceptLegal = () => {
    try {
      localStorage.setItem('zphc_legal_accepted', 'true');
    } catch {
      // Ignore localStorage errors
    }
    setLegalModalOpen(false);
  };

  const handleDisagreeLegal = () => {
    setLegalModalOpen(false);
  };

  const isContactPage = currentPath.includes('contact');
  const isVerificationPage = currentPath.includes('verification');

  return (
    <LanguageProvider>
      <div className="zphc-site-wrapper">
        <Header currentPath={currentPath} onNavigate={navigate} />

        {isContactPage ? (
          <ContactPage onNavigateHome={() => navigate('/')} />
        ) : isVerificationPage ? (
          <VerificationPage onNavigateHome={() => navigate('/')} />
        ) : (
          <>
            <Hero />
            <MainContent />
          </>
        )}

        <Footer
          onOpenLegalNotice={() => setLegalModalOpen(true)}
          onNavigate={navigate}
        />
        <FloatingControls />
        <LegalModal
          isOpen={legalModalOpen}
          onAccept={handleAcceptLegal}
          onDisagree={handleDisagreeLegal}
        />
      </div>
    </LanguageProvider>
  );
};

export default App;

