export default {
  name: "fullImageWithText",
  type: "object",
  title: "Full Page Width Image With Text",
  fields: [
    {
      name: "blockContent",
      type: "blockContent", 
      title: "Content", 
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      }
    }
  ]
}