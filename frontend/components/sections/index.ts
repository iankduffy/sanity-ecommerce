import dynamic from 'next/dynamic'

export {default as hero} from './hero'
export {default as tabsComponents} from './tabsComponents'
export {default as inspiration} from './inspiration'
export {default as sixtyFortyComponent} from './SixtyFortyComponent'
export {default as productNavigation} from './productNavigation'
export {default as productFeatures} from './productFeatures'
export {default as productAddToBag} from './productAddToBag'
export {default as ctaSection} from './ctaSection'
export {default as productTabs} from './featureTabs/productTabs'
export {default as fullImageWithText} from './fullImageWithText'
export {default as heroImageWithOverlay} from './heroImageWithOverlay/heroImageWithOverlay'
export {default as sliderComp } from './sliderComp/sliderComp'
export {default as categoriesComponent } from './categoriesComponent/categoriesComponent'
export {default as productSlider } from './productSlider/productSlider'
export {default as blockContentComponent } from './blockContentComp/index'
export {default as rowImageBlockComp } from './rowImageBlockComp/index'


export const StaticPageComponents = {
  hero: dynamic(() => import(`./hero`)), 
  tabsComponents: dynamic(() => import(`./tabsComponents`)), 
  inspiration: dynamic(() => import(`./inspiration`)), 
  sixtyFortyComponent: dynamic(() => import('./SixtyFortyComponent')), 
  productNavigation: dynamic(()=> import('./productNavigation')), 
  productFeatures: dynamic(() => import('./productFeatures')), 
  productAddToBag: dynamic(() => import('./productAddToBag')), 
  ctaSection: dynamic(() => import('./ctaSection')), 
  productTabs: dynamic(() => import('./featureTabs/productTabs')), 
  fullImageWithText: dynamic(() => import('./fullImageWithText')), 
  heroImageWithOverlay: dynamic(() => import('./heroImageWithOverlay/heroImageWithOverlay')), 
  sliderComp: dynamic(() => import('./sliderComp/sliderComp')), 
  categoriesComponent: dynamic(() => import('./categoriesComponent/categoriesComponent')), 
  productSlider: dynamic(() => import('./productSlider/productSlider')), 
  blockContentComponent: dynamic(() => import('./blockContentComp')),
  rowImageBlockComp: dynamic(() => import('./rowImageBlockComp'))
}
