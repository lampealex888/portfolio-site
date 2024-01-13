import Head from "next/head";

const Meta = () => {
  return (
    <Head>
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta
        name="description"
        content="Explore Alex's portfolio as a web and game 
          developer in Pittsburgh, PA"
      />
      <meta property="og:image" content={"/opengraph-image.png"} />
    </Head>
  );
};

export default Meta;
