// import {useState, useEffect} from 'react'

// const ProgressImage = ({imageUrl, previewUrl, alt, srcSetImages}) => {
//   // const [src, setSrc] = useState(previewUrl)
//   const [imageLoaded, setImageLoaded] = useState(false)

//   // console.log(imageLoaded)
  
//   return ( 
//     <div className="u-pos-relative">
//       <img className=' col-12' src={imageUrl} srcSet={srcSetImages} alt={alt}
//         style={{ opacity: imageLoaded ? "1" : "0" }}
//         onLoad={() => setImageLoaded(true)}
//       />
//       <img className='col-12 u-pos-abs' src={previewUrl} alt={alt}
//         style={{ opacity: imageLoaded ? "0" : "1" }}
//       />
//     </div>
//   )
// }

// export default ProgressImage