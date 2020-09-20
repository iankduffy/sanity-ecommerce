import { useContext, useState } from 'react';
import { CartContext } from '../context/cart-context'
// import DropDown from "../dropdown-input"
import Cookies from 'js-cookie' 
// import { WishlistContext } from '../../components/product-listing/context/wishlist-context'
// import { updatePrice } from '../../lib/cart-calucations'

const VariantsSelect = ({allVariants}) => {
  console.log(allVariants)
  return (
    <div>
      {allVariants.map((variant, key) => 
      <label>
        {variant.title} 
        <input name="variant" type="radio"/>
      </label> )}
    </div>
  )
}


const ProductForm = ({product}) => {
  const [state, setState] = useContext(CartContext);

  // const [wishlist, setWishlist] = useContext(WishlistContext);
  // let selectedQTY = 1
  // let alreadyInCart = state.cart.products.find((cartItem) => cartItem.productId === product.id)

  let addToCart = () => {
  
  }

  return (
    <div className="col-12">
      <div className="">
        <h3>{product.title}</h3>
        <p>{product?.blurb?.en}</p>
        <p>£{product.defaultProductVariant.price}</p>

        {product?.variants && 
        <div>
          <VariantsSelect allVariants={[product?.defaultProductVariant, ...product?.variants]}/>
        </div>
        }
        <div className="col-12"> 
          <button className="c-btn-product c-btn--dark" onClick={() => addToCart()}>Add To Bag</button>
        </div>
      </div>
    </div>
  )
};
  
export default ProductForm;