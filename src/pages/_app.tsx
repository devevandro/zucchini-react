import { theme } from '@/presentation/styles/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import FavIcon from '../public/favicon.ico';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>Zucchini</title>
        <link rel="shortcut icon" href={FavIcon} type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Handlee&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
