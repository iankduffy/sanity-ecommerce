import styles from '../stylesheets/components/header.module.scss'
import Link from 'next/link';
import {useState} from 'react'

const DropDownItem = ({link}) => {
  return (
    <Link href={link?.slug?.current}>
      <a className=''> 
        {link.title}
      </a>
    </Link>
  )
}

const DropDown = ({dropdownNav}) => { 
  return ( 
    <div className={styles.navDropDown}>
      {dropdownNav.map((item, key) => <DropDownItem link={item} key={key} />)}
    </div>
  )
}

const NavItem = ({navTitle = '', navRoute = {}, navDropDown = null}) => { 
  const [isDropDownOpen, setDropDownOpen] = useState(false)
  return ( 
    <Link href={navRoute}>
      <div className='u-pos-relative' onMouseEnter={() => {setDropDownOpen(true)}} onMouseLeave={() => {setDropDownOpen(false)}}>
        <a className="u-pad-v-md u-pad-h-md"> 
          {navTitle}
        </a>
        {isDropDownOpen && navDropDown && <DropDown dropdownNav={navDropDown} />}
      </div>
    </Link>
  )
}

export default NavItem