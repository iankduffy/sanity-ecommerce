import Layout from '../components/shared/layout/layout';
import groq from 'groq'
import sanity from '../lib/sanity';

import { SiteSettingProps, NavProps } from '@type/global'

import { siteSettingsQuery, mainMenuQuery, footerMenuQuery } from '@query/global'

export interface StaticPageProps {
  siteSettings: SiteSettingProps, 
  mainMenu: NavProps, 
  footerMenu: NavProps, 
}


const WishListPage = ({mainMenu, siteSettings, footerMenu}) => {
  return (
    <Layout mainMenu={mainMenu} siteSettings={siteSettings} footerMenu={footerMenu}>
      <p>Wishlist</p>
    </Layout>
  )
}

WishListPage.getInitialProps = async ({query}) => {
  let { slug = "" } = query
  slug = slug.toLowerCase()

  if (!query) {
    console.error('no query')
    return
  }

  const mainMenu = await sanity.fetch(mainMenuQuery);
  const siteSettings = await sanity.fetch(siteSettingsQuery);

  return { 
    mainMenu,
    siteSettings,
  }
}

export default WishListPage