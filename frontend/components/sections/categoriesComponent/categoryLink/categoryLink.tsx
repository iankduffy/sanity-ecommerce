import Link from 'next/link'
import urlFor, {getImageDimensions} from '../../../../lib/image'
import srcSet from '../../../../lib/srcset'
import styles from '../categoriesComponent.module.scss'

import { CategoryLinkProps } from '../categoryComponentTypes'

const categoryLink = ({title, buttonText, buttonUrl, image, index} : CategoryLinkProps) => {

  return(
    <Link href={buttonUrl}>
      <a className={styles.categoryLink} >
        <img src={urlFor(image).width(250).height(500).quality(50).auto('format').url()} 
        srcSet={srcSet(image, 700)} 
        className="u-height-100" width={getImageDimensions(image).width.toString()} height={getImageDimensions(image).height.toString()} loading={index < 2 ? 'eager' : 'lazy'}/>
        <div className={styles.content}>
          <p className="h3">{title}</p>
          <button className={styles.button}>{buttonText}</button>
        </div>
      </a>
    </Link>
  )
}

export default categoryLink