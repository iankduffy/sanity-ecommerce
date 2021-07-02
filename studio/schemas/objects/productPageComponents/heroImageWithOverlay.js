export default {
  name: "heroImageWithOverlay",
  type: "object",
  title: "Hero Image with overlay",
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