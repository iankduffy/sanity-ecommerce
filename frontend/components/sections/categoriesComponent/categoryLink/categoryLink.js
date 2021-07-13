import Link from 'next/link'
import urlFor from '../../../../lib/image'
import srcSet from '../../../../lib/srcset'
import styles from '../categoriesComponent.module.scss'

const categoryLink = ({link}) => {
  const {title = '', buttonText = '', buttonUrl = '', image} = link; 
  // console.log(link)

  return(
    <Link href={buttonUrl}>
      <a className={styles.categoryLink} >
        <img src={urlFor(image).width(400).height(600).quality(50).auto('format').url()} srcSet={srcSet(image, 700)} className="u-height-100" width="400" height="700" loading="lazy"/>
        <div className={styles.content}>
          <p className="h3">{title}</p>
          <button className={styles.button}>{buttonText}</button>
        </div>
      </a>
    </Link>
  )
}

export default categoryLink