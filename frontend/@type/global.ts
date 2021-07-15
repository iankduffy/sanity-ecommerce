import { BlockContentProps } from './block-content-to-react'

//  Site Settings
export interface SiteSettingProps {
  siteTitle: string,
  siteDesc: string,
  homePage: any, // Not sure what to add for this
  siteLogo: any, // Sanity Image Prop Needed
  logoText: string,
  footerText: string, 
  promotionText: string
}

// Nav Content 
export interface NavProps {
  title: number, 
  id: string, 
  navItems: Array<NavItemProps>
}

export interface NavItemProps {
  mainpage: NavRouteProps // Object to routes that needs writing
  dropdown: Array<NavRouteProps>, // Object 
  navContent: Array<any>
}

export interface NavRouteProps {
  route: string, 
  title: string
}

// Nav Content End

// Static Page 
export interface PageProps {
  title: string,
  content: Array<any>,
}
// Static Page End 

export interface brandsProps {
  brand: string
}

export interface CategoryProps {
  title: string, 
  slug: string, 
  description: string | any, 
  parents: Array<CategoryProps>, 
  brands: Array<brandsProps>
}

