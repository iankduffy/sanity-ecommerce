import urlFor from '../../lib/image'
import srcSet from '../../lib/srcset'

const HomeSplashScreen = ({heading = '', backgroundImage, tagline ='', id = '', ctaButtons = []}) => {

  return(
  <section id={id} className="" style={{backgroundImage: ``}}>
    <img className="" alt={heading} loading="lazy" srcSet={srcSet(backgroundImage, 1800)} src={urlFor(backgroundImage).width(1400).auto('format').url()}/>
    <h1 className="">{heading}</h1>
    <p className="">{tagline}</p>
  </section>
  )
}

export default HomeSplashScreen                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 