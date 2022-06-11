// pages/_document.js

import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Raleway:wght@300;400;500;700&display=optional"
                />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
