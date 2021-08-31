import urlFor, {getImageDimensions} from 'lib/image'; 
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
  
  const { width , height } = getImageDimensions(mobileImage)

  const defaultheight = Math.floor((Math.floor(height) / Math.floor(width)) * minWidth)

  if (desktopImage) {
    return (
      <picture>
        {/* Desktop Image */}
        <source 
          media="(min-width: 738px)"
          width={minWidth}
          height={defaultheight}
          srcSet={srcSet(mobileImage, maxWidth, minWidth, width, height)}
          /> 
        {/* Mobile Image */}
        <img 
          src={urlFor(mobileImage).width(minWidth).height(defaultheight).fit('fill').quality(50).auto('format').url()}
          alt={alt}
          loading={isLazyLoaded ? 'lazy' : 'eager'}
          width={minWidth}
          height={defaultheight}
          srcSet={srcSet(mobileImage, maxWidth, minWidth, width, height)}
      />
      </picture>
    )
  }


  // if single image 
  // TODO: We need width and height
  return (
    <>
      <img 
        src={urlFor(mobileImage).width(minWidth).height(defaultheight).fit('fill').quality(50).auto('format').url()}
        alt={alt}
        loading={isLazyLoaded ? 'lazy' : 'eager'}
        width={minWidth}
        height={defaultheight}
        srcSet={srcSet(mobileImage, maxWidth, minWidth, width, height)}
      />
    </>
  )
}

export default ImageComp; 