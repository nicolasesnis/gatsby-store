import React from 'react'
import Helmet from 'react-helmet'
import CartItemList from '../components/CartItemList/'
import CartSummary from '../components/CartSummary/'
import CartContext from '../components/Context/CartContext'
import { consolidateStreamedStyles } from 'styled-components'
import Layout from '../components/Layout/layout'

import { getCartItems, getCustomer, checkoutCart, payForOrder, removeFromCart } from '../../lib/moltin'


export default class Cart extends React.Component {
  state = {
    items: [],
    loading: true,
    completed: false,
    customer: {
      email: '',
      name: '',
    },
  }

  componentDidMount() {
    const cartId = localStorage.getItem('mcart')
    getCartItems(cartId)
      .then(({ data, meta }) => {
        this.setState({
          items: data,
          meta,
          cartId,
          loading: false,
        })
      })
      .catch(err => console.error(err))
    getCustomer(localStorage.getItem('mcustomer'))
      .then(data => {
        this.setState({
          customer: {
            email: data.data.email,
            name: data.data.name,
          },
        })
      })
      .catch(err => console.error(err))
  }

  _handleCheckout = (token, args) => {
    const cartId = localStorage.getItem('mcart')
    const customerId = localStorage.getItem('mcustomer')
    const customer = this.state

    const billing = {
      first_name: token.card.name.split(' ')[0],
      last_name: token.card.name.split(' ')[1] || '',
      line_1: token.card.address_line1,
      line_2: token.card.address_line2 || '',
      city: token.card.address_city,
      postcode: token.card.address_zip,
      county: token.card.address_state || '',
      country: token.card.address_country,
    }

    const shipping = {
      first_name: args.shipping_name.split(' ')[0],
      last_name: args.shipping_name.split(' ')[1] || '',
      line_1: args.shipping_address_line1,
      city: args.shipping_address_city,
      postcode: args.shipping_address_zip,
      county: args.shipping_address_zip,
      country: args.shipping_address_country,
    }



    checkoutCart(cartId, customerId, billing, shipping)
      .then(({ data: { id } }) => {
        payForOrder(id, token, customer.email)
          .then(() => {
            this.setState({
              completed: true,
            })
          })
          .catch(e => {
            console.error(e)
          })
      })
      .catch(e => {
        console.log(e)
      })
  }

  _handleRemoveFromCart = (itemId, context) => {
    const { cartId } = this.state
    removeFromCart(itemId, cartId).then(({ data, meta }) => {
      const total = data.reduce((a, c) => a + c.quantity, 0)
      context.updateCartCount(total, cartId)
      this.setState({
        items: data,
        meta,
      })
    })
  }

  _handleDestroyCart = context => {
    const { cartId } = this.state
    getCartItems(cartId).then(data => {
      data.data.forEach(item => {
        removeFromCart(item.id, cartId).then(({ data, meta }) => {
          const total = data.reduce((a, c) => a + c.quantity, 0)
          context.updateCartCount(total, cartId)
          this.setState({
            items: data,
            meta,
          })
        })
      })
    })
  }

  render() {
    const { meta, ...rest } = this.state
    const { loading } = rest

    return (
      <Layout location={this.props.location}>
        <Helmet title="Cart" />
        <CartContext.Consumer>
          {context => (
            <CartItemList
              {...rest}
              removeFromCart={item => this._handleRemoveFromCart(item, context)}
              destroyCart={() => this._handleDestroyCart(context)}
            />
          )}
        </CartContext.Consumer>
        {!loading && !rest.completed && this.state.items.length > 0 ? (
          <CartSummary
            {...meta}
            customer={this.state.customer}
            handleCheckout={this._handleCheckout}
          />
        ) : null}
      </Layout>
    )
  }
}
