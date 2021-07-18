import styles from './minibag.module.scss'

const EmptyShoppingBag = () => {
  return (
    <div className={styles.emptyMinibag}>
      <p>Empty Minibag Icon</p>
      <p>Your shopping bag is empty</p>
    </div>
  )
};
  
export default EmptyShoppingBag;