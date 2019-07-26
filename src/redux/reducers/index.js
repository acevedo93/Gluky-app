import { combineReducers } from 'redux'
import users from './user_reducer'
import posts from './post_reducer'
import albums from './album_reducer'

const rootReducer = combineReducers({
  users,
  posts,
  albums
})

export default rootReducer
