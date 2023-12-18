import React from 'react';
import '../styles/globals.css';

import { AppProps } from 'next/app';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="min-h-screen font-sans overflow-hidden bg-slate-950 text-slate-300">
      <Component {...pageProps} />
    </div>
  );
}

export default App;