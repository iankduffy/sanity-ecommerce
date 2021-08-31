// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'

import '../stylesheets/stylesheets/styles.scss'
import { CartContextProvider } from '../components/context/cart-context';
import { WishlistContextProvider } from 'components/context/wishlist/wishlist';


function MyApp({ Component, pageProps }: AppProps) {
  return(
    <CartContextProvider>
      <WishlistContextProvider>
        <Component {...pageProps} />
      </WishlistContextProvider>
    </CartContextProvider>
  )
}

export default MyApp
