const client = require('./lib/sanity')

const isProduction = process.env.NODE_ENV === 'production'
const PageQuery = `
{
  "routes": *[_type == "routes"] {
    _type,
    ...,
    page->{
      _id,
      title,
      _createdAt,
      _updatedAt
  }}
}
`

const CategoriesQuery = `{"routes": *[_type == "category"] {
  ..., 
  slug {...}
  }
}
`

const ProductsQuery = `{"routes": *[_type == "product"] {
  ..., 
  slug {...}
  }
}
`

const reduceRoutes = (obj, route) => {
  // console.log({obj})
  // console.log({route})
  const {page = {}, slug = {}, _type = ''} = route
  // console.log({_type})
  const { _createdAt, _updatedAt} = page
  const path = route['slug']['current'] === '/' ? '/' : `/${route['slug']['current']}`
  // console.log({path})
  obj[path] = {
    query: {
      slug: slug.current
    },
    _createdAt,
    _updatedAt,
    page: `/StaticPages`
  }
  return obj
}

const reduceCategoriesRoutes = (obj, route) => {
  const {page = {}, slug = {}} = route
  console.log({slug})
  const { _createdAt, _updatedAt} = page
  const path = `/${route['slug']['current']}`
  // console.log({path})
  obj[path] = {
    query: {
      slug: slug.current
    },
    _createdAt,
    _updatedAt,
    page: '/category/[Categories]'
  }
  return obj
}

const reduceProductRoutes = (obj, route) => {

  const {page = {}, slug = {}} = route
  const { _createdAt, _updatedAt} = page

  console.log(route['slug']['current'])
  const path = `${route['slug']['current']}`
  // console.log({path})
  obj[path] = {
    query: {
      slug: slug.current
    },
    _createdAt,
    _updatedAt,
    page: '/product/[Product]'
  }
  return obj
}

module.exports = {
  trailingSlash: isProduction ? true : false,
  exportPathMap: async function () {
    const staticRoutes = await client.fetch(PageQuery)
    const categoryRoutes = await client.fetch(CategoriesQuery)
    const productRoutes = await client.fetch(ProductsQuery)

    let routes = staticRoutes.routes
    let categoriesRoutes = categoryRoutes.routes
    let productsRoutes = productRoutes.routes
    
    const nextRoutes = {
      ...routes.filter(({slug}) => slug.current).reduce(reduceRoutes, {}),
      ...categoriesRoutes.filter(({slug}) => slug.current).reduce(reduceCategoriesRoutes, {}),
      ...productsRoutes.filter(({slug}) => slug.current).reduce(reduceProductRoutes, {}),
    }

    return nextRoutes
  }
}