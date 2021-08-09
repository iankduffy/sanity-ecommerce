import { useState } from 'react';
import VariantSelector from './variantSelector/variantSelector';
import AddToWishListBtn from 'components/buttons/wishlist'
import AddToBagButton from 'components/cart/addToBagButton/addToBagButton'

import { ProductProps, VariantProps } from '@type/productTypes'

interface ProductFormProps {
  product: ProductProps
}

const ProductForm = ({product} : ProductFormProps) => {
  const { title, slug, defaultProductVariant } = product
  const image = defaultProductVariant.images[0]

  const [currentVariant, setCurrentVariant] = useState<VariantProps>(product.defaultProductVariant)

  return (
    <div className="col-6@md col-12 u-pad-h-sm u-pad-v-md@md">
      <div className="">
        <h3>{product?.title}</h3>
        <p>{product?.blurb?.en}</p>
        <p className="h4">£{currentVariant.price}</p>
        {product?.variants && 
          <VariantSelector allVariants={[product?.defaultProductVariant, ...product?.variants]} currentVariant={currentVariant} setVariant={setCurrentVariant}/>
        }
        <div className="u-dis-flex"> 
          <AddToBagButton currentVariant={currentVariant} title={title} slug={slug} image={image} styles={''} />
          <AddToWishListBtn product={product} />
        </div>
      </div>
    </div>
  )
};
  
export default ProductForm;