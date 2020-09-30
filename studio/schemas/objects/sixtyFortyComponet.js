export default {
  name: "sixtyFortyComponent",
  type: "object",
  title: "Sixty Forty Component",
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'image',
      options: {
        hotspot: true,
      }
    },
    {
      name: 'video',
      type: 'url',
      title: 'Video Url',
    }, 
    {
      name: "blockContent",
      type: "blockContent", 
      title: "Content", 
    }
  ]
};
