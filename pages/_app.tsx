import type { AppProps } from 'next/app';
import { GlobalStyle } from '../public/style/style_opt';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}
export default MyApp;
