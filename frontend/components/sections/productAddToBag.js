import ProductImage from '../pdp/product-image'
import ProductForm from '../pdp/product-form'

const ProductAddToBag = ({product}) => {

  return (  
    <div className="u-dis-flex u-mar-v-md u-mar-h-lg u-flex--row-reverse">
      <ProductImage productImages={product?.defaultProductVariant?.images} className="u-flex--row-reverse"/>
      <ProductForm product={product} />
    </div>
  )
}
  
export default ProductAddToBag;