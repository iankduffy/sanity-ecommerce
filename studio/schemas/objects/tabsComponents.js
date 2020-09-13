export default {
  name: "tabsComponents",
  type: "object",
  title: "Tab Component",
  fields: [
    {
      name: "tabs",
      type: "array",
      title: "Tabs", 
      validation: Rule => Rule.max(2),
      of: [{
        type: 'object',
        name: "tab",
        fields: [
          {
            name: "name",
            type: 'string',
            title: "Name"
          }, 
          {
            name: "links",
            type: "array",
            title: "Links", 
            of: [{
              type: 'object',
              name: "tab",
              fields: [
                {
                  name: "link",
                  type: 'string',
                  title: "Link"
                }, 
                {
                  name: "image",
                  type: 'image',
                  title: "Image",
                  options: {
                    hotspot: true,
                  }
                }, 
                {
                  name: "text",
                  type: 'string',
                  title: "Text"
                }, 
              ]
            }
          ]
        }
      ],
    },
    ]
  }]
};