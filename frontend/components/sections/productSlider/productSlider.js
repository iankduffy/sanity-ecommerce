import styles from './productSlider.module.scss'
import ProductLink from '../../plp/productLink'

const productSlider = ({title, products}) => {
  console.log(products)
  return(
    <section className={styles.productSliderContainer}>
      <h3>{title}</h3>
      <div className={styles.slider}>
        {products.map((product, key) => <ProductLink product={product} key={key} />)}
      </div>
    </section>
  )
}

export default productSlider