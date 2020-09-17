export default {
  name: "navItem",
  type: "object",
  title: "NavItem",
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
              type: 'reference',
              to: [
                {type: 'routes'},
                {type: 'category'},
              ],
            },{
              name: 'title',
              type: 'string',
              title: 'Text for Link',
            },
          ]
        }
      ]
    }
  ]
}