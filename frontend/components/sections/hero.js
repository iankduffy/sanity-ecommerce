import urlFor from '../../lib/image'
import styles from '../../stylesheets/components/staticPages/hero.module.scss'
import ProgressImage from '../progressImage'
import srcSet from '../../lib/srcset'

const HomeSplashScreen = ({heading = '', backgroundImage, tagline ='', id = ''}) => {

  return(
  <section id={id} className={styles.hero}>
    <img style={{height: '80vh'}} alt={heading} className="col-12" src={urlFor(backgroundImage).width(500).quality(80).auto('format').url()} srcSet={srcSet(backgroundImage, 1800)} />
    <div className={styles.hero__text}>
      <h1 className="">{heading}</h1>
      <p className="">{tagline}</p>
    </div>
  </section>
  )
}

export default HomeSplashScreen                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 