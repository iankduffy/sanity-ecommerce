import Link from 'next/link'
import { useContext, useState } from 'react';
import { CartContext } from '../context/cart-context'
// import Cookies from 'js-cookie';
import styles from './minibag.module.scss'
import EmptyShoppingBag from './emptyCart'
import MiniBagItem from './minibagItem'

const MiniBag = () => {
  // ToDo: Create Cart Object
  // ToDo: Create Better Cart 
  const [cart, setCart] = useContext<any>(CartContext)

  console.log(cart)
  return (
    <div className={styles.minibag}>
      <div className={styles.headerContainer}>
        <h5 className={styles.heading}>{cart.cart.products.length} Items In Basket</h5>
        <span>Close</span>
      </div>
      <EmptyShoppingBag />
      <div>
        Promo Text here
      </div>
      {/* Checkout Button here */}
    </div>
  )

}





// const MiniBag = () => {
//   const [state, setState] = useContext(CartContext);

//   const removeItem = (product) => {
//     let filteredArray = cartItems.filter(cart => {
//       return cart !== product
//     })

//     setState({cart: { products: filteredArray }, total: updatePrice(filteredArray) })
//     Cookies.set('cart', {cart: { products: filteredArray }, total: updatePrice(filteredArray) })
//   }

//   return (
//     <div className={styles.minibag}>
//       <p className={styles.heading}>Your Current Total £{state.total}</p>
//       {state.cart.products.length ?
//       <div className="u-pad-h-sm">
//         {state.cart.products.map((product, i) => <MiniBagItem lineitem={product}/>) }
//       </div> 
//       : <EmptyShoppingBag />
//       }
//       <Link href="/checkout"><a className={styles.minibagBtn}>PROCEED TO CHECKOUT</a></Link>
//     </div>
//   )
// };
  
export default MiniBag;