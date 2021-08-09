import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <body>
          {typeof window === 'undefined' && ( <style id="holderStyle" dangerouslySetInnerHTML={{ __html: ` *, *::before, *::after { transition: none!important; } `, }} /> )}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument