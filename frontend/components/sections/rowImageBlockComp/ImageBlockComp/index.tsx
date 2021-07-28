import Block from 'lib/blockContent'
import urlFor from 'lib/image'
import srcSet from 'lib/srcset'

interface RowImageBlockProps {
  index: number, 
  blockComp: Array<any>
}

const ImageBlockComponent = ({index, image, blockContent, blockCompLength, className}) => {
  const imageBlockWidth: number = 1500 / blockCompLength
  const imageWidth = parseInt(image.hotspot.width * imageBlockWidth)
  const imageHeight = parseInt(image.hotspot.height * imageBlockWidth) 
  
  return (
    <div className={className}>
      <img src={urlFor(image).width(imageWidth).height(imageHeight).fit('fill').quality(30).auto('format').url()} width={imageWidth} height={imageHeight} loading={index < 2 ? 'eager' : 'lazy'}/>
      <Block blocks={blockContent} className="u-mar-t-md"/>
    </div>
  )
}

export default ImageBlockComponent