import Head from 'next/head'
import Header from './header'
// import Footer from './footer'

export default ({ children, siteSettings, mainMenu, footerMenu}) => (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1"/>
        <title>{siteSettings.siteTitle}</title>
        <meta charSet='utf-8' />
        <meta name="description" content={siteSettings.siteDesc}/>
        <meta name="theme-color" content="#1E4D5E"/>
        <meta property="og:title" content={siteSettings.siteTitle}/>
        <meta property="og:description" content={siteSettings.siteDesc}/>
        <meta name="twitter:title" content={siteSettings.siteTitle}/>
        <meta name="twitter:description" content={siteSettings.siteDesc}/>
        <meta name="twitter:image:alt" content={siteSettings.siteTitle}/>
      </Head>
      <div className="">
        <Header />
        {/* <Nav mainMenu={mainMenu} siteLogo={siteSettings.siteLogo} logoText={siteSettings.logoText}/> */}
        <main>
          {children}
        </main>
        {/* <Footer footerText={siteSettings.footerText}/> */}
      </div>
    </div>
)