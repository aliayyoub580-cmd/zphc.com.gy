export interface WorldClockZone {
  code: string;
  name: string;
  timezone: string;
}

export interface VisitorInfo {
  ip?: string;
  country?: string;
  countryCode?: string;
  city?: string;
  timezone?: string;
  offset?: string;
}

export interface CountryLang {
  code: string;
  name: string;
  nativeName: string;
  lang: string;
  path: string;
}
