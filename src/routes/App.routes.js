import React, { Suspense } from 'react'
import { Router } from '@reach/router'

import { PrivateRoute } from './Private.routes'
import { AppLayout } from '../layouts/AppLayout'
// components
const Home = React.lazy(() => import('../pages/private/Home'))
const LoginRegister = React.lazy(() => import('../pages/public/LoginRegister'))
const MyAccount = React.lazy(() => import('../pages/private/MyAccount'))
const Notifications = React.lazy(() => import('../pages/private/Notifications'))
const HomePresentation = React.lazy(() => import('../pages/public/HomePresentation'))
const Album = React.lazy(() => import('../pages/private/Album'))

export const AppRoutes = (props) => {
  return (
    <AppLayout>
      <Suspense fallback={<div />} >
        <Router>
          <PrivateRoute path='/' component={Home} />
          <PrivateRoute path='/album/:id' component={Album} />
          <PrivateRoute path='/my-account' component={MyAccount} />
          <PrivateRoute path='/notifications' component={Notifications} />
          <LoginRegister path='/login-register' />
          <HomePresentation path='/home-presentation' />
        </Router>
      </Suspense>
    </AppLayout>
  )
}
