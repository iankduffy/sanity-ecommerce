import styles from './categoriesComponent.module.scss'
import CategoryLink from './categoryLink/categoryLink'

const categoriesComponent = ({categoryLink, ...props}) => {
  return (
    <section className={styles.categoryContainer}> 
      {categoryLink.map((link, key) => <CategoryLink key={key} link={link} />)}
    </section>
  )
}

export default categoriesComponent