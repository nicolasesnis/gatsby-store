import React from 'react'
import Img from 'gatsby-image'
import { Item, Image, Modal, Button } from 'semantic-ui-react'
import { getFiles } from '../../../lib/moltin'

import AddToCart from '../AddToCart'

class ProductSummary extends React.Component {
  constructor() {
    super()
    this.state = {
      files: [],
    }
  }

  componentDidMount() {
    const array = []
    Object.values(this.props.relationships.files.data).forEach(file => {
      getFiles(file.id).then(data => {
        array.push(data)
        this.setState({
          files: array,
        })
      })
    })
  }

  render() {
    return (
      <Item.Group>

        <Item style={{ alignItems: 'center' }}>
        <Modal trigger={
          <Item.Image size="medium">

            <Img
              style={{ width: '250px', borderRadius: "3px" }}
              sizes={this.props.mainImage.childImageSharp.sizes}
              alt={this.props.name}
            />
          </Item.Image>
        }><Modal.Content image><Image wrapped size="massive"><Img

        sizes={this.props.mainImage.childImageSharp.sizes}
        alt={this.props.name}
      /></Image></Modal.Content></Modal>
          <Item.Content>
            <Item.Header>{this.props.name}</Item.Header>
            <Item.Description>
              <p>{this.props.meta.display_price.with_tax.formatted}</p>
              <Image.Group size="tiny">
              <Modal trigger={<Button style={{padding: '0'}}><Image rounded alt="mainImage" style={{margin: "0"}}><Img
              style={{  borderRadius: "3px" }}
              sizes={this.props.mainImage.childImageSharp.sizes}
              alt={this.props.name}
            /></Image></Button>}>
              <Modal.Content image>
              <Image wrapped size="massive">
              <Img

              sizes={this.props.mainImage.childImageSharp.sizes}
              alt={this.props.name}
            />
            </Image>

            </Modal.Content>

              </Modal>

                {this.state.files.map(function(file, index) {

                  return (
                  <Modal key={index} trigger={<Button style={{padding: '0'}}><Image rounded style={{margin: "0"}} alt={index} src={file.data.link.href} /></Button>}>

<Modal.Content image>
<Image  wrapped size='massive'  alt={index} src={file.data.link.href} />
</Modal.Content>
                  </Modal>
                  )
                })}
              </Image.Group>
            </Item.Description>
            <Item.Extra>
              <AddToCart productId={this.props.id} />
            </Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    )
  }
}

export default ProductSummary
