// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import nav from './documents/nav'
import routes from './documents/routes'
import siteSettings from './documents/siteSettings'
import pages from './documents/staticPages'
import category from './documents/category'
import product from './documents/product'
import vendor from './documents/vendor'

import blockContent from './objects/blockContent'
import blockButton from './objects/blockButton'
import productVariant from './objects/productVariant'
import navItem from './objects/navItem'
import hero from './objects/hero'
import tabsComponents from './objects/tabsComponents'
import inspirationComponent from './objects/inspirationComponent'
import sixtyFortyComponent from './objects/sixtyFortyComponet'

import articleLink from './objects/navComponents/articleLink'

import productNavigation from './objects/staticPageComponents/productNavigation'
import productFeatures from './objects/staticPageComponents/productFeatures'
import productAddToBag from './objects/staticPageComponents/productAddToBag'
import productTabs from './objects/staticPageComponents/productTabs'
import ctaSection from './objects/staticPageComponents/ctaSection'
import fullImageWithText from './objects/staticPageComponents/fullImageWithText'
import heroImageWithOverlay from './objects/staticPageComponents/heroImageWithOverlay'
import categoriesComponent from './objects/staticPageComponents/categoriesComponent'
import productSlider from './objects/staticPageComponents/productSlider'
import blockContentComponent from './objects/staticPageComponents/blockComponent'

import sliderComp from './objects/staticPageComponents/sliderComp'

import blockGroup from './block/buttonGroup'

import localeString from './locale/String'
import localeText from './locale/Text'
import localeBlockContent from './locale/BlockContent'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    articleLink,
    blockGroup,
    nav,
    routes,
    siteSettings,
    product,
    vendor,
    category,
    pages,
    productFeatures,
    productAddToBag,
    navItem,
    productTabs,
    hero,
    productNavigation,
    tabsComponents,
    inspirationComponent,
    sixtyFortyComponent,
    blockButton,
    fullImageWithText,
    ctaSection,
    heroImageWithOverlay,
    sliderComp,
    categoriesComponent,
    productSlider,
    blockContentComponent,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    localeText,
    localeBlockContent,
    localeString,
    productVariant
  ])
})
