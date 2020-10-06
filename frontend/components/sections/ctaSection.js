import styles from '../../stylesheets/components/staticPages/ctaSection.module.scss'
import Block from '../../lib/blockContent'

const CtaSection = ({blockContent = '', buttonText = '', buttonUrl = '/'}) => {
  return(
  <section className={styles.ctaContainer}>
    <Block blocks={blockContent} className="u-mar-b-0"/>
    <a className='c-btn' href={buttonUrl}>{buttonText}</a>
  </section>
  )
}


export default CtaSection                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 