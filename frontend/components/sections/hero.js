import urlFor from '../../lib/image'
import styles from '../../stylesheets/components/staticPages/hero.module.scss'
// import ProgressImage from '../progressImage'
import srcSet from '../../lib/srcset'
import Head from 'next/head'


const HomeSplashScreen = ({heading = '', backgroundImage, tagline ='', id = '', index, ...props}) => {

  return(
    <section id={id} className={styles.hero}>
      {index == 0 && 
      <Head>
        <link
          rel='preload'
          href={urlFor(backgroundImage).width(400).quality(80).auto('format').url()}
          as="image"
          imagesrcset={srcSet(backgroundImage, 1800)}
        />
      </Head> }

      <img height="700" alt={heading} className="col-12" src={urlFor(backgroundImage).width(400).height(700).quality(80).auto('format').url()} srcSet={srcSet(backgroundImage, 1800)} loading="eager"/>
      <div className={styles.hero__text}>
        <h1 className="">{heading}</h1>
        <p className="">{tagline}</p>
      </div>
    </section>
  )
}

/* <ProgressImage imageUrl={urlFor(backgroundImage).width(400).height(700).quality(80).auto('format').url()} srcSetImages={srcSet(backgroundImage, 1800)} previewUrl={urlFor(backgroundImage).width(400).height(700).quality(10).blur(100).auto('format').url()} /> */

export default HomeSplashScreen                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 