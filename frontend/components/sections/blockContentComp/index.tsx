import Block from 'lib/blockContent'
import styles from './blockContent.module.scss'

interface BlockCompProps {
  blockContent: any
}

const BlockContentComp = ({blockContent} : BlockCompProps) => {
  return (
    <section className={styles.container}>
      <Block blocks={blockContent} className={styles.content} />
    </section>
  )
}

export default BlockContentComp