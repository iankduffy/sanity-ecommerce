// import styles from '../stylesheets/components/header.module.scss'
import Link from 'next/link';
import urlFor from '../../lib/image';

const ProductLink = ({product}) => {
  return ( 
    <div>
      <img src={urlFor(product.defaultProductVariant.images[0]).height(300).width(400).auto('format').url()} />
      {product.title}
    </div>
  )
}

export default ProductLink