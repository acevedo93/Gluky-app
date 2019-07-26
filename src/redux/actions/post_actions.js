import PostClient from '../../http/Clients/posts_client'
import {
  GET_POSTS_START,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  CLEAR

} from '../types/post_types'

export const getPosts = () => {
  const start = () => ({
    type: GET_POSTS_START
  })
  const success = (response) => ({
    type: GET_POSTS_SUCCESS,
    payload: response.data.result
  })
  const failure = (error) => ({
    type: GET_POSTS_FAILURE,
    payload: error.message
  })
  return (dispatch) => {
    dispatch(start())

    const postClient = new PostClient()
    postClient.get()
      .then(response => dispatch(success(response)))
      .catch(error => dispatch(failure(error)))
  }
}

export const getPostsByAlbumId = (id) => {
  const start = () => ({
    type: GET_POSTS_START
  })
  const success = (response) => ({
    type: GET_POSTS_SUCCESS,
    payload: response.data.result
  })
  const failure = (error) => ({
    type: GET_POSTS_FAILURE,
    payload: error.message
  })
  return (dispatch) => {
    dispatch(start())

    const postClient = new PostClient()
    postClient.getById(id)
      .then(response => dispatch(success(response)))
      .catch(error => dispatch(failure(error)))
  }
}

export const clearPosts = () => dispatch => dispatch({
  type: CLEAR
})
