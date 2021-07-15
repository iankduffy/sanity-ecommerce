import styles from './productSlider.module.scss'
import ProductLink from './productLink/productLink'

interface ProductSliderProps {
  title: string, 
  products: Array<any>, 
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