import styles from '../stylesheets/components/header.module.scss'
import Link from 'next/link';
import {useState} from 'react'


const DropDown = ({dropdownNav}) => { 
  return ( 
    <div className={styles.navDropDown}>
      <div>Drop Down</div>
    </div>
  )
}

const NavItem = ({navTitle = '', navRoute = {}, navDropDown = null}) => { 
  const [isDropDownOpen, setDropDownOpen] = useState(false)
  console.log(navDropDown)
  return ( 
    <Link href={navRoute}>
      <a className='u-pos-relative' onMouseEnter={() => {setDropDownOpen(true)}} onMouseLeave={() => {setDropDownOpen(false)}}> 
        {navTitle}
        {isDropDownOpen && navDropDown && <DropDown dropdownNav={navDropDown} />}
      </a>
    </Link>
  )
}

export default NavItem