import styles from './promotionHeader.module.scss'

interface Props {
  promoText: string
}

const PromoHeader = ({promoText}: Props) => {
  return (
    <div className={styles.promoHeader}>
      {promoText}
    </div>
  )
}

export default PromoHeader