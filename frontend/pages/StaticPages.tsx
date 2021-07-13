// import  {useEffect} from 'react'
import Layout from '../components/layout/layout';
import groq from 'groq'
import sanity from '../lib/sanity';
import RenderSections from '../components/renderSections';

import { SiteSettingProps, NavProps, PageProps } from '@type/global'

export interface StaticPageProps {
  staticPageContent: PageProps,
  siteSettings: SiteSettingProps, 
  mainMenu: NavProps, 
  footerMenu: NavProps, 
}

const StaticPage = ({mainMenu, staticPageContent, siteSettings, footerMenu} : StaticPageProps) => {
  console.log(staticPageContent)
  return (
  <Layout mainMenu={mainMenu} siteSettings={siteSettings} footerMenu={footerMenu}>
    <RenderSections sections={staticPageContent.content}/>
  </Layout>
  )
}

const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  ...
}`

const mainMenuQuery = `*[_type == "nav" && id == "main-menu"][0] {
	navItems[] {
    mainpage {
      title,
      "route": route->slug.current
    },
  "dropdown": dropdownNav[] {
			title,
      "slug": route->slug, 
    },
    navContent
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
      ...,
      _type == "productSlider" => {
        products[]->{
          title, 
          slug,
          defaultProductVariant
        }
      },
      _type == "inspiration" => {
        products[]->{
          ...
        }
      }, 
      _type == "productNavigation" => {
        product->{
          title, 
          "price": defaultProductVariant.price, 
        },
        ...,
      },
      _type == "productAddToBag" => {
        product->{
          ...
        },
      }
    }
  }
}`

const homePageQuery = `*[_type == "siteSettings"][0] {
  "page": homePage -> {
    ...,
    content[] {
      ...,
      _type == "productSlider" => {
        products[]->{
          title, 
          slug,
          defaultProductVariant
        }
      },
      _type == "inspiration" => {
        products[]->{
          ...
        }
      }, 
      _type == "productNavigation" => {
        product->{
          title, 
          "price": defaultProductVariant.price, 
        }
      },
      _type == "productAddToBag" => {
        product->{
          ...
        },
      }
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
    let data = await sanity.fetch(homePageQuery, {slug}) 
    staticPageContent = data.page
  } else if (slug && slug !== '/') {
    let data = await sanity.fetch(homePageQuery, {slug}) 
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
