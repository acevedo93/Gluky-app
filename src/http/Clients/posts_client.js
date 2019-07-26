import RestClient from '../RestClient'
import { PHOTOS_SERVER } from '../routes'

class PostClient extends RestClient {
  get () {
    return this.instance.get(
      PHOTOS_SERVER
    )
  }

  getById (id) {
    return this.instance.get(
      `${PHOTOS_SERVER}`,
      {
        params: { album_id: id }
      }
    )
  }
}

export default PostClient
