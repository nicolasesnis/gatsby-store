import React from 'react'
import { Header, Divider, Table } from 'semantic-ui-react'

export default ({ description, material, size }) => (
  <div>
    <Header as="h3">About this product</Header>
    <p>{description}</p>

    <Divider />

    <Table celled>
      <Table.Header style={{ background: '#f9fafb' }}>
        <Table.Row>
          <Table.HeaderCell colSpan="2">Attributes</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Matière</Table.Cell>
          <Table.Cell>{material}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Taille du motif</Table.Cell>
          <Table.Cell>{size}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </div>
)
