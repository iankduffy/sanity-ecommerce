import urlFor from 'lib/image';
import srcSet from 'lib/srcset';
import styles from './desktopProductImage.module.scss'

const SliderImage = ({img}) => {
  return (
    <>
      <img src={urlFor(img).height(400).width(500).auto('format').url()} className={styles.slide}/>
    </>
  )
}

const DesktopProductImage = ({images}) => {
  return (
    <div>
      <div className={styles.sliderContainer}>
        {images.map((img, key: number) =>  <SliderImage img={img} key={key}/>)}
      </div>
      <div className={styles.imageGallery}>
        {images.map((img, key: number) => <img src={urlFor(img).height(350).width(350).auto('format').url()} width="350" height="350" key={key} className={styles.galleryImage}/>)}
      </div>
    </div>
  )
}

export default DesktopProductImage