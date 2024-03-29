export default {
  name: 'product',
  title: 'Product',
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
        source: doc => `/product/${doc.title}`,
        slugify: input => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
    },
    {
      title: 'Default variant',
      name: 'defaultProductVariant',
      type: 'productVariant'
    },
    {
      title: 'Variants',
      name: 'variants',
      type: 'array',
      of: [
        {
          title: 'Variant',
          type: 'productVariant'
        }
      ]
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'string'
        }
      ],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'vendor',
      title: 'Vendor',
      type: 'reference',
      to: {type: 'vendor'}
    },
    {
      name: 'blurb',
      title: 'Blurb',
      type: 'localeString'
    },
    {
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: {type: 'category'}
        }
      ]
    },
    {
      name: 'details',
      title: 'Details',
      type: 'blockContent'
    }, 
    {
      name: 'features',
      title: 'Features',
      type: 'blockContent'
    }, 
    {
      name: 'delivery',
      title: 'Delivery Information',
      type: 'blockContent'
    }
  ],

  preview: {
    select: {
      title: 'title',
      manufactor: 'manufactor.title',
      media: 'defaultProductVariant.images[0]'
    }
  }
}
