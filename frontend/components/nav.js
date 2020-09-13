import styles from '../stylesheets/components/header.module.scss'
import Link from 'next/link';

const Nav = ({mainMenu}) => {
  // const [mobileMenu, setMobileMenu] = useState(false)
  console.log(mainMenu)
  return ( 
    <div className={styles.nav}>
      <nav className="">
        {mainMenu?.navItems?.map((menu, key) => 
          <Link key={key} href={`${menu.item[0].slug.current}`}> 
            <a className="o-nav--item o-header__link u-pad-v-md">{menu.item[0]?.title}</a>
          </Link>
        )}
      </nav>
    </div>
  )
}

export default Nav