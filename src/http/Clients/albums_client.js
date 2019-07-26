import RestClient from '../RestClient'
import { ALBUMS_SERVER } from '../routes'

class AlbumsClient extends RestClient {
  getById (id) {
    return this.instance.get(
      `${ALBUMS_SERVER}/${id}`
    )
  }
}

export default AlbumsClient
