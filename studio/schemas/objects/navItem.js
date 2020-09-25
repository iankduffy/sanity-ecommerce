export default {
  name: "navItem",
  type: "object",
  title: "NavItem",
  fields: [
    {
      name: 'mainpage',
      title: 'Main Page Link',
      description: 'Select the main page link for this navigation item',
      type: 'object',
      fields: 
      [
        {
          name: "route",
          type: 'reference',
          to: [
            {type: 'routes'},
            {type: 'category'},
          ],
        },
        {
          name: 'title',
          type: 'string',
          title: 'Text for Link',
        },
      ]
    }, 
    {
        name: 'dropdownNav',
        title: 'Drop Down Navigation',
        description: 'These Pages will appear in a drop down',
        type: 'array',
        of: 
        [
          {
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
      }, 
      {
        name: 'navContent',
        type: 'array',
        title: 'Navigation Sections',
        of: [
          { type: 'articleLink' },
        ],
      }
    ], 
    preview: {
      select: {
        title: 'mainpage.title'
      }
    }
  }
