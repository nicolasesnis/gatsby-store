import React from 'react'
import { Container } from 'semantic-ui-react'
import Headroom from 'react-headroom'
import Helmet from 'react-helmet'
import { withPrefix } from 'gatsby-link'
import 'semantic-ui-css/semantic.min.css'
import AuthProvider from '../Context/AuthProvider'
import CartProvider from '../Context/CartProvider'
import Header from '../Header'
import Footer from '../Footer'

export default ({ children, location }) => (
  <AuthProvider>
    <CartProvider>
      <Helmet
        meta={[
          {
            name: 'Zazou Paris',
            content:
              'Boutique en ligne Zazou-Paris de bijoux personnalisés faits à la main',
          },
          { name: 'keywords', content: 'bijoux, zazou, mode' },
          { name: 'msapplication-TileColor', content: '#da532c' },
          { name: 'theme-color', content: '#ffffff' },
        ]}
      >
        <html lang="en" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={withPrefix('/favicons/apple-touch-icon.png')}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={withPrefix('/favicons/favicon-32x32.png')}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={withPrefix('/favicons/favicon-16x16.png')}
        />
      </Helmet>
      <Headroom
        upTolerance={10}
        downTolerance={10}
        style={{ zIndex: '20', height: '6.5em' }}
      >
        <Header location={location} />
      </Headroom>
      <Container text>{children}</Container>
      <Footer />
    </CartProvider>
  </AuthProvider>
)