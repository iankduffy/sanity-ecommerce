import styles from '../stylesheets/components/search.module.scss'
import { useState, useEffect } from 'react';
import sanity from '../lib/sanity';
import urlFor from '../lib/image';
import Link from 'next/link';

const SearchQuery = `
  *[_type == "product" && title match $searchQuery] {
    slug, 
    title,
    defaultProductVariant,
    tags
  }[0..2]
`

const SearchItem = ({product}) => {
  return (
    <Link href={product.slug.current}>
      <a className={`u-dis-flex u-pad-v-sm u-pad-h-sm ${styles.searchItem}`}>
        <img src={urlFor(product.defaultProductVariant.images[0]).height(100).width(90).auto('format').url()} />
        <div className="u-pad-h-sm">
          <p>{product.title}</p>
          <p>£{product.defaultProductVariant.price}</p> 
        </div>
      </a>
    </Link>
  )
}

const SearchBar = () => {
  const [query, setQuery] = useState('')
  const [products, setProducts] = useState([])

  useEffect(()=> {
    async function fetchData() {
      let searchQuery = `${query}*`
      return await sanity.fetch(SearchQuery, {searchQuery}).then(res => {
        setProducts(res)
      })
    }

    fetchData()
  }, [query])

  return ( 
    <form className={styles.searchBar}>
      <input id="searchBar" value={query} onChange={(e) => setQuery(e.target.value)}/>
      <button >Search</button>
      {products && query.length > 2 && <div className={styles.searchItemsContainer}>
        {products.map((product, key) => <SearchItem key={key} product={product}/>)}
      </div>}
    </form>
  )
}



export default SearchBar