import urlFor from './image'

const srcSet = (image, width, startWidth = 400) => {
  let imageSrcSet = []

  for (let i = startWidth; i <= width; i += 100) {
    let string = `${urlFor(image).width(i).quality(80).auto('format').url()} ${i}w`
    imageSrcSet.push(string)
  }

  return imageSrcSet.join(', ')
}

export default srcSet;