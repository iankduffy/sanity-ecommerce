import React, {Fragment} from 'react'
import * as SectionComponents from './sections'

function resolveSections (section) {
  const Section = SectionComponents[section._type]

  if (Section) {
    return Section
  }

  console.error('Cant find section', section) // eslint-disable-line no-console
  return null
}

function RenderSections (props) {
  const {sections} = props

  if (!sections) {
    console.error('Missing section')
    return <div>Missing sections</div>
  }
  return (
    <Fragment>
      {sections.map(section => {
        const SectionComponent = resolveSections(section)
        if (!SectionComponent) {
          return <div>Missing section {section._type}</div>
        }
        return <SectionComponent {...section} key={section._key} />
      })}
    </Fragment>
  )
}

export default RenderSections