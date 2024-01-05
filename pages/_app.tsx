import React from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="m-auto min-w-[300px] max-w-7xl min-h-screen">
        <Navbar />
        <div className="p-4">
          <Component {...pageProps} />
        </div>
        <Footer />
    </div>
  );
};

export default App;
