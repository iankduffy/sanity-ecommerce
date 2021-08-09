import myConfiguredSanityClient from './sanity'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(myConfiguredSanityClient)

function urlFor(source) {

  return builder.image(source)
}
 
export default urlFor

const pattern = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/

export const getImageDimensions = ({asset}) => {
  const [, assetId, dimensions, format] = pattern.exec(asset._ref)

  const [width, height] = dimensions.split("x").map(v => parseInt(v, 10))

  return {
    width, 
    height
  }
}