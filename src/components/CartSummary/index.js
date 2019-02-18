import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { Button, Segment, Divider } from 'semantic-ui-react'

export default ({
  handleCheckout,
  customer,
  display_price: {
    with_tax: { amount, currency, formatted },
  },
}) => (
  <div>
    <Divider />
    <Segment clearing size="large">
      <strong>Sub total:</strong>
{' '}
{formatted}
      <StripeCheckout
        // Required :
        stripeKey={process.env.GATSBY_STRIPE_PUBLISHABLE_KEY}
        token={handleCheckout}
        // optional :
        image="https://via.placeholder.com/128"
        name="Gatsby Store"
        amount={amount}
        locale="auto"
        billingAddress
        currency={currency || 'EUR'}
        shippingAddress
        email={customer.email}
        reconfigureOnUpdate={false}
        triggerEvent="onClick"
      >
        <Button color="black" floated="right">
          Commander
        </Button>
      </StripeCheckout>
    </Segment>
  </div>
)
