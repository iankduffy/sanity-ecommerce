import React, { useState } from 'react';
import urlFor from 'lib/image';
import srcSet from 'lib/srcset';
import styles from './mobileProductSlider.module.scss'

{/* <img src={urlFor(image).height(400).width(500).auto('format').url()} className="col-10@md col-12"/> */}

const SliderImage = ({img}) => {
  return (
    <>
      <img src={urlFor(img).height(400).width(500).auto('format').url()} className={styles.slide}/>
    </>
  )

}

const MobileProductSlider = ({images}) => {
  return (
    <div>
      <div className={styles.sliderContainer}>
        {images.map((img, key: number) =>  <SliderImage img={img} key={key}/>)}
      </div>
      <div className={styles.imageGallery}>
        {images.map((img, key: number) => <img src={urlFor(img).height(150).width(150).auto('format').url()} width="150" height="150" key={key} className={styles.galleryImage}/>)}
      </div>
    </div>
  )
}

export default MobileProductSlider 