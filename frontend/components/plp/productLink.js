
import Link from 'next/link';
import urlFor from '../../lib/image';
import styles from '../../stylesheets/components/product/productLink.module.scss'

const ProductLink = ({product}) => {
  
  return ( 
    <Link href={`${product.slug.current}`} >
      <a className={styles.productLink}>
        <img src={urlFor(product.defaultProductVariant.images[0]).height(300).width(400).auto('format').url()} />
        <p className="h4">{product.title}</p>
        <p className="h5">£{product.defaultProductVariant.price}</p>
      </a>
    </Link>
  )
}

export default ProductLink