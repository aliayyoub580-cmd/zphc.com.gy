import React, { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

export const VisitorStatus: React.FC = () => {
  const { t } = useLanguage();
  const [secondsOnSite, setSecondsOnSite] = useState<number>(224); // Starting realistic count
  const [deviceTimeStr, setDeviceTimeStr] = useState<string>('');
  const [visitorData, setVisitorData] = useState({
    country: 'Pakistan',
    region: 'Asia/Karachi',
    offset: 'UTC+05:00',
  });

  useEffect(() => {
    // Detect local client timezone
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Karachi';
      const offsetMinutes = -new Date().getTimezoneOffset();
      const sign = offsetMinutes >= 0 ? '+' : '-';
      const absMinutes = Math.abs(offsetMinutes);
      const hours = String(Math.floor(absMinutes / 60)).padStart(2, '0');
      const mins = String(absMinutes % 60).padStart(2, '0');
      const offsetStr = `UTC${sign}${hours}:${mins}`;

      let country = 'Pakistan';
      if (tz.includes('Karachi')) country = 'Pakistan';
      else if (tz.includes('London')) country = 'United Kingdom';
      else if (tz.includes('New_York') || tz.includes('Los_Angeles') || tz.includes('Chicago')) country = 'United States';
      else if (tz.includes('Paris') || tz.includes('Berlin') || tz.includes('Rome') || tz.includes('Madrid')) country = 'European Union';
      else {
        const parts = tz.split('/');
        country = parts[parts.length - 1].replace('_', ' ');
      }

      setVisitorData({
        country,
        region: tz,
        offset: offsetStr,
      });
    } catch {}

    fetch('/api/visitor-info')
      .then((res) => (res.ok ? res.json() : null))
      .then((data) => {
        if (data && data.name) {
          setVisitorData({
            country: data.name,
            region: data.timezone || 'Asia/Karachi',
            offset: data.offset || 'UTC+05:00',
          });
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setDeviceTimeStr(
        now.toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      );
    };

    updateTime();
    const interval = setInterval(() => {
      setSecondsOnSite((prev) => prev + 1);
      updateTime();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatDuration = (totalSec: number) => {
    const m = Math.floor(totalSec / 60);
    const s = totalSec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  return (
    <div className="zphc-visitor-metrics-container" aria-live="polite">
      {/* Row 1: Welcome Badge + Device Country */}
      <div className="zphc-metric-row">
        <span className="zphc-chip-welcome">{t.status.welcomeAgain}</span>
        <span className="zphc-chip-info">
          {t.status.deviceCountry}: <strong>{visitorData.country}</strong> - {visitorData.region} / {visitorData.offset}
        </span>
      </div>

      {/* Row 2: On site & Device time */}
      <div className="zphc-metric-row">
        <span className="zphc-chip-info">
          {t.status.onSite}: <strong>{formatDuration(secondsOnSite)}</strong> &middot; {t.status.deviceTime}: <strong>{deviceTimeStr}</strong>
        </span>
      </div>

      {/* Row 3: Last visit info */}
      <div className="zphc-metric-row">
        <span className="zphc-chip-info zphc-chip-last-visit">
          {t.status.lastVisit}: <strong>Oct 3, 2026, 3:34 PM</strong> &middot; {t.status.previousStay}: <strong>3:23:16</strong>
        </span>
      </div>
    </div>
  );
};
