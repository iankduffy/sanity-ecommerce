import styles from '../../stylesheets/components/staticPages/productNavigation.module.scss'

const ProductNavigation = ({product, tabs = []}) => {
  console.log({tabs})
  return (
    <section className={styles.productNav}>
      <p className='h4'>{product.title}</p>
      <div className="u-dis-flex u-pad-h-md">
        {tabs.map((tab, key) => <button>{tab.text}</button>)}
      </div>
      <div className="u-dis-flex u-vertical-center u-flex-end"> 
        <p className="u-mar-b-0">£{product.price}</p>
        <a href="#" className={styles.productNav__btn}>Buy Now</a>
      </div>
    </section>
  )
}


export default ProductNavigation;