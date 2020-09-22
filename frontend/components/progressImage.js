import {useState, useEffect} from 'react'
import srcSet from '../lib/srcset'

const ProgressImage = ({imageUrl, previewUrl, alt}) => {
  const [src, setSrc] = useState(previewUrl)

  useEffect(() => {
    const imageToLoad = new Image()

    imageToLoad.onload = () => {
      setSrc(imageUrl)
    }
    imageToLoad.src = imageUrl

  }, [imageUrl])
  
  return ( 
    <img className='col-12' src={src} alt={alt}/>
  )
}

export default ProgressImage