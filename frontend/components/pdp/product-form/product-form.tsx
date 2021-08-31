import { useState } from 'react';
import VariantSelector from './variantSelector/variantSelector';
import AddToWishListBtn from 'components/buttons/wishlist'
import AddToBagButton from 'components/cart/addToBagButton/addToBagButton'
import DetailsElement from 'components/shared/detailsElement';

import { ProductProps, VariantProps } from '@type/productTypes'

interface ProductFormProps {
  product: ProductProps
}

const ProductForm = ({product} : ProductFormProps) => {
  const { title, slug, defaultProductVariant, variants, details, features, delivery } = product
  const image = defaultProductVariant.images[0]

  const [currentVariant, setCurrentVariant] = useState<VariantProps>(product.defaultProductVariant)

  return (
    <div className="col-6@md col-12 u-pad-h-sm u-pad-v-md">
      <div className="">
        <h3>{title}</h3>
        <p>{product?.blurb?.en}</p>
        <p className="h4">£{currentVariant.price}</p>
        {variants && 
          <VariantSelector allVariants={[defaultProductVariant, ...variants]} currentVariant={currentVariant} setVariant={setCurrentVariant}/>
        }
        <div className="u-dis-flex">
          <AddToBagButton currentVariant={currentVariant} title={title} slug={slug} image={image} />
          <AddToWishListBtn product={product} currentVariant={currentVariant}  />
        </div>
        <div className="u-pad-t-md">
          {details && <DetailsElement isOpen={true} title="Details" block={details}/>}
          {features && <DetailsElement isOpen={false} title="Features" block={features}/>}
          {delivery && <DetailsElement isOpen={false} title="Delivery & Returns" block={delivery}/>}
        </div>
      </div>
    </div>
  )
};
  
export default ProductForm;