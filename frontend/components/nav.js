import styles from '../stylesheets/components/header.module.scss'
import NavItem from './navItem'

const Nav = ({mainMenu}) => {
  return ( 
    <nav className={styles.nav}>
      {mainMenu?.navItems?.map((menu, key) => 
        <NavItem key={key} navTitle={menu?.mainpage?.title} navRoute={menu?.mainpage?.route} navDropDown={menu?.dropdown} />
      )}
    </nav>
  )
}

export default Nav