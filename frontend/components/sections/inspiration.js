import {useState, useEffect} from 'react'
import styles from '../../stylesheets/components/staticPages/inspiration.module.scss'
import Link from 'next/link';
import urlFor from '../../lib/image'
import srcSet from '../../lib/srcset'
import BlockContent from '@sanity/block-content-to-react'
import ProductLink from '../plp/productLink'

import groq from 'groq'
import sanity from '../../lib/sanity';


const ArticleLink = ({page}) => {
  // console.log(page[0].route)
  // console.log(pages)
  return (
    <Link href={page[0].route} >
      <a className={styles.article}>
        <img src={urlFor(page[0].image).width(400).auto('format').url()} alt=""/>
        <h3 className="h4">{page[0].title}</h3>
      </a>
    </Link>
  )
}

const Inspiration = ({heading, paragraph, page, products}) => {
  console.log({page})
  return (
    <section className={styles.inspiration}>
      <div className={styles.inspiration_container}>
        <h2>{heading}</h2>
        <BlockContent className={styles.paragraph} blocks={paragraph} />
        <div className={styles.compContainer}>
          <ArticleLink page={page}/>
          {products.map((product, key) =>  
            <ProductLink product={product} key={key}/>
          )}
        </div>
      </div>
    </section>
  )
}

export default Inspiration;