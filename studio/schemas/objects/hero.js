export default {
  name: "hero",
  type: "object",
  title: "Full Page Hero Screen",
  fields: [
    {
      name: "heading",
      type: "string",
      title: "Heading"
    },
    {
      name: "tagline",
      type: "string",
      title: "tagline"
    }, 
    {
      name: 'backgroundImage',
      type: 'image',
      title: 'Background image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'emailLink',
      type: 'url',
      title: 'Email Link',
    },
    {
      name: 'socialMediaLinks',
      type: 'array',
      title: 'Social Media Links',
      of: [
        {  
          name: 'socialMedia',
          title: 'Social Media Links',
          type: "object",
          fields: [
            {
              name: 'url',
              type: 'url',
              title: 'Social Media Link',
            }, 
            {
              name: 'socialMedia',
              type: 'string',
              title: 'Social Media Platform',
              description: "enter facebook, twitter, instagram"
            },
          ]
        }
      ]
    },
    {
      name: 'id', 
      type: 'string',
      title: "Component ID", 
      description: 'Used for in page links'
    }
  ]
};