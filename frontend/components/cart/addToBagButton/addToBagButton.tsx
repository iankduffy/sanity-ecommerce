import { useContext } from 'react';
import { CartContext, useCart } from 'components/context/cart-context'
import Cookies from 'js-cookie' 

const AddToBagButton = ({currentVariant, title, image, slug}) => {
  const { addToCart } = useCart()

  return (
    <button className={`c-btn col-8 u-pad-v-md`} onClick={() => addToCart(currentVariant, title, image, slug)}>
      Add To Bag
    </button>
  )
}

export default AddToBagButton