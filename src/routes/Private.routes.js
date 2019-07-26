import React from 'react'
import { Redirect } from '@reach/router'
export const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = window.localStorage.getItem('auth-token')
  if (rest.path === '/' && !auth) {
    return <Redirect from='/' to='/home-presentation' noThrow />
  }
  if (rest.path === '/login-register' && auth) {
    return <Redirect from='/login-register' to='/' noThrow />
  }
  return (
    auth
      ? <Component {...rest} />
      : <Redirect from={rest.path} to='/login-register' noThrow />
  )
}
