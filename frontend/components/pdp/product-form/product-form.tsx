import { useContext, useState } from 'react';
import { CartContext } from '../../context/cart-context'
// import DropDown from "../dropdown-input"
import Cookies from 'js-cookie' 
import styles from 'stylesheets/components/product/productPage.module.scss'
import VariantSelector from './variantSelector/variantSelector';

import { ProductProps } from '@type/productTypes'

interface ProductFormProps {
  product: ProductProps
}

const ProductForm = ({product} : ProductFormProps) => {
  const [cart, setCart] = useContext(CartContext);
  const [currentVariant, setCurrentVariant] = useState(product.defaultProductVariant)

  let addToCart = () => {
  //   let newProduct = {
  //     defaultImage: product.defaultProductVariant.images[0],
  //     productTitle: product?.title,
  //     lineitem: {...currentVariant}
  //   }

  //   let newProductList = [...cart.cart.products, newProduct]
  //   setCart({cart: { products: newProductList }})
  //   Cookies.set('cart', {cart: { products: newProductList }})
  }

  return (
    <div className="col-6@md col-12 u-pad-h-sm u-pad-v-md@md">
      <div className="">
        <h3>{product?.title}</h3>
        <p>{product?.blurb?.en}</p>
        <p className="h4">£{currentVariant.price}</p>
        {product?.variants && 
        <div className='u-dis-block'>
          <VariantSelector allVariants={[product?.defaultProductVariant, ...product?.variants]} currentVariant={currentVariant} setVariant={setCurrentVariant}/>
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