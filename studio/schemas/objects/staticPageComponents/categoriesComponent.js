export default {
  name: "categoriesComponent",
  type: "object",
  title: "Categories Link Component",
  fields: [
    { 
      name: 'categoryLink', 
      type: 'array', 
      title: "Category Link",
      of: [
        {
          type: 'object',
          name: "category",
          fields: [
            {
              name: 'image',
              type: 'image',
              title: 'Image',
              options: {
                hotspot: true,
              }
            },
            {
              name: "title", 
              type: "string", 
              title: "Title"
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
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image'
            }
          }
        }
      ]
    },
  ],
  preview: {
    select: {
      title: ''
    }, 
    prepare(selection) {
      const {title} = selection
      return {
        title: "Category Link",
      }
    }
  }
}