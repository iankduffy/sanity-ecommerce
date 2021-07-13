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