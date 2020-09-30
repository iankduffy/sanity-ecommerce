export default {
  name: "productAddToBag",
  type: "object",
  title: "Product Add To Bag Section",
  fields: [
    {
      type: "reference",
      name: "product",
      to: [
        {type: 'product'},
      ]
    }
  ]
}