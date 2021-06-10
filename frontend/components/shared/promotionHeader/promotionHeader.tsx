import styles from './promotionHeader.module.scss'

export interface Props {
  promoText: String
}

const PromoHeader = ({promoText}: Props) => {
  return (
    <div className={styles.promoHeader}>
      {promoText}
    </div>
  )
}

export default PromoHeader