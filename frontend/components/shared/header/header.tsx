import Link from 'next/link';
import Nav from '../navigation/nav';
import MiniBag from '../../minibag/minibag'
import urlFor from '../../../lib/image';
import {useState} from 'react'
import SearchBar from '../../search'
import MobileNav from '../navigation/mobileNav'
import styles from './header.module.scss'

// TypeScript
import PromoHeader from './partials/promotionHeader/promotionHeader'
import { DesktopButtons } from './partials/desktopButtons/desktopButtons';

export interface Props {
  mainMenu: any,
  siteLogo: any, 
  logoText: string, 
  promotion: string
}

const Header = ({mainMenu, siteLogo, logoText, promotion}: Props) => {
  const [minibagVisable, setMinibagVisable] = useState(false)

  return ( 
    <div>
      <PromoHeader promoText={promotion} />
      <div className={styles.oHeader}>
        <Link href="/">
          <a><img src={urlFor(siteLogo).auto('format').width(100).url()} className={styles.oHeader__logo} alt="Site Logo"/><p>{logoText}</p></a>
        </Link>
        <Nav mainMenu={mainMenu} />
        <DesktopButtons />
      </div>
      <MobileNav />
      {/* <div className={styles.searchContainer}>
        <SearchBar />
      </div> */}
    </div>
  )
}

export default Header
