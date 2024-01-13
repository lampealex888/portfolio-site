import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  return (
    <Html lang="en" data-theme="business">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
