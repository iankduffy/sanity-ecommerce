import {useEffect, useState} from 'react'
import Layout from '../../components/layout';
import groq from 'groq'
import sanity from '../../lib/sanity';
// import RenderSections from '../../components/renderSections';
import ProductListings from '../../components/plp/productListing';
import ProductFilters from '../../components/plp/filters';

export default function Categories(props) {
  const [productData, setProductData] = useState([])
  const [loaded, setLoaded] = useState(false)


  
  console.log({props})
  // let id = category._id

  // useEffect(() => {
  //   async function fetchData() {
  //     return await sanity.fetch(CategoriesProductQuery, {id}).then(res => {
  //       setLoaded(true)
  //       setProductData(res)
  //     })
  //   }
  //   fetchData()
  // }, [])

  useEffect(() => {
    // console.log({productData})
  }, [productData])

  return (
  // <Layout mainMenu={mainMenu} siteSettings={siteSettings} footerMenu={footerMenu}>
  //   <div className="u-dis-flex">
  //     <ProductFilters/> 
  //     {loaded ? <ProductListings productsData={productData} /> : 'loading'}
  //   </div>
  // </Layout>
  <div></div>
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

 const CategoryQuery = `
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

// Categories.getInitialProps = async({query}) => {
//   // let { slug = "" } = query
//   // slug = slug.toLowerCase()

//   // if (!query) {
//   //   console.error('no query')
//   //   return
//   // }

//   console.log({query})

//   const mainMenu = await sanity.fetch(mainMenuQuery);
//   const siteSettings = await sanity.fetch(siteSettingsQuery);
//   const footerMenu = await sanity.fetch(footerMenuQuery);
//   // const categories = await sanity.fetch(CategoryQuery, {asPath});

//   return { 
//     mainMenu,
//     footerMenu,
//     siteSettings,
//     // categories
//   }
// }

const CategoriesQuery = `*[_type == "category"] {
  slug
  }
`

export async function getStaticProps({params}) {
  // const slug = params.slug.current

  // console.log({slug})

  const mainMenu = await sanity.fetch(mainMenuQuery);
  const siteSettings = await sanity.fetch(siteSettingsQuery);
  const footerMenu = await sanity.fetch(footerMenuQuery);
  // const categoryInfo = await sanity.fetch(CategoryQuery, {slug});
  
  return {
    props: {
      mainMenu,
      siteSettings,
      footerMenu,
      params
      // categoryInfo
    },
  }
}

export async function getStaticPaths() {
  const allCategories = await sanity.fetch(CategoriesQuery);
  console.log(allCategories[0])

  const data = allCategories?.map((category) => ({
    params: {
      category: category.slug,
    },
  }))

  return {
    paths: [
      ...data
    ],
    fallback: true,
  }
}


// export default Categories
