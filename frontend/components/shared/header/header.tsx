import Link from 'next/link';
import Nav from '../navigation/nav';
import MiniBag from '../../minibag/minibag'
import urlFor from 'lib/image';
import {useState} from 'react'
import SearchBar from '../../search'
import MobileNav from '../navigation/mobileNav'
import styles from './header.module.scss'

// TypeScript
import PromoHeader from './partials/promotionHeader/promotionHeader'
import { DesktopButtons } from './partials/desktopButtons/desktopButtons';

import { NavProps } from '@type/global'
interface Props {
  mainMenu: NavProps,
  siteLogo: any,
  promotion: string
}

const Header = ({mainMenu, siteLogo, promotion}: Props) => {
  const [minibagVisible, setMinibagVisible] = useState(false)

  return ( 
    <div>
      <PromoHeader promoText={promotion} />
      <div className={styles.oHeader}>
        <Link href="/">
          <a><img src={urlFor(siteLogo).auto('format').width(100).url()} className={styles.oHeader__logo} alt="Site Logo"/></a>
        </Link>
        <Nav mainMenu={mainMenu} />
        <DesktopButtons />
      </div>
      <MobileNav mainMenu={mainMenu}/>
      {/* <div className={styles.searchContainer}>
        <SearchBar />
      </div> */}
    </div>
  )
}

export default Header
