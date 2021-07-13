import styles from '../header/header.module.scss'
import NavItem from './navItem'

import { NavProps } from '@type/global'


export interface Props {
  mainMenu: NavProps
}

const Nav = ({mainMenu}: Props) => {
  console.log(mainMenu)
  return ( 
    <nav className={styles.nav}>
      {mainMenu?.navItems?.map((menu, key) => 
        <NavItem key={key} navTitle={menu?.mainpage?.title} navRoute={menu?.mainpage?.route} navDropDown={menu?.dropdown} navContent={menu?.navContent}/>
      )}
    </nav>
  )
}

export default Nav