import Head from 'next/head'
import Header from './header'

const Layout = ({siteSettings = []}) => (
    <div>
      <div className="">
        <Header />
        <main>
          Checkout 
        </main>
      </div>
    </div>
)

export default Layout