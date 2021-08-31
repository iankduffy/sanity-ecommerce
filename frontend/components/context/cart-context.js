import { createContext, useState, useContext } from 'react';
import Cookies from 'js-cookie' 

export const CartContext = createContext([{}, () => {}]);

export const useCart = () => {
  const [cartData, setCartData] = useContext(CartContext)

  const getCart = () => cartData

  const removeItemFromCart = (product) => {
    let filteredArray = cartItems.filter(cart => {
      return cartData !== product
    })

    setState({cart: { products: filteredArray }, total: updatePrice(filteredArray) })
    Cookies.set('cart', {cart: { products: filteredArray }, total: updatePrice(filteredArray) })
  }
  
  // Todo: Clean this up. 
  const addToCart = (currentVariant, title, image, slug) => {
    let lineItem = {
      defaultImage: image,
      productTitle: title,
      slug: slug,
      lineitem: {...currentVariant}
    }

    let newProductList = [...cartData.cart.products, lineItem]
    setCartData({cart: { products: newProductList }})
    Cookies.set('cart', {cart: { products: newProductList }})
  }

  return { getCart, removeItemFromCart, addToCart }
}

// Todo: Make Better Cart 
export const CartContextProvider = (props) => {
  const [state, setState] = useState(Cookies.getJSON('cart', {cart: { products: [] }, total: 0}) || {cart: { products: [] }, total: 0});

  return (
    <CartContext.Provider value={[state, setState]}>
      {props.children}
    </CartContext.Provider>
  );
}
