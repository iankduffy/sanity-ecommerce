import { useState } from 'react'
import Link from 'next/link';
import MiniBag from '../../../../minibag/minibag'
import SearchIcon from '../../../icons/search.js'
import WishListIcon from '../../../icons/wishlist'
import CartIcon from '../../../icons/cart'

export const DesktopButtons = () => {
  const [minibagVisable, setMinibagVisable] = useState<boolean>(false)

  return (
  <div className="u-dis-flex o-flex-al-stretch u-hidden@md-down">
    <div className="u-mar-r-md u-flex-column u-space-evenly"><SearchIcon /> <span className="h6">Search</span></div>
    <Link href="/wishlist">
      <a className="u-mar-r-md u-flex-column u-space-evenly"><WishListIcon /><span className="h6">Wish List</span></a>
    </Link>
    <div className="u-flex-column u-space-evenly" onMouseEnter={() => {setMinibagVisable(true)}} onMouseLeave={() => {setMinibagVisable(false)}}>
      <CartIcon /> <span className="h6">MiniBag</span>
      {minibagVisable && <MiniBag />}
    </div>
  </div>
  )
}

