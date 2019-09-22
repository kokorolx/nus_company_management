import { PROJECT_ACTIONS } from '../actions/actions_project.js'

const initialState = { items: [{company_id: null, id: null, name: null, users: []}], currentProject: {} }

const projects = (state = initialState, action) => {
  switch (action.type) {
    case PROJECT_ACTIONS.REFRESH_PROJECTS:
      return {
        ...state,
        items: action.payload.projects
      }
    case PROJECT_ACTIONS.UPDATE_PROJECT_DETAILS:
      return {
        ...state,
        currentProject: action.payload.currentProject
      }
    case PROJECT_ACTIONS.REMOVE_PROJECT:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.projectId)
      }
    default:
    return initialState
  }
}

export default projects;
