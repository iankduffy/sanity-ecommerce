import styles from './heroImageWithOverlay.module.scss'
import Block from '../../../lib/blockContent'
import urlFor from '../../../lib/image'
import srcSet from '../../../lib/srcset'

import { sanityImageProps } from '@type/sanity'

interface heroImageProps {
  blockContent: any, // todo Sanity Content 
  image: sanityImageProps
  index: number
}
const heroImageWithOverlay = ({blockContent = '', image, index}: heroImageProps) => {

  return(
    <section className={styles.heroImageContainer}>
      <picture> 
        <source width="100" height="100" src={urlFor(image).width(1140).height(300).fit('fill').quality(50).auto('format').url()} srcSet={srcSet(image, 1800, 700)} media="(min-width: 738px)" />
        <img src={urlFor(image).width(400).height(400).fit('fill').quality(50).auto('format').url()} srcSet={srcSet(image, 700)} width="400" height="400" loading={index < 2 ? 'eager' : 'lazy'}/>
      </picture>
      <div className={styles.content}>
        <Block blocks={blockContent} />
      </div>
    </section>
  )
}


export default heroImageWithOverlay                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 