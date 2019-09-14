export const REFRESH_PROJECTS = 'REFRESH_PROJECTS'

export function refreshProjects(projects){
  return {
    type: REFRESH_PROJECTS,
    payload: {
      projects
    }
  }
}
