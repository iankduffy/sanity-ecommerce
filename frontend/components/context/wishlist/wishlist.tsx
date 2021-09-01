import { createContext, useState, useContext } from 'react';
import Cookies from 'js-cookie'  

export const WishlistContext = createContext([{}, () => {}]); 

export const useWishlist = () => {
  const [wishList, setWishlist] = useContext(WishlistContext)

  const getWishlist = () => wishList

  const addToWishlist = (product, currentVariant) => {
    const item = {
      product: product._id, 
      currentVariant: {
        image: currentVariant.image[0], 
        price: currentVariant.price, 
        title: currentVariant.title
      }
    }

    // Todo Fix this
    // let newWishList = [...wishList.products, item]
    // setWishlist({products: newWishList })
    // Cookies.set('wishlist', { products: newWishList })
  }

  const removeFromWishlist = () => {
    // Remove Item from wishlist
  }

  const isInWishlist = () => {
    // Todo: Compare current wishlist with product
  }

  return { getWishlist, addToWishlist, removeFromWishlist, isInWishlist}
}

export const WishlistContextProvider = (props) => {
  const [wishlist, setWishlist] = useState(Cookies.getJSON('wishlist', { products: [] }) || { products: [] });

  return (
    <WishlistContext.Provider value={[wishlist, setWishlist]}>
      {props.children}
    </WishlistContext.Provider>
  );
}
