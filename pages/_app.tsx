import App from "next/app";
import Head from "next/head";
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
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
