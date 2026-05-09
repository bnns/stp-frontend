import fs from 'node:fs';
import path from 'node:path';

export interface SiteTheme {
  backgroundColor: string;
  cardBackgroundColor: string;
  textColor: string;
  accentColor: string;
  fontFamily: string;
}

export interface SiteVisibility {
  nav: boolean;
  nextMeeting: boolean;
  plannedMeetings: boolean;
  previousMeetings: boolean;
  meetingSearch: boolean;
  bibliography: boolean;
  rssLinks: boolean;
  zoomLink: boolean;
  youtubeLinks: boolean;
}

export interface SiteLayout {
  maxWidth: string;
  wideMaxWidth: string;
  cardWidth: string;
  titleFontSize: string;
}

export interface SiteConfig {
  theme: SiteTheme;
  visibility: SiteVisibility;
  layout: SiteLayout;
  customCSS: string;
}

const CONFIG_PATH = path.join(process.cwd(), 'site-config.json');

const DEFAULT_CONFIG: SiteConfig = {
  theme: {
    backgroundColor: '#eee',
    cardBackgroundColor: '#fff',
    textColor: '#444',
    accentColor: '#444',
    fontFamily: "'Futura', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif"
  },
  visibility: {
    nav: true,
    nextMeeting: true,
    plannedMeetings: true,
    previousMeetings: true,
    meetingSearch: true,
    bibliography: true,
    rssLinks: true,
    zoomLink: true,
    youtubeLinks: true
  },
  layout: {
    maxWidth: '540px',
    wideMaxWidth: '40%',
    cardWidth: '360px',
    titleFontSize: '35px'
  },
  customCSS: ''
};

export function getSiteConfig(): SiteConfig {
  try {
    const raw = fs.readFileSync(CONFIG_PATH, 'utf-8');
    const parsed = JSON.parse(raw);
    // Deep merge with defaults to handle missing keys
    return {
      theme: { ...DEFAULT_CONFIG.theme, ...parsed.theme },
      visibility: { ...DEFAULT_CONFIG.visibility, ...parsed.visibility },
      layout: { ...DEFAULT_CONFIG.layout, ...parsed.layout },
      customCSS: parsed.customCSS ?? DEFAULT_CONFIG.customCSS
    };
  } catch {
    return DEFAULT_CONFIG;
  }
}

export const siteConfig = getSiteConfig();
