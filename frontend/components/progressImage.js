import {useState, useEffect} from 'react'

const ProgressImage = ({imageUrl, previewUrl, alt, srcSetImages}) => {
  const [src, setSrc] = useState(previewUrl)
  const [loaded, setLoading] = useState(false)

  useEffect(() => {
    const imageToLoad = new Image()

    imageToLoad.onload = () => {
      setLoading(true)
      setSrc(imageUrl)
    }
    imageToLoad.src = imageUrl

  }, [imageUrl])
  
  return ( 
    <img className='col-12' src={src} srcSet={loaded ? srcSetImages : ''} alt={alt}/>
  )
}

export default ProgressImage