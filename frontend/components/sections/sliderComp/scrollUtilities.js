export const getCurrentSlideWidth = (sliderRef) => {
  if (sliderRef.current) {
    const slides = Array.from(sliderRef.current.children)
    return slides.length > 0 ? slides[0].offsetWidth : 500
  }
}

export const getVisibleSlideIndex = (sliderRef) => {
  if (sliderRef.current) {
    const scrollLeft = sliderRef.current.scrollLeft
    const slides = Array.from(sliderRef.current.children)
    return slides.findIndex((slide) => slide.offsetLeft === scrollLeft)
  }
}

export const lastSlide = (sliderRef) => {
  const currentSlide = getVisibleSlideIndex(sliderRef)
  const slides = Array.from(sliderRef.current.children) 
  return currentSlide == slides.length - 1
}

export const firstSlide = (sliderRef) => {
  const currentSlide = getVisibleSlideIndex(sliderRef)
  return currentSlide == 0
}

export const scrollToSlideAtIndex = (sliderRef, selectedIndex) => {
  if (sliderRef.current) {
    sliderRef.current.scrollLeft = selectedIndex * getCurrentSlideWidth(sliderRef)
  }
}

export const scrollRightByOne = (sliderRef) => {
  if (sliderRef.current) {
    if (lastSlide(sliderRef)) {
      scrollToSlideAtIndex(sliderRef, 0)
    } else {
      sliderRef.current.scrollLeft += getCurrentSlideWidth(sliderRef)
    }
  }
}

export const scrollLeftByOne = (sliderRef) => {
  const slides = Array.from(sliderRef.current.children) 

  if (sliderRef) {
    if (firstSlide(sliderRef)) {
      scrollToSlideAtIndex(sliderRef, slides.length - 1)
    } else {
      sliderRef.current.scrollLeft += getCurrentSlideWidth(sliderRef)
    }
  }
}