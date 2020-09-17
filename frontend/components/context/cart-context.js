import { createContext, useState } from 'react';
import Cookies from 'js-cookie' 

export const CartContext = createContext([{}, () => {}]);

export const CartContextProvider = (props) => {
  const [state, setState] = useState(Cookies.getJSON('cart', {cart: { products: [] }, total: 0}) || {cart: { products: [] }, total: 0});

  return (
    <CartContext.Provider value={[state, setState]}>
      {props.children}
    </CartContext.Provider>
  );
}
