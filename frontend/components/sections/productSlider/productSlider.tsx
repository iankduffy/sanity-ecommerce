import styles from './productSlider.module.scss'
import ProductLink from './productLink/productLink'

import { ProductProps } from '@type/productTypes'
interface ProductSliderProps {
  title: string, 
  products: Array<ProductProps>, 
  index: number
}

const productSlider = ({title, products, index} : ProductSliderProps) => {
  return(
    <section className={styles.productSliderContainer}>
      <h3 className="u-t-cen">{title}</h3>
      <div className={styles.slider}>
        {products.map((product, key) => <ProductLink {...product} index={index} key={key} />)}
      </div>
    </section>
  )
}

export default productSlider