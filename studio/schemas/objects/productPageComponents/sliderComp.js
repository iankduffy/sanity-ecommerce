export default {
  name: "sliderComp",
  type: "object",
  title: "Slider Component",
  fields: [
    {
      name: 'slides',
      type: 'array',
      title: 'Slides',
      of: [
        { type: 'heroImageWithOverlay' }
      ]
    }, 
    {
      name: 'timer', 
      type: 'number', 
      desc: 'Timer in MS (1000ms = s)', 
      title: "Timer between slides"
    }
  ]
}