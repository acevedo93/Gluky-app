import UserClient from '../../http/Clients/user_client'
import {
  GET_USERS_START,
  GET_USERS_SUCCESS,
  GET_USERS_FAILURE
} from '../types/user_types'

export const getUsers = () => {
  const start = () => ({
    type: GET_USERS_START
  })
  const success = (response) => ({
    type: GET_USERS_SUCCESS,
    payload: response.data
  })
  const failure = (error) => ({
    type: GET_USERS_FAILURE,
    payload: error.message
  })
  return (dispatch) => {
    dispatch(start)

    const userClient = new UserClient()
    userClient.all()
      .then(response => dispatch(success(response)))
      .catch(error => dispatch(failure(error)))
  }
}
