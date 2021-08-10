import urlFor, {getImageDimensions} from 'lib/image'; 
import srcSet from 'lib/srcset'

interface ImageProps {
  mobileImage: any, 
  width: string, 
  height: string,
  desktopImage: any, 
  isLazyLoaded: boolean, 
  alt: string
}

const ImageComp = ({
  mobileImage, 
  width, 
  height, 
  desktopImage, 
  isLazyLoaded, 
  alt
}: ImageProps) => {

  if (desktopImage) {
    return (
      <picture>
        {/* Desktop Image */}
        <source /> 
        {/* Mobile Image */}
        <img />
      </picture>
    )
  }

  // if single image 
  return (
    <>
      <img />
    </>
  )
}

export default ImageComp; 