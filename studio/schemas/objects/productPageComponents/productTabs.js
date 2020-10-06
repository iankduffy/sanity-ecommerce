export default {
  name: "productTabs",
  type: "object",
  title: "Product Tabs",
  fields: [
    {
      name: 'tabs',
      title: 'Tabs',
      description: '',
      type: 'array',
      of: 
      [
        {
          type: 'object',
          name: "tab",
          fields: [
           {
              name: 'title',
              type: 'string',
              title: 'Title',
            },
            {
              name: "blockContent",
              type: "blockContent", 
              title: "Content", 
            },    
            {
              name: 'image',
              type: 'image',
              title: 'image',
              options: {
                hotspot: true,
              }
            }
          ]
        }
      ]
    },
  ]
}