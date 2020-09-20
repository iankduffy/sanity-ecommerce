import styles from '../stylesheets/components/search.module.scss'
import { useState, useEffect } from 'react';

const SearchBar = () => {
  const [query, setQuery] = useState('')

  return ( 
    <form className={styles.searchBar}>
      <input id="searchBar" />
      <button >SE</button>
    </form>
  )
}

export default SearchBar