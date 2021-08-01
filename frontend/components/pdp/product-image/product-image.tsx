import React, { useState } from 'react';
import styles from './product-image.module.scss'

import MobileProductSlider from './mobileProductSlider/mobileProductSlider';
import DesktopProductImage from './desktopProductImages/desktopProductImage'

interface productImagesProps {
  productImages: Array<any>
}

const ProductImages = ({productImages} : productImagesProps) => {
  return (
    <> 
      <div className={styles.mobile}>
        <MobileProductSlider images={productImages} />
      </div>
      <div className={styles.desktop}>
        <DesktopProductImage images={productImages}  />
      </div>
    </>
  // <div className={`col-6@md col-12 container__row`}>
  //   <img src={urlFor(image).height(400).width(500).auto('format').url()} className="col-10@md col-12"/>
  //   <div className={`${styles.imageGrid} col-2@md`}>
  //     {productImages.map((currentImage, i) => <img src={urlFor(currentImage).height(100).width(100).auto('format').url()} className="" onClick={() => {setImage(currentImage)}} key={i}/>)}
  //   </div>
  // </div>
  )
};
  
export default ProductImages;