import {useEffect, useState} from 'react'
import Layout from '../../components/layout';
import groq from 'groq'
import sanity from '../../lib/sanity';
// import RenderSections from '../../components/renderSections';
import ProductListings from '../../components/plp/productListing';
import ProductFilters from '../../components/plp/filters';
import styles from '../../stylesheets/components/product/productListing.module.scss'


const Categories = ({mainMenu, siteSettings, footerMenu, categoriesInfo}) => {
  const [productData, setProductData] = useState([])
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(false)
    let id = categoriesInfo?._id

    async function fetchData() {
      return await sanity.fetch(CategoriesProductQuery, {id}).then(res => {
        setLoaded(true)
        setProductData(res)
      })
    }
    fetchData()
  }, [categoriesInfo])

  useEffect(() => {
    // console.log({productData})
  }, [productData])

  return (
  <Layout mainMenu={mainMenu} siteSettings={siteSettings} footerMenu={footerMenu}>
    <div className={styles.plpContainer}>
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
  let slug = `/category/${query.Categories}`
  slug = slug.toLowerCase()
  console.log({query})

  if (!query) {
    console.error('no query')
    return
  }

  // console.log({query})

  const mainMenu = await sanity.fetch(mainMenuQuery);
  const siteSettings = await sanity.fetch(siteSettingsQuery);
  // const footerMenu = await sanity.fetch(footerMenuQuery);
  const categoriesInfo = await sanity.fetch(CategoriesQuery, {slug});
  // console.log({categoriesInfo})

  return { 
    mainMenu,
    // footerMenu,
    siteSettings,
    categoriesInfo
  }
}

export default Categories
