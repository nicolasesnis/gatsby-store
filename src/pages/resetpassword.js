import React, { Component } from 'react'
import { Link } from 'gatsby'
import {

  Form,
  Input,
  Button,
  Segment,
  Message,
} from 'semantic-ui-react'
import { updateCustomer, findCustomerByResetToken } from '../../lib/moltin'
import Layout from '../components/Layout/layout'

export default class ResetPassword extends Component {
  constructor() {
    super()

    this.state = {
      userId: '',
      password: '',
      confirmPassword: '',
      updated: false,
      isLoading: true,
      error: false,
    }
  }

  async componentDidMount() {
    findCustomerByResetToken(this.props.token)
      .then(data => {
        if (data.resetPasswordExpires > Date.now()) {
          this.setState({
            userId: data.id,
            updated: false,
            isLoading: false,
            error: false,
          })
        }
      })
      .catch(error => {
        console.log(error)
        this.setState({
          updated: false,
          isLoading: false,
          error: true,
        })
      })
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  updatePassword = e => {
    e.preventDefault()
    updateCustomer(this.state.userId, {
      password: this.state.password,
      resetPasswordExpires: null,
      resetPasswordToken: null,
    })
      .then(response => {
        if (response.data.id) {
          this.setState({
            updated: true,
            error: false,
          })
        } else {
          this.setState({
            updated: false,
            error: true,
          })
        }
      })
      .catch(error => {
        console.log(error.data)
      })
  }

  render() {
    const { password, error, isLoading, updated } = this.state

    if (error) {
      return (
        <Layout location={this.props.location}>

          <Message error>
          Il y a eu un problème lors de la réinitialisation de votre mot de
              passe. Veuillez <Link to="/forgotpassword">réessayer à nouveau</Link>.
            </Message>



            <Link to="/">Retour Boutique</Link>

        </Layout>
      )
    }
    if (isLoading) {
      return (
        <Layout location={this.props.location}>
          <div>Veuillez patienter</div>
        </Layout>
      )
    }
    return (
      <Layout location={this.props.location}>
        <Segment>
          <Form onSubmit={this.updatePassword}>
            <Form.Field>
              <Input
                id="password"
                label="Nouveau mot de passe"
                autoFocus
                required
                onChange={this.handleChange('password')}
                value={password}
                type="password"
              />
            </Form.Field>
            <Button color="orange" type="submit">
              Mettre à jour
            </Button>
          </Form>
        </Segment>

        {updated && (
          <div>
            <Message success>
              Votre mot de passe a été modifié avec succès !  <Link to="/login">Connectez-vous</Link> à
              nouveau pour accéder à vos informations.
            </Message>

          </div>
        )}
        <Link to="/">Retour Boutique</Link>
      </Layout>
    )
  }
}
