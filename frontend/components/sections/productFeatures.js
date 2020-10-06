import Block from '../../lib/blockContent'
import styles from '../../stylesheets/components/staticPages/productFeatures.module.scss'

const ProductFeatures = ({blockContent, features, ...props}) => {
  console.log({props})
  return(
    <section className='u-t-cen u-mar-v-lg container'>
      <Block blocks={blockContent} className="col-8@md container"/>
      <div className={styles.featureContainer}>
        {features.map((feature, key) => <Block blocks={feature.blockContent} className=""/>)}
      </div>
    </section>
  )
}

export default ProductFeatures                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 