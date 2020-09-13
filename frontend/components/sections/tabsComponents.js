import {useState, useEffect} from 'react'
import styles from '../../stylesheets/components/staticPages/tabsComponent.module.scss'
import Link from 'next/link';
import urlFor from '../../lib/image'
import srcSet from '../../lib/srcset'

const TabsComponents = ({tabs}) => {
  const [currentTab, setTab] = useState(tabs[0].name)

  useEffect(() => {
    // console.log(currentTab)
  }, [currentTab])

  // console.log(tabs)
  return (
    <section>
      <div className={styles.tabsContainer}> 
        {tabs.map((tab, key) =>  
          <button onClick={() => setTab(tab.name)} className={`${styles.tab} ${currentTab == tab.name ? styles.tabActive : '' }`} key={key}>{tab.name}</button>
        )}
      </div>
      <div>
        {tabs.map((tab, key) =>  
          currentTab == tab.name && <div className={`${styles.tabLinksContainer} ${currentTab == tab.name ? styles.contentActive : ''}`}>
            {tab.links?.map((link, key) => 
              <Link key={key} href={link.link}>
                <a className="">
                  <img src={urlFor(link.image).width(1200 / 4).auto('format').url()} alt={link.text}/>
                  <p>{link.text}</p>
                </a>
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default TabsComponents;