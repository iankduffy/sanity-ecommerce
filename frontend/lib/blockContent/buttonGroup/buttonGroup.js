import Link from 'next/link';
import styles from './buttonGroup.module.scss'

const Button = ({button}) => {
  const {buttonText = '', url = ''} = button
  return (
    <Link href={url}>
      <a className={styles.button}>
        {buttonText}
      </a>
    </Link>
  )
}

const ButtonGroup = ({buttons, ...props}) => {
  const { button = [] } = props

  console.log(props)
  
  return (
    <div className={styles.buttonGroup}>
      {/* {button.map((button, key) => 
        <Button button={button} key={key}/>
      )} */}
    </div>
  )
}

export default ButtonGroup;