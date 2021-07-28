import styles from '../header/header.module.scss'
import Link from 'next/link';
import {useState} from 'react'
import SearchIcon from '../icons/search'
import WishListIcon from '../icons/wishlist'
import CartIcon from '../icons/cart'
import MenuIcon from '../icons/menu'
import HomeIcon from '../icons/home'

import dynamic from 'next/dynamic';
const MiniBag = dynamic(() => import('components/cart/minibag/minibag'))

import { NavProps } from '@type/global' 

interface MobileNavProps {
  mainMenu: NavProps
}

const MobileNav = ({mainMenu} : MobileNavProps) => { 
  const [menuOpen, setMenuOpen] = useState(true)
  const [minibagOpen, setMinibagStatus] = useState(true)

  return ( 
    <div className={styles.mobileHeader}>
      <Link href="/">
        <a className="u-flex-column u-space-evenly">
          <HomeIcon />
          <span className="h6">Home</span>
        </a>
      </Link>
      <div className=" u-flex-column u-space-evenly">
        <MenuIcon />
        <span className="h6">Menu</span>
      </div>
        <div className="u-flex-column u-space-evenly"><SearchIcon /> <span className="h6">Search</span></div>
        <Link href="/wishlist">
          <a className="u-flex-column u-space-evenly"><WishListIcon /><span className="h6">Wish List</span></a>
        </Link>
        <Link href="/cart">
          <a className="u-flex-column u-space-evenly" >
            <CartIcon /> <span className="h6">MiniBag</span>
          </a>
        </Link>
    </div>
  )
}

export default MobileNav