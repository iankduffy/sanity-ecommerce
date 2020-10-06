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
        { type: 'hero' },
        { type: 'tabsComponents' },
        { type: 'inspiration' }, 
        { type: 'sixtyFortyComponent' },
        { type: 'productNavigation' }, 
        { type: 'productFeatures' },
        { type: 'productAddToBag' },
        { type: 'productTabs' },
        { type: 'ctaSection' },
        { type: 'fullImageWithText' },
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