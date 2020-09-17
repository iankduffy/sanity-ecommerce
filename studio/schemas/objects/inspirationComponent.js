export default {
  name: "inspiration",
  type: "object",
  title: "Inspiration Component",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading"
    },
    {
      name: "paragraph",
      type: "blockContent",
      title: "Paragraph"
    }, 
    {
      name: 'page',
      title: 'Page',
      description: 'Select the page that this route should point to. If more than one link is present it will use a drop down using the Text for dropdown',
      type: 'array',
      of: [{
          type: 'object',
          name: "items",
          fields: [
            {
              name: "route",
              type: 'string',
              title: "Page Url to "
            },{
              name: 'title',
              type: 'string',
              title: 'Text for Link',
            },
            {
              name: 'image',
              type: 'image',
              title: 'image',
              options: {
                hotspot: true,
              }
            }, 
          ]
        }
      ]
    }, {
      name: "products",
      title: 'Products',
      type: 'array',
      of: [{
          type: 'reference',
          to: { type: 'product' },
      }]
    },
    {
      name: 'id', 
      type: 'string',
      title: "Component ID", 
      description: 'Used for in page links'
    }
  ]
};