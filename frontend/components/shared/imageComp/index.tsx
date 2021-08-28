import { url } from 'inspector';
import urlFor, {getImageDimensions, getCrop} from 'lib/image'; 
import srcSet from 'lib/srcset'

interface ImageProps {
  mobileImage: any, 
  minWidth: number, 
  maxWidth: number,
  desktopImage?: any, 
  isLazyLoaded: boolean, 
  alt: string, 
  metadata?: any
}

const ImageComp = ({
  mobileImage, 
  minWidth,
  maxWidth,
  desktopImage, 
  isLazyLoaded = true, 
  alt, 
  metadata
}: ImageProps) => {

  // ToDo: Add Preload Images 
  // ToDo: Calculate Height frrom Sanity\
  
  const {mobileWidth, mobileHeight} = getImageDimensions(mobileImage)

  const defaultMobileHeight = Math.floor((Math.floor(mobileHeight) / Math.floor(mobileWidth)) * minWidth)

  if (desktopImage) {
    return (
      <picture>
        {/* Desktop Image */}
        <source 
          media="(min-width: 738px)"
          width={minWidth}
          height={defaultMobileHeight}
          srcSet={srcSet(mobileImage, maxWidth, minWidth, mobileWidth, mobileHeight)}
          /> 
        {/* Mobile Image */}
        <img 
          src={urlFor(mobileImage).width(minWidth).height(defaultMobileHeight).fit('fill').quality(50).auto('format').url()}
          alt={alt}
          loading={isLazyLoaded ? 'lazy' : 'eager'}
          width={minWidth}
          height={defaultMobileHeight}
          srcSet={srcSet(mobileImage, maxWidth, minWidth, mobileWidth, mobileHeight)}
      />
      </picture>
    )
  }


  // if single image 
  // TODO: We need width and height
  return (
    <>
      <img 
        src={urlFor(mobileImage).width(minWidth).height(defaultMobileHeight).fit('fill').quality(50).auto('format').url()}
        alt={alt}
        loading={isLazyLoaded ? 'lazy' : 'eager'}
        width={minWidth}
        height={defaultMobileHeight}
        srcSet={srcSet(mobileImage, maxWidth, minWidth, mobileWidth, mobileHeight)}
      />
    </>
  )
}

export default ImageComp; 