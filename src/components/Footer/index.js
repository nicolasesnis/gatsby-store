import React from 'react'
import Link from 'gatsby-link'
import { Segment, Container, Grid, List, Header, Icon } from 'semantic-ui-react'

const Footer = () => (
  <Segment
    vertical
    style={{
      padding: '4em 0em',
      marginTop: '3em',
      borderTop: '1px solid #f2f2f2',
    }}
  >
    <Container text>
      <Grid stackable>
        <Grid.Row>
          <Grid.Column width={4}>
            <Header as="h4" content="À propos" />
            <List>
              <List.Item as={Link} to="/privacy/">
                Données personnelles
              </List.Item>
              <List.Item as={Link} to="/terms/">
                Conditions
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column width={5}>
            <Header as="h4" content="Navigation" />
            <List>
              <List.Item as={Link} to="/">
                Boutique
              </List.Item>
              {/* <List.Item as={Link} to="/gatsbyimage/">
                Gatsby Image Example
              </List.Item> */}
            </List>
          </Grid.Column>
          <Grid.Column width={7}>
            <Header as="h4">Réseaux</Header>
            <p>
              Vous aimez mes bijoux ? Faites le moi savoir, et criez le autour
              de vous !
            </p>
            <List horizontal>
              <List.Item as={Link} to="/">
                <Icon name="instagram" />
              </List.Item>

              <List.Item as={Link} to="/">
                <Icon name="facebook" />
              </List.Item>

              <List.Item as={Link} to="/">
                <Icon name="mail" />
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  </Segment>
)

export default Footer
