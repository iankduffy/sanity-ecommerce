import styles from '../../stylesheets/components/staticPages/sixtyFortyCompoent.module.scss'
import urlFor from '../../lib/image'
import srcSet from '../../lib/srcset'
import Block from '../../lib/blockContent'
import {useState} from 'react'


const Video = ({...props}) => {
  return(
    <iframe>

    </iframe>
  )
}

const VideoButton = ({videoPlaying, setVideoPlaying, ...props}) => {
  
  return (
    <button onClick={(e) => setVideoPlaying(!videoPlaying)}>
      {videoPlaying.toString()}
    </button>
  )
}

const SixtyFortyComponent = ({image, blockContent, video}) => {
  const [videoPlaying, setVideoPlaying] = useState(false)



  return (
    <section className={styles.container}>
      <div className={styles.blockContent}>
        <Block className='' blocks={blockContent} />
        {video && <VideoButton videoPlaying={videoPlaying} setVideoPlaying={setVideoPlaying} />}
        {videoPlaying.toString()}
      </div>
      <div className={styles.image}>

        <img loading="lazy" srcSet={srcSet(image, 700)} src={urlFor(image).width(700).auto('format')} alt=""/>
      </div>
    </section>
  )
}


export default SixtyFortyComponent;