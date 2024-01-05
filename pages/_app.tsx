import React from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div>
        <Navbar />
        <div>
          <Component {...pageProps} />
        </div>
        <Footer />
    </div>
  );
};

export default App;
