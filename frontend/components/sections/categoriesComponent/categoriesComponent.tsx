import styles from './categoriesComponent.module.scss'
import CategoryLink from './categoryLink/categoryLink'

import { CategoryLinkProps } from './categoryComponentTypes'

interface CategoriesComponentProps {
  categoryLink: Array<CategoryLinkProps>, 
  index: number
}

const categoriesComponent = ({categoryLink, index} : CategoriesComponentProps) => {

  return (
    <section className={styles.categoryContainer}> 
      {categoryLink.map((link, key) => <CategoryLink {...link} key={key} index={index} />)}
    </section>
  )
}

export default categoriesComponent