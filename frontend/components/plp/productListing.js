
import Link from 'next/link';
import urlFor from '../../lib/image';
import ProductLink from './productLink'
import styles from '../../stylesheets/components/product/productListing.module.scss'


const ProductListing = ({productsData = null}) => {
  console.log(productsData)
  return ( 
    <div className={`${styles.container}`}>

      {productsData.length ? productsData.map((product, key) => 
        <ProductLink product={product} key={key}/>
      ) : "No Products Found"}
    </div>
  )
}

export default ProductListing