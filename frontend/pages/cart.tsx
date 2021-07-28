import Layout from 'components/shared/layout/layout';
import groq from 'groq'
import sanity from '../lib/sanity';

import CartPage from 'components/cart/cart/cart';

import { SiteSettingProps, NavProps } from '@type/global'

import { siteSettingsQuery, mainMenuQuery } from '@query/global'

interface PageProps {
  siteSettings: SiteSettingProps, 
  mainMenu: NavProps, 
}

const Cart = ({mainMenu, siteSettings} : PageProps) => {
  return (
    <Layout mainMenu={mainMenu} siteSettings={siteSettings}>
      <CartPage />
    </Layout>
  )
}

Cart.getInitialProps = async ({query}) => {
  const mainMenu = await sanity.fetch(mainMenuQuery);
  const siteSettings = await sanity.fetch(siteSettingsQuery);

  return { 
    mainMenu,
    siteSettings,
  }
}

export default Cart