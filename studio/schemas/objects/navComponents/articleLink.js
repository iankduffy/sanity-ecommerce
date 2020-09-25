export default {
  name: "articleLink",
  type: "object",
  title: "Article Link",
  fields: [
    {
      name: 'page',
      title: 'Page',
      description: 'Select the page that this route should point to. If more than one link is present it will use a drop down using the Text for dropdown',
      type: 'array',
      of: [{
          type: 'object',
          name: "items",
          fields: [
            {
              name: "route",
              type: 'string',
              title: "Page Url to "
            },{
              name: 'title',
              type: 'string',
              title: 'Text for Link',
            },
            {
              name: 'image',
              type: 'image',
              title: 'image',
              options: {
                hotspot: true,
              }
            }, 
          ]
        }
      ]
    }
  ]
};