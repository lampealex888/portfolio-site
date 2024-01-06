import React from "react";
import { AppProps } from "next/app";
import Head from "next/head";

import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";import Script from "next/script";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {

  return (
    <div>
      <Head>
        <title>Alex Lampe</title>
        <meta
          name="description"
          content="Explore Alex's portfolio as a web and game 
          developer in Pittsburgh, PA"
        />
        <link rel="icon" href="/images/favicon.ico" />
        {/* OpenGraph Meta Tags */}
        <meta property="og:image" content={"/images/opengraph-image.png"} />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-HXWN302756"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-HXWN302756');
        `}
      </Script>
      <Navbar />
      <div>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
