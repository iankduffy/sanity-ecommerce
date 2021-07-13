export default {
  name: 'category',
  title: 'Category',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: doc => `/category/${doc.title}`,
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text'
    },
    {
      name: 'parents',
      title: 'Parent categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'category'}]
        }
      ]
    },
    {
      name: 'brands',
      title: 'Vendors categories',
      type: 'array',
      of: [
        {
          type: 'string',
          name: 'brands',
          title: 'Brands',
        }
      ]
    }
  ]
}
