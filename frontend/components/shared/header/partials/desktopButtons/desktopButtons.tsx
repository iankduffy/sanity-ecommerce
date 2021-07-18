import { useState } from 'react'
import Link from 'next/link';
import dynamic from 'next/dynamic';
import SearchIcon from '../../../icons/search.js'
import WishListIcon from '../../../icons/wishlist'
import CartIcon from '../../../icons/cart'

const MiniBag = dynamic(() => import('components/cart/minibag'))

export const DesktopButtons = () => {
  const [minibagVisable, setMinibagVisable] = useState<boolean>(false)

  return (
  <div className="u-dis-flex o-flex-al-stretch u-hidden@md-down">
    <div className="u-mar-r-md u-flex-column u-space-evenly u-pad-v-md"><SearchIcon /> <span className="h6">Search</span></div>
    <Link href="/wishlist">
      <a className="u-mar-r-md u-flex-column u-space-evenly u-pad-v-md"><WishListIcon /><span className="h6">Wish List</span></a>
    </Link>
    <div className="u-flex-column u-space-evenly u-pad-v-md" onMouseEnter={() => {setMinibagVisable(true)}} onMouseLeave={() => {setMinibagVisable(false)}}>
      <CartIcon /> <span className="h6">MiniBag</span>
      {minibagVisable && <MiniBag />}
    </div>
  </div>
  )
}

