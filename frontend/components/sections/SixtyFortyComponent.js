import styles from '../../stylesheets/components/staticPages/sixtyFortyCompoent.module.scss'
import urlFor from '../../lib/image'
import srcSet from '../../lib/srcset'
import Block from '../../lib/blockContent'
import {useState} from 'react'
import YouTube from 'react-youtube';


const Video = ({videoId}) => {
  
  const onReady = (e) => {
    e.target.playVideo()
  }

  return(
    <YouTube 
      className="u-pos-abs col-12 u-height-100"
      onReady={(e) => onReady(e)}
      videoId={videoId}
    />
  )
}

const VideoButton = ({videoPlaying, setVideoPlaying, ...props}) => {
  return (
    <button className="c-btn--video u-mar-t-sm" onClick={(e) => setVideoPlaying(!videoPlaying)}>
      {videoPlaying ? 'Stop Video' : 'Play Video'}
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
      </div>
      <div className={styles.image}>
        <img loading="lazy" srcSet={srcSet(image, 700)} src={urlFor(image).width(700).auto('format')} alt=""/>
        {videoPlaying && <Video className="u-pos-abs col-12 u-height-100" videoId={video} /> }
      </div>
    </section>
  )
}


export default SixtyFortyComponent;