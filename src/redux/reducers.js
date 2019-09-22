import { combineReducers } from 'redux'
import projects from './reducers/reducers_project.js'
import users from './reducers/reducers_user.js'

export default combineReducers({
  projects,
  users
})
