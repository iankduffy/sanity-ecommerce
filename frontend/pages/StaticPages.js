import {useEffect} from 'react'
import Layout from '../components/layout';
import groq from 'groq'
import sanity from '../lib/sanity';
import RenderSections from '../components/renderSections';

const StaticPage = ({mainMenu, staticPageContent, siteSettings, footerMenu}) => {

  return (
  <Layout mainMenu={mainMenu} siteSettings={siteSettings} footerMenu={footerMenu}>
    <RenderSections sections={staticPageContent.page.content}/>
  </Layout>
  )
}

const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  ...
}`

const mainMenuQuery = `*[_type == "nav" && id == "main-menu"][0] {
	navItems[] {
   text,
   "item": page[] {
			...,
    	"slug": route->slug
    },
 	}
}`

 const footerMenuQuery = `*[_type == "nav" && id == "footer-menu"][0] {
	navItems[] {
   text,
   "slug": page[]->[0].slug,
   ...
 	}
 }`

const staticPageQuery = `*[_type == "routes" && slug.current == $slug][0] {
  page-> {
    ...,
    content[] {
      ...
    }
  }
}`

const homePageQuery = `*[_type == "siteSettings"][0] {
  "page": homePage -> {
    ...,
    content[] {
      ...,
    }
  }
}`

StaticPage.getInitialProps = async ({query}) => {
  let { slug = "" } = query
  slug = slug.toLowerCase()

  if (!query) {
    console.error('no query')
    return
  }

  let staticPageContent

  if (slug && slug === '/') { 
    staticPageContent = await sanity.fetch(homePageQuery, {slug})
  } else if (slug && slug !== '/') {
    staticPageContent = await sanity.fetch(staticPageQuery, {slug})
  } else {
    
  }

  const mainMenu = await sanity.fetch(mainMenuQuery);
  const siteSettings = await sanity.fetch(siteSettingsQuery);
  const footerMenu = await sanity.fetch(footerMenuQuery);

  return { 
    mainMenu,
    footerMenu,
    staticPageContent,
    siteSettings,
  }
}

export default StaticPage
