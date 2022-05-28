import { theme } from '@/presentation/styles/theme';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Head>
        <title>Project Example</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
