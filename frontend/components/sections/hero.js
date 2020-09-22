import urlFor from '../../lib/image'
import srcSet from '../../lib/srcset'
import styles from '../../stylesheets/components/staticPages/hero.module.scss'

const HomeSplashScreen = ({heading = '', backgroundImage, tagline ='', id = ''}) => {

  return(
  <section id={id} className={styles.hero} style={{backgroundImage: ``}}>
    <img className="" alt={heading} srcSet={srcSet(backgroundImage, 1800)} src={urlFor(backgroundImage).width(1400).auto('format').url()} loading="eager"/>
    <div className={styles.hero__text}>
      <h1 className="">{heading}</h1>
      <p className="">{tagline}</p>
    </div>
  </section>
  )
}

export default HomeSplashScreen                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 