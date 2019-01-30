import React from 'react'
import { Card, Loader } from 'semantic-ui-react'
import { graphql, StaticQuery, Link } from 'gatsby'
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
              key: order.id,
              header: <Link to={`/product/${order.name}/`}>{order.name}</Link>,
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
              ) {
                items[index].image =
                  data.allMoltinProduct.edges[
                    i
                  ].node.includedData.main_image.link.href
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
