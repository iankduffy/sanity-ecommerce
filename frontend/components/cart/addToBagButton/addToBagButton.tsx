import { useContext } from 'react';
import { CartContext } from 'components/context/cart-context'
import Cookies from 'js-cookie' 

const AddToBagButton = ({currentVariant, title, image, slug, styles}) => {
  const [cart, setCart] = useContext(CartContext); 

  const addToCart = () => { 
    let lineItem = {
      defaultImage: image,
      productTitle: title,
      slug: slug,
      lineitem: {...currentVariant}
    }

    let newProductList = [...cart.cart.products, lineItem]
    setCart({cart: { products: newProductList }})
    Cookies.set('cart', {cart: { products: newProductList }})
  }

  return (
    <button className={`c-btn ${styles}`} onClick={() => addToCart()}>
      Add To Bag
    </button>
  )
}

export default AddToBagButton