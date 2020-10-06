// import styles from '../../stylesheets/components/staticPages/hero.module.scss'
import Block from '../../lib/blockContent'
import urlFor from '../../lib/image'
import srcSet from '../../lib/srcset'
import {useState} from 'react'


const Accordian = ({tabs, ...props}) => {
  const [image, setImage] = useState(tabs[0].image)

  return(
  <section className='u-dis-flex u-pad-h-lg u-mar-v-lg'>
    <img loading="lazy" srcSet={srcSet(image, 700)} src={urlFor(image).width(600).auto('format')} alt="" className="col-6@md"/>
    <div className="col-6@md u-pad-h-md">
      {tabs.map((tab, key) => 
      <div key={key}>
        <h3>{tab.title}</h3>
        <Block blocks={tab.blockContent} />
      </div>
      )}
    </div>
  </section>
  )
}


export default Accordian                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 