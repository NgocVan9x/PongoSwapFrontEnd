import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
        <Html
            prefix=""
            key="html"
            lang="en"
        >
          <Head>
            <meta httpEquiv="x-ua-compatible" content="ie=edge" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black" />

            <meta name="pinterest" content="nopin" />
            <meta name="theme-color" content="#000000" />
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com/"
                crossOrigin="true"
            />
            {/* we optimize this later */}
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Montserrat"
            />
            <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
          </Head>
          <body>
          <Main />
          <NextScript />
          <script
              async
              src="https://polyfill.io/v2/polyfill.min.js?features=IntersectionObserver"
          />
          </body>
        </Html>
    );
  }
}
