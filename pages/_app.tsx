import React from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
      <Head>
        <title>Alex Lampe - Portfolio</title>
        <meta
          name="description"
          content="Alex Lampe's portfolio - web/game developer and computer science student at the University of Pittsburgh."
        />
        <link rel="icon" href="/images/favicon.ico" />
        {/* OpenGraph Meta Tags */}
        <meta property="og:image" content={"/images/opengraph-image.png"} />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <Navbar />
      <div>
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
