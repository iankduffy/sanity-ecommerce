import { BlockContentProps } from './block-content-to-react'

export interface SiteSettingProps {
  siteTitle: string,
  siteDesc: string,
  homePage: any, // Not sure what to add for this
  siteLogo: any, // Sanity Image Prop Needed
  logoText: string,
  footerText: string, 
  promotionText: string
}

export interface NavProps {
  title: number, 
  id: string, 
  navItems: Array<any>
}

export interface PageProps {
  title: string,
  content: Array<any>,
}

export interface ProductProps {
  title: string, 
  slug: string, 
  productVariant: any,
  defaultProductVariant: any, // Need to add variants
  variants: Array<any>,
  tags: Array<string>, 
  vendor: any, 
  blurb: any,
  categories: Array<any>, 
  body: any // Bug: Type 'BlockContentProps' is not assignable to type 'string'.
}

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