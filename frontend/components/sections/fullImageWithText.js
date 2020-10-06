// import styles from '../../stylesheets/components/staticPages/hero.module.scss'
import Block from '../../lib/blockContent'
import urlFor from '../../lib/image'
import srcSet from '../../lib/srcset'


const FullImageWithText = ({blockContent = '', image=''}) => {
  return(
    <section className=''>
      <img  style={{height: '100vh'}} className="col-12" src={urlFor(image).width(400).height(700).quality(80).auto('format').url()} srcSet={srcSet(image, 1800)} loading="lazy"/>
      <Block blockContent={blockContent} className=''/>
    </section>
  )
}


export default FullImageWithText                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 