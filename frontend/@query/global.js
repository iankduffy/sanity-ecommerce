export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  ...
}`

export const mainMenuQuery = `*[_type == "nav" && id == "main-menu"][0] {
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


export const footerMenuQuery = `*[_type == "nav" && id == "footer-menu"][0] {
	navItems[] {
   text,
   "slug": page[]->[0].slug,
   ...
 	}
}`

export const homePageQuery = `*[_type == "siteSettings"][0] {
  "page": homePage -> {
    ...,
    content[] {
      ...,
      _type == "heroImageWithOverlay" => {
        ...,
        "metadata": image.asset->metadata.lqip
      },
      _type == "productSlider" => {
        products[]->{
          title, 
          "slug": slug.current,
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


export const staticPageQuery = `*[_type == "routes" && slug.current == $slug][0] {
  page-> {
    ...,
    content[] {
      ...,
      _type == "heroImageWithOverlay" => {
        ...,
        "metadata": image.asset->metadata.dimensions.aspectRatio
      }
      _type == "productSlider" => {
        products[]->{
          title, 
          "slug": slug.current,
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


export const ProductQuery = `*[_type == "product" && slug.current == $slug] {
  ...
}[0]`

export const CategoriesQuery = `
*[_type == "category" && slug.current == $slug] {
   _id,
   "categories": *[_type == 'category' && references(^._id)],
   title,
   description
 }[0]
`

export const CategoriesProductQuery = `
 *[_type == "product" && references($id)] {
   ...
 }
`