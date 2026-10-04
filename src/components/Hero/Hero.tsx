import React, { useState, useEffect } from 'react';
import { Play, Pause, Send } from 'lucide-react';

const HERO_IMAGES = [
  '/images/imgi_4_team-022-photo-2021-09-01-12-53-33-source.jpg',
  '/images/imgi_3_caps-and-headwear-018.webp',
  '/images/imgi_3_team-rotation-02-1920.webp',
  '/images/imgi_4_team-045-photo-2021-09-03-18-17-07-source.jpg',
  '/images/imgi_3_wrist-straps-and-grip-support-014.webp',
  '/images/imgi_3_leather-training-belts-025.webp',
  '/images/imgi_4_arm-blaster-training-support-011.webp',
  '/images/imgi_3_caps-and-headwear-010.webp',
];

const HERO_PHRASES = [
  'We proved what’s possible by building yesterday’s talent. Now, ZPHC® is searching the world for you.',
  'ZPHC® World Sports Club: Where global talent is discovered, built, and destined for greatness.',
  'ZPHC® World Sports Club: Honoring a legacy of champions, igniting the world’s next legends.',
  'A proud history of uncovering greatness. A global mission to find the next generation.',
  'ZPHC® World Sports Club: Transforming raw global talent into tomorrow’s unstoppable forces.',
  'Proven legacy, global future: ZPHC® World Sports Club is scouting new talent today.',
  'We saw greatness in them. We see it in you. ZPHC® is searching the world for your fire.',
  'For every heart that beats for the game — ZPHC® uncovers talent, builds dreams, and changes lives.',
  'ZPHC® World Sports Club: For every athlete waiting to be seen, your global journey begins here.',
  'We built the champions of yesterday. We are searching the world for your fire today.',
  'Your raw talent, our ultimate devotion. ZPHC® is scouting the world for the next great heart.',
  'ZPHC® World Sports Club: Where your deepest athletic dreams meet our global belief in you.',
];

import { useLanguage } from '../../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const phrases = t.hero.phrases && t.hero.phrases.length > 0 ? t.hero.phrases : HERO_PHRASES;

  // Cycle image every 6 seconds if playing
  useEffect(() => {
    if (!isPlaying) return;
    const imgInterval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(imgInterval);
  }, [isPlaying]);

  // Cycle phrase every 5 seconds
  useEffect(() => {
    const phraseInterval = setInterval(() => {
      setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 5000);
    return () => clearInterval(phraseInterval);
  }, [phrases.length]);

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % HERO_IMAGES.length);
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  const currentPhrase = phrases[currentPhraseIndex % phrases.length] || phrases[0];

  return (
    <section className="zphc-hero-section">
      <div
        className="zphc-hero-card"
        onClick={handleNextImage}
        role="button"
        tabIndex={0}
        title="Click to next slide"
      >
        {/* Background Images with smooth fade/zoom */}
        <div className="zphc-hero-bg-container">
          {HERO_IMAGES.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt="ZPHC high-resolution team and product presentation"
              className={`zphc-hero-img ${idx === currentImageIndex ? 'is-active' : ''}`}
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
          ))}
          <div className="zphc-hero-dark-overlay" />
        </div>

        {/* Hero Overlay Content */}
        <div className="zphc-hero-content">
          <p className="zphc-hero-welcome">{t.hero.welcome}</p>
          <h1 className="zphc-hero-title">
            {t.hero.title}
          </h1>
          <div className="zphc-hero-phrase-container">
            <p className="zphc-hero-phrase effect-rise" key={`${currentPhraseIndex}-${t.hero.welcome}`}>
              {currentPhrase}
            </p>
          </div>
        </div>

        {/* Floating Telegram and Pause/Play buttons inside Hero */}
        <div className="zphc-hero-controls">
          <a
            href="https://t.me/zphcd"
            target="_blank"
            rel="noopener noreferrer"
            className="zphc-hero-tg-btn"
            onClick={(e) => e.stopPropagation()}
            title="ZPHC Telegram"
          >
            <Send size={18} />
          </a>
          <button
            type="button"
            className="zphc-hero-play-toggle"
            onClick={togglePlay}
            title={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isPlaying ? <Pause size={18} /> : <Play size={18} />}
          </button>
        </div>
      </div>
    </section>
  );
};
