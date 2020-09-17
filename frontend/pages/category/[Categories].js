import {useEffect, useState} from 'react'
import Layout from '../../components/layout';
import groq from 'groq'
import sanity from '../../lib/sanity';
// import RenderSections from '../../components/renderSections';
import ProductListings from '../../components/plp/ProductListing';
import ProductFilters from '../../components/plp/filters';

const Categories = ({mainMenu, siteSettings, footerMenu, categories}) => {
  const [productData, setProductData] = useState([])
  const [loaded, setLoaded] = useState(false)

  const id = categories._id

  useEffect(() => {
    async function fetchData() {
      return await sanity.fetch(CategoriesProductQuery, {id}).then(res => {
        setLoaded(true)
        setProductData(res)
      })
    }
    fetchData()
  }, [])

  useEffect(() => {
    console.log({productData})
  }, [productData])

  return (
  <Layout mainMenu={mainMenu} siteSettings={siteSettings} footerMenu={footerMenu}>
    <div className="u-dis-flex">
      <ProductFilters/> 
      {loaded ? <ProductListings productsData={productData} /> : 'loading'}
    </div>
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

 const CategoriesQuery = `
 *[_type == "category" && slug.current == $slug] {
    _id,
    "categories": *[_type == 'category' && references(^._id)],
    title,
    description
  }[0]
`

const CategoriesProductQuery = `
  *[_type == "product" && references($id)] {
    ...
  }
`

Categories.getInitialProps = async({query}) => {
  let { slug = "" } = query
  slug = slug.toLowerCase()
  console.log({query})

  if (!query) {
    console.error('no query')
    return
  }

  console.log({query})

  const mainMenu = await sanity.fetch(mainMenuQuery);
  const siteSettings = await sanity.fetch(siteSettingsQuery);
  const footerMenu = await sanity.fetch(footerMenuQuery);
  const categories = await sanity.fetch(CategoriesQuery, {slug});

  return { 
    mainMenu,
    footerMenu,
    siteSettings,
    categories
  }
}


export default Categories
