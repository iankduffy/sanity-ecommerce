export default {
  name: "ctaSection",
  type: "object",
  title: "CTA Section",
  fields: [
    {
      name: "blockContent",
      type: "blockContent", 
      title: "Content", 
    },
    {
      name: "buttonText",
      type: "string", 
      title: "Button Text", 
    },
    {
      name: "buttonUrl",
      type: "url", 
      title: "Button Url", 
    }
  ]
}