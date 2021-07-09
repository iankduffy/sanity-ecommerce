export default {
  name: "productNavigation",
  type: "object",
  title: "Product Navigation",
  fields: [
    {
      type: "reference",
      name: "product",
      to: [
        {type: 'product'},
      ]
    },
    {
      type: "array", 
      name: "tabs", 
      title: "Tabs", 
      of: [
        {
          type: 'object',
          name: "tab",
          fields: [
            {
              name: "anchorLink",
              type: 'string',
              title: "Link To Component"
            },
            {
              name: 'text',
              type: 'string',
              title: 'Text for Link',
            },
          ]
        }
      ]
    }
  ]
}