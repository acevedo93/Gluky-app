import {
  GET_USERS_FAILURE,
  GET_USERS_SUCCESS,
  GET_USERS_START,
  LOGIN_USER_FAILURE,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  GET_ACCOUNT_START,
  GET_ACCOUNT_SUCCESS,
  GET_ACCOUNT_FAILURE,
  EDIT_ACCOUNT_FAILURE,
  EDIT_ACCOUNT_START,
  EDIT_ACCOUNT_SUCCESS,
  REMOVE_AUTHENTICATION
} from '../types/user_types'

const initialState = {
  loading: false,
  status: 'pending',
  error: '',
  token: '',
  user: {},
  users: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    // Get Users
    case GET_USERS_START :
      return {
        ...state,
        loading: true,
        error: '',
        status: 'get_user_pending',
        users: []
      }
    case GET_USERS_SUCCESS :
      return {
        ...state,
        loading: false,
        error: '',
        status: GET_USERS_SUCCESS,
        users: action.payload
      }
    case GET_USERS_FAILURE :
      return {
        ...state,
        loading: false,
        status: GET_USERS_FAILURE,
        error: action.error,
        users: []
      }
    // Login User
    case LOGIN_USER_START :
      return {
        ...state,
        loading: true,
        error: '',
        status: LOGIN_USER_START,
        user: {}
      }
    case LOGIN_USER_SUCCESS :
      window.localStorage.setItem('auth-token', action.payload.token)
      return {
        ...state,
        loading: false,
        error: '',
        status: LOGIN_USER_SUCCESS,
        token: action.payload
      }
    case LOGIN_USER_FAILURE :
      return {
        ...state,
        loading: false,
        status: LOGIN_USER_FAILURE,
        error: action.payload,
        user: {}
      }
    case GET_ACCOUNT_START :
      return {
        ...state,
        loading: true,
        error: '',
        status: GET_ACCOUNT_START,
        user: { }
      }
    case GET_ACCOUNT_SUCCESS :
      return {
        ...state,
        loading: false,
        status: GET_ACCOUNT_SUCCESS,
        error: '',
        user: action.payload
      }
    case GET_ACCOUNT_FAILURE :
      return {
        ...state,
        loading: false,
        status: GET_ACCOUNT_FAILURE,
        error: action.error,
        user: {}
      }
    case EDIT_ACCOUNT_START :
      return {
        ...state,
        loading: true,
        error: '',
        status: EDIT_ACCOUNT_START
      }
    case EDIT_ACCOUNT_SUCCESS :
      return {
        ...state,
        loading: false,
        status: EDIT_ACCOUNT_SUCCESS,
        error: '',
        user: action.payload
      }
    case EDIT_ACCOUNT_FAILURE :
      return {
        ...state,
        loading: false,
        status: EDIT_ACCOUNT_FAILURE,
        error: action.error,
        user: {}
      }
    case REMOVE_AUTHENTICATION: {
      window.localStorage.removeItem('auth-token')
      return {
        ...initialState
      }
    }
    default:
      return state
  }
}
