// import React from 'react'
import myConfiguredSanityClient from './sanity'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(myConfiguredSanityClient)

function urlFor(source) {
  // console.log('echo')
  return builder.image(source)
}
 
export default urlFor