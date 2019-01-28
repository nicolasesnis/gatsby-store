import React from 'react'
import { Router } from '@reach/router'
import Profile from '../components/profile'
import PrivateRoute from '../components/privateRoute'
import NotFound from './404'
import StoreIndex from './index'
import ResetPassword from './resetpassword'

const App = () => (
  <Router>
    <StoreIndex path="/" />
    <ResetPassword path="/reset/:token" />
    <PrivateRoute path="/profile" component={Profile} />
    <NotFound default />
  </Router>
)

export default App
