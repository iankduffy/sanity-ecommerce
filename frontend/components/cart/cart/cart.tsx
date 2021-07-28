import { useContext } from 'react';
import { CartContext } from 'components/context/cart-context'
import EmptyShoppingBag from '../shared/emptyCart'

const CartPage = () => {
  // ToDo: Create Cart Object
  // ToDo: Create Better Cart 
  const [cart, setCart] = useContext(CartContext);
  const cartHasLineItems : boolean = cart.cart.products.length

  console.log(cart)

  return (
    <div>
      {cartHasLineItems ? "Cart Items" : <EmptyShoppingBag />}
    </div>
  )
};
  
export default CartPage;