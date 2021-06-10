import Link from 'next/link';
// import MiniBag from '../components/minibag/minibag'
import urlFor from '../../lib/image';
import {useState} from 'react'
import styles from '../../stylesheets/components/header.module.scss'

const Header = ({mainMenu, siteLogo, logoText, promotion = ""}) => {

  return ( 
    <div className="u-pad-b-lg">
      <div className={styles.preHeader}>
        {promotion}
      </div>
      <div className={styles.oHeader}>
        <Link href="/">
          <p> Logo </p>
        </Link>
      </div>
    </div>
  )
}

export default Header
