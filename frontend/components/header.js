import Link from 'next/link';
import Nav from './nav';
// import DropDown from './dropdown'
// import MenuIcon from './icons/menu'
// import CrossIcon from './icons/cross'

import urlFor from '../lib/image';
import {useState} from 'react'

import styles from '../stylesheets/components/header.module.scss'

const Header = ({mainMenu, siteLogo, logoText}) => {
  const [mobileMenu, setMobileMenu] = useState(false)

  return ( 
    <div>
      <div className={styles.preHeader}>
        Promotion Text Here
      </div>
      <div className={styles.oHeader}>
        <Link href="/">
          <a><img src={urlFor(siteLogo).auto('format').width(100).url()} className={styles.oHeader__logo} alt="Site Logo"/><p>{logoText}</p></a>
        </Link>
        <input />
        <div>
          {/* <Link href="/">
            Wishlist
          </Link> */}
          <Link href="/">
            Minibag
          </Link>
        </div>
      </div>
      <Nav mainMenu={mainMenu} />
    </div>
  )
}

export default Header
