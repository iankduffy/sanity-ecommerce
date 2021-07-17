export default {
  name: "imageBlockComponent",
  type: "object",
  title: "Image Block Component",
  fields: [
    {
      name: "blockContent",
      type: "blockContent", 
      title: "Content", 
    },
    {
      name: "image",
      type: "image", 
      title: "image",
      options: {
        hotspot: true,
      }
    }, 
    {
      name: "overlay", 
      type: "boolean", 
      title: "Overlay or Under image"
    }
  ]
}