
import Link from 'next/link';
import urlFor from '../../lib/image';

const Brands = () => {
  return (
    <div>
      <h4>Brands</h4>
    </div>
  )
}

const ProductTags = () => {

  return (
    <div>
      <h4>Product Tags</h4>
    </div>
  )
}

const PriceRange = () => {

  return (
    <div>
      <h4>Price Range</h4>
      <p>Enter a minimum and maximum price range or drag the price selector below</p>
    </div>
  )
}

const ProductFilters = () => {
  return ( 
    <div className='u-pad-h-md'>
      <PriceRange />
      <ProductTags />
      <Brands />
    </div>
  )
}

export default ProductFilters