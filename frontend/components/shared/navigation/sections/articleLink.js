import Link from 'next/link';
import urlFor from '../../../../lib/image'

const ArticleLink = ({page}) => {
  return (
    <Link href={page[0].route} >
      <a className=''>
        <img width="600" loading="lazy" src={urlFor(page[0].image).width(600).height(400).auto('format').url()} alt=""/>
        <h3 className="h4">{page[0].title}</h3>
      </a>
    </Link>
  )
}

export default ArticleLink