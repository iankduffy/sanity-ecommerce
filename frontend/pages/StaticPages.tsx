// import  {useEffect} from 'react'
import Layout from '../components/shared/layout/layout';
import groq from 'groq'
import sanity from '../lib/sanity';
import RenderSections from '../components/renderSections';

import { SiteSettingProps, NavProps, PageProps } from '@type/global'

import { siteSettingsQuery, mainMenuQuery, footerMenuQuery, homePageQuery, staticPageQuery } from '@query/global'

export interface StaticPageProps {
  staticPageContent: PageProps,
  siteSettings: SiteSettingProps, 
  mainMenu: NavProps, 
  footerMenu: NavProps, 
}

const StaticPage = ({mainMenu, staticPageContent, siteSettings, footerMenu} : StaticPageProps) => {
  return (
    <Layout mainMenu={mainMenu} siteSettings={siteSettings} footerMenu={footerMenu}>
      <RenderSections sections={staticPageContent.content}/>
    </Layout>
  )
}

StaticPage.getInitialProps = async ({query}) => {
  let { slug = "" } = query
  slug = slug.toLowerCase()


  if (!query) {
    console.error('no query')
    return
  }

  let staticPageContent

  if (slug && slug === '/') { 
    let data = await sanity.fetch(homePageQuery, {slug}) 
    staticPageContent = data.page
  } else if (slug && slug !== '/') {
    let data = await sanity.fetch(staticPageQuery, {slug}) 
    staticPageContent = data.page
  } else {
    
  }

  const mainMenu = await sanity.fetch(mainMenuQuery);
  const siteSettings = await sanity.fetch(siteSettingsQuery);
  // const footerMenu = await sanity.fetch(footerMenuQuery);

  return { 
    mainMenu,
    // footerMenu,
    staticPageContent,
    siteSettings,
  }
}

export default StaticPage
