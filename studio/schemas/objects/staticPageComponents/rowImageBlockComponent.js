export default {
  name: "rowImageBlockComp",
  type: "object",
  title: "Row Of Image Block Comp",
  fields: [
    {
      type: "array", 
      name: "blockComp", 
      title: "Image Block Component", 
      of: [{type: 'imageBlockComponent'}]
    }
  ]
}