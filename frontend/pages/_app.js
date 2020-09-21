import '../stylesheets/stylesheets/styles.scss'
import { CartContextProvider } from '../components/context/cart-context';

function MyApp({ Component, pageProps }) {
  return(
    <CartContextProvider>
      <Component {...pageProps} />
    </CartContextProvider>
  )
}

export default MyApp
