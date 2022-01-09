import App from "next/app";
import Head from "next/head";
import { createContext } from "react";
import '../styles/global.css'

export const GlobalContext = createContext({});

type PageProps = {}

const MyApp = ({ Component, pageProps }: {Component: React.ComponentClass<PageProps>, pageProps: PageProps}) => {

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Inter:wght@300;400;500;700"
        />
      </Head>

      <GlobalContext.Provider value={{}}>
        <Component {...pageProps} />
      </GlobalContext.Provider>
    </>
  );
};

export default MyApp
