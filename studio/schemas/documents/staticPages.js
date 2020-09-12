export default {
  name: "pages",
  type: "document",
  title: "Pages",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title"
    }, {
      name: 'content',
      type: 'array',
      title: 'Page sections',
      of: [
        { type: 'hero' }
      ],
    }
  ], 
  preview: {
    select: {
      title: 'title',
      content: 'content'
    }
  }
};