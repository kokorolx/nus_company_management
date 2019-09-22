import { PROJECT_ACTIONS } from '../actions/actions_project.js'

const initialState = { items: [{company_id: null, id: null, name: null, users: []}], projectDetails: {} }

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
        projectDetails: action.payload.project
      }
    default:
    return initialState
  }
}

export default projects;
