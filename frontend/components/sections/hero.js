import urlFor from '../../lib/image'
import styles from '../../stylesheets/components/staticPages/hero.module.scss'
import ProgressImage from '../progressImage'
import srcSet from '../../lib/srcset'

const HomeSplashScreen = ({heading = '', backgroundImage, tagline ='', id = ''}) => {

  return(
  <section id={id} className={styles.hero} style={{backgroundImage: ``}}>
    <ProgressImage alt={heading} previewUrl={urlFor(backgroundImage).width(500).quality(40).blur(200).auto('format').url()} imageUrl={urlFor(backgroundImage).width(500).auto('format').url()} srcSetImages={srcSet(backgroundImage, 1800)}/>
    <div className={styles.hero__text}>
      <h1 className="">{heading}</h1>
      <p className="">{tagline}</p>
    </div>
  </section>
  )
}

export default HomeSplashScreen                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 