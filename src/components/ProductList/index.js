import React from 'react'
import { Card, Image, Label } from 'semantic-ui-react'
import Img from 'gatsby-image'
import Link from 'gatsby-link'

const mapProductsToItems = products =>
  products.map(
    ({
      node: {
        name,
        originalId,
        category,
        meta,
        mainImage,
        background_colour,
        new: isNew,
      },
    }) => {
      const price = meta.display_price.with_tax.formatted || null

      return {
        as: Link,
        to: `/product/${name}/`,
        childKey: originalId,
        image: (
          <Image>
            {isNew ? (
              <Label color="blue" ribbon style={{ zIndex: '1' }}>
                New!
              </Label>
            ) : null}
            <Img
              sizes={mainImage.childImageSharp.sizes}
              alt={name}
              style={{
                background: `${background_colour || '#fafafa'}`,
              }}
            />
          </Image>
        ),
        header: (
          <Card.Header>
            <div>{name}</div>
            <div style={{ float: 'right' }}>
              <Label>{category}</Label>
            </div>
          </Card.Header>
        ),
        meta: <Card.Meta style={{ color: 'dimgray' }}>{price}</Card.Meta>,
      }
    }
  )

export default ({ products }) => (
  <Card.Group items={mapProductsToItems(products)} itemsPerRow={2} stackable />
)
