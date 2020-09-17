import {useEffect, useState} from 'react'
import Layout from '../../components/layout';
import groq from 'groq'
import sanity from '../../lib/sanity';
import RenderSections from '../../components/renderSections';
import ProductListings from '../../components/plp/ProductListing';
import ProductFilters from '../../components/plp/filters';



const ProductPage = ({mainMenu, siteSettings, footerMenu}) => {
  const [productData, setProductData] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    console.log({productData})
  }, [productData])

  return (
  <Layout mainMenu={mainMenu} siteSettings={siteSettings} footerMenu={footerMenu}>
    Product
  </Layout>
  // <div>Hello</div>
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

const CategoriesProductQuery = `
  *[_type == "product" && references($id)] {
    ...
  }
`

ProductPage.getInitialProps = async ({query}) => {
  let { slug = "" } = query
  slug = slug.toLowerCase()
  console.log({query})

  if (!query) {
    console.error('no query')
    return
  }

  const mainMenu = await sanity.fetch(mainMenuQuery);
  const siteSettings = await sanity.fetch(siteSettingsQuery);
  const footerMenu = await sanity.fetch(footerMenuQuery);

  return { 
    mainMenu,
    footerMenu,
    siteSettings
  }
}


export default ProductPage
