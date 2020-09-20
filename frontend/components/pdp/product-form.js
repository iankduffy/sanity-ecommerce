import { useContext, useState } from 'react';
import { CartContext } from '../context/cart-context'
// import DropDown from "../dropdown-input"
import Cookies from 'js-cookie' 
import styles from '../../stylesheets/components/product/productPage.module.scss'

const VariantsSelect = ({allVariants, currentVariant, setVariant}) => {

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

  let addToCart = () => {
    let newProduct = {
      defaultImage: product.defaultProductVariant.images[0],
      productTitle: product?.title,
      lineitem: {...currentVariant}
    }

    let newProductList = [...state.cart.products, newProduct]
    setState({cart: { products: newProductList }})
    Cookies.set('cart', {cart: { products: newProductList }})
  }

  return (
    <div className="col-6@md col-12 u-pad-h-md u-pad-v-md">
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