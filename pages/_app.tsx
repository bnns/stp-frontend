import App from "next/app";
import Nav from "../lib/components/Nav";
import Head from "next/head";
import { createContext } from "react";
import "../styles/global.css";

type PageProps = {};

const meta =
  "The Subset of Theoretical Practice is an open group that talks and writes about philosophy, science and politics.";

const MyApp = ({
  Component,
  pageProps,
}: {
  Component: React.ComponentClass<PageProps>;
  pageProps: PageProps;
}) => {
  return (
    <>
      <Head>
        <title>Subset of Theoretical Practice</title>
        <meta name="description" content={meta} />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Raleway:wght@300;400;500;700"
        />
      </Head>

      <Nav />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
