/* eslint-disable */
import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import ProductSummary from '../components/ProductSummary'
import ProductAttributes from '../components/ProductAttributes'
import { graphql } from 'gatsby'
import Layout from '../components/Layout/layout'

class ProductPageTemplate extends React.PureComponent {
  render() {
    const productInfo = get(this, 'props.data.allMoltinProduct')
    const data = productInfo.edges[0].node
    const slug = data.slug
    const image = get(data, 'includedData.main_image.link.href')
    const sizes = get(data, 'mainImage.childImageSharp.sizes')
    const product = {
      ...data,
      id: data.originalId,
      image,
      mainImage: data.mainImage,
      header: data.name,
      meta: data.meta,
      sku: data.sku,
    }

    if (!sizes) return null

    return (
      <Layout location={this.props.location}>
        <Helmet title={slug} />
        <ProductSummary {...product} />
        <ProductAttributes {...product} />
      </Layout>
    )
  }
}

export default ProductPageTemplate

export const pageQuery = graphql`
  query ProductsQuery($originalId: String!) {
    allMoltinProduct(filter: { originalId: { eq: $originalId } }) {
      edges {
        node {
          originalId
          name
          description
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
              link {
                href
              }
            }
          }
          mainImage {
            childImageSharp {
              sizes(maxWidth: 400) {
                ...GatsbyImageSharpSizes
              }
            }
          }
          slug
          material
          size
          new
          sku
        }
      }
    }
  }
`
