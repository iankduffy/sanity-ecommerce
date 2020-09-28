import urlFor from './image'

const srcSet = (image, width) => {
  let imageSrcSet = []

  for (let i = 400; i <= width; i -= 100) {
    let string = `${urlFor(image).width(i).quality(80).auto('format').url()} ${i}w`
    imageSrcSet.push(string)
  }

  return imageSrcSet.join(', ')
}

export default srcSet;