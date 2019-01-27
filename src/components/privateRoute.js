import React from 'react'
import { navigate } from 'gatsby'

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const token = localStorage.getItem('customerToken')
  if (!token && location.pathname !== `/login`) {
    // If the user is not logged in, redirect to the login page.
    navigate(`/login`)
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute
