import { AppProps } from 'next/app';
import CartContext from '../context';
import GlobalStyle from '../../styles/global';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <CartContext>
        <Component {...pageProps} />
      </CartContext>
    </>
  );
}

export default MyApp;
