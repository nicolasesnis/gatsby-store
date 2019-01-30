import React from 'react'

import Helmet from 'react-helmet'
import { Button } from 'semantic-ui-react'

import { navigate } from 'gatsby'

import OrderList from '../components/OrderList'
import Layout from '../components/Layout/layout'

import { getOrders } from '../../lib/moltin'

export default class MyAccount extends React.Component {
  state = {
    loading: true,
    orders: [],
  }

  componentDidMount() {
    const token = localStorage.getItem('customerToken')

    if (!token) {
      navigate('/login/')
    }
    getOrders(token)
      .then(({ data, included, meta }) => {
        const orders = data.map(order =>
          // const orderItems = order.relationships.items.data
          // const includedItems = included.items.map(i => i.id === )

          ({
            ...order,
          })
        )

        this.setState({
          loading: false,
          orders,
          included,
          meta,
        })
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleSignOut = () => {
    localStorage.clear()
    location.reload()
    navigate('/')
  }

  render() {
    return (
      <Layout location={this.props.location}>
        <Helmet title="My Account" />
        <Button floated="right" onClick={this.handleSignOut}>
          Déconnexion
        </Button>
        <OrderList {...this.state} />
      </Layout>
    )
  }
}
