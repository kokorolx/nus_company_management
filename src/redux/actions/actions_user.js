import { USERS_URL } from '../../configs/request_urls.js'
import axios from '../../configs/axios'

export const USER_ACTIONS = {
  REFRESH_USERS: 'REFRESH_USERS',
  FETCH_USER: 'FETCH_USER',
  REMOVE_USER: 'REMOVE_USER',
  ADD_NEW_USER: 'ADD_NEW_USER',
  UPDATE_USER: 'UPDATE_USER',
}

export function refreshUsers(users){
  return {
    type: USER_ACTIONS.REFRESH_USERS,
    payload: {
      users
    }
  }
}

export function updateUserDetails(user){
  return {
    type: USER_ACTIONS.FETCH_USER,
    payload: {
      currentUser: user
    }
  }
}

export function updateUser(user){
  return {
    type: USER_ACTIONS.UPDATE_USER,
    payload: {
      user
    }
  }
}

export function removeUser(userId){
  return {
    type: USER_ACTIONS.REMOVE_USER,
    payload: {
      userId
    }
  }
}

export function addUser(user) {
  return {
    type: USER_ACTIONS.ADD_NEW_USER,
    payload: {
      user
    }
  }
}

export const deleteUser = (userId) => {
  return (dispatch) => {
    return axios.delete(`${USERS_URL}/${userId}`).then(
      response => {
        dispatch(removeUser(userId));
      },
      error => {
        alert('There is an issue when delete this user!')
      }
    )
  }
}

export const addNewUser = (user) => {
  return (dispatch) => {
    return axios.post(USERS_URL, { user }).then(
      response => {
        dispatch(addUser(response.data))
      },
      error => {
        alert(error)
      }
    )
  }
}

export const fetchUsers = () => {
  return (dispatch) => {
    return axios.get(`${USERS_URL}`).then(
      response => {
        dispatch(refreshUsers(response.data));
      },
      error => {
        alert('There is an issue when fetch users')
      }
    )
  }
}

export const fetchUser = (userId) => {
  return (dispatch) => {
    return axios.get(`${USERS_URL}/${userId}`).then(
      response => {
        dispatch(updateUserDetails(response.data));
      },
      error => {
        alert(`There is an issue when fetch user ${userId}`)
      }
    )
  }
}

export const updateUserInformations = (user) => {
  return (dispatch) => {
    return axios.put(`${USERS_URL}/${user.id}`, { user }).then(
      response => {
        dispatch(updateUser(response.data))
      },
      error => {
        alert('There is an issue when update users')
      }
    )
  }
}
