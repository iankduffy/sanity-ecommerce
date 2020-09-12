export default {
  name: "routes",
  type: "document",
  title: "Routes",
  fields: [
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
    },
    {
      name: 'page',
      type: 'reference',
      title: 'Page',
      description: 'Select the page that this route should point to',
      to: [
        {type: 'pages'},
      ],
    }
  ],
  preview: {
    select: {
      slug: 'slug.current',
      pageTitle: 'page.title',
    },
    prepare({ slug, pageTitle }) {
      return {
        title: slug === '/' ? '/' : `/${slug}`,
        subtitle: `Page: ${pageTitle}`,
      };
    },
  },
};