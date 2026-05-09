import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import "../styles/global.css";
import { Raleway } from 'next/font/google'
import { getSiteConfig } from '../lib/site-config';

const description =
  "Common Space of Theoretical Practice (CSTP) is an open group that meets regularly online to discuss philosophy, science, and politics.";

const title = "Common Space of Theoretical Practice";

export const metadata: Metadata = {
  title,
  description,
};

export const dynamic = 'force-dynamic';

const raleway = Raleway({ subsets: ['latin'], weight: ['300', '400', '700', '900'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const config = getSiteConfig();
  const cssVars = `
    :root {
      --site-bg: ${config.theme.backgroundColor};
      --site-card-bg: ${config.theme.cardBackgroundColor};
      --site-text: ${config.theme.textColor};
      --site-accent: ${config.theme.accentColor};
      --site-font: ${config.theme.fontFamily};
      --site-max-width: ${config.layout.maxWidth};
      --site-wide-max-width: ${config.layout.wideMaxWidth};
      --site-card-width: ${config.layout.cardWidth};
      --site-title-font-size: ${config.layout.titleFontSize};
    }
    html { background-color: var(--site-bg); font-family: var(--site-font); color: var(--site-text); }
    ${config.customCSS}
  `;
  return (
    <html lang="en">
      <head>
        <style dangerouslySetInnerHTML={{ __html: cssVars }} />
      </head>
      <body className={raleway.className}>
        {children}
        <Analytics />
        <Script
          src="https://cdn.counter.dev/script.js"
          data-id="594404c5-6814-4476-a5af-d35ddc284e98"
          data-utcoffset="-5"
        />
      </body>
    </html>
  );
}
