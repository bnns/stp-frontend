import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { Metadata } from "next";
import "../styles/global.css";

const description =
  "The Subset of Theoretical Practice is an open group that talks and writes about philosophy, science and politics.";

const title = "Subset of Theoretical Practice";

export const metadata: Metadata = {
  title,
  description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
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
