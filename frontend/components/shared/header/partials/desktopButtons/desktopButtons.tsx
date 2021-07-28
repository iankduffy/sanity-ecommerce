import { useState } from 'react'
import Link from 'next/link';
import SearchIcon from '../../../icons/search.js'
import WishListIcon from '../../../icons/wishlist'
import CartIcon from '../../../icons/cart'

import dynamic from 'next/dynamic';
const MiniBag = dynamic(() => import('components/cart/minibag/minibag'))

export const DesktopButtons = () => {
  const [minibagVisible, setMinibagVisible] = useState<boolean>(false)

  return (
  <div className="u-dis-flex o-flex-al-stretch u-hidden@md-down">
    <div className="u-mar-r-md u-flex-column u-space-evenly u-pad-v-md"><SearchIcon /> <span className="h6">Search</span></div>
    <Link href="/wishlist">
      <a className="u-mar-r-md u-flex-column u-space-evenly u-pad-v-md"><WishListIcon /><span className="h6">Wish List</span></a>
    </Link>
    <div className="u-flex-column u-space-evenly u-pad-v-md" onMouseEnter={() => {setMinibagVisible(true)}} onMouseLeave={() => {setMinibagVisible(false)}}>
      <CartIcon /> <span className="h6">MiniBag</span>
      {minibagVisible && <MiniBag />}
    </div>
  </div>
  )
}

