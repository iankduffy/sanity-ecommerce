import styles from '../header/header.module.scss'
import Link from 'next/link';
import RenderSections from './renderNavComponents';

const DropDownItem = ({link}) => {
  return (
    <Link href={link?.slug?.current}>
      <a className='u-pad-v-sm'> 
        {link.title}
      </a>
    </Link>
  )
}

const DropDown = ({dropdownNav, navContent}) => { 
  return ( 
    <div className={styles.navDropDown}>
      <div className={styles.navDropDownLinks}>
        {dropdownNav.map((item, key) => <DropDownItem link={item} key={key} />)}
      </div>
      <div className={styles.navContent}>
        <RenderSections sections={navContent}/>
      </div>
    </div>
  )
}

export default DropDown