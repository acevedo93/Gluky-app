import UserClient from '../../http/Clients/user_client'
import {
  GET_ACCOUNT_START,
  GET_ACCOUNT_SUCCESS,
  GET_ACCOUNT_FAILURE,
  LOGIN_USER_START,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAILURE,
  EDIT_ACCOUNT_START,
  EDIT_ACCOUNT_SUCCESS,
  EDIT_ACCOUNT_FAILURE,
  GET_USERS_FAILURE,
  GET_USERS_START,
  GET_USERS_SUCCESS,
  REMOVE_AUTHENTICATION
} from '../types/user_types'

export const getMyProfile = () => {
  const start = () => ({
    type: GET_ACCOUNT_START
  })
  const success = (response) => ({
    type: GET_ACCOUNT_SUCCESS,
    payload: response.data.result
  })
  const failure = (error) => ({
    type: GET_ACCOUNT_FAILURE,
    payload: error.message
  })
  return (dispatch) => {
    dispatch(start())
    const userClient = new UserClient()
    userClient.get(1640)
      .then(response => dispatch(success(response)))
      .catch(error => dispatch(failure(error)))
  }
}

export const loginSimulation = (data) => {
  const start = () => ({
    type: LOGIN_USER_START
  })
  const success = (response) => ({
    type: LOGIN_USER_SUCCESS,
    payload: response
  })
  const failure = (error) => ({
    type: LOGIN_USER_FAILURE,
    payload: error
  })
  return (dispatch) => {
    dispatch(start())
    setTimeout(() => {
      if (data.user.toLowerCase() === 'acevedo123' && data.password == 'abc123') {
        return dispatch(success({
          token: 'Txh-3iiQXLvU6vmD0ffnBLeY4rPHGXxJ-a7n'
        }))
      }
      return dispatch(failure('usuario o contraseña incorrecta'))
    }, 3000)
  }
}

export const editAccount = (data) => {
  const start = () => ({
    type: EDIT_ACCOUNT_START
  })
  const success = (response) => ({
    type: EDIT_ACCOUNT_SUCCESS,
    payload: response.data.result
  })
  const failure = (error) => ({
    type: EDIT_ACCOUNT_FAILURE,
    payload: error.message
  })
  return (dispatch) => {
    dispatch(start())
    const userClient = new UserClient()
    userClient.edit(data)
      .then(response => dispatch(success(response)))
      .catch(error => dispatch(failure(error)))
  }
}
export const getFriends = () => {
  const start = () => ({
    type: GET_USERS_START
  })
  const success = (response) => ({
    type: GET_USERS_SUCCESS,
    payload: response.data.result
  })
  const failure = (error) => ({
    type: GET_USERS_FAILURE,
    payload: error.message
  })
  return (dispatch) => {
    dispatch(start())
    const userClient = new UserClient()
    userClient.getAll()
      .then(response => dispatch(success(response)))
      .catch(error => dispatch(failure(error)))
  }
}
export const removeAuthentication = () => (dispatch) => {
  dispatch({
    type: REMOVE_AUTHENTICATION
  })
  window.location.href = '/'
}
