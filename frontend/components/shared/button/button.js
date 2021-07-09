import Link from 'next/link';
import styles from './button.module.scss'

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

export default Button