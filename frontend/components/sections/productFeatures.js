// import urlFor from '../../lib/image'
// import styles from '../../stylesheets/components/staticPages/hero.module.scss'
// import ProgressImage from '../progressImage'
// import srcSet from '../../lib/srcset'
// import Head from 'next/head'

import Block from '../../lib/blockContent'

const ProductFeatures = ({blockContent, features, ...props}) => {
  console.log({props})
  return(
    <section className='u-t-cen u-mar-v-lg'>
      <Block blocks={blockContent} className="col-6@md container"/>
      <div className="container u-dis-flex u-mar-v-lg u-pad-h-md">
        {features.map((feature, key) => <Block blocks={feature.blockContent} className="col-4"/>)}
      </div>
    </section>
  )
}

export default ProductFeatures                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 