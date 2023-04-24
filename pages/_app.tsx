import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react'
import Script from 'next/script'
import Head from "next/head";
import "../styles/global.css";

const meta =
  "The Subset of Theoretical Practice is an open group that talks and writes about philosophy, science and politics.";

const MyApp = ({
  Component,
  pageProps,
}: AppProps) => {
  return (
    <>
      <Head>
        <title>Subset of Theoretical Practice</title>
        <meta name="description" content={meta} />
        <link rel="icon" href="/favicon.ico" />

      </Head>

      <Script src="https://cdn.counter.dev/script.js" data-id="594404c5-6814-4476-a5af-d35ddc284e98" data-utcoffset="-5" />
      <Component {...pageProps} />
      <Analytics />

    </>
  );
};

export default MyApp;
