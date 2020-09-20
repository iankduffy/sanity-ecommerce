import { useContext, useState } from 'react';
import { CartContext } from '../context/cart-context'
// import DropDown from "../dropdown-input"
import Cookies from 'js-cookie' 
import styles from '../../stylesheets/components/product/productPage.module.scss'

const VariantsSelect = ({allVariants, currentVariant, setVariant}) => {
  // const [selected, setSelected] = useState(allVariants[0].title)

  return (
    <div className={styles.variantContainer}>
      {allVariants.map((variant, key) => 
      <label key={key} className={`${styles.variant} ${(currentVariant.title == variant.title) ? styles.checked : ''}`}>
        {variant.title} 
        <input className="u-hidden" name="variant" type="radio" checked={() => currentVariant.title === variant.title} value={variant.title} onChange={() => setVariant(variant)}/>
      </label> )}
    </div>
  )
}


const ProductForm = ({product}) => {
  const [state, setState] = useContext(CartContext);
  const [currentVariant, setCurrentVariant] = useState(product.defaultProductVariant)

  // const [wishlist, setWishlist] = useContext(WishlistContext);
  // let selectedQTY = 1
  // let alreadyInCart = state.cart.products.find((cartItem) => cartItem.productId === product.id)

  let addToCart = () => {
  
  }

  return (
    <div className="col-12 col-6@md container">
      <div className="">
        <div className="u-dis-flex">
          {product?.tags?.map((tag, key) => <div className={``}>{tag}</div>)}
        </div>
        <h3>{product?.title}</h3>
        <p>{product?.blurb?.en}</p>
        <p>£{currentVariant.price}</p>

        {product?.variants && 
        <div className='u-dis-block'>
          <VariantsSelect allVariants={[product?.defaultProductVariant, ...product?.variants]} currentVariant={currentVariant} setVariant={setCurrentVariant}/>
        </div>
        }
        <div className="col-12 u-dis-block"> 
          <button className={styles.addToBagButton} onClick={() => addToCart()}>Add To Bag</button>
        </div>
      </div>
    </div>
  )
};
  
export default ProductForm;