import {
  GET_ALBUM_FAILURE,
  GET_ALBUM_SUCCESS,
  GET_ALBUM_START
} from '../types/album_types'

const initialState = {
  loading: true,
  status: 'pending',
  error: '',
  album: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    // Get Users
    case GET_ALBUM_START :
      return {
        ...state,
        loading: true,
        error: '',
        status: GET_ALBUM_START,
        album: {}
      }
    case GET_ALBUM_SUCCESS :
      return {
        ...state,
        loading: false,
        error: '',
        status: GET_ALBUM_SUCCESS,
        album: action.payload
      }
    case GET_ALBUM_FAILURE :
      return {
        ...state,
        loading: false,
        status: GET_ALBUM_FAILURE,
        error: action.error,
        album: {}
      }
    default:
      return state
  }
}
