import Link from 'next/link'
// import MiniBagItem from '../product-listing/minibag-item'
import { useContext, useState } from 'react';
import { CartContext } from '../context/cart-context'
import Cookies from 'js-cookie';
import styles from '../../stylesheets/components/minibag.module.scss'
import EmptyShoppingBag from './emptyCart'
import MiniBagItem from './minibagItem'


const MiniBag = () => {
  const [state, setState] = useContext(CartContext);

  console.log(state.cart.products)

  const removeItem = (product) => {
    let filteredArray = cartItems.filter(cart => {
      return cart !== product
    })

    setState({cart: { products: filteredArray }, total: updatePrice(filteredArray) })
    Cookies.set('cart', {cart: { products: filteredArray }, total: updatePrice(filteredArray) })
  }
  // console.log(props)
  return (
    <div className={styles.minibag}>
      <p className={styles.heading}>Your Current Total £{state.total}</p>
      {state.cart.products.length ?
      <div className="u-pad-h-sm">
        {state.cart.products.map((product, i) => <MiniBagItem lineitem={product}/>) }
      </div> 
      : <EmptyShoppingBag />
      }
      <Link href="/checkout"><a className={styles.minibagBtn}>PROCEED TO CHECKOUT</a></Link>
    </div>
  )
};
  
export default MiniBag;