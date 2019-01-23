import 'regenerator-runtime/runtime'

const MoltinGateway = require(`@moltin/sdk`).gateway

const Moltin = MoltinGateway({
  // client_id: process.env.MOLTIN_CLIENT_ID,
  // client_secret: process.env.MOLTIN_CLIENT_SECRET,
  client_id: 'xdIRZLJFUU3T8LYrlFfhcm0QOlgn3UhPhy2swxrD79',
  client_secret: 'YPkgK26eGb5qQE59yuHuBxUUt11H4V3Ob1Lyh9oXhZ',
  grant_type: 'client_credentials',
})

const getProducts = () => Moltin.Products.With('main_image').All()

const getProductById = id => Moltin.Products.With('main_image').Get(id)

const addToCart = (cartId, productId, quantity) =>
  Moltin.Cart(cartId).AddProduct(productId, quantity)

const getCartItems = id => Moltin.Cart(id).Items()

const removeFromCart = (productId, cartId) =>
  Moltin.Cart(cartId).RemoveItem(productId)

const deleteCart = cartId => Moltin.Cart(cartId).Delete()

const checkoutCart = (cartId, customer, billing, shipping) =>
  Moltin.Cart(cartId).Checkout(customer, billing, shipping)

const payForOrder = (orderId, token, email) =>
  Moltin.Orders.Payment(orderId, {
    gateway: 'stripe',
    method: 'purchase',
    payment: token.id,
    options: {
      receipt_email: email,
    },
  })

const login = ({ email, password }) =>
  Moltin.Customers.Token(email, password).then(data => {
    const {
      data: { customer_id: id, token },
    } = data
    return {
      id,
      token,
    }
  })

const register = ({ email, password, ...rest }) =>
  Moltin.Customers.Create({
    email,
    password,
    type: 'customer',
    ...rest,
  }).then(data => {
    const {
      data: { name, id },
    } = data
    return login({ email, password }).then(data => {
      const { token } = data
      return {
        id,
        name,
        email,
        token,
      }
    })
  })

const getOrders = token => Moltin.Orders.With('items').All(token)

const getCustomer = id => Moltin.Customers.Get(id)

module.exports = {
  getProducts,
  getProductById,
  addToCart,
  getCartItems,
  removeFromCart,
  deleteCart,
  checkoutCart,
  payForOrder,
  register,
  login,
  getOrders,
  getCustomer,
}
