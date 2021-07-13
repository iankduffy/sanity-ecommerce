import React, { useState } from 'react';
import urlFor from '../../lib/image';
import srcSet from '../../lib/srcset';
import styles from '../../stylesheets/components/product/productPage.module.scss'

const ProductImages = ({productImages}) => {
  const [image, setImage] = useState(productImages[0]);

  return (
  <div className={`col-6@md col-12 container__row ${className}`}>
    <img src={urlFor(image).height(400).width(500).auto('format').url()} className="col-10@md col-12"/>
    <div className={`${styles.imageGrid} col-2@md`}>
      {productImages.map((currentImage, i) => <img src={urlFor(currentImage).height(100).width(100).auto('format').url()} className="" onClick={() => {setImage(currentImage)}} key={i}/>)}
    </div>
  </div>
  )
};
  
export default ProductImages;