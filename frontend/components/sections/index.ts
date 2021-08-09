import dynamic from 'next/dynamic'

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
