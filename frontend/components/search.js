import styles from '../stylesheets/components/search.module.scss'

const SearchBar = () => {
  


  return ( 
    <form className={styles.searchBar}>
      <input id="searchBar" />
      <button >Search</button>
    </form>
  )
}

export default SearchBar