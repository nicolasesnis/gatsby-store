import React from 'react'
import { Card, Loader, Image } from 'semantic-ui-react'
import { graphql, StaticQuery, Link } from 'gatsby'
import Img from 'gatsby-image'
import { getOrderItems } from '../../../lib/moltin'

class OrderItemList extends React.Component {
  constructor() {
    super()
    this.state = {
      orderItems: '',
      loading: true,
    }
  }

  componentDidMount() {
    getOrderItems(this.props.orderId).then(result => {
      this.setState({
        orderItems: result.data,
        loading: false,
      })
    })
  }

  render() {
    if (this.state.loading) return <Loader active inline="centered" />

    return (
      <StaticQuery
        query={graphql`
          query AccountQuery {
            allMoltinProduct {
              edges {
                node {
                  originalId
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
        render={data => {
          const orderItems = Object.values(this.state.orderItems)
          const items = []
          orderItems.map((order, index) => {
            items[index] = {
              childKey: order.id,
              as: Link,
              to: `/product/${order.name}/`,
              header: order.name,
              description: <div>
                Prix : {order.unit_price.amount/100} €
                <br/>
                Nb : {order.quantity}
                </div>
            }
            for (let i = 0; i < data.allMoltinProduct.edges.length; i++) {
              if (
                data.allMoltinProduct.edges[i].node.originalId ===
                order.product_id
              )
              {
                items[index].image = <Image>
                <Img
                  sizes={data.allMoltinProduct.edges[
                    i
                  ].node.mainImage.childImageSharp.sizes}

                  alt={name}

                />
              </Image>
                }
            }
          })

          return <Card.Group items={items} itemsPerRow={4} />
        }}
      />
    )
  }
}

export default OrderItemList
