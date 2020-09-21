import styles from '../../stylesheets/components/staticPages/sixtyFortyCompoent.module.scss'
import urlFor from '../../lib/image'
import srcSet from '../../lib/srcset'
import Block from '../../lib/blockContent'


const SixtyFortyComponent = ({image, blockContent}) => {
  return (
    <section className={styles.container}>
      <Block className={styles.image} blocks={blockContent} />
      <img className={styles.image} loading="lazy" srcSet={srcSet(image, 700)} src={urlFor(image).width(700).auto('format')} alt=""/>
    </section>
  )
}


export default SixtyFortyComponent;