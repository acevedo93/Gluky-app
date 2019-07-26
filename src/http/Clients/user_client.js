import RestClient from '../RestClient'
import { USER_SERVER } from '../routes'

class UserClient extends RestClient {
  // login (data) {
  //   return this.instance.post(
  //     USER_SERVER + '/login',
  //     {
  //       ...data
  //     }
  //   )
  // }

  get (id) {
    return this.instance.get(
      `${USER_SERVER}/${id}`
    )
  }

  edit (data) {
    return this.instance.put(
      USER_SERVER + '/1640',
      {
        ...data
      }
    )
  }

  getAll () {
    return this.instance.get(
      `${USER_SERVER}`
    )
  }
}

export default UserClient
