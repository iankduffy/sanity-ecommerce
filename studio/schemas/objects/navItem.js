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
              to: { type: 'routes' },
            },{
              name: 'title',
              type: 'string',
              title: 'Text for Link',
            },
            {
              name: 'componentID',
              type: 'string',
              title: 'Link to Section',
            }, 
          ]
        }
      ]
    },
    {
      name: "text",
      type: "string",
      title: "Text for drop down"
    },
    // {
    //   name: 'componentID',
    //   type: 'string',
    //   title: 'Link to Section',
    //   description: 'Using components id for auto scroll to component',
    // }
  ]
}