import React from 'react'
import Link from 'gatsby-link'
import { Header, Loader, Message, Label, Segment } from 'semantic-ui-react'
import Moment from "react-moment"
import OrderItemList from "../OrderItemList"

export default ({ orders, loading }) => {
  if (loading) return <Loader active inline="centered" />

  if (orders.length === 0) {
    return (

      <Message warning compact>
        <Message.Header>Vous n'avez encore effectué aucune commande</Message.Header>
        <p>
          Quand vous réaliserez des achats, ils apparaîtront ici.
<br/>
          <Link to="/">Accès Boutique</Link>
        </p>
      </Message>

    )
  }

  return (
    <div>
      <Header as="h1">Mes commandes</Header>

      {orders.map(order => {
        const {
          id,
          billing_address,
          shipping_address,
          payment,
          meta,
          shipping,
          order_items,
        } = order
        const paid = payment === 'paid'
        const shipped = shipping === 'fulfilled'
        const price = meta.display_price.with_tax.formatted

        return (
          <Segment.Group key={id}>
            <Segment>
              <Header as="h4">Référence de la commande : {id}</Header>
              <Header as="h4">Total : {price}</Header>
              <Header as="h4">Acheté le : <Moment format="DD/MM/YYYY">{meta.timestamps.created_at}</Moment></Header>
              <Header as="h4">Livraison prévue avant le : <Moment add={{days: 10}} format="DD/MM/YYYY">{meta.timestamps.created_at}</Moment></Header>

              <Label
                icon={paid ? 'check' : null}
                color={paid ? 'green' : null}
                content={paid ? "PAYÉ" : "NON PAYÉ"}
              />

              {paid ? (
                <Label
                  icon={shipped ? 'check' : null}
                  color={shipped ? 'green' : null}
                  content={shipped ? "LIVRÉ" : "EN COURS DE LIVRAISON"}
                />
              ) : null}

              <pre>{JSON.stringify(order_items, '\t', 2)}</pre>
            </Segment>
            <Segment>
            <Header as="h4">Détail :</Header>
              <OrderItemList orderId={id}/>
            </Segment>
            <Segment.Group horizontal>
              <Segment>
                <Header as="h4">Adresse de facturation :</Header>
                <p>
                  {billing_address.line_1}
                  <br />
                  {billing_address.line_2}
                  <br />
                  {billing_address.city}
                  <br />
                  {billing_address.postcode}
                  <br />
                  {billing_address.county}
                  <br />
                  {billing_address.country}
                </p>
              </Segment>
              <Segment>
                <Header as="h4">Adresse de livraison :</Header>
                <p>
                  {shipping_address.line_1}
                  <br />
                  {shipping_address.line_2}
                  <br />
                  {shipping_address.city}
                  <br />
                  {shipping_address.postcode}
                  <br />
                  {shipping_address.county}
                  <br />
                  {shipping_address.country}
                </p>
              </Segment>
            </Segment.Group>
          </Segment.Group>
        )
      })}
    </div>
  )
}
