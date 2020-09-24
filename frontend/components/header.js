import Link from 'next/link';
import Nav from './navigation/nav';
import MiniBag from '../components/minibag/minibag'
import urlFor from '../lib/image';
import {useState} from 'react'
import SearchBar from './search'
import MobileNav from './navigation/mobileNav'
import styles from '../stylesheets/components/header.module.scss'

const Header = ({mainMenu, siteLogo, logoText, promotion}) => {
  const [minibagVisable, setMinibagVisable] = useState(false)

  return ( 
    <div>
      <div className={styles.preHeader}>
        {promotion}
      </div>
      <div className={styles.oHeader}>
        <Link href="/">
          <a><img src={urlFor(siteLogo).auto('format').width(100).url()} className={styles.oHeader__logo} alt="Site Logo"/><p>{logoText}</p></a>
        </Link>
        <Nav mainMenu={mainMenu} />
        <div className="u-pos-relative" onMouseEnter={() => {setMinibagVisable(true)}} onMouseLeave={() => {setMinibagVisable(false)}}>
          <h4 className="col-12">MiniBag</h4>
          {minibagVisable && <MiniBag />}
        </div>
      </div>
      <MobileNav />
      <div className={styles.searchContainer}>
        <SearchBar />
      </div>
    </div>
  )
}

export default Header
