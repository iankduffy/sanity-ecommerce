import urlFor, {getImageDimensions} from 'lib/image'; 
import srcSet from 'lib/srcset'

interface ImageProps {
  mobileImage: any, 
  width?: string, 
  height?: string,
  desktopImage?: any, 
  isLazyLoaded: boolean, 
  alt: string
}

const ImageComp = ({
  mobileImage, 
  width, 
  height, 
  desktopImage, 
  isLazyLoaded = true, 
  alt
}: ImageProps) => {

  // ToDo: Add Preload Images 

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
  // TODO: We need width and height
  return (
    <>
      <img 
        src={urlFor(mobileImage).fit('fill').quality(30).auto('format').url()}
        alt={alt}
        loading={isLazyLoaded ? 'lazy' : 'eager'}
      />
    </>
  )
}

export default ImageComp; 