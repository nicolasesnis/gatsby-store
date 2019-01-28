import React, { Component } from 'react'
// import TextField from '@material-ui/core/TextField'
// import axios from 'axios'
import { Link } from 'gatsby'
import { resetPassword } from '../../lib/forgotPassword'

const title = {
  pageTitle: 'Forgot Password Screen',
}

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
      <div>
        {/* <HeaderBar title={title} /> */}
        <form onSubmit={this.sendEmail}>
          <input
            // style={inputStyle}
            id="email"
            label="email"
            value={email}
            onChange={this.handleChange('email')}
            placeholder="Email Address"
          />
          <button
            // style={forgotButton}
            type="submit"
          >
            Send Password Reset Email
          </button>
        </form>
        {showNullError && (
          <div>
            <p>The email address cannot be null.</p>
          </div>
        )}
        {showError && (
          <div>
            <p>
              That email address isn't recognized. Please try again or register
              for a new account.
            </p>
            <Link
              // style={registerButton}
              to="/register"
            >
              Register
            </Link>
          </div>
        )}
        {messageFromServer === 'recovery email sent' && (
          <div>
            <h3>Password Reset Email Successfully Sent!</h3>
          </div>
        )}
        <Link to="/">Home</Link>
      </div>
    )
  }
}
export default ForgotPassword
