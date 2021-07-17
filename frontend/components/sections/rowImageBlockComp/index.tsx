import styles from './rowImageBlock.module.scss'
import ImageBlockComponent from './ImageBlockComp/index'

interface RowImageBlockProps {
  index: number, 
  blockComp: Array<any>
}

const RowImageBlockComponent = ({blockComp, index} : RowImageBlockProps) => {
  const blockCompLength = blockComp.length

  return (
    <section className={styles.container}>
      {blockComp.map((block, key) => <ImageBlockComponent {...block} className={styles.block} blockCompLength={blockCompLength}  key={key} index={index} />)}
    </section>
  )
}

export default RowImageBlockComponent