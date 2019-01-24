import React, { Component } from 'react'
import AuthContext from './AuthContext'

class AuthProvider extends Component {
  constructor(props) {
    super(props)

    this.updateToken = () =>
      this.setState({
        token: localStorage.getItem('customerToken'),
      })

    this.updateVerified = bool =>
      this.setState({
        userVerified: bool,
      })

    this.state = {
      token: null,
      verified: null,
      updateToken: this.updateToken,
      updateVerified: this.updateVerified,
    }
  }

  componentDidMount() {
    const token = localStorage.getItem('customerToken')

    this.setState({
      token,
    })
  }

  render() {
    const { token, updateToken, verified, updateVerified } = this.state
    return (
      <AuthContext.Provider
        value={{
          verified,
          token,
          updateToken,
          updateVerified,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    )
  }
}

export default AuthProvider
