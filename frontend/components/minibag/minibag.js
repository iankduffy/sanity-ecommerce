import Link from 'next/link'
// import MiniBagItem from '../product-listing/minibag-item'
import { useContext, useState } from 'react';
import { CartContext } from '../context/cart-context'
import Cookies from 'js-cookie';
import styles from '../../stylesheets/components/minibag.module.scss'
import EmptyShoppingBag from './emptyCart'


const MiniBag = (props) => {
  const cartItems = props.cart
  const [state, setState] = useContext(CartContext);
  console.log(cartItems)

  const removeItem = (product) => {
    let filteredArray = cartItems.filter(cart => {
      return cart !== product
    })

    setState({cart: { products: filteredArray }, total: updatePrice(filteredArray) })
    Cookies.set('cart', {cart: { products: filteredArray }, total: updatePrice(filteredArray) })
  }
  console.log(props)
  return (
    <div className={styles.minibag}>
      <p className={styles.heading}>Your Current Total £{state.total}</p>
      {cartItems ?
      <div className="o-dropdown--container u-pad-h-sm u-pad-v-sm">
        {/* {cartItems.map((product, i) => <MiniBagItem product={product} key={i} removeItem={removeItem}/>) } */}
      </div> 
      : <EmptyShoppingBag />
      }
      <Link href="/checkout"><a className={styles.minibagBtn}>PROCEED TO CHECKOUT</a></Link>
    </div>
  )
};
  
export default MiniBag;