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
        <title>Alex Lampe - Web/Game Developer Portfolio</title>
        <meta
          name="description"
          content="Explore Alex Lampe's portfolio showcasing web and game 
          development projects. Senior Computer Science student at the 
          University of Pittsburgh, seeking a summer 2024 internship. 
          Skilled in TypeScript, Java, Python, React, Next.js, Node.js, 
          Express.js, PostgreSQL, Unity, and more." 
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
