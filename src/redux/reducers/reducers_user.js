import { USER_ACTIONS } from '../actions/actions_user.js'

const initialState = {
  items: [{
    "id": 0,
    "company_id": 0,
    "email": "giaunv@nustechnology.com",
    "age": 0,
    "gender": "male",
    "position": "developer",
    "projects": [
      {
        "id": 0,
        "name": "Tiki",
        "company_id": 0
      }
    ]
  }
  ], currentUser: {} }

const users = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACTIONS.REFRESH_USERS:
      return {
        ...state,
        items: action.payload.users
      }
    case USER_ACTIONS.FETCH_USER:
      return {
        ...state,
        currentUser: action.payload.currentUser
      }
    case USER_ACTIONS.REMOVE_USER:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.userId)
      }
    case USER_ACTIONS.ADD_NEW_USER:
      return {
        ...state,
        items: state.items.concat(action.payload.user)
      }
    case USER_ACTIONS.UPDATE_USER:
      return {
        ...state,
        items: state.items.map(item => {
          return item.id == action.payload.user.id ? action.payload.user : item
        })
      }
    default:
    return initialState
  }
}

export default users;
