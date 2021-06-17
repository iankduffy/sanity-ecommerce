import Layout from '../components/layout';
import groq from 'groq'
import sanity from '../lib/sanity';

const WishListPage = ({mainMenu, siteSettings, footerMenu}) => {
  return (
    <Layout mainMenu={mainMenu} siteSettings={siteSettings} footerMenu={footerMenu}>
      Wishlist
    </Layout>
  )
}

const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  ...
}`

const mainMenuQuery = `*[_type == "nav" && id == "main-menu"][0] {
	navItems[] {
    mainpage {
      title,
      "route": route->slug.current
    },
  "dropdown": dropdownNav[] {
			title,
      "slug": route->slug, 
    },
    navContent
 	}
}`

 const footerMenuQuery = `*[_type == "nav" && id == "footer-menu"][0] {
	navItems[] {
   text,
   "slug": page[]->[0].slug,
   ...
 	}
 }`

 WishListPage.getInitialProps = async ({query}) => {
  let { slug = "" } = query
  slug = slug.toLowerCase()


  if (!query) {
    console.error('no query')
    return
  }

  const mainMenu = await sanity.fetch(mainMenuQuery);
  const siteSettings = await sanity.fetch(siteSettingsQuery);

  return { 
    mainMenu,
    siteSettings,
  }
}

export default WishListPage