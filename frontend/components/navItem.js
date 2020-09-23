import styles from '../stylesheets/components/header.module.scss'
import Link from 'next/link';
import {useState} from 'react'


const DropDown = ({dropdownNav}) => { 
  return ( 
    <div className="h1">Drop Down</div>
  )
}

const NavItem = ({navTitle = '', navRoute = {}, navDropDown = []}) => { 
  const [isDropDownOpen, setDropDownOpen] = useState(false)
  
  return ( 
    <Link href={navRoute}>
      <a onMouseEnter={() => {setDropDownOpen(true)}} onMouseLeave={() => {setDropDownOpen(false)}}> 
        {navTitle}
        {isDropDownOpen && <DropDown dropdownNav={navDropDown} />}
      </a>
    </Link>
  )
}

export default NavItem