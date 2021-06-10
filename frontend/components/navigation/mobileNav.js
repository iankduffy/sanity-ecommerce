import styles from '../shared/header/header.module.scss'
import Link from 'next/link';
import {useState} from 'react'

const MobileNav = ({mainMenu}) => { 
  const [menuOpen, setMenuOpen] = useState(true)
  
  return ( 
    <div className={styles.mobileHeader}>
      <Link href="/">
        <a>
          <p>Home</p>
        </a>
      </Link>
      <div>
        <p>Menu</p>
      </div>
      <div>
        <p>Search</p>         
      </div>
      <div>
        <p>My Bag</p>         
      </div>
    </div>
  )
}

export default MobileNav