import styles from '../../stylesheets/components/staticPages/productNavigation.module.scss'

const ProductNavigation = ({product, tabs = []}) => {
  console.log({tabs})
  return (
    <section className={styles.productNav}>
      <p className='h4'>{product.title}</p>
      <div className={styles.productNav__tabs}>
        {tabs.map((tab, key) => 
          <a className={styles.tab}>{tab.text}</a>
        )}
      </div>
      <div className="u-dis-flex u-vertical-center u-flex-end"> 
        <p className="u-mar-b-0">£{product.price}</p>
        <a href="#" className={styles.productNav__btn}>Buy Now</a>
      </div>
    </section>
  )
}


export default ProductNavigation;