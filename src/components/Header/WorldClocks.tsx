import React, { useState, useEffect } from 'react';

interface ClockCity {
  code: string;
  name: string;
  timezone: string;
}

// 3 columns x 3 rows ordering to match screenshot:
// Col 1: UTC, PAR, SGP
// Col 2: NYC, MSC, TYO
// Col 3: LDN, DXB, SYD
const CLOCK_ROWS: ClockCity[][] = [
  [
    { code: 'UTC', name: 'Universal Time', timezone: 'UTC' },
    { code: 'NYC', name: 'New York', timezone: 'America/New_York' },
    { code: 'LDN', name: 'London', timezone: 'Europe/London' },
  ],
  [
    { code: 'PAR', name: 'Paris', timezone: 'Europe/Paris' },
    { code: 'MSC', name: 'Moscow', timezone: 'Europe/Moscow' },
    { code: 'DXB', name: 'Dubai', timezone: 'Asia/Dubai' },
  ],
  [
    { code: 'SGP', name: 'Singapore', timezone: 'Asia/Singapore' },
    { code: 'TYO', name: 'Tokyo', timezone: 'Asia/Tokyo' },
    { code: 'SYD', name: 'Sydney', timezone: 'Australia/Sydney' },
  ],
];

export const WorldClocks: React.FC = () => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const renderClockItem = (city: ClockCity) => {
    let digitalTime = '--:--';
    let hourAngle = 0;
    let minuteAngle = 0;

    try {
      const parts = new Intl.DateTimeFormat('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
        timeZone: city.timezone,
      }).formatToParts(time);

      let h = 0;
      let m = 0;
      let s = 0;

      for (const part of parts) {
        if (part.type === 'hour') h = parseInt(part.value, 10) || 0;
        if (part.type === 'minute') m = parseInt(part.value, 10) || 0;
        if (part.type === 'second') s = parseInt(part.value, 10) || 0;
      }

      digitalTime = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
      hourAngle = ((h % 12) * 30) + (m * 0.5);
      minuteAngle = (m * 6) + (s * 0.1);
    } catch {
      digitalTime = '--:--';
    }

    return (
      <div key={city.code} className="zphc-clock-chip" title={city.name}>
        <div className="zphc-clock-face" aria-hidden="true">
          <div
            className="zphc-clock-hand-hour"
            style={{ transform: `rotate(${hourAngle}deg)` }}
          />
          <div
            className="zphc-clock-hand-minute"
            style={{ transform: `rotate(${minuteAngle}deg)` }}
          />
          <div className="zphc-clock-center-dot" />
        </div>
        <div className="zphc-clock-info">
          <span className="zphc-clock-city">{city.code}</span>
          <span className="zphc-clock-digits">{digitalTime}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="zphc-world-clocks-panel" aria-label="World clocks for main time zones">
      <div className="zphc-clocks-matrix">
        {CLOCK_ROWS.map((row, rIdx) => (
          <div key={rIdx} className="zphc-clocks-row">
            {row.map(renderClockItem)}
          </div>
        ))}
      </div>
    </div>
  );
};
