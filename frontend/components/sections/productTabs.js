import styles from '../../stylesheets/components/staticPages/accordian.module.scss'
import Block from '../../lib/blockContent'
import urlFor from '../../lib/image'
import srcSet from '../../lib/srcset'
import {useState, useEffect} from 'react'


const Accordian = ({tabs, ...props}) => {
  const [activeTab, setActiveTab] = useState(tabs[0])

  useEffect(() => {
    setTimeout(() => {
      setActiveTab(tabs[1])
    }, 1000)
  }, [activeTab])

  return(
  <section className='u-dis-flex u-pad-h-lg u-mar-v-lg'>
    <img loading="lazy" srcSet={srcSet(activeTab.image, 700)} src={urlFor(activeTab.image).width(600).height(500).auto('format')} alt="" className="col-6@md"/>
    <div className="col-6@md u-pad-h-md">
      {tabs.map((tab, key) => 
      <div key={key} className={` ${styles.accordian} ${activeTab == tab ? styles.accordian__active : ''}`}>
        <h3>{tab.title}</h3>
        <Block blocks={tab.blockContent} />
      </div>
      )}
    </div>
  </section>
  )
}


export default Accordian                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 