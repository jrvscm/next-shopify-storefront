// pages/_app.tsx
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/Theme';
import { GlobalStyle } from '../styles/GlobalStyle';
import { Poppins, Roboto } from 'next/font/google';
import Layout from '../components/Layout';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // Specify weights used in the app
  variable: '--font-poppins', // Custom CSS variable
});

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '700'], // Specify weights used in the app
  variable: '--font-roboto',
});

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className={`${poppins.variable} ${roboto.variable}`}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
