import styles from '../../stylesheets/components/staticPages/fullImageWithText.module.scss'
import Block from '../../lib/blockContent'
import urlFor from '../../lib/image'
import srcSet from '../../lib/srcset'


const FullImageWithText = ({blockContent = '', image=''}) => {
  console.log({blockContent})
  return(
    <section className='u-pos-relative'>
      <img  style={{height: '100vh'}} className="col-12" src={urlFor(image).width(400).height(700).quality(80).auto('format').url()} srcSet={srcSet(image, 1800)} loading="lazy"/>
      <Block blocks={blockContent} className={styles.text}/>
    </section>
  )
}


export default FullImageWithText                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 