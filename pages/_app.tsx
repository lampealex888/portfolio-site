import "../styles/globals.css";

import React from "react";
import { AppProps } from "next/app";
import { Auth0Provider } from "@auth0/auth0-react";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <Auth0Provider
      clientId={process.env.NEXT_PUBLIC_AUTH0_CLIENT_ID}
      domain={process.env.NEXT_PUBLIC_AUTH0_DOMAIN}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
};

export default App;
