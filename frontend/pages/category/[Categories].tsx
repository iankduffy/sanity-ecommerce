import {useEffect, useState} from 'react'
import Layout from '../../components/shared/layout/layout';
import groq from 'groq'
import sanity from '../../lib/sanity';
// import RenderSections from '../../components/renderSections';
import ProductListings from '../../components/plp/productListing';
import ProductFilters from '../../components/plp/filters';
import styles from '../../stylesheets/components/product/productListing.module.scss'

import { SiteSettingProps, NavProps, CategoryProps } from '@type/global'

import { siteSettingsQuery, mainMenuQuery, footerMenuQuery, CategoriesQuery, CategoriesProductQuery } from '@query/global'

export interface CategoryPageProps {
  mainMenu: NavProps, 
  siteSettings: SiteSettingProps, 
  footer: NavProps, 
  categoriesInfo: CategoryProps
}

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
