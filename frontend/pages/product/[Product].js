import {useEffect, useState} from 'react'
import Layout from '../../components/layout';
import groq from 'groq'
import sanity from '../../lib/sanity';
import urlFor from '../../lib/image';
import ProductForm from '../../components/pdp/product-form'

const ProductPage = ({mainMenu, siteSettings, footerMenu, productInfo}) => {
  console.log(productInfo)
  return (
  <Layout mainMenu={mainMenu} siteSettings={siteSettings} footerMenu={footerMenu}>
    <div className="u-dis-flex u-mar-v-md u-mar-h-md">
      <img src={urlFor(productInfo?.defaultProductVariant?.images[0]).height(400).width(500).auto('format').url()} />
      <ProductForm product={productInfo} />
    </div>
    <div className="u-dis-flex u-mar-v-md container">

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

const ProductQuery = `*[_type == "product" && slug.current == $slug] {
  ...
}[0]`

ProductPage.getInitialProps = async ({query}) => {
  let slug = `/product/${query.Product}`
  slug = slug.toLowerCase()
  console.log({query})

  if (!query) {
    console.error('no query')
    return
  }

  const mainMenu = await sanity.fetch(mainMenuQuery);
  const siteSettings = await sanity.fetch(siteSettingsQuery);
  const footerMenu = await sanity.fetch(footerMenuQuery);
  const productInfo = await sanity.fetch(ProductQuery, {slug});


  return { 
    mainMenu,
    footerMenu,
    siteSettings,
    productInfo
  }
}


export default ProductPage
