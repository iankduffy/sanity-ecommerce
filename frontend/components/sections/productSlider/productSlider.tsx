import styles from './productSlider.module.scss'
import ProductLink from './productLink/productLink'
import ArrowIcon from 'components/shared/icons/arrow'
import {useRef} from 'react'
import {scrollRightByOne, scrollLeftByOne} from 'lib/sliderUtils'

import { ProductProps } from '@type/productTypes'
interface ProductSliderProps {
  title: string, 
  products: Array<ProductProps>, 
  index: number
}

// ToDo: Add Arrows 
const productSlider = ({title, products, index} : ProductSliderProps) => {
  const slider = useRef(null)

  return(
    <section className={styles.productSliderContainer}>
      <div className="u-dis-flex u-space-between">
        <h3 className="">{title}</h3>
        <div className="u-dis-flex">
          <button className={styles.sliderBtn} onClick={() => scrollLeftByOne(slider)}>
            <ArrowIcon />
          </button>
          <button className={styles.sliderBtn} onClick={() => scrollRightByOne(slider)}>
            <ArrowIcon />
          </button>
        </div>
      </div>
      <div className={styles.slider} ref={slider}>
        {products.map((product, key) => <ProductLink {...product} index={index} key={key} />)}
      </div>
    </section>
  )
}

export default productSlider