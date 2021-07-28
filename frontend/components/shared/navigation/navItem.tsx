import styles from '../header/header.module.scss'
import Link from 'next/link';
import {useState} from 'react';
import RenderSections from './renderNavComponents';

import dynamic from 'next/dynamic'
const DropDown = dynamic(() => import('./dropdown'))

export interface NavItemsProp {
  navTitle: string,
  navRoute: any, 
  navDropDown: any, 
  navContent: any
}

const NavItem = ({navTitle = '', navRoute = {}, navDropDown = null, navContent}: NavItemsProp) => { 
  const [isDropDownOpen, setDropDownOpen] = useState(false)

  return ( 
    <Link href={navRoute}>
      <div className='u-pad-v-md u-pad-h-md' onMouseEnter={() => {setDropDownOpen(true)}} onMouseLeave={() => {setDropDownOpen(false)}}>
        <a className=""> 
          {navTitle}
        </a>
        {isDropDownOpen && navDropDown && <DropDown navContent={navContent} dropdownNav={navDropDown} />}
      </div>
    </Link>
  )
}

export default NavItem