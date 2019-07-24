import RestClient from '../RestClient'
import { USER_SERVER } from '../routes'

class UserClient extends RestClient {
  login (data) {
    return this.instance.post(
      USER_SERVER + '/login',
      {
        ...data
      }
    )
  }

  register (data) {
    return this.instance.post(
      USER_SERVER + '/register',
      {
        ...data
      }
    )
  }

  get (id) {
    return this.instance.get(
      USER_SERVER + '/id'
    )
  }

  all () {
    return this.instance.get(
      USER_SERVER
    )
  }
}

export default UserClient
