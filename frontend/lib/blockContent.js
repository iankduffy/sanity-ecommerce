import BlockContent from '@sanity/block-content-to-react'
import ButtonGroup from './blockContent/buttonGroup/buttonGroup'

const Block = ({blocks = '', dataset = 'production', projectId = 'phinh7i9', className = '', imageOptions = {w: 1000, h: 1000, fit: 'max', auto: 'format'}}) => {
  const serializers = {
    types: {
      blockButton: ({node}) => (
        <a className="c-btn u-mar-t-md" href={node.url} target="_blank">
          {node.buttonText}
        </a>
      ), 
      buttonGroup: ({node}) => <ButtonGroup {...node} />
    }
  }

  return (
    <BlockContent renderContainerOnSingleChild={true} blocks={blocks} dataset={dataset} projectId={projectId} className={className} imageOptions={imageOptions} serializers={serializers} /> 
  )

}

export default Block   