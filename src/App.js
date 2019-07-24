import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import { GlobalStyles } from './styles/GlobalStyles'
import { AppRoutes } from './routes/App.routes'

export const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <AppRoutes />
  </Provider>
)
