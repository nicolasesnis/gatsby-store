import React from 'react'
import { navigate, Link } from 'gatsby'
import {
  Header,
  Form,
  Input,
  Button,
  Segment,
  Message,
} from 'semantic-ui-react'
import Helmet from 'react-helmet'
import AuthContext from '../components/Context/AuthContext'
import Layout from '../components/Layout/layout'

import { login, getCustomer } from '../../lib/moltin'

export default class Login extends React.Component {
  state = {
    email: '',
    password: '',
    loading: false,
    errors: null,
  }

  _handleSubmit = (e, context) => {
    e.preventDefault()

    const { email, password } = this.state

    this.setState({
      loading: true,
      errors: null,
    })

    login({ email, password })
      .then(({ id, token }) => {
        localStorage.setItem('customerToken', token)
        localStorage.setItem('mcustomer', id)
        context.updateToken()
        navigate('/myaccount/')
        return id
      })

      // Check if user is verified and update context's state
      .then(id => {
        getCustomer(id).then(data => {
          context.updateVerified(data.data.active)
        })
      })

      .catch(e => {
        console.log(e)
        this.setState({
          loading: false,
          errors: e.errors || e,
        })
      })
  }

  _handleChange = ({ target: { name, value } }) =>
    this.setState({ [name]: value })

  handleErrors = errors => {
    if (!Array.isArray(errors) && !errors.length > 0) {
      return (
        <Message
          error
          header="Sorry"
          content="Please check your login details and try again."
        />
      )
    }
    return errors.map((error, i) => (
      <Message error header={error.title} content={error.detail} key={i} />
    ))
  }

  render() {
    const { loading, errors } = this.state

    return (
      <Layout location={this.props.location}>
        <AuthContext.Consumer>
          {context => (
            <React.Fragment>
              <Helmet title="Login" />
              <Header as="h1">Connectez-vous à votre espace</Header>

              <Form
                onSubmit={e => this._handleSubmit(e, context)}
                loading={loading}
                error={!!errors}
              >
                {errors ? this.handleErrors(errors) : null}
                <Segment>
                  <Form.Field>
                    <label htmlFor="email">Adresse Email</label>
                    <Input
                      id="email"
                      fluid
                      name="email"
                      type="email"
                      autoFocus
                      onChange={e => this._handleChange(e)}
                      required
                    />
                  </Form.Field>

                  <Form.Field>
                    <label htmlFor="password">Mot de passe</label>
                    <Input
                      id="password"
                      fluid
                      name="password"
                      type="password"
                      required
                      onChange={e => this._handleChange(e)}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Link to="/forgotpassword">Mot de passe oublié ?</Link>
                  </Form.Field>

                  <Button type="submit" color="orange">
                    Connexion
                  </Button>
                </Segment>
              </Form>
            </React.Fragment>
          )}
        </AuthContext.Consumer>
      </Layout>
    )
  }
}
