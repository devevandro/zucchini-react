import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Project Example</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
