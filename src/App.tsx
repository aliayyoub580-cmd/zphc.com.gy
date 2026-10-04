import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { MainContent } from './components/MainContent/MainContent';
import { Footer } from './components/Footer/Footer';
import { FloatingControls } from './components/FloatingControls/FloatingControls';
import { LegalModal } from './components/LegalModal/LegalModal';

import { LanguageProvider } from './context/LanguageContext';

export const App: React.FC = () => {
  const [legalModalOpen, setLegalModalOpen] = useState(false);

  const handleAcceptLegal = () => {
    setLegalModalOpen(false);
  };

  const handleDisagreeLegal = () => {
    alert('You have chosen to disagree. In accordance with policy, please close this browser tab.');
    setLegalModalOpen(false);
  };

  return (
    <LanguageProvider>
      <div className="zphc-site-wrapper">
        <Header />
        <Hero />
        <MainContent />
        <Footer onOpenLegalNotice={() => setLegalModalOpen(true)} />
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
