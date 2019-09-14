export const GET_PROJECTS = 'GET_PROJECTS'

export function getProjects(projects){
  return {
    type: GET_PROJECTS,
    payload: {
      projects
    }
  }
}
