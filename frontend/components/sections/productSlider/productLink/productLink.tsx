
import Link from 'next/link';
import urlFor, {getImageDimensions} from 'lib/image';
import styles from 'stylesheets/components/product/productLink.module.scss'

import { VariantProps } from '@type/productTypes'

interface ProductLinkProps {
  slug: string
  defaultProductVariant: VariantProps, 
  title: string, 
  index: number
}

const ProductLink = ({slug, defaultProductVariant, title, index} : ProductLinkProps) => {
  // console.log(slug)
  return ( 
    <Link href={`${slug}`} >
      <a className={styles.productLink}>
        <img src={urlFor(defaultProductVariant.images[0]).height(300).width(400).auto('format').url()} height={getImageDimensions(defaultProductVariant.images[0]).height.toString()} width={getImageDimensions(defaultProductVariant.images[0]).width.toString()} loading={index < 2 ? 'eager' : 'lazy'}/>
        <p className="h4">{title}</p>
        <p className="h5">From £{defaultProductVariant.price}</p>
      </a>
    </Link>
  )
}

export default ProductLink