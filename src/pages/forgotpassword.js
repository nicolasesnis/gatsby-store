import React, { Component } from 'react'
import {
  Header,
  Form,
  Input,
  Button,
  Segment,
  Message,
} from 'semantic-ui-react'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'
import { resetPassword } from '../../lib/forgotPassword'
import Layout from '../components/Layout/layout'

class ForgotPassword extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      showError: false,
      messageFromServer: '',
      showNullError: false,
    }
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    })
  }

  sendEmail = e => {
    e.preventDefault()
    if (this.state.email === '') {
      this.setState({
        showError: false,
        messageFromServer: '',
        showNullError: true,
      })
    } else {
      resetPassword(this.state.email)
        .then(response => {
          if (response === 'recovery email sent') {
            this.setState({
              showError: false,
              messageFromServer: 'recovery email sent',
              showNullError: false,
            })
          }
        })
        .catch(error => {
          if (error.message === 'email not in database') {
            this.setState({
              showError: true,
              messageFromServer: '',
              showNullError: false,
            })
          }
        })
    }
  }

  render() {
    const { email, messageFromServer, showNullError, showError } = this.state

    return (
      <Layout location={this.props.location}>
        <React.Fragment>
          <Helmet title="Reset Password" />
          <Header as="h1">Password Reset </Header>
          <Form onSubmit={this.sendEmail}>
            <Segment>
              <Form.Field>
                <Input
                  // style={inputStyle}
                  id="email"
                  fluid
                  autoFocus
                  label="Email"
                  required
                  value={email}
                  onChange={this.handleChange('email')}
                  placeholder="Renseignez votre adresse email"
                />
              </Form.Field>
              <Button color="orange" type="submit">
                Recevoir un lien de réinitialisation du mot de passe
              </Button>
            </Segment>
          </Form>
          {showNullError && (
            <Message warning>Le champ ne peut être vide.</Message>
          )}
          {showError && (
            <div>
              <Message warning>
                Cette adresse ne correspond à aucun compte. Vous pouvez créer un
                compte, ou bien retourner à la boutique.
              </Message>
              <Link
                // style={registerButton}
                to="/register"
              >
                S'inscrire
              </Link>
            </div>
          )}
          {messageFromServer === 'recovery email sent' && (
            <Message success>
              Lien envoyé ! Il sera valide pendant une heure.
            </Message>
          )}
          <Link to="/">Retour Boutique</Link>
        </React.Fragment>
      </Layout>
    )
  }
}
export default ForgotPassword
