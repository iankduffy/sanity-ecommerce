const client = require('./lib/sanity')

const isProduction = process.env.NODE_ENV === 'production'
const PageQuery = `
{
  "routes": *[_type == "routes"] {
    ...,
    page->{
      _id,
      title,
      _createdAt,
      _updatedAt
  }}
}
`

const reduceRoutes = (obj, route) => {
  const {page = {}, slug = {}} = route
  const { _createdAt, _updatedAt} = page
  const path = route['slug']['current'] === '/' ? '/' : `/${route['slug']['current']}`
  console.log({path})
  obj[path] = {
    query: {
      slug: slug.current
    },
    _createdAt,
    _updatedAt,
    page: '/StaticPages'
  }
  return obj
}

module.exports = {
  exportTrailingSlash: isProduction ? true : false,
  exportPathMap: async function () {
    return await client.fetch(PageQuery).then(res => {
      console.log(res)
      const {routes = []} = res
      // console.log(routes)
      const nextRoutes = {
        // Routes imported from sanity
        ...routes.filter(({slug}) => slug.current).reduce(reduceRoutes, {})
      }
      // console.log({nextRoutes})
      return nextRoutes
    })
  }
}