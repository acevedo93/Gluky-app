import {
  GET_POSTS_FAILURE,
  GET_POSTS_SUCCESS,
  GET_POSTS_START,
  CLEAR
} from '../types/post_types'

const initialState = {
  loading: false,
  status: 'pending',
  error: '',
  post: {},
  posts: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS_START :
      return {
        ...state,
        loading: true,
        error: '',
        status: GET_POSTS_START,
        posts: []
      }
    case GET_POSTS_SUCCESS :
      return {
        ...state,
        loading: false,
        error: '',
        status: GET_POSTS_SUCCESS,
        posts: action.payload
      }
    case GET_POSTS_FAILURE :
      return {
        ...state,
        loading: false,
        status: GET_POSTS_FAILURE,
        error: action.error,
        posts: []
      }
    case CLEAR :
      return {
        ...initialState
      }
    default:
      return state
  }
}
