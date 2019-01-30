/* eslint-disable */

import React from 'react'

import { Image, Header } from 'semantic-ui-react'
import Helmet from 'react-helmet'
import ProductList from '../components/ProductList'
import logo from '../images/logo-rectangle.png'
import { graphql, StaticQuery } from 'gatsby'
import Layout from '../components/Layout/layout'

export default props => (
  <StaticQuery
    query={graphql`
      query IndexQuery {
        site {
          siteMetadata {
            title
          }
        }
        allMoltinProduct {
          edges {
            node {
              originalId
              name
              description
              background_colour
              new
              meta {
                display_price {
                  with_tax {
                    amount
                    currency
                    formatted
                  }
                }
              }
              includedData {
                main_image {
                  id
                  link {
                    href
                  }
                }
              }
              mainImage {
                childImageSharp {
                  sizes(maxWidth: 600) {
                    ...GatsbyImageSharpSizes
                  }
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div>
        <Layout location={props.location}>

          <Helmet title={data.site.siteMetadata.title} />
          <Header
            as="h3"
            icon
            textAlign="center"
            style={{ marginBottom: '2em' }}
          >
            <Header.Content style={{ width: '60%', margin: '0 auto' }}>
              <Image src={logo} alt={'logo'} />
            </Header.Content>
          </Header>

          <ProductList
            products={data.allMoltinProduct.edges.filter(
              v => v.node.includedData.main_image
            )}
          />
        </Layout>
      </div>
    )}
  />
)
