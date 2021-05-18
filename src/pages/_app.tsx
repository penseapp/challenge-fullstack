import { AppProps } from 'next/app';
import { CartProvider } from '../hooks/useCart';
import GlobalStyle from '../../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </>
  );
}

export default MyApp;
