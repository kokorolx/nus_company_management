import { GET_PROJECTS } from '../actions/actions_project.js'

const initialState = { items: [{company_id: null, id: null, name: null, users: []}] }


const projects = (state = initialState, action) => {
  switch (action.type) {
    case GET_PROJECTS:
      return {
        ...state,
        items: action.payload.projects
      }
    default:
    return initialState
  }
}

export default projects;
