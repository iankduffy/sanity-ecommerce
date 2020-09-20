import { useContext, useState } from 'react';
import { CartContext } from '../context/cart-context'
// import DropDown from "../dropdown-input"
import Cookies from 'js-cookie' 
// import { WishlistContext } from '../../components/product-listing/context/wishlist-context'
// import { updatePrice } from '../../lib/cart-calucations'

const VarientsSelect = () => {
  return (
    <div></div>
  )
}


const ProductForm = ({product}) => {
  console.log({product})
  const [state, setState] = useContext(CartContext);
  // const [wishlist, setWishlist] = useContext(WishlistContext);
  // let selectedQTY = 1
  // let alreadyInCart = state.cart.products.find((cartItem) => cartItem.productId === product.id)

  let addToCart = () => {
    // // console.log({state})
    // if (alreadyInCart) {
    //   // console.log("in cart")
    //   mergeItem(alreadyInCart)
    // } else {
    //   let newProduct = {
    //     productId: product.id,
    //     qty: parseInt(selectedQTY),
    //     singlePrice: product.price 
    //   }

    //   let newProductList = [...state.cart.products, newProduct]
    //   setState({cart: { products: newProductList }, total: updatePrice(newProductList) })
    //   Cookies.set('cart', {cart: { products: newProductList }, total: updatePrice(newProductList) })
    // }
  }

  let mergeItem = (cartItem) => {
    cartItem.qty = Math.min((cartItem.qty + selectedQTY), 12)
    let newProductList = [...state.cart.products]
    
    setState({cart: { products: newProductList}, total: updatePrice(newProductList)})
    Cookies.set('cart', {cart: { products: newProductList}, total: updatePrice(newProductList)})
  }

  return (
    <div className="col-12">
      <div className="">
        <h3>{product.title}</h3>
        <p>{product?.blurb?.en}</p>
        {product?.variants && 
        <div>
          
        </div>
        }
        <div className="col-12"> 
          <button className="c-btn-product c-btn--dark" onClick={() => addToCart()}>Add To Bag</button>
        </div>
      </div>
    </div>
  )
};
  
export default ProductForm;