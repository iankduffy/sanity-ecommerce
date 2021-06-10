// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'

import '../stylesheets/stylesheets/styles.scss'
import { CartContextProvider } from '../components/context/cart-context';

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  )
}

export default MyApp
