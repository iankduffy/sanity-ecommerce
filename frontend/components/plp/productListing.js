// import styles from '../stylesheets/components/header.module.scss'
import Link from 'next/link';
import urlFor from '../../lib/image';
import ProductLink from './productLink'
import styles from '../../stylesheets/components/product/productListing.module.scss'


const ProductListing = ({productsData}) => {
  return ( 
    <div className={`${styles.container}`}>
      {productsData.map((product, key) => 
        <ProductLink product={product} key={key}/>
      )}
    </div>
  )
}

export default ProductListing