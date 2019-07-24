import React from 'react'
import { AppLayout } from '../layouts/AppLayout'
import { Router, Redirect } from '@reach/router'

// components
import { Home } from '../pages/public/Home'
export const AppRoutes = () => (
  <AppLayout>
    <Router>
      <Home path='/' />
      {/* <Route path='/' exact component={Home}/>
      <Route path='/register-login' exact component={Login}/>
      <Route path='/register' exact component={Register}/>
      <Route path='/user/dashboard/:id' exact component={Dashboard}/> */}
    </Router>
  </AppLayout>
)
