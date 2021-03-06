import { PROJECT_ACTIONS } from '../actions/actions_project.js'

const initialState = { items: [], currentProject: {} }

const projects = (state = initialState, action) => {
  switch (action.type) {
    case PROJECT_ACTIONS.REFRESH_PROJECTS:
      return {
        ...state,
        items: action.payload.projects
      }
    case PROJECT_ACTIONS.FETCH_PROJECT:
      return {
        ...state,
        currentProject: action.payload.currentProject
      }
    case PROJECT_ACTIONS.REMOVE_PROJECT:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.projectId)
      }
    case PROJECT_ACTIONS.ADD_NEW_PROJECT:
      return {
        ...state,
        items: state.items.concat(action.payload.project)
      }
    case PROJECT_ACTIONS.UPDATE_PROJECT:
      return {
        ...state,
        items: state.items.map(item => {
          return item.id == action.payload.project.id ? action.payload.project : item
        })
      }
    default:
      return state
  }
}

export default projects;
