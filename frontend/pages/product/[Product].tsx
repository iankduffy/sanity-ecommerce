import {useEffect, useState} from 'react'
import Layout from '../../components/shared/layout/layout';
import groq from 'groq'
import sanity from '../../lib/sanity';
import urlFor from '../../lib/image';
import ProductImage from '../../components/pdp/product-image'
import ProductForm from '../../components/pdp/product-form'
import Block from '../../lib/blockContent'

import { SiteSettingProps, NavProps } from '@type/global'
import { ProductProps } from '@type/productTypes'

import { siteSettingsQuery, mainMenuQuery, footerMenuQuery, ProductQuery } from '@query/global'

export interface ProductPageProps {
  siteSettings: SiteSettingProps, 
  mainMenu: NavProps, 
  footerMenu: NavProps,
  productInfo: ProductProps
}

const ProductPage = ({mainMenu, siteSettings, footerMenu, productInfo} : ProductPageProps) => {
  return (
  <Layout mainMenu={mainMenu} siteSettings={siteSettings} footerMenu={footerMenu}>
    <>
      <div className="u-dis-flex u-mar-v-md">
        <ProductImage productImages={productInfo?.defaultProductVariant?.images}/>
        <ProductForm product={productInfo} />
      </div>
      <div className="u-dis-flex u-mar-h-md">
        <Block className="col-6@md col-12" blocks={productInfo.body} />
      </div>
    </>
  </Layout>
  )
}

ProductPage.getInitialProps = async ({query}) => {
  let slug = `/product/${query.Product}`
  slug = slug.toLowerCase()

  if (!query) {
    console.error('no query')
    return
  }

  const productInfo = await sanity.fetch(ProductQuery, {slug});
  const mainMenu = await sanity.fetch(mainMenuQuery);
  const siteSettings = await sanity.fetch(siteSettingsQuery);
  const footerMenu = await sanity.fetch(footerMenuQuery);

  return { 
    mainMenu,
    footerMenu,
    siteSettings,
    productInfo
  }
}


export default ProductPage
