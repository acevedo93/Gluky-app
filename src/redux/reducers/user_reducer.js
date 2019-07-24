import {
  GET_USERS_FAILURE,
  GET_USERS_SUCCESS,
  GET_USERS_START
} from '../types/user_types'

const initialState = {
  loader: false,
  status: 'pending',
  error: '',
  isLogin: false,
  onRegister: {},
  user: {},
  users: []
}

export default (state = { initialState }, action) => {
  switch (action.type) {
    // Get Users
    case GET_USERS_START :
      return {
        ...state,
        loader: true,
        error: '',
        status: 'get_user_pending',
        users: []
      }
    case GET_USERS_SUCCESS :
      return {
        ...state,
        loader: false,
        error: '',
        status: GET_USERS_SUCCESS,
        users: action.payload
      }
    case GET_USERS_FAILURE :
      return {
        ...state,
        loader: false,
        status: GET_USERS_FAILURE,
        error: action.error,
        users: []
      }
    default:
      return state
  }
}
