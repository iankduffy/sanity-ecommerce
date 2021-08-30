import styles from './heroImageWithOverlay.module.scss'
import Block from '../../../lib/blockContent'
import ImageComp from 'components/shared/imageComp'

import { sanityImageProps } from '@type/sanity'

interface heroImageProps {
  blockContent: any, // todo Sanity Content 
  image: sanityImageProps
  index: number,
  metadata?: any
}

const heroImageWithOverlay = ({blockContent = '', image, index, metadata}: heroImageProps) => {
  return(
    <section className={styles.heroImageContainer}>
      <ImageComp 
        mobileImage={image}
        minWidth={400}
        maxWidth={1920}
        alt={'Hero Image TODO'} 
        isLazyLoaded={index < 2 ? false : true} 
      />
      <div className={styles.content}>
        <Block blocks={blockContent} />
      </div>
    </section>
  )
}


export default heroImageWithOverlay                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 