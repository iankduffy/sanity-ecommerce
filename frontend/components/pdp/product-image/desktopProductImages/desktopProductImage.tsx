import urlFor from 'lib/image';
import srcSet from 'lib/srcset';
import styles from './desktopProductImage.module.scss'

const SliderImage = ({img}) => {
  return (
    <>
      <img src={urlFor(img).height(600).width(600).auto('format').url()} className={styles.slide}/>
    </>
  )
}

// Todo: First Gallery Image is the main image to reduce network requests
// Todo: add lazyload to slider images off screen 
// Todo: Add Preload for first images
// Todo: Merge Mobile and Desktop using CSS
const DesktopProductImage = ({images}) => {
  return (
    <div className={styles.container}>
      <div className={styles.sliderContainer}>
        {images.map((img, key: number) =>  <SliderImage img={img} key={key}/>)}
      </div>
      <div className={styles.imageGallery}>
        {images.map((img, key: number) => <img src={urlFor(img).height(150).width(150).auto('format').url()} width="150" height="150" key={key} className={styles.galleryImage}/>)}
      </div>
    </div>
  )
}

export default DesktopProductImage