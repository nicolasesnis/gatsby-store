import React, { Component } from 'react'
import { Link } from 'gatsby'
import { updateCustomer, findCustomerByResetToken } from '../../lib/moltin'

const loading = {
  margin: '1em',
  fontSize: '24px',
}

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
        <div>
          {/* <HeaderBar title={title} /> */}
          <div style={loading}>
            <h4>Problem resetting password. Please send another reset link.</h4>
            <Link
              // buttonText={`Go Home`}
              // buttonStyle={homeButton}
              to="/"
            >
              Go Home
            </Link>
            <Link
              // buttonStyle={forgotButton}
              // buttonText={'Forgot Password?'}
              to="/forgotpassword"
            >
              Forgot Password ?
            </Link>
          </div>
        </div>
      )
    }
    if (isLoading) {
      return (
        <div>
          {/* <HeaderBar title={title} /> */}
          <div style={loading}>Loading User Data...</div>
        </div>
      )
    }
    return (
      <div>
        {/* <HeaderBar title={title} /> */}
        <form className="password-form" onSubmit={this.updatePassword}>
          <input
            // style={inputStyle}
            id="password"
            label="password"
            onChange={this.handleChange('password')}
            value={password}
            type="password"
          />
          <button
            type="submit"
            // buttonStyle={updateButton}
            // buttonText={'Update Password'}
          >
            Update Password
          </button>
        </form>

        {updated && (
          <div>
            <p>
              Your password has been successfully reset, please try logging in
              again.
            </p>
            <Link
              // buttonStyle={loginButton}
              // buttonText={'Login'}
              to="/login"
            >
              Login
            </Link>
          </div>
        )}
        <Link
          // buttonText={`Go Home`}
          // buttonStyle={homeButton}
          to="/"
        >
          Go Home
        </Link>
      </div>
    )
  }
}
