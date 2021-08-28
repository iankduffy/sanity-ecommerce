import urlFor from './image'

const srcSet = (image, maxWidth, startWidth = 400, originalWidth, originalHeight) => {
  let imageSrcSet = []

  for (let i = startWidth; i <= maxWidth; i += 100) {
    let string
    if (originalWidth && originalHeight){
      const height = Math.floor((Math.floor(originalHeight) / Math.floor(originalWidth)) * i)
      string = `${urlFor(image).width(i).height(height).quality(30).auto('format').url()} ${i}w`
    } else {
      string = `${urlFor(image).width(i).quality(30).auto('format').url()} ${i}w`
    }
    
    imageSrcSet.push(string)
  }

  return imageSrcSet.join(', ')
}

export default srcSet;