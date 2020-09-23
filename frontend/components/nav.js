import styles from '../stylesheets/components/header.module.scss'
import Link from 'next/link';
import NavItem from './navItem'

const Nav = ({mainMenu}) => {
  // const [mobileMenu, setMobileMenu] = useState(false)
  console.log({mainMenu})
  return ( 
    <div className={styles.nav}>
      <nav className="">
        {mainMenu?.navItems?.map((menu, key) => 
          <NavItem navTitle={menu?.mainpage?.title} navRoute={menu?.mainpage?.route} navDropDown={menu.dropdown} />
          
          // <Link key={key} href={{pathname:menu.mainpage?.route.current}}> 
          //   <a className="o-nav--item o-header__link u-pad-v-md">{menu?.mainpage?.title}</a>
          // </Link>
        )}
      </nav>
    </div>
  )
}

export default Nav