export default {
  name: "productFeatures",
  type: "object",
  title: "Product Feature",
  fields: [
    {
      name: "blockContent",
      type: "blockContent", 
      title: "Content", 
    },
    {
      type: "array", 
      name: "features", 
      title: "Features", 
      of: [
        {
          type: 'object',
          name: "feature",
          fields: [
            {
              name: "blockContent",
              type: "blockContent", 
              title: "Content", 
            },
          ]
        }
      ]
    }
  ]
}