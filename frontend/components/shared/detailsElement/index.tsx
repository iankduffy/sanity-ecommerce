import Block from "lib/blockContent"
import styles from './details.module.scss'

// Todo: Add Plus / Minus icons
const DetailsElement = ({isOpen, title, block}) => {
  return(
    <details open={isOpen} className={styles.details}>
      <summary className={styles.summary}>{title}</summary>
      <Block blocks={block}/>
    </details>
  )
}

export default DetailsElement