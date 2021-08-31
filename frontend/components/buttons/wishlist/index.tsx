import WishListIcon from 'components/shared/icons/wishlist'
import { useWishlist } from 'components/context/wishlist/wishlist'

const AddToWishListBtn = ({product, currentVariant}) => {
  const { addToWishlist } = useWishlist()

  return (
    <button className="col-3" onClick={() => addToWishlist(product, currentVariant)}>
      <WishListIcon />
    </button>
  )
}

export default AddToWishListBtn