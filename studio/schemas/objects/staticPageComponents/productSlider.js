export default {
  name: "productSlider",
  type: "object",
  title: "Product Slider",
  fields: [
    {
      name: "title",
      type: "string", 
      title: "Title", 
    },
    {
      type: "array", 
      name: "products", 
      title: "Products", 
      of: [
        {
          type: 'reference', 
          name: 'product', 
          to: [{type: 'product'}]
        }
      ]
    }
  ]
}