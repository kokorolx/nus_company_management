export const PROJECT_ACTIONS = {
  REFRESH_PROJECTS: 'REFRESH_PROJECTS',
  UPDATE_PROJECT_DETAILS: 'UPDATE_PROJECT_DETAILS',
}

export function refreshProjects(projects){
  return {
    type: PROJECT_ACTIONS.REFRESH_PROJECTS,
    payload: {
      projects
    }
  }
}
export function updateProjectDetails(project){
  return {
    type: PROJECT_ACTIONS.UPDATE_PROJECT_DETAILS,
    payload: {
      project
    }
  }
}
