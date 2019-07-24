import { createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'redux-promise'
import ReduxThunk from 'redux-thunk'

import Reducers from './reducers'

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
const createStoreWithMiddleware =
applyMiddleware(promiseMiddleware, ReduxThunk)(createStore)(Reducers, devTools)
export default createStoreWithMiddleware
