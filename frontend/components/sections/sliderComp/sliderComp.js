import RenderSections from './../../renderSections'; 
import styles from './sliderComp.module.scss';
import { useRef, useEffect, useState } from 'react'
import { getCurrentSlideWidth, scrollRightByOne, getVisibleSlideIndex } from './scrollUtilities'
import {debounce} from '../../../lib/debounce';


const SliderDot = ({index, currentSlide, ...props}) => {
  const classes = `${styles.dot} ${currentSlide ? styles.active : ''}`
  return (
    <div className={classes}>
      <span>{index + 1}</span>
    </div>
  )
}

const SlideComp = ({slides, timer}) => {
  const [currentSlide, setSlide] = useState(0)
  const slider = useRef(null)
  let interval

  const setTimer = () => {
    interval = setTimeout(() => {
      scrollRightByOne(slider)
    }, timer)
  }

  const onScrollEvent = () => {
    clearTimeout(interval)
    if (getVisibleSlideIndex(slider) >= 0) {
      setSlide(getVisibleSlideIndex(slider))

      if (timer) {
        setTimer()
      }
    }
  }

  useEffect(() => {
    if (timer) {
      setTimer()
    }
  }, [])
  
  const next = () => scrollRightByOne(slider)

  return (
    <div className={styles.slider}>
      <div className={styles.slides} ref={slider} onScroll={() => onScrollEvent()}>
        <RenderSections sections={slides} />
      </div>

      <div className={styles.slideDots}>
        {slides.map((slide, index) => <SliderDot key={index} index={index} currentSlide={index === currentSlide}/>)}
      </div>

      {currentSlide >= 0 ? currentSlide : ''}
    </div>
  )
}

export default SlideComp