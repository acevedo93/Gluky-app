import AlbumsClient from '../../http/Clients/albums_client'
import {
  GET_ALBUM_START,
  GET_ALBUM_SUCCESS,
  GET_ALBUM_FAILURE

} from '../types/album_types'

export const getAlbum = (id) => {
  const start = () => ({
    type: GET_ALBUM_START
  })
  const success = (response) => ({
    type: GET_ALBUM_SUCCESS,
    payload: response.data.result
  })
  const failure = (error) => ({
    type: GET_ALBUM_FAILURE,
    payload: error.message
  })
  return (dispatch) => {
    dispatch(start())

    const albumsClient = new AlbumsClient()
    albumsClient.getById(id)
      .then(response => dispatch(success(response)))
      .catch(error => dispatch(failure(error)))
  }
}
